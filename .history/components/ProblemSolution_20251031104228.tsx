'use client'

import { AlertCircle, CheckCircle2, Clock, DollarSign, TrendingDown, TrendingUp, Users2, Target } from 'lucide-react'

const problems = [
  { icon: Users2, problem: 'Scattered Customers', detail: 'WhatsApp, Instagram, Telegram chaos', solution: 'Unified platform for all chats', impact: 'Save 10+ hours weekly' },
  { icon: AlertCircle, problem: 'Unprofessional Setup', detail: 'DMs look messy, lose trust', solution: 'Branded professional profile', impact: '3x higher conversions' },
  { icon: TrendingDown, problem: 'Lost Products', detail: 'No product catalog system', solution: 'Smart product catalog', impact: '2x more engagement' },
  { icon: DollarSign, problem: 'Commission Loss', detail: 'Apps charge 2–5% per sale', solution: 'Zero commission direct pay', impact: 'Keep 100% revenue' },
  { icon: Clock, problem: 'Wasted Hours', detail: 'Manual tracking & replies', solution: 'Automation tools', impact: 'Save 5+ hours daily' },
  { icon: TrendingUp, problem: 'Can’t Scale', detail: 'More customers = more chaos', solution: 'Scalable system', impact: '10x easier scaling' }
]

const results = [
  { icon: Target, number: '3x', label: 'More Sales' },
  { icon: Clock, number: '5h', label: 'Saved Daily' },
  { icon: DollarSign, number: '100%', label: 'Revenue Kept' },
  { icon: TrendingUp, number: '10x', label: 'Growth Potential' }
]

export default function ProblemSolution() {
  return (
    <section id="problems" className="py-20 bg-neutral-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">Real Problems. Real Solutions.</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Thousands of sellers face these issues — AsValue fixes them all with one system.
          </p>
        </div>

        <div className="space-y-5 mb-20">
          {problems.map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-sm transition-all">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <item.icon className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.problem}</h3>
                    <p className="text-sm text-slate-600">{item.detail}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.solution}</h3>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md">{item.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-10 text-center">
          <h3 className="text-2xl font-semibold mb-8">Results from Beta Sellers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <div key={i} className="bg-slate-800 rounded-lg p-5 border border-slate-700 hover:border-slate-600 transition">
                <r.icon className="w-6 h-6 text-indigo-300 mx-auto mb-2" />
                <div className="text-2xl font-bold mb-1">{r.number}</div>
                <p className="text-sm text-slate-300">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}