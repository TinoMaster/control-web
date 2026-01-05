import { makeRequest } from '../client'
import { API_ENDPOINTS } from '@/lib/constants/api'
import type { IResponse, ContactFormData } from '@/types/api.types'

export class ContactService {
  /**
   * Enviar mensaje de contacto
   */
  async sendMessage(data: ContactFormData): Promise<IResponse<void>> {
    return makeRequest<void>({
      method: 'POST',
      url: API_ENDPOINTS.CONTACT,
      data,
    })
  }
}

export const contactService = new ContactService()
