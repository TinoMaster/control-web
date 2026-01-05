'use client'

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material'
import { Check, Star } from '@mui/icons-material'
import Link from 'next/link'
import { PRICING_PLANS } from '@/data/pricing'
import { ROUTES } from '@/lib/constants/routes'

export function PricingSection() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%)',
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
            Planes que se adaptan a
            <Box component="span" sx={{ color: '#00abc2' }}>
              {' '}
              tu negocio
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
            Comienza gratis y crece con nosotros. Sin compromisos, sin sorpresas.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {PRICING_PLANS.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  position: 'relative',
                  background: plan.popular
                    ? 'linear-gradient(145deg, rgba(2, 116, 131, 0.1), rgba(0, 171, 194, 0.05))'
                    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                  backdropFilter: 'blur(20px)',
                  border: plan.popular
                    ? '2px solid #027483'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: plan.popular
                      ? '0 20px 40px rgba(2, 116, 131, 0.3)'
                      : '0 20px 40px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                {plan.popular && (
                  <Chip
                    label="Más Popular"
                    icon={<Star />}
                    sx={{
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(45deg, #027483, #00abc2)',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  />
                )}

                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      color: 'white',
                      mb: 1,
                    }}
                  >
                    {plan.name}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: '3rem',
                        fontWeight: 700,
                        color: plan.popular ? '#00abc2' : 'white',
                        display: 'inline',
                      }}
                    >
                      {plan.price}
                    </Typography>
                    {plan.price !== 'Gratis' && (
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          ml: 1,
                          display: 'inline',
                        }}
                      >
                        {plan.period}
                      </Typography>
                    )}
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      mb: 4,
                      minHeight: '48px',
                    }}
                  >
                    {plan.description}
                  </Typography>

                  <Button
                    variant={plan.buttonVariant}
                    fullWidth
                    size="large"
                    component={Link}
                    href={ROUTES.HOME} // Cambiar cuando exista ruta de registro
                    sx={{
                      py: 1.5,
                      mb: 4,
                      ...(plan.buttonVariant === 'contained' && {
                        background: 'linear-gradient(45deg, #027483, #00abc2)',
                        boxShadow: '0 8px 24px rgba(2, 116, 131, 0.3)',
                      }),
                      ...(plan.buttonVariant === 'outlined' && {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        color: 'rgba(255, 255, 255, 0.9)',
                        '&:hover': {
                          borderColor: '#027483',
                          backgroundColor: 'rgba(2, 116, 131, 0.1)',
                        },
                      }),
                    }}
                  >
                    {plan.buttonText}
                  </Button>

                  <List sx={{ textAlign: 'left' }}>
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem key={featureIndex} sx={{ py: 0.5, px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <Check
                            sx={{
                              color: plan.popular ? '#00abc2' : '#4CAF50',
                              fontSize: 20,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{
                            color: 'rgba(255, 255, 255, 0.9)',
                            fontSize: '0.9rem',
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" mt={6}>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
              mb: 2,
            }}
          >
            ¿Necesitas algo más específico?
          </Typography>
          <Button
            component={Link}
            href={ROUTES.CONTACT}
            variant="text"
            sx={{
              color: '#00abc2',
              '&:hover': {
                backgroundColor: 'rgba(0, 171, 194, 0.1)',
              },
            }}
          >
            Contacta con nuestro equipo de ventas
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
