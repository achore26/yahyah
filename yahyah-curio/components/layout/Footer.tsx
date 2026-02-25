import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo/logo.png"
                alt="YAHYAH Curio Shop"
                width={180}
                height={56}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Authentic African art and crafts. Handcrafted with love and
              tradition, bringing Africa&apos;s rich heritage to your home.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/shop"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/jewelry"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Jewelry
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/wood-carvings"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Wood Carvings
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/wall-art"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Wall Art
                </Link>
              </li>
              <li>
                <Link
                  href="/categories/textiles"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Textiles
                </Link>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">About</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/about#artisans"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Our Artisans
                </Link>
              </li>
              <li>
                <Link
                  href="/about#sustainability"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-400">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-stone-400">+254 700 000 000</p>
                  <p className="text-stone-500 text-xs">Mon-Sat, 9am-6pm EAT</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-stone-400">orders@yahyahcurio.co.ke</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-stone-400">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500">
            &copy; {currentYear} YAHYAH Curio Shop. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-stone-500">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
