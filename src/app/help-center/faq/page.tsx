import type { Metadata } from 'next'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { Email, Search } from '@mui/icons-material'
import Link from 'next/link'
import { ROUTES } from '@/lib/constants/routes'
import ArticleCard from '@/components/help-center/ArticleCard'
import FAQClient from './FAQClient'
import { HELP_ARTICLES } from '@/data/helpArticles'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Centro de Ayuda | Control — Gestión Empresarial',
  description:
    'Encuentra respuestas a tus preguntas sobre Control. Guías, tutoriales y preguntas frecuentes para sacarle el máximo partido a la plataforma.',
  openGraph: {
    title: 'Centro de Ayuda — Control',
    description: 'Guías, tutoriales y preguntas frecuentes.',
    url: '/help-center/faq',
  },
}

const STATIC_FAQ_SCHEMA_ITEMS = [
  {
    question: '¿Control funciona sin conexión a Internet?',
    answer:
      'Actualmente Control requiere conexión a Internet para sincronizar los datos en tiempo real. Estamos trabajando en un modo offline para una versión futura.',
  },
  {
    question: '¿Puedo usar Control en varios dispositivos?',
    answer:
      'Sí. Tu cuenta puede estar activa en múltiples dispositivos simultáneamente. Los datos se sincronizan automáticamente entre todos.',
  },
  {
    question: '¿Cómo se hacen las copias de seguridad?',
    answer:
      'Los backups son automáticos y se realizan en la nube. No necesitas hacer nada manualmente. Tu información está segura incluso si pierdes el dispositivo.',
  },
  {
    question: '¿Puedo administrar varios negocios con una sola cuenta?',
    answer:
      'Sí. Control admite múltiples negocios bajo una misma cuenta. Puedes cambiar entre negocios desde la pantalla de selección al iniciar sesión.',
  },
  {
    question: '¿Cómo cancelo mi suscripción?',
    answer:
      'Puedes cancelar desde la configuración de tu cuenta en la app. No hay penalizaciones. Si tienes el plan gratuito, seguirás usándolo sin cambios.',
  },
  {
    question: '¿Los datos son privados y seguros?',
    answer:
      'Sí. Toda la comunicación está encriptada con TLS y los datos se almacenan de forma segura. Nunca compartimos tu información con terceros.',
  },
]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: STATIC_FAQ_SCHEMA_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
}

export default function HelpCenterFAQPage() {
  return (
    <Box
      component="main"
      sx={{ bgcolor: '#060c1a', minHeight: '100vh' }}
    >
      <JsonLd data={faqPageSchema} />

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
            width: '80vw',
            height: '80vw',
            maxWidth: 900,
            maxHeight: 900,
            background:
              'radial-gradient(ellipse, rgba(0,197,230,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Typography
            variant="overline"
            sx={{
              color: '#00c5e6',
              letterSpacing: 4,
              fontWeight: 700,
              fontSize: '0.72rem',
              display: 'block',
              mb: 2,
            }}
          >
            Centro de Ayuda
          </Typography>
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
            ¿En qué podemos{' '}
            <Box component="span" sx={{ color: '#00c5e6' }}>
              ayudarte?
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.55)', mb: 5, fontSize: '1.1rem', maxWidth: 480, mx: 'auto' }}
          >
            Encuentra guías, tutoriales y respuestas a las preguntas más frecuentes.
          </Typography>

          {/* Search bar decorativa */}
          <Box
            sx={{
              maxWidth: 520,
              mx: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 3,
              px: 2.5,
              py: 1.5,
              backdropFilter: 'blur(12px)',
              transition: 'border-color 0.2s',
              '&:focus-within': { borderColor: 'rgba(0,197,230,0.5)' },
            }}
          >
            <Search sx={{ color: 'rgba(255,255,255,0.3)', fontSize: 20 }} />
            <Box
              component="input"
              placeholder="Buscar artículos..."
              sx={{
                border: 'none',
                outline: 'none',
                width: '100%',
                fontSize: '0.95rem',
                color: 'rgba(255,255,255,0.85)',
                bgcolor: 'transparent',
                '&::placeholder': { color: 'rgba(255,255,255,0.3)' },
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Artículos */}
      <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 12 } }}>
        <Box sx={{ mb: 5 }}>
          <Typography
            variant="overline"
            sx={{ color: '#f59e0b', letterSpacing: 3, fontWeight: 700, fontSize: '0.72rem' }}
          >
            Documentación
          </Typography>
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{ color: 'rgba(255,255,255,0.95)', mt: 1 }}
          >
            Artículos populares
          </Typography>
        </Box>
        <Grid container spacing={3} sx={{ mb: 10 }}>
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

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)', mb: 10 }} />

        {/* FAQ dinámica desde el backend */}
        <FAQClient />
      </Container>

      {/* CTA contacto */}
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
              background: 'rgba(245,158,11,0.12)',
              border: '1px solid rgba(245,158,11,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 3,
            }}
          >
            <Email sx={{ fontSize: 28, color: '#f59e0b' }} />
          </Box>
          <Typography
            variant="h5"
            fontWeight={800}
            gutterBottom
            sx={{ color: 'rgba(255,255,255,0.95)' }}
          >
            ¿No encontraste lo que buscabas?
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.5)', mb: 4 }}
          >
            Nuestro equipo de soporte está disponible para ayudarte en lo que necesites.
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
