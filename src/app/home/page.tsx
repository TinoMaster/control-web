import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections/HeroSection'
import TestimonialsSectionServer from '@/components/sections/TestimonialsSectionServer'

// Lazy-load below-the-fold sections to improve initial page load
const FeaturesSection = dynamic(
  () => import('@/components/sections/FeaturesSection').then((m) => ({ default: m.FeaturesSection })),
  { ssr: true }
)
const StatsSection = dynamic(
  () => import('@/components/sections/StatsSection').then((m) => ({ default: m.StatsSection })),
  { ssr: true }
)
const PricingSection = dynamic(
  () => import('@/components/sections/PricingSection').then((m) => ({ default: m.PricingSection })),
  { ssr: true }
)
const CTASection = dynamic(
  () => import('@/components/sections/CTASection').then((m) => ({ default: m.CTASection })),
  { ssr: true }
)

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'Control - El sistema de gestión empresarial más completo. Gestiona ventas, inventario, empleados y finanzas desde tu móvil. Comienza gratis hoy.',
  keywords: [
    'sistema de gestión',
    'punto de venta',
    'control de inventario',
    'gestión de ventas',
    'app de negocios',
    'software empresarial',
  ],
  openGraph: {
    title: 'Control - Sistema de Gestión Empresarial',
    description:
      'Gestiona tu negocio completo desde tu móvil: ventas, inventario, empleados y más',
    url: '/home',
    type: 'website',
    images: [
      {
        url: '/images/og-home.png',
        width: 1200,
        height: 630,
        alt: 'Control - Dashboard de gestión empresarial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Control - Sistema de Gestión Empresarial',
    description:
      'Gestiona tu negocio completo desde tu móvil: ventas, inventario, empleados y más',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSectionServer />
      <PricingSection />
      <CTASection />
    </>
  )
}
