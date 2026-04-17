"use client";

import { faqService } from "@/lib/api/services/faq.service";
import type { FAQ } from "@/types/api.types";
import { useQuery } from "@tanstack/react-query";

/**
 * Hook para obtener todos los FAQs.
 * Acepta `initialData` pre-cargado desde el servidor (ISR) para evitar
 * el spinner en el primer render y mejorar SEO.
 */
export function useFAQ(initialData?: FAQ[]) {
  return useQuery({
    queryKey: ["faq"],
    queryFn: async () => {
      const response = await faqService.getAll();

      // Validar respuesta del backend
      if (response.status !== 200 || !response.data) {
        throw new Error(response.message || "Error al cargar FAQs");
      }

      return response.data;
    },
    initialData,
    staleTime: 1000 * 60 * 30, // 30 minutos
    gcTime: 1000 * 60 * 60, // 1 hora
  });
}

/**
 * Hook para obtener FAQs por categoría
 */
export function useFAQByCategory(category: string) {
  return useQuery({
    queryKey: ["faq", category],
    queryFn: async () => {
      const response = await faqService.getByCategory(category);

      if (response.status !== 200 || !response.data) {
        throw new Error(response.message || "Error al cargar FAQs");
      }

      return response.data;
    },
    enabled: !!category,
    staleTime: 1000 * 60 * 30,
  });
}
