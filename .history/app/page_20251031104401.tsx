'use client'

import { useState } from 'react'
import { Instagram, MessageSquare, Zap, Package, Shield, Smartphone, TrendingUp, BarChart3, Lock, Bell, Headphones, Gauge } from 'lucide-react'

const features = [
  { icon: Instagram, title: 'Professional Profile', description: 'Beautiful product showcase that builds instant trust.', benefit: 'Customers take you seriously' },
  { icon: MessageSquare, title: 'Unified Chat', description: 'All conversations from WhatsApp, Instagram, Telegram in one place.', benefit: 'Never lose a customer' },
  { icon: Zap, title: 'Message Automation', description: 'Pre-built templates for orders, payments, updates.', benefit: 'Save 2+ hours daily' },
  { icon: Package, title: 'Order Management', description: 'Track orders from purchase to delivery automatically.', benefit: 'Professional experience' },
  { icon: Shield, title: 'Zero Commission', description: 'Keep 100% of your revenue. Simple monthly subscription.', benefit: '5% more income' },
  { icon: Smartphone, title: 'Mobile-First', description: 'Run your business entirely from your phone.', benefit: 'Sell anytime, anywhere' },
  { icon: TrendingUp, title: 'Customer Follow System', description: 'Customers get notified about new products.', benefit: '2x repeat purchases' },
  { icon: BarChart3, title: 'Real-Time Analytics', description: 'See which products sell, revenue trends, peak hours.', benefit: 'Smart decisions' },
  { icon: Lock, title: 'Secure Payments', description: 'Safe encrypted payments direct to your bank.', benefit: 'Peace of mind' },
  { icon: Bell, title: 'Smart Alerts', description: 'Instant notifications for orders and messages.', benefit: 'Never miss a sale' },
  { icon: Headphones, title: 'Priority Support', description: 'Lifetime priority support for first 100 sellers.', benefit: 'Help when needed' },
  { icon: Gauge, title: 'Unlimited Scale', description: 'Handle 1,000 customers as easily as 10.', benefit: 'No limits' }
]

export default function WaitlistPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you! You've joined the waitlist with: ${email}`)
    setEmail('')
  }

  return (
    <main className="bg-gradient-to-b from-white via-slate-50 to-indigo-50 text-slate-900">
      {/* HERO SECTION */}
      <section className="px-6 md:px-12 py-20 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Grow Your Online Business — Smarter, Faster, Easier
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          One platform to manage chats, showcase products, automate orders, and grow sales — all from your phone.
        </p>
        <form onSubmit={handleSubmit} id="waitlist-form" className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Join Waitlist
          </button>
        </form>
        <p className="text-sm text-slate-500 mt-4">
          🎁 First 100 sellers get <strong>6 months free</strong>
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-16 md:py-28 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything You Need to Scale</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg">
            Enterprise-grade features built for sellers — no tech skills needed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <f.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm mb-4 flex-grow">{f.description}</p>
              <span className="text-xs bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md font-semibold w-fit">
                ✓ {f.benefit}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Be Among the First 100 Sellers</h2>
        <p className="text-lg mb-10 opacity-90">
          Get lifetime priority support and 6 months of premium features — free.
        </p>
        <button
          onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-indigo-700 hover:bg-indigo-100 px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl active:scale-95"
        >
          Join Now — It’s Free
        </button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-white text-center text-slate-500 text-sm border-t">
        <p>© {new Date().getFullYear()} SellSmart — Built for Modern Sellers.</p>
      </footer>
    </main>
  )
}