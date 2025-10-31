'use client'

import {
  Instagram,
  MessageSquare,
  Zap,
  Package,
  Shield,
  Smartphone,
  TrendingUp,
  BarChart3,
  Lock,
  Bell,
  Headphones,
  Gauge
} from 'lucide-react'

const features = [
  {
    icon: Instagram,
    title: 'Professional Profile',
    description: 'Showcase your products with clean, modern design that builds instant trust.',
    benefit: 'Customers take you seriously'
  },
  {
    icon: MessageSquare,
    title: 'Unified Inbox',
    description: 'Manage all chats from WhatsApp, Instagram, and Telegram in one place.',
    benefit: 'Never miss a message'
  },
  {
    icon: Zap,
    title: 'Automation Tools',
    description: 'Send pre-built templates for orders, payments, and updates automatically.',
    benefit: 'Save hours daily'
  },
  {
    icon: Package,
    title: 'Order Tracking',
    description: 'Keep track of every order from purchase to delivery in real-time.',
    benefit: 'Smooth operations'
  },
  {
    icon: Shield,
    title: 'Zero Commission',
    description: 'Accept direct payments securely and keep 100% of your earnings.',
    benefit: 'Maximize profits'
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Manage your entire business seamlessly from your phone or tablet.',
    benefit: 'Work anywhere'
  },
  {
    icon: TrendingUp,
    title: 'Customer Retention',
    description: 'Automatically remind customers when you launch new products.',
    benefit: '2x repeat sales'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Understand what sells best and make smarter growth decisions.',
    benefit: 'Data-driven growth'
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Every transaction is encrypted and safe, protecting your customers and you.',
    benefit: 'Peace of mind'
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Get real-time notifications for new orders and messages.',
    benefit: 'Stay informed'
  },
  {
    icon: Headphones,
    title: 'Priority Support',
    description: 'First 100 sellers receive lifetime premium support access.',
    benefit: 'Help anytime'
  },
  {
    icon: Gauge,
    title: 'Scalable System',
    description: 'Easily manage 10 or 10,000 customers with no slowdown.',
    benefit: 'Built to grow'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-28 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Everything You Need to Scale
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Smart tools for sellers — professional, fast, and made to grow with your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              {/* Icon */}
              <div className="mb-5">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-slate-700" />
                </div>
              </div>

              {/* Text */}
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                {feature.description}
              </p>

              {/* Benefit */}
              <p className="text-xs md:text-sm font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-md w-fit">
                ✓ {feature.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-base md:text-lg text-slate-600 mb-6">
            First 100 sellers get <strong>6 months free</strong> — all premium features included.
          </p>
          <button
            onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 md:px-10 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all shadow hover:shadow-lg active:scale-95"
          >
            Join Waitlist – Get 6 Months Free
          </button>
        </div>
      </div>
    </section>
  )
}