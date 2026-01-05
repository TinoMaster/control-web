import { z } from 'zod'

/**
 * Schema de validación para solicitud de eliminación de datos
 * Cumple con requisitos GDPR y Google Play Store
 */
export const dataDeletionSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres')
    .trim(),

  email: z
    .string()
    .email('Email inválido')
    .min(5, 'El email debe tener al menos 5 caracteres')
    .max(255, 'El email no puede exceder 255 caracteres')
    .trim()
    .toLowerCase(),

  phone: z
    .string()
    .min(7, 'El teléfono debe tener al menos 7 caracteres')
    .max(20, 'El teléfono no puede exceder 20 caracteres')
    .regex(/^[0-9+\-() ]+$/, 'Formato de teléfono inválido')
    .trim()
    .optional()
    .or(z.literal('')),

  userId: z
    .string()
    .max(100, 'El ID de usuario no puede exceder 100 caracteres')
    .trim()
    .optional()
    .or(z.literal('')),

  reason: z
    .string()
    .max(500, 'La razón no puede exceder 500 caracteres')
    .trim()
    .optional()
    .or(z.literal('')),

  confirmTerms: z
    .boolean()
    .refine((val) => val === true, {
      message: 'Debes confirmar que entiendes que esta acción es irreversible',
    }),
})

export type DataDeletionFormData = z.infer<typeof dataDeletionSchema>

/**
 * DTO para enviar al backend
 */
export interface DataDeletionRequestDTO {
  name: string
  email: string
  phone?: string
  userId?: string
  reason?: string
  confirmTerms: boolean
}
