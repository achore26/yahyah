import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ProductDetail from '@/components/products/ProductDetail';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductById, getProductsByCategory, products } from '@/lib/products';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yahyah.co.ke';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map(product => ({ id: product.id }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) return { title: 'Product Not Found' };

  const categoryLabel = product.category
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  const artisanNote = product.artisan ? ` Handcrafted by ${product.artisan}.` : '';
  const originNote = product.origin ? ` Made in ${product.origin}.` : '';

  return {
    title: `${product.name} — Authentic African ${categoryLabel} from Kenya`,
    description: `${product.description}${artisanNote}${originNote} Price: KES ${product.price.toLocaleString()}. Buy online from YAHYAH Curio Shop, Nairobi. M-Pesa accepted. Worldwide shipping.`,
    alternates: { canonical: `/shop/${id}` },
    openGraph: {
      title: `${product.name} | YAHYAH Curio Shop`,
      description: `${product.description} KES ${product.price.toLocaleString()}. Authentic African ${categoryLabel.toLowerCase()} from Nairobi, Kenya.`,
      url: `/shop/${id}`,
      type: 'website',
      images: product.images.map((img, i) => ({
        url: img.startsWith('http') ? img : `${SITE_URL}${img}`,
        width: 1200,
        height: 1200,
        alt: i === 0 ? product.name : `${product.name} — view ${i + 1}`
      }))
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | YAHYAH Curio Shop`,
      description: `${product.description.slice(0, 140)}… KES ${product.price.toLocaleString()}.`,
      images: [product.images[0]]
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}/shop/${product.id}`,
    name: product.name,
    description: product.description,
    image: product.images.map(img => img.startsWith('http') ? img : `${SITE_URL}${img}`),
    sku: product.id,
    brand: { '@type': 'Brand', name: 'YAHYAH Curio Shop' },
    ...(product.materials && { material: product.materials.join(', ') }),
    ...(product.origin && { countryOfOrigin: product.origin }),
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'KES',
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      url: `${SITE_URL}/shop/${product.id}`,
      seller: { '@type': 'Organization', name: 'YAHYAH Curio Shop', url: SITE_URL }
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: `${SITE_URL}/shop` },
      { '@type': 'ListItem', position: 3, name: product.name, item: `${SITE_URL}/shop/${product.id}` }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ProductDetail product={product} />
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8">You May Also Like</h2>
            <ProductGrid products={relatedProducts} showEmpty={false} />
          </div>
        </section>
      )}
    </>
  );
}
