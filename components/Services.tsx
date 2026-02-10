// components/Services.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    { title: t('services.card1_title'), desc: t('services.card1_desc') },
    { title: t('services.card2_title'), desc: t('services.card2_desc') },
    { title: t('services.card3_title'), desc: t('services.card3_desc') }
  ];

  return (
    // ลบ bg-gray-900 ออก เพราะเรากำหนด bg-red-700 จากข้างนอกแล้ว
    <section id="services" className="py-24 px-6 bg-transparent text-white"> 
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70 block">
            {t('services.badge')}
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
            {t('services.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group p-8 border border-white/20 hover:border-white transition-colors bg-white/5 backdrop-blur-sm">
              <div className="w-12 h-12 mb-6 text-white">
                 {/* Icon SVG (ใช้สีขาว) */}
                 <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide mb-4 text-white">{s.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;