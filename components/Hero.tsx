// components/Hero.tsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // อย่าลืม import

const Hero: React.FC = () => {
  const { t } = useTranslation(); // เรียกใช้ hook

  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-red-100 bg-red-50/30 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
            {/* badge */}
            <span className="text-[10px] font-black uppercase tracking-widest text-red-600">
              {t('hero.badge')}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">
            {/* title_line1 */}
            {t('hero.title_line1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">
              {/* title_line2 */}
              {t('hero.title_line2')}
            </span>
          </h1>

          <p className="text-gray-500 text-lg max-w-lg leading-relaxed font-light">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-xl shadow-red-600/10">
              {t('hero.view_catalog')}
            </button>
            <button className="border border-gray-200 hover:bg-gray-50 text-gray-900 px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all">
              {t('hero.learn_more')}
            </button>
          </div>
        </div>
        
        {/* ... ส่วนรูปภาพด้านล่างเหมือนเดิม ... */}
        <div className="flex-1 w-full relative">
           {/* ... */}
        </div>
      </div>
    </section>
  );
};

export default Hero;