'use client'

import {
  Box,
  Button,
  Container,
  Typography,
  Chip,
} from '@mui/material'
import Link from 'next/link'
import { ArrowForward, PlayArrow, TrendingUp, Inventory2, People } from '@mui/icons-material'
import { ROUTES } from '@/lib/constants/routes'
import { BRAND } from '@/styles/theme'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionTypography = motion(Typography)

const floatingStats = [
  { icon: TrendingUp, value: '+34%', label: 'Crecimiento en ventas', color: BRAND.cyan },
  { icon: Inventory2, value: '99.9%', label: 'Precisión inventario', color: BRAND.amber },
  { icon: People, value: '15K+', label: 'Negocios activos', color: '#34d399' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: { xs: 'calc(100vh - 72px)', md: 'calc(100vh - 84px)' },
        background: BRAND.gradHero,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 4 },
      }}
    >
      {/* Background mesh */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '70%',
            height: '80%',
            background: `radial-gradient(ellipse, ${BRAND.cyanGlow} 0%, transparent 70%)`,
            opacity: 0.6,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10%',
            right: '-5%',
            width: '50%',
            height: '60%',
            background: `radial-gradient(ellipse, ${BRAND.amberGlow} 0%, transparent 70%)`,
            opacity: 0.3,
          },
        }}
      />

      {/* Grid pattern overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 197, 230, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 197, 230, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: { xs: 8, lg: 6 },
            alignItems: 'center',
          }}
        >
          {/* Text Content */}
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <MotionBox variants={itemVariants}>
              <Chip
                label="✦ Gestión empresarial móvil #1"
                sx={{
                  mb: 3,
                  background: `${BRAND.cyan}15`,
                  border: `1px solid ${BRAND.cyan}33`,
                  color: BRAND.cyan,
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  letterSpacing: '0.06em',
                  height: 32,
                  '& .MuiChip-label': { px: 2 },
                }}
              />
            </MotionBox>

            {/* Headline */}
            <MotionTypography
              variants={itemVariants}
              variant="h1"
              sx={{
                fontSize: { xs: '2.75rem', sm: '3.5rem', md: '4rem', lg: '4.25rem' },
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                mb: 3,
                color: BRAND.textPrimary,
              }}
            >
              Gestiona tu{' '}
              <span className="gradient-text-cyan">negocio</span>
              <br />
              con total{' '}
              <Box component="span" sx={{ color: BRAND.textPrimary }}>
                Control
              </Box>
            </MotionTypography>

            <MotionTypography
              variants={itemVariants}
              variant="body1"
              sx={{
                color: BRAND.textSecondary,
                mb: 4,
                lineHeight: 1.75,
                maxWidth: 520,
                fontSize: { xs: '1.0625rem', md: '1.125rem' },
              }}
            >
              La aplicación móvil que centraliza ventas, inventario, clientes y empleados.
              Toma decisiones inteligentes con datos en tiempo real.
            </MotionTypography>

            {/* CTAs */}
            <MotionBox
              variants={itemVariants}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                mb: 5,
              }}
            >
              <Button
                variant="contained"
                size="large"
                component={Link}
                href={ROUTES.PRICING}
                endIcon={<ArrowForward />}
                sx={{
                  py: 1.75,
                  px: 4,
                  fontSize: '1rem',
                }}
              >
                Comenzar Gratis
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayArrow />}
                sx={{
                  py: 1.75,
                  px: 4,
                  fontSize: '1rem',
                }}
              >
                Ver Demo
              </Button>
            </MotionBox>

            {/* Social proof */}
            <MotionBox
              variants={itemVariants}
              sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
            >
              <Box sx={{ display: 'flex', gap: -0.5 }}>
                {['M', 'C', 'A', 'J', 'L'].map((letter, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${BRAND.cyan} 0%, ${BRAND.cyanDark} 100%)`,
                      border: `2px solid ${BRAND.bg0}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      color: BRAND.bg0,
                      marginLeft: i > 0 ? '-8px' : 0,
                      fontFamily: 'var(--font-space-grotesk)',
                    }}
                  >
                    {letter}
                  </Box>
                ))}
              </Box>
              <Typography
                variant="body2"
                sx={{ color: BRAND.textMuted, fontSize: '0.8125rem' }}
              >
                +15,000 negocios confían en Control
              </Typography>
            </MotionBox>
          </MotionBox>

          {/* Dashboard Mockup */}
          <MotionBox
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            sx={{
              display: { xs: 'none', lg: 'block' },
              position: 'relative',
            }}
          >
            {/* Main Card */}
            <Box
              sx={{
                background: BRAND.bg2,
                border: `1px solid ${BRAND.glassBorder}`,
                borderRadius: '20px',
                p: 3,
                boxShadow: `0 40px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px ${BRAND.glassBorder}`,
                position: 'relative',
              }}
            >
              {/* Card Header */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: 3,
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: BRAND.textPrimary, fontWeight: 600, mb: 0.25 }}
                  >
                    Resumen del día
                  </Typography>
                  <Typography variant="caption" sx={{ color: BRAND.textMuted }}>
                    16 Abr, 2026
                  </Typography>
                </Box>
                <Box
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '8px',
                    background: 'rgba(52, 211, 153, 0.15)',
                    border: '1px solid rgba(52, 211, 153, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                  }}
                >
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#34d399',
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ color: '#34d399', fontWeight: 600, fontSize: '0.7rem' }}
                  >
                    En línea
                  </Typography>
                </Box>
              </Box>

              {/* Stats Row */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 2,
                  mb: 3,
                }}
              >
                {[
                  { label: 'Ventas Hoy', value: '$3,847', change: '+12%', positive: true },
                  { label: 'Pedidos', value: '94', change: '+8%', positive: true },
                  { label: 'Clientes', value: '1,284', change: '+5%', positive: true },
                  { label: 'Stock Bajo', value: '3 items', change: '', positive: false },
                ].map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      background: BRAND.bg3,
                      border: `1px solid ${BRAND.glassBorder}`,
                      borderRadius: '12px',
                      p: 2,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{ color: BRAND.textMuted, display: 'block', mb: 0.5 }}
                    >
                      {item.label}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                      <Typography
                        sx={{
                          color: BRAND.textPrimary,
                          fontFamily: 'var(--font-space-grotesk)',
                          fontWeight: 700,
                          fontSize: '1.25rem',
                        }}
                      >
                        {item.value}
                      </Typography>
                      {item.change && (
                        <Typography
                          variant="caption"
                          sx={{
                            color: item.positive ? '#34d399' : '#f87171',
                            fontWeight: 600,
                          }}
                        >
                          {item.change}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Mini Chart */}
              <Box
                sx={{
                  background: BRAND.bg3,
                  border: `1px solid ${BRAND.glassBorder}`,
                  borderRadius: '12px',
                  p: 2,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ color: BRAND.textMuted, display: 'block', mb: 1.5 }}
                >
                  Ventas últimos 7 días
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: 1,
                    height: 64,
                  }}
                >
                  {[55, 70, 45, 90, 62, 80, 95].map((h, i) => (
                    <Box
                      key={i}
                      sx={{
                        flex: 1,
                        height: `${h}%`,
                        borderRadius: '4px 4px 0 0',
                        background: i === 6
                          ? BRAND.gradPrimary
                          : `${BRAND.cyan}33`,
                        transition: 'all 0.3s ease',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Floating stat cards */}
            {floatingStats.map((stat, i) => {
              const positions = [
                { top: '-5%', right: '-12%' },
                { bottom: '25%', right: '-14%' },
                { bottom: '-5%', left: '10%' },
              ]
              return (
                <MotionBox
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.7,
                  }}
                  sx={{
                    position: 'absolute',
                    ...positions[i],
                    background: BRAND.bg2,
                    border: `1px solid ${BRAND.glassBorder}`,
                    borderRadius: '12px',
                    p: 1.75,
                    minWidth: 130,
                    boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 34,
                      height: 34,
                      borderRadius: '9px',
                      background: `${stat.color}20`,
                      border: `1px solid ${stat.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <stat.icon sx={{ fontSize: 16, color: stat.color }} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-space-grotesk)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: BRAND.textPrimary,
                        lineHeight: 1.2,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: BRAND.textMuted,
                        fontSize: '0.65rem',
                        lineHeight: 1.2,
                        display: 'block',
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </MotionBox>
              )
            })}
          </MotionBox>
        </Box>
      </Container>
    </Box>
  )
}
