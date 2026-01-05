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
  Paper,
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
  Notes,
} from '@mui/icons-material'
import { dataDeletionSchema, type DataDeletionFormData } from '@/lib/schemas/dataDeletion.schema'
import { dataDeletionService } from '@/lib/api/services/dataDeletion.service'
import { ROUTES } from '@/lib/constants/routes'

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
        background: 'linear-gradient(180deg, #1a1a1a 0%, #2d2d2d 100%)',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 3,
            p: { xs: 3, md: 6 },
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <DeleteForever
              sx={{
                fontSize: 64,
                color: '#00abc2',
                mb: 2,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Solicitud de Eliminación de Datos
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
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
                bgcolor: 'rgba(76, 175, 80, 0.1)',
                border: '1px solid rgba(76, 175, 80, 0.3)',
                color: 'white',
                '& .MuiAlert-icon': { color: '#4CAF50' },
              }}
            >
              <Typography variant="h6" sx={{ mb: 1 }}>
                ¡Solicitud Recibida!
              </Typography>
              <Typography variant="body2">
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
                bgcolor: 'rgba(244, 67, 54, 0.1)',
                border: '1px solid rgba(244, 67, 54, 0.3)',
                color: 'white',
                '& .MuiAlert-icon': { color: '#f44336' },
              }}
            >
              {submitError}
            </Alert>
          )}

          {/* What Will Be Deleted Section */}
          <Paper
            sx={{
              p: 3,
              mb: 4,
              bgcolor: 'rgba(0, 171, 194, 0.1)',
              border: '1px solid rgba(0, 171, 194, 0.3)',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#00abc2',
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
            <Box component="ul" sx={{ pl: 3, color: 'rgba(255, 255, 255, 0.8)' }}>
              <li>Tu cuenta de usuario</li>
              <li>Información de perfil</li>
              <li>Datos de tu(s) negocio(s)</li>
              <li>Productos e inventario</li>
              <li>Transacciones y reportes</li>
              <li>Información de clientes</li>
              <li>Información de empleados</li>
              <li>Toda la información personal almacenada</li>
            </Box>
          </Paper>

          {/* Important Notice */}
          <Alert
            severity="warning"
            sx={{
              mb: 4,
              bgcolor: 'rgba(255, 152, 0, 0.1)',
              border: '1px solid rgba(255, 152, 0, 0.3)',
              color: 'white',
              '& .MuiAlert-icon': { color: '#ff9800' },
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
              <strong>Importante:</strong> Esta acción es irreversible
            </Typography>
            <Typography variant="body2">
              Una vez procesada, no podrás recuperar tu cuenta ni tus datos. Asegúrate de exportar
              cualquier información importante antes de continuar.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <strong>Tiempo de procesamiento:</strong> 24-48 horas (máximo 30 días)
            </Typography>
          </Alert>

          <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

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
                      startAdornment: <Person sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.5)' }} />,
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                        '&.Mui-focused fieldset': { borderColor: '#00abc2' },
                      },
                      '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiFormHelperText-root': { color: '#f44336' },
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
                      startAdornment: <Email sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.5)' }} />,
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                        '&.Mui-focused fieldset': { borderColor: '#00abc2' },
                      },
                      '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiFormHelperText-root': {
                        color: errors.email ? '#f44336' : 'rgba(255, 255, 255, 0.5)',
                      },
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
                      startAdornment: <Phone sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.5)' }} />,
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                        '&.Mui-focused fieldset': { borderColor: '#00abc2' },
                      },
                      '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiFormHelperText-root': {
                        color: errors.phone ? '#f44336' : 'rgba(255, 255, 255, 0.5)',
                      },
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
                      startAdornment: <Badge sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.5)' }} />,
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                        '&.Mui-focused fieldset': { borderColor: '#00abc2' },
                      },
                      '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiFormHelperText-root': {
                        color: errors.userId ? '#f44336' : 'rgba(255, 255, 255, 0.5)',
                      },
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
                    InputProps={{
                      startAdornment: <Notes sx={{ mr: 1, color: 'rgba(255, 255, 255, 0.5)' }} />,
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                        '&.Mui-focused fieldset': { borderColor: '#00abc2' },
                      },
                      '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                      '& .MuiFormHelperText-root': {
                        color: errors.reason ? '#f44336' : 'rgba(255, 255, 255, 0.5)',
                      },
                    }}
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
                            color: 'rgba(255, 255, 255, 0.5)',
                            '&.Mui-checked': { color: '#00abc2' },
                          }}
                        />
                      }
                      label={
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                          Confirmo que entiendo que esta acción es{' '}
                          <strong style={{ color: '#ff9800' }}>irreversible</strong> y que todos
                          mis datos serán eliminados permanentemente. He leído y acepto la{' '}
                          <MuiLink
                            component={Link}
                            href={ROUTES.PRIVACY_POLICY}
                            sx={{ color: '#00abc2', textDecoration: 'underline' }}
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
                  background: 'linear-gradient(45deg, #f44336, #e91e63)',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #d32f2f, #c2185b)',
                  },
                  '&:disabled': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.3)',
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
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  '&:hover': {
                    borderColor: '#00abc2',
                    backgroundColor: 'rgba(0, 171, 194, 0.1)',
                  },
                }}
              >
                Cancelar
              </Button>
            </Box>
          </form>

          <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          {/* Footer Info */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 2 }}>
              ¿Tienes preguntas sobre este proceso?
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
              <MuiLink
                href="mailto:privacy@control-app.com"
                sx={{ color: '#00abc2', textDecoration: 'underline' }}
              >
                privacy@control-app.com
              </MuiLink>
              <MuiLink
                component={Link}
                href={ROUTES.PRIVACY_POLICY}
                sx={{ color: '#00abc2', textDecoration: 'underline' }}
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
