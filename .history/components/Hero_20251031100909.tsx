'use client'

import { ArrowRight, MessageCircle, Zap, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-slate-50 via-white to-slate-50 px-4 py-20 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-5 py-3 rounded-full mb-8 border border-indigo-200">
            <Zap className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-bold text-indigo-600">First 100 Sellers: 6 Months Free Premium Access</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight">
            Stop Selling Unprofessionally on
            <br />
            <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              WhatsApp, Instagram, Telegram
            </span>
          </h1>
          
          {/* Subheading with Value Prop */}
          <p className="text-lg md:text-2xl text-slate-700 mb-6 max-w-4xl mx-auto leading-relaxed font-medium">
            AsValue is your independent business platform. Sell professionally, keep 100% of revenue, scale without limits.
          </p>

          {/* Problem to Solution */}
          <p className="text-base md:text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your customers are scattered across messaging apps. Your business looks unprofessional. You're losing sales. We solve that.
          </p>
          
          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-xl font-bold text-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105 active:scale-95"
            >
              Get 6 Months Free Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-300 px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              See How It Works
            </button>
          </div>

          {/* Trust Indicators - Enterprise Style */}
          <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 mb-8 shadow-sm">
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <Users className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-900">500+ Sellers</p>
                <p className="text-xs text-slate-600">Already waiting</p>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-900">100% Free</p>
                <p className="text-xs text-slate-600">First 6 months</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-900">Zero Commission</p>
                <p className="text-xs text-slate-600">Keep all revenue</p>
              </div>
            </div>
          </div>

          {/* Safety Message */}
          <div className="text-sm text-slate-600">
            ✓ No credit card required  •  ✓ 100% free forever (after 6 months)  •  ✓ Cancel anytime
          </div>
        </div>
      </div>
    </section>
  )
}