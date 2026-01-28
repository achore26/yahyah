'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/lib/cart-store';
import { formatPrice } from '@/lib/products';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addItem(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link href={`/shop/${product.id}`}>
        <div className="relative h-56 md:h-64 overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {!product.inStock && (
              <span className="bg-stone-900/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                Out of Stock
              </span>
            )}
            {product.originalPrice && product.inStock && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                {discount}% OFF
              </span>
            )}
            {product.featured && product.inStock && (
              <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Featured
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-amber-50 transition-colors"
              title="Quick view"
            >
              <Eye className="w-5 h-5 text-stone-700" />
            </button>
            {product.inStock && (
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all ${
                  isAdding
                    ? 'bg-green-500 text-white'
                    : 'bg-amber-600 hover:bg-amber-700 text-white'
                }`}
                title="Add to cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Out of Stock Overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="bg-white/90 text-stone-900 px-6 py-2 rounded-lg font-semibold">
                Sold Out
              </span>
            </div>
          )}
        </div>

        <div className="p-4 md:p-5">
          {/* Category */}
          <p className="text-xs text-amber-600 font-medium uppercase tracking-wide mb-2">
            {product.category.replace('-', ' ')}
          </p>

          {/* Name */}
          <h3 className="font-semibold text-lg text-stone-900 mb-2 line-clamp-2 group-hover:text-amber-700 transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-stone-500 mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-bold text-amber-600">
                {formatPrice(product.price)}
              </p>
              {product.originalPrice && (
                <p className="text-sm text-stone-400 line-through">
                  {formatPrice(product.originalPrice)}
                </p>
              )}
            </div>

            {/* Mobile Add Button */}
            {product.inStock && (
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  isAdding
                    ? 'bg-green-500 text-white'
                    : 'bg-amber-600 hover:bg-amber-700 text-white'
                }`}
                title="Add to cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Artisan Info */}
          {product.artisan && (
            <p className="text-xs text-stone-400 mt-3">
              By {product.artisan}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
}
