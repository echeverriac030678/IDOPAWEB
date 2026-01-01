import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { MenuIcon, ShoppingCartIcon, XIcon } from './Icons';

export const Header: React.FC = () => {
  const { cartItemCount, setView, currentView } = useStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItemClass = (active: boolean) => 
    `text-sm font-medium transition-colors hover:text-brand-orange cursor-pointer ${active ? 'text-brand-orange' : 'text-slate-300'}`;

  const handleNav = (view: any) => {
    setView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-dark shadow-md border-b border-slate-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav('HOME')}>
            <div className="bg-brand-orange text-white font-bold text-xl px-2 py-1 rounded">IDO</div>
            <span className="hidden md:block font-bold text-white tracking-tight">Inversiones y Desarrollo Original</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <span className={navItemClass(currentView === 'HOME')} onClick={() => handleNav('HOME')}>Inicio</span>
            <span className={navItemClass(currentView === 'CATALOG')} onClick={() => handleNav('CATALOG')}>Catálogo</span>
            <span className={navItemClass(false)} onClick={() => {}}>Contacto</span>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              className="relative p-2 text-slate-300 hover:text-white transition-colors"
              onClick={() => handleNav('CART')}
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-[10px] font-bold text-white">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 p-4">
          <div className="flex flex-col space-y-4">
            <span className="text-slate-300 font-medium py-2 border-b border-slate-700" onClick={() => handleNav('HOME')}>Inicio</span>
            <span className="text-slate-300 font-medium py-2 border-b border-slate-700" onClick={() => handleNav('CATALOG')}>Catálogo</span>
            <span className="text-slate-300 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Contacto</span>
          </div>
        </div>
      )}
    </header>
  );
};