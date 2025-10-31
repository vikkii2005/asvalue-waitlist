'use client'

import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50 px-4 py-20">
      <div className="relative max-w-6xl mx-auto w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-8 border border-indigo-100">
          <Zap className="w-4 h-4 text-indigo-600" />
          <span className="font-semibold text-indigo-600">First 100 Sellers: 6 Months Free</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
          Stop Selling Unprofessionally <br />
          <span className="text-indigo-600">Everywhere</span>
        </h1>

        <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto mb-8">
          AsValue is your independent business platform — sell professionally and keep 100% of your revenue.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow hover:shadow-lg active:scale-95 transition-all"
          >
            Get 6 Months Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg shadow-sm hover:shadow-md active:scale-95 transition-all"
          >
            See How It Works
          </button>
        </div>

        <div className="grid grid-cols-3 max-w-lg mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="text-center">
            <Users className="w-6 h-6 text-indigo-600 mx-auto mb-1" />
            <p className="text-sm font-semibold text-slate-900">New Sellers</p>
            <p className="text-xs text-slate-600">Joining Daily</p>
          </div>
          <div className="text-center">
            <Zap className="w-6 h-6 text-indigo-600 mx-auto mb-1" />
            <p className="text-sm font-semibold text-slate-900">6 Months</p>
            <p className="text-xs text-slate-600">Completely Free</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-6 h-6 text-indigo-600 mx-auto mb-1" />
            <p className="text-sm font-semibold text-slate-900">0% Fees</p>
            <p className="text-xs text-slate-600">Always</p>
          </div>
        </div>
      </div>
    </section>
  )
}