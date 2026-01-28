import emailjs from '@emailjs/browser';
import { EmailCartData } from '@/types';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export const sendCartEmail = async (data: EmailCartData): Promise<boolean> => {
  try {
    // Format cart items for email
    const itemsList = data.items
      .map(
        item =>
          `${item.quantity}x ${item.product.name} - KES ${(item.product.price * item.quantity).toLocaleString()}`
      )
      .join('\n');

    const templateParams = {
      customer_name: data.customerName,
      customer_email: data.customerEmail,
      customer_phone: data.customerPhone,
      delivery_address: data.deliveryAddress || 'Not provided',
      items_list: itemsList,
      total_amount: `KES ${data.totalAmount.toLocaleString()}`,
      additional_notes: data.additionalNotes || 'None',
      order_date: new Date().toLocaleDateString('en-KE')
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return response.status === 200;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

// WhatsApp message generator
export const generateWhatsAppMessage = (data: EmailCartData): string => {
  const itemsList = data.items
    .map(
      item =>
        `${item.quantity}x ${item.product.name} - KES ${(item.product.price * item.quantity).toLocaleString()}`
    )
    .join('%0A');

  return (
    `Hello YAHYAH Curio Shop!%0A%0A` +
    `I would like to place an order:%0A%0A` +
    `*Customer Details:*%0A` +
    `Name: ${data.customerName}%0A` +
    `Phone: ${data.customerPhone}%0A` +
    `Email: ${data.customerEmail}%0A%0A` +
    `*Order Items:*%0A${itemsList}%0A%0A` +
    `*Total: KES ${data.totalAmount.toLocaleString()}*%0A%0A` +
    `${data.additionalNotes ? `Notes: ${data.additionalNotes}` : ''}`
  );
};

// Initialize EmailJS
export const initEmailJS = () => {
  if (PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY);
  }
};
