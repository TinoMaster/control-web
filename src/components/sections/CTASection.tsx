'use client'

import { Box, Container, Typography, Button } from '@mui/material'
import Link from 'next/link'
import { ArrowForward, CheckCircle } from '@mui/icons-material'
import { ROUTES } from '@/lib/constants/routes'
import { BRAND } from '@/styles/theme'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const guarantees = [
  'Sin tarjeta de crédito',
  'Prueba de 30 días',
  'Cancela cuando quieras',
  'Soporte 24/7',
]

export function CTASection() {
  return (
    <Box
      sx={{
        py: { xs: 12, md: 20 },
        background: BRAND.bg0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Large glow behind CTA */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: 800,
          height: '100%',
          background: `radial-gradient(ellipse, ${BRAND.cyanGlow} 0%, transparent 65%)`,
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      />

      {/* Grid pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 197, 230, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 197, 230, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          sx={{ textAlign: 'center' }}
        >
          {/* Top label */}
          <Typography
            variant="overline"
            sx={{ color: BRAND.cyan, display: 'block', mb: 3, letterSpacing: '0.14em' }}
          >
            Empieza hoy mismo
          </Typography>

          {/* Headline */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.25rem', sm: '3rem', md: '3.75rem' },
              fontWeight: 700,
              color: BRAND.textPrimary,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            ¿Listo para llevar
            <br />
            tu negocio al{' '}
            <span className="gradient-text-cyan">siguiente nivel?</span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: BRAND.textSecondary,
              mb: 5,
              lineHeight: 1.75,
              maxWidth: 520,
              mx: 'auto',
              fontSize: '1.0625rem',
            }}
          >
            Únete a más de 15,000 empresarios que ya gestionan sus negocios con
            Control. Configuración en minutos, resultados desde el primer día.
          </Typography>

          {/* CTA buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              justifyContent: 'center',
              mb: 4,
            }}
          >
            <Button
              variant="contained"
              size="large"
              component={Link}
              href={ROUTES.PRICING}
              endIcon={<ArrowForward />}
              sx={{
                py: 1.875,
                px: 5,
                fontSize: '1.0625rem',
              }}
            >
              Comenzar Gratis Ahora
            </Button>

            <Button
              variant="outlined"
              size="large"
              component={Link}
              href={ROUTES.CONTACT}
              sx={{
                py: 1.875,
                px: 5,
                fontSize: '1.0625rem',
              }}
            >
              Hablar con Ventas
            </Button>
          </Box>

          {/* Guarantees */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 1.5, md: 3 },
              justifyContent: 'center',
            }}
          >
            {guarantees.map((g, i) => (
              <Box
                key={i}
                sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}
              >
                <CheckCircle sx={{ fontSize: 14, color: '#34d399' }} />
                <Typography variant="body2" sx={{ color: BRAND.textMuted, fontSize: '0.8125rem' }}>
                  {g}
                </Typography>
              </Box>
            ))}
          </Box>
        </MotionBox>
      </Container>
    </Box>
  )
}
