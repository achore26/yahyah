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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yahyah.co.ke';

export const metadata: Metadata = {
  title: {
    default: 'YAHYAH Curio Shop | Authentic African Art & Crafts — Nairobi, Kenya',
    template: '%s | YAHYAH Curio Shop'
  },
  description:
    'Shop authentic African art, handcrafted curios and gifts from Nairobi, Kenya. Maasai jewelry, wood carvings, soapstone chess sets, decorative plates and more. M-Pesa accepted. Worldwide shipping.',
  keywords: [
    'African art Kenya',
    'curio shop Nairobi',
    'African crafts online',
    'Maasai jewelry Kenya',
    'handmade African jewelry',
    'wood carvings Kenya',
    'soapstone chess set Kenya',
    'African home decor',
    'Kenyan souvenirs',
    'authentic African art',
    'African gifts online',
    'Kikoy wrap Kenya',
    'decorative soapstone plate',
    'African wall art',
    'Nairobi curio shop',
    'buy African crafts online',
    'handcrafted African gifts',
    'YAHYAH Curio'
  ],
  authors: [{ name: 'YAHYAH Curio Shop', url: SITE_URL }],
  creator: 'YAHYAH Curio Shop',
  publisher: 'YAHYAH Curio Shop',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: '/',
    siteName: 'YAHYAH Curio Shop',
    title: 'YAHYAH Curio Shop | Authentic African Art & Crafts — Nairobi, Kenya',
    description:
      'Shop authentic African art, handcrafted curios and gifts from Nairobi, Kenya. Maasai jewelry, wood carvings, soapstone chess sets and more. M-Pesa accepted.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YAHYAH Curio Shop — Authentic African Art & Crafts from Nairobi, Kenya'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YAHYAH Curio Shop | Authentic African Art & Crafts',
    description:
      'Authentic African art, Maasai jewelry, wood carvings and curios from Nairobi, Kenya. M-Pesa accepted. Worldwide shipping.',
    images: ['/images/og-image.jpg']
  },
  verification: {
    google: '90cp-iqFB3jTnot9xV2SHlWYnoREz8xR7xoLIGy8LO4'
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

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  '@id': `${SITE_URL}/#business`,
  name: 'YAHYAH Curio Shop',
  description:
    'Authentic African art and handcrafted curios from Nairobi, Kenya. Specialising in Maasai jewelry, wood carvings, soapstone chess sets, decorative plates and African gifts.',
  url: SITE_URL,
  telephone: '+254118501949',
  email: 'info@yahyah.co.ke',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi County',
    addressCountry: 'KE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -1.2921,
    longitude: 36.8219
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00'
  },
  image: `${SITE_URL}/images/og-image.jpg`,
  logo: `${SITE_URL}/images/logo/logo.png`,
  priceRange: 'KES 1,500 – KES 15,000',
  currenciesAccepted: 'KES',
  paymentAccepted: 'M-Pesa, Cash, Bank Transfer',
  hasMap: 'https://maps.google.com/?q=Nairobi,Kenya',
  areaServed: 'Worldwide',
  servesCuisine: null
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'YAHYAH Curio Shop',
  url: SITE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/shop?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
