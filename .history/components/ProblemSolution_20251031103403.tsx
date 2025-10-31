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
    description: 'Higher conversion rate'
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
    description: 'Zero commission'
  },
  {
    icon: TrendingUp,
    number: '10x',
    label: 'Scale Better',
    description: 'More capacity'
  }
]

export default function ProblemSolution() {
  return (
    <section id="problems" className="py-20 md:py-40 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-28">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-5 md:mb-7">
            Real Problems You Face
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Selling on WhatsApp, Instagram, or Telegram is limiting. Here are the exact problems we solve.
          </p>
        </div>

        {/* Problem-Solution Grid - CLEAN & SIMPLE */}
        <div className="space-y-4 md:space-y-5 mb-20 md:mb-32">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
            >
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                
                {/* Left: Problem */}
                <div className="flex gap-4 md:gap-5">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-red-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7 text-red-600" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Problem</p>
                    <h3 className="text-lg md:text-xl font-bold text-black mb-2">{item.problem}</h3>
                    <p className="text-sm md:text-base text-gray-600">{item.detail}</p>
                  </div>
                </div>

                {/* Right: Solution */}
                <div className="flex gap-4 md:gap-5">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Solution</p>
                    <h3 className="text-lg md:text-xl font-bold text-black mb-3">{item.solution}</h3>
                    <div className="inline-block">
                      <span className="text-sm md:text-base font-bold text-blue-600 bg-blue-50 px-3 md:px-4 py-1.5 md:py-2 rounded-md">
                        {item.impact}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Results Stats - DARK PROFESSIONAL CARD */}
        <div className="bg-slate-900 rounded-2xl p-10 md:p-16 text-white">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Results From Real Sellers</h3>
            <p className="text-base md:text-lg text-gray-400">Proven metrics from beta testing with early members</p>
          </div>
          
          {/* Results Grid - LARGER & CLEANER */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {results.map((result, index) => (
              <div 
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl p-7 md:p-10 text-center hover:border-slate-600 transition-all duration-200"
              >
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-5 md:mb-8">
                  <result.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                
                {/* Big Number */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-white">{result.number}</div>
                
                {/* Label */}
                <div className="text-lg md:text-xl font-bold mb-2 text-white">{result.label}</div>
                
                {/* Description */}
                <div className="text-sm md:text-base text-gray-400">{result.description}</div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="border-t border-slate-700 pt-8 md:pt-12 text-center">
            <p className="text-sm md:text-base text-gray-400">
              Note: Results are based on beta testing. Your results may vary depending on implementation and market conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}