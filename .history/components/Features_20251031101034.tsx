import { Instagram, MessageSquare, Zap, Package, Shield, Smartphone, TrendingUp, BarChart3, Lock, Bell, Headphones, Gauge } from 'lucide-react'

const features = [
  {
    icon: Instagram,
    title: 'Professional Seller Profile',
    description: 'Beautiful product showcase that builds instant trust. Like your own mini-Shopify store.',
    benefit: 'Customers take you seriously'
  },
  {
    icon: MessageSquare,
    title: 'Unified Chat Dashboard',
    description: 'All conversations from WhatsApp, Instagram, Telegram in one organized place.',
    benefit: 'Never lose a customer again'
  },
  {
    icon: Zap,
    title: 'Smart Message Automation',
    description: 'Pre-built templates for orders, payments, shipping updates. Send 100 messages in seconds.',
    benefit: 'Save 2+ hours daily'
  },
  {
    icon: Package,
    title: 'Complete Order Management',
    description: 'Track every order from purchase to delivery. Automatic customer notifications at each step.',
    benefit: 'Professional order experience'
  },
  {
    icon: Shield,
    title: 'Zero Commission Forever',
    description: 'Keep 100% of your revenue. We charge only a simple monthly subscription. No hidden fees.',
    benefit: '5% more in your pocket'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Platform',
    description: 'Run your entire business from your phone. Upload products, manage orders on the go.',
    benefit: 'Sell from anywhere, anytime'
  },
  {
    icon: TrendingUp,
    title: 'Customer Follow System',
    description: 'Customers follow your profile, get notified about new products. Build loyal customer base.',
    benefit: '2x repeat purchases'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'See which products sell, peak hours, revenue trends. Make data-driven decisions.',
    benefit: 'Smart business decisions'
  },
  {
    icon: Lock,
    title: 'Secure Payment Integration',
    description: 'Safe, encrypted direct payments to your bank. Zero fraud, zero chargebacks.',
    benefit: 'Peace of mind'
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Get alerts for new orders, customer messages, low inventory in real-time.',
    benefit: 'Never miss a sale'
  },
  {
    icon: Headphones,
    title: 'Priority Support',
    description: 'First 100 sellers get lifetime priority support from our team.',
    benefit: 'Help when you need it'
  },
  {
    icon: Gauge,
    title: 'Unlimited Scaling',
    description: 'Handle 1,000 customers as easily as 10. Platform grows with you.',
    benefit: 'No limits to growth'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-32 px-4 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">
            Everything You Need to Scale
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Enterprise-grade features built specifically for online sellers. No technical knowledge needed.
          </p>
        </div>
        
        {/* Features Grid - 3 columns for desktop */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border-2 border-slate-200 hover:border-indigo-400 hover:shadow-2xl transition-all duration-300 group h-full"
            >
              {/* Icon Container */}
              <div className="shrink-0 mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-base leading-relaxed mb-4">{feature.description}</p>
              
              {/* Benefit Badge */}
              <p className="text-sm font-bold bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg inline-block mt-auto">
                ✓ {feature.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-6">All features included in first 6 months free for first 100 sellers</p>
          <button 
            onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Join Now - Get 6 Months Free
          </button>
        </div>
      </div>
    </section>
  )
}