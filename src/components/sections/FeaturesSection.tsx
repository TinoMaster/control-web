'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material'
import { FEATURES } from '@/data/features'

export function FeaturesSection() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #1a1a1a 0%, #242424 100%)',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: 'white',
              mb: 2,
            }}
          >
            Características
            <Box component="span" sx={{ color: 'primary.main' }}>
              {' '}
              Principales
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Todo lo que necesitas para llevar tu negocio al siguiente nivel
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {FEATURES.map((feature, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background:
                    'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(2, 116, 131, 0.3)',
                    border: '1px solid rgba(2, 116, 131, 0.3)',
                  },
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      margin: '0 auto 2rem',
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, #00abc2)`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(2, 116, 131, 0.4)',
                    }}
                  >
                    <feature.icon sx={{ fontSize: 36, color: 'white' }} />
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: 'white',
                      mb: 2,
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
