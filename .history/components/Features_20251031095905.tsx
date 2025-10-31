import { Instagram, MessageSquare, Zap, Package, Shield, Smartphone, TrendingUp, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Instagram,
    title: 'Professional Seller Profile',
    description: 'Display your complete product catalog beautifully. Customers browse everything in one place without asking "what do you have?"'
  },
  {
    icon: MessageSquare,
    title: 'Organized Chat Platform',
    description: 'All customer conversations in one dashboard. Never lose a message again from WhatsApp, Instagram, or Telegram.'
  },
  {
    icon: Zap,
    title: 'Message Automation',
    description: 'Save time with pre-written templates for orders, payments, and updates. Send bulk messages instantly.'
  },
  {
    icon: Package,
    title: 'Complete Order Management',
    description: 'Track every order from placement to delivery. Send automatic status updates. Manage inventory from one dashboard.'
  },
  {
    icon: Shield,
    title: 'Zero Commission Model',
    description: 'Keep every rupee you earn. We charge only a simple monthly subscription. No hidden fees. Direct payments to your account.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Business',
    description: 'Run your entire business from your phone. Upload products, track orders, manage customers - all mobile native.'
  },
  {
    icon: TrendingUp,
    title: 'Customer Loyalty System',
    description: 'Customers follow your profile and get notified about new products. Build repeat business automatically.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'See which products sell best, peak order times, revenue trends. Make smart decisions based on data.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-32 px-4 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            All the tools professional online businesses need. All in one independent platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all group"
            >
              <div className="shrink-0 mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}