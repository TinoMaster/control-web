import {
  FadeUp,
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from '@/components/ui/AnimatedElements'
import { PRICING_PLANS } from '@/data/pricing'
import { EXTERNAL_URLS } from '@/lib/constants/external'
import { BRAND } from '@/styles/theme'
import {
  AccessTime,
  ArrowForward,
  CheckCircle,
  Schedule,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Chip,
  Container,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Precios',
  description:
    'Regístrate gratis y accede a todas las funciones de Control durante 6 meses. Sin compromisos.',
  openGraph: {
    title: 'Precios de Control — 6 meses gratis con acceso total',
    description:
      'Regístrate durante el período de lanzamiento y obtén acceso completo a todas las funciones durante 6 meses.',
    url: '/pricing',
  },
}

const faqItems = [
  {
    q: '¿Qué obtengo al registrarme?',
    a: 'Acceso completo a todas las funciones de Control durante 6 meses: gestión de ventas, inventario, empleados, reportes, punto de venta (POS) y más. Sin restricciones.',
  },
  {
    q: '¿Qué pasa cuando se me acaben los 6 meses?',
    a: 'Tendrás la opción de continuar con un plan de pago o usar una versión con funciones básicas. Tus datos se mantienen seguros sin importar qué plan elijas.',
  },
  {
    q: '¿Puedo registrarme después del 1 de enero de 2027?',
    a: 'La ventana de registro con 6 meses gratis se cierra el 1 de enero de 2027. Después de esa fecha, los nuevos usuarios tendrán acceso a un plan con funciones básicas o podrán contratar un plan de pago.',
  },
  {
    q: '¿Cómo se paga en Cuba?',
    a: 'Los planes de pago estarán disponibles a través de Transfermóvil, EnZona y otros métodos de pago locales. Te avisaremos con anticipación cuando estén listos.',
  },
  {
    q: '¿Mis datos están seguros?',
    a: 'Sí. Todos tus datos están protegidos con encriptación de nivel empresarial. Si decides no continuar, tendrás 30 días para exportar toda tu información.',
  },
]

export default function PricingPage() {
  const plan = PRICING_PLANS[0]

  return (
    <PageTransition sx={{ background: BRAND.bg0, minHeight: '100vh' }}>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `1px solid ${BRAND.glassBorder}`,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            height: '100%',
            background: `radial-gradient(ellipse, ${BRAND.cyanGlow} 0%, transparent 70%)`,
            opacity: 0.3,
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <FadeUp>
            <Typography
              variant="overline"
              sx={{
                color: BRAND.cyan,
                display: 'block',
                mb: 2,
                letterSpacing: '0.14em',
              }}
            >
              Precios
            </Typography>
            <Typography
              variant="h1"
              className="text-balance"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                color: BRAND.textPrimary,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              Pruébalo{' '}
              <span className="gradient-text-cyan">gratis</span> durante 6
              meses
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: BRAND.textSecondary,
                lineHeight: 1.75,
                maxWidth: 560,
                mx: 'auto',
                fontSize: '1.125rem',
                mb: 4,
              }}
            >
              Regístrate durante el período de lanzamiento y accede a todas las
              funciones sin restricciones. Sin tarjeta de crédito, sin
              compromisos.
            </Typography>

            {/* Deadline badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2.5,
                py: 1,
                borderRadius: '12px',
                background: `${BRAND.cyan}12`,
                border: `1px solid ${BRAND.cyan}30`,
                mb: 2,
              }}
            >
              <Schedule sx={{ fontSize: 18, color: BRAND.cyan }} />
              <Typography
                variant="body2"
                sx={{
                  color: BRAND.cyan,
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                }}
              >
                Oferta válida hasta el 1 de enero de 2027
              </Typography>
            </Box>
          </FadeUp>
        </Container>
      </Box>

      {/* How it works */}
      <Box sx={{ py: { xs: 8, md: 10 }, background: BRAND.bg1 }}>
        <Container maxWidth="md">
          <FadeUp sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                color: BRAND.textPrimary,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                mb: 2,
              }}
            >
              ¿Cómo funciona?
            </Typography>
          </FadeUp>

          <StaggerContainer speed="normal">
            <Grid container spacing={4}>
              {[
                {
                  step: '1',
                  title: 'Regístrate gratis',
                  desc: 'Crea tu cuenta en menos de 2 minutos. Sin tarjeta de crédito.',
                  icon: AccessTime,
                },
                {
                  step: '2',
                  title: 'Usa todas las funciones',
                  desc: 'Accede a ventas, inventario, empleados, reportes y POS durante 6 meses.',
                  icon: CheckCircle,
                },
                {
                  step: '3',
                  title: 'Elige tu plan',
                  desc: 'Al vencer los 6 meses, elige el plan que mejor se adapte a tu negocio.',
                  icon: AccessTime,
                },
              ].map((item, i) => (
                <Grid size={{ xs: 12, md: 4 }} key={i}>
                  <StaggerItem>
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 3,
                        background: BRAND.bg2,
                        border: `1px solid ${BRAND.glassBorder}`,
                        borderRadius: '16px',
                        height: '100%',
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '14px',
                          background: `${BRAND.cyan}15`,
                          border: `1px solid ${BRAND.cyan}30`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <item.icon sx={{ fontSize: 22, color: BRAND.cyan }} />
                      </Box>
                      <Typography
                        variant="overline"
                        sx={{
                          color: BRAND.cyan,
                          display: 'block',
                          mb: 1,
                          letterSpacing: '0.1em',
                        }}
                      >
                        Paso {item.step}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: BRAND.textPrimary,
                          fontWeight: 600,
                          mb: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: BRAND.textSecondary,
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerContainer>
        </Container>
      </Box>

      {/* Pricing Card */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="sm">
          <FadeUp>
            <Box
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
                  whiteSpace: 'nowrap',
                  '& .MuiChip-label': { px: 2 },
                }}
              />

              <Box sx={{ mb: 3, textAlign: 'center' }}>
                <Typography
                  variant="overline"
                  sx={{
                    color: BRAND.cyan,
                    letterSpacing: '0.1em',
                    display: 'block',
                    mb: 1.5,
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
                    <Typography
                      variant="body2"
                      sx={{ color: BRAND.textMuted }}
                    >
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

              <List sx={{ p: 0 }}>
                {plan.features.map((feature, fi) => (
                  <ListItem key={fi} sx={{ py: 0.75, px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 28 }}>
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
            </Box>
          </FadeUp>
        </Container>
      </Box>

      {/* FAQ */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: BRAND.bg1,
          borderTop: `1px solid ${BRAND.glassBorder}`,
        }}
      >
        <Container maxWidth="md">
          <FadeUp sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                color: BRAND.textPrimary,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                mb: 2,
              }}
            >
              Preguntas frecuentes
            </Typography>
          </FadeUp>

          <StaggerContainer speed="normal">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {faqItems.map((item, i) => (
                <StaggerItem key={i}>
                  <Box
                    sx={{
                      background: BRAND.bg2,
                      border: `1px solid ${BRAND.glassBorder}`,
                      borderRadius: '14px',
                      p: 3,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: BRAND.textPrimary,
                        fontWeight: 600,
                        mb: 1.5,
                      }}
                    >
                      {item.q}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: BRAND.textSecondary, lineHeight: 1.75 }}
                    >
                      {item.a}
                    </Typography>
                  </Box>
                </StaggerItem>
              ))}
            </Box>
          </StaggerContainer>
        </Container>
      </Box>

      {/* CTA */}
      <FadeUp
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
            sx={{
              color: BRAND.textPrimary,
              fontWeight: 700,
              mb: 2,
              letterSpacing: '-0.03em',
            }}
          >
            Empieza gratis hoy
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: BRAND.textSecondary, mb: 4, lineHeight: 1.7 }}
          >
            Sin tarjeta de crédito. Sin compromisos. Configura tu negocio en
            menos de 5 minutos.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component="a"
            href={EXTERNAL_URLS.REGISTER}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<ArrowForward />}
            sx={{ py: 1.75, px: 5 }}
          >
            Crear Cuenta Gratis
          </Button>
        </Container>
      </FadeUp>
    </PageTransition>
  )
}
