import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lounge Hair Studio - Luxury Hair Styling in Auckland',
  description: 'Experience luxury hair styling at Lounge Hair Studio in Silverdale, Auckland. Professional haircuts, coloring, and styling services.',
  keywords: ['hair salon', 'hair styling', 'haircut', 'Auckland', 'Silverdale', 'luxury salon'],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://lounge-hair-studio.com',
    siteName: 'Lounge Hair Studio',
    title: 'Lounge Hair Studio - Luxury Hair Styling',
    description: 'Professional hair styling and salon services in Auckland',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lounge Hair Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lounge Hair Studio',
    description: 'Luxury hair styling in Auckland',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
