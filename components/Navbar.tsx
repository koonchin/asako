// src/components/Navbar.tsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // 🔴 import hook
// import { NAV_LINKS } from '../constants'; <--- เราจะย้ายลิงก์มาแปลในนี้แทน หรือแก้ constants ให้รองรับภาษา

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(); // 🔴 เรียกใช้ hook

  // ฟังก์ชันเปลี่ยนภาษา
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // ปิดเมนูมือถือถ้าเปิดอยู่
  };

  // สร้างลิงก์แบบ Dynamic ตามภาษา
  const navLinks = [
    { label: t('nav.inventory'), href: '#inventory' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo (เหมือนเดิม) */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-900 flex items-center justify-center rounded-sm">
            <span className="text-white font-black text-xs">NA</span>
          </div>
          <span className="text-lg font-black tracking-tighter uppercase text-gray-900">
            Asako<span className="text-red-600">Agri</span>
          </span>
        </div>

        {/* Desktop Links & Language Switcher */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-red-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all">
            {t('nav.inquire')}
          </button>

          {/* 🔴 Language Dropdown (Desktop) */}
          <div className="relative group ml-4">
            <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-red-600">
              <span className="mr-1">🌐</span> {i18n.language.toUpperCase()}
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <button onClick={() => changeLanguage('th')} className="block w-full text-left px-4 py-3 text-xs font-bold hover:bg-gray-50 hover:text-red-600">🇹🇭 Thai</button>
              <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-3 text-xs font-bold hover:bg-gray-50 hover:text-red-600">🇬🇧 English</button>
              <button onClick={() => changeLanguage('cn')} className="block w-full text-left px-4 py-3 text-xs font-bold hover:bg-gray-50 hover:text-red-600">🇨🇳 Chinese</button>
            </div>
          </div>
        </div>

        {/* Mobile Toggle (แก้ให้รวม Language Switcher ด้วยก็ได้) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-600 focus:outline-none">
           {/* ... icon svg เดิม ... */}
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
           </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}>
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-red-600">
              {link.label}
            </a>
          ))}
          
          {/* 🔴 Mobile Language Switcher */}
          <div className="flex gap-4 border-t border-gray-100 pt-4">
            <button onClick={() => changeLanguage('th')} className={`text-xs font-bold uppercase px-3 py-2 rounded ${i18n.language === 'th' ? 'bg-red-600 text-white' : 'bg-gray-100'}`}>TH</button>
            <button onClick={() => changeLanguage('en')} className={`text-xs font-bold uppercase px-3 py-2 rounded ${i18n.language === 'en' ? 'bg-red-600 text-white' : 'bg-gray-100'}`}>EN</button>
            <button onClick={() => changeLanguage('cn')} className={`text-xs font-bold uppercase px-3 py-2 rounded ${i18n.language === 'cn' ? 'bg-red-600 text-white' : 'bg-gray-100'}`}>CN</button>
          </div>

          <button className="bg-red-600 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest">
            {t('nav.inquire')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;