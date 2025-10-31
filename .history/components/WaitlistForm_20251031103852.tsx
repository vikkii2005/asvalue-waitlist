'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import toast, { Toaster } from 'react-hot-toast'
import { Loader2, Mail, User, Shield, CheckCircle, Clock, Award, Lock } from 'lucide-react'
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

  const generateReferralCode = () => Math.random().toString(36).substring(2, 10).toUpperCase()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (!email) {
        toast.error('Email is required')
        setLoading(false)
        return
      }

      const newReferralCode = generateReferralCode()

      const { error } = await supabase
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

      if (error) throw error

      if (referralCode) {
        await supabase.rpc('increment_referral_count', { ref_code: referralCode })
      }

      setUserReferralCode(newReferralCode)
      setShowDashboard(true)
      toast.success('🎉 You’re on the waitlist!')
    } catch (err: any) {
      if (err.code === '23505') toast.error('This email is already registered.')
      else toast.error('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  if (showDashboard) return <ReferralDashboard referralCode={userReferralCode} email={email} />

  return (
    <section id="waitlist-form" className="py-16 md:py-28 px-4 bg-gradient-to-b from-white to-slate-50">
      <Toaster position="top-center" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Join the Waitlist
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Be one of the first 100 sellers to receive <strong>6 months free</strong> + early member perks.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Form Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all p-6 md:p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Early Access Form</h3>
            <p className="text-slate-600 mb-6">Founding members enjoy premium access at zero cost.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 text-sm transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 text-sm transition"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-transform active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    Join Waitlist <CheckCircle className="w-4 h-4" />
                  </>
                )}
              </button>

              {referralCode && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center text-sm text-green-700 font-medium">
                  ✨ You were referred by a friend — both of you get perks!
                </div>
              )}
            </form>

            {/* Trust Icons */}
            <div className="mt-8 border-t border-slate-200 pt-5">
              <div className="flex flex-wrap justify-center gap-5 text-slate-600 text-xs font-medium">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-green-600" /> Secure
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-600" /> Private
                </div>
                <div className="flex items-center gap-1">
                  <Lock className="w-4 h-4 text-green-600" /> Encrypted
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Side */}
          <div className="space-y-6">
            {/* Founding Benefits */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <Award className="w-6 h-6 text-indigo-600" />
                <h4 className="text-xl font-semibold text-slate-900">Founding Member Benefits</h4>
              </div>
              <ul className="space-y-3 text-slate-700 text-sm">
                <li>✅ 6 Months Free Access</li>
                <li>✅ Lifetime Priority Support</li>
                <li>✅ Founder Badge on Profile</li>
                <li>✅ 50% Lifetime Discount After Trial</li>
              </ul>
            </div>

            {/* Urgency */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-3 items-start">
              <Clock className="w-5 h-5 text-amber-600 mt-1" />
              <div>
                <p className="font-semibold text-slate-900 text-sm">Limited to 100 Sellers</p>
                <p className="text-slate-600 text-xs mt-1">
                  After 100 sign-ups, new users lose early perks.
                </p>
              </div>
            </div>

            {/* Zero Risk */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 flex gap-3 items-start">
              <Shield className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <p className="font-semibold text-slate-900 text-sm mb-1">Zero Risk</p>
                <ul className="text-slate-600 text-xs space-y-1">
                  <li>• No credit card required</li>
                  <li>• Cancel anytime</li>
                  <li>• 100% free for 6 months</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}