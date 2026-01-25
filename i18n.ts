// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  // 🇬🇧 ภาษาอังกฤษ
  en: {
    translation: {
      nav: {
        inventory: "Inventory",
        services: "Services",
        about: "About",
        contact: "Contact",
        inquire: "Inquire"
      },
      hero: {
        badge: "Industrial Standard 2024",
        title_line1: "Precision Field",
        title_line2: "Engineering.",
        subtitle: "Bringing the heritage of Japanese craftsmanship to the modern agricultural sector. Efficient, durable, and technologically superior.",
        view_catalog: "View Catalog",
        learn_more: "Learn More"
      },
      common: {
        inquire: "Inquire Now",
        load_more: "Load More Units"
      }
    }
  },

  // 🇹🇭 ภาษาไทย
  th: {
    translation: {
      nav: {
        inventory: "สินค้า",
        services: "บริการ",
        about: "เกี่ยวกับเรา",
        contact: "ติดต่อ",
        inquire: "สอบถามข้อมูล"
      },
      hero: {
        badge: "มาตรฐานอุตสาหกรรม 2024",
        title_line1: "วิศวกรรมสนาม",
        title_line2: "ความแม่นยำสูง",
        subtitle: "นำมรดกแห่งงานฝีมือญี่ปุ่นมาสู่อุตสาหกรรมการเกษตรสมัยใหม่ มีประสิทธิภาพ ทนทาน และล้ำหน้าด้วยเทคโนโลยี",
        view_catalog: "ดูแคตตาล็อก",
        learn_more: "เรียนรู้เพิ่มเติม"
      },
      common: {
        inquire: "สอบถามทันที",
        load_more: "ดูสินค้าเพิ่มเติม"
      }
    }
  },

  // 🇨🇳 ภาษาจีน
  cn: {
    translation: {
      nav: {
        inventory: "库存",
        services: "服务",
        about: "关于我们",
        contact: "联系我们",
        inquire: "咨询"
      },
      hero: {
        badge: "工业标准 2024",
        title_line1: "精密田间",
        title_line2: "工程技术",
        subtitle: "将日本工匠精神带入现代农业领域。高效、耐用、技术卓越。",
        view_catalog: "查看目录",
        learn_more: "了解更多"
      },
      common: {
        inquire: "立即咨询",
        load_more: "加载更多"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "th", // ภาษาเริ่มต้น
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;