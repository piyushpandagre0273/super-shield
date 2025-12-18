/**
 * Shared constants and data for Super Shield application
 */

import { Product, NavLink } from '../types';

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/technology', label: 'Technology' },
  { href: '/warranty', label: 'Warranty' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export const PRODUCTS: Product[] = [
  {
    name: 'Ultra Super 70 (US70)',
    tagline: 'Multi-layer Precious Metal Sputtering',
    vlt: '73%',
    irr: '95%',
    uvr: '99%',
    tser: '54%',
    color: 'Clear',
    description:
      'Sputtering technology integrates precious metals (gold & silver) in multi-layers for strong heat reflection & absorption—cooler cabin, premium clarity.',
    highlights: ['High heat comfort', 'Premium clarity', 'Luxury look'],
    image: '/images/products/ultra-super-70-us70-1.jpg',
  },
  {
    name: 'Super 70 (S70)',
    tagline: 'Ultimate Titanium Nitrate Nano Ceramic',
    vlt: '75%',
    irr: '98%',
    uvr: '99%',
    tser: '55%',
    color: 'Clear',
    description:
      'Titanium Nitrate Nano Ceramic construction rejects infrared radiation to reduce interior heat buildup and glare—maximum driving comfort.',
    highlights: ['Max IR rejection', 'Low glare', 'Nano-ceramic tech'],
    image: '/images/products/product-s70.jpg',
  },
  {
    name: 'Nano Ceramic (IR70)',
    tagline: 'Nano Ceramic Window Film',
    vlt: '73%',
    irr: '95%',
    uvr: '99%',
    tser: '54%',
    color: 'Clear',
    description:
      'Ceramic particles built with cutting-edge nanotechnology deliver strong heat and infrared rejection—cooler interior with clear visibility.',
    highlights: ['Balanced performance', 'Comfort upgrade', 'Clear visibility'],
    image: '/images/products/product-ir70.jpg',
  },
  {
    name: 'Sunroof Series',
    tagline: 'Panoramic glass roof & sunroof specialists',
    vlt: '—',
    irr: 'High',
    uvr: '99% UV block',
    tser: '—',
    color: 'Crystal Clear',
    description:
      'Designed for sunroofs and panoramic roofs—reduces cabin heat & glare while keeping natural light and visibility. Includes 60 months warranty coverage terms.',
    highlights: ['99% UV Block', 'Crystal Clear Vision', '60 Months Warranty'],
    image: '/images/products/product-sunroof.jpg',
  },
];

export const CONTACT_INFO = {
  address: 'Mayfair Apartment, Near All India Reporter, Dhantoli, Nagpur, Maharashtra 440012',
  city: 'Nagpur',
  phone: '9370665551',
  tags: ['Nagpur', 'Auto Films', 'Installations'],
};

export const COMPANY_INFO = {
  name: 'SUPER SHIELD',
  tagline: 'heat free sun',
  fullName: 'Super Shield',
  description: 'Premium automotive window films, vinyl wrap, and paint protection film. 20+ years of expertise. UV rejection up to 99%, 60 months warranty. Nagpur, India.',
};

export const WARRANTY_INFO = {
  duration: '60 Months',
  coverage: [
    'Coverage: bubbles, adhesive failures, discoloration.',
    'Performance assurance: less than 10% drop in UVR/IRR.',
    'Apply and usage conditions may apply (confirm during consultation).',
  ],
};

export const METRICS = [
  {
    name: 'VLT (Visible Light Transmission)',
    meaning: 'Percentage of visible light that passes through the film without being scattered or absorbed.',
  },
  {
    name: 'IRR (Infrared Rejection)',
    meaning: 'Percentage of solar infrared radiation that is not transmitted through the film (measured at 1400 nm test point).',
  },
  {
    name: 'UVR (Ultraviolet Rejection)',
    meaning: 'Percentage of ultraviolet light rejected to protect occupants and interior materials.',
  },
  {
    name: 'TSER (Total Solar Energy Rejected)',
    meaning: "Total percentage of the sun's energy (UV + visible + infrared) rejected by the filmed glass.",
  },
];

