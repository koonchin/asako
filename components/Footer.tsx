// components/Footer.tsx
import React from 'react';
import { useTranslation } from 'react-i18next'; // Import เพิ่ม

const Footer: React.FC = () => {
  const { t } = useTranslation(); // เรียกใช้ hook

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-900 flex items-center justify-center rounded-sm">
                <span className="text-white font-black text-xs">NA</span>
              </div>
              <span className="text-lg font-black tracking-tighter uppercase text-gray-900">
                Asako<span className="text-red-600">Agri</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest leading-loose">
              {t('footer.address_line1')} <br />
              {t('footer.address_line2')} <br />
              {t('footer.address_country')}
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-6">{t('footer.col_inventory')}</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <li><a href="#" className="hover:text-red-600 transition-colors">{t('footer.tractors')}</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">{t('footer.harvesters')}</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">{t('footer.rice_planters')}</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">{t('footer.maintenance')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-6">{t('footer.col_support')}</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <li><a href="#" className="hover:text-red-600 transition-colors">{t('footer.field_service')}</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">{t('footer.spare_parts')}</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">{t('footer.financing')}</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">{t('footer.warranty')}</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-6">{t('footer.col_newsletter')}</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t('footer.newsletter_desc')}</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t('footer.email_placeholder')}
                className="flex-1 bg-gray-50 border border-gray-100 px-4 py-3 text-[10px] focus:outline-none focus:border-red-600 transition-colors"
              />
              <button className="bg-red-600 text-white px-4 py-3 text-[10px] font-black uppercase tracking-widest">
                {t('footer.btn_join')}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            {t('footer.rights')}
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-gray-900">{t('footer.link_privacy')}</a>
            <a href="#" className="hover:text-gray-900">{t('footer.link_terms')}</a>
            <a href="#" className="hover:text-gray-900">{t('footer.link_ethics')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;