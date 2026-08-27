import {
  PointOfSale,
  Inventory2,
  People,
  Assessment,
  SvgIconComponent,
} from '@mui/icons-material'

export interface Stat {
  icon: SvgIconComponent
  number: string
  label: string
  description: string
}

export const STATS: Stat[] = [
  {
    icon: PointOfSale,
    number: '6',
    label: 'Módulos principales',
    description: 'POS, inventario, empleados, finanzas, reportes y multi-negocio',
  },
  {
    icon: Inventory2,
    number: '35+',
    label: 'Funcionalidades',
    description: 'Todo lo que necesitas para gestionar tu negocio en un solo lugar',
  },
  {
    icon: People,
    number: 'Ilimitado',
    label: 'Usuarios y productos',
    description: 'Sin restricciones en empleados, productos ni transacciones',
  },
  {
    icon: Assessment,
    number: '100%',
    label: 'Gratis en lanzamiento',
    description: 'Acceso completo a todas las funciones durante 6 meses',
  },
]
