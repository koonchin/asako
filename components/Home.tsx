// components/Home.tsx
import React from 'react';
import Hero from './Hero';
import ProductGrid from './ProductGrid';
import About from './About';
import Services from './Services';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; // สำหรับการนำทางไปยังหน้าสินค้า
const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // ฟังก์ชันเลื่อนหน้าไปยังส่วนสินค้า
  const scrollToProducts = () => {
    const element = document.getElementById('product-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const promoCategories = [
    { id: 1, name: t('promotion.categories.water'), img: '/images/5/1.jpg', cat: 'Water Systems' },
    { id: 2, name: t('promotion.categories.shredder'), img: '/images/2/1.jpg', cat: 'Shredders' },
    { id: 3, name: t('promotion.categories.processing'), img: '/images/3/1.jpg', cat: 'Processing' },
    { id: 4, name: t('promotion.categories.packaging'), img: '/images/4/1.jpg', cat: 'Packaging' },
  ];

  return (
    <>
      <Hero />

{/* ✅ แก้ไข Section Promotion */}
      <section className="bg-red-700 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 h-full lg:h-[500px]">
          
          {/* 👈 ฝั่งซ้าย: รูป Promotion และ Text (Redirect ไปหน้า Product Grid ทั้งหมด) */}
          <div 
            onClick={() => navigate('/inventory')}
            className="lg:w-1/3 relative group cursor-pointer overflow-hidden rounded-sm shadow-2xl h-[400px] lg:h-auto"
          >
            <img 
              src="/images/demo.jpg" // รูปโปรโมชั่นหลัก
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Promotion"
            />
            {/* Overlay สีแดงโปร่งแสง */}
            <div className="absolute inset-0 bg-red-900/40 group-hover:bg-red-900/20 transition-colors"></div>
            {/* ข้อความทับบนรูป */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
              <h2 className="text-4xl font-black italic uppercase tracking-tighter text-center">
                {t('promotion.title')}
              </h2>
              <p className="text-2xl font-light opacity-90 uppercase tracking-[0.3em] mt-2">
                {t('promotion.subtitle')}
              </p>
              <div className="w-16 h-1 bg-white mt-4 transition-all group-hover:w-24"></div>
            </div>
          </div>

          {/* 👉 ฝั่งขวา: Grid 4 ช่อง (แยกตาม Category) */}
          <div className="lg:w-2/3 grid grid-cols-2 gap-4 h-full lg:h-auto">
            {promoCategories.map((item) => (
              <div 
                key={item.id}
                onClick={() => navigate(`/inventory?category=${item.cat}`)} // Redirect พร้อมฟิลเตอร์ Category
                className="relative group cursor-pointer overflow-hidden bg-gray-900 rounded-sm shadow-lg h-[200px] lg:h-auto"
              >
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                  alt={item.name}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-lg font-black uppercase tracking-tight">
                    {item.name}
                  </h3>
                  <button className="text-red-500 text-[10px] font-bold uppercase tracking-widest mt-2 flex items-center gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    VIEW CATEGORY <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div id="product-grid">
        <ProductGrid />
      </div>

      {/* ✅ Download Catalog Section (กดได้ทั้ง Section เพื่อเปิด PDF) */}
      <a 
        href="/catalog.pdf" // เปลี่ยนเป็น path ของไฟล์ PDF จริงในโฟลเดอร์ public
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-red-600 py-12 px-6 hover:bg-red-700 transition-colors cursor-pointer"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="relative px-5">
             {/* รูป Mockup แคตตาล็อก */}
             <img src="/images/7/1.jpg" className="h-40 w-32 object-cover border-4 border-white shadow-2xl rotate-[-10deg]" />
             <img src="/images/8/1.jpg" className="h-40 w-32 object-cover border-4 border-white shadow-2xl absolute top-0 left-10 rotate-[5deg] z-10" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter leading-tight uppercase italic">
              {t('download.title')}
            </h2>
            <p className="text-white/80 font-bold mt-2 tracking-[0.2em] animate-pulse">
            </p>
          </div>
        </div>
      </a>

      <About />

      <div className="bg-red-700">
         <Services /> 
      </div>

      {/* ✅ Dealer CTA (ขยับขึ้นบน) */}
      <section className="relative min-h-[550px] flex items-start justify-center pt-24 pb-32 px-6">
         <div className="absolute inset-0 z-0">
            <img src="/images/image_1e7a1c.jpg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white mix-blend-multiply"></div>
         </div>

         <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">
            <img 
              src="/images/logo.jpg" 
              className="h-28 md:h-36 w-auto border-4 border-white rounded-full bg-white shadow-2xl" 
            />
            <div className="text-center space-y-4">
              <h2 className="text-red-600 text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
                 {t('dealer_cta.subtitle')}
              </h2>
              <div className="w-24 h-2 bg-red-600 mx-auto"></div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-16 py-4 text-2xl font-black transition-all shadow-2xl hover:scale-110 active:scale-95 border border-red-400 uppercase">
               {t('dealer_cta.button')}
            </button>
         </div>
      </section>
    </>
  );
};

export default Home;