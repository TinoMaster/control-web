# CLAUDE.md - Control Web (Next.js)

Este archivo proporciona guía a Claude Code para trabajar en el proyecto **Control Web** (Next.js 15).

---

## Visión General del Proyecto

**Control Web** es la landing page y centro de ayuda del ecosistema Control. Es una aplicación Next.js 15 con App Router que sirve como:

1. **Landing page** - Presentación del producto, features, pricing
2. **Centro de ayuda** - FAQ y documentación de usuario
3. **Lead generation** - CTAs y formularios de contacto
4. **Presencia SEO** - Optimización para buscadores

**Importante**: Este NO es un dashboard web. Es puramente marketing/informativo.

---

## Stack Tecnológico

- **Framework**: Next.js 15.5.9 (App Router + React Server Components)
- **React**: 19.2.3
- **TypeScript**: 5.9.3
- **UI**: Material-UI 6.5.0
- **State**: TanStack Query 5.90.16 + Zustand 5.0.9
- **Forms**: React Hook Form 7.70.0 + Zod 3.25.76
- **Styling**: Tailwind CSS 3.4.19 + MUI
- **HTTP**: Axios 1.13.2

---

## Comandos Esenciales

```bash
# Development
pnpm dev          # http://localhost:3000
pnpm build        # Build para producción
pnpm start        # Servidor de producción
pnpm lint         # ESLint
pnpm type-check   # TypeScript check
```

---

## Arquitectura

### Path Aliases

```typescript
@/*            → ./src/*
@/components/* → ./src/components/*
@/lib/*        → ./src/lib/*
@/app/*        → ./src/app/*
@/styles/*     → ./src/styles/*
@/types/*      → ./src/types/*
@/data/*       → ./src/data/*
@/hooks/*      → ./src/lib/hooks/*
@/utils/*      → ./src/lib/utils/*
@/api/*        → ./src/lib/api/*
```

### Route Groups

```
app/
├── (marketing)/      # Landing pages con Header/Footer
│   ├── layout.tsx    # Layout con Header + Footer
│   ├── features/
│   ├── pricing/
│   └── about/
├── help-center/      # Centro de ayuda
├── home/             # Home page
└── layout.tsx        # Root layout (providers, metadata)
```

---

## Guías de Desarrollo

### 1. Creando Componentes

**Client Components** (con interactividad):
```typescript
'use client'

import { useState } from 'react'
import { Box, Button } from '@mui/material'

export function InteractiveComponent() {
  const [count, setCount] = useState(0)

  return <Button onClick={() => setCount(count + 1)}>{count}</Button>
}
```

**Server Components** (default, más performantes):
```typescript
// NO poner 'use client'
import { Box, Typography } from '@mui/material'

export function StaticSection() {
  return (
    <Box>
      <Typography variant="h2">Server Component</Typography>
    </Box>
  )
}
```

### 2. Estilos

**Prioridad:**
1. MUI `sx` prop (preferido)
2. Tailwind utilities (complementario)
3. CSS modules (casos complejos)

```typescript
// ✅ Preferido: MUI sx
<Box sx={{
  p: 4,
  bgcolor: 'primary.main',
  borderRadius: 2,
  '&:hover': { bgcolor: 'primary.dark' }
}}>
  <Typography variant="h5">Title</Typography>
</Box>

// ✅ Aceptable: Tailwind (para utilidades básicas)
<div className="flex items-center gap-4 p-4">
  <span className="text-lg font-bold">Text</span>
</div>

// ❌ Evitar: inline styles
<div style={{ padding: '16px' }}>...</div>
```

### 3. Navegación

Usar `next/link` siempre:

```typescript
import Link from 'next/link'
import { ROUTES } from '@/lib/constants/routes'

// ✅ Correcto
<Link href={ROUTES.FEATURES}>Features</Link>

// Con MUI Link
<MuiLink component={Link} href={ROUTES.PRICING}>
  Pricing
</MuiLink>

// ❌ Incorrecto
<a href="/features">Features</a>
```

### 4. Metadata (SEO)

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Título de la Página',
  description: 'Descripción para SEO',
  openGraph: {
    title: 'Título para compartir',
    description: 'Descripción social',
    url: '/ruta',
  },
}
```

### 5. Integración con API

```typescript
// Hook con React Query
import { useQuery } from '@tanstack/react-query'
import { faqService } from '@/lib/api/services/faq.service'

export function useFAQ() {
  return useQuery({
    queryKey: ['faq'],
    queryFn: async () => {
      const response = await faqService.getAll()

      // ⚠️ CRÍTICO: Validar status === 200
      if (response.status !== 200 || !response.data) {
        throw new Error(response.message)
      }

      return response.data
    },
    staleTime: 1000 * 60 * 30, // 30 min
  })
}

// Uso en componente
'use client'

export function FAQSection() {
  const { data, isLoading, error } = useFAQ()

  if (isLoading) return <CircularProgress />
  if (error) return <Typography color="error">Error...</Typography>

  return <Box>{/* Renderizar FAQs */}</Box>
}
```

---

## Reglas Críticas

### API Response Validation

**SIEMPRE validar `status === 200`** antes de procesar datos:

```typescript
// ✅ Correcto
const response = await service.getData()
if (response.status === 200 && response.data) {
  return response.data
} else {
  throw new Error(response.message)
}

// ❌ Incorrecto
const response = await service.getData()
return response.data // ¡Sin validación!
```

### Client vs Server Components

- **Server Component** (default): No hooks de React, async/await permitido, más performante
- **Client Component** (`'use client'`): Hooks, event handlers, interactividad

```typescript
// ✅ Server Component (default)
export default async function Page() {
  const data = await fetchData() // Fetch directo
  return <div>{data}</div>
}

// ✅ Client Component
'use client'
export function Interactive() {
  const [state, setState] = useState(0) // Hooks OK
  return <button onClick={() => setState(state + 1)}>{state}</button>
}
```

### TypeScript

- Interfaces con prefijo `I`: `IResponse`, `IFAQCategory`
- Types con prefijo `T`: `TContactFormData`
- Tipos específicos de Next.js: `Metadata`, `NextPage`
- **No usar `any`**: usar tipos específicos o `unknown`

---

## Backend Integration

### Endpoints Disponibles

```typescript
// Configuración
const API_BASE = 'http://192.168.0.25:5000/api/v1'

// Endpoints públicos (no auth)
GET  /public/faq           // Lista de FAQs
POST /public/contact       // Formulario contacto
GET  /public/testimonials  // Testimonios
```

### Variables de Entorno

```env
NEXT_PUBLIC_API_URL=http://192.168.0.25:5000/api/v1
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Control
NEXT_PUBLIC_APP_VERSION=1.0.0
```

---

## Tareas Comunes

### Agregar Nueva Sección a Home

1. **Crear componente**:
```typescript
// src/components/sections/HowItWorksSection.tsx
'use client'

import { Box, Container, Typography } from '@mui/material'

export function HowItWorksSection() {
  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2">Cómo Funciona</Typography>
        {/* Contenido */}
      </Container>
    </Box>
  )
}
```

2. **Importar en page**:
```typescript
// src/app/home/page.tsx
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection /> {/* Nueva sección */}
      <FeaturesSection />
    </>
  )
}
```

### Agregar Nueva Ruta

1. **Crear directorio y page**:
```bash
mkdir -p src/app/\(marketing\)/nueva-ruta
```

2. **Crear page.tsx**:
```typescript
// src/app/(marketing)/nueva-ruta/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nueva Ruta',
  description: 'Descripción',
}

export default function NuevaRutaPage() {
  return <div>Contenido</div>
}
```

3. **Agregar a navegación** (si aplica):
```typescript
// src/data/navigation.ts
export const NAV_LINKS = [
  // ...
  {
    name: 'Nueva Ruta',
    path: '/nueva-ruta',
    label: 'Nueva Ruta',
  },
]
```

### Crear Nuevo Servicio API

1. **Definir tipos**:
```typescript
// src/types/api.types.ts
export interface NuevoTipo {
  id: string
  nombre: string
}
```

2. **Crear servicio**:
```typescript
// src/lib/api/services/nuevo.service.ts
import { makeRequest } from '../client'
import type { IResponse, NuevoTipo } from '@/types/api.types'

export class NuevoService {
  async getAll(): Promise<IResponse<NuevoTipo[]>> {
    return makeRequest<NuevoTipo[]>({
      method: 'GET',
      url: '/public/nuevo',
    })
  }
}

export const nuevoService = new NuevoService()
```

3. **Crear hook**:
```typescript
// src/lib/hooks/useNuevo.ts
'use client'

import { useQuery } from '@tanstack/react-query'
import { nuevoService } from '@/lib/api/services/nuevo.service'

export function useNuevo() {
  return useQuery({
    queryKey: ['nuevo'],
    queryFn: async () => {
      const response = await nuevoService.getAll()
      if (response.status !== 200 || !response.data) {
        throw new Error(response.message)
      }
      return response.data
    },
  })
}
```

---

## Testing

```bash
# Linter
pnpm lint

# Type checking
pnpm type-check

# Build (verifica errores de compilación)
pnpm build
```

---

## Deploy

### Vercel (Recomendado)

```bash
vercel          # Deploy a preview
vercel --prod   # Deploy a production
```

### Configuración

1. Conectar repo en Vercel dashboard
2. Agregar variables de entorno
3. Deploy automático en cada push

---

## Roadmap Actual

### ✅ Completado
- Setup Next.js 15 con TypeScript
- Configuración de Material-UI y Tailwind
- Providers (Theme, React Query)
- Estructura de carpetas
- Layout components (Header, Footer)
- Página Home básica
- API client y services
- Path aliases y configuraciones

### 🔄 En Progreso
- Migrar secciones landing del proyecto Vite
- Crear páginas estáticas (Features, Pricing, About, Contact)

### 📋 Pendiente
- Centro de ayuda completo
- SEO optimization (sitemap, structured data)
- Integración completa con backend API
- Performance audit (Lighthouse >90)

---

## Proyectos Relacionados

Este proyecto es parte del ecosistema Control:

1. **control_native/** - App móvil (React Native)
2. **virtual_dream_spring_boot/** - Backend API (Spring Boot)
3. **control-web/** - Este proyecto (Next.js)

**Documentación:**
- `../CLAUDE.md` - Ecosistema completo
- `../control-application-react18/ARCHITECTURE_PLAN.md` - Plan de migración original

---

## Notas para AI Agents

1. **Server Components first**: Usa Server Components por defecto, Client Components solo si necesitas interactividad
2. **Validate API responses**: Siempre `status === 200` antes de procesar
3. **SEO matters**: Agregar metadata a todas las páginas
4. **Material-UI primary**: Preferir MUI sobre Tailwind para componentes UI
5. **Type safety**: TypeScript strict, no `any`
6. **Next.js patterns**: Usar `next/link`, `next/image`, metadata API
7. **Performance**: Code splitting automático, lazy load cuando sea necesario

---

**Última actualización**: 2026-01-05
**Estado**: En desarrollo activo
**Próximo paso**: Migrar secciones landing del proyecto Vite
