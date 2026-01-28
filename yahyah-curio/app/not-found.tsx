import Link from 'next/link';
import { Home, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-9xl font-bold text-amber-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-stone-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-stone-600 mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for seems to have wandered off into
          the savanna. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 border-2 border-amber-600 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            Browse Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
