'use client'

import {
  Download,
  PlayArrow,
  BarChart,
  TrendingUp,
  Assessment,
  Store,
} from '@mui/icons-material'
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  Paper,
  Avatar,
} from '@mui/material'
import Link from 'next/link'
import { ROUTES } from '@/lib/constants/routes'

export function HeroSection() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        minHeight: { xs: 'calc(100vh - 70px)', md: 'calc(100vh - 80px)' },
        background: 'linear-gradient(135deg, #027483 0%, #00abc2 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 8 },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%)
          `,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          {/* Text Content */}
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                fontWeight: 800,
                lineHeight: { xs: 1.1, md: 1.2 },
                background: 'linear-gradient(135deg, #ffffff, #00abc2, #ffffff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: { xs: 2, md: 3 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Gestiona tu negocio
              <br />
              con{' '}
              <Box component="span" sx={{ color: '#ffffff', fontWeight: 900 }}>
                Control
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.85)',
                mb: { xs: 3, md: 4 },
                lineHeight: 1.6,
                maxWidth: { xs: '100%', md: '600px' },
                fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                fontWeight: 300,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              La aplicación móvil completa para administrar ventas, inventario,
              clientes y empleados de tu negocio de manera eficiente y
              profesional.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: 'center',
                gap: { xs: 2, md: 3 },
              }}
            >
              <Button
                variant="contained"
                size="large"
                component={Link}
                href={ROUTES.HOME} // Cambiar cuando exista ruta de registro
                startIcon={<PlayArrow />}
                sx={{
                  py: { xs: 1.8, md: 2 },
                  px: { xs: 3, md: 5 },
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
                  color: theme.palette.primary.main,
                  boxShadow: '0 8px 32px rgba(255, 255, 255, 0.3)',
                  borderRadius: 3,
                  minWidth: { xs: '280px', sm: 'auto' },
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 40px rgba(255, 255, 255, 0.4)',
                    background: 'linear-gradient(45deg, #ffffff, #f5f5f5)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Comenzar Gratis
              </Button>

              <Button
                variant="outlined"
                size="large"
                startIcon={<Download />}
                sx={{
                  py: { xs: 1.8, md: 2 },
                  px: { xs: 3, md: 5 },
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontWeight: 600,
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  color: 'rgba(255, 255, 255, 0.9)',
                  borderWidth: 2,
                  borderRadius: 3,
                  minWidth: { xs: '280px', sm: 'auto' },
                  '&:hover': {
                    borderColor: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    transform: 'translateY(-2px)',
                    borderWidth: 2,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Ver Demo
              </Button>
            </Box>
          </Box>

          {/* Dashboard Mockup */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Main Dashboard Container */}
            <Paper
              elevation={0}
              sx={{
                background:
                  'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 4,
                p: 3,
                width: '100%',
                maxWidth: 400,
                position: 'relative',
              }}
            >
              {/* Header */}
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                  sx={{
                    background: 'linear-gradient(45deg, #ffffff, #e0e0e0)',
                    width: 50,
                    height: 50,
                    mr: 2,
                  }}
                >
                  <Store sx={{ fontSize: 28, color: theme.palette.primary.main }} />
                </Avatar>
                <Box>
                  <Typography variant="h6" color="white" fontWeight={600}>
                    Mi Negocio
                  </Typography>
                  <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                    Dashboard Principal
                  </Typography>
                </Box>
              </Box>

              {/* Stats Grid */}
              <Box
                sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 3 }}
              >
                <Box
                  sx={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: 2,
                    p: 2,
                    textAlign: 'center',
                  }}
                >
                  <TrendingUp sx={{ color: '#ffffff', fontSize: 32, mb: 1 }} />
                  <Typography variant="h6" color="white" fontWeight={700}>
                    $2,450
                  </Typography>
                  <Typography variant="caption" color="rgba(255, 255, 255, 0.8)">
                    Ventas Hoy
                  </Typography>
                </Box>

                <Box
                  sx={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: 2,
                    p: 2,
                    textAlign: 'center',
                  }}
                >
                  <BarChart sx={{ color: '#ffffff', fontSize: 32, mb: 1 }} />
                  <Typography variant="h6" color="white" fontWeight={700}>
                    156
                  </Typography>
                  <Typography variant="caption" color="rgba(255, 255, 255, 0.8)">
                    Productos
                  </Typography>
                </Box>
              </Box>

              {/* Chart representation */}
              <Box
                sx={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 2,
                  p: 2,
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'space-around',
                  height: 120,
                }}
              >
                {[40, 65, 45, 80, 55, 90, 70].map((height, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 20,
                      height: `${height}%`,
                      background: 'linear-gradient(to top, #ffffff, rgba(255,255,255,0.7))',
                      borderRadius: 1,
                      animation: `growUp 0.8s ease-out ${index * 0.1}s both`,
                      '@keyframes growUp': {
                        from: {
                          height: 0,
                        },
                        to: {
                          height: `${height}%`,
                        },
                      },
                    }}
                  />
                ))}
              </Box>
            </Paper>

            {/* Floating Cards */}
            <Box
              sx={{
                position: 'absolute',
                top: '10%',
                right: '-10%',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 2,
                p: 2,
                textAlign: 'center',
                minWidth: 120,
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              }}
            >
              <Assessment sx={{ color: '#ffffff', fontSize: 20, mb: 0.5 }} />
              <Typography variant="caption" color="white" fontWeight={600}>
                Reportes en tiempo real
              </Typography>
              <Typography variant="h6" color="white" fontWeight={700}>
                +24%
              </Typography>
            </Box>

            <Box
              sx={{
                position: 'absolute',
                bottom: '5%',
                left: '-5%',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: 2,
                p: 2,
                textAlign: 'center',
                minWidth: 120,
                animation: 'float 3s ease-in-out 1.5s infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              }}
            >
              <Store sx={{ color: '#ffffff', fontSize: 20, mb: 0.5 }} />
              <Typography variant="caption" color="white" fontWeight={600}>
                Clientes activos
              </Typography>
              <Typography variant="h6" color="white" fontWeight={700}>
                1,247
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
