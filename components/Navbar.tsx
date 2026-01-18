
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-900 flex items-center justify-center rounded-sm">
            <span className="text-white font-black text-xs">NA</span>
          </div>
          <span className="text-lg font-black tracking-tighter uppercase text-gray-900">
            Asako<span className="text-orange-600">Agri</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-orange-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all">
            Inquire
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-orange-600"
            >
              {link.label}
            </a>
          ))}
          <button className="bg-orange-600 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest">
            Request Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
