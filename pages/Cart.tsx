import React from 'react';
import { useStore } from '../context/StoreContext';
import { ShoppingCartIcon, ChevronRightIcon, XIcon } from '../components/Icons';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, setView } = useStore();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-brand-light p-4 text-center">
        <div className="bg-white p-8 rounded-full shadow-lg mb-6">
            <ShoppingCartIcon className="w-16 h-16 text-slate-300" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Tu carrito está vacío</h2>
        <p className="text-slate-500 mb-8">Parece que aún no has agregado herramientas o repuestos.</p>
        <button 
          onClick={() => setView('CATALOG')}
          className="bg-brand-orange hover:bg-[#368800] text-white px-8 py-3 rounded font-bold shadow-lg transition-colors"
        >
          Volver al Catálogo
        </button>
      </div>
    );
  }

  return (
    <div className="bg-brand-light min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Carrito de Compras</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              {cart.map(item => (
                <div key={item.id} className="p-6 border-b border-slate-100 last:border-0 flex flex-col sm:flex-row items-center gap-6 hover:bg-slate-50 transition-colors">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 object-cover rounded-lg bg-slate-100"
                  />
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-bold text-slate-800 text-lg">{item.name}</h3>
                    <p className="text-sm text-slate-500 mb-1">Unidad: {item.unit}</p>
                    <p className="text-brand-orange font-bold">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-slate-300 rounded bg-white">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 text-slate-600 hover:bg-slate-100 transition-colors font-bold"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-slate-900 font-medium min-w-[3ch] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 text-slate-600 hover:bg-slate-100 transition-colors font-bold"
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                      title="Eliminar"
                    >
                      <XIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-between items-center">
                <button 
                    onClick={() => setView('CATALOG')}
                    className="text-slate-600 font-medium hover:text-brand-orange flex items-center gap-2"
                >
                    &larr; Continuar Comprando
                </button>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="w-full lg:w-96">
            <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Resumen del Pedido</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Impuestos (Estimado 16%)</span>
                  <span>${(cartTotal * 0.16).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Envío</span>
                  <span className="text-brand-green font-medium">Gratis</span>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between text-lg font-bold text-slate-900">
                  <span>Total</span>
                  <span>${(cartTotal * 1.16).toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={() => setView('CHECKOUT')}
                className="w-full bg-brand-orange hover:bg-[#368800] text-white py-4 rounded-lg font-bold text-lg shadow-lg shadow-green-900/20 transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2"
              >
                Proceder al Pago <ChevronRightIcon className="w-5 h-5" />
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-4 text-slate-300">
                {/* Mock Payment Icons */}
                <div className="w-10 h-6 bg-slate-200 rounded"></div>
                <div className="w-10 h-6 bg-slate-200 rounded"></div>
                <div className="w-10 h-6 bg-slate-200 rounded"></div>
              </div>
              <p className="text-center text-xs text-slate-400 mt-2">Pagos procesados de forma segura</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};