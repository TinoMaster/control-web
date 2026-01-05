export interface Testimonial {
  name: string
  business: string
  avatar: string
  rating: number
  comment: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'María García',
    business: 'Papelería El Estudiante',
    avatar: 'M',
    rating: 5,
    comment:
      'Control ha transformado completamente la gestión de mi papelería. Ahora puedo llevar un control exacto de mi inventario y mis ventas han aumentado un 30%.',
  },
  {
    name: 'Carlos Rodríguez',
    business: 'Ferretería Los Hermanos',
    avatar: 'C',
    rating: 5,
    comment:
      'La facilidad de uso y los reportes detallados me han permitido tomar mejores decisiones para mi negocio. Lo recomiendo 100%.',
  },
  {
    name: 'Ana Martínez',
    business: 'Boutique Elegance',
    avatar: 'A',
    rating: 5,
    comment:
      'Excelente aplicación para gestionar mi boutique. El sistema de clientes me ha ayudado a fidelizar más compradores.',
  },
]
