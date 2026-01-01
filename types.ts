export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  image: string;
  description: string;
  specs: string[];
  unit: string; // e.g., "Unidad", "Caja 100u", "Kg"
  stock: number;
}

export type ProductCategory = 'agricultural' | 'screws' | 'tools' | 'general';

export interface CartItem extends Product {
  quantity: number;
}

export interface UserDetails {
  fullName: string;
  email: string;
  address: string;
  city: string;
  phone: string;
}

export type ViewState = 'HOME' | 'CATALOG' | 'PRODUCT_DETAIL' | 'CART' | 'CHECKOUT' | 'SUCCESS';