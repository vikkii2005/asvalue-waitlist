import {
  AlertCircle,
  CheckCircle2,
  Clock,
  DollarSign,
  TrendingDown,
  TrendingUp,
  Users2,
  Target,
} from 'lucide-react'

const problems = [
  {
    icon: Users2,
    problem: 'Scattered Customers',
    detail: 'WhatsApp, Instagram, Telegram - no system',
    solution: 'Unified platform for all channels',
    impact: 'Save 10+ hours weekly',
  },
  {
    icon: AlertCircle,
    problem: 'Unprofessional Setup',
    detail: 'DMs and comments look unorganized',
    solution: 'Branded seller profile',
    impact: '3x higher conversions',
  },
  {
    icon: TrendingDown,
    problem: 'Lost Products',
    detail: 'No catalog, customers keep asking',
    solution: 'Smart product catalog',
    impact: '2x more engagement',
  },
  {
    icon: DollarSign,
    problem: 'Commission Loss',
    detail: 'Payment apps charge 2–5% fees',
    solution: 'Direct payments, zero commission',
    impact: 'Keep 100% revenue',
  },
  {
    icon: Clock,
    problem: 'Wasted Hours',
    detail: 'Manual tracking and repeated replies',
    solution: 'Automation & smart dashboard',
    impact: 'Save 5+ hours daily',
  },
  {
    icon: TrendingUp,
    problem: 'Can’t Scale',
    detail: 'More customers = more chaos',
    solution: 'System that scales effortlessly',
    impact: 'Handle 10x customers',
  },
]

const results = [
  {
    icon: Target,
    number: '3x',
    label: 'More Sales',
    description: 'Higher conversion rate',
  },
  {
    icon: Clock,
    number: '5hrs',
    label: 'Saved Daily',
    description: 'Less manual work',
  },
  {
    icon: DollarSign,
    number: '100%',
    label: 'Revenue Kept',
    description: 'Zero commission',
  },
  {
    icon: TrendingUp,
    number: '10x',
    label: 'Scale Better',
    description: 'Serve more customers',
  },
]

export default function ProblemSolution() {
  return (
    <section id="problems" className="py-20 md:py-32 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-3">
            Real Problems. Real Solutions.
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Sellers across WhatsApp, Instagram, and Telegram face these same
            issues — here’s how we solve them with one professional system.
          </p>
        </div>

        {/* Problem/Solution List */}
        <div className="space-y-5 mb-24">
          {problems.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Problem */}
                <div className="flex gap-4">
                  <item.icon className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 mb-1">
                      Problem
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.problem}
                    </h3>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <p className="text-xs uppercase font-medium text-gray-500 mb-1">
                      Solution
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.solution}
                    </h3>
                    <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                      {item.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Section */}
        <div className="bg-gray-900 rounded-xl p-10 text-white">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-semibold mb-1">
              Results from Real Sellers
            </h3>
            <p className="text-sm text-gray-400">
              Proven performance from early beta users
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {results.map((res, i) => (
              <div
                key={i}
                className="bg-gray-800 border border-gray-700 rounded-lg p-5 text-center hover:border-gray-600 transition"
              >
                <res.icon className="w-6 h-6 text-gray-300 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">
                  {res.number}
                </div>
                <div className="text-sm font-semibold text-gray-200 mb-1">
                  {res.label}
                </div>
                <div className="text-xs text-gray-400">{res.description}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 pt-8 border-t border-gray-700">
            <p className="text-xs text-gray-400">
              *Results are based on beta testing; actual outcomes may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}