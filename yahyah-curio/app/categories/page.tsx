import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { categories, getProductsByCategory } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shop by Category',
  description:
    'Browse our collection of authentic African art and crafts organized by category. Find jewelry, wood carvings, textiles, pottery, and more.'
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-amber-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Shop by Category
          </h1>
          <p className="text-center text-amber-100 max-w-2xl mx-auto text-lg">
            Explore our diverse collection of African art and crafts, organized
            by category for easy browsing.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => {
            const productCount = getProductsByCategory(category.id).length;

            return (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {category.name}
                    </h2>
                    <p className="text-amber-300 text-sm">
                      {productCount} {productCount === 1 ? 'product' : 'products'}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-stone-600 mb-4">{category.description}</p>
                  <span className="inline-flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
                    Browse Collection
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
