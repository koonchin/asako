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
        about: "About Us",
        contact: "Contact",
        inquire: "Inquire"
      },
      hero: {
        badge: "Trusted for over 30 Years",
        title_line1: "ASAKO",
        title_line2: "THAILAND",
        subtitle: "The first pioneer in Thailand bringing high-quality machinery from global markets to you. From SMEs to Public Companies, we are your partner in business.",
        view_catalog: "View Products",
        learn_more: "Our Story"
      },
      about: {
        badge: "The Founder",
        title: "Surin Songthanin",
        role: "Owner of ASAKO THAILAND",
        intro: "One of the first pioneers in Thailand to import high-quality, affordable machinery from China and abroad. With credit and trust built over 30 years.",
        desc: "We provide everything from industrial and agricultural machinery to equipment for SMEs and Public Companies. Our One-Stop Service covers installation, training, expert technician advice, and complete spare parts.",
        slogan: "Like a thoughtful partner for every business.",
        stat_years: "Years of Trust",
        stat_clients: "Global Partners"
      },
      services: {
        badge: "One Stop Service",
        title: "Comprehensive Care",
        card1_title: "Installation & Training",
        card1_desc: "Professional installation and operational training to ensure you get the most out of your machinery.",
        card2_title: "Expert Support",
        card2_desc: "Our technicians are always ready to provide advice and maintenance support.",
        card3_title: "Full Spare Parts",
        card3_desc: "Complete stock of spare parts to keep your business running without interruption."
      },
      product_grid: {
        badge: "Certified Inventory",
        title: "Available Machinery",
        filter: "Filters",
        sort: "Sort By: Price"
      },
      spare_parts: {
        badge: "Genuine Parts",
        title: "Keep It Running.",
        subtitle: "Using non-genuine parts can reduce machinery lifespan. We stock over 10,000+ original parts for immediate dispatch.",
        button: "Order Parts"
      },
      features: {
        durability_label: "Reliability",
        durability_title: "30+ Years\nExperience",
        durability_desc: "Long-standing credit in the Thai market, trusted by businesses for decades.",
        precision_label: "Variety",
        precision_title: "SME to\nPublic Co.",
        precision_desc: "Machinery solutions tailored for every scale of business, from small shops to large industries.",
        service_label: "Service",
        service_title: "One Stop\nService",
        service_desc: "From installation to maintenance, we take care of everything like a true business partner."
      },
      brands: {
        kubota: "Kubota",
        yanmar: "Yanmar",
        iseki: "Iseki",
        mitsubishi: "Mitsubishi",
        shibaura: "Shibaura"
      },
      cta: {
        title: "Ready to grow your business with us?",
        desc: "Consult with ASAKO THAILAND to find the perfect machinery for your needs.",
        button: "Contact Us Now"
      },
      footer: {
        address_line1: "122-8001 Osaka, Kita-ku", // แก้ที่อยู่จริงได้ตามต้องการ
        address_line2: "Innovation Tower 42F",
        address_country: "Japan",
        col_inventory: "Inventory",
        col_support: "Support",
        col_newsletter: "Newsletter",
        newsletter_desc: "Stay updated on new machinery arrivals.",
        email_placeholder: "EMAIL ADDRESS",
        btn_join: "Join",
        rights: "© 2024 ASAKO AGRI-TECH CORP. ALL RIGHTS RESERVED.",
        link_privacy: "Privacy",
        link_terms: "Terms",
        link_ethics: "Ethics",
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
      },
      contact: {
        title: "Contact Channels",
        desc: "Reach out to us via any of these platforms."
      },
      dealer: {
        title: "Become Our Dealer",
        subtitle: "Join the ASAKO THAILAND network and grow together.",
        button: "Contact Us"
      },
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
        badge: "เครดิตมากกว่า 30 ปี แห่งความไว้วางใจ",
        title_line1: "ASAKO",
        title_line2: "THAILAND",
        subtitle: "เจ้าแรกๆ ในไทยที่นำเครื่องจักรราคาดีจากต่างประเทศสู่ตลาดไทย ครอบคลุมตั้งแต่อุตสาหกรรม เกษตร SME ไปจนถึงระดับมหาชน",
        view_catalog: "ดูสินค้าทั้งหมด",
        learn_more: "รู้จักเรา"
      },
      about: {
        badge: "ผู้ก่อตั้ง",
        title: "คุณสุรินทร์ ส่งทานิน",
        role: "เจ้าของ ASAKO THAILAND",
        intro: "เจ้าแรกๆ ในไทยที่นำเครื่องจักรราคาดีจากจีนและต่างประเทศสู่ตลาดไทย ด้วยเครดิตและความน่าเชื่อถือมากกว่า 30 ปี",
        desc: "เรามีทั้งเครื่องจักรอุตสาหกรรม เครื่องจักรการเกษตร เครื่องจักรสำหรับร้านค้า SME ไปจนถึงระดับมหาชน พร้อม One Stop Service ที่ดูแลอย่างครอบคลุม ตั้งแต่ติดตั้ง วิธีการใช้งาน มีช่างคอยให้คำแนะนำ และอะไหล่อย่างครบครัน",
        slogan: "เหมือนเพื่อนคู่คิด ไปกับทุกธุรกิจที่มาใช้บริการ",
        stat_years: "ปีแห่งประสบการณ์",
        stat_clients: "คู่ค้าทางธุรกิจ"
      },
      services: {
        badge: "One Stop Service",
        title: "บริการครบวงจร",
        card1_title: "ติดตั้งและสอนใช้งาน",
        card1_desc: "บริการติดตั้งเครื่องจักรและสอนวิธีการใช้งานอย่างถูกวิธี เพื่อให้คุณเริ่มต้นธุรกิจได้อย่างมั่นใจ",
        card2_title: "ช่างผู้เชี่ยวชาญ",
        card2_desc: "มีทีมช่างคอยให้คำแนะนำ ปรึกษาปัญหา และดูแลรักษาเครื่องจักร",
        card3_title: "อะไหล่ครบครัน",
        card3_desc: "สต็อกอะไหล่พร้อมให้บริการ เพื่อให้ธุรกิจของคุณเดินหน้าต่อได้ไม่สะดุด"
      },
      product_grid: {
        badge: "คลังสินค้าคุณภาพ",
        title: "เครื่องจักรพร้อมส่ง",
        filter: "ตัวกรอง",
        sort: "เรียงตาม: ราคา"
      },
      spare_parts: {
        badge: "อะไหล่แท้",
        title: "ให้งานเดินต่อเนื่อง",
        subtitle: "การใช้อะไหล่ที่ไม่ได้มาตรฐานอาจลดอายุการใช้งานเครื่องจักร เรามีสต็อกอะไหล่พร้อมส่งทันที",
        button: "สั่งซื้ออะไหล่"
      },
      features: {
        durability_label: "ความเชื่อมั่น",
        durability_title: "ประสบการณ์\nกว่า 30 ปี",
        durability_desc: "เครดิตยาวนานในตลาดไทย ได้รับความไว้วางใจจากธุรกิจหลากหลายมาอย่างยาวนาน",
        precision_label: "ความหลากหลาย",
        precision_title: "SME ถึง\nมหาชน",
        precision_desc: "ตอบโจทย์ทุกขนาดธุรกิจ ตั้งแต่ร้านค้าขนาดเล็ก โรงงาน ไปจนถึงบริษัทมหาชน",
        service_label: "บริการ",
        service_title: "One Stop\nService",
        service_desc: "ดูแลครบจบในที่เดียว ตั้งแต่ติดตั้ง สอนใช้ จนถึงบริการหลังการขาย เหมือนเพื่อนคู่คิด"
      },
      brands: {
        kubota: "คูโบต้า",
        yanmar: "ยันม่าร์",
        iseki: "อิเซกิ",
        mitsubishi: "มิตซูบิชิ",
        shibaura: "ชิบูรา"
      },
      cta: {
        title: "พร้อมยกระดับธุรกิจของคุณหรือยัง?",
        desc: "ปรึกษา ASAKO THAILAND วันนี้ เพื่อหาเครื่องจักรที่เหมาะที่สุดสำหรับธุรกิจคุณ",
        button: "ติดต่อเราทันที"
      },
      footer: {
        address_line1: "122-8001 โอซาก้า, คิตะ-กุ",
        address_line2: "อาคารนวัตกรรม ชั้น 42",
        address_country: "ญี่ปุ่น",
        col_inventory: "คลังสินค้า",
        col_support: "ช่วยเหลือ",
        col_newsletter: "จดหมายข่าว",
        newsletter_desc: "ติดตามข่าวสารเครื่องจักรใหม่ๆ",
        email_placeholder: "ที่อยู่อีเมล",
        btn_join: "สมัครสมาชิก",
        rights: "© 2024 ASAKO AGRI-TECH CORP. สงวนลิขสิทธิ์",
        link_privacy: "ความเป็นส่วนตัว",
        link_terms: "เงื่อนไข",
        link_ethics: "จริยธรรม",
        tractors: "รถแทรกเตอร์",
        harvesters: "รถเกี่ยวข้าว",
        rice_planters: "รถดำนา",
        maintenance: "การบำรุงรักษา",
        field_service: "บริการนอกสถานที่",
        spare_parts: "อะไหล่",
        financing: "สินเชื่อ",
        warranty: "การรับประกัน"
      },
      common: {
        inquire: "สอบถามทันที",
        load_more: "ดูสินค้าเพิ่มเติม"
      },
      contact: {
        title: "ช่องทางการติดต่อ",
        desc: "ติดต่อเราได้ผ่านช่องทางต่างๆ ดังนี้"
      },
      dealer: {
        title: "สมัครตัวแทนจำหน่าย",
        subtitle: "ร่วมเป็นส่วนหนึ่งของเครือข่าย ASAKO THAILAND และเติบโตไปด้วยกัน",
        button: "ติดต่อเรา"
      },
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
        badge: "超过30年的信誉保证",
        title_line1: "ASAKO",
        title_line2: "THAILAND",
        subtitle: "泰国首批引进海外优质平价机械的先驱。服务涵盖工业、农业、SME乃至上市公司。",
        view_catalog: "查看产品",
        learn_more: "了解我们"
      },
      about: {
        badge: "创始人",
        title: "Surin Songthanin (苏林)",
        role: "ASAKO THAILAND 拥有者",
        intro: "泰国最早将中国及海外优质平价机械引入泰国市场的先驱之一。拥有超过 30 年的信誉保证。",
        desc: "我们提供工业机械、农业机械，服务对象涵盖 SME 店铺至上市公司。我们提供全面的一站式服务 (One Stop Service)，包括安装、使用培训、专业技术指导及齐全的备件。",
        slogan: "像贴心伙伴一样，陪伴每一家来访的企业。",
        stat_years: "多年经验",
        stat_clients: "合作伙伴"
      },
      services: {
        badge: "一站式服务",
        title: "全面关怀",
        card1_title: "安装与培训",
        card1_desc: "专业的安装和操作培训，确保您能最大化利用机械。",
        card2_title: "专家支持",
        card2_desc: "我们的技术人员随时准备提供建议和维护支持。",
        card3_title: "备件齐全",
        card3_desc: "库存充足的备件，确保您的业务不间断运行。"
      },
      product_grid: {
        badge: "认证库存",
        title: "可用机械",
        filter: "筛选",
        sort: "排序：价格"
      },
      spare_parts: {
        badge: "原厂配件",
        title: "保持运转。",
        subtitle: "使用非原厂零件可能会缩短机器寿命。我们库存充足，可立即发货。",
        button: "订购零件"
      },
      features: {
        durability_label: "信誉",
        durability_title: "30多年\n经验",
        durability_desc: "在泰国市场拥有悠久的信誉，几十年来深受企业信赖。",
        precision_label: "多样性",
        precision_title: "SME 至\n上市公司",
        precision_desc: "为各种规模的企业量身定制机械解决方案，从小商店到大型工业。",
        service_label: "服务",
        service_title: "一站式\n服务",
        service_desc: "从安装到维护，我们要像真正的商业伙伴一样照顾一切。"
      },
      brands: {
        kubota: "久保田",
        yanmar: "洋马",
        iseki: "井关",
        mitsubishi: "三菱",
        shibaura: "芝浦"
      },
      cta: {
        title: "准备好与我们一起发展您的业务了吗？",
        desc: "咨询 ASAKO THAILAND，寻找最适合您需求的机械。",
        button: "立即联系"
      },
      footer: {
        address_line1: "122-8001 大阪市北区",
        address_line2: "创新大厦 42楼",
        address_country: "日本",
        col_inventory: "库存",
        col_support: "支持",
        col_newsletter: "通讯",
        newsletter_desc: "随时了解新机械到货信息。",
        email_placeholder: "电子邮件地址",
        btn_join: "加入",
        rights: "© 2024 ASAKO AGRI-TECH CORP. 保留所有权利。",
        link_privacy: "隐私",
        link_terms: "条款",
        link_ethics: "道德",
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
      },
      contact: {
        title: "联系方式",
        desc: "通过以下任何平台与我们联系。"
      },
      dealer: {
        title: "成为我们的经销商",
        subtitle: "加入 ASAKO THAILAND 网络，共同成长。",
        button: "联系我们"
      },
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "th",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;