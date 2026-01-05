import { makeRequest } from '../client'
import { API_ENDPOINTS } from '@/lib/constants/api'
import type { IResponse, FAQ } from '@/types/api.types'

export class FAQService {
  /**
   * Obtener todos los FAQs
   */
  async getAll(): Promise<IResponse<FAQ[]>> {
    return makeRequest<FAQ[]>({
      method: 'GET',
      url: API_ENDPOINTS.FAQ,
    })
  }

  /**
   * Obtener FAQs por categoría
   */
  async getByCategory(category: string): Promise<IResponse<FAQ[]>> {
    return makeRequest<FAQ[]>({
      method: 'GET',
      url: `${API_ENDPOINTS.FAQ}?category=${category}`,
    })
  }
}

export const faqService = new FAQService()
