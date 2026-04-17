# Trabajo Pendiente — Control Web

**Auditado**: 2026-04-05  
**Referencia**: Codebase en `src/` verificado en esa fecha.

---

## 🔴 PRIORIDAD CRÍTICA — Backend (bloquea funcionalidad real)

El frontend tiene los servicios y formularios listos, pero el backend **no tiene estos endpoints implementados**.
Hasta que no existan, los formularios no pueden enviar datos reales.

- [x] **Backend**: `POST /api/v1/public/data-deletion-request` ✅ implementado en `PublicWebController`
  - Entidad `DataDeletionRequest` (persistencia de solicitudes) ✅
  - Envío de email de confirmación al usuario (SMTP) ✅ (via EmailService existente)
  - Notificación al admin ✅
- [x] **Backend**: `GET /api/v1/public/faq` ✅ implementado
- [x] **Backend**: `POST /api/v1/public/contact` ✅ implementado
- [x] **Backend**: `GET /api/v1/public/testimonials` ✅ implementado
- [x] **Backend CORS**: Ya configurado con `allowedOriginPatterns(*)` en `CorsConfig.java` ✅
- [ ] **Backend Email**: Configurar SMTP real (actualmente usa MailHog local — cambiar a Gmail/SendGrid para producción)

> Ver guía de deploy: `docs/DEPLOYMENT.md`

---

## 🟠 ALTA PRIORIDAD — Páginas principales (scaffolded, sin implementar)

- [x] **`/features`** — `app/(marketing)/features/page.tsx` ✅
- [x] **`/pricing`** — `app/(marketing)/pricing/page.tsx` ✅
- [x] **`/contact`** — `app/(marketing)/contact/page.tsx` + `ContactForm.tsx` ✅
  - Schema Zod: `lib/schemas/contact.schema.ts` ✅
  - Hook `useContact`: `lib/hooks/useContact.ts` ✅
- [x] **`/about`** — `app/(marketing)/about/page.tsx` ✅

### Centro de Ayuda

- [x] **`app/help-center/faq/page.tsx`** ✅
- [x] **`app/help-center/[slug]/page.tsx`** ✅
- [x] **`components/help-center/`** — FAQAccordion, ArticleCard, HelpCenterBreadcrumbs ✅
- [x] **`data/helpArticles.ts`** — 4 artículos como objetos TypeScript ✅

---

## 🟡 PRIORIDAD MEDIA — SEO y Performance

- [x] **`app/sitemap.ts`** ✅ — rutas estáticas + artículos dinámicos del help center
- [x] **`app/robots.ts`** ✅
- [x] **Structured Data (JSON-LD)** ✅ — Organization + SoftwareApplication en root layout; FAQPage en `/help-center/faq`
- [ ] **Optimizar imágenes** — Migrar a `next/image` donde no se use aún
- [ ] **Performance** — Code splitting, lazy loading, Lighthouse >90

### Integración y Arquitectura

- [x] **Hook `useContact`** ✅
- [x] **Hook `useTestimonials`** ✅ — `lib/hooks/useTestimonials.ts` + `lib/api/services/testimonial.service.ts`
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

## 📊 Estado General (actualizado 2026-04-16)

| Área | Estado | Notas |
|------|--------|-------|
| Setup / Infraestructura | ✅ Completo | Next.js 15, MUI, Zustand, etc. |
| Landing Page (`/home`) | ✅ Completo | 6 secciones, metadata SEO |
| Privacy Policy | ✅ Completo | 14 secciones |
| Data Deletion (frontend) | ✅ Completo | Formulario + Zod + servicio API |
| Data Deletion (backend) | ✅ Completo | `POST /api/v1/public/data-deletion-request` |
| Servicios API (frontend) | ✅ Completo | FAQ, Contact, DataDeletion, Testimonials |
| Hooks React Query | ✅ Completo | useFAQ, useContact, useTestimonials |
| Páginas marketing | ✅ Completo | /features, /pricing, /contact, /about |
| Help Center | ✅ Completo | FAQ, artículos [slug], componentes |
| SEO avanzado | ✅ Completo | sitemap.ts, robots.ts, JSON-LD |
| Backend endpoints web | ✅ Completo | 4 endpoints implementados en Spring Boot |
| Testing | ❌ Pendiente | Sin tests |
