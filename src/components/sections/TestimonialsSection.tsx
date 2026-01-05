'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Card,
  CardContent,
} from '@mui/material'
import { Star } from '@mui/icons-material'
import { TESTIMONIALS } from '@/data/testimonials'

export function TestimonialsSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #242424 0%, #2d2d2d 50%, #1a1a1a 100%)',
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
            Lo que dicen nuestros
            <Box component="span" sx={{ color: '#00abc2' }}>
              {' '}
              clientes
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
            Miles de negocios ya confían en Control para gestionar sus operaciones
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {TESTIMONIALS.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  background:
                    'linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box display="flex" alignItems="center" mb={3}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        background: 'linear-gradient(45deg, #027483, #00abc2)',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        mr: 2,
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'white',
                          mb: 0.5,
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.6)',
                        }}
                      >
                        {testimonial.business}
                      </Typography>
                    </Box>
                  </Box>

                  <Box display="flex" mb={2}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ color: '#FFD700', fontSize: 20 }} />
                    ))}
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: 1.6,
                      fontStyle: 'italic',
                    }}
                  >
                    &ldquo;{testimonial.comment}&rdquo;
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
