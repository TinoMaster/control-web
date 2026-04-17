'use client'

import { useQuery } from '@tanstack/react-query'
import { testimonialService } from '@/lib/api/services/testimonial.service'

/**
 * Hook para obtener todos los testimonios del backend.
 * Si el backend no responde, la query lanza error y el componente
 * puede hacer fallback a los testimonios estáticos de src/data/testimonials.ts.
 */
export function useTestimonials() {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const response = await testimonialService.getAll()

      if (response.status !== 200 || !response.data) {
        throw new Error(response.message || 'Error al cargar testimonios')
      }

      return response.data
    },
    staleTime: 1000 * 60 * 60, // 1 hora — testimonios cambian poco
    gcTime: 1000 * 60 * 60 * 2, // 2 horas en caché
    retry: 1,
  })
}
