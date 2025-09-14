export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: ProductCategory;
  subcategory?: string;
  inStock: boolean;
  stockQuantity: number;
  features: string[];
  specifications: ProductSpecifications;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isOnSale?: boolean;
  discountPercentage?: number;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
  children?: ProductCategory[];
}

export interface ProductSpecifications {
  brand?: string;
  color?: string;
  size?: string;
  weight?: string;
  material?: string;
  origin?: string;
  safetyRating?: string;
  ageGroup?: string;
  [key: string]: string | undefined;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariants?: Record<string, string>;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  totalDiscount: number;
  shippingCost: number;
  tax: number;
  finalTotal: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: Address;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

export type PaymentMethod = 'credit_card' | 'debit_card' | 'upi' | 'net_banking' | 'cod';
export type OrderStatus = 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  logo: string;
  favicon: string;
  theme: ThemeConfig;
  contact: ContactInfo;
  social: SocialLinks;
  seo: SEOConfig;
  features: FeatureFlags;
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
  fontFamily: string;
  borderRadius: string;
  boxShadow: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: Address;
  workingHours: string;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  whatsapp?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterCard: string;
}

export interface FeatureFlags {
  enableReviews: boolean;
  enableWishlist: boolean;
  enableCompare: boolean;
  enableQuickView: boolean;
  enableLiveChat: boolean;
  enableNewsletter: boolean;
  enableSocialLogin: boolean;
}

export interface FilterOptions {
  categories: string[];
  priceRange: [number, number];
  brands: string[];
  inStock: boolean;
  onSale: boolean;
  rating: number;
  sortBy: SortOption;
}

export type SortOption = 
  | 'name_asc' 
  | 'name_desc' 
  | 'price_asc' 
  | 'price_desc' 
  | 'rating_desc' 
  | 'newest' 
  | 'popularity';

export interface SearchParams {
  query?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  brand?: string;
  inStock?: boolean;
  onSale?: boolean;
  rating?: number;
  sortBy?: SortOption;
  page?: number;
  limit?: number;
}
