import { Instagram, MessageSquare, Zap, TrendingUp, Shield, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Instagram,
    title: 'Instagram-Style Profiles',
    description: 'Showcase all products in one beautiful profile. Customers can follow and browse easily.'
  },
  {
    icon: MessageSquare,
    title: 'Chat-Based Selling',
    description: 'Built-in messaging platform designed specifically for product sales conversations.'
  },
  {
    icon: Zap,
    title: 'Template Automation',
    description: 'Pre-built message templates. Setup once, automate forever. No expensive AI costs.'
  },
  {
    icon: TrendingUp,
    title: 'Order Management',
    description: 'Track orders, manage inventory, and fulfill shipments all in one dashboard.'
  },
  {
    icon: Shield,
    title: 'Zero Commission',
    description: 'Keep 100% of your sales. We only charge a low monthly subscription.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Manage your entire business from your phone. Sell anywhere, anytime.'
  }
]

export default function Features() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Everything WhatsApp Sellers Need
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16">
          No more manual messaging. No order chaos. Just professional selling made simple.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
              <feature.icon className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}