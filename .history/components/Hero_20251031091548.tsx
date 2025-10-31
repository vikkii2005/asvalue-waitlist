'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-slate-50 via-white to-slate-50 px-4 py-20 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative max-w-6xl mx-auto w-full">
        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-8">
            <MessageCircle className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600">Professional WhatsApp Selling</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight">
            Sell on WhatsApp
            <br />
            <span className="bg-linear-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Like a Real Business
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 mb-6 max-w-4xl mx-auto leading-relaxed">
            Stop juggling WhatsApp messages. Get automated templates, professional profiles, order tracking, and direct payments. Keep 100% of your revenue.
          </p>

          <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto">
            Built for anyone selling online — from small businesses to established sellers who want to scale faster.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-xl font-semibold text-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join Waitlist Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white hover:bg-slate-50 text-slate-700 border-2 border-slate-300 px-10 py-5 rounded-xl font-semibold text-lg transition-all shadow-sm hover:shadow-md"
            >
              See Why It Works
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No Credit Card Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free to Join Waitlist</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Early Member Exclusive Benefits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}