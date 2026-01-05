'use client'

import { Box, Container, Typography, Button, useTheme } from '@mui/material'
import Link from 'next/link'
import { ArrowForward, GetApp } from '@mui/icons-material'
import { ROUTES } from '@/lib/constants/routes'

export function CTASection() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #1a1a1a 0%, #242424 50%, #2d2d2d 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(ellipse at 25% 25%, rgba(2, 116, 131, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 75% 75%, rgba(0, 171, 194, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 700,
              color: 'white',
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            ¿Listo para transformar
            <br />
            <Box component="span" sx={{ color: theme.palette.primary.main }}>
              tu negocio?
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              mb: 5,
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto 3rem',
            }}
          >
            Únete a miles de empresarios que ya están llevando sus negocios al
            siguiente nivel con Control. Comienza tu prueba gratuita hoy.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              size="large"
              component={Link}
              href={ROUTES.HOME} // Cambiar cuando exista ruta de registro
              endIcon={<ArrowForward />}
              sx={{
                py: 2,
                px: 6,
                fontSize: '1.1rem',
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, #00abc2)`,
                boxShadow: '0 8px 32px rgba(2, 116, 131, 0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 40px rgba(2, 116, 131, 0.5)',
                },
              }}
            >
              Crear Cuenta Gratis
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<GetApp />}
              sx={{
                py: 2,
                px: 6,
                fontSize: '1.1rem',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'rgba(255, 255, 255, 0.9)',
                borderWidth: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  backgroundColor: 'rgba(2, 116, 131, 0.1)',
                  transform: 'translateY(-2px)',
                  borderWidth: 2,
                },
              }}
            >
              Descargar Demo
            </Button>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
              mt: 4,
            }}
          >
            Sin tarjeta de crédito • Prueba de 30 días • Soporte 24/7
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
