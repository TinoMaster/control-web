import {
  ContentCopy,
  Inventory2,
  Groups,
  Assessment,
  AccountBalance,
  Analytics,
  SvgIconComponent,
} from "@mui/icons-material";

export interface Feature {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export const FEATURES: Feature[] = [
  {
    icon: ContentCopy,
    title: "Gestión de Servicios",
    description:
      "Registra copias, impresiones, diseño y encuadernación con precios por servicio y formato.",
  },
  {
    icon: Inventory2,
    title: "Inventario de Papel y Tóner",
    description:
      "Controla el stock de papel, tóner e insumos con alertas automáticas de stock mínimo.",
  },
  {
    icon: Groups,
    title: "Tu Equipo de Trabajo",
    description:
      "Organiza turnos, controla pagos y asigna roles diferenciados para cada miembro del equipo.",
  },
  {
    icon: Assessment,
    title: "Reportes de tu Negocio",
    description:
      "Visualiza qué servicios se venden más, horas pico y rendimiento por máquina en tiempo real.",
  },
  {
    icon: AccountBalance,
    title: "Caja y Finanzas",
    description:
      "Cierres de caja diarios con balance de ingresos por servicio y control de gastos en insumos.",
  },
  {
    icon: Analytics,
    title: "Multi-negocio",
    description:
      "Gestiona varios locales de copias desde una sola cuenta con datos independientes por sucursal.",
  },
];
