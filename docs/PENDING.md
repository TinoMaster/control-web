# Trabajo Pendiente — Control Web

**Auditado**: 2026-04-05  
**Referencia**: Codebase en `src/` verificado en esa fecha.

---

## 🔴 PRIORIDAD CRÍTICA — Backend (bloquea funcionalidad real)

El frontend tiene los servicios y formularios listos, pero el backend **no tiene estos endpoints implementados**.
Hasta que no existan, los formularios no pueden enviar datos reales.

- [ ] **Backend**: `POST /api/v1/public/data-deletion-request`
  - Entidad `DataDeletionRequest` (persistencia de solicitudes)
  - Envío de email de confirmación al usuario (SMTP)
  - Notificación al admin
- [ ] **Backend**: `GET /api/v1/public/faq`
- [ ] **Backend**: `POST /api/v1/public/contact`
- [ ] **Backend**: `GET /api/v1/public/testimonials`
- [ ] **Backend CORS**: Agregar `https://control-web-khaki.vercel.app` como origen permitido
- [ ] **Backend Email**: Configurar servicio SMTP en `application.properties`

> Ver guía de deploy: `docs/DEPLOYMENT.md`

---

## 🟠 ALTA PRIORIDAD — Páginas principales (scaffolded, sin implementar)

Las carpetas ya existen en `app/(marketing)/` pero no tienen `page.tsx`.

- [ ] **`/features`** — `app/(marketing)/features/page.tsx`
  - Características detalladas del sistema
  - Screenshots/mockups de la app móvil
  - Comparación entre módulos

- [ ] **`/pricing`** — `app/(marketing)/pricing/page.tsx`
  - Tabla de planes y precios
  - FAQ de precios
  - CTA hacia descarga/registro

- [ ] **`/contact`** — `app/(marketing)/contact/page.tsx`
  - Formulario de contacto (usar `contactService` ya implementado)
  - Schema Zod: `lib/schemas/contact.schema.ts`
  - Hook `useContact`: `lib/hooks/useContact.ts` con mutation

- [ ] **`/about`** — `app/(marketing)/about/page.tsx`
  - Historia del producto, misión y visión

### Centro de Ayuda (scaffolded, sin implementar)

- [ ] **`app/help-center/faq/page.tsx`** — FAQ con accordion, integración `useFAQ`
- [ ] **`app/help-center/[slug]/page.tsx`** — Artículos con markdown, TOC, breadcrumbs
- [ ] **`components/help-center/`** — Componentes reutilizables del help center
- [ ] **`content/help-center/`** — Artículos en markdown (Getting Started, Ventas, etc.)

---

## 🟡 PRIORIDAD MEDIA — SEO y Performance

- [ ] **`app/sitemap.ts`** — Sitemap automático con todas las rutas + artículos dinámicos
- [ ] **`app/robots.ts`** — Configurar crawling e indexación
- [ ] **Structured Data (JSON-LD)** — Organization, FAQPage, Product schemas
- [ ] **Optimizar imágenes** — Migrar a `next/image` donde no se use aún
- [ ] **Performance** — Code splitting, lazy loading, Lighthouse >90

### Integración y Arquitectura

- [ ] **Hook `useContact`** — `lib/hooks/useContact.ts` con mutation
- [ ] **Hook `useTestimonials`** — `lib/hooks/useTestimonials.ts`
- [ ] **Error boundary global** — Error boundary React + retry logic
- [ ] **ISR / Cache** — Incremental Static Regeneration para FAQ y testimonios

---

## 🟢 PRIORIDAD BAJA

- [ ] **Animaciones** — Framer Motion (page transitions, scroll animations)
- [ ] **Accesibilidad (a11y)** — ARIA labels, keyboard navigation, WCAG 2.1 AA
- [ ] **Google Analytics 4** — Setup + event tracking
- [ ] **Testing** — Unit tests (vitest/jest), E2E con Playwright
- [ ] **Dark mode** — Toggle tema oscuro con persistencia en localStorage
- [ ] **i18n** — Internacionalización (español base, inglés)
- [ ] **Cookie consent banner** — Cumplimiento GDPR

---

## 🔵 MEJORAS FUTURAS

- [ ] Dashboard web (requiere autenticación JWT en frontend)
- [ ] Sistema de blog con markdown
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Monitoring / Error tracking (Sentry)
- [ ] PWA (Service worker, offline support)

---

## 📊 Estado General (2026-04-05)

| Área | Estado | Notas |
|------|--------|-------|
| Setup / Infraestructura | ✅ Completo | Next.js 15, MUI, Zustand, etc. |
| Landing Page (`/home`) | ✅ Completo | 6 secciones, metadata SEO |
| Privacy Policy | ✅ Completo | 14 secciones |
| Data Deletion (frontend) | ✅ Completo | Formulario + Zod + servicio API |
| Data Deletion (backend) | ❌ Pendiente | Endpoint no existe en Spring Boot |
| Servicios API (frontend) | ✅ Completo | FAQ, Contact, DataDeletion |
| Hooks React Query | ⚠️ Parcial | Solo `useFAQ` implementado |
| Páginas marketing | ⚠️ Scaffolded | Carpetas creadas, sin `page.tsx` |
| Help Center | ⚠️ Scaffolded | Carpetas creadas, sin contenido |
| SEO avanzado | ⚠️ Parcial | Base OK, falta sitemap/robots/JSON-LD |
| Backend endpoints web | ❌ Pendiente | 4 endpoints por implementar |
| Testing | ❌ Pendiente | Sin tests |
