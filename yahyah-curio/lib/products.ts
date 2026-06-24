import { Product, Category, Testimonial, CategoryType } from '@/types';

export const categories: Category[] = [
  {
    id: 'jewelry',
    name: 'Jewelry',
    description: 'Handcrafted beaded necklaces, bracelets, and earrings',
    icon: '/images/categories/jewelry.svg',
    image: '/images/pixieset/a8db32aad36ade99fab054ea88322b62-large.jpg'
  },
  {
    id: 'wood-carvings',
    name: 'Wood Carvings',
    description: 'Traditional and contemporary wooden sculptures',
    icon: '/images/categories/wood-carving.svg',
    image: '/images/pixieset/66b55e62397fd26960096f06d88767a3-large.jpg'
  },
  {
    id: 'wall-art',
    name: 'Wall Art',
    description: 'Paintings, prints, and decorative wall pieces',
    icon: '/images/categories/wall-art.svg',
    image: '/images/pixieset/ec70593e00b9f0d06927b354910dfe20-large.jpg'
  },
  {
    id: 'textiles',
    name: 'Textiles',
    description: 'Authentic fabrics, rugs, and woven materials',
    icon: '/images/categories/textiles.svg',
    image: '/images/pixieset/924f6cf0ee0ec8c9eab562345ca3f512-large.jpg'
  },
  {
    id: 'pottery',
    name: 'Pottery',
    description: 'Handmade ceramic bowls, vases, and vessels',
    icon: '/images/categories/pottery.svg',
    image: '/images/pixieset/d2283af892d14e2500dd97251e416590-large.jpg'
  },
  {
    id: 'baskets',
    name: 'Baskets',
    description: 'Woven storage and decorative baskets',
    icon: '/images/categories/baskets.svg',
    image: '/images/pixieset/dd4b7ad10e991a7c3cc7b051d3eaecfe-large.jpg'
  },
  {
    id: 'stone-arts',
    name: 'Stone Arts',
    description: 'Hand-carved soapstone sculptures, figurines, and decorative pieces',
    icon: '/images/categories/stone-arts.svg',
    image: '/images/pixieset/67ae2cff94bbf38ebdbea07a11ec6ef8-large.jpg'
  }
];

export const products: Product[] = [
  // === WOOD CARVINGS ===
  {
    id: 'prod-001',
    name: 'Hand-Carved Wooden Mask',
    description: 'Beautifully crafted wooden mask depicting traditional African motifs with intricate beadwork detail. Each piece tells a story of heritage and craftsmanship passed down through generations.',
    price: 8999,
    originalPrice: 12000,
    category: 'wood-carvings',
    images: [
      '/images/pixieset/66b55e62397fd26960096f06d88767a3-large.jpg',
      '/images/pixieset/946193773ab6d9624b40059204baec3a-large.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Mahogany wood', 'Maasai beads', 'Natural finish'],
    dimensions: '30cm x 15cm x 12cm',
    weight: '1.2kg',
    artisan: 'Juma Kariuki',
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
      '/images/pixieset/946193773ab6d9624b40059204baec3a-large.jpg',
      '/images/pixieset/dd4b7ad10e991a7c3cc7b051d3eaecfe-large.jpg'
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
    id: 'prod-015',
    name: 'Giraffe Family Carving',
    description: 'Beautifully carved olive wood sculpture depicting a giraffe family. Each piece showcases the natural grain of the wood.',
    price: 11000,
    category: 'wood-carvings',
    images: [
      '/images/pixieset/924f6cf0ee0ec8c9eab562345ca3f512-large.jpg',
      '/images/pixieset/dd4b7ad10e991a7c3cc7b051d3eaecfe-large.jpg'
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
    id: 'prod-020',
    name: 'Safari Animals Wood Set',
    description: 'Charming set of five hand-carved safari animals: lion, elephant, rhino, buffalo, and leopard (Big Five).',
    price: 8500,
    category: 'wood-carvings',
    images: [
      '/images/pixieset/dd4b7ad10e991a7c3cc7b051d3eaecfe-large.jpg',
      '/images/pixieset/66b55e62397fd26960096f06d88767a3-large.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Jacaranda wood', 'Natural polish'],
    dimensions: 'Each approx 12cm',
    weight: '0.5kg total',
    artisan: 'Kamba Carvers Collective',
    origin: 'Wamunyu, Kenya'
  },

  // === JEWELRY ===
  {
    id: 'prod-002',
    name: 'Beaded Maasai Pendant',
    description: 'Authentic Maasai beaded pendant handcrafted by local artisans. Vibrant colors and traditional patterns make this a unique statement piece.',
    price: 4599,
    category: 'jewelry',
    images: [
      '/images/pixieset/a8db32aad36ade99fab054ea88322b62-large.jpg',
      '/images/pixieset/946193773ab6d9624b40059204baec3a-large.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Glass beads', 'Leather cord'],
    artisan: 'Maasai Women Cooperative',
    origin: 'Kajiado, Kenya'
  },
  {
    id: 'prod-007',
    name: 'Maasai Beaded Keychain',
    description: 'Handcrafted Maasai beaded keychain featuring a traditional portrait design. A vibrant everyday accessory rooted in Kenyan culture.',
    price: 1800,
    category: 'jewelry',
    images: [
      '/images/pixieset/a8db32aad36ade99fab054ea88322b62-large.jpg',
      '/images/pixieset/946193773ab6d9624b40059204baec3a-large.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Glass beads', 'Metal ring'],
    artisan: 'Nairobi Crafts Collective',
    origin: 'Nairobi, Kenya'
  },
  {
    id: 'prod-011',
    name: 'Beaded Bracelet Set (5 pieces)',
    description: 'Set of five colorful beaded bracelets in complementary colors. Stackable design for mix-and-match styling.',
    price: 2200,
    category: 'jewelry',
    images: [
      '/images/pixieset/a8db32aad36ade99fab054ea88322b62-large.jpg',
      '/images/pixieset/946193773ab6d9624b40059204baec3a-large.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Glass beads', 'Elastic cord'],
    artisan: 'Kibera Women Group',
    origin: 'Nairobi, Kenya'
  },
  {
    id: 'prod-017',
    name: 'Statement Beaded Necklace',
    description: 'Bold beaded necklace with African-inspired layered design. A striking statement piece handcrafted by Maasai artisans.',
    price: 5800,
    originalPrice: 7000,
    category: 'jewelry',
    images: [
      '/images/pixieset/a8db32aad36ade99fab054ea88322b62-large.jpg',
      '/images/pixieset/946193773ab6d9624b40059204baec3a-large.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Glass beads', 'Leather cord'],
    artisan: 'Metalworks Kenya',
    origin: 'Nairobi, Kenya'
  },

  // === WALL ART ===
  {
    id: 'prod-003',
    name: 'Decorative Soapstone Plate — Hakuna Matata',
    description: 'Hand-painted soapstone decorative plate with the iconic "Hakuna Matata" design featuring Maasai warriors. Displayed on a wooden easel stand, perfect as a gift or wall piece.',
    price: 12500,
    originalPrice: 15000,
    category: 'wall-art',
    images: [
      '/images/pixieset/ec70593e00b9f0d06927b354910dfe20-large.jpg',
      '/images/pixieset/b9fd59d128f7241e9c674cbd56ce8b73-large.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Soapstone', 'Natural pigments', 'Wooden easel'],
    dimensions: '30cm diameter',
    artisan: 'Wanjiku Arts Studio',
    origin: 'Kisii, Kenya'
  },
  {
    id: 'prod-010',
    name: 'Maasai Shield Wall Decor',
    description: 'Authentic replica of traditional Maasai warrior shield. Hand-painted with symbolic patterns representing bravery and heritage.',
    price: 9500,
    category: 'wall-art',
    images: [
      '/images/pixieset/924f6cf0ee0ec8c9eab562345ca3f512-large.jpg',
      '/images/pixieset/dd4b7ad10e991a7c3cc7b051d3eaecfe-large.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Cowhide', 'Wood frame', 'Natural dyes'],
    dimensions: '70cm x 45cm',
    artisan: 'Maasai Artisans',
    origin: 'Narok, Kenya'
  },
  {
    id: 'prod-012',
    name: 'Karibu Kenya Decorative Plate',
    description: 'Hand-painted soapstone plate featuring African wildlife with a "Welcome to Kenya" greeting. A beautiful keepsake displayed on a wooden stand.',
    price: 7500,
    category: 'wall-art',
    images: [
      '/images/pixieset/fbfeffabb7ef9d439f846fda2634486a-large.jpg',
      '/images/pixieset/ec70593e00b9f0d06927b354910dfe20-large.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Soapstone', 'Natural pigments', 'Wooden easel'],
    dimensions: '28cm diameter',
    artisan: 'Batik Arts Kenya',
    origin: 'Kisii, Kenya'
  },

  // === TEXTILES ===
  {
    id: 'prod-004',
    name: 'Kikoy Beach Wrap',
    description: 'Traditional Kenyan kikoy made from 100% cotton. Perfect as a beach wrap, sarong, or decorative throw. Vibrant stripes in authentic coastal colors.',
    price: 2500,
    category: 'textiles',
    images: [
      '/images/pixieset/dd4b7ad10e991a7c3cc7b051d3eaecfe-large.jpg',
      '/images/pixieset/e78cb17c7c808746b3badb7320016d34-large.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['100% Cotton'],
    dimensions: '180cm x 110cm',
    origin: 'Mombasa, Kenya'
  },
  {
    id: 'prod-009',
    name: 'Kanga Fabric Set (2 pieces)',
    description: 'Traditional East African kanga fabric set with Swahili proverb prints. Perfect for clothing, decoration, or gifting.',
    price: 3200,
    category: 'textiles',
    images: [
      '/images/pixieset/e78cb17c7c808746b3badb7320016d34-large.jpg',
      '/images/pixieset/fbfeffabb7ef9d439f846fda2634486a-large.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['100% Cotton'],
    dimensions: '150cm x 110cm each',
    origin: 'Tanzania'
  },
  {
    id: 'prod-016',
    name: 'African Print Throw Pillow Set',
    description: 'Set of two throw pillows featuring vibrant African ankara prints. Includes pillow inserts.',
    price: 4500,
    category: 'textiles',
    images: [
      '/images/pixieset/c59b231f3483b143ab77e7a8fdb3774d-large.jpg',
      '/images/pixieset/924f6cf0ee0ec8c9eab562345ca3f512-large.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Cotton ankara fabric', 'Polyester filling'],
    dimensions: '45cm x 45cm each',
    origin: 'Kenya'
  },

  // === POTTERY ===
  {
    id: 'prod-005',
    name: 'Decorative Soapstone Bowl',
    description: 'Hand-carved soapstone bowl with traditional geometric patterns. Each piece is unique, polished to a smooth finish that highlights the natural stone colour.',
    price: 6500,
    category: 'pottery',
    images: [
      '/images/pixieset/d2283af892d14e2500dd97251e416590-large.jpg',
      '/images/pixieset/ec70593e00b9f0d06927b354910dfe20-large.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Kisii soapstone', 'Natural polish'],
    dimensions: '25cm diameter, 10cm depth',
    weight: '2.5kg',
    artisan: 'Wambu Pottery',
    origin: 'Kisii, Kenya'
  },
  {
    id: 'prod-013',
    name: 'Kisii Soapstone Bowl',
    description: 'Beautiful hand-carved soapstone bowl from Kisii region. Smooth finish with natural color variations.',
    price: 4200,
    category: 'pottery',
    images: [
      '/images/pixieset/d2283af892d14e2500dd97251e416590-large.jpg',
      '/images/pixieset/c7f6bd23bc6b9a7e57180693a4a5f177-large.jpg'
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
    id: 'prod-018',
    name: 'Traditional Clay Pot',
    description: 'Authentic African clay pot traditionally used for storing water. Beautiful burnished finish.',
    price: 5500,
    category: 'pottery',
    images: [
      '/images/pixieset/d2283af892d14e2500dd97251e416590-large.jpg',
      '/images/pixieset/fbfeffabb7ef9d439f846fda2634486a-large.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Natural clay'],
    dimensions: '40cm height, 30cm diameter',
    weight: '3kg',
    artisan: 'Rural Pottery Kenya',
    origin: 'Kisumu, Kenya'
  },

  // === BASKETS ===
  {
    id: 'prod-006',
    name: 'Sisal Woven Basket — Large',
    description: 'Beautiful hand-woven sisal basket perfect for storage or as a decorative piece. Features intricate patterns in earth tones.',
    price: 3800,
    category: 'baskets',
    images: [
      '/images/pixieset/dd4b7ad10e991a7c3cc7b051d3eaecfe-large.jpg',
      '/images/pixieset/c59b231f3483b143ab77e7a8fdb3774d-large.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Natural sisal', 'Leather handles'],
    dimensions: '40cm diameter, 30cm height',
    artisan: 'Kitui Women Group',
    origin: 'Kitui, Kenya'
  },
  {
    id: 'prod-014',
    name: 'Kiondo Shopping Basket',
    description: 'Traditional Kenyan kiondo basket, perfect for shopping or storage. Durable sisal construction with leather handles.',
    price: 2800,
    category: 'baskets',
    images: [
      '/images/pixieset/e78cb17c7c808746b3badb7320016d34-large.jpg',
      '/images/pixieset/dd4b7ad10e991a7c3cc7b051d3eaecfe-large.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Sisal fiber', 'Leather straps'],
    dimensions: '35cm x 25cm x 30cm',
    artisan: 'Machakos Weavers',
    origin: 'Machakos, Kenya'
  },
  {
    id: 'prod-019',
    name: 'Colorful Storage Baskets (Set of 3)',
    description: 'Set of three nesting baskets in graduated sizes. Perfect for organizing while adding African flair.',
    price: 6200,
    category: 'baskets',
    images: [
      '/images/pixieset/fbfeffabb7ef9d439f846fda2634486a-large.jpg',
      '/images/pixieset/e78cb17c7c808746b3badb7320016d34-large.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Dyed sisal', 'Natural sweetgrass'],
    dimensions: 'Small: 20cm, Medium: 30cm, Large: 40cm diameter',
    artisan: 'Coastal Weavers',
    origin: 'Lamu, Kenya'
  },

  // === STONE ARTS ===
  {
    id: 'prod-021',
    name: 'Soapstone Chess Set — Blue & White',
    description: 'Beautifully hand-carved soapstone chess set with animal-themed pieces on a blue and white board. Each piece is individually carved and polished.',
    price: 7500,
    originalPrice: 9500,
    category: 'stone-arts',
    images: [
      '/images/pixieset/67ae2cff94bbf38ebdbea07a11ec6ef8-large.jpg',
      '/images/pixieset/26a0396e5c2f92978a0d340c8656fb7e-large.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Kisii soapstone', 'Natural stone polish'],
    dimensions: '40cm x 40cm board',
    weight: '2.5kg',
    artisan: 'Tabaka Stone Carvers',
    origin: 'Kisii, Kenya'
  },
  {
    id: 'prod-022',
    name: 'Soapstone Decorative Plate Display',
    description: 'Set of hand-painted soapstone decorative plates featuring iconic African wildlife and Swahili greetings — Hakuna Matata, Karibu Kenya, Jambo Africa. Each on its own wooden easel stand.',
    price: 9800,
    category: 'stone-arts',
    images: [
      '/images/pixieset/fbfeffabb7ef9d439f846fda2634486a-large.jpg',
      '/images/pixieset/b9fd59d128f7241e9c674cbd56ce8b73-large.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Soapstone', 'Natural pigments', 'Wooden easel'],
    dimensions: '25–30cm diameter each',
    weight: '0.8kg each',
    artisan: 'Kisii Stone Art Studio',
    origin: 'Kisii, Kenya'
  },
  {
    id: 'prod-023',
    name: 'Black Soapstone Chess Set',
    description: 'Striking ebony-finished soapstone chess set with hand-carved tribal pieces on a decorative board. A collector\'s piece that doubles as a playable game.',
    price: 6200,
    category: 'stone-arts',
    images: [
      '/images/pixieset/64a6d23dd447460d8ce6dfb76d59c234-large.jpg',
      '/images/pixieset/c7f6bd23bc6b9a7e57180693a4a5f177-large.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Dense grey soapstone'],
    dimensions: '40cm x 40cm board',
    weight: '3kg',
    artisan: 'Tabaka Stone Carvers',
    origin: 'Kisii, Kenya'
  },
  {
    id: 'prod-024',
    name: 'Rose Soapstone Chess Set',
    description: 'Elegant pink and cream soapstone chess set with intricately carved animal pieces. The rose-toned board and pieces make this a beautiful display item as well as a playable set.',
    price: 5400,
    originalPrice: 6500,
    category: 'stone-arts',
    images: [
      '/images/pixieset/2b9e17c122788df3a34e2454b413d027-large.jpg',
      '/images/pixieset/c59b231f3483b143ab77e7a8fdb3774d-large.jpg'
    ],
    inStock: true,
    featured: false,
    materials: ['Fine-grain soapstone', 'Natural pigment finish'],
    dimensions: '40cm x 40cm board',
    weight: '2.8kg',
    artisan: 'Kisii Stone Art Studio',
    origin: 'Kisii, Kenya'
  },
  {
    id: 'prod-026',
    name: 'Colourful Animal Figurines (Set of 10)',
    description: 'Vibrant hand-painted miniature animal figurines made from soapstone. Each set includes a variety of safari animals painted in bold, eye-catching colours. Perfect as gifts or decorative collectibles.',
    price: 2500,
    category: 'stone-arts',
    images: [
      '/images/pixieset/03b54ae888f3cdd0201c598c3d0ea40b-large.jpg',
      '/images/pixieset/28b15180ee0c2c2e60db8f05877872c6-large.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Soapstone', 'Non-toxic paint'],
    dimensions: 'Each approx 4–6cm',
    weight: '0.3kg total',
    artisan: 'Kisii Figurine Painters',
    origin: 'Kisii, Kenya'
  },

  // === TEXTILES - FAN PRODUCT ===
  {
    id: 'prod-025',
    name: 'Traditional Handwoven Fan',
    description: 'Beautifully handcrafted traditional fan made from natural materials. This functional and decorative piece features traditional African patterns and is perfect for keeping cool while adding cultural elegance to any space.',
    price: 1500,
    category: 'textiles',
    images: [
      '/images/pixieset/924f6cf0ee0ec8c9eab562345ca3f512-large.jpg',
      '/images/pixieset/dd4b7ad10e991a7c3cc7b051d3eaecfe-large.jpg'
    ],
    inStock: true,
    featured: true,
    materials: ['Natural fibers', 'Bamboo frame', 'Traditional fabric'],
    dimensions: '40cm diameter',
    weight: '0.3kg',
    artisan: 'Traditional Weavers Collective',
    origin: 'Nairobi, Kenya'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-001',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    rating: 5,
    comment: 'Absolutely beautiful pieces! The craftsmanship is incredible and each item tells such a rich story. My home feels more vibrant with these authentic African treasures.',
    date: '2024-01-15'
  },
  {
    id: 'test-002',
    name: 'Michael Chen',
    location: 'London, UK',
    rating: 5,
    comment: 'I purchased a wooden sculpture and it exceeded all expectations. The quality is outstanding and the customer service was excellent. Highly recommend!',
    date: '2024-01-10'
  },
  {
    id: 'test-003',
    name: 'Amara Okonkwo',
    location: 'Lagos, Nigeria',
    rating: 5,
    comment: 'As someone from Africa, I appreciate the authenticity and respect shown for our cultural heritage. These pieces are genuine and beautifully curated.',
    date: '2024-01-05'
  },
  {
    id: 'test-004',
    name: 'Emma Williams',
    location: 'Sydney, Australia',
    rating: 5,
    comment: 'The Maasai necklace I ordered is stunning! It arrived well-packaged and even more beautiful in person. Will definitely be ordering more.',
    date: '2024-02-20'
  },
  {
    id: 'test-005',
    name: 'David Kimani',
    location: 'Nairobi, Kenya',
    rating: 5,
    comment: 'Great to see local artisans getting the recognition they deserve. The quality of work is exceptional and the prices are very fair.',
    date: '2024-02-15'
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
