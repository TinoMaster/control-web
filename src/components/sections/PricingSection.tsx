"use client";

import { PRICING_PLANS } from "@/data/pricing";
import { EXTERNAL_URLS } from "@/lib/constants/external";
import { ROUTES } from "@/lib/constants/routes";
import { BRAND } from "@/styles/theme";
import { AccessTime, Check, CheckCircle, Schedule } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid2 as Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

export function PricingSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: `linear-gradient(180deg, ${BRAND.bg1} 0%, ${BRAND.bg0} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "-10%",
          width: "50%",
          height: "60%",
          background: `radial-gradient(ellipse, ${BRAND.cyanGlow} 0%, transparent 70%)`,
          opacity: 0.2,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
          <Typography
            variant="overline"
            sx={{ color: BRAND.cyan, display: "block", mb: 2, letterSpacing: "0.14em" }}
          >
            Precios
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 700,
              color: BRAND.textPrimary,
              letterSpacing: "-0.03em",
              mb: 2,
            }}
          >
            Pruébalo <span className="gradient-text-cyan">gratis</span> durante 6 meses
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: BRAND.textSecondary, maxWidth: 540, mx: "auto" }}
          >
            Regístrate antes del 1 de enero de 2027 y accede a todas las funciones sin restricciones.
            Sin compromisos.
          </Typography>
        </Box>

        <Grid container spacing={3} alignItems="stretch">
          {PRICING_PLANS.map((plan, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <MotionBox
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  background: BRAND.bg2,
                  border: plan.popular
                    ? `2px solid ${BRAND.cyan}`
                    : `1px solid ${BRAND.glassBorder}`,
                  borderRadius: "20px",
                  p: { xs: 3.5, md: 4 },
                  position: "relative",
                  overflow: "visible",
                  boxShadow: plan.popular
                    ? `0 0 60px ${BRAND.cyanGlow}, 0 24px 48px rgba(0,0,0,0.3)`
                    : "none",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: plan.popular ? BRAND.cyan : `${BRAND.cyan}44`,
                    boxShadow: plan.popular
                      ? `0 0 80px ${BRAND.cyanGlow}, 0 32px 64px rgba(0,0,0,0.4)`
                      : `0 20px 50px rgba(0,0,0,0.3)`,
                    transform: plan.comingSoon ? "none" : "translateY(-4px)",
                  },
                  ...(plan.popular && {
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: -2,
                      borderRadius: "22px",
                      background: `linear-gradient(135deg, ${BRAND.cyan}33, transparent 50%, ${BRAND.cyanDark}22)`,
                      zIndex: -1,
                    },
                  }),
                  ...(plan.comingSoon && {
                    opacity: 0.7,
                  }),
                }}
              >
                {/* Badge */}
                {plan.launchPlan && (
                  <Chip
                    icon={<AccessTime sx={{ fontSize: 14, color: `${BRAND.bg0} !important` }} />}
                    label="Acceso Total de Lanzamiento"
                    sx={{
                      position: "absolute",
                      top: -14,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: BRAND.gradPrimary,
                      color: BRAND.bg0,
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      height: 28,
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                      "& .MuiChip-label": { px: 2 },
                    }}
                  />
                )}
                {plan.comingSoon && (
                  <Chip
                    label="Próximamente"
                    sx={{
                      position: "absolute",
                      top: -14,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: `${BRAND.textMuted}22`,
                      color: BRAND.textMuted,
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      height: 28,
                      border: `1px solid ${BRAND.textMuted}33`,
                      "& .MuiChip-label": { px: 2 },
                    }}
                  />
                )}

                {/* Plan header */}
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      color: plan.popular ? BRAND.cyan : BRAND.textMuted,
                      letterSpacing: "0.1em",
                      display: "block",
                      mb: 1,
                    }}
                  >
                    {plan.name}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.75, mb: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: plan.comingSoon ? "1.75rem" : plan.price === "Gratis" ? "2.25rem" : "3rem",
                        fontWeight: 700,
                        color: plan.popular ? BRAND.cyan : plan.comingSoon ? BRAND.textMuted : BRAND.textPrimary,
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                      }}
                    >
                      {plan.price}
                    </Typography>
                    {plan.period && !plan.comingSoon && (
                      <Typography variant="body2" sx={{ color: BRAND.textMuted }}>
                        {plan.period}
                      </Typography>
                    )}
                  </Box>

                  <Typography variant="body2" sx={{ color: BRAND.textMuted, lineHeight: 1.6 }}>
                    {plan.description}
                  </Typography>

                  {plan.deadline && (
                    <Box
                      sx={{
                        mt: 1.5,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 0.75,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "8px",
                        background: `${BRAND.cyan}10`,
                        border: `1px solid ${BRAND.cyan}25`,
                      }}
                    >
                      <Schedule sx={{ fontSize: 14, color: BRAND.cyan }} />
                      <Typography
                        variant="caption"
                        sx={{ color: BRAND.cyan, fontWeight: 600, fontSize: "0.75rem" }}
                      >
                        Hasta el {plan.deadline}
                      </Typography>
                    </Box>
                  )}
                </Box>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? "contained" : "outlined"}
                  fullWidth
                  size="large"
                  component={plan.comingSoon ? "button" : "a"}
                  href={plan.comingSoon ? undefined : EXTERNAL_URLS.REGISTER}
                  target={plan.comingSoon ? undefined : "_blank"}
                  rel={plan.comingSoon ? undefined : "noopener noreferrer"}
                  disabled={plan.comingSoon}
                  sx={{
                    py: 1.5,
                    mb: 3.5,
                    fontSize: "0.9375rem",
                    ...(plan.comingSoon && {
                      borderColor: `${BRAND.textMuted}33`,
                      color: BRAND.textMuted,
                    }),
                  }}
                >
                  {plan.buttonText}
                </Button>

                {/* Features */}
                <List sx={{ p: 0, flexGrow: 1 }}>
                  {plan.features.map((feature, fi) => (
                    <ListItem key={fi} sx={{ py: 0.75, px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircle
                          sx={{
                            fontSize: 16,
                            color: plan.popular ? BRAND.cyan : plan.comingSoon ? BRAND.textMuted : "#34d399",
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          sx: {
                            color: plan.comingSoon ? BRAND.textMuted : BRAND.textSecondary,
                            fontSize: "0.875rem",
                            lineHeight: 1.5,
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </MotionBox>
            </Grid>
          ))}
        </Grid>

        {/* Bottom note */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="body2" sx={{ color: BRAND.textMuted, mb: 0.5 }}>
            Todos los usuarios registrados durante el lanzamiento obtienen acceso total
          </Typography>
          <Typography variant="body2" sx={{ color: BRAND.textMuted, mb: 1.5 }}>
            y beneficios exclusivos cuando los planes de pago estén disponibles.
          </Typography>
          <Button
            variant="text"
            component={Link}
            href={ROUTES.CONTACT}
            endIcon={<Check sx={{ fontSize: 14 }} />}
            sx={{ color: BRAND.cyan, fontSize: "0.9375rem" }}
          >
            ¿Tienes preguntas? Habla con nosotros
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
