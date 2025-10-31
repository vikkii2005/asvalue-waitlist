import { AlertCircle, CheckCircle2 } from 'lucide-react'

const problems = [
  {
    problem: 'Sending messages manually to every customer, wasting 3+ hours daily',
    solution: 'Template automation sends personalized messages instantly to all customers'
  },
  {
    problem: 'Order tracking chaos - customers constantly asking "Where is my order?"',
    solution: 'Automated order tracking with real-time updates sent directly to customers'
  },
  {
    problem: 'Products scattered across WhatsApp status and chats - customers can&apos;t browse',
    solution: 'Instagram-style profile showcasing all products in one beautiful, browsable catalog'
  },
  {
    problem: 'Expensive AI chatbots costing ₹5000+/month with poor results',
    solution: 'Smart templates that work perfectly at zero per-message cost'
  },
  {
    problem: 'Lost sales because business looks unprofessional on WhatsApp',
    solution: 'Professional seller profile builds trust and increases conversion by 3x'
  },
  {
    problem: 'Payment processors taking 2-5% commission on every sale',
    solution: 'Direct payments to you - we only charge a small monthly subscription'
  }
]

export default function ProblemSolution() {
  return (
    <section id="problems" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            We Solve Real Problems
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every WhatsApp seller faces the same frustrations. AsValue eliminates them all with one powerful platform.
          </p>
        </div>

        {/* Problem-Solution Grid */}
        <div className="space-y-6">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="grid md:grid-cols-2 gap-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all"
            >
              {/* Problem */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">The Problem:</p>
                  <p className="text-slate-600">{item.problem}</p>
                </div>
              </div>

              {/* Solution */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-indigo-600 mb-1">Our Solution:</p>
                  <p className="text-slate-700 font-medium">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">3x</div>
            <div className="text-sm text-slate-600">More Sales</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">5hrs</div>
            <div className="text-sm text-slate-600">Saved Daily</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">0%</div>
            <div className="text-sm text-slate-600">Commission</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
            <div className="text-sm text-slate-600">Your Profits</div>
          </div>
        </div>
      </div>
    </section>
  )
}