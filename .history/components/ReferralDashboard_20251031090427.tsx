'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { Copy, Facebook, Twitter, Mail, TrendingUp } from 'lucide-react'
import toast from 'react-hot-toast'

interface Props {
  referralCode: string
  email: string
}

export default function ReferralDashboard({ referralCode, email }: Props) {
  const [position, setPosition] = useState<number>(0)
  const [referralCount, setReferralCount] = useState<number>(0)

  const referralUrl = `${process.env.NEXT_PUBLIC_SITE_URL}?ref=${referralCode}`

  const fetchUserData = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .select('position, referral_count')
        .eq('email', email)
        .single()

      if (error) throw error
      
      if (data) {
        setPosition(data.position)
        setReferralCount(data.referral_count)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }, [email])

  useEffect(() => {
    fetchUserData()
  }, [fetchUserData])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralUrl)
    toast.success('Link copied!')
  }

  const shareText = 'Check out AsValue - a professional WhatsApp selling platform. Join the waitlist!'

  return (
    <section className="py-16 px-4 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 border border-slate-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">You&apos;re On the List!</h2>
            <p className="text-slate-600">
              Share with friends to move up
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-indigo-50 rounded-lg p-5 text-center border border-indigo-200">
              <TrendingUp className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-indigo-600">#{position}</div>
              <div className="text-xs text-slate-600 mt-1">Your Position</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-5 text-center border border-purple-200">
              <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-purple-600">{referralCount}</div>
              <div className="text-xs text-slate-600 mt-1">Referrals</div>
            </div>
          </div>

          {/* Referral Benefits */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
            <p className="text-sm font-medium text-slate-900 mb-3">For every 5 friends you refer:</p>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Skip ahead in the waitlist</li>
              <li>• Get 1 month extra free subscription</li>
            </ul>
          </div>

          {/* Referral Link */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Your Referral Link
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={referralUrl}
                readOnly
                className="flex-1 px-3 py-2 border border-slate-300 rounded-lg bg-slate-50 text-xs font-mono"
              />
              <button
                onClick={copyToClipboard}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-1 text-sm transition-all"
              >
                <Copy className="w-3 h-3" />
                Copy
              </button>
            </div>
          </div>

          {/* Social Share */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Share
            </label>
            <div className="grid grid-cols-3 gap-2">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-xs font-medium transition-all"
              >
                <Twitter className="w-3 h-3" />
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 bg-blue-700 hover:bg-blue-800 text-white py-2 rounded text-xs font-medium transition-all"
              >
                <Facebook className="w-3 h-3" />
                Facebook
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent('Join AsValue')}&body=${encodeURIComponent(shareText + ' ' + referralUrl)}`}
                className="flex items-center justify-center gap-1 bg-slate-700 hover:bg-slate-800 text-white py-2 rounded text-xs font-medium transition-all"
              >
                <Mail className="w-3 h-3" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}