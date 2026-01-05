import Link from 'next/link'
import { Box, Container, Typography, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '6rem', md: '8rem' },
            fontWeight: 700,
            color: 'primary.main',
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
          Página no encontrada
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </Typography>
        <Button
          component={Link}
          href="/home"
          variant="contained"
          size="large"
          startIcon={<HomeIcon />}
        >
          Volver al inicio
        </Button>
      </Container>
    </Box>
  )
}
