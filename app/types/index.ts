/**
 * Shared TypeScript types and interfaces for Super Shield application
 */

export interface Product {
  name: string;
  tagline: string;
  vlt: string;
  irr: string;
  uvr: string;
  tser: string;
  color: string;
  description: string;
  highlights: string[];
  image?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    scale?: number;
  };
  show: {
    opacity: number;
    y?: number;
    scale?: number;
    transition: {
      delay?: number;
      duration: number;
      ease?: readonly number[] | string;
    };
  };
}

export interface ContactFormData {
  name: string;
  phone: string;
  vehicle: string;
  product: string;
  message: string;
}

