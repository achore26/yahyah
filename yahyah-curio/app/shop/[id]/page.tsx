import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ProductDetail from '@/components/products/ProductDetail';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductById, getProductsByCategory, products } from '@/lib/products';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map(product => ({
    id: product.id
  }));
}

export async function generateMetadata({
  params
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: 'Product Not Found'
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images.map(img => ({
        url: img,
        width: 800,
        height: 800,
        alt: product.name
      }))
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <ProductDetail product={product} />

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-stone-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8">
              You May Also Like
            </h2>
            <ProductGrid products={relatedProducts} showEmpty={false} />
          </div>
        </section>
      )}
    </>
  );
}
