import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'AsValue - Professional WhatsApp Business Platform',
  description: 'Sell professionally on WhatsApp with automated templates, order tracking, and zero commission. Join the waitlist today.',
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
      <body className="antialiased bg-white text-slate-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}