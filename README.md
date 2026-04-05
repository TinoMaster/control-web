# Control - Web Application (Next.js 15)

Landing page y centro de ayuda para el sistema de gestión empresarial **Control**.

---

## 🚀 Stack Tecnológico

- **Framework**: Next.js 15.5.9 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.9.3
- **UI Framework**: Material-UI 6.5.0
- **State Management**:
  - TanStack Query 5.90.16 (server state)
  - Zustand 5.0.9 (client state)
- **Styling**: Tailwind CSS 3.4.19 + MUI sx prop
- **Forms**: React Hook Form 7.70.0 + Zod 3.25.76
- **HTTP Client**: Axios 1.13.2
- **Package Manager**: pnpm 10.11.0

---

## 📁 Estructura del Proyecto

```
control-web/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── (marketing)/          # Route group (marketing pages)
│   │   │   └── layout.tsx        # Marketing layout con Header/Footer
│   │   ├── home/                 # Home page
│   │   │   └── page.tsx
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Global styles
│   │   └── not-found.tsx         # 404 page
│   ├── components/
│   │   ├── layout/               # Layout components (Header, Footer)
│   │   ├── sections/             # Landing page sections (Hero, Features, etc.)
│   │   ├── ui/                   # Reusable UI components
│   │   └── help-center/          # Help center components
│   ├── lib/
│   │   ├── api/                  # API client y services
│   │   │   ├── client.ts         # Axios instance configurado
│   │   │   └── services/         # API services (FAQ, Contact)
│   │   ├── hooks/                # Custom React hooks
│   │   ├── providers/            # Context providers (Theme, Query)
│   │   ├── constants/            # Constants (routes, API endpoints)
│   │   └── utils/                # Utility functions
│   ├── data/                     # Static data (navigation, features, etc.)
│   ├── styles/                   # Theme configuration
│   ├── types/                    # TypeScript types
│   └── content/                  # Markdown content (help articles)
├── public/                       # Static assets
│   └── images/                   # Images
├── .env.local                    # Environment variables (local)
├── .env.example                  # Environment variables (example)
├── next.config.ts                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── tailwind.config.ts            # Tailwind CSS configuration
└── package.json                  # Dependencies
```

---

## 🛠️ Comandos de Desarrollo

### Instalación

```bash
# Instalar dependencias
pnpm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo (http://localhost:3000)
pnpm dev

# Verificar tipos de TypeScript
pnpm type-check

# Linter
pnpm lint
```

### Producción

```bash
# Construir para producción
pnpm build

# Iniciar servidor de producción
pnpm start
```

---

## 🔧 Configuración

### Variables de Entorno

Copia `.env.example` a `.env.local` y configura:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://192.168.0.25:5000/api/v1
NEXT_PUBLIC_APP_URL=http://localhost:3000

# App Information
NEXT_PUBLIC_APP_NAME=Control
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### Backend API

El proyecto se conecta al backend Spring Boot en:
- **Local**: `http://192.168.0.25:5000/api/v1`
- **Endpoints públicos**: `/api/v1/public/*`

---

## 📝 Rutas Principales

| Ruta | Descripción |
|------|-------------|
| `/home` | Página principal (landing) |
| `/features` | Características del sistema |
| `/pricing` | Planes y precios |
| `/about` | Acerca de Control |
| `/contact` | Contacto |
| `/help-center` | Centro de ayuda/FAQ |

---

## 🎨 Temas y Estilos

### Colores Principales

```css
--primary: #027483
--primary-light: #00abc2
--primary-dark: #015c68
--secondary: #b100d4
--accent: #03dac6
```

### Approach de Estilos

1. **Material-UI `sx` prop** (preferido para componentes MUI)
2. **Tailwind CSS** (utilidades CSS)
3. **CSS Modules** (componentes complejos)

---

## 🚀 Roadmap

### ✅ Fase 1: Setup Inicial (Completado)
- [x] Crear proyecto Next.js 15
- [x] Instalar dependencias (MUI, TanStack Query, etc.)
- [x] Configurar TypeScript, ESLint, Tailwind
- [x] Configurar path aliases
- [x] Setup Material-UI theme
- [x] Configurar providers (Theme, React Query)
- [x] Crear estructura de carpetas
- [x] Migrar componentes de layout (Header, Footer)
- [x] Crear página Home básica

### 🔄 Fase 2: Landing Page (En Progreso)
- [ ] Migrar/crear secciones landing:
  - [ ] HeroSection (mejorado)
  - [ ] FeaturesSection
  - [ ] HowItWorksSection
  - [ ] PricingSection
  - [ ] TestimonialsSection
  - [ ] StatsSection
  - [ ] CTASection
  - [ ] FAQPreviewSection
- [ ] Crear páginas estáticas:
  - [ ] `/features`
  - [ ] `/pricing`
  - [ ] `/about`
  - [ ] `/contact`

### 📋 Fase 3: Centro de Ayuda
- [ ] Diseñar estructura de contenido FAQ
- [ ] Crear componentes de help center
- [ ] Implementar búsqueda de artículos
- [ ] Integrar con backend API (FAQ endpoint)
- [ ] Crear páginas dinámicas:
  - [ ] `/help-center` (home)
  - [ ] `/help-center/faq` (categorías)
  - [ ] `/help-center/[slug]` (artículos)

### 🔍 Fase 4: SEO y Performance
- [ ] Implementar metadata dinámica por página
- [ ] Configurar sitemap.xml automático
- [ ] Agregar structured data (JSON-LD)
- [ ] Optimizar imágenes con next/image
- [ ] Configurar robots.txt
- [ ] Implementar Open Graph y Twitter Cards
- [ ] Auditoría Lighthouse (>90 score)

### 🔌 Fase 5: Integración Backend
- [ ] Implementar endpoints públicos:
  - [ ] GET /public/faq
  - [ ] POST /public/contact
  - [ ] GET /public/testimonials
- [ ] Crear hooks de React Query
- [ ] Implementar error handling global
- [ ] Cache y revalidación con ISR

### 🎯 Fase 6: Features Avanzadas (Futuro)
- [ ] Sistema de blog con markdown
- [ ] Documentación API interactiva
- [ ] Sistema de búsqueda avanzada
- [ ] Analytics (Google Analytics 4)
- [ ] Internacionalización (i18n)
- [ ] PWA features (opcional)

---

## 🏗️ Arquitectura de Datos

### API Response Format

Todas las respuestas del backend siguen este formato:

```typescript
interface IResponse<T> {
  status: number    // HTTP status code
  message: string   // Success/error message
  data: T | null    // Payload
}
```

**Validación crítica**: Siempre validar `status === 200` antes de procesar datos.

### React Query Hooks

Ejemplo de hook típico:

```typescript
export function useFAQ() {
  return useQuery({
    queryKey: ['faq'],
    queryFn: async () => {
      const response = await faqService.getAll()

      if (response.status !== 200 || !response.data) {
        throw new Error(response.message)
      }

      return response.data
    },
    staleTime: 1000 * 60 * 30, // 30 minutos
  })
}
```

---

## 📚 Documentación Relacionada

- **Ecosistema completo**: `../AGENTS.md`
- **Backend API**: `../virtual_dream_spring_boot/AGENTS.md`
- **Mobile App**: `../control_native/AGENTS.md`

---

## 🚢 Deployment

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Otras Opciones

- **Netlify**: `netlify deploy --prod`
- **AWS Amplify**: Configurar desde consola
- **VPS**: Build + PM2 o Docker

---

## 🤝 Contribución

Este es un proyecto interno. Para cambios:

1. Leer `AGENTS.md` del ecosistema
2. Seguir convenciones de código
3. Probar localmente antes de commit
4. Actualizar documentación si es necesario

---

## 📄 Licencia

Propietario - Control © 2026

---

## 🔗 Links Útiles

- [Next.js 15 Docs](https://nextjs.org/docs)
- [Material-UI Docs](https://mui.com/)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Última actualización**: 2026-01-05
**Versión**: 1.0.0
**Estado**: En desarrollo activo
