import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'AsValue - Professional WhatsApp Selling Platform',
  description: 'Transform your WhatsApp business with automated messaging, order management, and zero commission. Join the waitlist today!',
  openGraph: {
    title: 'AsValue - Sell Like a Pro on WhatsApp',
    description: 'Zero commission WhatsApp selling platform',
    url: 'https://asvalue.com',
  }
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}