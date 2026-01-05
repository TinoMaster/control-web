export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: 'contained' | 'outlined'
  popular: boolean
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Básico',
    price: 'Gratis',
    period: 'por siempre',
    description: 'Perfecto para negocios pequeños que están empezando',
    features: [
      'Hasta 100 productos',
      'Gestión básica de ventas',
      '1 usuario',
      'Reportes básicos',
      'Soporte por email',
    ],
    buttonText: 'Comenzar Gratis',
    buttonVariant: 'outlined',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$29',
    period: 'por mes',
    description: 'Ideal para negocios en crecimiento que necesitan más funciones',
    features: [
      'Productos ilimitados',
      'Gestión avanzada de inventario',
      'Hasta 5 usuarios',
      'Reportes avanzados y analytics',
      'Gestión de clientes',
      'Integración con sistemas de pago',
      'Soporte prioritario 24/7',
    ],
    buttonText: 'Prueba Gratuita',
    buttonVariant: 'contained',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'por mes',
    description: 'Para empresas grandes con necesidades específicas',
    features: [
      'Todo lo del plan Professional',
      'Usuarios ilimitados',
      'API personalizada',
      'Integraciones avanzadas',
      'Soporte dedicado',
      'Capacitación personalizada',
      'SLA garantizado',
    ],
    buttonText: 'Contactar Ventas',
    buttonVariant: 'outlined',
    popular: false,
  },
]
