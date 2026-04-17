'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Alert,
  CircularProgress,
  Divider,
  Link as MuiLink,
} from '@mui/material'
import Link from 'next/link'
import {
  DeleteForever,
  CheckCircle,
  Warning,
  Email,
  Person,
  Phone,
  Badge,
} from '@mui/icons-material'
import { dataDeletionSchema, type DataDeletionFormData } from '@/lib/schemas/dataDeletion.schema'
import { dataDeletionService } from '@/lib/api/services/dataDeletion.service'
import { ROUTES } from '@/lib/constants/routes'
import { BRAND } from '@/styles/theme'

export default function DataDeletionPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DataDeletionFormData>({
    resolver: zodResolver(dataDeletionSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      userId: '',
      reason: '',
      confirmTerms: false,
    },
  })

  const onSubmit = async (data: DataDeletionFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await dataDeletionService.requestDeletion(data)

      if (response.status === 200) {
        setSubmitSuccess(true)
        reset()
        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitError(response.message || 'Error al procesar la solicitud')
      }
    } catch (error) {
      setSubmitError(
        'Error de conexión. Por favor verifica tu conexión a internet e intenta nuevamente.'
      )
      console.error('Data deletion request error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: BRAND.bg0,
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: BRAND.bg2,
            borderRadius: 3,
            p: { xs: 3, md: 6 },
            border: `1px solid ${BRAND.glassBorder}`,
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <DeleteForever
              sx={{
                fontSize: 64,
                color: BRAND.cyan,
                mb: 2,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                color: BRAND.textPrimary,
                fontWeight: 700,
                mb: 2,
              }}
            >
              Solicitud de Eliminación de Datos
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: BRAND.textSecondary,
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              En Control respetamos tu privacidad y tu derecho a controlar tus datos personales. Si
              deseas eliminar tu cuenta y todos los datos asociados, completa el siguiente
              formulario.
            </Typography>
          </Box>

          {/* Success Message */}
          {submitSuccess && (
            <Alert
              severity="success"
              icon={<CheckCircle />}
              sx={{
                mb: 4,
                bgcolor: 'rgba(52, 211, 153, 0.1)',
                border: '1px solid rgba(52, 211, 153, 0.3)',
                color: BRAND.textPrimary,
                '& .MuiAlert-icon': { color: '#34d399' },
              }}
            >
              <Typography variant="h6" sx={{ mb: 1, color: BRAND.textPrimary }}>
                ¡Solicitud Recibida!
              </Typography>
              <Typography variant="body2" sx={{ color: BRAND.textSecondary }}>
                Hemos recibido tu solicitud de eliminación de datos. Recibirás un correo
                electrónico de confirmación en las próximas horas. Procesaremos tu solicitud en un
                plazo máximo de 24-48 horas.
              </Typography>
            </Alert>
          )}

          {/* Error Message */}
          {submitError && (
            <Alert
              severity="error"
              sx={{
                mb: 4,
                bgcolor: 'rgba(248, 113, 113, 0.1)',
                border: '1px solid rgba(248, 113, 113, 0.3)',
                color: BRAND.textPrimary,
                '& .MuiAlert-icon': { color: '#f87171' },
              }}
            >
              {submitError}
            </Alert>
          )}

          {/* What Will Be Deleted Section */}
          <Box
            sx={{
              p: 3,
              mb: 4,
              bgcolor: `${BRAND.cyan}12`,
              border: `1px solid ${BRAND.cyan}33`,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: BRAND.cyan,
                fontWeight: 600,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Warning />
              ¿Qué se eliminará?
            </Typography>
            <Box component="ul" sx={{ pl: 3, color: BRAND.textSecondary }}>
              <li>Tu cuenta de usuario</li>
              <li>Información de perfil</li>
              <li>Datos de tu(s) negocio(s)</li>
              <li>Productos e inventario</li>
              <li>Transacciones y reportes</li>
              <li>Información de clientes</li>
              <li>Información de empleados</li>
              <li>Toda la información personal almacenada</li>
            </Box>
          </Box>

          {/* Important Notice */}
          <Alert
            severity="warning"
            sx={{
              mb: 4,
              bgcolor: `${BRAND.amber}18`,
              border: `1px solid ${BRAND.amber}44`,
              color: BRAND.textPrimary,
              '& .MuiAlert-icon': { color: BRAND.amber },
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: BRAND.textPrimary }}>
              <strong>Importante:</strong> Esta acción es irreversible
            </Typography>
            <Typography variant="body2" sx={{ color: BRAND.textSecondary }}>
              Una vez procesada, no podrás recuperar tu cuenta ni tus datos. Asegúrate de exportar
              cualquier información importante antes de continuar.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: BRAND.textSecondary }}>
              <strong>Tiempo de procesamiento:</strong> 24-48 horas (máximo 30 días)
            </Typography>
          </Alert>

          <Divider sx={{ my: 4, borderColor: BRAND.glassBorder }} />

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Name Field */}
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Nombre Completo"
                    placeholder="Ingresa tu nombre completo"
                    fullWidth
                    required
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    InputProps={{
                      startAdornment: <Person sx={{ mr: 1, color: BRAND.textMuted }} />,
                    }}
                  />
                )}
              />

              {/* Email Field */}
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    type="email"
                    placeholder="email@example.com"
                    fullWidth
                    required
                    error={!!errors.email}
                    helperText={errors.email?.message || 'Email asociado a tu cuenta de Control'}
                    InputProps={{
                      startAdornment: <Email sx={{ mr: 1, color: BRAND.textMuted }} />,
                    }}
                  />
                )}
              />

              {/* Phone Field (Optional) */}
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Teléfono (Opcional)"
                    placeholder="+1 234 567 8900"
                    fullWidth
                    error={!!errors.phone}
                    helperText={errors.phone?.message || 'Para verificación adicional'}
                    InputProps={{
                      startAdornment: <Phone sx={{ mr: 1, color: BRAND.textMuted }} />,
                    }}
                  />
                )}
              />

              {/* User ID Field (Optional) */}
              <Controller
                name="userId"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="ID de Usuario (Opcional)"
                    placeholder="Ej: 123456"
                    fullWidth
                    error={!!errors.userId}
                    helperText={
                      errors.userId?.message || 'Si conoces tu ID de usuario, ingrésalo aquí'
                    }
                    InputProps={{
                      startAdornment: <Badge sx={{ mr: 1, color: BRAND.textMuted }} />,
                    }}
                  />
                )}
              />

              {/* Reason Field (Optional) */}
              <Controller
                name="reason"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Razón de Eliminación (Opcional)"
                    placeholder="Cuéntanos por qué deseas eliminar tu cuenta"
                    fullWidth
                    multiline
                    rows={4}
                    error={!!errors.reason}
                    helperText={errors.reason?.message || 'Opcional - nos ayuda a mejorar'}
                  />
                )}
              />

              {/* Terms Confirmation */}
              <Box>
                <Controller
                  name="confirmTerms"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          {...field}
                          checked={field.value}
                          sx={{
                            color: BRAND.textMuted,
                            '&.Mui-checked': { color: BRAND.cyan },
                          }}
                        />
                      }
                      label={
                        <Typography variant="body2" sx={{ color: BRAND.textSecondary }}>
                          Confirmo que entiendo que esta acción es{' '}
                          <Box component="strong" sx={{ color: BRAND.amber }}>irreversible</Box> y que todos
                          mis datos serán eliminados permanentemente. He leído y acepto la{' '}
                          <MuiLink
                            component={Link}
                            href={ROUTES.PRIVACY_POLICY}
                            sx={{ color: BRAND.cyan, textDecoration: 'underline' }}
                          >
                            Política de Privacidad
                          </MuiLink>
                          .
                        </Typography>
                      }
                    />
                  )}
                />
                {errors.confirmTerms && (
                  <FormHelperText error sx={{ ml: 2 }}>
                    {errors.confirmTerms.message}
                  </FormHelperText>
                )}
              </Box>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={isSubmitting}
                sx={{
                  mt: 2,
                  py: 1.5,
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #f87171, #ef4444)',
                    boxShadow: '0 8px 24px rgba(239, 68, 68, 0.3)',
                  },
                  '&.Mui-disabled': {
                    background: BRAND.bg3,
                    color: BRAND.textMuted,
                  },
                }}
              >
                {isSubmitting ? (
                  <>
                    <CircularProgress size={24} sx={{ mr: 1, color: 'white' }} />
                    Enviando Solicitud...
                  </>
                ) : (
                  <>
                    <DeleteForever sx={{ mr: 1 }} />
                    Solicitar Eliminación de Datos
                  </>
                )}
              </Button>

              {/* Cancel Button */}
              <Button
                component={Link}
                href={ROUTES.HOME}
                variant="outlined"
                size="large"
                fullWidth
              >
                Cancelar
              </Button>
            </Box>
          </form>

          <Divider sx={{ my: 4, borderColor: BRAND.glassBorder }} />

          {/* Footer Info */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: BRAND.textMuted, mb: 2 }}>
              ¿Tienes preguntas sobre este proceso?
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <MuiLink
                href="mailto:privacy@control-app.com"
                sx={{ color: BRAND.cyan, textDecoration: 'underline' }}
              >
                privacy@control-app.com
              </MuiLink>
              <MuiLink
                component={Link}
                href={ROUTES.PRIVACY_POLICY}
                sx={{ color: BRAND.cyan, textDecoration: 'underline' }}
              >
                Ver Política de Privacidad
              </MuiLink>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
