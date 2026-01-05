'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material'
import { STATS } from '@/data/stats'

export function StatsSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, #027483 0%, #00abc2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: 'white',
              mb: 2,
            }}
          >
            Números que hablan por sí solos
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            La confianza de miles de empresarios nos respalda
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {STATS.map((stat, index) => (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: 3,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    background: 'rgba(255, 255, 255, 0.15)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      margin: '0 auto 1.5rem',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <stat.icon sx={{ fontSize: 32, color: 'white' }} />
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      fontWeight: 700,
                      color: 'white',
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'white',
                      mb: 1,
                    }}
                  >
                    {stat.label}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                    }}
                  >
                    {stat.description}
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
