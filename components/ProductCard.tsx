import React from 'react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { ShoppingCartIcon } from './Icons';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, viewProduct } = useStore();

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div 
      className="group bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:border-brand-orange/30 transition-all duration-300 cursor-pointer"
      onClick={() => viewProduct(product)}
    >
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={handleAdd}
            className="w-full bg-brand-orange text-white py-2 rounded font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#368800] transition-colors shadow-lg"
          >
            <ShoppingCartIcon className="w-4 h-4" />
            Agregar Rápido
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs text-brand-green font-semibold uppercase tracking-wider mb-1">
          {product.category === 'screws' ? 'Tornillería' : product.category === 'agricultural' ? 'Agrícola' : product.category === 'tools' ? 'Herramienta' : 'General'}
        </div>
        <h3 className="font-semibold text-slate-800 leading-tight mb-2 line-clamp-2 h-10">
          {product.name}
        </h3>
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs text-slate-500">Precio por {product.unit}</span>
            <div className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};