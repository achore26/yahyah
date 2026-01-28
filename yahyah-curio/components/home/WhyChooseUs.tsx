'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Truck, Users } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Authentic Craftsmanship',
    description:
      'Every piece is handcrafted by skilled African artisans using traditional techniques passed down through generations.'
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description:
      'We personally inspect each item to ensure it meets our high standards of quality and authenticity.'
  },
  {
    icon: Truck,
    title: 'Worldwide Shipping',
    description:
      'We ship to over 20 countries with secure packaging to ensure your treasures arrive safely.'
  },
  {
    icon: Users,
    title: 'Supporting Communities',
    description:
      'Your purchase directly supports local artisans and their communities across Kenya and Africa.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-stone-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-amber-400 font-medium text-sm uppercase tracking-wider mb-3"
          >
            Our Promise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          >
            Why Choose YAHYAH Curio?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 max-w-2xl mx-auto text-lg"
          >
            We&apos;re committed to bringing you the finest African art while
            supporting the communities that create it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 transition-colors transform group-hover:scale-110 duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-stone-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
