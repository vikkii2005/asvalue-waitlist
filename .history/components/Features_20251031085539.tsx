import { Instagram, MessageSquare, Zap, TrendingUp, Shield, Smartphone, Package, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Instagram,
    title: 'Instagram-Style Profiles',
    description: 'Customers browse your complete catalog like Instagram. Beautiful product displays with images, prices, and descriptions.',
    benefit: 'Customers can actually see and buy instead of asking "what do you have?"'
  },
  {
    icon: MessageSquare,
    title: 'Built-In Chat Platform',
    description: 'Dedicated messaging system designed for sales. All conversations organized by customer and order.',
    benefit: 'No more scrolling through WhatsApp to find that one customer message'
  },
  {
    icon: Zap,
    title: 'Template Automation',
    description: 'Pre-built message templates for order confirmation, payment reminders, shipping updates. Setup once, automate forever.',
    benefit: 'Send 100 messages in 1 second. No expensive AI needed.'
  },
  {
    icon: Package,
    title: 'Smart Order Management',
    description: 'Track every order from placement to delivery. Automatic status updates to customers. Inventory management included.',
    benefit: 'Zero "where is my order?" messages cluttering your WhatsApp'
  },
  {
    icon: Shield,
    title: 'Zero Commission Model',
    description: 'Keep 100% of your sales revenue. We charge only a small monthly subscription. Your money goes directly to your account.',
    benefit: 'Earn ₹10,000 more per month vs commission platforms'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Manage your entire business from your phone. Upload products, process orders, chat with customers - all on mobile.',
    benefit: 'Run your business from anywhere, even while traveling'
  },
  {
    icon: TrendingUp,
    title: 'Customer Follow System',
    description: 'Customers can follow your profile and get notified about new products. Build a loyal customer base like Instagram.',
    benefit: 'Automatic repeat customers without sending promotional messages'
  },
  {
    icon: BarChart3,
    title: 'Sales Analytics',
    description: 'See which products sell best, peak order times, revenue trends. Make data-driven decisions to grow faster.',
    benefit: 'Know exactly what to stock and when to promote it'
  }
]

export default function Features() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Everything You Need to Sell Professionally
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stop piecing together multiple tools. AsValue gives you everything in one powerful platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 mb-3">{feature.description}</p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm font-medium text-green-800">
                      <strong>Why it matters:</strong> {feature.benefit}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}