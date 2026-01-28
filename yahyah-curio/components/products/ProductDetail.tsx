'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Heart,
  Share2,
  ChevronLeft,
  Minus,
  Plus,
  Truck,
  Shield,
  RotateCcw,
  MapPin
} from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/lib/cart-store';
import { formatPrice } from '@/lib/products';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setTimeout(() => setIsAdding(false), 1000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-stone-500">
          <li>
            <Link href="/" className="hover:text-amber-600 transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/shop" className="hover:text-amber-600 transition-colors">
              Shop
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href={`/categories/${product.category}`}
              className="hover:text-amber-600 transition-colors capitalize"
            >
              {product.category.replace('-', ' ')}
            </Link>
          </li>
          <li>/</li>
          <li className="text-stone-900 font-medium truncate">{product.name}</li>
        </ol>
      </nav>

      {/* Back Button (Mobile) */}
      <Link
        href="/shop"
        className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-600 mb-6 md:hidden"
      >
        <ChevronLeft className="w-5 h-5" />
        Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          {/* Main Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-stone-100">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {product.originalPrice && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                {discount}% OFF
              </div>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-amber-600 ring-2 ring-amber-200'
                      : 'border-transparent hover:border-stone-300'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Category */}
          <p className="text-sm text-amber-600 font-medium uppercase tracking-wider">
            {product.category.replace('-', ' ')}
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900">
            {product.name}
          </h1>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <p className="text-3xl font-bold text-amber-600">
              {formatPrice(product.price)}
            </p>
            {product.originalPrice && (
              <p className="text-xl text-stone-400 line-through">
                {formatPrice(product.originalPrice)}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-stone-600 leading-relaxed text-lg">
            {product.description}
          </p>

          {/* Product Details */}
          <div className="border-t border-b border-stone-200 py-6 space-y-4">
            {product.materials && (
              <div className="flex gap-2">
                <span className="text-stone-500 min-w-[100px]">Materials:</span>
                <span className="text-stone-900">{product.materials.join(', ')}</span>
              </div>
            )}
            {product.dimensions && (
              <div className="flex gap-2">
                <span className="text-stone-500 min-w-[100px]">Dimensions:</span>
                <span className="text-stone-900">{product.dimensions}</span>
              </div>
            )}
            {product.weight && (
              <div className="flex gap-2">
                <span className="text-stone-500 min-w-[100px]">Weight:</span>
                <span className="text-stone-900">{product.weight}</span>
              </div>
            )}
            {product.artisan && (
              <div className="flex gap-2">
                <span className="text-stone-500 min-w-[100px]">Artisan:</span>
                <span className="text-stone-900">{product.artisan}</span>
              </div>
            )}
            {product.origin && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span className="text-stone-900">{product.origin}</span>
              </div>
            )}
          </div>

          {/* Quantity & Add to Cart */}
          {product.inStock ? (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-stone-600">Quantity:</span>
                <div className="flex items-center border border-stone-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-stone-100 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-stone-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 rounded-xl font-semibold text-lg transition-all ${
                    isAdding
                      ? 'bg-green-500 text-white'
                      : 'bg-amber-600 hover:bg-amber-700 text-white'
                  }`}
                >
                  <ShoppingCart className="w-6 h-6" />
                  {isAdding ? 'Added to Cart!' : 'Add to Cart'}
                </button>

                <button
                  className="p-4 border border-stone-300 rounded-xl hover:border-amber-600 hover:text-amber-600 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-6 h-6" />
                </button>

                <button
                  className="p-4 border border-stone-300 rounded-xl hover:border-amber-600 hover:text-amber-600 transition-colors"
                  aria-label="Share product"
                >
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-stone-100 rounded-xl p-6 text-center">
              <p className="text-stone-600 font-semibold text-lg">
                This item is currently out of stock
              </p>
              <p className="text-stone-500 mt-2">
                Contact us to be notified when it&apos;s available again.
              </p>
            </div>
          )}

          {/* Shipping Info */}
          <div className="bg-stone-50 rounded-xl p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-stone-900">Free Shipping</p>
                <p className="text-sm text-stone-500">
                  On orders over KES 10,000 within Kenya
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-stone-900">Authenticity Guaranteed</p>
                <p className="text-sm text-stone-500">
                  Every piece verified by our artisan network
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <RotateCcw className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-stone-900">Easy Returns</p>
                <p className="text-sm text-stone-500">
                  7-day return policy for your peace of mind
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
