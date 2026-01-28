import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Users, Globe, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about YAHYAH Curio Shop - our mission to share authentic African art and support local artisans across Kenya and Africa.'
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px]">
        <Image
          src="/images/hero/about-hero.jpg"
          alt="African artisan at work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Our Story
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl">
              Connecting the world with authentic African artistry and the
              skilled hands that create it.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-6">
                Celebrating African Heritage Through Art
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  YAHYAH Curio Shop was founded with a simple yet powerful
                  vision: to share the rich artistic heritage of Africa with the
                  world while providing sustainable livelihoods for local
                  artisans.
                </p>
                <p>
                  Every piece in our collection tells a story - of tradition, of
                  skill, of the hands that crafted it. We work directly with
                  artisans across Kenya and beyond, ensuring fair compensation
                  and preserving time-honored techniques.
                </p>
                <p>
                  When you purchase from YAHYAH, you&apos;re not just buying a
                  product - you&apos;re supporting communities, preserving
                  cultural heritage, and bringing a piece of Africa&apos;s soul
                  into your home.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/artisan-work.jpg"
                alt="Artisan crafting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-bold text-xl text-stone-900 mb-3">
                Authenticity
              </h3>
              <p className="text-stone-600">
                Every piece is genuinely handcrafted by skilled African artisans
                using traditional methods.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-bold text-xl text-stone-900 mb-3">
                Fair Trade
              </h3>
              <p className="text-stone-600">
                We ensure fair wages and working conditions for all artisans in
                our network.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-bold text-xl text-stone-900 mb-3">
                Cultural Preservation
              </h3>
              <p className="text-stone-600">
                We help preserve and promote traditional African art forms for
                future generations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-bold text-xl text-stone-900 mb-3" id="sustainability">
                Sustainability
              </h3>
              <p className="text-stone-600">
                We prioritize eco-friendly materials and sustainable practices
                in all our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Artisans Section */}
      <section className="py-16 md:py-24" id="artisans">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/artisans-group.jpg"
                alt="Group of African artisans"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
                The Creators
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-2 mb-6">
                Meet Our Artisans
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Behind every piece is a talented artisan with years of
                  experience and a passion for their craft. Our network includes
                  over 50 skilled craftspeople from various communities across
                  Kenya.
                </p>
                <p>
                  From the Maasai beadworkers of Kajiado to the wood carvers of
                  Wamunyu, each artisan brings unique skills and cultural
                  traditions to their work.
                </p>
                <p>
                  We&apos;re proud to share their stories and help them reach
                  customers worldwide who appreciate authentic, handmade African
                  art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-amber-100 max-w-2xl mx-auto mb-8 text-lg">
            Discover our collection of authentic African art and bring a piece
            of African heritage into your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-block bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
