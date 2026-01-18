
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import AgriAdvisor from './components/AgriAdvisor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900">
      <Navbar />
      <main>
        <Hero />
        
        {/* Features Section */}
        <section className="py-24 bg-gray-900 text-white px-6 relative overflow-hidden">
          {/* Subtle Japanese Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 block">Durability</span>
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-tight">High-Stress <br/>Endurance</h3>
                <p className="text-gray-400 text-sm font-light leading-loose">Built to withstand the toughest climates and terrains, ensuring your harvest is never compromised. Engineering that lasts generations.</p>
              </div>
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 block">Precision</span>
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-tight">Smart GPS <br/>Systems</h3>
                <p className="text-gray-400 text-sm font-light leading-loose">Advanced satellite guidance for sub-centimeter accuracy in planting and fertilization. Minimize waste, maximize yield.</p>
              </div>
              <div className="space-y-6">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-red-600 block">Service</span>
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-tight">24/7 Field <br/>Support</h3>
                <p className="text-gray-400 text-sm font-light leading-loose">Our engineers are on standby nationwide to ensure zero downtime for your machinery. Reliability is our core promise.</p>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid />

        {/* Brand Strip */}
        <section className="py-32 px-6 border-t border-gray-100 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 bg-white">
           <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 text-3xl font-black tracking-tighter text-gray-900 uppercase">
             <span className="hover:text-red-600 cursor-default transition-colors">Kubota</span>
             <span className="hover:text-red-600 cursor-default transition-colors">Yanmar</span>
             <span className="hover:text-red-600 cursor-default transition-colors">Iseki</span>
             <span className="hover:text-red-600 cursor-default transition-colors">Mitsubishi</span>
             <span className="hover:text-red-600 cursor-default transition-colors">Shibaura</span>
           </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className="py-32 px-6 bg-red-600 text-white relative overflow-hidden group">
           <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Ready to upgrade your field's performance?
              </h2>
              <p className="text-red-100 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                Consult with our agricultural experts to find the perfect machinery configuration for your specific land requirements.
              </p>
              <div className="pt-6">
                <button className="bg-white text-red-600 px-16 py-6 text-sm font-black uppercase tracking-[0.4em] hover:bg-gray-100 transition-all shadow-2xl shadow-black/10 active:scale-95">
                  Book a Consultation
                </button>
              </div>
           </div>
           {/* Abstract Circle */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/5 rounded-full -z-0 scale-150 group-hover:scale-100 transition-transform duration-[3s]"></div>
        </section>
      </main>
      <Footer />
      <AgriAdvisor />
    </div>
  );
};

export default App;
