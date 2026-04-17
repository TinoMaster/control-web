import type { Metadata } from 'next'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { HelpOutline, Article, ContactSupport, ArrowForward } from '@mui/icons-material'
import Link from 'next/link'
import { ROUTES } from '@/lib/constants/routes'
import { HELP_ARTICLES, HELP_CATEGORIES } from '@/data/helpArticles'
import ArticleCard from '@/components/help-center/ArticleCard'

export const metadata: Metadata = {
  title: 'Centro de Ayuda | Control — Gestión Empresarial',
  description:
    'Bienvenido al Centro de Ayuda de Control. Encuentra guías, tutoriales y respuestas a las preguntas más frecuentes.',
  openGraph: {
    title: 'Centro de Ayuda — Control',
    description: 'Guías, tutoriales y preguntas frecuentes.',
    url: '/help-center',
  },
}

const CATEGORY_ICONS: Record<string, string> = {
  'primeros-pasos': '🚀',
  ventas: '💰',
  empleados: '👥',
  inventario: '📦',
  configuracion: '⚙️',
}

export default function HelpCenterPage() {
  return (
    <Box component="main" sx={{ bgcolor: '#060c1a', minHeight: '100vh' }}>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          pt: { xs: 10, md: 14 },
          pb: { xs: 8, md: 12 },
          overflow: 'hidden',
          background: 'linear-gradient(180deg, rgba(0,197,230,0.06) 0%, transparent 100%)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '-40%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '70vw',
            height: '70vw',
            maxWidth: 800,
            maxHeight: 800,
            background: 'radial-gradient(ellipse, rgba(0,197,230,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              bgcolor: 'rgba(0,197,230,0.1)',
              border: '1px solid rgba(0,197,230,0.25)',
              borderRadius: 10,
              px: 2,
              py: 0.75,
              mb: 3,
            }}
          >
            <HelpOutline sx={{ fontSize: 16, color: '#00c5e6' }} />
            <Typography variant="caption" sx={{ color: '#00c5e6', fontWeight: 700, letterSpacing: 1 }}>
              SOPORTE Y DOCUMENTACIÓN
            </Typography>
          </Box>
          <Typography
            variant="h2"
            fontWeight={800}
            sx={{
              color: '#fff',
              fontSize: { xs: '2.2rem', md: '3.5rem' },
              lineHeight: 1.15,
              mb: 2,
            }}
          >
            Centro de{' '}
            <Box component="span" sx={{ color: '#00c5e6' }}>
              Ayuda
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.55)',
              mb: 5,
              fontSize: '1.1rem',
              maxWidth: 500,
              mx: 'auto',
            }}
          >
            Todo lo que necesitas saber para sacarle el máximo partido a Control.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              href={ROUTES.HELP_CENTER_FAQ}
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #00c5e6, #0099b8)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #00d4f8, #00c5e6)',
                  boxShadow: '0 0 24px rgba(0,197,230,0.4)',
                },
              }}
            >
              Ver preguntas frecuentes
            </Button>
            <Button
              component={Link}
              href={ROUTES.CONTACT}
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.7)',
                borderColor: 'rgba(255,255,255,0.15)',
                '&:hover': {
                  borderColor: '#00c5e6',
                  color: '#00c5e6',
                  bgcolor: 'rgba(0,197,230,0.05)',
                },
              }}
            >
              Contactar soporte
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Categorías */}
      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 10 } }}>
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="overline"
            sx={{ color: '#f59e0b', letterSpacing: 3, fontWeight: 700, fontSize: '0.72rem' }}
          >
            Categorías
          </Typography>
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{ color: 'rgba(255,255,255,0.95)', mt: 1, mb: 1 }}
          >
            Explorar por tema
          </Typography>
        </Box>

        <Grid container spacing={2.5} sx={{ mb: 10 }}>
          {HELP_CATEGORIES.map((cat) => (
            <Grid item xs={6} sm={4} md={2.4} key={cat.id}>
              <Box
                component={Link}
                href={ROUTES.HELP_CENTER_FAQ}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 3,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 3,
                  textDecoration: 'none',
                  transition: 'all 0.22s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    background: 'rgba(0,197,230,0.07)',
                    borderColor: 'rgba(0,197,230,0.3)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <Typography sx={{ fontSize: '1.8rem', lineHeight: 1 }}>
                  {CATEGORY_ICONS[cat.id] ?? '📋'}
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={600}
                  sx={{ color: 'rgba(255,255,255,0.7)', textAlign: 'center', lineHeight: 1.3 }}
                >
                  {cat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Artículos */}
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="overline"
            sx={{ color: '#00c5e6', letterSpacing: 3, fontWeight: 700, fontSize: '0.72rem' }}
          >
            Documentación
          </Typography>
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{ color: 'rgba(255,255,255,0.95)', mt: 1 }}
          >
            Artículos destacados
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {HELP_ARTICLES.map((article) => (
            <Grid item xs={12} sm={6} md={3} key={article.slug}>
              <ArticleCard
                slug={article.slug}
                title={article.title}
                description={article.description}
                category={article.category}
                readTime={article.readTime}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Bottom CTA */}
      <Box
        sx={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          py: { xs: 8, md: 10 },
          background: 'rgba(0,0,0,0.2)',
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'rgba(0,197,230,0.1)',
              border: '1px solid rgba(0,197,230,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 3,
            }}
          >
            <ContactSupport sx={{ fontSize: 28, color: '#00c5e6' }} />
          </Box>
          <Typography
            variant="h5"
            fontWeight={800}
            gutterBottom
            sx={{ color: 'rgba(255,255,255,0.95)' }}
          >
            ¿Necesitas ayuda personalizada?
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', mb: 4 }}>
            Nuestro equipo de soporte está disponible para resolver cualquier duda.
          </Typography>
          <Button
            component={Link}
            href={ROUTES.CONTACT}
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #00c5e6, #0099b8)',
              '&:hover': {
                background: 'linear-gradient(135deg, #00d4f8, #00c5e6)',
                boxShadow: '0 0 24px rgba(0,197,230,0.4)',
              },
            }}
          >
            Contactar soporte
          </Button>
        </Container>
      </Box>
    </Box>
  )
}
