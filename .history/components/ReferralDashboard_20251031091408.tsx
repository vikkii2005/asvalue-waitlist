'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { Copy, Facebook, Twitter, Mail, TrendingUp, Zap, Award } from 'lucide-react'
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
    toast.success('Referral link copied!')
  }

  const shareText = 'Check out AsValue - a professional platform for selling online. Join the waitlist and get early member benefits!'

  const getRewardTier = () => {
    if (referralCount >= 25) return 'Platinum'
    if (referralCount >= 10) return 'Gold'
    if (referralCount >= 5) return 'Silver'
    return 'Bronze'
  }

  return (
    <section className="py-20 px-4 bg-linear-to-b from-white to-slate-50 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-200">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-linear-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">✓</span>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-3">You&apos;re on the Waitlist!</h2>
            <p className="text-xl text-slate-600">
              Share your link to move up and unlock bonus rewards
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-linear-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 text-center border-2 border-indigo-200">
              <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-indigo-600 mb-2">#{position}</div>
              <div className="text-base font-medium text-slate-700">Waitlist Position</div>
            </div>
            <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center border-2 border-purple-200">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-purple-600 mb-2">{referralCount}</div>
              <div className="text-base font-medium text-slate-700">Friends Referred</div>
            </div>
            <div className="bg-linear-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center border-2 border-yellow-200">
              <Award className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-yellow-600 mb-2">{getRewardTier()}</div>
              <div className="text-base font-medium text-slate-700">Tier Status</div>
            </div>
          </div>

          {/* Reward Progress */}
          <div className="bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 rounded-2xl p-8 mb-10 border-2 border-blue-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Rewards Progress</h3>
            <div className="space-y-4">
              <div className={`flex items-center gap-4 p-5 rounded-xl ${referralCount >= 5 ? 'bg-green-100 border-2 border-green-300' : 'bg-white border-2 border-slate-300'}`}>
                <div className="shrink-0">
                  {referralCount >= 5 ? (
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">5</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900">Silver: Skip 50 spots</p>
                  <p className="text-sm text-slate-600">{referralCount >= 5 ? 'Unlocked! 🎉' : `${5 - referralCount} more referrals needed`}</p>
                </div>
              </div>
              
              <div className={`flex items-center gap-4 p-5 rounded-xl ${referralCount >= 10 ? 'bg-green-100 border-2 border-green-300' : 'bg-white border-2 border-slate-300'}`}>
                <div className="flex-shrink-0">
                  {referralCount >= 10 ? (
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">10</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900">Gold: 1 Year Free</p>
                  <p className="text-sm text-slate-600">{referralCount >= 10 ? 'Unlocked! 🎉' : `${10 - referralCount} more referrals needed`}</p>
                </div>
              </div>
              
              <div className={`flex items-center gap-4 p-5 rounded-xl ${referralCount >= 25 ? 'bg-green-100 border-2 border-green-300' : 'bg-white border-2 border-slate-300'}`}>
                <div className="flex-shrink-0">
                  {referralCount >= 25 ? (
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">25</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900">Platinum: Lifetime Free</p>
                  <p className="text-sm text-slate-600">{referralCount >= 25 ? 'Unlocked! 🎉' : `${25 - referralCount} more referrals needed`}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Referral Link */}
          <div className="mb-8">
            <label className="block text-base font-bold text-slate-700 mb-4">
              Your Personal Referral Link
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={referralUrl}
                readOnly
                className="flex-1 px-5 py-4 bg-slate-100 border-2 border-slate-300 rounded-xl text-slate-800 font-mono text-sm focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={copyToClipboard}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-xl flex items-center gap-2 font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                <Copy className="w-5 h-5" />
                Copy
              </button>
            </div>
          </div>

          {/* Social Share */}
          <div>
            <label className="block text-base font-bold text-slate-700 mb-4">
              Share on Social Media
            </label>
            <div className="grid grid-cols-3 gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Twitter className="w-5 h-5" />
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent('Join AsValue - Professional Online Selling')}&body=${encodeURIComponent(shareText + ' ' + referralUrl)}`}
                className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-800 text-white py-4 rounded-xl transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
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