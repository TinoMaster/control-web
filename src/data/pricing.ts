export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: 'contained' | 'outlined'
  popular: boolean
  comingSoon?: boolean
  launchPlan?: boolean
  deadline?: string
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Acceso Total',
    price: 'Gratis',
    period: '6 meses',
    description:
      'Regístrate antes del 1 de enero de 2027 y obtén acceso completo a todas las funciones durante 6 meses.',
    features: [
      'Productos ilimitados',
      'Gestión avanzada de ventas e inventario',
      'Usuarios ilimitados',
      'Reportes avanzados y analytics',
      'Gestión de clientes y empleados',
      'Punto de venta (POS)',
      'Soporte prioritario',
    ],
    buttonText: 'Registrarse Gratis',
    buttonVariant: 'contained',
    popular: true,
    launchPlan: true,
    deadline: '1 de enero de 2027',
  },
  {
    name: 'Professional',
    price: 'Próximamente',
    period: '',
    description:
      'Plan de pago para negocios en crecimiento. Disponible después del período de lanzamiento.',
    features: [
      'Productos ilimitados',
      'Gestión avanzada de inventario',
      'Hasta 5 usuarios',
      'Reportes avanzados y analytics',
      'Gestión de clientes',
      'Soporte prioritario 24/7',
    ],
    buttonText: 'Próximamente',
    buttonVariant: 'outlined',
    popular: false,
    comingSoon: true,
  },
  {
    name: 'Enterprise',
    price: 'Próximamente',
    period: '',
    description:
      'Plan completo para empresas grandes con necesidades específicas.',
    features: [
      'Todo lo del plan Professional',
      'Usuarios ilimitados',
      'API personalizada',
      'Integraciones avanzadas',
      'Soporte dedicado',
      'Capacitación personalizada',
      'SLA garantizado',
    ],
    buttonText: 'Próximamente',
    buttonVariant: 'outlined',
    popular: false,
    comingSoon: true,
  },
]
