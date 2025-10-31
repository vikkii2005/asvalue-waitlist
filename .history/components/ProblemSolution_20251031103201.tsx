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

        {/* Problem-Solution Grid - PROFESSIONAL LAYOUT */}
        <div className="space-y-3 md:space-y-4 mb-16 md:mb-24">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-5 md:p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              {/* Two Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Left: Problem */}
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="shrink-0 pt-0.5">
                    <div className="w-10 h-10 md:w-11 md:h-11 bg-red-50 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wide mb-1">Problem</p>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1">{item.problem}</h3>
                    <p className="text-sm text-slate-600">{item.detail}</p>
                  </div>
                </div>

                {/* Right: Solution */}
                <div className="flex gap-4">
                  {/* Icon */}
                  <div className="shrink-0 pt-0.5">
                    <div className="w-10 h-10 md:w-11 md:h-11 bg-emerald-50 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-wide mb-1">Solution</p>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{item.solution}</h3>
                    <div className="inline-block">
                      <span className="text-xs md:text-sm font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                        {item.impact}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Results Stats - PROFESSIONAL CARD STYLE */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-lg">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Results From Real Sellers</h3>
            <p className="text-sm text-slate-400 font-medium">Proven metrics from beta testing with early members</p>
          </div>
          
          {/* Results Grid - CLEAN & PROFESSIONAL */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {results.map((result, index) => (
              <div 
                key={index}
                className="bg-slate-800 rounded-xl p-5 md:p-6 border border-slate-700 text-center hover:border-slate-600 transition-all"
              >
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <result.icon className="w-5 h-5 md:w-6 md:h-6 text-slate-300" />
                </div>
                
                {/* Big Number */}
                <div className="text-2xl md:text-3xl font-bold mb-1 text-white">{result.number}</div>
                
                {/* Label */}
                <div className="text-sm font-semibold mb-1 text-slate-200">{result.label}</div>
                
                {/* Description */}
                <div className="text-xs text-slate-400">{result.description}</div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-slate-700 text-center">
            <p className="text-xs md:text-sm text-slate-400">
              Note: Results are based on beta testing. Your results may vary depending on implementation and market conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}