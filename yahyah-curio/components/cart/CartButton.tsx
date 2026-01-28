'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/lib/cart-store';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartButton() {
  const [mounted, setMounted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const totalItems = useCartStore(state => state.getTotalItems());
  const items = useCartStore(state => state.items);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show notification when items change
  useEffect(() => {
    if (mounted && items.length > 0) {
      setShowNotification(true);
      const timer = setTimeout(() => setShowNotification(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [items.length, mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute bottom-full right-0 mb-2 bg-stone-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
          >
            Item added to cart!
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href="/cart"
        className="flex items-center justify-center w-16 h-16 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all relative group"
      >
        <ShoppingCart className="w-7 h-7 group-hover:scale-110 transition-transform" />
        {totalItems > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 bg-stone-900 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
          >
            {totalItems > 9 ? '9+' : totalItems}
          </motion.span>
        )}
      </Link>
    </div>
  );
}
