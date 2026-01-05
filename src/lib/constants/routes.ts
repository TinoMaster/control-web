export const ROUTES = {
  HOME: '/home',
  FEATURES: '/features',
  PRICING: '/pricing',
  ABOUT: '/about',
  CONTACT: '/contact',
  HELP_CENTER: '/help-center',
  HELP_CENTER_FAQ: '/help-center/faq',
  PRIVACY_POLICY: '/privacy-policy',
  DATA_DELETION: '/data-deletion',
  LOGIN: '/login',
  REGISTER: '/register',
} as const

export type RouteKey = keyof typeof ROUTES
export type RoutePath = (typeof ROUTES)[RouteKey]
