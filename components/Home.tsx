// components/Home.tsx
import React from 'react';
import Hero from './Hero';
import ProductGrid from './ProductGrid';
import About from './About';
import Services from './Services';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* 1. Hero: White Background */}
      <Hero />
      
      {/* 2. Inventory: Red Light Background (เพื่อให้สินค้าเด่น) */}
      <div className="bg-red-50">
        <ProductGrid />
      </div>

      {/* 3. About: White Background (อ่านง่าย สบายตา) */}
      <About />

      {/* 4. Services: Red Theme (ให้ดูแข็งแกร่ง น่าเชื่อถือ) */}
      {/* เราต้องไปแก้ Services.tsx ให้รับ prop หรือแก้สีในไฟล์นั้นโดยตรง */}
      {/* แต่เพื่อความง่าย ผมจะแก้สีพื้นหลังที่นี่ และส่งผลไปถึงข้างใน */}
      <div className="bg-red-700 text-white">
         <Services /> 
         {/* หมายเหตุ: อาจต้องเข้าไปแก้ text color ใน Services.tsx ให้เป็น dynamic หรือขาวถ้าพื้นหลังแดง */}
      </div>

      {/* Brand Strip: White */}
      <section className="py-24 px-6 border-t border-gray-100 bg-white">
         <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 text-3xl font-black tracking-tighter text-gray-300 uppercase">
           <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.kubota')}</span>
           <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.yanmar')}</span>
           <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.iseki')}</span>
           <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.mitsubishi')}</span>
           <span className="hover:text-red-600 cursor-default transition-colors">{t('brands.shibaura')}</span>
         </div>
      </section>

      {/* CTA Section: Red Gradient (ปิดท้าย) */}
      <section id="contact" className="py-32 px-6 bg-gradient-to-br from-red-600 to-red-800 text-white text-center relative overflow-hidden">
         <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-6 tracking-tight">{t('cta.title')}</h2>
            <p className="text-xl font-light mb-10 text-white/90">{t('cta.desc')}</p>
            <button className="bg-white text-red-700 px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl">
              {t('cta.button')}
            </button>
         </div>
         {/* Background Decor */}
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </section>
    </>
  );
};

export default Home;