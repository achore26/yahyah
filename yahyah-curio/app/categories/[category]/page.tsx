import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ProductGrid from '@/components/products/ProductGrid';
import {
  categories,
  getCategoryById,
  getProductsByCategory
} from '@/lib/products';
import { CategoryType } from '@/types';
import { ChevronLeft } from 'lucide-react';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map(category => ({
    category: category.id
  }));
}

export async function generateMetadata({
  params
}: CategoryPageProps): Promise<Metadata> {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId as CategoryType);

  if (!category) {
    return {
      title: 'Category Not Found'
    };
  }

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: `${category.name} - YAHYAH Curio Shop`,
      description: category.description,
      images: [
        {
          url: category.image,
          width: 1200,
          height: 630,
          alt: category.name
        }
      ]
    }
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId as CategoryType);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.id);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto px-4 pb-8">
            <Link
              href="/categories"
              className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 mb-4 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              All Categories
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
              {category.name}
            </h1>
            <p className="text-amber-100 text-lg max-w-2xl">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <p className="text-stone-600">
            <span className="font-semibold text-stone-900">{products.length}</span>{' '}
            {products.length === 1 ? 'product' : 'products'} in this category
          </p>
        </div>

        <ProductGrid products={products} />

        {/* Browse Other Categories */}
        <div className="mt-16 pt-16 border-t border-stone-200">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">
            Browse Other Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories
              .filter(c => c.id !== category.id)
              .map(cat => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.id}`}
                  className="group relative h-32 rounded-xl overflow-hidden"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-semibold text-center px-2">
                      {cat.name}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
