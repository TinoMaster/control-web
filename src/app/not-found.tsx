import Link from 'next/link'
import { Box, Container, Typography, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { BRAND } from '@/styles/theme'

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: BRAND.bg0,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw',
          maxWidth: 700,
          maxHeight: 700,
          background: `radial-gradient(ellipse, ${BRAND.cyanGlow} 0%, transparent 70%)`,
          opacity: 0.3,
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '6rem', md: '9rem' },
            fontWeight: 700,
            background: BRAND.gradPrimary,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            mb: 2,
            letterSpacing: '-0.04em',
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: BRAND.textPrimary, fontWeight: 600, mb: 2 }}
        >
          Página no encontrada
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: BRAND.textSecondary, mb: 5, lineHeight: 1.7 }}
        >
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </Typography>
        <Button
          component={Link}
          href="/home"
          variant="contained"
          size="large"
          startIcon={<HomeIcon />}
          sx={{ py: 1.75, px: 4 }}
        >
          Volver al inicio
        </Button>
      </Container>
    </Box>
  )
}
