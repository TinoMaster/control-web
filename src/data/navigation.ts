import { CONTACT_INFO } from '@/lib/constants/external'
import { ROUTES } from '@/lib/constants/routes'

export interface NavLink {
  name: string
  path: string
  label: string
  icon?: string
}

export const NAV_LINKS: NavLink[] = [
  {
    name: 'Inicio',
    path: ROUTES.HOME,
    label: 'Página principal',
  },
  {
    name: 'Características',
    path: ROUTES.FEATURES,
    label: 'Funcionalidades del sistema',
  },
  {
    name: 'Precios',
    path: ROUTES.PRICING,
    label: 'Planes y precios',
  },
  {
    name: 'Ayuda',
    path: ROUTES.HELP_CENTER,
    label: 'Centro de ayuda',
  },
  {
    name: 'Contacto',
    path: ROUTES.CONTACT,
    label: 'Contáctanos',
  },
]

export const APP_INFO = {
  NAME: 'Control',
  TAGLINE: 'Sistema de Gestión Empresarial',
  DESCRIPTION: 'Gestiona tu negocio completo desde tu móvil',
  VERSION: '1.0.0',
  COMPANY: 'Control',
  EMAIL: CONTACT_INFO.EMAIL,
} as const
