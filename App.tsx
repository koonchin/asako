// App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // ต้องมีไฟล์นี้ตามข้อ 1
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Services from './components/Services';
import SpareParts from './components/SpareParts';
import Footer from './components/Footer';
import AgriAdvisor from './components/AgriAdvisor';

// ฟังก์ชันช่วยเลื่อนหน้าจอไปบนสุดเวลาเปลี่ยนหน้า
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
            {/* หน้า Contact ให้เด้งกลับหน้าแรก หรือจะทำหน้าแยกก็ได้ */}
            <Route path="/contact" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <AgriAdvisor />
      </div>
    </Router>
  );
};

export default App;