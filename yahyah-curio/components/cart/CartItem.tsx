'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types';
import { useCartStore } from '@/lib/cart-store';
import { formatPrice } from '@/lib/products';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();
  const { product, quantity } = item;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(product.id, newQuantity);
    }
  };

  return (
    <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-stone-100">
      {/* Product Image */}
      <Link
        href={`/shop/${product.id}`}
        className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-stone-100"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform"
          sizes="(max-width: 768px) 96px, 128px"
        />
      </Link>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between gap-4">
          <div className="min-w-0">
            <Link
              href={`/shop/${product.id}`}
              className="font-semibold text-stone-900 hover:text-amber-600 transition-colors line-clamp-1"
            >
              {product.name}
            </Link>
            <p className="text-sm text-stone-500 capitalize mt-1">
              {product.category.replace('-', ' ')}
            </p>
            {product.artisan && (
              <p className="text-xs text-stone-400 mt-1">By {product.artisan}</p>
            )}
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeItem(product.id)}
            className="text-stone-400 hover:text-red-500 transition-colors p-1"
            aria-label="Remove item"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>

        {/* Price & Quantity */}
        <div className="flex items-end justify-between mt-4">
          {/* Quantity Controls */}
          <div className="flex items-center border border-stone-200 rounded-lg">
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="p-2 hover:bg-stone-100 transition-colors rounded-l-lg"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center font-medium text-sm">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="p-2 hover:bg-stone-100 transition-colors rounded-r-lg"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-lg font-bold text-amber-600">
              {formatPrice(product.price * quantity)}
            </p>
            {quantity > 1 && (
              <p className="text-xs text-stone-500">
                {formatPrice(product.price)} each
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
