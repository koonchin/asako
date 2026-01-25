// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  // 🇬🇧 English
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
      product_grid: {
        badge: "Certified Inventory",
        title: "Available Machinery",
        filter: "Filters",
        sort: "Sort By: Price"
      },
      about: {
        badge: "Our Story",
        title: "Japanese Heritage,\nGlobal Future.",
        desc1: "Founded in Osaka, Asako Agri-Tech has dedicated over 50 years to mastering the art of agricultural machinery. We believe that precision engineering is not just about mechanics, but about respecting the land and the harvest.",
        desc2: "Our mission is to bridge the gap between traditional farming wisdom and modern technological advancement.",
        stat_years: "Years of Experience",
        stat_clients: "Global Partners"
      },
      services: {
        badge: "Total Solutions",
        title: "Comprehensive Care",
        card1_title: "Maintenance",
        card1_desc: "Regular check-ups and precision tuning by certified engineers.",
        card2_title: "Training",
        card2_desc: "On-site operational training for your team to maximize efficiency.",
        card3_title: "Consulting",
        card3_desc: "Expert advice on machinery selection based on your soil and crop type."
      },
      spare_parts: {
        badge: "Genuine Parts",
        title: "Keep It Running.",
        subtitle: "Using non-genuine parts can reduce machinery lifespan by 40%. We stock over 10,000+ original parts for immediate dispatch.",
        button: "Order Parts"
      },
      features: {
        durability_label: "Durability",
        durability_title: "High-Stress\nEndurance",
        durability_desc: "Built to withstand the toughest climates and terrains, ensuring your harvest is never compromised. Engineering that lasts generations.",
        precision_label: "Precision",
        precision_title: "Smart GPS\nSystems",
        precision_desc: "Advanced satellite guidance for sub-centimeter accuracy in planting and fertilization. Minimize waste, maximize yield.",
        service_label: "Service",
        service_title: "24/7 Field\nSupport",
        service_desc: "Our engineers are on standby nationwide to ensure zero downtime for your machinery. Reliability is our core promise."
      },
      brands: {
        kubota: "Kubota",
        yanmar: "Yanmar",
        iseki: "Iseki",
        mitsubishi: "Mitsubishi",
        shibaura: "Shibaura"
      },
      cta: {
        title: "Ready to upgrade your field's performance?",
        desc: "Consult with our agricultural experts to find the perfect machinery configuration for your specific land requirements.",
        button: "Book a Consultation"
      },
      footer: {
        address_line1: "122-8001 Osaka, Kita-ku",
        address_line2: "Innovation Tower 42F",
        address_country: "Japan",
        col_inventory: "Inventory",
        col_support: "Support",
        col_newsletter: "Newsletter",
        newsletter_desc: "Stay updated on new seasonal arrivals.",
        email_placeholder: "EMAIL ADDRESS",
        btn_join: "Join",
        rights: "© 2024 ASAKO AGRI-TECH CORP. ALL RIGHTS RESERVED.",
        link_privacy: "Privacy",
        link_terms: "Terms",
        link_ethics: "Ethics",
        // 👇 ส่วนที่เพิ่มเข้ามา (Sub-links)
        tractors: "Tractors",
        harvesters: "Harvesters",
        rice_planters: "Rice Planters",
        maintenance: "Maintenance",
        field_service: "Field Service",
        spare_parts: "Spare Parts",
        financing: "Financing",
        warranty: "Warranty"
      },
      common: {
        inquire: "Inquire Now",
        load_more: "Load More Units"
      }
    }
  },

  // 🇹🇭 Thai
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
      product_grid: {
        badge: "สินค้าที่ผ่านการรับรอง",
        title: "เครื่องจักรพร้อมส่ง",
        filter: "ตัวกรอง",
        sort: "เรียงตาม: ราคา"
      },
      about: {
        badge: "เรื่องราวของเรา",
        title: "มรดกญี่ปุ่น,\nอนาคตระดับโลก",
        desc1: "ก่อตั้งขึ้นในโอซาก้า Asako Agri-Tech ทุ่มเทเวลากว่า 50 ปีในการเรียนรู้ศิลปะแห่งเครื่องจักรกลการเกษตร เราเชื่อว่าวิศวกรรมความแม่นยำไม่ใช่แค่เรื่องของกลไก แต่คือการเคารพต่อผืนดินและผลผลิต",
        desc2: "พันธกิจของเราคือการเชื่อมช่องว่างระหว่างภูมิปัญญาการทำฟาร์มแบบดั้งเดิมกับความก้าวหน้าทางเทคโนโลยีสมัยใหม่",
        stat_years: "ปีแห่งประสบการณ์",
        stat_clients: "พันธมิตรทั่วโลก"
      },
      services: {
        badge: "โซลูชั่นครบวงจร",
        title: "การดูแลที่ครอบคลุม",
        card1_title: "การบำรุงรักษา",
        card1_desc: "การตรวจเช็คและปรับจูนความแม่นยำโดยวิศวกรที่ผ่านการรับรอง",
        card2_title: "การฝึกอบรม",
        card2_desc: "ฝึกอบรมการใช้งานหน้างานให้ทีมของคุณเพื่อเพิ่มประสิทธิภาพสูงสุด",
        card3_title: "ที่ปรึกษา",
        card3_desc: "คำแนะนำจากผู้เชี่ยวชาญในการเลือกเครื่องจักรตามสภาพดินและพืชผล"
      },
      spare_parts: {
        badge: "อะไหล่แท้",
        title: "ให้งานเดินต่อเนื่อง",
        subtitle: "การใช้อะไหล่ปลอมอาจลดอายุการใช้งานเครื่องจักรได้ถึง 40% เรามีสต็อกอะไหล่แท้กว่า 10,000 รายการพร้อมส่งทันที",
        button: "สั่งซื้ออะไหล่"
      },
      features: {
        durability_label: "ความทนทาน",
        durability_title: "ทนทานต่อ\nสภาวะงานหนัก",
        durability_desc: "สร้างขึ้นเพื่อทนต่อสภาพอากาศและภูมิประเทศที่โหดร้ายที่สุด เพื่อให้มั่นใจว่าการเก็บเกี่ยวของคุณจะไม่สะดุด",
        precision_label: "ความแม่นยำ",
        precision_title: "ระบบ GPS\nอัจฉริยะ",
        precision_desc: "การนำทางด้วยดาวเทียมขั้นสูงเพื่อความแม่นยำระดับเซนติเมตรในการปลูกและใส่ปุ๋ย",
        service_label: "บริการ",
        service_title: "บริการสนับสนุน\nภาคสนาม 24/7",
        service_desc: "วิศวกรของเราเตรียมพร้อมทั่วประเทศเพื่อให้แน่ใจว่าเครื่องจักรของคุณจะไม่หยุดทำงาน"
      },
      brands: {
        kubota: "คูโบต้า",
        yanmar: "ยันม่าร์",
        iseki: "อิเซกิ",
        mitsubishi: "มิตซูบิชิ",
        shibaura: "ชิบูรา"
      },
      cta: {
        title: "พร้อมยกระดับประสิทธิภาพไร่นาของคุณหรือยัง?",
        desc: "ปรึกษาผู้เชี่ยวชาญด้านการเกษตรของเราเพื่อค้นหาการตั้งค่าเครื่องจักรที่สมบูรณ์แบบ",
        button: "จองคิวปรึกษา"
      },
      footer: {
        address_line1: "122-8001 โอซาก้า, คิตะ-กุ",
        address_line2: "อาคารนวัตกรรม ชั้น 42",
        address_country: "ญี่ปุ่น",
        col_inventory: "คลังสินค้า",
        col_support: "ช่วยเหลือ",
        col_newsletter: "จดหมายข่าว",
        newsletter_desc: "ติดตามข่าวสารการมาถึงของสินค้าใหม่ตามฤดูกาล",
        email_placeholder: "ที่อยู่อีเมล",
        btn_join: "สมัครสมาชิก",
        rights: "© 2024 ASAKO AGRI-TECH CORP. สงวนลิขสิทธิ์",
        link_privacy: "ความเป็นส่วนตัว",
        link_terms: "เงื่อนไข",
        link_ethics: "จริยธรรม",
        // 👇 ส่วนที่เพิ่มเข้ามา (Sub-links)
        tractors: "รถแทรกเตอร์",
        harvesters: "รถเกี่ยวข้าว",
        rice_planters: "รถดำนา",
        maintenance: "การบำรุงรักษา",
        field_service: "บริการภาคสนาม",
        spare_parts: "อะไหล่",
        financing: "สินเชื่อ",
        warranty: "การรับประกัน"
      },
      common: {
        inquire: "สอบถามทันที",
        load_more: "ดูสินค้าเพิ่มเติม"
      }
    }
  },

  // 🇨🇳 Chinese
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
      product_grid: {
        badge: "认证库存",
        title: "可用机械",
        filter: "筛选",
        sort: "排序：价格"
      },
      about: {
        badge: "我们的故事",
        title: "日本传承，\n展望全球",
        desc1: "Asako Agri-Tech 成立于大阪，50 多年来一直致力于掌握农业机械艺术。我们相信精密工程不仅仅是机械，更是对土地和收成的尊重。",
        desc2: "我们的使命是弥合传统农业智慧与现代技术进步之间的差距。",
        stat_years: "多年经验",
        stat_clients: "全球合作伙伴"
      },
      services: {
        badge: "整体解决方案",
        title: "全面护理",
        card1_title: "维护",
        card1_desc: "由认证工程师进行定期检查和精密调整。",
        card2_title: "培训",
        card2_desc: "为您的团队提供现场操作培训，以最大限度地提高效率。",
        card3_title: "咨询",
        card3_desc: "根据您的土壤和作物类型提供机械选择的专家建议。"
      },
      spare_parts: {
        badge: "原厂配件",
        title: "保持运转。",
        subtitle: "使用非原厂零件可能会使机器寿命缩短 40%。我们库存超过 10,000 种原厂零件，可立即发货。",
        button: "订购零件"
      },
      features: {
        durability_label: "耐用性",
        durability_title: "高强度\n耐受力",
        durability_desc: "专为承受最恶劣的气候和地形而打造，确保您的收成从不妥协。",
        precision_label: "精准度",
        precision_title: "智能 GPS\n系统",
        precision_desc: "先进的卫星制导，实现种植和施肥的厘米级精度。",
        service_label: "服务",
        service_title: "24/7 现场\n支持",
        service_desc: "我们的工程师在全国范围内待命，确保您的机器零停机。"
      },
      brands: {
        kubota: "久保田",
        yanmar: "洋马",
        iseki: "井关",
        mitsubishi: "三菱",
        shibaura: "芝浦"
      },
      cta: {
        title: "准备好提升您的田间绩效了吗？",
        desc: "咨询我们的农业专家，为您特定的土地需求找到完美的机械配置。",
        button: "预约咨询"
      },
      footer: {
        address_line1: "122-8001 大阪市北区",
        address_line2: "创新大厦 42楼",
        address_country: "日本",
        col_inventory: "库存",
        col_support: "支持",
        col_newsletter: "通讯",
        newsletter_desc: "随时了解新季节产品的到货信息。",
        email_placeholder: "电子邮件地址",
        btn_join: "加入",
        rights: "© 2024 ASAKO AGRI-TECH CORP. 保留所有权利。",
        link_privacy: "隐私",
        link_terms: "条款",
        link_ethics: "道德",
        // 👇 ส่วนที่เพิ่มเข้ามา (Sub-links)
        tractors: "拖拉机",
        harvesters: "收割机",
        rice_planters: "插秧机",
        maintenance: "维护",
        field_service: "现场服务",
        spare_parts: "备件",
        financing: "融资",
        warranty: "保修"
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
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;