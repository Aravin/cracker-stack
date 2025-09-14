import { Product, ProductCategory } from '@/types'

export const categories: ProductCategory[] = [
  {
    id: '1',
    name: 'Sparklers',
    slug: 'sparklers',
    description: 'Beautiful sparklers for all ages',
    image: '/images/placeholder.png'
  },
  {
    id: '2',
    name: 'Rockets',
    slug: 'rockets',
    description: 'High-flying rockets for spectacular displays',
    image: '/images/placeholder.png'
  },
  {
    id: '3',
    name: 'Flower Pots',
    slug: 'flower-pots',
    description: 'Colorful flower pot fireworks',
    image: '/images/placeholder.png'
  },
  {
    id: '4',
    name: 'Ground Spinners',
    slug: 'ground-spinners',
    description: 'Spinning ground fireworks',
    image: '/images/placeholder.png'
  },
  {
    id: '5',
    name: 'Fountains',
    slug: 'fountains',
    description: 'Fountain-style fireworks',
    image: '/images/placeholder.png'
  },
  {
    id: '6',
    name: 'Crackers',
    slug: 'crackers',
    description: 'Traditional firecrackers',
    image: '/images/placeholder.png'
  },
  {
    id: '7',
    name: 'Anand Brand',
    slug: 'anand',
    description: 'Premium Anand brand crackers from Sivakasi',
    image: '/images/placeholder.png'
  },
  {
    id: '8',
    name: 'Lucky Brand',
    slug: 'lucky',
    description: 'Popular Lucky brand fireworks from Tamil Nadu',
    image: '/images/placeholder.png'
  }
]

export const products: Product[] = [
  {
    id: '1',
    name: 'Anand Golden Sparklers - 100 Pack',
    description: 'Premium quality golden sparklers from Sivakasi, Tamil Nadu. Safe for all ages with beautiful golden sparks. Made with traditional techniques.',
    price: 299,
    originalPrice: 399,
    images: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/placeholder.png'
    ],
    category: categories[0],
    subcategory: 'Golden',
    inStock: true,
    stockQuantity: 50,
    features: [
      '100 pieces per pack',
      'Burns for 30-45 seconds',
      'Safe for children',
      'Premium quality from Sivakasi',
      'Golden sparkles'
    ],
    specifications: {
      brand: 'Anand',
      color: 'Golden',
      size: '12 inches',
      weight: '500g',
      material: 'Metal wire with chemical coating',
      origin: 'Made in Sivakasi, Tamil Nadu',
      safetyRating: 'A+',
      ageGroup: '3+ years'
    },
    rating: 4.8,
    reviewCount: 124,
    isNew: false,
    isFeatured: true,
    isOnSale: true,
    discountPercentage: 25,
    tags: ['sparklers', 'golden', 'safe', 'premium', 'anand', 'sivakasi'],
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '2',
    name: 'Lucky Rocket Deluxe',
    description: 'High-flying Lucky rocket from Tamil Nadu. Perfect for festivals and celebrations. Beautiful multi-color display with traditional craftsmanship.',
    price: 599,
    originalPrice: 799,
    images: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/placeholder.png'
    ],
    category: categories[1],
    subcategory: 'Deluxe',
    inStock: true,
    stockQuantity: 25,
    features: [
      'Flies up to 100 feet',
      'Multi-color display',
      'Safe launching mechanism',
      'Weather resistant',
      'Easy to use'
    ],
    specifications: {
      brand: 'Lucky',
      color: 'Multi-color',
      size: '18 inches',
      weight: '800g',
      material: 'Cardboard tube with metal cap',
      origin: 'Made in Sivakasi, Tamil Nadu',
      safetyRating: 'A+',
      ageGroup: '12+ years'
    },
    rating: 4.9,
    reviewCount: 89,
    isNew: true,
    isFeatured: true,
    isOnSale: true,
    discountPercentage: 25,
    tags: ['rocket', 'deluxe', 'high-flying', 'multi-color', 'lucky', 'sivakasi'],
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-05')
  },
  {
    id: '3',
    name: 'Anand Rainbow Flower Pot',
    description: 'Beautiful rainbow-colored flower pot from Anand brand. Perfect for garden celebrations. Stunning visual effects with traditional Sivakasi craftsmanship.',
    price: 449,
    images: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/placeholder.png'
    ],
    category: categories[2],
    subcategory: 'Rainbow',
    inStock: true,
    stockQuantity: 40,
    features: [
      'Rainbow color display',
      '60-second duration',
      'Safe ground placement',
      'Weather resistant',
      'Beautiful visual effects'
    ],
    specifications: {
      brand: 'Anand',
      color: 'Rainbow',
      size: '6 inches diameter',
      weight: '300g',
      material: 'Clay pot with chemical mixture',
      origin: 'Made in Sivakasi, Tamil Nadu',
      safetyRating: 'A',
      ageGroup: '8+ years'
    },
    rating: 4.7,
    reviewCount: 67,
    isNew: false,
    isFeatured: false,
    isOnSale: false,
    tags: ['flower-pot', 'rainbow', 'garden', 'colorful', 'anand', 'sivakasi'],
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '4',
    name: 'Lucky Spinning Wheel',
    description: 'Exciting ground spinner from Lucky brand that creates mesmerizing circular patterns. Great for outdoor parties. Traditional Tamil Nadu craftsmanship.',
    price: 199,
    originalPrice: 249,
    images: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/placeholder.png'
    ],
    category: categories[3],
    subcategory: 'Wheel',
    inStock: true,
    stockQuantity: 60,
    features: [
      'Spinning motion',
      'Multi-color sparks',
      '45-second duration',
      'Safe for ground use',
      'Easy ignition'
    ],
    specifications: {
      brand: 'Lucky',
      color: 'Multi-color',
      size: '4 inches diameter',
      weight: '150g',
      material: 'Cardboard with chemical coating',
      origin: 'Made in Sivakasi, Tamil Nadu',
      safetyRating: 'A',
      ageGroup: '6+ years'
    },
    rating: 4.6,
    reviewCount: 43,
    isNew: false,
    isFeatured: false,
    isOnSale: true,
    discountPercentage: 20,
    tags: ['spinner', 'wheel', 'ground', 'circular', 'lucky', 'sivakasi'],
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: '5',
    name: 'Anand Fountain of Joy',
    description: 'Elegant fountain-style firework from Anand brand with cascading sparks. Perfect for indoor celebrations. Premium quality from Sivakasi.',
    price: 349,
    images: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/placeholder.png'
    ],
    category: categories[4],
    subcategory: 'Cascading',
    inStock: true,
    stockQuantity: 35,
    features: [
      'Cascading sparks',
      '90-second duration',
      'Indoor safe',
      'Elegant design',
      'Smoke-free formula'
    ],
    specifications: {
      brand: 'Anand',
      color: 'Silver and Gold',
      size: '8 inches height',
      weight: '400g',
      material: 'Cardboard tube with special formula',
      origin: 'Made in Sivakasi, Tamil Nadu',
      safetyRating: 'A+',
      ageGroup: '5+ years'
    },
    rating: 4.8,
    reviewCount: 78,
    isNew: true,
    isFeatured: true,
    isOnSale: false,
    tags: ['fountain', 'cascading', 'indoor', 'elegant', 'anand', 'sivakasi'],
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-02-15')
  },
  {
    id: '6',
    name: 'Lucky Thunder Crackers - 50 Pack',
    description: 'Traditional firecrackers from Lucky brand with loud sound and bright flash. Perfect for festivals and celebrations. Made in Tamil Nadu.',
    price: 199,
    originalPrice: 299,
    images: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/placeholder.png'
    ],
    category: categories[5],
    subcategory: 'Thunder',
    inStock: true,
    stockQuantity: 80,
    features: [
      '50 pieces per pack',
      'Loud sound effect',
      'Bright flash',
      'Traditional design',
      'Festival favorite'
    ],
    specifications: {
      brand: 'Lucky',
      color: 'Red and Gold',
      size: '2 inches',
      weight: '200g',
      material: 'Paper with gunpowder',
      origin: 'Made in Sivakasi, Tamil Nadu',
      safetyRating: 'A',
      ageGroup: '12+ years'
    },
    rating: 4.5,
    reviewCount: 156,
    isNew: false,
    isFeatured: false,
    isOnSale: true,
    discountPercentage: 33,
    tags: ['crackers', 'thunder', 'traditional', 'loud', 'lucky', 'sivakasi'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-08')
  },
  {
    id: '7',
    name: 'Anand Sky Rocket Special',
    description: 'Premium sky rocket from Anand brand that creates beautiful color bursts in the sky. Perfect for special occasions. Handcrafted in Sivakasi.',
    price: 799,
    originalPrice: 999,
    images: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/placeholder.png'
    ],
    category: categories[1],
    subcategory: 'Sky',
    inStock: true,
    stockQuantity: 15,
    features: [
      'Flies up to 200 feet',
      'Sky color burst',
      'Multi-color display',
      'Loud sound',
      'Perfect for special occasions'
    ],
    specifications: {
      brand: 'Anand',
      color: 'Multi-color',
      size: '24 inches',
      weight: '1200g',
      material: 'Cardboard tube with metal cap',
      origin: 'Made in Sivakasi, Tamil Nadu',
      safetyRating: 'A+',
      ageGroup: '15+ years'
    },
    rating: 4.9,
    reviewCount: 45,
    isNew: true,
    isFeatured: true,
    isOnSale: true,
    discountPercentage: 20,
    tags: ['sky-rocket', 'aerial', 'multi-color', 'special', 'anand', 'sivakasi'],
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-25')
  },
  {
    id: '8',
    name: 'Lucky Special Sparklers',
    description: 'Special color sparklers from Lucky brand. Safe for children. Long burning time. Made with traditional techniques in Tamil Nadu.',
    price: 149,
    originalPrice: 199,
    images: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/placeholder.png'
    ],
    category: categories[0],
    subcategory: 'Special',
    inStock: true,
    stockQuantity: 100,
    features: [
      '50 pieces per pack',
      'Special colors',
      'Burns for 60 seconds',
      'Safe for children',
      'Long burning time'
    ],
    specifications: {
      brand: 'Lucky',
      color: 'Special colors',
      size: '10 inches',
      weight: '300g',
      material: 'Metal wire with special chemical coating',
      origin: 'Made in Sivakasi, Tamil Nadu',
      safetyRating: 'A+',
      ageGroup: '4+ years'
    },
    rating: 4.7,
    reviewCount: 89,
    isNew: false,
    isFeatured: false,
    isOnSale: true,
    discountPercentage: 25,
    tags: ['sparklers', 'special', 'kids-safe', 'long-lasting', 'lucky', 'sivakasi'],
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-25')
  },
  {
    id: '9',
    name: 'Anand Diwali Special Pack',
    description: 'Complete Diwali celebration pack from Anand brand. Includes sparklers, rockets, and crackers. Perfect for the festival of lights.',
    price: 1299,
    originalPrice: 1599,
    images: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/placeholder.png'
    ],
    category: categories[6],
    subcategory: 'Diwali Pack',
    inStock: true,
    stockQuantity: 20,
    features: [
      'Complete celebration pack',
      'Mixed variety of fireworks',
      'Premium quality from Sivakasi',
      'Perfect for Diwali',
      'Great value for money'
    ],
    specifications: {
      brand: 'Anand',
      color: 'Mixed',
      size: 'Varied',
      weight: '2000g',
      material: 'Mixed materials',
      origin: 'Made in Sivakasi, Tamil Nadu',
      safetyRating: 'A+',
      ageGroup: '8+ years'
    },
    rating: 4.8,
    reviewCount: 67,
    isNew: true,
    isFeatured: true,
    isOnSale: true,
    discountPercentage: 19,
    tags: ['diwali', 'special-pack', 'mixed', 'celebration', 'anand', 'sivakasi'],
    createdAt: new Date('2024-02-28'),
    updatedAt: new Date('2024-03-01')
  },
  {
    id: '10',
    name: 'Lucky New Year Celebration',
    description: 'Special New Year celebration pack from Lucky brand. Includes fountains, sparklers, and ground spinners. Perfect for New Year celebrations.',
    price: 899,
    originalPrice: 1099,
    images: [
      '/images/placeholder.png',
      '/images/placeholder.png',
      '/images/placeholder.png'
    ],
    category: categories[7],
    subcategory: 'New Year Pack',
    inStock: true,
    stockQuantity: 30,
    features: [
      'New Year celebration pack',
      'Fountains and sparklers',
      'Ground spinners included',
      'Safe for all ages',
      'Perfect for parties'
    ],
    specifications: {
      brand: 'Lucky',
      color: 'Mixed',
      size: 'Varied',
      weight: '1500g',
      material: 'Mixed materials',
      origin: 'Made in Sivakasi, Tamil Nadu',
      safetyRating: 'A+',
      ageGroup: '6+ years'
    },
    rating: 4.6,
    reviewCount: 34,
    isNew: true,
    isFeatured: false,
    isOnSale: true,
    discountPercentage: 18,
    tags: ['new-year', 'celebration', 'mixed', 'party', 'lucky', 'sivakasi'],
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-08')
  }
]