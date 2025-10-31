import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'AsValue - Professional Independent Platform for Online Sellers',
  description: 'Stop selling unprofessionally on WhatsApp, Instagram, Telegram. AsValue is your independent business platform. Zero commission, 100% revenue kept.',
  keywords: 'online selling platform, WhatsApp seller, Instagram seller, Telegram seller, ecommerce platform, zero commission',
  openGraph: {
    title: 'AsValue - Professional Selling Platform',
    description: 'Independent platform for online sellers. First 100 sellers get 6 months free.',
    url: 'https://asvalue.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased bg-white text-slate-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}