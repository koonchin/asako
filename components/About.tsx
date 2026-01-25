// components/About.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 block">
            {t('about.badge')}
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-[1.1] whitespace-pre-line">
            {t('about.title')}
          </h2>
          <div className="space-y-6 text-gray-500 font-light leading-relaxed max-w-lg">
            <p>{t('about.desc1')}</p>
            <p>{t('about.desc2')}</p>
          </div>
          <div className="flex gap-12 pt-8 border-t border-gray-100">
            <div>
              <span className="block text-4xl font-black text-gray-900">50+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400">{t('about.stat_years')}</span>
            </div>
            <div>
              <span className="block text-4xl font-black text-gray-900">12k+</span>
              <span className="text-[10px] uppercase tracking-widest text-gray-400">{t('about.stat_clients')}</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative w-full h-[500px]">
           <div className="absolute inset-0 bg-gray-200">
             {/* ใส่รูปเจ้าของหรือโรงงานที่นี่ */}
                <img 
                src="/images/about-us.jpg" 
                alt="Factory" 
                className="w-full h-full"
                />
           </div>
           {/* Decorative Box */}
        </div>
      </div>
    </section>
  );
};

export default About;