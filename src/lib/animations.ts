/**
 * Shared Framer Motion variants and constants for Control Web.
 * Import these in Client Components to keep animations consistent.
 */

import type { Variants } from 'framer-motion'

// ─── Easing ──────────────────────────────────────────────────────────────────

/** Smooth expo-out easing — feels natural and premium */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const

/** Snappy ease for hover/micro interactions */
export const EASE_SNAPPY = [0.4, 0, 0.2, 1] as const

// ─── Viewport defaults ───────────────────────────────────────────────────────

export const VIEWPORT_ONCE = { once: true, margin: '-80px' } as const
export const VIEWPORT_ONCE_CLOSE = { once: true, margin: '-40px' } as const

// ─── Base variants ───────────────────────────────────────────────────────────

/** Fade in from below — general purpose */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
}

/** Fade in only — for headings that shouldn't translate */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
}

/** Fade in from left */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
}

/** Fade in from right */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
}

/** Scale up + fade in — for badges, icons, highlights */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
}

// ─── Container variants (stagger children) ───────────────────────────────────

/** Stagger container — standard 0.08s */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

/** Stagger container — slower 0.12s for hero areas */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

/** Stagger container — faster 0.05s for dense grids */
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

// ─── Page transition ─────────────────────────────────────────────────────────

/** Full page fade-in on mount — wrap the page root element */
export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
}
