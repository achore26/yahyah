'use client';

import { useCartStore } from '@/lib/cart-store';
import { formatPrice } from '@/lib/products';
import { ShoppingBag, Truck, Shield } from 'lucide-react';

export default function CartSummary() {
  const items = useCartStore(state => state.items);
  const totalPrice = useCartStore(state => state.getTotalPrice());
  const totalItems = useCartStore(state => state.getTotalItems());

  const shippingThreshold = 10000;
  const freeShipping = totalPrice >= shippingThreshold;
  const amountToFreeShipping = shippingThreshold - totalPrice;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-6">
      <h2 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-2">
        <ShoppingBag className="w-5 h-5" />
        Order Summary
      </h2>

      {/* Items Summary */}
      <div className="space-y-3 mb-6">
        {items.map(item => (
          <div key={item.product.id} className="flex justify-between text-sm">
            <span className="text-stone-600">
              {item.product.name} x {item.quantity}
            </span>
            <span className="font-medium text-stone-900">
              {formatPrice(item.product.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-stone-200 pt-4 space-y-3">
        {/* Subtotal */}
        <div className="flex justify-between">
          <span className="text-stone-600">Subtotal ({totalItems} items)</span>
          <span className="font-medium text-stone-900">{formatPrice(totalPrice)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between">
          <span className="text-stone-600">Shipping</span>
          {freeShipping ? (
            <span className="text-green-600 font-medium">FREE</span>
          ) : (
            <span className="text-stone-500 text-sm">Calculated at checkout</span>
          )}
        </div>

        {/* Free Shipping Progress */}
        {!freeShipping && (
          <div className="bg-amber-50 rounded-lg p-3 mt-3">
            <div className="flex items-center gap-2 mb-2">
              <Truck className="w-4 h-4 text-amber-600" />
              <span className="text-sm text-amber-800">
                Add {formatPrice(amountToFreeShipping)} more for free shipping!
              </span>
            </div>
            <div className="w-full bg-amber-200 rounded-full h-2">
              <div
                className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min((totalPrice / shippingThreshold) * 100, 100)}%`
                }}
              />
            </div>
          </div>
        )}

        {/* Total */}
        <div className="flex justify-between border-t border-stone-200 pt-4 mt-4">
          <span className="text-lg font-bold text-stone-900">Total</span>
          <span className="text-2xl font-bold text-amber-600">
            {formatPrice(totalPrice)}
          </span>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="mt-6 flex items-center gap-2 text-sm text-stone-500">
        <Shield className="w-4 h-4 text-green-600" />
        <span>Secure checkout powered by M-Pesa & Card payments</span>
      </div>
    </div>
  );
}
