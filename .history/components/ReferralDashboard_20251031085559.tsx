'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { Copy, Facebook, Twitter, Mail, Share2, TrendingUp, Award } from 'lucide-react'
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
    toast.success('Link copied to clipboard!')
  }

  const shareText = `Join me on AsValue.com - the WhatsApp selling platform with zero commission! 🚀`

  const getRewardTier = () => {
    if (referralCount >= 25) return 'platinum'
    if (referralCount >= 10) return 'gold'
    if (referralCount >= 3) return 'silver'
    return 'bronze'
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🎉</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-2">You&apos;re In!</h2>
            <p className="text-lg text-slate-600">
              Share your link to skip the line and unlock exclusive rewards
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 text-center border border-indigo-200">
              <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-4xl font-bold text-indigo-600 mb-1">#{position}</div>
              <div className="text-sm font-medium text-slate-600">Waitlist Position</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center border border-purple-200">
              <Share2 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-4xl font-bold text-purple-600 mb-1">{referralCount}</div>
              <div className="text-sm font-medium text-slate-600">Friends Referred</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 text-center border border-yellow-200">
              <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-600 mb-1 uppercase">{getRewardTier()}</div>
              <div className="text-sm font-medium text-slate-600">Reward Tier</div>
            </div>
          </div>

          {/* Rewards Progress */}
          <div className="bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50 rounded-xl p-6 mb-8 border border-orange-200">
            <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
              <span>🎁</span> Your Reward Progress
            </h3>
            <div className="space-y-3">
              <div className={`flex items-center gap-3 p-3 rounded-lg ${referralCount >= 3 ? 'bg-green-100 border border-green-300' : 'bg-white border border-slate-200'}`}>
                <div className="flex-shrink-0">
                  {referralCount >= 3 ? (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
                      <span className="text-slate-600 font-bold text-sm">3</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">Silver Tier: Skip 50 spots</p>
                  <p className="text-sm text-slate-600">{referralCount >= 3 ? 'Unlocked! 🎉' : `${3 - referralCount} more referrals needed`}</p>
                </div>
              </div>
              
              <div className={`flex items-center gap-3 p-3 rounded-lg ${referralCount >= 10 ? 'bg-green-100 border border-green-300' : 'bg-white border border-slate-200'}`}>
                <div className="flex-shrink-0">
                  {referralCount >= 10 ? (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
                      <span className="text-slate-600 font-bold text-xs">10</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">Gold Tier: 1 Year Free Subscription</p>
                  <p className="text-sm text-slate-600">{referralCount >= 10 ? 'Unlocked! 🎉' : `${10 - referralCount} more referrals needed`}</p>
                </div>
              </div>
              
              <div className={`flex items-center gap-3 p-3 rounded-lg ${referralCount >= 25 ? 'bg-green-100 border border-green-300' : 'bg-white border border-slate-200'}`}>
                <div className="flex-shrink-0">
                  {referralCount >= 25 ? (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
                      <span className="text-slate-600 font-bold text-xs">25</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">Platinum Tier: Lifetime Founding Member</p>
                  <p className="text-sm text-slate-600">{referralCount >= 25 ? 'Unlocked! 🎉' : `${25 - referralCount} more referrals needed`}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Link */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Share Your Referral Link
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={referralUrl}
                readOnly
                className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl bg-slate-50 font-mono text-sm"
              />
              <button
                onClick={copyToClipboard}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-xl flex items-center gap-2 font-semibold transition-all"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
          </div>

          {/* Social Share */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Share on Social Media
            </label>
            <div className="grid grid-cols-3 gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl transition-all font-semibold"
              >
                <Twitter className="w-5 h-5" />
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl transition-all font-semibold"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent('Join AsValue.com')}&body=${encodeURIComponent(shareText + ' ' + referralUrl)}`}
                className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-800 text-white py-3 rounded-xl transition-all font-semibold"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}