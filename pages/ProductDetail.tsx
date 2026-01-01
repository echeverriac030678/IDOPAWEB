import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ShoppingCartIcon, CheckCircleIcon, ChevronRightIcon } from '../components/Icons';

export const ProductDetail: React.FC = () => {
  const { selectedProduct, addToCart, setView } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!selectedProduct) {
    setView('CATALOG');
    return null;
  }

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white min-h-[80vh] py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <span className="hover:text-brand-orange cursor-pointer" onClick={() => setView('HOME')}>Inicio</span>
            <ChevronRightIcon className="w-4 h-4" />
            <span className="hover:text-brand-orange cursor-pointer" onClick={() => setView('CATALOG')}>Catálogo</span>
            <ChevronRightIcon className="w-4 h-4" />
            <span className="text-slate-900 font-medium">{selectedProduct.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 p-8 flex items-center justify-center">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name} 
              className="max-h-[500px] w-full object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-2">
                 <span className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-xs font-bold rounded-full uppercase tracking-wide">
                    {selectedProduct.category === 'screws' ? 'Tornillería' : 'Repuesto Original'}
                 </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{selectedProduct.name}</h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {selectedProduct.description}
            </p>

            {/* Specs */}
            <div className="mb-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase">Especificaciones Técnicas</h3>
                <ul className="space-y-2">
                    {selectedProduct.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                            {spec}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-end gap-4 mb-8">
              <div>
                <span className="text-sm text-slate-500 block mb-1">Precio por {selectedProduct.unit}</span>
                <span className="text-4xl font-bold text-slate-900">${selectedProduct.price.toFixed(2)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
              <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden w-fit">
                <button 
                  className="px-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-x border-slate-300 py-3 text-slate-900 font-bold focus:outline-none" 
                />
                <button 
                  className="px-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 font-bold transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                disabled={added}
                className={`flex-1 flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg ${
                    added 
                    ? 'bg-brand-green text-white cursor-default'
                    : 'bg-brand-orange hover:bg-[#368800] text-white shadow-green-900/20'
                }`}
              >
                {added ? (
                    <>
                        <CheckCircleIcon className="w-6 h-6" /> Agregado
                    </>
                ) : (
                    <>
                        <ShoppingCartIcon className="w-6 h-6" /> Añadir al Carrito
                    </>
                )}
              </button>
            </div>
            
            {selectedProduct.category === 'screws' && (
                <p className="mt-4 text-xs text-slate-500 italic">
                    * Para pedidos a granel mayores a 1000 unidades, contactar a ventas directamente.
                </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};