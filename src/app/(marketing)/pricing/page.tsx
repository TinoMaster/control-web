import {
  FadeIn,
  FadeUp,
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedElements";
import { PRICING_PLANS } from "@/data/pricing";
import { EXTERNAL_URLS } from "@/lib/constants/external";
import { BRAND } from "@/styles/theme";
import {
  AccessTime,
  ArrowForward,
  CheckCircle,
  Close,
  RocketLaunch,
  Schedule,
} from "@mui/icons-material";
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

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Regístrate gratis y accede a todas las funciones de Control durante 6 meses. Sin compromisos.",
  openGraph: {
    title: "Precios de Control — 6 meses gratis con acceso total",
    description:
      "Regístrate antes del 1 de enero de 2027 y obtén acceso completo a todas las funciones durante 6 meses.",
    url: "/pricing",
  },
};

const faqItems = [
  {
    q: "¿Qué obtengo al registrarme?",
    a: "Acceso completo a todas las funciones de Control durante 6 meses: gestión de ventas, inventario, empleados, reportes, punto de venta (POS) y más. Sin restricciones.",
  },
  {
    q: "¿Qué pasa cuando se me acaben los 6 meses?",
    a: "Podrás elegir entre el plan Gratis (con funciones básicas limitadas) o uno de los planes de pago que estarán disponibles para entonces. Tus datos se mantienen seguros sin importar qué plan elijas.",
  },
  {
    q: "¿Puedo registrarme después del 1 de enero de 2027?",
    a: "La ventana de registro con 6 meses gratis se cierra el 1 de enero de 2027. Después de esa fecha, los nuevos usuarios tendrán acceso al plan Gratis limitado o podrán contratar un plan de pago.",
  },
  {
    q: "¿Cómo se paga en Cuba?",
    a: "Los planes de pago estarán disponibles a través de Transfermóvil, EnZona y otros métodos de pago locales. Te avisaremos con anticipación cuando estén listos.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Todos tus datos están protegidos con encriptación de nivel empresarial. Si decides no continuar, tendrás 30 días para exportar toda tu información.",
  },
  {
    q: "¿El plan Gratis es realmente gratis para siempre?",
    a: "Sí. El plan Gratis no tiene fecha de expiración. Puedes usarlo indefinidamente con las funcionalidades incluidas (hasta 100 productos, 1 usuario, funciones básicas).",
  },
];

const comparisonFeatures = [
  {
    name: "Productos en inventario",
    launch: "Ilimitados",
    basic: "100",
    professional: "Ilimitados",
    enterprise: "Ilimitados",
  },
  {
    name: "Usuarios del equipo",
    launch: "Ilimitados",
    basic: "1",
    professional: "Hasta 5",
    enterprise: "Ilimitados",
  },
  { name: "Gestión de ventas POS", launch: true, basic: true, professional: true, enterprise: true },
  { name: "Control de inventario", launch: true, basic: true, professional: true, enterprise: true },
  { name: "Reportes avanzados", launch: true, basic: false, professional: true, enterprise: true },
  { name: "Gestión de clientes", launch: true, basic: false, professional: true, enterprise: true },
  { name: "Gestión de empleados", launch: true, basic: false, professional: true, enterprise: true },
  { name: "API personalizada", launch: true, basic: false, professional: false, enterprise: true },
  { name: "Soporte dedicado", launch: true, basic: false, professional: false, enterprise: true },
  { name: "SLA garantizado", launch: false, basic: false, professional: false, enterprise: true },
  { name: "Capacitación personalizada", launch: false, basic: false, professional: false, enterprise: true },
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
              Pruébalo <span className="gradient-text-cyan">gratis</span> durante 6 meses
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: BRAND.textSecondary,
                lineHeight: 1.75,
                maxWidth: 560,
                mx: "auto",
                fontSize: "1.125rem",
                mb: 4,
              }}
            >
              Regístrate antes del 1 de enero de 2027 y accede a todas las funciones
              sin restricciones. Sin tarjeta de crédito, sin compromisos.
            </Typography>

            {/* Deadline badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2.5,
                py: 1,
                borderRadius: "12px",
                background: `${BRAND.cyan}12`,
                border: `1px solid ${BRAND.cyan}30`,
                mb: 2,
              }}
            >
              <Schedule sx={{ fontSize: 18, color: BRAND.cyan }} />
              <Typography
                variant="body2"
                sx={{ color: BRAND.cyan, fontWeight: 600, fontSize: "0.9375rem" }}
              >
                Oferta válida hasta el 1 de enero de 2027
              </Typography>
            </Box>
          </FadeUp>
        </Container>
      </Box>

      {/* How it works */}
      <Box sx={{ py: { xs: 8, md: 10 }, background: BRAND.bg1 }}>
        <Container maxWidth="md">
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
              ¿Cómo funciona?
            </Typography>
          </FadeUp>

          <StaggerContainer speed="normal">
            <Grid container spacing={4}>
              {[
                {
                  step: "1",
                  title: "Regístrate gratis",
                  desc: "Crea tu cuenta en menos de 2 minutos. Sin tarjeta de crédito.",
                  icon: RocketLaunch,
                },
                {
                  step: "2",
                  title: "Usa todas las funciones",
                  desc: "Accede a ventas, inventario, empleados, reportes y POS durante 6 meses.",
                  icon: CheckCircle,
                },
                {
                  step: "3",
                  title: "Elige tu plan",
                  desc: "Al vencer los 6 meses, elige el plan Gratis o un plan de pago según tu negocio.",
                  icon: AccessTime,
                },
              ].map((item, i) => (
                <Grid size={{ xs: 12, md: 4 }} key={i}>
                  <StaggerItem>
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 3,
                        background: BRAND.bg2,
                        border: `1px solid ${BRAND.glassBorder}`,
                        borderRadius: "16px",
                        height: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: "14px",
                          background: `${BRAND.cyan}15`,
                          border: `1px solid ${BRAND.cyan}30`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 2,
                        }}
                      >
                        <item.icon sx={{ fontSize: 22, color: BRAND.cyan }} />
                      </Box>
                      <Typography
                        variant="overline"
                        sx={{ color: BRAND.cyan, display: "block", mb: 1, letterSpacing: "0.1em" }}
                      >
                        Paso {item.step}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{ color: BRAND.textPrimary, fontWeight: 600, mb: 1 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: BRAND.textSecondary, lineHeight: 1.6 }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerContainer>
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
                          transform: plan.comingSoon ? "none" : "translateY(-4px)",
                          boxShadow: plan.popular
                            ? `0 0 80px ${BRAND.cyanGlow}, 0 32px 64px rgba(0,0,0,0.4)`
                            : plan.comingSoon
                              ? "none"
                              : `0 20px 50px rgba(0,0,0,0.3)`,
                        },
                        ...(plan.comingSoon && { opacity: 0.7 }),
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

                        <Typography
                          variant="body2"
                          sx={{ color: BRAND.textMuted, lineHeight: 1.6 }}
                        >
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

                      <List sx={{ p: 0, flexGrow: 1 }}>
                        {plan.features.map((feature, fi) => (
                          <ListItem key={fi} sx={{ py: 0.75, px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 28 }}>
                              <CheckCircle
                                sx={{
                                  fontSize: 16,
                                  color: plan.popular
                                    ? BRAND.cyan
                                    : plan.comingSoon
                                      ? BRAND.textMuted
                                      : "#34d399",
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
            <Typography variant="body1" sx={{ color: BRAND.textSecondary, maxWidth: 480, mx: "auto" }}>
              El plan de lanzamiento incluye todo lo que ofrecen los planes de pago.
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
                  gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                  minWidth: 600,
                  px: { xs: 2, md: 4 },
                  py: 2.5,
                  borderBottom: `1px solid ${BRAND.glassBorder}`,
                  background: BRAND.bg3,
                }}
              >
                <Typography variant="body2" sx={{ color: BRAND.textMuted, fontWeight: 600 }}>
                  Característica
                </Typography>
                {["Lanzamiento", "Gratis", "Professional", "Enterprise"].map((name, i) => (
                  <Typography
                    key={name}
                    variant="body2"
                    sx={{
                      color: i === 0 ? BRAND.cyan : BRAND.textSecondary,
                      fontWeight: i === 0 ? 700 : 600,
                      textAlign: "center",
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "0.8125rem",
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
                    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                    minWidth: 600,
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
                  {[row.launch, row.basic, row.professional, row.enterprise].map((val, ci) => (
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
            component="a"
            href={EXTERNAL_URLS.REGISTER}
            target="_blank"
            rel="noopener noreferrer"
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
