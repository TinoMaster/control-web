import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres')
    .trim(),

  email: z
    .string()
    .email('Email inválido')
    .max(150, 'El email no puede exceder 150 caracteres')
    .trim()
    .toLowerCase(),

  subject: z
    .string()
    .min(3, 'El asunto debe tener al menos 3 caracteres')
    .max(200, 'El asunto no puede exceder 200 caracteres')
    .trim(),

  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres')
    .trim(),
})

export type TContactSchema = z.infer<typeof contactSchema>
