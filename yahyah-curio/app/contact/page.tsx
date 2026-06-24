'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setSubmitted(true);
    reset();
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254118501949';
    window.open(`https://wa.me/${whatsappNumber}?text=Hello! I have a question about YAHYAH Curio Shop.`, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <div className="bg-amber-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Contact Us
          </h1>
          <p className="text-center text-amber-100 max-w-2xl mx-auto text-lg">
            Have questions? We&apos;d love to hear from you. Reach out and
            we&apos;ll respond as soon as we can.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">Phone</h3>
                    <p className="text-stone-600">+254 118 501 949</p>
                    <p className="text-stone-600">0119 628 656</p>
                    <p className="text-sm text-stone-500">Mon-Sat, 9am-6pm EAT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">Email</h3>
                    <p className="text-stone-600">info@yahyah.co.ke</p>
                    <p className="text-sm text-stone-500">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">Location</h3>
                    <p className="text-stone-600">Nairobi, Kenya</p>
                    <p className="text-sm text-stone-500">By appointment only</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900">Business Hours</h3>
                    <p className="text-stone-600">Monday - Saturday</p>
                    <p className="text-sm text-stone-500">9:00 AM - 6:00 PM EAT</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
                className="w-full mt-8 bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-stone-600 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-amber-600 font-semibold hover:text-amber-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-stone-900 mb-6">
                    Send us a Message
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register('name')}
                          type="text"
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Phone Number{' '}
                          <span className="text-stone-400">(Optional)</span>
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="+254 700 000 000"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-2">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <input
                          {...register('subject')}
                          type="text"
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="How can we help?"
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.subject.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        {...register('message')}
                        rows={6}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 disabled:bg-stone-300 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 border border-stone-100">
                  <h3 className="font-semibold text-stone-900 mb-2">
                    How do I place an order?
                  </h3>
                  <p className="text-stone-600">
                    Simply browse our shop, add items to your cart, and fill out
                    the order form. We&apos;ll contact you to confirm details
                    and arrange payment via M-Pesa or card.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-stone-100">
                  <h3 className="font-semibold text-stone-900 mb-2">
                    Do you ship internationally?
                  </h3>
                  <p className="text-stone-600">
                    Yes! We ship to over 20 countries worldwide. Shipping costs
                    vary based on destination and will be confirmed when we
                    process your order.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-stone-100">
                  <h3 className="font-semibold text-stone-900 mb-2">
                    Are all products handmade?
                  </h3>
                  <p className="text-stone-600">
                    Yes, every item in our collection is handcrafted by skilled
                    African artisans. Each piece is unique and may have slight
                    variations that add to its character.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-stone-100">
                  <h3 className="font-semibold text-stone-900 mb-2">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-stone-600">
                    We accept M-Pesa (for Kenya), credit/debit cards, and bank
                    transfers. Payment details will be shared after order
                    confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
