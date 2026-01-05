export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://192.168.0.25:5000/api/v1',
  PUBLIC_URL: `${process.env.NEXT_PUBLIC_API_URL || 'http://192.168.0.25:5000/api/v1'}/public`,
  TIMEOUT: 10000,
} as const

export const API_ENDPOINTS = {
  // Public endpoints
  FAQ: '/public/faq',
  CONTACT: '/public/contact',
  TESTIMONIALS: '/public/testimonials',
  DATA_DELETION: '/public/data-deletion-request',

  // Auth endpoints (future)
  LOGIN: '/public/auth/login',
  REGISTER: '/public/auth/register',
} as const
