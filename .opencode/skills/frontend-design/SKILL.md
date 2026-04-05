---
name: frontend-design
description: |
  Create distinctive, production-grade web interfaces with high design quality for the Control Web project.
  Use when: building pages, components, or layouts for the Next.js marketing site. Applies MUI 6 + Tailwind CSS 3
  design patterns while maintaining a bold, memorable aesthetic that avoids generic AI design.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade web interfaces for the Control Web marketing site (Next.js 15 + MUI 6 + Tailwind CSS 3). Avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details.

The user provides frontend requirements: a component, page, section, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick a distinctive direction: brutally minimal, maximalist, retro-futuristic, luxury/refined, playful, editorial/magazine, soft/pastel, industrial, art deco, etc. Match the Control brand.
- **Constraints**: Next.js 15 App Router, MUI 6 components, Tailwind CSS 3 utilities, Framer Motion animations.
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute with precision. Bold maximalism and refined minimalism both work — the key is intentionality.

## Implementation Stack

- **MUI `sx` prop** — preferred for component styling (theme-aware, responsive)
- **Tailwind CSS** — complementary for layout, spacing, quick utilities
- **Framer Motion** — animations and micro-interactions
- **Server Components** by default — `'use client'` only when interactivity is needed
- **`next/link`** — always for navigation, including with MUI: `<MuiLink component={Link}>`
- **`metadata` export** — every page must have SEO metadata

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Distinctive font choices that elevate the design. Avoid generic fonts (Arial, Inter). Pair a display font with a refined body font.
- **Color & Theme**: Cohesive aesthetic with CSS variables and MUI theme. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Framer Motion for page transitions and scroll-triggered reveals. CSS transitions for hover states. One well-orchestrated page load beats scattered micro-interactions.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Generous negative space OR controlled density.
- **Backgrounds & Depth**: Gradient meshes, noise textures, geometric patterns, layered transparencies — atmosphere over flat colors.

NEVER use: overused font families (Inter, Roboto), cliched purple gradients on white, predictable card grids, cookie-cutter layouts lacking context.

## Code Pattern

```typescript
// Server Component (default)
import type { Metadata } from 'next'
import { Box, Typography } from '@mui/material'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'SEO description',
  openGraph: { title: '...', description: '...', url: '/route' },
}

export default function Page() {
  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 } }}>
      <Typography variant="h1" className="text-balance">
        Bold headline here
      </Typography>
    </Box>
  )
}
```

Match implementation complexity to the aesthetic vision. Elegant design comes from executing the vision with precision.
