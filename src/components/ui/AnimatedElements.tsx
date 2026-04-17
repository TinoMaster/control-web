'use client'

/**
 * Reusable animated wrappers built on Framer Motion.
 * These are Client Components — import them in Server Component pages
 * to add scroll-triggered and mount animations without losing SSR.
 */

import { motion, type MotionProps } from 'framer-motion'
import type { BoxProps } from '@mui/material'
import { Box } from '@mui/material'
import {
  fadeUp,
  fadeIn,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  staggerContainerSlow,
  staggerContainerFast,
  pageTransition,
  VIEWPORT_ONCE,
  VIEWPORT_ONCE_CLOSE,
} from '@/lib/animations'

type AnimBoxProps = Omit<BoxProps, keyof MotionProps> &
  MotionProps & { children?: React.ReactNode }

const MotionBox = motion(Box)

// ─── Page wrapper ─────────────────────────────────────────────────────────────

/**
 * Wraps a page root element with a fade-in-up on mount.
 * Use this as the outermost Box on any page.
 */
export function PageTransition({ children, ...props }: AnimBoxProps) {
  return (
    <MotionBox
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {children}
    </MotionBox>
  )
}

// ─── Scroll-triggered single elements ─────────────────────────────────────────

/** Fade up on scroll into view */
export function FadeUp({ children, delay = 0, ...props }: AnimBoxProps & { delay?: number }) {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
      }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

/** Fade in (no translate) on scroll */
export function FadeIn({ children, delay = 0, ...props }: AnimBoxProps & { delay?: number }) {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] } },
      }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

/** Fade in from left on scroll */
export function FadeLeft({ children, delay = 0, ...props }: AnimBoxProps & { delay?: number }) {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={{
        hidden: { opacity: 0, x: -32 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
      }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

/** Fade in from right on scroll */
export function FadeRight({ children, delay = 0, ...props }: AnimBoxProps & { delay?: number }) {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={{
        hidden: { opacity: 0, x: 32 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] } },
      }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

/** Scale up + fade in on scroll — for badges, icons */
export function ScaleIn({ children, delay = 0, ...props }: AnimBoxProps & { delay?: number }) {
  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE_CLOSE}
      variants={{
        hidden: { opacity: 0, scale: 0.85 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] } },
      }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

// ─── Stagger containers ────────────────────────────────────────────────────────

/**
 * Stagger container — wraps a list of children that each use fadeUp variant.
 * Children must use the `fadeUp` variant (or any variant with hidden/visible states).
 */
export function StaggerContainer({
  children,
  speed = 'normal',
  ...props
}: AnimBoxProps & { speed?: 'slow' | 'normal' | 'fast' }) {
  const variant =
    speed === 'slow'
      ? staggerContainerSlow
      : speed === 'fast'
        ? staggerContainerFast
        : staggerContainer

  return (
    <MotionBox
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

/**
 * A single stagger child — use inside StaggerContainer.
 * Animates with fadeUp by default.
 */
export function StaggerItem({
  children,
  variant = 'fadeUp',
  hover = false,
  ...props
}: AnimBoxProps & { variant?: 'fadeUp' | 'fadeIn' | 'fadeLeft' | 'fadeRight' | 'scaleIn'; hover?: boolean }) {
  const variants = {
    fadeUp,
    fadeIn,
    fadeLeft,
    fadeRight,
    scaleIn,
  }

  return (
    <MotionBox
      variants={variants[variant]}
      whileHover={hover ? { y: -6, transition: { duration: 0.2 } } : undefined}
      {...props}
    >
      {children}
    </MotionBox>
  )
}
