import {
  FadeLeft,
  FadeUp,
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedElements";
import { EXTERNAL_URLS } from "@/lib/constants/external";
import { BRAND } from "@/styles/theme";
import {
  AccountBalance,
  Analytics,
  ArrowForward,
  Assessment,
  CheckCircle,
  CloudSync,
  ContentCopy,
  Groups,
  Inventory2,
  MobileFriendly,
  Notifications,
  People,
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

export const metadata: Metadata = {
  title: "Funciones para centros de copias e impresión",
  description:
    "Gestiona servicios de copias, impresiones, diseño y encuadernación. Control de inventario de papel y tóner, empleados, caja y reportes para tu centro de copias en Cuba.",
  openGraph: {
    title: "Funciones de Control — Diseñado para centros de copias e impresión",
    description:
      "Todo lo que necesitas para gestionar tu centro de copias: servicios, inventario, empleados, finanzas y reportes.",
    url: "/features",
  },
};

const mainFeatures = [
  {
    icon: ContentCopy,
    color: BRAND.cyan,
    title: "Gestión de Servicios",
    description:
      "Registra cada servicio que ofreces — copias, impresiones a color, diseño, escaneo, encuadernación — con precios por unidad, por página o por trabajo completo.",
    benefits: [
      "Precios por tipo de servicio y formato",
      "Registro rápido de trabajos bajo demanda",
      "Historial de servicios por cliente",
      "Precios especiales para pedidos grandes",
      "Soporte para servicios personalizados",
    ],
  },
  {
    icon: Inventory2,
    color: BRAND.amber,
    title: "Inventario de Papel y Tóner",
    description:
      "Controla el stock de papel, tóner, tintas, láminas y materiales. Recibe alertas antes de quedarte sin lo esencial para operar.",
    benefits: [
      "Alertas de stock mínimo automáticas",
      "Control de papel por tipo y tamaño",
      "Seguimiento de tóner e insumos",
      "Registro de movimientos y ajustes",
      "Costos y márgenes por material",
    ],
  },
  {
    icon: Groups,
    color: "#a78bfa",
    title: "Tu Equipo de Trabajo",
    description:
      "Organiza turnos, controla pagos y asigna roles. El dueño ve todo, el operador solo lo que necesita para atender clientes.",
    benefits: [
      "Roles diferenciados: dueño y operador",
      "Control de salarios y pagos",
      "Comisiones por ventas del turno",
      "Registro de actividad por empleado",
      "Gestión de turnos diarios",
    ],
  },
  {
    icon: AccountBalance,
    color: "#34d399",
    title: "Caja y Finanzas",
    description:
      "Cierra la caja cada día con el balance exacto de lo cobrado por copias, impresiones, diseño y demás servicios. Registra gastos de papel, tóner y otros insumos.",
    benefits: [
      "Cierre de caja diario automático",
      "Ingresos desglosados por servicio",
      "Registro de gastos e insumos",
      "Fiado de clientes y control de deudas",
      "Balance diario, semanal y mensual",
    ],
  },
  {
    icon: Assessment,
    color: BRAND.cyan,
    title: "Reportes de tu Negocio",
    description:
      "Visualiza qué servicios se venden más, cuáles son las horas pico y cómo rinde cada máquina. Datos en tiempo real para tomar mejores decisiones.",
    benefits: [
      "Dashboard con métricas del día",
      "Servicios más vendidos y rentables",
      "Análisis de tendencias por período",
      "Comparación entre días y semanas",
      "Exportación de reportes",
    ],
  },
  {
    icon: Security,
    color: BRAND.amber,
    title: "Control de Acceso",
    description:
      "Cada miembro del equipo entra con su propia cuenta y ve solo lo que tú le permitas. Toda la actividad queda registrada para tu tranquilidad.",
    benefits: [
      "4 niveles de acceso configurables",
      "Login seguro por dispositivo",
      "Registro de todas las operaciones",
      "El dueño tiene vista completa",
      "Datos protegidos y respaldados",
    ],
  },
];

const additionalFeatures = [
  { icon: CloudSync, title: "Respaldo en la nube" },
  { icon: ReceiptLong, title: "Fiado y crédito de clientes" },
  { icon: Schedule, title: "Tareas y pendientes del equipo" },
  { icon: Notifications, title: "Alertas de stock y pagos" },
  { icon: Analytics, title: "Varios locales en una cuenta" },
  { icon: MobileFriendly, title: "Funciona en Android y iOS" },
  { icon: TrendingUp, title: "Comisiones automáticas" },
  { icon: People, title: "Directorio de clientes" },
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
                Todo lo que tu centro de{" "}
                <span className="gradient-text-cyan">copias necesita</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: BRAND.textSecondary,
                  lineHeight: 1.7,
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  maxWidth: 540,
                  mb: 3.5,
                }}
              >
                Control está diseñado para los centros de copias e impresión de Cuba.
                Gestiona servicios, inventario de papel y tóner, empleados, caja y reportes
                desde una sola aplicación.
              </Typography>
              <Button
                variant="contained"
                size="large"
                component="a"
                href={EXTERNAL_URLS.REGISTER}
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<ArrowForward />}
                sx={{ py: 1.5, px: 3.5 }}
              >
                Comenzar Gratis
              </Button>
            </Box>
          </FadeLeft>
        </Container>
      </Box>

      {/* Main Features */}
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
              Funcionalidades adicionales para tu centro de copias
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
            Pruébalo gratis durante 6 meses
          </Typography>
          <Typography variant="body1" sx={{ color: BRAND.textSecondary, mb: 4, lineHeight: 1.7 }}>
            Acceso completo a todas las funciones. Sin tarjeta de crédito, sin compromisos.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component="a"
            href={EXTERNAL_URLS.REGISTER}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<ArrowForward />}
            sx={{ py: 1.5, px: 4 }}
          >
            Comenzar Gratis
          </Button>
        </Container>
      </FadeUp>
    </PageTransition>
  );
}
