# AGENTS.md - Control Web (Next.js)

Custom instructions for AI agents working on the Control Web project.

---

## Project Overview

**Control Web** is the marketing website and help center for the Control ecosystem. Built with Next.js 15 (App Router), it serves as:

1. **Landing page** - Product presentation, features, pricing
2. **Help center** - FAQ and user documentation
3. **Lead generation** - CTAs and contact forms
4. **SEO presence** - Search engine optimization

**Important**: This is NOT a web dashboard. It is purely marketing/informational.

---

## Tech Stack (Validated)

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 15.5.9 | Framework (App Router + RSC) |
| React | 19.2.3 | UI library |
| TypeScript | 5.9.3 | Type safety |
| MUI | 6.5.0+ | UI component library |
| TanStack Query | 5.90.16+ | Server state management |
| Zustand | 5.0.9+ | Client state management |
| React Hook Form | 7.70.0+ | Form handling |
| Zod | 3.25.76+ | Schema validation |
| Tailwind CSS | 3.4.19+ | Utility-first CSS |
| Axios | 1.13.2+ | HTTP client |
| Framer Motion | 11.15.0+ | Animations |
| next-seo | 6.8.0 | SEO utilities |

**Package manager**: pnpm (10.11.0+)

---

## Available Skills

| Skill | Location | Purpose |
|-------|----------|---------|
| `nextjs-app-router` | `.opencode/skills/nextjs-app-router/` | Next.js 15 App Router, RSC, SEO, and MUI patterns |
| `frontend-design` | `.opencode/skills/frontend-design/` | Visual design principles for web interfaces |

---

## Commands

```bash
pnpm dev          # Dev server at http://localhost:3000
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # ESLint
pnpm type-check   # TypeScript check
```

---

## Documentation & Context Files

```
control-web/
├── AGENTS.md          # This file — AI agent context
├── README.md          # Project overview and roadmap
└── docs/              # Deployment, operational docs and pending work
    ├── PENDING.md     # Pending work backlog (audited 2026-04-05)
    └── DEPLOYMENT.md  # Full Vercel deployment guide (step-by-step)
```

Before making infrastructure or deployment changes, read `docs/DEPLOYMENT.md`.  
For pending work and backlog, see `docs/PENDING.md`.

---

## Architecture

### Path Aliases

```
@/*            -> ./src/*
@/components/* -> ./src/components/*
@/lib/*        -> ./src/lib/*
@/app/*        -> ./src/app/*
@/styles/*     -> ./src/styles/*
@/types/*      -> ./src/types/*
@/data/*       -> ./src/data/*
@/hooks/*      -> ./src/lib/hooks/*
@/utils/*      -> ./src/lib/utils/*
@/api/*        -> ./src/lib/api/*
```

### Routing

```
app/
├── (marketing)/       # Route group with Header + Footer layout
│   ├── layout.tsx     # Layout with Header + Footer
│   ├── features/      # SCAFFOLDED — no page.tsx yet
│   ├── pricing/       # SCAFFOLDED — no page.tsx yet
│   ├── contact/       # SCAFFOLDED — no page.tsx yet
│   └── about/         # SCAFFOLDED — no page.tsx yet
├── home/              # ✅ Landing page (Hero, Features, Stats, Testimonials, Pricing, CTA)
├── privacy-policy/    # ✅ GDPR privacy policy (14 sections)
├── data-deletion/     # ✅ Data deletion form (Zod + API integration)
├── help-center/       # SCAFFOLDED — no page.tsx yet
│   ├── faq/           # SCAFFOLDED — empty
│   └── [slug]/        # SCAFFOLDED — empty
├── not-found.tsx      # ✅ Custom 404
└── layout.tsx         # ✅ Root layout (providers, metadata, SEO base)
```

Root `/` redirects to `/home` (configured in `next.config.ts`).

### Implementation Status (Verified 2026-04-05)

**Implemented** (working, deployed):
- Home/Landing page — all 6 sections (Hero, Features, Stats, Testimonials, Pricing, CTA)
- Privacy Policy — full GDPR-compliant page
- Data Deletion — form with Zod validation + API service
- API services — `faq.service.ts`, `contact.service.ts`, `dataDeletion.service.ts`
- React Query hooks — `useFAQ`, `useFAQByCategory`
- Static data files — features, navigation, pricing, stats, testimonials
- SEO base metadata — OpenGraph, Twitter Cards, robots config in root layout
- Header, Footer, marketing layout

**Scaffolded (folders exist, NO `page.tsx`)**:
- `(marketing)/features/`, `(marketing)/pricing/`, `(marketing)/contact/`, `(marketing)/about/`
- `help-center/faq/`, `help-center/[slug]/`

**Empty (folder exists, no files)**:
- `components/help-center/` — no components
- `components/ui/` — no components
- `content/help-center/` — no markdown articles

**NOT implemented (backend blockers)**:
- `POST /api/v1/public/data-deletion-request` — endpoint does not exist in Spring Boot
- `GET /api/v1/public/faq` — endpoint does not exist in Spring Boot
- `POST /api/v1/public/contact` — endpoint does not exist in Spring Boot
- `GET /api/v1/public/testimonials` — endpoint does not exist in Spring Boot

**NOT implemented (frontend)**:
- `app/sitemap.ts` — does not exist
- `app/robots.ts` — does not exist
- Structured Data (JSON-LD) — not added
- `lib/schemas/contact.schema.ts` — not created
- `lib/hooks/useContact.ts` — not created
- Error boundary — not implemented

---

## Development Rules

### Server Components First

Use Server Components by default. Only add `'use client'` when interactivity is needed.

```typescript
// Server Component (default) - async/await, no hooks
export default async function Page() {
  const data = await fetchData()
  return <div>{data}</div>
}

// Client Component - hooks, event handlers
'use client'
export function Interactive() {
  const [state, setState] = useState(0)
  return <button onClick={() => setState(state + 1)}>{state}</button>
}
```

### Styling Priority

1. **MUI `sx` prop** (preferred for component styling)
2. **Tailwind utilities** (complementary, for layout/spacing)
3. **CSS modules** (complex cases only)
4. Never use inline `style` prop

### Navigation

Always use `next/link`:
```typescript
import Link from 'next/link'
<Link href={ROUTES.FEATURES}>Features</Link>

// With MUI
<MuiLink component={Link} href={ROUTES.PRICING}>Pricing</MuiLink>
```

### SEO

Every page must export `metadata`:
```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'SEO description',
  openGraph: { title: '...', description: '...', url: '/route' },
}
```

### API Response Validation

Always validate `status === 200` before processing data:
```typescript
const response = await service.getData()
if (response.status === 200 && response.data) {
  return response.data
} else {
  throw new Error(response.message)
}
```

### TypeScript Conventions

- Interfaces: prefix `I` (e.g., `IResponse`)
- Types: prefix `T` (e.g., `TContactFormData`)
- No `any` - use specific types or `unknown`

---

## Backend Integration

### API Base URL

```typescript
const API_BASE = 'http://192.168.0.25:5000/api/v1'
```

### Public Endpoints (no auth required)

```
GET  /api/v1/public/faq                    # FAQ list
POST /api/v1/public/contact                # Contact form
GET  /api/v1/public/testimonials           # Customer testimonials
POST /api/v1/public/data-deletion-request  # GDPR data deletion
```

### Service + Hook Pattern

```typescript
// Service: src/lib/api/services/faq.service.ts
export class FAQService {
  async getAll(): Promise<IResponse<IFAQ[]>> {
    return makeRequest<IFAQ[]>({ method: 'GET', url: '/public/faq' })
  }
}
export const faqService = new FAQService()

// Hook: src/lib/hooks/useFAQ.ts
'use client'
export function useFAQ() {
  return useQuery({
    queryKey: ['faq'],
    queryFn: async () => {
      const response = await faqService.getAll()
      if (response.status !== 200 || !response.data) throw new Error(response.message)
      return response.data
    },
    staleTime: 1000 * 60 * 30, // 30 min
  })
}
```

---

## Deployment

- **Platform**: Vercel
- **URL**: https://control-web-khaki.vercel.app
- **Deploy**: `vercel --prod`
- Environment variables configured in Vercel dashboard

For detailed deployment instructions, see `docs/DEPLOYMENT.md`.

---

## Related Projects

| Project | Path | Role |
|---------|------|------|
| Mobile App | `../control_native/` | React Native business app |
| Backend API | `../virtual_dream_spring_boot/` | Spring Boot REST API |
| Root docs | `../AGENTS.md` | Ecosystem overview |

---

**Last Updated:** 2026-04-05
