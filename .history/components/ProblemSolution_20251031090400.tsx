import { AlertCircle, CheckCircle2 } from 'lucide-react'

const problems = [
  {
    problem: 'Manual messaging costs 3+ hours daily',
    solution: 'Templates send bulk messages instantly'
  },
  {
    problem: 'Customers ask "where is my order?" repeatedly',
    solution: 'Automatic order status updates to customers'
  },
  {
    problem: 'Products hidden in chats - customers can&apos;t browse',
    solution: 'Professional profile displaying all products'
  },
  {
    problem: 'Payment processors take 2-5% commission',
    solution: 'Direct payments - we only charge monthly subscription'
  },
  {
    problem: 'No order tracking or inventory management',
    solution: 'Built-in dashboard to manage everything'
  },
  {
    problem: 'Business looks unprofessional on WhatsApp',
    solution: 'Professional seller profile builds customer trust'
  }
]

export default function ProblemSolution() {
  return (
    <section id="problems" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            WhatsApp Sellers Face Real Problems
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We built AsValue to solve these specific issues.
          </p>
        </div>

        <div className="space-y-4">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className="grid md:grid-cols-2 gap-6 bg-slate-50 rounded-lg p-5 border border-slate-200"
            >
              <div className="flex gap-3">
                <div className="shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{item.problem}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-indigo-600 text-sm">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}