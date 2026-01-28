import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartButton from '@/components/cart/CartButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: {
    default: 'YAHYAH Curio Shop | Authentic African Art & Crafts',
    template: '%s | YAHYAH Curio Shop'
  },
  description:
    'Discover authentic African art and handcrafted curios. Shop traditional jewelry, wood carvings, textiles, and more from skilled African artisans.',
  keywords: [
    'African art',
    'African crafts',
    'handmade jewelry',
    'wood carvings',
    'Kenyan crafts',
    'Maasai beads',
    'African home decor',
    'curio shop',
    'authentic African',
    'artisan crafts'
  ],
  authors: [{ name: 'YAHYAH Curio Shop' }],
  creator: 'YAHYAH Curio Shop',
  publisher: 'YAHYAH Curio Shop',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://yahyahcurio.co.ke'
  ),
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: '/',
    siteName: 'YAHYAH Curio Shop',
    title: 'YAHYAH Curio Shop | Authentic African Art & Crafts',
    description:
      'Discover authentic African art and handcrafted curios. Shop traditional jewelry, wood carvings, textiles, and more from skilled African artisans.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YAHYAH Curio Shop - Authentic African Art & Crafts'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YAHYAH Curio Shop | Authentic African Art & Crafts',
    description:
      'Discover authentic African art and handcrafted curios from skilled artisans.',
    images: ['/images/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-stone-50 text-stone-900`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CartButton />
      </body>
    </html>
  );
}
