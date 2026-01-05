import {
  BarChart,
  PieChart,
  TrendingUp,
  Assessment,
} from '@mui/icons-material'
import { SvgIconComponent } from '@mui/icons-material'

export interface Stat {
  icon: SvgIconComponent
  number: string
  label: string
  description: string
}

export const STATS: Stat[] = [
  {
    icon: TrendingUp,
    number: '15,000+',
    label: 'Negocios activos',
    description: 'Empresas que confían en Control',
  },
  {
    icon: BarChart,
    number: '98%',
    label: 'Satisfacción',
    description: 'De nuestros usuarios',
  },
  {
    icon: PieChart,
    number: '2M+',
    label: 'Transacciones',
    description: 'Procesadas mensualmente',
  },
  {
    icon: Assessment,
    number: '24/7',
    label: 'Soporte',
    description: 'Disponible siempre',
  },
]
