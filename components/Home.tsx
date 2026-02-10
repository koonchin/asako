// src/components/Home.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from './Hero';

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      {/* Features Section */}
      <section className="py-24 bg-gray-900 text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
           <div className="space-y-6">
              <span className="text-red-600 font-bold uppercase tracking-widest">{t('features.durability_label')}</span>
              <h3 className="text-3xl font-black">{t('features.durability_title')}</h3>
              <p className="text-gray-400 text-sm">{t('features.durability_desc')}</p>
           </div>
           <div className="space-y-6">
              <span className="text-red-600 font-bold uppercase tracking-widest">{t('features.precision_label')}</span>
              <h3 className="text-3xl font-black">{t('features.precision_title')}</h3>
              <p className="text-gray-400 text-sm">{t('features.precision_desc')}</p>
           </div>
           <div className="space-y-6">
              <span className="text-red-600 font-bold uppercase tracking-widest">{t('features.service_label')}</span>
              <h3 className="text-3xl font-black">{t('features.service_title')}</h3>
              <p className="text-gray-400 text-sm">{t('features.service_desc')}</p>
           </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 bg-red-600 text-white text-center">
         <h2 className="text-5xl font-black mb-6">{t('cta.title')}</h2>
         <p className="text-xl font-light mb-8">{t('cta.desc')}</p>
         <button className="bg-white text-red-600 px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-100 transition-all">
           {t('cta.button')}
         </button>
      </section>
    </>
  );
};

export default Home;