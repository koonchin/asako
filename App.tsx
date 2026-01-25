// App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import AgriAdvisor from './components/AgriAdvisor';
import About from './components/About';       // Import ใหม่
import Services from './components/Services'; // Import ใหม่
import SpareParts from './components/SpareParts'; // Import ใหม่
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* Features Section */}
        <section className="py-24 bg-gray-900 text-white px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
              {/* Feature 1 */}
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 block">
                  {t('features.durability_label')}
                </span>
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-tight whitespace-pre-line">
                  {t('features.durability_title')}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-loose">
                  {t('features.durability_desc')}
                </p>
              </div>
              {/* Feature 2 */}
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 block">
                  {t('features.precision_label')}
                </span>
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-tight whitespace-pre-line">
                  {t('features.precision_title')}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-loose">
                  {t('features.precision_desc')}
                </p>
              </div>
              {/* Feature 3 */}
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 block">
                  {t('features.service_label')}
                </span>
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-tight whitespace-pre-line">
                  {t('features.service_title')}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-loose">
                  {t('features.service_desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Inventory Section */}
        <ProductGrid />

        {/* 2. Services Section */}
        <Services />

        {/* 3. Spare Parts Section */}
        <SpareParts />

        {/* 4. About Section */}
        <About />

        {/* Brand Strip */}
        <section className="py-32 px-6 border-t border-gray-100 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 bg-white">
           <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 text-3xl font-black tracking-tighter text-gray-900 uppercase">
             <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.kubota')}</span>
             <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.yanmar')}</span>
             <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.iseki')}</span>
             <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.mitsubishi')}</span>
             <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.shibaura')}</span>
           </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className="py-32 px-6 bg-red-600 text-white relative overflow-hidden group">
           <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                {t('cta.title')}
              </h2>
              <p className="text-red-100 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                {t('cta.desc')}
              </p>
              <div className="pt-6">
                <button className="bg-white text-red-600 px-16 py-6 text-sm font-black uppercase tracking-[0.4em] hover:bg-gray-100 transition-all shadow-2xl shadow-black/10 active:scale-95">
                  {t('cta.button')}
                </button>
              </div>
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/5 rounded-full -z-0 scale-150 group-hover:scale-100 transition-transform duration-[3s]"></div>
        </section>
      </main>
      <Footer />
      <AgriAdvisor />
    </div>
  );
};

export default App;