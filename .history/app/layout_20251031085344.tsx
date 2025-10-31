import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AsValue - Professional WhatsApp Selling Platform',
  description: 'Transform your WhatsApp business with automated messaging, order management, and zero commission. Join the waitlist today!',
  openGraph: {
    title: 'AsValue - Sell Like a Pro on WhatsApp',
    description: 'Zero commission WhatsApp selling platform',
    url: 'https://asvalue.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}