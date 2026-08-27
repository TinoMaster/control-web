import {
  ContentCopy,
  Print,
  DesignServices,
  Book,
  PhotoCamera,
  School,
  SvgIconComponent,
} from '@mui/icons-material'

export interface BusinessType {
  icon: SvgIconComponent
  name: string
  description: string
}

export const BUSINESS_TYPES: BusinessType[] = [
  {
    icon: ContentCopy,
    name: 'Copias y Fotocopias',
    description:
      'Controla el volumen de copias diarias, precios por página y el rendimiento de cada máquina.',
  },
  {
    icon: Print,
    name: 'Impresiones y Formatos',
    description:
      'Gestiona impresiones a color, blanco y negro, formatos especiales y trabajos bajo demanda.',
  },
  {
    icon: DesignServices,
    name: 'Diseño y Diagramación',
    description:
      'Lleva el control de trabajos de diseño, clientes, precios y tiempos de entrega.',
  },
  {
    icon: Book,
    name: 'Encuadernación y Acabados',
    description:
      'Administra servicios de encuadernado, plastificado, laminado y acabados profesionales.',
  },
  {
    icon: PhotoCamera,
    name: 'Fotos y Revelado',
    description:
      'Controla pedidos de fotos, tamaños, precios y el inventario de papel y tóner.',
  },
  {
    icon: School,
    name: 'Artículos Escolares y Oficina',
    description:
      'Gestiona el inventario de útiles, papelería y materiales complementarios que vendes.',
  },
]
