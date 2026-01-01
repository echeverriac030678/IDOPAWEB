import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';

// Main Content Logic
const MainContent: React.FC = () => {
  const { currentView } = useStore();

  switch (currentView) {
    case 'HOME': return <Home />;
    case 'CATALOG': return <Catalog />;
    case 'PRODUCT_DETAIL': return <ProductDetail />;
    case 'CART': return <Cart />;
    case 'CHECKOUT': return <Checkout />;
    case 'SUCCESS': return <Checkout />; // Handled internally by Checkout component state
    default: return <Home />;
  }
};

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div className="flex flex-col min-h-screen font-sans bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-grow">
          <MainContent />
        </main>
        <Footer />
      </div>
    </StoreProvider>
  );
};

export default App;