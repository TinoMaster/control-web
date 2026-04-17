import { makeRequest } from '../client'
import { API_ENDPOINTS } from '@/lib/constants/api'
import type { IResponse, Testimonial } from '@/types/api.types'

export class TestimonialService {
  /**
   * Obtener todos los testimonios
   */
  async getAll(): Promise<IResponse<Testimonial[]>> {
    return makeRequest<Testimonial[]>({
      method: 'GET',
      url: API_ENDPOINTS.TESTIMONIALS,
    })
  }
}

export const testimonialService = new TestimonialService()
