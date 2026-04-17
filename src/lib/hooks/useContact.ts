'use client'

import { useMutation } from '@tanstack/react-query'
import { contactService } from '@/lib/api/services/contact.service'
import type { ContactFormData } from '@/types/api.types'

export function useContact() {
  const { mutate: sendMessage, isPending, isSuccess, isError, reset } = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await contactService.sendMessage(data)
      if (response.status !== 200) {
        throw new Error(response.message || 'Error al enviar el mensaje')
      }
      return response
    },
  })

  return { sendMessage, isPending, isSuccess, isError, reset }
}
