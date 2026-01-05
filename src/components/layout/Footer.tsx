'use client'

import Link from 'next/link'
import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  Divider,
} from '@mui/material'
import {
  Email,
  Phone,
  LocationOn,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from '@mui/icons-material'
import { APP_INFO } from '@/data/navigation'
import { ROUTES } from '@/lib/constants/routes'

const footerLinks = {
  product: [
    { name: 'Características', href: ROUTES.FEATURES },
    { name: 'Precios', href: ROUTES.PRICING },
    { name: 'Centro de Ayuda', href: ROUTES.HELP_CENTER },
  ],
  support: [
    { name: 'Centro de Ayuda', href: ROUTES.HELP_CENTER },
    { name: 'Documentación', href: ROUTES.HELP_CENTER },
    { name: 'Contacto', href: ROUTES.CONTACT },
    { name: 'FAQ', href: `${ROUTES.HELP_CENTER}/faq` },
  ],
  company: [
    { name: 'Acerca de', href: ROUTES.ABOUT },
    { name: 'Blog', href: '#blog' },
    { name: 'Prensa', href: '#press' },
  ],
  legal: [
    { name: 'Política de Privacidad', href: ROUTES.PRIVACY_POLICY },
    { name: 'Eliminación de Datos', href: ROUTES.DATA_DELETION },
    { name: 'Términos de Servicio', href: '#terms' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#facebook', label: 'Facebook' },
  { icon: Twitter, href: '#twitter', label: 'Twitter' },
  { icon: Instagram, href: '#instagram', label: 'Instagram' },
  { icon: LinkedIn, href: '#linkedin', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)',
        color: 'white',
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box mb={3}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: 'primary.light',
                  mb: 2,
                }}
              >
                {APP_INFO.NAME}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                {APP_INFO.DESCRIPTION}. La solución completa para la gestión de
                tu negocio. Controla ventas, inventario, empleados y mucho más
                desde una sola aplicación.
              </Typography>

              {/* Contact Info */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email sx={{ fontSize: 18, color: 'primary.light' }} />
                  <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
                    {APP_INFO.EMAIL}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone sx={{ fontSize: 18, color: 'primary.light' }} />
                  <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
                    {APP_INFO.PHONE}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LocationOn sx={{ fontSize: 18, color: 'primary.light' }} />
                  <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
                    {APP_INFO.ADDRESS}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Links Sections */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={3}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'white',
                  }}
                >
                  Producto
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {footerLinks.product.map((link, index) => (
                    <MuiLink
                      key={index}
                      component={Link}
                      href={link.href}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: 'primary.light',
                        },
                      }}
                    >
                      {link.name}
                    </MuiLink>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'white',
                  }}
                >
                  Soporte
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {footerLinks.support.map((link, index) => (
                    <MuiLink
                      key={index}
                      component={Link}
                      href={link.href}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: 'primary.light',
                        },
                      }}
                    >
                      {link.name}
                    </MuiLink>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'white',
                  }}
                >
                  Empresa
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {footerLinks.company.map((link, index) => (
                    <MuiLink
                      key={index}
                      component={Link}
                      href={link.href}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: 'primary.light',
                        },
                      }}
                    >
                      {link.name}
                    </MuiLink>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: 'white',
                  }}
                >
                  Legal
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {footerLinks.legal.map((link, index) => (
                    <MuiLink
                      key={index}
                      component={link.href.startsWith('#') ? 'a' : Link}
                      href={link.href}
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        transition: 'color 0.2s ease',
                        '&:hover': {
                          color: 'primary.light',
                        },
                      }}
                    >
                      {link.name}
                    </MuiLink>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            © {new Date().getFullYear()} {APP_INFO.COMPANY}. Todos los derechos
            reservados.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {socialLinks.map((social, index) => (
              <MuiLink
                key={index}
                href={social.href}
                aria-label={social.label}
                sx={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: 'primary.light',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <social.icon sx={{ fontSize: 24 }} />
              </MuiLink>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
