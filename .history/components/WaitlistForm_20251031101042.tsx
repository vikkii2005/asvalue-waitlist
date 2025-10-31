'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import toast, { Toaster } from 'react-hot-toast'
import { Loader2, Mail, User, Shield, CheckCircle, Zap, Clock, Award } from 'lucide-react'
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
      if (!email) {
        toast.error('Email is required')
        setLoading(false)
        return
      }

      if (!supabase) {
        toast.error('Supabase not initialized')
        setLoading(false)
        return
      }

      const newReferralCode = generateReferralCode()

      const { error: insertError } = await supabase
        .from('waitlist')
        .insert([
          {
            email: email.toLowerCase(),
            full_name: fullName || null,
            referral_code: newReferralCode,
            referred_by: referralCode || null,
            referral_count: 0,
            position: 0
          }
        ])

      if (insertError) throw insertError

      if (referralCode) {
        await supabase.rpc('increment_referral_count', {
          ref_code: referralCode
        })
      }

      setUserReferralCode(newReferralCode)
      setShowDashboard(true)
      toast.success('🎉 Welcome! You\'re on the waitlist.')
      
    } catch (error: unknown) {
      const err = error as { code?: string; message?: string }
      
      if (err.code === '23505') {
        toast.error('This email is already on our waitlist.')
      } else {
        toast.error(`Error: ${err.message || 'Something went wrong'}`)
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Join The Future of Online Selling
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Be among the first 100 sellers to get 6 months of premium features for free. Early member exclusive benefits.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Left: Sign Up Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-slate-200 h-fit">
            <h3 className="text-3xl font-bold text-slate-900 mb-3">
              Get Early Access
            </h3>
            <p className="text-slate-600 text-lg mb-8 font-semibold">
              Unlock 6 months of premium features + founding member perks
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name Input */}
              <div>
                <label className="block text-base font-bold text-slate-700 mb-3">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-14 pr-4 py-4 bg-slate-50 border-2 border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder-slate-400 font-medium"
                    placeholder="John Seller"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-base font-bold text-slate-700 mb-3">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-14 pr-4 py-4 bg-slate-50 border-2 border-slate-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900 placeholder-slate-400 font-medium"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105 disabled:scale-100 active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Get 6 Months Free
                    <CheckCircle className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Referral Alert */}
              {referralCode && (
                <div className="bg-green-50 border-2 border-green-300 rounded-xl p-4">
                  <p className="text-sm font-bold text-green-800 text-center">
                    ✨ Referred by a friend! You both get bonus perks.
                  </p>
                </div>
              )}
            </form>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t-2 border-slate-200">
              <p className="text-xs font-bold text-slate-600 uppercase tracking-wide mb-4">Protected by</p>
              <div className="flex gap-4 justify-center">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <Shield className="w-4 h-4 text-green-600" />
                  Secure
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  Privacy First
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <Lock className="w-4 h-4 text-green-600" />
                  Encrypted
                </div>
              </div>
            </div>
          </div>

          {/* Right: Benefits Section */}
          <div className="space-y-6">
            {/* Main Benefits Box */}
            <div className="bg-linear-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-3xl p-10 border-2 border-indigo-300 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-indigo-600" />
                <h4 className="text-2xl font-bold text-slate-900">Founding Member Benefits</h4>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-md">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">6 Months Free Premium</p>
                    <p className="text-sm text-slate-700">All features, zero cost. Value: $300</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-md">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Lifetime Priority Support</p>
                    <p className="text-sm text-slate-700">Direct access to our team, always</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-md">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Founding Member Badge</p>
                    <p className="text-sm text-slate-700">Display on your profile forever</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-md">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Early Access to New Features</p>
                    <p className="text-sm text-slate-700">First to use everything we build</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center shrink-0 mt-1 shadow-md">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">50% Lifetime Discount</p>
                    <p className="text-sm text-slate-700">Forever 50% off when free period ends</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Urgency Box */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-2xl p-6 shadow-md">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-slate-900 mb-1">Only 100 Spots Available</p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    After 100 sellers join, new members won't get these benefits. This offer is limited.
                  </p>
                </div>
              </div>
            </div>

            {/* Zero Risk Box */}
            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-slate-900 mb-2">Zero Risk Guarantee</p>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>✓ No credit card required</li>
                    <li>✓ Cancel anytime, no questions</li>
                    <li>✓ After 6 months, pay only if you love it</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats Box */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-100 rounded-xl p-6 text-center border-2 border-indigo-300">
                <Zap className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                <p className="font-bold text-slate-900">500+</p>
                <p className="text-xs text-slate-700">Sellers Waiting</p>
              </div>
              <div className="bg-purple-100 rounded-xl p-6 text-center border-2 border-purple-300">
                <Award className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="font-bold text-slate-900">First 100</p>
                <p className="text-xs text-slate-700">Get Premium Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}