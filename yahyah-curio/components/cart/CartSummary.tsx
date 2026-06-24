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

      {/* M-Pesa Payment Instructions */}
      <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold">M</span>
          </div>
          <h3 className="font-bold text-green-900 text-sm">Pay via M-Pesa</h3>
        </div>
        <div className="bg-white border border-green-200 rounded-lg p-3 mb-3 text-center">
          <p className="text-xs text-stone-500 uppercase tracking-wide mb-1">Till Number</p>
          <p className="text-3xl font-bold text-green-700 tracking-widest">3085757</p>
          <p className="text-xs text-stone-500 mt-1">YAHYAH Curio Shop</p>
        </div>
        <ol className="text-xs text-green-800 space-y-1">
          <li className="flex gap-2"><span className="font-bold">1.</span> Go to M-Pesa on your phone</li>
          <li className="flex gap-2"><span className="font-bold">2.</span> Select <strong>Lipa na M-Pesa</strong></li>
          <li className="flex gap-2"><span className="font-bold">3.</span> Select <strong>Buy Goods &amp; Services</strong></li>
          <li className="flex gap-2"><span className="font-bold">4.</span> Enter Till No. <strong>3085757</strong></li>
          <li className="flex gap-2"><span className="font-bold">5.</span> Enter amount: <strong>{formatPrice(totalPrice)}</strong></li>
          <li className="flex gap-2"><span className="font-bold">6.</span> Enter your PIN and confirm</li>
        </ol>
        <p className="text-xs text-green-700 mt-3 bg-green-100 rounded p-2">
          After payment, include your M-Pesa confirmation code in the order notes below.
        </p>
      </div>

      {/* Trust Badge */}
      <div className="mt-4 flex items-center gap-2 text-sm text-stone-500">
        <Shield className="w-4 h-4 text-green-600" />
        <span>Secure checkout — M-Pesa Till: 3085757</span>
      </div>
    </div>
  );
}
