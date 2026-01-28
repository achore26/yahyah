import { Product, Category, Testimonial, CategoryType } from '@/types';

export const categories: Category[] = [
  {
    id: 'jewelry',
    name: 'Jewelry',
    description: 'Handcrafted beaded necklaces, bracelets, and earrings',
    icon: '/images/categories/jewelry.svg',
    image: '/images/categories/jewelry-cover.jpg'
  },
  {
    id: 'wood-carvings',
    name: 'Wood Carvings',
    description: 'Traditional and contemporary wooden sculptures',
    icon: '/images/categories/wood-carving.svg',
    image: '/images/categories/wood-cover.jpg'
  },
  {
    id: 'wall-art',
    name: 'Wall Art',
    description: 'Paintings, prints, and decorative wall pieces',
    icon: '/images/categories/wall-art.svg',
    image: '/images/categories/art-cover.jpg'
  },
  {
    id: 'textiles',
    name: 'Textiles',
    description: 'Authentic fabrics, rugs, and woven materials',
    icon: '/images/categories/textiles.svg',
    image: '/images/categories/textiles-cover.jpg'
  },
  {
    id: 'pottery',
    name: 'Pottery',
    description: 'Handmade ceramic bowls, vases, and vessels',
    icon: '/images/categories/pottery.svg',
    image: '/images/categories/pottery-cover.jpg'
  },
  {
    id: 'baskets',
    name: 'Baskets',
    description: 'Woven storage and decorative baskets',
    icon: '/images/categories/baskets.svg',
    image: '/images/categories/baskets-cover.jpg'
  }
];

export const products: Product[] = [
  {
    id: 'prod-001',
    name: 'Hand-Carved Wooden Sculpture',
    description: 'Beautifully crafted wooden sculpture depicting traditional African motifs. Each piece tells a story of heritage and craftsmanship passed down through generations.',
    price: 8999,
    originalPrice: 12000,
    category: 'wood-carvings',
    images: [
      '/images/products/wood-sculpture-1.jpg',
      '/images/products/wood-sculpture-2.jpg',
      '/images/products/wood-sculpture-3.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Mahogany wood', 'Natural finish'],
    dimensions: '30cm x 15cm x 12cm',
    weight: '1.2kg',
    artisan: 'Juma Kariuki',
    origin: 'Nairobi, Kenya'
  },
  {
    id: 'prod-002',
    name: 'Beaded Maasai Necklace',
    description: 'Authentic Maasai beaded necklace handcrafted by local artisans. Vibrant colors and traditional patterns make this a unique statement piece.',
    price: 4599,
    category: 'jewelry',
    images: [
      '/images/products/necklace-1.jpg',
      '/images/products/necklace-2.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Glass beads', 'Leather cord'],
    artisan: 'Maasai Women Cooperative',
    origin: 'Kajiado, Kenya'
  },
  {
    id: 'prod-003',
    name: 'African Sunset Canvas Print',
    description: 'Stunning canvas print capturing the beauty of an African sunset over the savanna. Perfect for adding warmth and color to any room.',
    price: 12500,
    originalPrice: 15000,
    category: 'wall-art',
    images: [
      '/images/products/canvas-sunset-1.jpg',
      '/images/products/canvas-sunset-2.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Premium canvas', 'Wooden frame'],
    dimensions: '80cm x 60cm',
    artisan: 'Wanjiku Arts Studio',
    origin: 'Nairobi, Kenya'
  },
  {
    id: 'prod-004',
    name: 'Kikoy Beach Wrap',
    description: 'Traditional Kenyan kikoy made from 100% cotton. Perfect as a beach wrap, sarong, or decorative throw. Vibrant stripes in authentic coastal colors.',
    price: 2500,
    category: 'textiles',
    images: [
      '/images/products/kikoy-1.jpg',
      '/images/products/kikoy-2.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['100% Cotton'],
    dimensions: '180cm x 110cm',
    origin: 'Mombasa, Kenya'
  },
  {
    id: 'prod-005',
    name: 'Terracotta Decorative Vase',
    description: 'Hand-thrown terracotta vase with traditional geometric patterns. Each piece is unique, fired using traditional methods.',
    price: 6500,
    category: 'pottery',
    images: [
      '/images/products/vase-1.jpg',
      '/images/products/vase-2.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Terracotta clay', 'Natural pigments'],
    dimensions: '35cm height, 20cm diameter',
    weight: '2.5kg',
    artisan: 'Wambu Pottery',
    origin: 'Nyeri, Kenya'
  },
  {
    id: 'prod-006',
    name: 'Sisal Woven Basket - Large',
    description: 'Beautiful hand-woven sisal basket perfect for storage or as a decorative piece. Features intricate patterns in earth tones.',
    price: 3800,
    category: 'baskets',
    images: [
      '/images/products/basket-large-1.jpg',
      '/images/products/basket-large-2.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Natural sisal', 'Leather handles'],
    dimensions: '40cm diameter, 30cm height',
    artisan: 'Kitui Women Group',
    origin: 'Kitui, Kenya'
  },
  {
    id: 'prod-007',
    name: 'Copper Wire Earrings',
    description: 'Elegant copper wire earrings with African-inspired spiral design. Lightweight and comfortable for everyday wear.',
    price: 1800,
    category: 'jewelry',
    images: [
      '/images/products/earrings-copper-1.jpg',
      '/images/products/earrings-copper-2.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Copper wire', 'Sterling silver hooks'],
    artisan: 'Nairobi Crafts Collective',
    origin: 'Nairobi, Kenya'
  },
  {
    id: 'prod-008',
    name: 'Ebony Wood Elephant Figurine',
    description: 'Exquisite ebony wood elephant carving, symbolizing wisdom and good luck. Polished to a beautiful natural sheen.',
    price: 15000,
    originalPrice: 18000,
    category: 'wood-carvings',
    images: [
      '/images/products/elephant-ebony-1.jpg',
      '/images/products/elephant-ebony-2.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Ebony wood'],
    dimensions: '25cm x 20cm x 10cm',
    weight: '1.8kg',
    artisan: 'Mwangi Carvings',
    origin: 'Wamunyu, Kenya'
  },
  {
    id: 'prod-009',
    name: 'Kanga Fabric Set (2 pieces)',
    description: 'Traditional East African kanga fabric set with Swahili proverb prints. Perfect for clothing, decoration, or gifting.',
    price: 3200,
    category: 'textiles',
    images: [
      '/images/products/kanga-set-1.jpg',
      '/images/products/kanga-set-2.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['100% Cotton'],
    dimensions: '150cm x 110cm each',
    origin: 'Tanzania'
  },
  {
    id: 'prod-010',
    name: 'Maasai Shield Wall Decor',
    description: 'Authentic replica of traditional Maasai warrior shield. Hand-painted with symbolic patterns representing bravery and heritage.',
    price: 9500,
    category: 'wall-art',
    images: [
      '/images/products/shield-1.jpg',
      '/images/products/shield-2.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Cowhide', 'Wood frame', 'Natural dyes'],
    dimensions: '70cm x 45cm',
    artisan: 'Maasai Artisans',
    origin: 'Narok, Kenya'
  },
  {
    id: 'prod-011',
    name: 'Beaded Bracelet Set (5 pieces)',
    description: 'Set of five colorful beaded bracelets in complementary colors. Stackable design for mix-and-match styling.',
    price: 2200,
    category: 'jewelry',
    images: [
      '/images/products/bracelet-set-1.jpg',
      '/images/products/bracelet-set-2.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Glass beads', 'Elastic cord'],
    artisan: 'Kibera Women Group',
    origin: 'Nairobi, Kenya'
  },
  {
    id: 'prod-012',
    name: 'African Batik Wall Hanging',
    description: 'Hand-dyed batik fabric featuring traditional African wildlife scene. Ready to hang with wooden dowel.',
    price: 7500,
    category: 'wall-art',
    images: [
      '/images/products/batik-1.jpg',
      '/images/products/batik-2.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Cotton fabric', 'Natural dyes', 'Wooden dowel'],
    dimensions: '100cm x 80cm',
    artisan: 'Batik Arts Kenya',
    origin: 'Nairobi, Kenya'
  },
  {
    id: 'prod-013',
    name: 'Kisii Soapstone Bowl',
    description: 'Beautiful hand-carved soapstone bowl from Kisii region. Smooth finish with natural color variations.',
    price: 4200,
    category: 'pottery',
    images: [
      '/images/products/soapstone-bowl-1.jpg',
      '/images/products/soapstone-bowl-2.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Kisii soapstone'],
    dimensions: '20cm diameter, 8cm depth',
    weight: '0.8kg',
    artisan: 'Kisii Stone Carvers',
    origin: 'Kisii, Kenya'
  },
  {
    id: 'prod-014',
    name: 'Kiondo Shopping Basket',
    description: 'Traditional Kenyan kiondo basket, perfect for shopping or storage. Durable sisal construction with leather handles.',
    price: 2800,
    category: 'baskets',
    images: [
      '/images/products/kiondo-1.jpg',
      '/images/products/kiondo-2.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Sisal fiber', 'Leather straps'],
    dimensions: '35cm x 25cm x 30cm',
    artisan: 'Machakos Weavers',
    origin: 'Machakos, Kenya'
  },
  {
    id: 'prod-015',
    name: 'Giraffe Family Carving',
    description: 'Beautifully carved olive wood sculpture depicting a giraffe family. Each piece showcases the natural grain of the wood.',
    price: 11000,
    category: 'wood-carvings',
    images: [
      '/images/products/giraffe-family-1.jpg',
      '/images/products/giraffe-family-2.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Olive wood', 'Natural wax finish'],
    dimensions: '45cm height',
    weight: '1.5kg',
    artisan: 'Kamba Carvers',
    origin: 'Wamunyu, Kenya'
  },
  {
    id: 'prod-016',
    name: 'African Print Throw Pillow Set',
    description: 'Set of two throw pillows featuring vibrant African ankara prints. Includes pillow inserts.',
    price: 4500,
    category: 'textiles',
    images: [
      '/images/products/pillows-1.jpg',
      '/images/products/pillows-2.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Cotton ankara fabric', 'Polyester filling'],
    dimensions: '45cm x 45cm each',
    origin: 'Kenya'
  },
  {
    id: 'prod-017',
    name: 'Statement Brass Necklace',
    description: 'Bold brass necklace with African-inspired geometric pendant. Adjustable length for versatile styling.',
    price: 5800,
    originalPrice: 7000,
    category: 'jewelry',
    images: [
      '/images/products/brass-necklace-1.jpg',
      '/images/products/brass-necklace-2.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Brass', 'Leather cord'],
    artisan: 'Metalworks Kenya',
    origin: 'Nairobi, Kenya'
  },
  {
    id: 'prod-018',
    name: 'Traditional Clay Pot',
    description: 'Authentic African clay pot traditionally used for storing water. Beautiful burnished finish.',
    price: 5500,
    category: 'pottery',
    images: [
      '/images/products/clay-pot-1.jpg',
      '/images/products/clay-pot-2.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Natural clay'],
    dimensions: '40cm height, 30cm diameter',
    weight: '3kg',
    artisan: 'Rural Pottery Kenya',
    origin: 'Kisumu, Kenya'
  },
  {
    id: 'prod-019',
    name: 'Colorful Storage Baskets (Set of 3)',
    description: 'Set of three nesting baskets in graduated sizes. Perfect for organizing while adding African flair.',
    price: 6200,
    category: 'baskets',
    images: [
      '/images/products/basket-set-1.jpg',
      '/images/products/basket-set-2.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Dyed sisal', 'Natural sweetgrass'],
    dimensions: 'Small: 20cm, Medium: 30cm, Large: 40cm diameter',
    artisan: 'Coastal Weavers',
    origin: 'Lamu, Kenya'
  },
  {
    id: 'prod-020',
    name: 'Safari Animals Wood Set',
    description: 'Charming set of five hand-carved safari animals: lion, elephant, rhino, buffalo, and leopard (Big Five).',
    price: 8500,
    category: 'wood-carvings',
    images: [
      '/images/products/big-five-1.jpg',
      '/images/products/big-five-2.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Jacaranda wood', 'Natural polish'],
    dimensions: 'Each approx 12cm',
    weight: '0.5kg total',
    artisan: 'Kamba Carvers Collective',
    origin: 'Wamunyu, Kenya'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    comment: 'Absolutely beautiful pieces! The craftsmanship is incredible and each item tells such a rich story. My home feels more vibrant with these authentic African treasures.',
    date: '2024-01-15',
    avatar: '/images/testimonials/sarah.jpg'
  },
  {
    id: 'test-002',
    name: 'Michael Chen',
    location: 'London, UK',
    rating: 5,
    comment: 'I purchased a wooden sculpture and it exceeded all expectations. The quality is outstanding and the customer service was excellent. Highly recommend!',
    date: '2024-01-10',
    avatar: '/images/testimonials/michael.jpg'
  },
  {
    id: 'test-003',
    name: 'Amara Okonkwo',
    location: 'Lagos, Nigeria',
    rating: 5,
    comment: 'As someone from Africa, I appreciate the authenticity and respect shown for our cultural heritage. These pieces are genuine and beautifully curated.',
    date: '2024-01-05',
    avatar: '/images/testimonials/amara.jpg'
  },
  {
    id: 'test-004',
    name: 'Emma Williams',
    location: 'Sydney, Australia',
    rating: 5,
    comment: 'The Maasai necklace I ordered is stunning! It arrived well-packaged and even more beautiful in person. Will definitely be ordering more.',
    date: '2024-02-20',
    avatar: '/images/testimonials/emma.jpg'
  },
  {
    id: 'test-005',
    name: 'David Kimani',
    location: 'Nairobi, Kenya',
    rating: 5,
    comment: 'Great to see local artisans getting the recognition they deserve. The quality of work is exceptional and the prices are very fair.',
    date: '2024-02-15',
    avatar: '/images/testimonials/david.jpg'
  }
];

// Utility functions
export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: CategoryType): Product[] => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getCategoryById = (id: CategoryType): Category | undefined => {
  return categories.find(c => c.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    p =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const formatPrice = (price: number): string => {
  return `KES ${price.toLocaleString()}`;
};
