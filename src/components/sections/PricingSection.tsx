'use client'

import { PRICING_PLANS } from '@/data/pricing'
import { EXTERNAL_URLS } from '@/lib/constants/external'
import { BRAND } from '@/styles/theme'
import { AccessTime, CheckCircle, Schedule } from '@mui/icons-material'
import {
  Box,
  Button,
  Chip,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export function PricingSection() {
  const plan = PRICING_PLANS[0]

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: `linear-gradient(180deg, ${BRAND.bg1} 0%, ${BRAND.bg0} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '50%',
          height: '60%',
          background: `radial-gradient(ellipse, ${BRAND.cyanGlow} 0%, transparent 70%)`,
          opacity: 0.2,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="overline"
            sx={{ color: BRAND.cyan, display: 'block', mb: 2, letterSpacing: '0.14em' }}
          >
            Precios
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
            Pruébalo{' '}
            <span className="gradient-text-cyan">gratis</span> durante 6 meses
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: BRAND.textSecondary, maxWidth: 480, mx: 'auto' }}
          >
            Regístrate durante el período de lanzamiento y accede a todas las funciones
            sin restricciones. Sin compromisos.
          </Typography>
        </Box>

        {/* Single Plan Card */}
        <MotionBox
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            background: BRAND.bg2,
            border: `2px solid ${BRAND.cyan}`,
            borderRadius: '20px',
            p: { xs: 3.5, md: 4 },
            position: 'relative',
            overflow: 'visible',
            boxShadow: `0 0 60px ${BRAND.cyanGlow}, 0 24px 48px rgba(0,0,0,0.3)`,
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: -2,
              borderRadius: '22px',
              background: `linear-gradient(135deg, ${BRAND.cyan}33, transparent 50%, ${BRAND.cyanDark}22)`,
              zIndex: -1,
            },
          }}
        >
          {/* Badge */}
          <Chip
            icon={
              <AccessTime
                sx={{ fontSize: 14, color: `${BRAND.bg0} !important` }}
              />
            }
            label="Acceso Total de Lanzamiento"
            sx={{
              position: 'absolute',
              top: -14,
              left: '50%',
              transform: 'translateX(-50%)',
              background: BRAND.gradPrimary,
              color: BRAND.bg0,
              fontWeight: 700,
              fontSize: '0.75rem',
              height: 28,
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              '& .MuiChip-label': { px: 2 },
            }}
          />

          {/* Plan header */}
          <Box sx={{ mb: 3, textAlign: 'center' }}>
            <Typography
              variant="overline"
              sx={{
                color: BRAND.cyan,
                letterSpacing: '0.1em',
                display: 'block',
                mb: 1,
              }}
            >
              {plan.name}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'center',
                gap: 0.75,
                mb: 1,
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '2.25rem',
                  fontWeight: 700,
                  color: BRAND.cyan,
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                }}
              >
                {plan.price}
              </Typography>
              {plan.period && (
                <Typography variant="body2" sx={{ color: BRAND.textMuted }}>
                  {plan.period}
                </Typography>
              )}
            </Box>

            <Typography
              variant="body2"
              sx={{ color: BRAND.textMuted, lineHeight: 1.6 }}
            >
              {plan.description}
            </Typography>

            {plan.deadline && (
              <Box
                sx={{
                  mt: 1.5,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.75,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: '8px',
                  background: `${BRAND.cyan}10`,
                  border: `1px solid ${BRAND.cyan}25`,
                }}
              >
                <Schedule sx={{ fontSize: 14, color: BRAND.cyan }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: BRAND.cyan,
                    fontWeight: 600,
                    fontSize: '0.75rem',
                  }}
                >
                  Hasta el {plan.deadline}
                </Typography>
              </Box>
            )}
          </Box>

          {/* CTA Button */}
          <Button
            variant="contained"
            fullWidth
            size="large"
            component="a"
            href={EXTERNAL_URLS.REGISTER}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ py: 1.5, mb: 3.5, fontSize: '0.9375rem' }}
          >
            {plan.buttonText}
          </Button>

          {/* Features */}
          <List sx={{ p: 0 }}>
            {plan.features.map((feature, fi) => (
              <ListItem key={fi} sx={{ py: 0.75, px: 0 }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <CheckCircle
                    sx={{ fontSize: 16, color: BRAND.cyan }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={feature}
                  primaryTypographyProps={{
                    sx: {
                      color: BRAND.textSecondary,
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </MotionBox>

        {/* Bottom note */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography
            variant="body2"
            sx={{ color: BRAND.textMuted, mb: 0.5 }}
          >
            Todos los usuarios registrados durante el lanzamiento obtienen acceso
            total
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: BRAND.textMuted }}
          >
            y beneficios exclusivos cuando los planes de pago estén disponibles.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
