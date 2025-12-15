/**
 * Utility functions for Super Shield application
 */

/**
 * Get product image path based on product name and image number
 */
export function getProductImagePath(productName: string, imageNum: number): string {
  if (productName.includes('Ultra Super 70')) {
    return `/images/products/ultra-super-70-us70-${imageNum}.jpg`;
  }
  if (productName.includes('Super 70')) {
    return `/images/products/super-70-s70-${imageNum}.jpg`;
  }
  if (productName.includes('Nano Ceramic')) {
    return `/images/products/nano-ceramic-ir70-${imageNum}.jpg`;
  }
  if (productName.includes('Sunroof')) {
    return `/images/products/sunroof-series-${imageNum}.jpg`;
  }
  return `/images/products/product-${imageNum}.jpg`;
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
}

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (Indian format)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[6-9]\d{9}$/;
  const cleaned = phone.replace(/\D/g, '');
  return phoneRegex.test(cleaned);
}

/**
 * Get current year for copyright
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Generate animation delay based on index
 */
export function getAnimationDelay(index: number, baseDelay: number = 0.05): number {
  return baseDelay * index;
}

