import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CartItem, ViewState, ProductCategory } from '../types';
import { INVENTORY } from '../constants';

interface StoreContextType {
  // Navigation
  currentView: ViewState;
  setView: (view: ViewState) => void;
  selectedProduct: Product | null;
  viewProduct: (product: Product) => void;
  activeCategory: ProductCategory | 'all';
  setCategory: (cat: ProductCategory | 'all') => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  cartTotal: number;
  cartItemCount: number;
  clearCart: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');

  // Helper to persist cart (optional demo feature)
  useEffect(() => {
    const savedCart = localStorage.getItem('ido_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ido_cart', JSON.stringify(cart));
  }, [cart]);

  const viewProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('PRODUCT_DETAIL');
    window.scrollTo(0, 0);
  };

  const setView = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const addToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <StoreContext.Provider value={{
      currentView,
      setView,
      selectedProduct,
      viewProduct,
      activeCategory,
      setCategory: setActiveCategory,
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartItemCount,
      clearCart
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};