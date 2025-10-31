import { AlertCircle, CheckCircle2, Clock, DollarSign, TrendingDown, Users2 } from 'lucide-react'

const problems = [
  {
    icon: Users2,
    problem: 'Customers Scattered Everywhere',
    detail: 'WhatsApp, Instagram, Telegram, Facebook - no centralized system',
    solution: 'One unified platform for all customer interactions',
    impact: 'Save 10+ hours weekly managing multiple apps'
  },
  {
    icon: AlertCircle,
    problem: 'Look Unprofessional',
    detail: 'Selling in DMs and comments doesn\'t build trust',
    solution: 'Professional seller profile like Amazon/Shopify',
    impact: '3x higher conversion rate from professional image'
  },
  {
    icon: TrendingDown,
    problem: 'Products Lost in Chat Chaos',
    detail: 'No catalog = customers ask "what do you have?" repeatedly',
    solution: 'Beautiful product catalog customers love browsing',
    impact: 'Browse experience = 2x more customer engagement'
  },
  {
    icon: DollarSign,
    problem: 'Lose Money to Commissions',
    detail: 'Payment platforms take 2-5% of every sale',
    solution: 'Direct payments with zero commission forever',
    impact: 'Keep 100% of revenue - not 95%'
  },
  {
    icon: Clock,
    problem: 'Waste Hours on Repetitive Work',
    detail: 'Answering same questions, manual order tracking',
    solution: 'Automated templates & complete order dashboard',
    impact: 'Save 5+ hours daily on repetitive tasks'
  },
  {
    icon: TrendingUp,
    problem: 'Can\'t Scale Without Chaos',
    detail: 'More customers = more messages = overwhelmed',
    solution: 'Professional system that scales infinitely',
    impact: 'Handle 10x more customers without stress'
  }
]

export default function ProblemSolution() {
  return (
    <section id="problems" className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Real Problems Sellers Face Every Day
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Selling on WhatsApp, Instagram, or Telegram is limiting. We&apos;ve talked to 500+ sellers. Here are the patterns we see.
          </p>
        </div>

        {/* Problem-Solution Grid - Enterprise Style */}
        <div className="space-y-6">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r from-slate-50 via-slate-50 to-slate-100 rounded-2xl p-8 border-2 border-slate-200 hover:border-indigo-300 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Problem Side */}
                <div className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-7 h-7 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-xl mb-2">The Problem</p>
                    <p className="text-slate-700 text-base leading-relaxed font-semibold mb-2">{item.problem}</p>
                    <p className="text-slate-600 text-sm">{item.detail}</p>
                  </div>
                </div>

                {/* Solution Side */}
                <div className="flex gap-4">
                  <div className="shrink-0 pt-1">
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-7 h-7 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-indigo-600 text-xl mb-2">AsValue Solution</p>
                    <p className="text-slate-700 text-base leading-relaxed font-semibold mb-3">{item.solution}</p>
                    <p className="text-xs font-bold bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full inline-block">{item.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Stats - Enterprise Style */}
        <div className="mt-20 bg-linear-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Results Sellers See with AsValue</h3>
            <p className="text-indigo-100 text-lg max-w-2xl mx-auto">Based on our beta testing with 50+ early sellers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-bold mb-2">3x</div>
              <div className="text-sm font-semibold">More Conversions</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-bold mb-2">5hrs</div>
              <div className="text-sm font-semibold">Saved Daily</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm font-semibold">Revenue Kept</div>
            </div>
            <div className="text-center bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl font-bold mb-2">10x</div>
              <div className="text-sm font-semibold">Scaling Capacity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}