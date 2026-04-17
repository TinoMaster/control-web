'use client'

import { Box, Container, Typography, Grid } from '@mui/material'
import { FEATURES } from '@/data/features'
import { BRAND } from '@/styles/theme'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function FeaturesSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: `linear-gradient(180deg, ${BRAND.bg0} 0%, ${BRAND.bg1} 50%, ${BRAND.bg0} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          right: '-5%',
          width: '40%',
          height: '50%',
          background: `radial-gradient(ellipse, ${BRAND.cyanGlow} 0%, transparent 70%)`,
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box
          sx={{
            maxWidth: 640,
            mb: { xs: 8, md: 12 },
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: BRAND.cyan,
              display: 'block',
              mb: 2,
              fontSize: '0.6875rem',
              letterSpacing: '0.14em',
            }}
          >
            Características
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: BRAND.textPrimary,
              mb: 2.5,
              letterSpacing: '-0.03em',
            }}
          >
            Todo lo que necesita{' '}
            <span className="gradient-text-cyan">tu negocio</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: BRAND.textSecondary, lineHeight: 1.75, maxWidth: 520 }}
          >
            Herramientas diseñadas específicamente para pymes y negocios en crecimiento.
            Sin complicaciones, sin curva de aprendizaje.
          </Typography>
        </Box>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <Grid container spacing={3}>
          {FEATURES.map((feature, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <MotionBox
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                sx={{
                  height: '100%',
                  background: BRAND.bg2,
                  border: `1px solid ${BRAND.glassBorder}`,
                  borderRadius: '16px',
                  p: { xs: 3, md: 3.5 },
                  cursor: 'default',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    borderColor: `${BRAND.cyan}44`,
                    boxShadow: `0 24px 48px rgba(0, 0, 0, 0.3), 0 0 0 1px ${BRAND.cyan}22`,
                  },
                }}
              >
                {/* Icon */}
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: '14px',
                    background: `${BRAND.cyan}18`,
                    border: `1px solid ${BRAND.cyan}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                  }}
                >
                  <feature.icon sx={{ fontSize: 24, color: BRAND.cyan }} />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: BRAND.textPrimary,
                    fontWeight: 600,
                    mb: 1.25,
                    fontSize: '1.0625rem',
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: BRAND.textSecondary,
                    lineHeight: 1.75,
                  }}
                >
                  {feature.description}
                </Typography>

                {/* Bottom accent line */}
                <Box
                  sx={{
                    mt: 3,
                    height: 2,
                    width: 40,
                    borderRadius: 1,
                    background: `linear-gradient(90deg, ${BRAND.cyan}66, transparent)`,
                  }}
                />
              </MotionBox>
            </Grid>
          ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}
