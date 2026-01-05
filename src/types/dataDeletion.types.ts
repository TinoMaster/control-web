import type { z } from 'zod'
import type { dataDeletionSchema } from '@/lib/schemas/dataDeletion.schema'

/**
 * Tipo inferido del schema de validación
 */
export type DataDeletionFormData = z.infer<typeof dataDeletionSchema>

/**
 * Tipo para la respuesta del backend
 */
export interface DataDeletionRequest {
  id?: string
  name: string
  email: string
  phone?: string
  userId?: string
  reason?: string
  confirmTerms: boolean
  status?: 'PENDING' | 'PROCESSING' | 'COMPLETED'
  createdAt?: string
  updatedAt?: string
}
