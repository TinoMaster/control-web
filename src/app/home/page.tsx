import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { CTASection } from '@/components/sections/CTASection'

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
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  )
}
