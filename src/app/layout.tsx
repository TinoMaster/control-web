import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Providers } from '@/lib/providers'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
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
  verification: {
    // Agregar después cuando tengas los códigos de verificación
    // google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={roboto.variable}>
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
