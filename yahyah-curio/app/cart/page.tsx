'use client';

import { useCartStore } from '@/lib/cart-store';
import CartItem from '@/components/cart/CartItem';
import CartSummary from '@/components/cart/CartSummary';
import EmailCartForm from '@/components/cart/EmailCartForm';
import Link from 'next/link';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore(state => state.items);
  const clearCart = useCartStore(state => state.clearCart);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="animate-pulse">Loading cart...</div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="w-24 h-24 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-stone-400" />
          </div>
          <h1 className="text-3xl font-bold text-stone-900 mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-stone-600 mb-8 max-w-md mx-auto">
            Looks like you haven&apos;t added any beautiful African crafts to
            your cart yet. Start exploring our collection!
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-amber-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Shopping Cart</h1>
          <p className="text-amber-100 mt-2">
            Review your items and complete your order
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-stone-900">
                Cart Items ({items.length})
              </h2>
              <button
                onClick={clearCart}
                className="text-sm text-stone-500 hover:text-red-600 transition-colors"
              >
                Clear Cart
              </button>
            </div>

            {items.map(item => (
              <CartItem key={item.product.id} item={item} />
            ))}

            {/* Continue Shopping */}
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium mt-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>

          {/* Cart Summary & Checkout Form */}
          <div className="space-y-6">
            <CartSummary />
            <EmailCartForm />
          </div>
        </div>
      </div>
    </div>
  );
}
