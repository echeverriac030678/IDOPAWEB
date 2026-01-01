import React from 'react';
import { useStore } from '../context/StoreContext';
import { INVENTORY } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { ChevronRightIcon, TruckIcon, ShieldCheckIcon, CheckCircleIcon } from '../components/Icons';

export const Home: React.FC = () => {
  const { setView, setCategory } = useStore();

  const handleCategoryClick = (cat: any) => {
    setCategory(cat);
    setView('CATALOG');
  };

  const featuredProducts = INVENTORY.slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/ido-hero.png" 
            onError={(e) => {
                // Fallback visual in case the file isn't present locally
                e.currentTarget.src = "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop";
            }}
            alt="IDO Hero Banner" 
            className="w-full h-full object-cover opacity-90"
          />
          {/* Gradient to make text readable on the left, but show image clearly on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-bold mb-4 border border-brand-orange/50 backdrop-blur-sm">
              NUEVO STOCK 2024
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
              Potencia y Resistencia para el <span className="text-brand-orange">Trabajo Duro</span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 leading-relaxed drop-shadow-sm font-medium">
              Líderes en repuestos agrícolas de alto rendimiento y ferretería industrial especializada. 
              Calidad garantizada para profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleCategoryClick('all')}
                className="bg-brand-orange hover:bg-[#368800] text-white px-8 py-3 rounded font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-green-900/30 flex items-center justify-center gap-2"
              >
                Ver Catálogo Completo
                <ChevronRightIcon className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleCategoryClick('agricultural')}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3 rounded font-bold transition-all backdrop-blur-sm"
              >
                Repuestos Agrícolas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                <div className="bg-brand-green/10 p-3 rounded-full text-brand-green">
                    <TruckIcon className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 text-lg">Envío Nacional</h3>
                    <p className="text-slate-500 text-sm">Despachos rápidos a todo el país en menos de 48 horas.</p>
                </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange">
                    <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 text-lg">Garantía Técnica</h3>
                    <p className="text-slate-500 text-sm">Productos certificados y soporte técnico especializado.</p>
                </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                <div className="bg-blue-600/10 p-3 rounded-full text-blue-600">
                    <CheckCircleIcon className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 text-lg">Venta Mayorista</h3>
                    <p className="text-slate-500 text-sm">Precios especiales para volumen y tornillería a granel.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Nuestras Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              onClick={() => handleCategoryClick('agricultural')}
              className="relative h-64 rounded-xl overflow-hidden cursor-pointer group shadow-lg"
            >
              <img src="https://picsum.photos/seed/agri/600/400" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Agrícola" />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white uppercase tracking-wider border-2 border-white/50 px-6 py-2 backdrop-blur-sm group-hover:bg-white/10 transition-all">Agrícola</h3>
              </div>
            </div>
            <div 
              onClick={() => handleCategoryClick('screws')}
              className="relative h-64 rounded-xl overflow-hidden cursor-pointer group shadow-lg"
            >
              <img src="https://picsum.photos/seed/metal/600/400" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Tornillería" />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white uppercase tracking-wider border-2 border-white/50 px-6 py-2 backdrop-blur-sm group-hover:bg-white/10 transition-all">Tornillería</h3>
              </div>
            </div>
            <div 
              onClick={() => handleCategoryClick('tools')}
              className="relative h-64 rounded-xl overflow-hidden cursor-pointer group shadow-lg"
            >
              <img src="https://picsum.photos/seed/workshop/600/400" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Herramientas" />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white uppercase tracking-wider border-2 border-white/50 px-6 py-2 backdrop-blur-sm group-hover:bg-white/10 transition-all">Herramientas</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Destacados de la Semana</h2>
            <button 
                onClick={() => setView('CATALOG')}
                className="text-brand-orange font-semibold hover:text-[#368800] text-sm flex items-center gap-1"
            >
                Ver todo <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};