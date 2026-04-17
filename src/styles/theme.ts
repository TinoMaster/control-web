'use client'

import { createTheme } from '@mui/material/styles'

// ============================================================
// CONTROL — Premium SaaS Dark Theme
// Direction: Dark navy base + cyan/teal accent + amber gold
// Typography: Space Grotesk (display) + DM Sans (body)
// ============================================================

export const BRAND = {
  // Backgrounds
  bg0: '#060c1a',   // Deepest — hero, main backdrop
  bg1: '#0a1628',   // Primary dark surface
  bg2: '#0f1d35',   // Cards, elevated surfaces
  bg3: '#14243f',   // Hover states, secondary surfaces

  // Glass
  glass: 'rgba(255, 255, 255, 0.04)',
  glassBorder: 'rgba(255, 255, 255, 0.08)',
  glassBorderHover: 'rgba(0, 197, 230, 0.3)',

  // Primary — Cyan electric
  cyan: '#00c5e6',
  cyanLight: '#33d4ed',
  cyanDark: '#0097b2',
  cyanGlow: 'rgba(0, 197, 230, 0.25)',

  // Accent — Amber gold
  amber: '#f59e0b',
  amberLight: '#fbbf24',
  amberGlow: 'rgba(245, 158, 11, 0.25)',

  // Text
  textPrimary: '#f0f6ff',
  textSecondary: 'rgba(240, 246, 255, 0.65)',
  textMuted: 'rgba(240, 246, 255, 0.4)',

  // Gradients
  gradPrimary: 'linear-gradient(135deg, #00c5e6 0%, #0097b2 100%)',
  gradHero: 'linear-gradient(135deg, #060c1a 0%, #0a1628 50%, #0d1f3c 100%)',
  gradAmber: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
} as const

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: BRAND.cyan,
      light: BRAND.cyanLight,
      dark: BRAND.cyanDark,
      contrastText: '#060c1a',
    },
    secondary: {
      main: BRAND.amber,
      light: BRAND.amberLight,
      dark: '#d97706',
      contrastText: '#060c1a',
    },
    error: {
      main: '#f87171',
      light: '#fca5a5',
      dark: '#ef4444',
    },
    warning: {
      main: BRAND.amber,
      light: BRAND.amberLight,
      dark: '#d97706',
    },
    info: {
      main: BRAND.cyan,
      light: BRAND.cyanLight,
      dark: BRAND.cyanDark,
    },
    success: {
      main: '#34d399',
      light: '#6ee7b7',
      dark: '#10b981',
    },
    background: {
      default: BRAND.bg0,
      paper: BRAND.bg2,
    },
    text: {
      primary: BRAND.textPrimary,
      secondary: BRAND.textSecondary,
      disabled: BRAND.textMuted,
    },
    divider: BRAND.glassBorder,
  },
  typography: {
    fontFamily: 'var(--font-dm-sans), "DM Sans", system-ui, sans-serif',
    h1: {
      fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
      fontSize: '1.875rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
      fontSize: '1.0625rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.7,
    },
    caption: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '0.75rem',
      lineHeight: 1.5,
      letterSpacing: '0.04em',
    },
    overline: {
      fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
      fontSize: '0.6875rem',
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
    },
    button: {
      fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: BRAND.bg0,
          color: BRAND.textPrimary,
        },
        '::selection': {
          backgroundColor: `${BRAND.cyan}33`,
          color: BRAND.textPrimary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '11px 28px',
          fontSize: '0.9375rem',
          fontWeight: 600,
          fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
          transition: 'all 0.2s ease',
        },
        contained: {
          background: BRAND.gradPrimary,
          color: BRAND.bg0,
          boxShadow: `0 0 0 0 ${BRAND.cyanGlow}`,
          '&:hover': {
            boxShadow: `0 8px 32px ${BRAND.cyanGlow}`,
            transform: 'translateY(-2px)',
            background: `linear-gradient(135deg, ${BRAND.cyanLight} 0%, ${BRAND.cyan} 100%)`,
          },
        },
        outlined: {
          borderColor: BRAND.glassBorder,
          color: BRAND.textSecondary,
          borderWidth: '1.5px',
          '&:hover': {
            borderColor: BRAND.cyan,
            color: BRAND.cyan,
            backgroundColor: `${BRAND.cyan}0d`,
            borderWidth: '1.5px',
          },
        },
        text: {
          color: BRAND.cyan,
          '&:hover': {
            backgroundColor: `${BRAND.cyan}0d`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: BRAND.bg2,
          backgroundImage: 'none',
          border: `1px solid ${BRAND.glassBorder}`,
          borderRadius: 16,
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: BRAND.glassBorderHover,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px ${BRAND.glassBorderHover}`,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-space-grotesk), "Space Grotesk", sans-serif',
          fontWeight: 600,
          fontSize: '0.75rem',
          letterSpacing: '0.04em',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: BRAND.glassBorder,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: BRAND.bg3,
            '& fieldset': {
              borderColor: BRAND.glassBorder,
            },
            '&:hover fieldset': {
              borderColor: `${BRAND.cyan}66`,
            },
            '&.Mui-focused fieldset': {
              borderColor: BRAND.cyan,
              borderWidth: '1.5px',
            },
          },
          '& .MuiInputLabel-root': {
            color: BRAND.textMuted,
            '&.Mui-focused': {
              color: BRAND.cyan,
            },
          },
          '& .MuiOutlinedInput-input': {
            color: BRAND.textPrimary,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: BRAND.bg2,
          backgroundImage: 'none',
          border: `1px solid ${BRAND.glassBorder}`,
          borderRadius: '12px !important',
          marginBottom: '8px',
          '&:before': { display: 'none' },
          '&.Mui-expanded': {
            borderColor: `${BRAND.cyan}44`,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          color: BRAND.textPrimary,
          '&.Mui-expanded': {
            color: BRAND.cyan,
          },
        },
        expandIconWrapper: {
          color: BRAND.textMuted,
          '&.Mui-expanded': {
            color: BRAND.cyan,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
        },
      },
    },
  },
})
