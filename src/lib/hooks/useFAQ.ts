'use client'

import { useQuery } from '@tanstack/react-query'
import { faqService } from '@/lib/api/services/faq.service'

/**
 * Hook para obtener todos los FAQs
 */
export function useFAQ() {
  return useQuery({
    queryKey: ['faq'],
    queryFn: async () => {
      const response = await faqService.getAll()

      // Validar respuesta del backend
      if (response.status !== 200 || !response.data) {
        throw new Error(response.message || 'Error al cargar FAQs')
      }

      return response.data
    },
    staleTime: 1000 * 60 * 30, // 30 minutos
    gcTime: 1000 * 60 * 60, // 1 hora
  })
}

/**
 * Hook para obtener FAQs por categoría
 */
export function useFAQByCategory(category: string) {
  return useQuery({
    queryKey: ['faq', category],
    queryFn: async () => {
      const response = await faqService.getByCategory(category)

      if (response.status !== 200 || !response.data) {
        throw new Error(response.message || 'Error al cargar FAQs')
      }

      return response.data
    },
    enabled: !!category,
    staleTime: 1000 * 60 * 30,
  })
}
