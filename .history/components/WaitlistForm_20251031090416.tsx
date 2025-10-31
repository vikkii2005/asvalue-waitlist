'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import toast, { Toaster } from 'react-hot-toast'
import { Loader2, Mail, User, Shield } from 'lucide-react'
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
      toast.success('You&apos;re on the waitlist!')
      
    } catch (error: unknown) {
      const err = error as { code?: string }
      if (err.code === '23505') {
        toast.error('This email is already on our list.')
      } else {
        toast.error('Something went wrong. Try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  if (showDashboard) {
    return <ReferralDashboard referralCode={userReferralCode} email={email} />
  }

  return (
    <section id="waitlist-form" className="py-16 px-4 bg-linear-to-b from-white to-slate-50">
      <Toaster position="top-center" />
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Join the Waitlist
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Be among the first to use AsValue when we launch. Early members get special benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Form */}
          <div className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Get Early Access
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Join now and get exclusive early member benefits
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="Your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Joining...
                  </>
                ) : (
                  'Get Early Access'
                )}
              </button>
            </form>

            {referralCode && (
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-xs font-medium text-green-800 text-center">
                  You were referred! You&apos;ll both move up the list.
                </p>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-indigo-600" />
                Early Member Benefits
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="text-slate-700">• 3 months free subscription</li>
                <li className="text-slate-700">• Priority support when we launch</li>
                <li className="text-slate-700">• Founding member badge</li>
                <li className="text-slate-700">• First access to new features</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-xs text-slate-700">
                <strong>Limited Spots:</strong> These benefits are only for early members. After launch, benefits may change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}