'use client'

import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-6">
          <Zap className="w-4 h-4 text-indigo-600" />
          <span className="text-sm font-medium text-indigo-700">
            Zero Commission • Direct Sales Platform
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Sell Like a Pro on
          <span className="text-indigo-600"> WhatsApp</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your WhatsApp business with professional seller profiles, 
          automated messaging, and order management. No more chaos, just easy sales.
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <button 
            onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all transform hover:scale-105"
          >
            Join the Waitlist
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-gray-500">
            🎁 Early members get 6 months free + founding member perks
          </p>
        </div>
      </div>
    </section>
  )
}