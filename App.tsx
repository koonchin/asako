// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Services from './components/Services';
import SpareParts from './components/SpareParts';
import Footer from './components/Footer';
import AgriAdvisor from './components/AgriAdvisor';
import ContactPopup from './components/ContactPopup'; // 🔴 Import

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-red-100 selection:text-red-900 flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<ProductGrid />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/spare-parts" element={<SpareParts />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        
        {/* Floating Elements */}
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col-reverse gap-4 items-end pointer-events-none">
           {/* ให้ ContactPopup อยู่ซ้าย AgriAdvisor เล็กน้อย หรือซ้อนกันคนละมุม */}
           {/* เพื่อความสวยงาม ผมแยก ContactPopup ไปจัดการตำแหน่งเองในไฟล์ของมัน (bottom-8 right-24) */}
        </div>
        
        <ContactPopup /> {/* ขยับมาทางซ้าย (right-24) */}
      </div>
    </Router>
  );
};

export default App;