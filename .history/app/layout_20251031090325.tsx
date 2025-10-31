import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './globals.css'

export const metadata: Metadata = {
  title: 'AsValue - Professional WhatsApp Selling Platform',
  description: 'Sell on WhatsApp professionally with automated templates, order tracking, and zero commission. Join the waitlist.',
  openGraph: {
    title: 'AsValue - Professional WhatsApp Selling',
    description: 'Zero commission WhatsApp selling platform',
    url: 'https://asvalue.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}