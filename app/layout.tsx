import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import './globals.css'

// Elegant serif fonts for luxury aesthetic
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
})

export const metadata: Metadata = {
  title: 'Lounge Hair Studio by Chante | Luxury Hair Salon in Silverdale, Auckland',
  description: 'Bespoke hair artistry by Chante. Luxury hair salon in Silverdale, Auckland offering bridal services, organic colours, treatments, and professional styling.',
  keywords: ['hair salon', 'Silverdale', 'Auckland', 'luxury hair', 'bridal hair', 'hair styling', 'organic colours'],
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://loungehairstudio.co.nz',
    siteName: 'Lounge Hair Studio by Chante',
    title: 'Lounge Hair Studio by Chante | Luxury Hair Salon',
    description: 'Bespoke hair artistry by Chante in Silverdale, Auckland',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lounge Hair Studio by Chante',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lounge Hair Studio by Chante',
    description: 'Luxury hair salon in Silverdale, Auckland',
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
    <html lang="en" className={`${playfairDisplay.variable} ${lora.variable}`}>
      <head>
        {/* Metadata is handled by Next.js automatically */}
      </head>
      <body className="antialiased">
        {/* Structured Data - Moved to body to fix hydration mismatch */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Lounge Hair Studio by Chante',
              image: '/images/logo.png',
              description: 'Luxury hair salon offering bespoke hair artistry',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '29E Silverdale Street',
                addressLocality: 'Silverdale',
                addressRegion: 'Auckland',
                postalCode: '0932',
                addressCountry: 'NZ',
              },
              telephone: '(09) 426 8113',
              url: 'https://loungehairstudio.co.nz',
              priceRange: '$$$',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Monday',
                  opens: '09:00',
                  closes: '15:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Tuesday', 'Wednesday'],
                  opens: '09:00',
                  closes: '17:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Thursday',
                  opens: '09:00',
                  closes: '20:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Friday',
                  opens: '09:00',
                  closes: '15:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '17:00',
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
