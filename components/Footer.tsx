
import React from 'react';

const Footer: React.FC = () => {
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
              122-8001 Osaka, Kita-ku <br />
              Innovation Tower 42F <br />
              Japan
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-6">Inventory</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <li><a href="#" className="hover:text-red-600 transition-colors">Tractors</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Harvesters</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Rice Planters</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              <li><a href="#" className="hover:text-red-600 transition-colors">Field Service</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Spare Parts</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Warranty</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-6">Newsletter</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Stay updated on new seasonal arrivals.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="flex-1 bg-gray-50 border border-gray-100 px-4 py-3 text-[10px] focus:outline-none focus:border-red-600 transition-colors"
              />
              <button className="bg-red-600 text-white px-4 py-3 text-[10px] font-black uppercase tracking-widest">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            © 2024 Asako AGRI-TECH CORP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
