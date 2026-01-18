
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-orange-100 bg-orange-50/30 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse"></span>
            <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">Industrial Standard 2024</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">
            Precision Field <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Engineering.</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-lg leading-relaxed font-light">
            Bringing the heritage of Japanese craftsmanship to the modern agricultural sector. Efficient, durable, and technologically superior.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-xl shadow-orange-600/10">
              View Catalog
            </button>
            <button className="border border-gray-200 hover:bg-gray-50 text-gray-900 px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="aspect-[4/3] w-full overflow-hidden border border-gray-100 shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=2000" 
               alt="Modern Tractor" 
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
             />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-600/5 -z-10 blur-3xl"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-900/5 -z-10 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
