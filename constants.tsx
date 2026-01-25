// constants.tsx
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: { en: 'Water Pump', th: 'ปั๊มน้ำ', cn: '水泵' },
    category: { en: 'Water Systems', th: 'ระบบน้ำ', cn: '供水系统' },
    price: '¥12,500',
    image: '/images/1/1.jpg',
    specs: [
      { en: '1 HP Power', th: 'กำลัง 1 แรงม้า', cn: '功率 1 马力' },
      { en: 'Flow: 300 L/min', th: 'อัตราไหล 300 ลิตร/นาที', cn: '流量 300 升/分' },
      { en: 'Inlet: 1 Inch', th: 'ท่อเข้า 1 นิ้ว', cn: '进水口 1 英寸' }
    ]
  },
  {
    id: '2',
    name: { en: 'Large Wood Chipper', th: 'เครื่องบดไม้ย่อยขนาดใหญ่', cn: '大型木材粉碎机' },
    category: { en: 'Shredders', th: 'เครื่องบดย่อย', cn: '粉碎机' },
    price: '¥158,000',
    image: '/images/2/1.jpg',
    specs: [
      { en: 'Diesel Engine', th: 'เครื่องยนต์ดีเซล', cn: '柴油发动机' },
      { en: 'Max Log: 10 Inch', th: 'รองรับไม้ใหญ่สุด 10 นิ้ว', cn: '最大原木 10 英寸' },
      { en: 'Capacity: 3 Ton/hr', th: 'กำลังผลิต 3 ตัน/ชม.', cn: '产量 3 吨/小时' }
    ]
  },
  {
    id: '3',
    name: { en: 'Micro Powder Grinder', th: 'เครื่องบดจุลภาค', cn: '微粉磨' },
    category: { en: 'Processing', th: 'แปรรูปอาหาร', cn: '加工设备' },
    price: '¥64,500',
    image: '/images/3/1.jpg',
    specs: [
      { en: 'Ultra-Fine Mesh', th: 'ความละเอียดสูง (ระดับไมครอน)', cn: '超细网目' },
      { en: 'Speed: 25000 RPM', th: 'ความเร็ว 25,000 รอบ/นาที', cn: '转速 25000 转/分' },
      { en: 'Stainless 304', th: 'สแตนเลส 304', cn: '304 不锈钢' }
    ]
  },
  {
    id: '4',
    name: { en: 'Cap Sealing Machine', th: 'เครื่องซีลฝา', cn: '封盖机' },
    category: { en: 'Packaging', th: 'บรรจุภัณฑ์', cn: '包装设备' },
    price: '¥21,000',
    image: '/images/4/1.jpg',
    specs: [
      { en: 'Auto-Feed', th: 'ระบบป้อนฝาอัตโนมัติ', cn: '自动上盖' },
      { en: 'Speed: 1500 bph', th: 'ความเร็ว 1,500 ขวด/ชม.', cn: '速度 1500 瓶/小时' },
      { en: 'Adjustable Height', th: 'ปรับความสูงได้', cn: '高度可调' }
    ]
  },
  {
    id: '5',
    name: { en: 'Centrifugal Pump', th: 'ปั๊มน้ำหอยโข่ง', cn: '离心泵' },
    category: { en: 'Water Systems', th: 'ระบบน้ำ', cn: '供水系统' },
    price: '¥32,000',
    image: '/images/5/1.jpg',
    specs: [
      { en: 'High Head', th: 'แรงดันส่งสูง', cn: '高扬程' },
      { en: 'Power: 3 HP', th: 'กำลัง 3 แรงม้า', cn: '功率 3 马力' },
      { en: 'Cast Iron Body', th: 'เสื้อปั๊มเหล็กหล่อ', cn: '铸铁泵体' }
    ]
  },
  {
    id: '6',
    name: { en: 'Plant Residue Shredder', th: 'เครื่องบดย่อยซากพืช', cn: '植物残渣粉碎机' },
    category: { en: 'Shredders', th: 'เครื่องบดย่อย', cn: '粉碎机' },
    price: '¥41,000',
    image: '/images/6/1.jpg',
    specs: [
      { en: 'Bio-Mulch Output', th: 'ผลิตปุ๋ยหมักชีวภาพ', cn: '生物覆盖物产出' },
      { en: 'Heavy Duty Blades', th: 'ใบมีดเหล็กกล้า', cn: '重型刀片' },
      { en: 'PTO Driven', th: 'ขับเคลื่อนด้วย PTO', cn: 'PTO 驱动' }
    ]
  },
  {
    id: '7',
    name: { en: 'Industrial Pressure Cooker', th: 'หม้อแรงดัน (หม้ออัดแรงดัน)', cn: '工业高压锅' },
    category: { en: 'Processing', th: 'แปรรูปอาหาร', cn: '加工设备' },
    price: '¥58,000',
    image: '/images/7/1.jpg',
    specs: [
      { en: 'Capacity: 100L', th: 'ความจุ 100 ลิตร', cn: '容量 100 升' },
      { en: 'Safety Valve', th: 'วาล์วนิรภัยมาตรฐาน', cn: '安全阀' },
      { en: 'High Temp', th: 'ทนความร้อนสูง', cn: '耐高温' }
    ]
  },
  {
    id: '8',
    name: { en: 'Automatic Sealer', th: 'เครื่องซีล Auto', cn: '自动封口机' },
    category: { en: 'Packaging', th: 'บรรจุภัณฑ์', cn: '包装设备' },
    price: '¥120,000',
    image: '/images/8/1.jpg',
    specs: [
      { en: 'Continuous Band', th: 'ซีลสายพานต่อเนื่อง', cn: '连续封口' },
      { en: 'Temp Control', th: 'ควบคุมอุณหภูมิแม่นยำ', cn: '温控' },
      { en: 'Date Printing', th: 'พิมพ์วันที่ผลิตในตัว', cn: '日期打印' }
    ]
  },
  {
    id: '9',
    name: { en: 'Hand Sealer', th: 'เครื่องซีลมือ', cn: '手压封口机' },
    category: { en: 'Packaging', th: 'บรรจุภัณฑ์', cn: '包装设备' },
    price: '¥1,200',
    image: '/images/9/1.jpg',
    specs: [
      { en: 'Width: 300mm', th: 'หน้ากว้างซีล 300 มม.', cn: '封口宽度 300mm' },
      { en: 'Instant Heat', th: 'ร้อนเร็วทันที', cn: '速热' },
      { en: 'Portable', th: 'พกพาสะดวก', cn: '便携式' }
    ]
  },
  {
    id: '10',
    name: { en: 'Herb Grinder (Stainless)', th: 'เครื่องบดสมุนไพรจีนสแตนเลส', cn: '不锈钢中药粉碎机' },
    category: { en: 'Processing', th: 'แปรรูปอาหาร', cn: '加工设备' },
    price: '¥12,000',
    image: '/images/10/1.jpg',
    specs: [
      { en: 'Food Grade 304', th: 'เกรดอาหาร สแตนเลส 304', cn: '食品级 304' },
      { en: 'High Speed Motor', th: 'มอเตอร์รอบจัด', cn: '高速电机' },
      { en: 'Swing Type', th: 'แบบโยกเทผงได้', cn: '摇摆式' }
    ]
  },
  {
    id: '11',
    name: { en: 'Universal Pulverizer', th: 'เครื่องบดป่น', cn: '万能粉碎机' },
    category: { en: 'Processing', th: 'แปรรูปอาหาร', cn: '加工设备' },
    price: '¥15,000',
    image: '/images/11/1.jpg',
    specs: [
      { en: 'Adjustable Fineness', th: 'ปรับความละเอียดได้', cn: '细度可调' },
      { en: 'Continuous Feed', th: 'ระบบป้อนต่อเนื่อง', cn: '连续进料' },
      { en: 'Water Cooling', th: 'ระบบหล่อเย็น', cn: '水冷系统' }
    ]
  },
  {
    id: '12',
    name: { en: 'Vibrating Sieve', th: 'เครื่องร่อน', cn: '振动筛' },
    category: { en: 'Processing', th: 'แปรรูปอาหาร', cn: '加工设备' },
    price: '¥18,000',
    image: '/images/12/1.jpg',
    specs: [
      { en: 'Multi-Layer', th: 'ตะแกรง 2 ชั้น', cn: '多层筛网' },
      { en: 'High Frequency', th: 'การสั่นความถี่สูง', cn: '高频振动' },
      { en: 'Low Noise', th: 'เสียงเงียบ', cn: '低噪音' }
    ]
  },
  {
    id: '13',
    name: { en: 'Oil Extractor', th: 'เครื่องสกัดน้ำมัน', cn: '榨油机' },
    category: { en: 'Processing', th: 'แปรรูปอาหาร', cn: '加工设备' },
    price: '¥25,000',
    image: '/images/13/1.jpg',
    specs: [
      { en: 'Cold Press', th: 'ระบบสกัดเย็น', cn: '冷榨' },
      { en: 'High Yield', th: 'อัตราการได้น้ำมันสูง', cn: '出油率高' },
      { en: 'Automatic', th: 'ทำงานอัตโนมัติ', cn: '全自动' }
    ]
  }
];

export const NAV_LINKS = [
  { label: { en: 'Inventory', th: 'สินค้า', cn: '库存' }, href: '#inventory' },
  { label: { en: 'Services', th: 'บริการ', cn: '服务' }, href: '#services' },
  { label: { en: 'About', th: 'เกี่ยวกับเรา', cn: '关于我们' }, href: '#about' },
  { label: { en: 'Contact', th: 'ติดต่อ', cn: '联系我们' }, href: '#contact' },
];

export const AI_SYSTEM_INSTRUCTION = `
You are the "Asako Agri-Advisor," a highly knowledgeable and professional AI assistant for Asako Agri-Tech. 
Your tone is minimalist, helpful, and polite (reflecting Japanese business etiquette).
You assist users with agricultural equipment inquiries, crop-specific machinery recommendations, and maintenance tips.
Keep responses concise and formatted cleanly. If you don't know something, offer to connect them to a human representative.
`;