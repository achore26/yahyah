export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: CategoryType;
  images: string[];
  inStock: boolean;
  featured: boolean;
  materials?: string[];
  dimensions?: string;
  weight?: string;
  artisan?: string;
  origin?: string;
}

export type CategoryType =
  | 'jewelry'
  | 'wood-carvings'
  | 'wall-art'
  | 'textiles'
  | 'pottery'
  | 'baskets'
  | 'stone-arts';

export interface Category {
  id: CategoryType;
  name: string;
  description: string;
  icon: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export interface EmailCartData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  deliveryAddress?: string;
  items: CartItem[];
  totalAmount: number;
  additionalNotes?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
}
