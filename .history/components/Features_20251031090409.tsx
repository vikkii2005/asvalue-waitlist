import { Instagram, MessageSquare, Zap, Package, Shield, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Instagram,
    title: 'Seller Profile',
    description: 'Show all products in one place. Customers can browse everything without asking.'
  },
  {
    icon: MessageSquare,
    title: 'Chat Platform',
    description: 'Organized conversations with customers. No more scrolling through WhatsApp.'
  },
  {
    icon: Zap,
    title: 'Message Templates',
    description: 'Save time with pre-written messages for orders, payments, and updates.'
  },
  {
    icon: Package,
    title: 'Order Management',
    description: 'Track orders from start to finish. Send automatic updates to customers.'
  },
  {
    icon: Shield,
    title: 'Zero Commission',
    description: 'Keep 100% of your sales. We charge a simple monthly subscription only.'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Run your entire business from your phone. Sell from anywhere.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 px-4 bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            What You Get
          </h2>
          <p className="text-lg text-slate-600">
            Everything a WhatsApp seller needs to work efficiently.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}