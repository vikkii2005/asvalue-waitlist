import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Features />
      <WaitlistForm />
      
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">AsValue</h3>
          <p className="text-slate-400 text-sm mb-4">
            Professional WhatsApp selling platform
          </p>
          <p className="text-slate-500 text-xs">
            © 2025 AsValue. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}