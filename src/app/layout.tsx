import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from '@/lib/providers'
import JsonLd from '@/components/JsonLd'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Control - Sistema de Gestión Empresarial',
    template: '%s | Control',
  },
  description:
    'Gestiona tu negocio completo desde tu móvil: ventas, inventario, empleados, reportes financieros y más. Control es la solución integral para pequeñas y medianas empresas.',
  keywords: [
    'gestión empresarial',
    'punto de venta',
    'POS',
    'inventario',
    'ventas',
    'app móvil',
    'control de negocio',
    'facturación',
    'empleados',
    'reportes',
  ],
  authors: [{ name: 'Control Team' }],
  creator: 'Control',
  publisher: 'Control',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: 'Control',
    title: 'Control - Sistema de Gestión Empresarial',
    description: 'Gestiona tu negocio completo desde tu móvil',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Control - Sistema de Gestión Empresarial',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Control - Sistema de Gestión Empresarial',
    description: 'Gestiona tu negocio completo desde tu móvil',
    images: ['/images/twitter-image.png'],
    creator: '@control_app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://control-web-khaki.vercel.app'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Control',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  description:
    'Sistema de gestión empresarial móvil para pequeñas y medianas empresas. Ventas, inventario, empleados y reportes desde tu teléfono.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: `${BASE_URL}/contact`,
  },
  sameAs: [],
}

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Control',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android, iOS',
  description:
    'Gestiona tu negocio completo desde tu móvil: ventas, inventario, empleados, reportes financieros y más.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${dmSans.variable}`}
    >
      <body className={dmSans.className}>
        <JsonLd data={organizationSchema} />
        <JsonLd data={softwareApplicationSchema} />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
