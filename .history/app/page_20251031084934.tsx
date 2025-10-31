import Hero from '@/components/Hero'
import Features from '@/components/Features'
import WaitlistForm from '@/components/WaitlistForm'
import CountdownTimer from '@/components/CountdownTimer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <CountdownTimer />
      <WaitlistForm />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">AsValue.com</h3>
          <p className="text-gray-400">
            Professional WhatsApp selling platform • Zero commission • Subscription-based
          </p>
          <p className="text-gray-500 mt-4 text-sm">
            © 2025 AsValue. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}