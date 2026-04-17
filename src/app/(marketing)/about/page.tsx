import type { Metadata } from 'next'
import { Box, Container, Typography, Grid, Button } from '@mui/material'
import Link from 'next/link'
import {
  Lightbulb,
  Favorite,
  Security,
  Groups,
  ArrowForward,
  TrendingUp,
  Inventory2,
  PhoneAndroid,
} from '@mui/icons-material'
import { ROUTES } from '@/lib/constants/routes'
import { BRAND } from '@/styles/theme'

export const metadata: Metadata = {
  title: 'Acerca de',
  description:
    'Conoce la historia y misión detrás de Control. Una startup tecnológica construyendo herramientas para empoderar a pequeños y medianos empresarios.',
  openGraph: {
    title: 'Acerca de Control — Nuestra historia y misión',
    description: 'Construyendo el futuro de la gestión empresarial para pymes.',
    url: '/about',
  },
}

const values = [
  {
    icon: Lightbulb,
    color: BRAND.amber,
    title: 'Simplicidad primero',
    description:
      'Creemos que el software poderoso no tiene que ser complejo. Diseñamos cada función para que cualquier empresario pueda usarla sin capacitación técnica.',
  },
  {
    icon: Favorite,
    color: '#f87171',
    title: 'Centrados en el cliente',
    description:
      'Cada decisión de producto nace de escuchar a nuestros usuarios. Los negocios reales de personas reales guían nuestro roadmap.',
  },
  {
    icon: Security,
    color: BRAND.cyan,
    title: 'Confianza y seguridad',
    description:
      'Los datos de tu negocio son sagrados. Ciframos todo, hacemos backups automáticos y nunca compartimos tu información con terceros.',
  },
  {
    icon: Groups,
    color: '#a78bfa',
    title: 'Crecemos juntos',
    description:
      'No queremos clientes, queremos socios. Tu crecimiento es nuestro éxito. Por eso el plan básico es gratis y escala contigo.',
  },
]

const milestones = [
  {
    year: '2022',
    title: 'El problema',
    description:
      'Fundadores de Control observaron cómo miles de negocios operaban con hojas de cálculo, cuadernos y múltiples aplicaciones desconectadas.',
  },
  {
    year: '2023',
    title: 'La solución',
    description:
      'Lanzamos la primera versión de Control para Android, con POS básico e inventario. Los primeros 500 negocios se unieron en 3 meses.',
  },
  {
    year: '2024',
    title: 'Crecimiento',
    description:
      'Llegamos a 5,000 negocios activos. Lanzamos gestión de empleados, reportes avanzados y la versión iOS. Primer equipo de soporte dedicado.',
  },
  {
    year: '2025',
    title: 'Expansión',
    description:
      'Superamos los 15,000 negocios activos en 12 países. Lanzamos el módulo de finanzas y la API para integraciones empresariales.',
  },
]

const teamValues = [
  { icon: TrendingUp, value: '15,000+', label: 'Negocios activos' },
  { icon: Inventory2, value: '12', label: 'Módulos integrados' },
  { icon: PhoneAndroid, value: 'iOS + Android', label: 'Plataformas' },
  { icon: Groups, value: '98%', label: 'Satisfacción' },
]

export default function AboutPage() {
  return (
    <Box sx={{ background: BRAND.bg0, minHeight: '100vh' }}>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 10, md: 18 },
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `1px solid ${BRAND.glassBorder}`,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-20%',
            left: '-5%',
            width: '55%',
            height: '90%',
            background: `radial-gradient(ellipse, ${BRAND.cyanGlow} 0%, transparent 70%)`,
            opacity: 0.4,
            pointerEvents: 'none',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-20%',
            right: '-5%',
            width: '40%',
            height: '70%',
            background: `radial-gradient(ellipse, ${BRAND.amberGlow} 0%, transparent 70%)`,
            opacity: 0.2,
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 700 }}>
            <Typography
              variant="overline"
              sx={{ color: BRAND.cyan, display: 'block', mb: 2, letterSpacing: '0.14em' }}
            >
              Acerca de nosotros
            </Typography>
            <Typography
              variant="h1"
              className="text-balance"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.75rem' },
                fontWeight: 700,
                color: BRAND.textPrimary,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                mb: 3,
                wordBreak: 'break-word',
              }}
            >
              Construimos el{' '}
              <span className="gradient-text-cyan">futuro</span>{' '}
              de las pymes
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: BRAND.textSecondary,
                lineHeight: 1.8,
                fontSize: '1.125rem',
                maxWidth: 580,
              }}
            >
              Somos un equipo apasionado que cree que cada pequeño empresario merece
              herramientas de nivel enterprise. Accesibles, intuitivas y poderosas.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Mission */}
      <Box sx={{ py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 6, md: 10 },
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{ color: BRAND.amber, display: 'block', mb: 2, letterSpacing: '0.14em' }}
              >
                Nuestra Misión
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: BRAND.textPrimary,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Democratizar la gestión empresarial
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: BRAND.textSecondary, lineHeight: 1.8, mb: 3, fontSize: '1.0625rem' }}
              >
                Durante años, las grandes corporaciones tuvieron acceso a software sofisticado
                mientras que los negocios pequeños se las arreglaban con Excel o cuadernos.
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: BRAND.textSecondary, lineHeight: 1.8, fontSize: '1.0625rem' }}
              >
                Control nació para cambiar eso. Creemos que una papelería de barrio merece
                las mismas herramientas que una cadena de supermercados — adaptadas a su
                escala, sin las complejidades ni el precio exorbitante.
              </Typography>
            </Box>

            {/* Stats grid */}
            <Box>
              <Grid container spacing={2}>
                {teamValues.map((item, i) => (
                  <Grid item xs={6} key={i}>
                    <Box
                      sx={{
                        background: BRAND.bg2,
                        border: `1px solid ${BRAND.glassBorder}`,
                        borderRadius: '16px',
                        p: 3,
                        textAlign: 'center',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          borderColor: `${BRAND.cyan}44`,
                          transform: 'translateY(-3px)',
                        },
                      }}
                    >
                      <item.icon sx={{ fontSize: 24, color: BRAND.cyan, mb: 1 }} />
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-space-grotesk)',
                          fontWeight: 700,
                          fontSize: '1.5rem',
                          color: BRAND.textPrimary,
                          letterSpacing: '-0.03em',
                          lineHeight: 1.2,
                        }}
                      >
                        {item.value}
                      </Typography>
                      <Typography variant="caption" sx={{ color: BRAND.textMuted, fontSize: '0.75rem' }}>
                        {item.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Values */}
      <Box
        sx={{
          py: { xs: 7, md: 10 },
          background: BRAND.bg1,
          borderTop: `1px solid ${BRAND.glassBorder}`,
          borderBottom: `1px solid ${BRAND.glassBorder}`,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: { xs: 7, md: 10 } }}>
            <Typography
              variant="overline"
              sx={{ color: BRAND.cyan, display: 'block', mb: 2, letterSpacing: '0.14em' }}
            >
              Nuestros Valores
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: BRAND.textPrimary,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Lo que nos define
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {values.map((value, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2.5,
                    p: 3.5,
                    background: BRAND.bg2,
                    border: `1px solid ${BRAND.glassBorder}`,
                    borderRadius: '18px',
                    height: '100%',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      borderColor: `${value.color}44`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '13px',
                      background: `${value.color}18`,
                      border: `1px solid ${value.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <value.icon sx={{ fontSize: 22, color: value.color }} />
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ color: BRAND.textPrimary, fontWeight: 600, mb: 1 }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: BRAND.textSecondary, lineHeight: 1.75 }}
                    >
                      {value.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Box sx={{ py: { xs: 7, md: 10 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: { xs: 7, md: 10 } }}>
            <Typography
              variant="overline"
              sx={{ color: BRAND.amber, display: 'block', mb: 2, letterSpacing: '0.14em' }}
            >
              Historia
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: BRAND.textPrimary,
                fontWeight: 700,
                letterSpacing: '-0.03em',
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}
            >
              Nuestro camino
            </Typography>
          </Box>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 20, md: '50%' },
                top: 0,
                bottom: 0,
                width: '1px',
                background: `linear-gradient(180deg, transparent, ${BRAND.cyan}66, ${BRAND.cyan}33, transparent)`,
                transform: { md: 'translateX(-50%)' },
              }}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {milestones.map((milestone, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '48px 1fr', md: '1fr 48px 1fr' },
                    gap: { xs: 2, md: 3 },
                    alignItems: 'start',
                  }}
                >
                  {/* Left content (even on desktop) */}
                  {i % 2 === 0 && (
                    <Box
                      sx={{
                        display: { xs: 'none', md: 'block' },
                        textAlign: 'right',
                        pr: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-space-grotesk)',
                          fontWeight: 700,
                          fontSize: '0.875rem',
                          color: BRAND.cyan,
                          mb: 0.75,
                          letterSpacing: '0.06em',
                        }}
                      >
                        {milestone.year}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ color: BRAND.textPrimary, fontWeight: 600, mb: 0.75 }}
                      >
                        {milestone.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: BRAND.textSecondary, lineHeight: 1.7 }}>
                        {milestone.description}
                      </Typography>
                    </Box>
                  )}

                  {/* Center dot */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      pt: 0.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        background: BRAND.gradPrimary,
                        boxShadow: `0 0 12px ${BRAND.cyanGlow}`,
                        flexShrink: 0,
                      }}
                    />
                  </Box>

                  {/* Right content or mobile content */}
                  <Box sx={{ pl: { xs: 0, md: i % 2 === 1 ? 0 : 2 } }}>
                    {/* Mobile always shows content here */}
                    <Box sx={{ display: { xs: 'block', md: i % 2 === 1 ? 'block' : 'none' } }}>
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-space-grotesk)',
                          fontWeight: 700,
                          fontSize: '0.875rem',
                          color: BRAND.cyan,
                          mb: 0.75,
                          letterSpacing: '0.06em',
                        }}
                      >
                        {milestone.year}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ color: BRAND.textPrimary, fontWeight: 600, mb: 0.75 }}
                      >
                        {milestone.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: BRAND.textSecondary, lineHeight: 1.7 }}>
                        {milestone.description}
                      </Typography>
                    </Box>
                    {/* Empty cell for even desktop items */}
                    {i % 2 === 0 && <Box sx={{ display: { xs: 'none', md: 'block' } }} />}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          textAlign: 'center',
          background: BRAND.bg1,
          borderTop: `1px solid ${BRAND.glassBorder}`,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            sx={{ color: BRAND.textPrimary, fontWeight: 700, mb: 2, letterSpacing: '-0.03em' }}
          >
            Únete a nuestra historia
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: BRAND.textSecondary, mb: 4, lineHeight: 1.7 }}
          >
            Sé parte de los más de 15,000 empresarios que ya confían en Control.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href={ROUTES.PRICING}
              endIcon={<ArrowForward />}
              sx={{ py: 1.75, px: 4 }}
            >
              Empezar Gratis
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href={ROUTES.CONTACT}
              sx={{ py: 1.75, px: 4 }}
            >
              Contáctanos
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
