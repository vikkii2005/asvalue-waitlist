'use client'

import { ArrowRight, CheckCircle, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50 px-4 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Trust Indicators */}
        <div className="flex justify-center items-center gap-6 mb-8">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-slate-200">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-slate-700">Trusted by 1000+ sellers</span>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-slate-200">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-slate-700">Zero Commission</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            Stop Losing Sales
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Start Selling Smart
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            AsValue transforms chaotic WhatsApp selling into a professional business with Instagram-style profiles, automated messaging, and seamless order management.
          </p>

          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            Join thousands of WhatsApp sellers who eliminated manual messaging chaos and now close 3x more sales with our all-in-one platform.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Waitlist - Get 6 Months Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              See How It Works
            </button>
          </div>

          {/* Early Bird Benefits */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 px-6 py-3 rounded-full">
            <span className="text-2xl">🎁</span>
            <span className="text-sm font-medium text-slate-700">
              <strong>Early members only:</strong> 6 months free + lifetime founding member perks + priority support
            </span>
          </div>
        </div>

        {/* Mock Dashboard Preview */}
        <div className="mt-16 relative">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">📱</span>
                </div>
                <p className="text-slate-600 font-medium">Platform Preview Coming Soon</p>
              </div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-slate-200">
            <p className="text-sm font-semibold text-green-600">✓ No Manual Messages</p>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2 border border-slate-200">
            <p className="text-sm font-semibold text-blue-600">✓ Auto Order Tracking</p>
          </div>
        </div>
      </div>
    </section>
  )
}