export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: 'contained' | 'outlined'
  popular: boolean
  launchPlan?: boolean
  deadline?: string
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Acceso Total',
    price: 'Gratis',
    period: '6 meses',
    description:
      'Regístrate durante el período de lanzamiento y obtén acceso completo a todas las funciones sin restricciones.',
    features: [
      'Punto de venta (POS)',
      'Inventario y almacenes ilimitados',
      'Gestión de empleados y pagos',
      'Reportes y estadísticas avanzadas',
      'Control de ingresos y gastos',
      'Gestión multi-negocio',
      'Soporte por WhatsApp',
    ],
    buttonText: 'Registrarse Gratis',
    buttonVariant: 'contained',
    popular: true,
    launchPlan: true,
    deadline: '1 de enero de 2027',
  },
]
