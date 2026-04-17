'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import FAQAccordion from '@/components/help-center/FAQAccordion'
import { useFAQ } from '@/lib/hooks/useFAQ'
import type { FAQ } from '@/types/api.types'

interface FAQClientProps {
  /** Pre-fetched FAQs from server (ISR). If provided, skips React Query on first render. */
  initialFaqs?: FAQ[] | null
}

const STATIC_FAQS = [
  {
    id: 'static-1',
    question: '¿Control funciona sin conexión a Internet?',
    answer:
      'Actualmente Control requiere conexión a Internet para sincronizar los datos en tiempo real. Estamos trabajando en un modo offline para una versión futura.',
    category: 'general',
  },
  {
    id: 'static-2',
    question: '¿Puedo usar Control en varios dispositivos?',
    answer:
      'Sí. Tu cuenta puede estar activa en múltiples dispositivos simultáneamente. Los datos se sincronizan automáticamente entre todos.',
    category: 'general',
  },
  {
    id: 'static-3',
    question: '¿Cómo se hacen las copias de seguridad?',
    answer:
      'Los backups son automáticos y se realizan en la nube. No necesitas hacer nada manualmente. Tu información está segura incluso si pierdes el dispositivo.',
    category: 'seguridad',
  },
  {
    id: 'static-4',
    question: '¿Puedo administrar varios negocios con una sola cuenta?',
    answer:
      'Sí. Control admite múltiples negocios bajo una misma cuenta. Puedes cambiar entre negocios desde la pantalla de selección al iniciar sesión.',
    category: 'general',
  },
  {
    id: 'static-5',
    question: '¿Cómo cancelo mi suscripción?',
    answer:
      'Puedes cancelar desde la configuración de tu cuenta en la app. No hay penalizaciones. Si tienes el plan gratuito, seguirás usándolo sin cambios.',
    category: 'facturacion',
  },
  {
    id: 'static-6',
    question: '¿Los datos son privados y seguros?',
    answer:
      'Sí. Toda la comunicación está encriptada con TLS y los datos se almacenan de forma segura. Nunca compartimos tu información con terceros.',
    category: 'seguridad',
  },
]

export default function FAQClient({ initialFaqs }: FAQClientProps) {
  // If server pre-fetched data, skip the client query (pass initialData to seed the cache)
  const { data: apiFaqs, isLoading, isError } = useFAQ(
    initialFaqs ?? undefined
  )
  const faqs = apiFaqs && apiFaqs.length > 0 ? apiFaqs : STATIC_FAQS

  return (
    <Box>
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="overline"
          sx={{ color: '#00c5e6', letterSpacing: 3, fontWeight: 700, fontSize: '0.72rem' }}
        >
          Preguntas frecuentes
        </Typography>
        <Typography
          variant="h4"
          fontWeight={800}
          sx={{ color: 'rgba(255,255,255,0.95)', mt: 1, mb: 1.5 }}
        >
          Las dudas más comunes
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: 520 }}>
          Respuestas claras a las preguntas que más nos hacen nuestros usuarios.
        </Typography>
      </Box>

      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 6 }}>
          <CircularProgress sx={{ color: '#00c5e6' }} size={32} thickness={3} />
        </Box>
      )}

      {isError && !isLoading && (
        <Alert
          severity="info"
          sx={{
            mb: 4,
            bgcolor: 'rgba(0,197,230,0.08)',
            color: 'rgba(255,255,255,0.7)',
            border: '1px solid rgba(0,197,230,0.2)',
            '& .MuiAlert-icon': { color: '#00c5e6' },
          }}
        >
          Mostrando preguntas frecuentes predeterminadas.
        </Alert>
      )}

      {!isLoading && <FAQAccordion faqs={faqs as any} />}
    </Box>
  )
}
