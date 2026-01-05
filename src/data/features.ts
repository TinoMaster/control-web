import {
  TrendingUp,
  Inventory2,
  People,
  Assessment,
  Security,
  CloudSync,
} from '@mui/icons-material'
import { SvgIconComponent } from '@mui/icons-material'

export interface Feature {
  icon: SvgIconComponent
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    icon: TrendingUp,
    title: 'Gestión de Ventas',
    description:
      'Registra y controla todas tus ventas con reportes detallados y análisis de tendencias en tiempo real.',
  },
  {
    icon: Inventory2,
    title: 'Control de Inventario',
    description:
      'Mantén un control preciso de tu stock, recibe alertas de productos bajos y gestiona proveedores.',
  },
  {
    icon: People,
    title: 'Gestión de Clientes',
    description:
      'Administra tu base de clientes, historial de compras y programas de fidelización.',
  },
  {
    icon: Assessment,
    title: 'Reportes y Analytics',
    description:
      'Obtén insights valiosos con reportes automáticos y métricas clave de tu negocio.',
  },
  {
    icon: Security,
    title: 'Seguridad Avanzada',
    description:
      'Protección de datos con encriptación de nivel empresarial y backups automáticos.',
  },
  {
    icon: CloudSync,
    title: 'Sincronización en la Nube',
    description:
      'Accede a tu información desde cualquier dispositivo con sincronización automática.',
  },
]
