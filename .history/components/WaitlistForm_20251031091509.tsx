'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import toast, { Toaster } from 'react-hot-toast'
import { Loader2, Mail, User, Shield, CheckCircle } from 'lucide-react'
import ReferralDashboard from './ReferralDashboard'

export default function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [referralCode, setReferralCode] = useState<string | null>(null)
  const [showDashboard, setShowDashboard] = useState(false)
  const [userReferralCode, setUserReferralCode] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')
    if (ref) {
      setReferralCode(ref)
      localStorage.setItem('referralCode', ref)
    }
  }, [])

  const generateReferralCode = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const newReferralCode = generateReferralCode()
      
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            email,
            full_name: fullName,
            referral_code: newReferralCode,
            referred_by: referralCode || null
          }
        ])
        .select()

      if (error) throw error

      if (referralCode) {
        await supabase.rpc('increment_referral_count', {
          ref_code: referralCode
        })
      }

      setUserReferralCode(newReferralCode)
      setShowDashboard(true)
      toast.success('Welcome! You&apos;re on the waitlist.')
      
    } catch (error: unknown) {
      const err = error as { code?: string }
      if (err.code === '23505') {
        toast.error('This email is already on our waitlist.')
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  if (showDashboard) {
    return <ReferralDashboard referralCode={userReferralCode} email={email} />
  }

  return (
    <section id="waitlist-form" className="py-32 px-4 bg-linear-to-b from-white to-slate-50">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Join the Waitlist Today
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Be among the first to use AsValue when we launch. Early members get exclusive benefits that won&apos;t be available later.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border border-slate-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-3">
              Get Early Access
            </h3>
            <p className="text-slate-600 text-lg mb-8">
              Join now and unlock exclusive founding member benefits
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-base font-semibold text-slate-700 mb-3">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-14 pr-4 py-4 bg-slate-50 border-2 border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder-slate-400"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-base font-semibold text-slate-700 mb-3">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-14 pr-4 py-4 bg-slate-50 border-2 border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder-slate-400"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:scale-100"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Get Early Access
                    <CheckCircle className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {referralCode && (
              <div className="mt-6 bg-green-50 border-2 border-green-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-green-800 text-center">
                  ✨ You were referred! You&apos;ll both get bonus perks.
                </p>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="bg-linear-to-br from-indigo-50 to-indigo-100 rounded-3xl p-10 border-2 border-indigo-200">
              <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-indigo-600" />
                Founding Member Benefits
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-900 font-medium">3 months free subscription</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-900 font-medium">Priority support for life</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-900 font-medium">Founding member badge on profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-900 font-medium">Early access to all new features</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-slate-900 font-medium">50% discount on upgrades forever</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6">
              <p className="text-base text-slate-900 leading-relaxed">
                <strong>⚡ Limited Time Only:</strong> These founding member benefits are exclusive to the first 5,000 members. Once we launch publicly, new members won&apos;t receive these perks.
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6">
              <p className="text-sm text-slate-600 text-center">
                ✓ No credit card required  
                ✓ Cancel anytime  
                ✓ Unsubscribe at any time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}