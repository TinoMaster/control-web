'use client'

import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material'
import { Send } from '@mui/icons-material'
import { contactSchema, type TContactSchema } from '@/lib/schemas/contact.schema'
import { useContact } from '@/lib/hooks/useContact'
import { BRAND } from '@/styles/theme'

export default function ContactForm() {
  const { sendMessage, isPending, isSuccess, isError, reset: resetMutation } = useContact()

  const {
    control,
    handleSubmit,
    reset: resetForm,
    formState: { errors },
  } = useForm<TContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  })

  useEffect(() => {
    if (isSuccess) resetForm()
  }, [isSuccess, resetForm])

  const onSubmit = (data: TContactSchema) => {
    resetMutation()
    sendMessage(data)
  }

  return (
    <Box
      sx={{
        background: BRAND.bg2,
        border: `1px solid ${BRAND.glassBorder}`,
        borderRadius: '20px',
        p: { xs: 3, md: 4 },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: BRAND.textPrimary,
          fontWeight: 700,
          mb: 0.75,
          letterSpacing: '-0.02em',
        }}
      >
        Envíanos un mensaje
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: BRAND.textMuted, mb: 3 }}
      >
        Completa el formulario y te responderemos en menos de 24 horas.
      </Typography>

      {isSuccess && (
        <Alert
          severity="success"
          sx={{
            mb: 3,
            background: 'rgba(52, 211, 153, 0.1)',
            border: '1px solid rgba(52, 211, 153, 0.3)',
            color: '#34d399',
            '& .MuiAlert-icon': { color: '#34d399' },
          }}
        >
          ¡Mensaje enviado con éxito! Te responderemos en breve.
        </Alert>
      )}
      {isError && (
        <Alert
          severity="error"
          sx={{
            mb: 3,
            background: 'rgba(248, 113, 113, 0.1)',
            border: '1px solid rgba(248, 113, 113, 0.3)',
            color: '#f87171',
            '& .MuiAlert-icon': { color: '#f87171' },
          }}
        >
          Error al enviar el mensaje. Por favor intenta nuevamente.
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
      >
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nombre completo"
                fullWidth
                error={!!errors.name}
                helperText={errors.name?.message}
                disabled={isPending}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email?.message}
                disabled={isPending}
              />
            )}
          />
        </Box>

        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Asunto"
              fullWidth
              error={!!errors.subject}
              helperText={errors.subject?.message}
              disabled={isPending}
            />
          )}
        />

        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Mensaje"
              multiline
              rows={5}
              fullWidth
              error={!!errors.message}
              helperText={errors.message?.message}
              disabled={isPending}
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          disabled={isPending}
          endIcon={isPending ? undefined : <Send sx={{ fontSize: 16 }} />}
          sx={{ py: 1.625, mt: 0.5 }}
        >
          {isPending ? <CircularProgress size={22} color="inherit" /> : 'Enviar mensaje'}
        </Button>
      </Box>
    </Box>
  )
}
