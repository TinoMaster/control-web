import { APP_INFO } from "@/data/navigation";
import { ROUTES } from "@/lib/constants/routes";
import { BRAND } from "@/styles/theme";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import { Box, Container, Divider, Grid2 as Grid, Link as MuiLink, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const footerSections = [
  {
    title: "Producto",
    links: [
      { name: "Características", href: ROUTES.FEATURES },
      { name: "Precios", href: ROUTES.PRICING },
      { name: "Centro de Ayuda", href: ROUTES.HELP_CENTER },
    ],
  },
  {
    title: "Soporte",
    links: [
      { name: "Centro de Ayuda", href: ROUTES.HELP_CENTER },
      { name: "FAQ", href: ROUTES.HELP_CENTER_FAQ },
      { name: "Contacto", href: ROUTES.CONTACT },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Acerca de", href: ROUTES.ABOUT },
      { name: "Blog", href: "#blog" },
      { name: "Prensa", href: "#press" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Política de Privacidad", href: ROUTES.PRIVACY_POLICY },
      { name: "Eliminación de Datos", href: ROUTES.DATA_DELETION },
      { name: "Términos de Uso", href: "#terms" },
    ],
  },
];

const contactInfo = [
  { icon: Email, text: APP_INFO.EMAIL },
  { icon: Phone, text: APP_INFO.PHONE },
  { icon: LocationOn, text: APP_INFO.ADDRESS },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(180deg, ${BRAND.bg1} 0%, ${BRAND.bg0} 100%)`,
        borderTop: `1px solid ${BRAND.glassBorder}`,
        pt: { xs: 8, md: 12 },
        pb: { xs: 4, md: 6 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-10%",
          width: "50%",
          height: "40%",
          background: `radial-gradient(ellipse, ${BRAND.cyanGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
          opacity: 0.4,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            {/* Logo */}
            <Box
              component={Link}
              href={ROUTES.HOME}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                textDecoration: "none",
                mb: 3,
                width: "fit-content",
              }}
            >
              <Image
                src="/images/logo_control.png"
                alt="Control logo"
                width={36}
                height={36}
                style={{ borderRadius: "9px" }}
              />
              <Typography
                sx={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: 700,
                  fontSize: "1.375rem",
                  color: BRAND.textPrimary,
                  letterSpacing: "-0.02em",
                }}
              >
                {APP_INFO.NAME}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: BRAND.textSecondary,
                lineHeight: 1.8,
                mb: 4,
                maxWidth: 300,
              }}
            >
              {APP_INFO.DESCRIPTION}. La solución completa para gestionar tu negocio desde tu móvil
              — ventas, inventario, empleados y más.
            </Typography>

            {/* Contact Info */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {contactInfo.map(({ icon: Icon, text }, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      borderRadius: "8px",
                      background: BRAND.glass,
                      border: `1px solid ${BRAND.glassBorder}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon sx={{ fontSize: 14, color: BRAND.cyan }} />
                  </Box>
                  <Typography variant="body2" sx={{ color: BRAND.textMuted }}>
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Links Grid */}
          <Grid size={{ xs: 12, md: 8, lg: 8 }}>
            <Grid container spacing={3}>
              {footerSections.map((section) => (
                <Grid size={{ xs: 6, sm: 3 }} key={section.title}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: BRAND.textMuted,
                      display: "block",
                      mb: 2.5,
                      fontSize: "0.6875rem",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                    {section.links.map((link) => (
                      <MuiLink
                        key={link.name}
                        component={link.href.startsWith("#") ? "a" : Link}
                        href={link.href}
                        sx={{
                          color: BRAND.textSecondary,
                          textDecoration: "none",
                          fontSize: "0.875rem",
                          fontFamily: "var(--font-dm-sans)",
                          transition: "color 0.2s ease",
                          display: "inline-block",
                          "&:hover": {
                            color: BRAND.cyan,
                          },
                        }}
                      >
                        {link.name}
                      </MuiLink>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 4, md: 6 }, borderColor: BRAND.glassBorder }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: BRAND.textMuted }}>
            © {currentYear} {APP_INFO.COMPANY}. Todos los derechos reservados.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#34d399",
                boxShadow: "0 0 8px rgba(52, 211, 153, 0.6)",
              }}
            />
            <Typography variant="body2" sx={{ color: BRAND.textMuted, fontSize: "0.8125rem" }}>
              Todos los sistemas operativos
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
