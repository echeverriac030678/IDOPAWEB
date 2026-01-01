import React, { useState, useMemo } from 'react';
import { useStore } from '../context/StoreContext';
import { INVENTORY, CATEGORIES } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { SearchIcon } from '../components/Icons';

export const Catalog: React.FC = () => {
  const { activeCategory, setCategory } = useStore();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return INVENTORY.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="bg-brand-light min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Categorías</h3>
              <ul className="space-y-2">
                {CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id as any)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors text-sm ${
                        activeCategory === cat.id 
                          ? 'bg-brand-orange text-white font-medium shadow-md' 
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <h3 className="font-bold text-slate-900 mb-4 text-sm">Estado</h3>
                <div className="flex items-center gap-2 mb-2">
                  <input type="checkbox" id="stock" className="rounded text-brand-orange focus:ring-brand-orange" defaultChecked />
                  <label htmlFor="stock" className="text-sm text-slate-600">En Stock</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="offer" className="rounded text-brand-orange focus:ring-brand-orange" />
                    <label htmlFor="offer" className="text-sm text-slate-600">En Oferta</label>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Grid */}
          <main className="flex-1">
            {/* Search Header */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <h1 className="text-2xl font-bold text-slate-800">
                    {CATEGORIES.find(c => c.id === activeCategory)?.label || 'Catálogo'}
                    <span className="ml-2 text-sm font-normal text-slate-500">({filteredProducts.length} productos)</span>
                </h1>
                <div className="relative w-full sm:w-64">
                    <input 
                        type="text" 
                        placeholder="Buscar repuesto..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
                    />
                    <SearchIcon className="absolute left-3 top-2.5 text-slate-400 w-4 h-4" />
                </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-lg shadow-sm">
                <p className="text-slate-500 text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
                <button 
                    onClick={() => {setCategory('all'); setSearchTerm('');}}
                    className="mt-4 text-brand-orange font-medium hover:underline"
                >
                    Limpiar filtros
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};