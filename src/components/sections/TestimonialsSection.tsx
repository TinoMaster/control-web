'use client'

import { BUSINESS_TYPES } from '@/data/testimonials'
import { BRAND } from '@/styles/theme'
import { Box, Container, Grid2 as Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export function TestimonialsSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: `linear-gradient(180deg, ${BRAND.bg0} 0%, ${BRAND.bg1} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: '45%',
          height: '60%',
          background: `radial-gradient(ellipse, ${BRAND.amberGlow} 0%, transparent 70%)`,
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 8, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{ color: BRAND.amber, display: 'block', mb: 2, letterSpacing: '0.14em' }}
          >
            Ideal para
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: BRAND.textPrimary,
              letterSpacing: '-0.03em',
              mb: 2,
            }}
          >
            Negocios de copias e{' '}
            <span className="gradient-text-amber">impresiones</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: BRAND.textSecondary, maxWidth: 560, mx: 'auto' }}
          >
            Diseñado específicamente para los centros de copias e impresión de Cuba.
            Gestiona cada servicio, cada máquina y cada venta.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {BUSINESS_TYPES.map((business, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                sx={{
                  height: '100%',
                  background: BRAND.bg2,
                  border: `1px solid ${BRAND.glassBorder}`,
                  borderRadius: '20px',
                  p: { xs: 3, md: 3.5 },
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    borderColor: `${BRAND.amber}44`,
                    boxShadow: `0 24px 48px rgba(0,0,0,0.3)`,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: `linear-gradient(90deg, transparent, ${BRAND.amber}55, transparent)`,
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '14px',
                    background: `${BRAND.amber}18`,
                    border: `1px solid ${BRAND.amber}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                    flexShrink: 0,
                  }}
                >
                  <business.icon sx={{ fontSize: 22, color: BRAND.amber }} />
                </Box>

                {/* Name */}
                <Typography
                  variant="h6"
                  sx={{
                    color: BRAND.textPrimary,
                    fontWeight: 600,
                    fontFamily: 'var(--font-space-grotesk)',
                    mb: 1,
                    fontSize: '1.0625rem',
                  }}
                >
                  {business.name}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    color: BRAND.textSecondary,
                    lineHeight: 1.75,
                    fontSize: '0.875rem',
                  }}
                >
                  {business.description}
                </Typography>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
