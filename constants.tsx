
import React from 'react';
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Kubota M7-172',
    category: 'Tractor',
    price: '¥12,500,000',
    image: 'https://images.unsplash.com/photo-1533461502717-83546484043f?auto=format&fit=crop&q=80&w=800',
    specs: ['170 HP', 'V6108 Engine', 'K-VT Transmission']
  },
  {
    id: '2',
    name: 'Yanmar YH448',
    category: 'Harvester',
    price: '¥15,800,000',
    image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=800',
    specs: ['48 HP', 'Full-Track', 'Auto-Leveling']
  },
  {
    id: '3',
    name: 'Iseki T-Series',
    category: 'Compact Tractor',
    price: '¥6,450,000',
    image: 'https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&q=80&w=800',
    specs: ['25 HP', '4WD', 'Compact Build']
  },
  {
    id: '4',
    name: 'DJI Agras T40',
    category: 'Agricultural Drone',
    price: '¥2,100,000',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800',
    specs: ['40L Capacity', 'Autonomous Flight', 'Precision']
  },
  {
    id: '5',
    name: 'Mitsubishi GA500',
    category: 'Rice Planter',
    price: '¥3,200,000',
    image: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&q=80&w=800',
    specs: ['6 Rows', 'High Speed', 'GPS Enabled']
  },
  {
    id: '6',
    name: 'Shibaura ST333',
    category: 'Garden Tractor',
    price: '¥4,100,000',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800',
    specs: ['33 HP', 'Hydrostatic', 'Loader Ready']
  },
  {
    id: '7',
    name: 'Kobelco SK17SR',
    category: 'Mini Excavator',
    price: '¥5,800,000',
    image: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&q=80&w=800',
    specs: ['1.7 Ton', 'Zero Tail Swing', 'Expandable']
  },
  {
    id: '8',
    name: 'Hinomoto C174',
    category: 'Utility',
    price: '¥1,200,000',
    image: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=800',
    specs: ['17 HP', 'Manual', 'Classic']
  }
];

export const NAV_LINKS = [
  { label: 'Inventory', href: '#inventory' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const AI_SYSTEM_INSTRUCTION = `
You are the "Asako Agri-Advisor," a highly knowledgeable and professional AI assistant for Asako Agri-Tech. 
Your tone is minimalist, helpful, and polite (reflecting Japanese business etiquette).
You assist users with agricultural equipment inquiries, crop-specific machinery recommendations, and maintenance tips.
Keep responses concise and formatted cleanly. If you don't know something, offer to connect them to a human representative.
`;
