---
name: nextjs-app-router
description: |
  Next.js 15 App Router patterns for the Control Web marketing site.
  Use when: creating pages, layouts, components, or data-fetching hooks for the Next.js web app.
  Covers React Server Components, SEO metadata, MUI + Tailwind styling, TanStack Query,
  Axios service pattern, and marketing/informational site patterns.
metadata:
  author: control-ecosystem
  version: "1.0.0"
---

# Next.js 15 App Router — Control Web

Patterns for the Control Web marketing site: Next.js 15.5.9 + React 19 + MUI 6 + Tailwind CSS 3.

**Important**: This is a marketing/informational site, NOT a dashboard. Pages are: landing, features, pricing, help center, privacy policy, data deletion.

## Server Components by Default

Use Server Components unless the component needs hooks, event handlers, or browser APIs:

```typescript
// Server Component (default) — async/await, no hooks, no 'use client'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features | Control',
  description: 'Manage your business with Control',
  openGraph: { title: 'Features', description: '...', url: '/features' },
}

export default async function FeaturesPage() {
  const data = await fetchData()
  return <section>{/* render data */}</section>
}
```

```typescript
// Client Component — only when interactivity is needed
'use client'
import { useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  return <form onSubmit={() => setSubmitted(true)}>{/* ... */}</form>
}
```

**Every page MUST export `metadata`** for SEO (title, description, openGraph).

## Styling Priority

1. **MUI `sx` prop** — preferred for component styling (responsive, theme-aware)
2. **Tailwind utilities** — complementary for layout, spacing, quick styles
3. **CSS modules** — complex cases only
4. **Never** use inline `style` prop

```typescript
import { Box, Typography, Button } from '@mui/material'

<Box sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 6 } }}>
  <Typography variant="h2" className="text-balance font-bold">
    Heading
  </Typography>
  <Button variant="contained" sx={{ mt: 3, borderRadius: 2 }}>
    Get Started
  </Button>
</Box>
```

## Navigation

Always use `next/link`:
```typescript
import Link from 'next/link'
import { Link as MuiLink } from '@mui/material'

// Plain link
<Link href="/pricing">Pricing</Link>

// MUI integration
<MuiLink component={Link} href="/features">Features</MuiLink>
```

## Data Fetching — Service + Hook Pattern

Services use Axios with the `IResponse<T>` wrapper:

```typescript
// src/lib/api/services/faq.service.ts
export class FAQService {
  async getAll(): Promise<IResponse<IFAQ[]>> {
    return makeRequest<IFAQ[]>({ method: 'GET', url: '/public/faq' })
  }
}
export const faqService = new FAQService()
```

Client hooks validate `status === 200`:

```typescript
// src/lib/hooks/useFAQ.ts
'use client'
import { useQuery } from '@tanstack/react-query'

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
    staleTime: 1000 * 60 * 30, // 30 min cache
  })
}
```

## Forms — React Hook Form + Zod

```typescript
'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})
type TContactForm = z.infer<typeof contactSchema>

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<TContactForm>({
    resolver: zodResolver(contactSchema),
  })
  // ...
}
```

## Client State — Zustand

```typescript
import { create } from 'zustand'

interface UIStore {
  mobileMenuOpen: boolean
  toggleMobileMenu: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  mobileMenuOpen: false,
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
}))
```

## Path Aliases

```
@/*            → ./src/*
@/components/* → ./src/components/*
@/lib/*        → ./src/lib/*
@/hooks/*      → ./src/lib/hooks/*
@/api/*        → ./src/lib/api/*
@/types/*      → ./src/types/*
```

## TypeScript Conventions

- Interfaces: `I` prefix (`IResponse`, `IFAQ`)
- Types: `T` prefix (`TContactForm`)
- No `any` — use specific types or `unknown`

## Public API Endpoints (no auth required)

```
GET  /api/v1/public/faq                    # FAQ list
POST /api/v1/public/contact                # Contact form
GET  /api/v1/public/testimonials           # Customer testimonials
POST /api/v1/public/data-deletion-request  # GDPR data deletion
```

API Base: configured in `src/lib/constants/api.ts`. All responses follow `{ status, message, data }` wrapper.
