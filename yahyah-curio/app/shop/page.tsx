import { Metadata } from 'next';
import ShopClient from '@/components/shop/ShopClient';
import { products } from '@/lib/products';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yahyah.co.ke';

export const metadata: Metadata = {
  title: 'Shop African Art & Crafts — Authentic Handmade Pieces from Kenya',
  description: `Browse ${products.length}+ authentic African art pieces online. Maasai jewelry, wood carvings, soapstone chess sets, decorative plates and more. All handcrafted in Kenya by skilled artisans. M-Pesa accepted. Worldwide shipping from Nairobi.`,
  alternates: { canonical: '/shop' },
  openGraph: {
    title: 'Shop African Art & Crafts | YAHYAH Curio Shop',
    description: `Discover ${products.length}+ authentic handcrafted African art pieces from Kenya. Maasai jewelry, wood carvings, soapstone chess sets and more. M-Pesa accepted.`,
    url: '/shop',
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Shop African Art & Crafts — YAHYAH Curio Shop'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shop African Art & Crafts | YAHYAH Curio Shop',
    description: `Browse authentic African art from Kenya. Maasai jewelry, wood carvings, soapstone chess sets and more. M-Pesa accepted. Worldwide shipping.`,
    images: [`${SITE_URL}/images/og-image.jpg`]
  }
};

export default function ShopPage() {
  return <ShopClient />;
}
