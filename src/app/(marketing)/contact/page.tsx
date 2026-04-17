import {
  FadeLeft,
  FadeRight,
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedElements";
import { BRAND } from "@/styles/theme";
import { CheckCircle, Email, HelpOutline, Schedule, WhatsApp } from "@mui/icons-material";
import { Box, Container, Grid2 as Grid, Typography } from "@mui/material";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para más información sobre Control. Soporte técnico, ventas o consultas generales. Respondemos en menos de 24 horas.",
  openGraph: {
    title: "Contacto — Control",
    description: "Escríbenos y te respondemos en menos de 24 horas.",
    url: "/contact",
  },
};

const contactChannels = [
  {
    icon: Email,
    color: BRAND.cyan,
    title: "Email",
    value: "soporte@control.app",
    description: "Respuesta en menos de 24 horas",
  },
  {
    icon: WhatsApp,
    color: "#34d399",
    title: "WhatsApp",
    value: "+1 234 567 890",
    description: "Lunes a viernes, 9am–6pm",
  },
  {
    icon: HelpOutline,
    color: BRAND.amber,
    title: "Centro de Ayuda",
    value: "help.control.app",
    description: "Documentación y tutoriales",
  },
  {
    icon: Schedule,
    color: "#a78bfa",
    title: "Soporte 24/7",
    value: "Plan Professional",
    description: "Disponible en plan superior",
  },
];

const responseGuarantees = [
  "Respuesta en menos de 24 horas",
  "Soporte en español",
  "Equipo técnico especializado",
  "Seguimiento hasta resolver",
];

export default function ContactPage() {
  return (
    <PageTransition>
      <Box sx={{ background: BRAND.bg0, minHeight: "100vh" }}>
        {/* Hero */}
        <Box
          sx={{
            pt: { xs: 6, md: 10 },
            pb: { xs: 5, md: 8 },
            position: "relative",
            overflow: "hidden",
            borderBottom: `1px solid ${BRAND.glassBorder}`,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "-30%",
              right: "-10%",
              width: "55%",
              height: "100%",
              background: `radial-gradient(ellipse, ${BRAND.cyanGlow} 0%, transparent 70%)`,
              opacity: 0.35,
              pointerEvents: "none",
            }}
          />
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <FadeLeft>
              <Box sx={{ maxWidth: 640 }}>
                <Typography
                  variant="overline"
                  sx={{ color: BRAND.cyan, display: "block", mb: 2, letterSpacing: "0.14em" }}
                >
                  Contacto
                </Typography>
                <Typography
                  variant="h1"
                  className="text-balance"
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                    fontWeight: 700,
                    color: BRAND.textPrimary,
                    letterSpacing: "-0.04em",
                    lineHeight: 1.1,
                    mb: 3,
                  }}
                >
                  Estamos aquí para <span className="gradient-text-cyan">ayudarte</span>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: BRAND.textSecondary,
                    lineHeight: 1.75,
                    fontSize: "1.125rem",
                    mb: 4,
                  }}
                >
                  Nuestro equipo está disponible para responder tus preguntas, ayudarte con la
                  configuración o resolver cualquier problema técnico.
                </Typography>

                {/* Response guarantees */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
                  {responseGuarantees.map((g, i) => (
                    <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 0.75 }}>
                      <CheckCircle sx={{ fontSize: 14, color: "#34d399" }} />
                      <Typography
                        variant="body2"
                        sx={{ color: BRAND.textMuted, fontSize: "0.8125rem" }}
                      >
                        {g}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </FadeLeft>
          </Container>
        </Box>

        {/* Main Content */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {/* Left — Contact Channels */}
              <Grid size={{ xs: 12, md: 5 }}>
                <FadeLeft>
                  <Typography
                    variant="h4"
                    sx={{
                      color: BRAND.textPrimary,
                      fontWeight: 700,
                      mb: 1.5,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Canales de contacto
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: BRAND.textSecondary, mb: 4, lineHeight: 1.7 }}
                  >
                    Elige el canal que prefieras. Todos los mensajes son atendidos por nuestro
                    equipo de soporte especializado.
                  </Typography>
                </FadeLeft>

                <StaggerContainer>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    {contactChannels.map((channel, i) => (
                      <StaggerItem key={i}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 2,
                            p: 2.5,
                            background: BRAND.bg2,
                            border: `1px solid ${BRAND.glassBorder}`,
                            borderRadius: "14px",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              borderColor: `${channel.color}44`,
                              background: BRAND.bg3,
                            },
                          }}
                        >
                          <Box
                            sx={{
                              width: 42,
                              height: 42,
                              borderRadius: "11px",
                              background: `${channel.color}18`,
                              border: `1px solid ${channel.color}30`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <channel.icon sx={{ fontSize: 20, color: channel.color }} />
                          </Box>
                          <Box>
                            <Typography
                              variant="caption"
                              sx={{
                                color: BRAND.textMuted,
                                display: "block",
                                mb: 0.25,
                                letterSpacing: "0.06em",
                              }}
                            >
                              {channel.title.toUpperCase()}
                            </Typography>
                            <Typography
                              sx={{
                                color: BRAND.textPrimary,
                                fontFamily: "var(--font-space-grotesk)",
                                fontWeight: 600,
                                fontSize: "0.9375rem",
                                mb: 0.25,
                              }}
                            >
                              {channel.value}
                            </Typography>
                            <Typography variant="caption" sx={{ color: BRAND.textMuted }}>
                              {channel.description}
                            </Typography>
                          </Box>
                        </Box>
                      </StaggerItem>
                    ))}
                  </Box>
                </StaggerContainer>
              </Grid>

              {/* Right — Form */}
              <Grid size={{ xs: 12, md: 7 }}>
                <FadeRight>
                  <ContactForm />
                </FadeRight>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </PageTransition>
  );
}
