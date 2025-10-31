'use client'

import { Instagram, MessageSquare, Zap, Package, Shield, Smartphone, TrendingUp, BarChart3, Lock, Bell, Headphones, Gauge } from 'lucide-react'

const features = [
  {
    icon: Instagram,
    title: 'Professional Profile',
    description: 'Beautiful product showcase that builds instant trust.',
    benefit: 'Customers take you seriously'
  },
  {
    icon: MessageSquare,
    title: 'Unified Chat',
    description: 'All conversations from WhatsApp, Instagram, Telegram in one place.',
    benefit: 'Never lose a customer'
  },
  {
    icon: Zap,
    title: 'Message Automation',
    description: 'Pre-built templates for orders, payments, updates.',
    benefit: 'Save 2+ hours daily'
  },
  {
    icon: Package,
    title: 'Order Management',
    description: 'Track orders from purchase to delivery automatically.',
    benefit: 'Professional experience'
  },
  {
    icon: Shield,
    title: 'Zero Commission',
    description: 'Keep 100% of your revenue. Simple monthly subscription.',
    benefit: '5% more income'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Run your business entirely from your phone.',
    benefit: 'Sell anytime, anywhere'
  },
  {
    icon: TrendingUp,
    title: 'Customer Follow System',
    description: 'Customers get notified about new products.',
    benefit: '2x repeat purchases'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'See which products sell, revenue trends, peak hours.',
    benefit: 'Smart decisions'
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Safe encrypted payments direct to your bank.',
    benefit: 'Peace of mind'
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Instant notifications for orders and messages.',
    benefit: 'Never miss a sale'
  },
  {
    icon: Headphones,
    title: 'Priority Support',
    description: 'Lifetime priority support for first 100 sellers.',
    benefit: 'Help when needed'
  },
  {
    icon: Gauge,
    title: 'Unlimited Scale',
    description: 'Handle 1,000 customers as easily as 10.',
    benefit: 'No limits'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-32 px-4 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-8">
            Everything You Need to Scale
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto">
            Enterprise-grade features built specifically for online sellers. No technical knowledge needed.
          </p>
        </div>
        
        {/* Features Grid - 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-2xl border-2 border-slate-200 hover:border-indigo-400 hover:shadow-2xl transition-all duration-300 group h-full flex flex-col"
            >
              {/* Icon Container */}
              <div className="shrink-0 mb-4">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4 grow">{feature.description}</p>
              
              {/* Benefit Badge */}
              <p className="text-xs md:text-sm font-bold bg-indigo-50 text-indigo-700 px-3 md:px-4 py-2 rounded-lg inline-block mt-auto">
                ✓ {feature.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base md:text-lg text-slate-600 mb-6">All features included in first 6 months free for first 100 sellers</p>
          <button 
            onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl active:scale-95 w-full md:w-auto"
          >
            Join Now - Get 6 Months Free
          </button>
        </div>
      </div>
    </section>
  )
}