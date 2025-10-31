import { AlertCircle, CheckCircle2, Clock, DollarSign, TrendingDown, Users2, TrendingUp } from 'lucide-react'

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

        {/* Results Stats */}
        <div className="mt-12 md:mt-20 bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Real Results</h3>
            <p className="text-sm md:text-lg text-indigo-100">From sellers using AsValue</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-4 md:p-6 border border-white border-opacity-20">
              <div className="text-3xl md:text-4xl font-bold mb-2">3x</div>
              <div className="text-xs md:text-sm font-semibold">More Sales</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-4 md:p-6 border border-white border-opacity-20">
              <div className="text-3xl md:text-4xl font-bold mb-2">5hrs</div>
              <div className="text-xs md:text-sm font-semibold">Saved Daily</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-4 md:p-6 border border-white border-opacity-20">
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-xs md:text-sm font-semibold">Revenue Kept</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-4 md:p-6 border border-white border-opacity-20">
              <div className="text-3xl md:text-4xl font-bold mb-2">10x</div>
              <div className="text-xs md:text-sm font-semibold">Scale Better</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}