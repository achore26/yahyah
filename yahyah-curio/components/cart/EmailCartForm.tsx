'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send, MessageCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/lib/cart-store';
import { sendCartEmail, generateWhatsAppMessage } from '@/lib/email-service';
import type { EmailCartData } from '@/types';

const formSchema = z.object({
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  customerEmail: z.string().email('Invalid email address'),
  customerPhone: z.string().min(10, 'Phone number must be at least 10 digits'),
  deliveryAddress: z.string().optional(),
  additionalNotes: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

export default function EmailCartForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const items = useCartStore(state => state.items);
  const totalPrice = useCartStore(state => state.getTotalPrice());
  const clearCart = useCartStore(state => state.clearCart);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');

    const emailData: EmailCartData = {
      ...data,
      items,
      totalAmount: totalPrice
    };

    const success = await sendCartEmail(emailData);

    if (success) {
      setSubmitSuccess(true);
      clearCart();
    } else {
      setSubmitError('Failed to send order. Please try WhatsApp option below.');
    }

    setIsSubmitting(false);
  };

  const handleWhatsAppSubmit = () => {
    const formData = getValues();
    const emailData: EmailCartData = {
      customerName: formData.customerName || 'Customer',
      customerEmail: formData.customerEmail || '',
      customerPhone: formData.customerPhone || '',
      deliveryAddress: formData.deliveryAddress,
      items,
      totalAmount: totalPrice,
      additionalNotes: formData.additionalNotes
    };

    const message = generateWhatsAppMessage(emailData);
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254700000000';
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  if (submitSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Order Submitted!</h3>
        <p className="text-green-700 mb-6">
          We&apos;ve received your order and will contact you shortly to confirm
          details and arrange payment.
        </p>
        <Link
          href="/shop"
          className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-6">
      <h2 className="text-xl font-bold text-stone-900 mb-6">
        Complete Your Order
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Customer Name */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('customerName')}
            type="text"
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            placeholder="John Doe"
          />
          {errors.customerName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.customerName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register('customerEmail')}
            type="email"
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
          {errors.customerEmail && (
            <p className="text-red-500 text-sm mt-1">
              {errors.customerEmail.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register('customerPhone')}
            type="tel"
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            placeholder="+254 700 000 000"
          />
          {errors.customerPhone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.customerPhone.message}
            </p>
          )}
        </div>

        {/* Delivery Address */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Delivery Address <span className="text-stone-400">(Optional)</span>
          </label>
          <textarea
            {...register('deliveryAddress')}
            rows={3}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
            placeholder="Street, City, Country"
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-2">
            Additional Notes <span className="text-stone-400">(Optional)</span>
          </label>
          <textarea
            {...register('additionalNotes')}
            rows={3}
            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
            placeholder="Any special requests or questions?"
          />
        </div>

        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
            {submitError}
          </div>
        )}

        {/* Submit Buttons */}
        <div className="space-y-3 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-amber-600 text-white py-4 rounded-lg font-semibold hover:bg-amber-700 disabled:bg-stone-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending Order...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Order via Email
              </>
            )}
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-stone-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-stone-500">or</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppSubmit}
            className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center gap-2 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            Order via WhatsApp
          </button>
        </div>

        <p className="text-sm text-stone-500 text-center mt-4">
          We&apos;ll contact you to confirm your order and arrange M-Pesa or card
          payment.
        </p>
      </form>
    </div>
  );
}
