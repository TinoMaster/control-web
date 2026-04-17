import {
  FadeIn,
  FadeUp,
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedElements";
import { PRICING_PLANS } from "@/data/pricing";
import { ROUTES } from "@/lib/constants/routes";
import { BRAND } from "@/styles/theme";
import { ArrowForward, CheckCircle, Close } from "@mui/icons-material";
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
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Planes y precios de Control. Desde gratis hasta Enterprise. Sin compromisos, sin tarjeta de crédito. Elige el plan ideal para tu negocio.",
  openGraph: {
    title: "Precios de Control — Planes para cada negocio",
    description: "Desde gratis hasta Enterprise. Escala cuando lo necesites.",
    url: "/pricing",
  },
};

const faqItems = [
  {
    q: "¿Puedo cambiar de plan en cualquier momento?",
    a: "Sí, puedes subir o bajar de plan en cualquier momento. Los cambios se aplican al instante y la facturación se ajusta proporcionalmente.",
  },
  {
    q: "¿Qué pasa si supero el límite del plan Básico?",
    a: "Recibirás una notificación cuando te acerques al límite. Podrás seguir operando y tendrás la opción de actualizar a un plan superior sin perder datos.",
  },
  {
    q: "¿El plan Básico es realmente gratis para siempre?",
    a: "Sí, el plan Básico no tiene fecha de expiración. Puedes usarlo indefinidamente con las funcionalidades incluidas.",
  },
  {
    q: "¿Hay descuentos por pago anual?",
    a: "Sí, al pagar anualmente obtienes un 20% de descuento en los planes Professional y Enterprise. Contáctanos para más detalles.",
  },
  {
    q: "¿Mis datos están seguros si cancelo?",
    a: "Absolutamente. Tienes 30 días para exportar todos tus datos antes de que la cuenta sea eliminada. Nunca perdemos tu información sin aviso.",
  },
];

const comparisonFeatures = [
  {
    name: "Productos en inventario",
    basic: "100",
    professional: "Ilimitados",
    enterprise: "Ilimitados",
  },
  { name: "Usuarios del equipo", basic: "1", professional: "Hasta 5", enterprise: "Ilimitados" },
  { name: "Gestión de ventas POS", basic: true, professional: true, enterprise: true },
  { name: "Control de inventario", basic: true, professional: true, enterprise: true },
  { name: "Reportes avanzados", basic: false, professional: true, enterprise: true },
  { name: "Gestión de clientes", basic: false, professional: true, enterprise: true },
  { name: "Gestión de empleados", basic: false, professional: true, enterprise: true },
  { name: "API personalizada", basic: false, professional: false, enterprise: true },
  { name: "Soporte dedicado", basic: false, professional: false, enterprise: true },
  { name: "SLA garantizado", basic: false, professional: false, enterprise: true },
  { name: "Capacitación personalizada", basic: false, professional: false, enterprise: true },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <CheckCircle sx={{ fontSize: 18, color: BRAND.cyan }} />
    ) : (
      <Close sx={{ fontSize: 18, color: BRAND.textMuted }} />
    );
  }
  return (
    <Typography variant="body2" sx={{ color: BRAND.textSecondary, fontWeight: 500 }}>
      {value}
    </Typography>
  );
}

export default function PricingPage() {
  return (
    <PageTransition sx={{ background: BRAND.bg0, minHeight: "100vh" }}>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          borderBottom: `1px solid ${BRAND.glassBorder}`,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
            height: "100%",
            background: `radial-gradient(ellipse, ${BRAND.cyanGlow} 0%, transparent 70%)`,
            opacity: 0.3,
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <FadeUp>
            <Typography
              variant="overline"
              sx={{ color: BRAND.cyan, display: "block", mb: 2, letterSpacing: "0.14em" }}
            >
              Precios
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
              Planes simples y <span className="gradient-text-cyan">transparentes</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: BRAND.textSecondary,
                lineHeight: 1.75,
                maxWidth: 520,
                mx: "auto",
                fontSize: "1.125rem",
              }}
            >
              Comienza gratis y crece con nosotros. Sin compromisos, sin cargos ocultos.
            </Typography>
          </FadeUp>
        </Container>
      </Box>

      {/* Pricing Cards */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <StaggerContainer speed="normal">
            <Grid container spacing={3} alignItems="stretch" justifyContent="center">
              {PRICING_PLANS.map((plan, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={index}>
                  <StaggerItem>
                    <Box
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
                        boxShadow: plan.popular ? `0 0 60px ${BRAND.cyanGlow}` : "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: plan.popular
                            ? `0 0 80px ${BRAND.cyanGlow}, 0 32px 64px rgba(0,0,0,0.4)`
                            : `0 20px 50px rgba(0,0,0,0.3)`,
                        },
                      }}
                    >
                      {plan.popular && (
                        <Chip
                          label="✦ Más Popular"
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
                            "& .MuiChip-label": { px: 2 },
                          }}
                        />
                      )}

                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="overline"
                          sx={{
                            color: plan.popular ? BRAND.cyan : BRAND.textMuted,
                            letterSpacing: "0.1em",
                            display: "block",
                            mb: 1.5,
                          }}
                        >
                          {plan.name}
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.75, mb: 1 }}>
                          <Typography
                            sx={{
                              fontFamily: "var(--font-space-grotesk)",
                              fontSize: plan.price === "Gratis" ? "2.25rem" : "3rem",
                              fontWeight: 700,
                              color: plan.popular ? BRAND.cyan : BRAND.textPrimary,
                              letterSpacing: "-0.04em",
                              lineHeight: 1,
                            }}
                          >
                            {plan.price}
                          </Typography>
                          {plan.price !== "Gratis" && (
                            <Typography variant="body2" sx={{ color: BRAND.textMuted }}>
                              {plan.period}
                            </Typography>
                          )}
                        </Box>

                        <Typography
                          variant="body2"
                          sx={{ color: BRAND.textMuted, lineHeight: 1.6 }}
                        >
                          {plan.description}
                        </Typography>
                      </Box>

                      <Button
                        variant={plan.popular ? "contained" : "outlined"}
                        fullWidth
                        size="large"
                        component={Link}
                        href={ROUTES.CONTACT}
                        sx={{ py: 1.5, mb: 3.5, fontSize: "0.9375rem" }}
                      >
                        {plan.buttonText}
                      </Button>

                      <List sx={{ p: 0, flexGrow: 1 }}>
                        {plan.features.map((feature, fi) => (
                          <ListItem key={fi} sx={{ py: 0.75, px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 28 }}>
                              <CheckCircle
                                sx={{ fontSize: 16, color: plan.popular ? BRAND.cyan : "#34d399" }}
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={feature}
                              primaryTypographyProps={{
                                sx: {
                                  color: BRAND.textSecondary,
                                  fontSize: "0.875rem",
                                  lineHeight: 1.5,
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerContainer>
        </Container>
      </Box>

      {/* Comparison Table */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: BRAND.bg1,
          borderTop: `1px solid ${BRAND.glassBorder}`,
        }}
      >
        <Container maxWidth="lg">
          <FadeUp sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{
                color: BRAND.textPrimary,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                mb: 2,
              }}
            >
              Comparar planes
            </Typography>
          </FadeUp>

          <FadeIn delay={0.15}>
            <Box
              sx={{
                background: BRAND.bg2,
                border: `1px solid ${BRAND.glassBorder}`,
                borderRadius: "20px",
                overflow: "hidden",
                overflowX: "auto",
              }}
            >
              {/* Table Header */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 1fr",
                  minWidth: 500,
                  px: { xs: 2, md: 4 },
                  py: 2.5,
                  borderBottom: `1px solid ${BRAND.glassBorder}`,
                  background: BRAND.bg3,
                }}
              >
                <Typography variant="body2" sx={{ color: BRAND.textMuted, fontWeight: 600 }}>
                  Característica
                </Typography>
                {["Básico", "Professional", "Enterprise"].map((name, i) => (
                  <Typography
                    key={name}
                    variant="body2"
                    sx={{
                      color: i === 1 ? BRAND.cyan : BRAND.textSecondary,
                      fontWeight: 600,
                      textAlign: "center",
                      fontFamily: "var(--font-space-grotesk)",
                    }}
                  >
                    {name}
                  </Typography>
                ))}
              </Box>

              {comparisonFeatures.map((row, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr 1fr",
                    minWidth: 500,
                    px: { xs: 2, md: 4 },
                    py: 2,
                    borderBottom:
                      i < comparisonFeatures.length - 1 ? `1px solid ${BRAND.glassBorder}` : "none",
                    "&:hover": { background: BRAND.bg3 },
                    transition: "background 0.2s ease",
                  }}
                >
                  <Typography variant="body2" sx={{ color: BRAND.textSecondary }}>
                    {row.name}
                  </Typography>
                  {[row.basic, row.professional, row.enterprise].map((val, ci) => (
                    <Box
                      key={ci}
                      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                      <CellValue value={val} />
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          </FadeIn>
        </Container>
      </Box>

      {/* FAQ */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <FadeUp sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              sx={{ color: BRAND.textPrimary, fontWeight: 700, letterSpacing: "-0.02em", mb: 2 }}
            >
              Preguntas frecuentes
            </Typography>
          </FadeUp>

          <StaggerContainer speed="normal">
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {faqItems.map((item, i) => (
                <StaggerItem key={i}>
                  <Box
                    sx={{
                      background: BRAND.bg2,
                      border: `1px solid ${BRAND.glassBorder}`,
                      borderRadius: "14px",
                      p: 3,
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: BRAND.textPrimary, fontWeight: 600, mb: 1.5 }}
                    >
                      {item.q}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: BRAND.textSecondary, lineHeight: 1.75 }}
                    >
                      {item.a}
                    </Typography>
                  </Box>
                </StaggerItem>
              ))}
            </Box>
          </StaggerContainer>
        </Container>
      </Box>

      {/* CTA */}
      <FadeUp
        sx={{
          py: { xs: 10, md: 14 },
          textAlign: "center",
          background: BRAND.bg1,
          borderTop: `1px solid ${BRAND.glassBorder}`,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            sx={{ color: BRAND.textPrimary, fontWeight: 700, mb: 2, letterSpacing: "-0.03em" }}
          >
            Empieza gratis hoy
          </Typography>
          <Typography variant="body1" sx={{ color: BRAND.textSecondary, mb: 4, lineHeight: 1.7 }}>
            Sin tarjeta de crédito. Sin compromisos. Configura tu negocio en menos de 5 minutos.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href={ROUTES.CONTACT}
            endIcon={<ArrowForward />}
            sx={{ py: 1.75, px: 5 }}
          >
            Crear Cuenta Gratis
          </Button>
        </Container>
      </FadeUp>
    </PageTransition>
  );
}
