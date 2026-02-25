# YAHYAH Curio Shop

An e-commerce website for authentic African art and crafts, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Product Catalog**: Browse 20+ authentic African crafts across 6 categories
- **Shopping Cart**: Add items to cart with persistent storage (Zustand + localStorage)
- **Email-based Orders**: Submit orders via EmailJS or WhatsApp
- **Responsive Design**: Mobile-first design that works on all devices
- **African-inspired Theme**: Warm amber and earth tone color palette

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand with persist middleware
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod validation
- **Email Service**: EmailJS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/yahyah-curio.git
cd yahyah-curio
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.local.example .env.local
```

4. Update `.env.local` with your configuration:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_SITE_URL=https://yahyahcurio.co.ke
NEXT_PUBLIC_BUSINESS_EMAIL=orders@yahyahcurio.co.ke
NEXT_PUBLIC_BUSINESS_PHONE=+254700000000
NEXT_PUBLIC_WHATSAPP_NUMBER=254700000000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
yahyah-curio/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── shop/              # Shop pages
│   │   ├── page.tsx       # All products
│   │   └── [id]/          # Product detail
│   ├── categories/        # Category pages
│   │   ├── page.tsx       # All categories
│   │   └── [category]/    # Category products
│   ├── cart/              # Shopping cart
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/
│   ├── layout/            # Header, Footer
│   ├── home/              # Homepage sections
│   ├── products/          # Product components
│   ├── cart/              # Cart components
│   └── ui/                # Reusable UI components
├── lib/
│   ├── products.ts        # Product data & utilities
│   ├── cart-store.ts      # Cart state management
│   ├── email-service.ts   # EmailJS integration
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript interfaces
└── public/
    └── images/            # Static images
```

## EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service (Gmail recommended)
3. Create an email template with these variables:
   - `{{customer_name}}`
   - `{{customer_email}}`
   - `{{customer_phone}}`
   - `{{delivery_address}}`
   - `{{items_list}}`
   - `{{total_amount}}`
   - `{{additional_notes}}`
   - `{{order_date}}`
4. Copy your Service ID, Template ID, and Public Key to `.env.local`

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Truehost cPanel

1. Build the standalone output:
```bash
npm run build
```

2. Upload these files to your cPanel:
   - `.next/standalone/` contents
   - `.next/static/` → `.next/static/`
   - `public/` folder
   - `server.js`
   - `package.json`

3. In cPanel Node.js App:
   - Set Node.js version to 18.x+
   - Application mode: Production
   - Startup file: `server.js`

4. Install dependencies and restart the app.

## Adding Products

Edit `lib/products.ts` to add new products:

```typescript
{
  id: 'prod-XXX',
  name: 'Product Name',
  description: 'Product description...',
  price: 5000,
  category: 'jewelry', // jewelry, wood-carvings, wall-art, textiles, pottery, baskets
  images: ['https://example.com/image.jpg'],
  inStock: true,
  featured: false,
  materials: ['Material 1', 'Material 2'],
  artisan: 'Artisan Name',
  origin: 'Location, Kenya'
}
```

## How Orders Work

1. Customer browses products and adds to cart
2. Customer fills order form with contact details
3. Order is sent via EmailJS or WhatsApp
4. Shop owner receives order details
5. Owner contacts customer to arrange payment (M-Pesa/Card)
6. Product is shipped after payment confirmation

## License

This project is proprietary software for YAHYAH Curio Shop.

## Support

For technical support, contact the developer.
