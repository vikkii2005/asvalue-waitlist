import { AlertCircle, CheckCircle2, Clock, DollarSign, TrendingDown, Users2, TrendingUp, Target } from 'lucide-react'

const problems = [
  {
    icon: Users2,
    problem: 'Scattered Customers',
    detail: 'WhatsApp, Instagram, Telegram - no system',
    solution: 'One unified platform',
    impact: 'Save 10+ hours weekly'
  },
  {
    icon: AlertCircle,
    problem: 'Look Unprofessional',
    detail: 'DMs and comments aren\'t professional',
    solution: 'Professional seller profile',
    impact: '3x higher conversions'
  },
  {
    icon: TrendingDown,
    problem: 'Products Lost',
    detail: 'No catalog, customers keep asking',
    solution: 'Beautiful product catalog',
    impact: '2x more engagement'
  },
  {
    icon: DollarSign,
    problem: 'Lose to Commissions',
    detail: 'Payment platforms take 2-5%',
    solution: 'Direct payments, zero commission',
    impact: 'Keep 100% revenue'
  },
  {
    icon: Clock,
    problem: 'Waste Hours',
    detail: 'Same questions, manual tracking',
    solution: 'Automated templates & dashboard',
    impact: 'Save 5+ hours daily'
  },
  {
    icon: TrendingUp,
    problem: 'Can\'t Scale',
    detail: 'More customers = chaos',
    solution: 'System that scales infinitely',
    impact: 'Handle 10x customers'
  }
]

const results = [
  {
    icon: Target,
    number: '3x',
    label: 'More Sales',
    description: 'Conversion rate increase'
  },
  {
    icon: Clock,
    number: '5hrs',
    label: 'Saved Daily',
    description: 'Less manual work'
  },
  {
    icon: DollarSign,
    number: '100%',
    label: 'Revenue Kept',
    description: 'Zero commission forever'
  },
  {
    icon: TrendingUp,
    number: '10x',
    label: 'Scale Better',
    description: 'Capacity increase'
  }
]

export default function ProblemSolution() {
  return (
    <section id="problems" className="py-16 md:py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-8 leading-tight">
            Real Problems You Face
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Selling on WhatsApp, Instagram, or Telegram is limiting. Here are the exact problems we solve.
          </p>
        </div>

        {/* Problem-Solution Grid */}
        <div className="space-y-4 md:space-y-6">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="bg-linear-to-br from-slate-50 via-slate-50 to-slate-100 rounded-2xl p-6 md:p-8 border-2 border-slate-200 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Problem Side */}
                <div className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-red-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg md:text-xl mb-2">The Problem</p>
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold mb-2">{item.problem}</p>
                    <p className="text-slate-600 text-xs md:text-sm">{item.detail}</p>
                  </div>
                </div>

                {/* Solution Side */}
                <div className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-indigo-600 text-lg md:text-xl mb-2">Our Solution</p>
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold mb-3">{item.solution}</p>
                    <p className="text-xs md:text-sm font-bold bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full inline-block">{item.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Stats - FIXED WITH VISIBLE CONTENT & SMALLER BOXES */}
        <div className="mt-12 md:mt-20 bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-10 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">Real Results From Sellers</h3>
              <p className="text-xs md:text-sm text-indigo-100 font-medium">Proven improvements from early members</p>
            </div>
            
            {/* Results Grid - SMALLER BOXES WITH VISIBLE COLORS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-10">
              {results.map((result, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-4 md:p-5 border-2 border-white border-opacity-20 transition-all duration-300 text-center hover:bg-opacity-95 group"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 group-hover:bg-indigo-200 transition-all">
                    <result.icon className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
                  </div>
                  
                  {/* Big Number */}
                  <div className="text-2xl md:text-3xl font-black mb-1 md:mb-2 text-indigo-600">{result.number}</div>
                  
                  {/* Label */}
                  <div className="text-xs md:text-sm font-bold mb-1 text-slate-900">{result.label}</div>
                  
                  {/* Description */}
                  <div className="text-xs text-slate-600 leading-tight">{result.description}</div>
                </div>
              ))}
            </div>

            {/* Extra Info */}
            <div className="border-t border-white border-opacity-20 pt-6 md:pt-8 text-center">
              <p className="text-xs md:text-sm text-indigo-100 font-medium leading-relaxed">
                ⭐ These results are from our beta testing with early sellers. Your results may vary based on how you use the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}