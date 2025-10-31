import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ProblemSolution />
      <Features />
      <WaitlistForm />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                AsValue
              </h3>
              <p className="text-slate-400">
                Professional platform for selling online. Zero commission. Built for your success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Features</h4>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• Seller Profiles</li>
                <li>• Chat Platform</li>
                <li>• Order Management</li>
                <li>• Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• Privacy Policy</li>
                <li>• Terms of Service</li>
                <li>• Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              © 2025 AsValue. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}