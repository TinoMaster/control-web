import { makeRequest } from '../client'
import { API_ENDPOINTS } from '@/lib/constants/api'
import type { IResponse } from '@/types/api.types'
import type { DataDeletionRequestDTO } from '@/lib/schemas/dataDeletion.schema'

/**
 * Servicio para gestionar solicitudes de eliminación de datos
 * Endpoint público que no requiere autenticación
 */
export class DataDeletionService {
  /**
   * Envía una solicitud de eliminación de datos al backend
   * @param request - Datos de la solicitud
   * @returns Response con confirmación o error
   */
  async requestDeletion(request: DataDeletionRequestDTO): Promise<IResponse<void>> {
    return makeRequest<void>({
      method: 'POST',
      url: API_ENDPOINTS.DATA_DELETION,
      data: request,
    })
  }
}

export const dataDeletionService = new DataDeletionService()
