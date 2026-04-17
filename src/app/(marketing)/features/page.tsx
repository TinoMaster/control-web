import {
  FadeLeft,
  FadeUp,
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedElements";
import { ROUTES } from "@/lib/constants/routes";
import { BRAND } from "@/styles/theme";
import {
  AccountBalance,
  Analytics,
  ArrowForward,
  Assessment,
  CheckCircle,
  CloudSync,
  Groups,
  Inventory2,
  MobileFriendly,
  Notifications,
  People,
  PointOfSale,
  ReceiptLong,
  Schedule,
  Security,
  TrendingUp,
} from "@mui/icons-material";
import {
  Box,
  Button,
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
  title: "Características",
  description:
    "Descubre todas las funcionalidades de Control: gestión de ventas, inventario, clientes, empleados, reportes y más. La app de negocios más completa.",
  openGraph: {
    title: "Características de Control — Gestión empresarial completa",
    description: "Todo lo que tu negocio necesita en una sola aplicación móvil.",
    url: "/features",
  },
};

const mainFeatures = [
  {
    icon: PointOfSale,
    color: BRAND.cyan,
    title: "Punto de Venta (POS)",
    description:
      "Sistema de ventas completo con gestión de productos, cobro rápido y generación automática de reportes de turno. Soporta múltiples métodos de pago.",
    benefits: [
      "POS táctil optimizado para móvil",
      "Múltiples métodos de pago",
      "Descuentos y promociones",
      "Recibos digitales por correo",
      "Reportes de turno automáticos",
    ],
  },
  {
    icon: Inventory2,
    color: BRAND.amber,
    title: "Control de Inventario",
    description:
      "Mantén siempre actualizado tu stock con alertas inteligentes. Gestiona proveedores, costos y márgenes, con soporte para múltiples almacenes.",
    benefits: [
      "Alertas de stock mínimo",
      "Gestión de múltiples almacenes",
      "Control de costos y márgenes",
      "Escaneo de códigos de barras",
      "Movimientos auditables",
    ],
  },
  {
    icon: Groups,
    color: "#a78bfa",
    title: "Gestión de Empleados",
    description:
      "Controla turnos, salarios, pagos y desempeño de tu equipo. Asigna roles con niveles de acceso diferenciados para mayor seguridad.",
    benefits: [
      "Control de salarios y pagos",
      "Roles y permisos granulares",
      "Registro de entradas y salidas",
      "Comisiones automáticas",
      "Reportes de productividad",
    ],
  },
  {
    icon: AccountBalance,
    color: "#34d399",
    title: "Finanzas y Caja",
    description:
      "Registra ingresos, gastos y extracciones para mantener tus finanzas al día. Cierres de caja automáticos con balance detallado.",
    benefits: [
      "Registro de ingresos y gastos",
      "Cierres de caja automáticos",
      "Balance diario y mensual",
      "Deudas y crédito de clientes",
      "Exportación a contabilidad",
    ],
  },
  {
    icon: Assessment,
    color: BRAND.cyan,
    title: "Reportes y Analytics",
    description:
      "Datos en tiempo real para tomar mejores decisiones. Dashboards visuales con las métricas que más importan para tu tipo de negocio.",
    benefits: [
      "Dashboard ejecutivo en tiempo real",
      "Reportes de ventas diarios",
      "Análisis de tendencias",
      "Productos más rentables",
      "Exportación a Excel y PDF",
    ],
  },
  {
    icon: Security,
    color: BRAND.amber,
    title: "Seguridad y Roles",
    description:
      "Control de acceso por 4 niveles de rol (SuperAdmin, Owner, Admin, User). Datos cifrados y auditoría completa de todas las acciones.",
    benefits: [
      "4 niveles de acceso diferenciados",
      "Autenticación segura JWT",
      "Registro de auditoría completo",
      "Backups automáticos",
      "Sesión controlada por dispositivo",
    ],
  },
];

const additionalFeatures = [
  { icon: CloudSync, title: "Sincronización en la nube" },
  { icon: ReceiptLong, title: "Deudas y crédito" },
  { icon: Schedule, title: "Tareas del equipo" },
  { icon: Notifications, title: "Alertas push en tiempo real" },
  { icon: Analytics, title: "Multi-negocio" },
  { icon: MobileFriendly, title: "iOS y Android" },
  { icon: TrendingUp, title: "Comisiones automáticas" },
  { icon: People, title: "Gestión de clientes" },
];

export default function FeaturesPage() {
  return (
    <PageTransition sx={{ background: BRAND.bg0, minHeight: "100vh" }}>
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
            top: "-20%",
            left: "-10%",
            width: "60%",
            height: "100%",
            background: `radial-gradient(ellipse, ${BRAND.cyanGlow} 0%, transparent 70%)`,
            opacity: 0.4,
            pointerEvents: "none",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <FadeLeft>
            <Box sx={{ maxWidth: 680 }}>
              <Typography
                variant="overline"
                sx={{ color: BRAND.cyan, display: "block", mb: 1.5, letterSpacing: "0.14em" }}
              >
                Características
              </Typography>
              <Typography
                variant="h1"
                className="text-balance"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.75rem", md: "3.5rem" },
                  fontWeight: 700,
                  color: BRAND.textPrimary,
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Todo en una sola <span className="gradient-text-cyan">aplicación</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: BRAND.textSecondary,
                  lineHeight: 1.7,
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  maxWidth: 520,
                  mb: 3.5,
                }}
              >
                Control integra más de 12 módulos para operar tu negocio de manera profesional, sin
                necesidad de múltiples aplicaciones.
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={Link}
                href={ROUTES.PRICING}
                endIcon={<ArrowForward />}
                sx={{ py: 1.5, px: 3.5 }}
              >
                Ver Planes y Precios
              </Button>
            </Box>
          </FadeLeft>
        </Container>
      </Box>

      {/* Main Features — Staggered Card Grid */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <StaggerContainer speed="normal">
            <Grid container spacing={3}>
              {mainFeatures.map((feature, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={index}>
                  <StaggerItem hover>
                    <Box
                      sx={{
                        background: BRAND.bg2,
                        border: `1px solid ${BRAND.glassBorder}`,
                        borderRadius: "18px",
                        p: { xs: 3, md: 3.5 },
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        overflow: "hidden",
                        transition: "border-color 0.2s ease",
                        "&:hover": {
                          borderColor: `${feature.color}44`,
                        },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "2px",
                          background: `linear-gradient(90deg, ${feature.color}, transparent)`,
                        },
                      }}
                    >
                      {/* Header */}
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                        <Box
                          sx={{
                            width: 42,
                            height: 42,
                            borderRadius: "11px",
                            background: `${feature.color}18`,
                            border: `1px solid ${feature.color}30`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <feature.icon sx={{ fontSize: 20, color: feature.color }} />
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: BRAND.textPrimary,
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                            lineHeight: 1.3,
                          }}
                        >
                          {feature.title}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          color: BRAND.textSecondary,
                          lineHeight: 1.7,
                          mb: 2.5,
                        }}
                      >
                        {feature.description}
                      </Typography>

                      <List sx={{ p: 0, mt: "auto" }}>
                        {feature.benefits.map((benefit, bi) => (
                          <ListItem key={bi} sx={{ py: 0.4, px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                              <CheckCircle sx={{ fontSize: 14, color: feature.color }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={benefit}
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

      {/* Additional Features */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          background: BRAND.bg1,
          borderTop: `1px solid ${BRAND.glassBorder}`,
          borderBottom: `1px solid ${BRAND.glassBorder}`,
        }}
      >
        <Container maxWidth="lg">
          <FadeUp sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              variant="h3"
              sx={{
                color: BRAND.textPrimary,
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: "1.5rem", md: "1.875rem" },
                letterSpacing: "-0.02em",
              }}
            >
              Y mucho más incluido
            </Typography>
            <Typography variant="body2" sx={{ color: BRAND.textSecondary }}>
              Funcionalidades adicionales para potenciar tu operación
            </Typography>
          </FadeUp>

          <StaggerContainer speed="fast">
            <Grid container spacing={2} justifyContent="center">
              {additionalFeatures.map((feat, i) => (
                <Grid size={{ xs: 6, sm: 3 }} key={i}>
                  <StaggerItem hover>
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 2.5,
                        background: BRAND.bg2,
                        border: `1px solid ${BRAND.glassBorder}`,
                        borderRadius: "14px",
                        transition: "border-color 0.2s ease",
                        "&:hover": {
                          borderColor: `${BRAND.cyan}44`,
                        },
                      }}
                    >
                      <feat.icon sx={{ fontSize: 26, color: BRAND.cyan, mb: 1 }} />
                      <Typography
                        variant="caption"
                        sx={{
                          color: BRAND.textSecondary,
                          display: "block",
                          fontWeight: 500,
                          lineHeight: 1.4,
                          fontSize: "0.8125rem",
                        }}
                      >
                        {feat.title}
                      </Typography>
                    </Box>
                  </StaggerItem>
                </Grid>
              ))}
            </Grid>
          </StaggerContainer>
        </Container>
      </Box>

      {/* CTA */}
      <FadeUp sx={{ py: { xs: 8, md: 10 }, textAlign: "center" }}>
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            sx={{
              color: BRAND.textPrimary,
              fontWeight: 700,
              mb: 2,
              letterSpacing: "-0.03em",
              fontSize: { xs: "1.625rem", md: "1.875rem" },
            }}
          >
            Prueba todo gratis
          </Typography>
          <Typography variant="body1" sx={{ color: BRAND.textSecondary, mb: 4, lineHeight: 1.7 }}>
            30 días de acceso completo a todas las características. Sin tarjeta de crédito
            requerida.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href={ROUTES.PRICING}
              endIcon={<ArrowForward />}
              sx={{ py: 1.5, px: 3.5 }}
            >
              Ver Precios
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href={ROUTES.CONTACT}
              sx={{ py: 1.5, px: 3.5 }}
            >
              Contactar
            </Button>
          </Box>
        </Container>
      </FadeUp>
    </PageTransition>
  );
}
