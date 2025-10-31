import { AlertCircle, CheckCircle2 } from 'lucide-react'

const problems = [
  {
    problem: 'Spend hours daily replying to repetitive messages',
    solution: 'Automated templates send bulk responses instantly'
  },
  {
    problem: 'Customers constantly asking "where is my order?"',
    solution: 'Automatic order tracking updates sent to customers'
  },
  {
    problem: 'Products scattered in chats - no proper catalog',
    solution: 'Professional profile showcasing all products'
  },
  {
    problem: 'Payment platforms take 2-5% commission per sale',
    solution: 'Direct payments to your account - zero commission'
  },
  {
    problem: 'No way to track inventory or sales data',
    solution: 'Built-in dashboard for complete business management'
  },
  {
    problem: 'Business looks unprofessional on WhatsApp',
    solution: 'Professional seller profile builds customer trust instantly'
  }
]

export default function ProblemSolution() {
  return (
    <section id="problems" className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Selling Online Has Real Challenges
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We built AsValue to solve these exact problems that businesses face every day.
          </p>
        </div>

        <div className="space-y-6">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="grid md:grid-cols-2 gap-8 bg-linear-to-r from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all"
            >
              {/* Problem */}
              <div className="flex gap-4">
                <div className="shrink-0 pt-1">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-lg mb-2">The Problem</p>
                  <p className="text-slate-700 text-base leading-relaxed">{item.problem}</p>
                </div>
              </div>

              {/* Solution */}
              <div className="flex gap-4">
                <div className="shrink-0 pt-1">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-indigo-600 text-lg mb-2">AsValue Solution</p>
                  <p className="text-slate-700 text-base leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
          <div className="text-center p-8 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-5xl font-bold text-indigo-600 mb-2">3x</div>
            <div className="text-slate-700 font-medium">More Sales Potential</div>
          </div>
          <div className="text-center p-8 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-5xl font-bold text-indigo-600 mb-2">5hrs</div>
            <div className="text-slate-700 font-medium">Saved Daily</div>
          </div>
          <div className="text-center p-8 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-5xl font-bold text-indigo-600 mb-2">0%</div>
            <div className="text-slate-700 font-medium">Commission on Sales</div>
          </div>
          <div className="text-center p-8 bg-slate-50 rounded-xl border border-slate-200">
            <div className="text-5xl font-bold text-indigo-600 mb-2">100%</div>
            <div className="text-slate-700 font-medium">Your Revenue</div>
          </div>
        </div>
      </div>
    </section>
  )
}