// components/Home.tsx
import React from 'react';
import Hero from './Hero';
import ProductGrid from './ProductGrid'; // 1. นำเข้า ProductGrid
import About from './About';             // 2. นำเข้า About
import Services from './Services';       // 3. นำเข้า Services
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* 1. Main Title / Hero Section */}
      <Hero />
      
      {/* 2. Product Grid (Inventory) */}
      <ProductGrid />

      {/* 3. About Section */}
      <About />

      {/* 4. Service Section */}
      <Services />

      {/* Brand Strip (เก็บไว้ด้านล่างเพื่อความสวยงาม หรือลบออกถ้าไม่ต้องการ) */}
      <section className="py-24 px-6 border-t border-gray-100 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 bg-white">
         <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 text-3xl font-black tracking-tighter text-gray-900 uppercase">
           <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.kubota')}</span>
           <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.yanmar')}</span>
           <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.iseki')}</span>
           <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.mitsubishi')}</span>
           <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.shibaura')}</span>
         </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 bg-red-600 text-white text-center relative overflow-hidden">
         <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-6 tracking-tight">{t('cta.title')}</h2>
            <p className="text-xl font-light mb-10 text-white/90">{t('cta.desc')}</p>
            <button className="bg-white text-red-600 px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl">
              {t('cta.button')}
            </button>
         </div>
         {/* Background Decor */}
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500 to-red-700 opacity-50"></div>
      </section>
    </>
  );
};

export default Home;