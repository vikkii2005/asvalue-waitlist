'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import toast, { Toaster } from 'react-hot-toast'
import { Loader2, Mail, User, Shield, Zap } from 'lucide-react'
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
      toast.success('🎉 You&apos;re on the waitlist!')
      
    } catch (error: unknown) {
      const err = error as { code?: string }
      if (err.code === '23505') {
        toast.error('This email is already registered!')
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
    <section id="waitlist-form" className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
      <Toaster position="top-center" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Join 1000+ Sellers on the Waitlist
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Be among the first to transform your WhatsApp business. Early members get exclusive lifetime benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Get Early Access
            </h3>
            <p className="text-slate-600 mb-6">
              Join now and get 6 months completely free
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-400 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Get Early Access
                    <Zap className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>

            {referralCode && (
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm font-medium text-green-800 text-center">
                  ✨ You were referred! You&apos;ll both move up the waitlist and get bonus perks.
                </p>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200">
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                🎁 Early Member Benefits
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>6 months free</strong> subscription (worth ₹6,000)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Lifetime</strong> founding member badge on your profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Priority</strong> customer support forever</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>Exclusive</strong> access to new features first</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>50% discount</strong> on all future upgrades</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <p className="text-sm text-slate-700">
                <strong className="text-slate-900">⚡ Limited Time:</strong> These benefits are only available to the first 5,000 members. After launch, subscription starts at ₹999/month with no free trial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}