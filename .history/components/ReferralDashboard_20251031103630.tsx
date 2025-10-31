'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import {
  Copy,
  Facebook,
  Twitter,
  Mail,
  TrendingUp,
  Zap,
  Award,
  Share2,
} from 'lucide-react'
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

  const shareText =
    'Just joined AsValue — the professional platform for online sellers. Join now and get 6 months free (only 100 spots)!'

  const getRewardTier = () => {
    if (referralCount >= 25) return 'Platinum'
    if (referralCount >= 10) return 'Gold'
    if (referralCount >= 5) return 'Silver'
    return 'Bronze'
  }

  return (
    <section className="py-20 px-4 bg-neutral-50 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="bg-white border border-gray-200 rounded-xl p-10 shadow-sm">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl text-emerald-600 font-semibold">✓</span>
            </div>
            <h2 className="text-4xl font-semibold text-gray-900 mb-2">
              You’re On The Waitlist
            </h2>
            <p className="text-base text-gray-600">
              You’ve secured your spot — now invite others to move up and unlock rewards.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-lg border border-gray-200 p-6 text-center">
              <TrendingUp className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
              <div className="text-3xl font-semibold text-gray-900">
                #{position}
              </div>
              <p className="text-sm text-gray-600 mt-1">Waitlist Position</p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 text-center">
              <Zap className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
              <div className="text-3xl font-semibold text-gray-900">
                {referralCount}
              </div>
              <p className="text-sm text-gray-600 mt-1">Referrals</p>
            </div>

            <div className="rounded-lg border border-gray-200 p-6 text-center">
              <Award className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
              <div className="text-lg font-semibold text-gray-900">
                {getRewardTier()}
              </div>
              <p className="text-sm text-gray-600 mt-1">Current Tier</p>
            </div>
          </div>

          {/* Rewards Section */}
          <div className="border border-gray-200 rounded-xl p-8 mb-10">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-indigo-600" />
              Unlock Rewards
            </h3>

            <div className="space-y-3">
              {[
                { tier: 'Silver', count: 5, text: 'Skip 50 Waitlist Spots', emoji: '🥈' },
                { tier: 'Gold', count: 10, text: '1 Year Free Premium', emoji: '🥇' },
                { tier: 'Platinum', count: 25, text: 'Lifetime Premium', emoji: '💎' },
              ].map((t, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                    referralCount >= t.count
                      ? 'border-emerald-400 bg-emerald-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 font-semibold">
                    {referralCount >= t.count ? (
                      <span className="text-emerald-600">✓</span>
                    ) : (
                      <span className="text-gray-600 text-sm">{t.count}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {t.emoji} {t.tier} Tier: {t.text}
                    </p>
                    <p className="text-sm text-gray-600">
                      {referralCount >= t.count
                        ? 'Unlocked'
                        : `${t.count - referralCount} more referrals needed`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Referral Link */}
          <div className="mb-10">
            <label className="block text-base font-semibold text-gray-800 mb-3">
              Your Referral Link
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={referralUrl}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm font-mono text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={copyToClipboard}
                className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold flex items-center gap-2 transition"
              >
                <Copy className="w-4 h-4" /> Copy
              </button>
            </div>
          </div>

          {/* Share Buttons */}
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Share2 className="w-4 h-4 text-indigo-600" /> Share with Friends
            </label>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  shareText
                )}&url=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-3 rounded-lg font-semibold text-sm transition"
              >
                <Twitter className="w-4 h-4" /> Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  referralUrl
                )}`}
                target="_blank"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition"
              >
                <Facebook className="w-4 h-4" /> Facebook
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(
                  'Join AsValue – 6 Months Free!'
                )}&body=${encodeURIComponent(shareText + ' ' + referralUrl)}`}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-3 rounded-lg font-semibold text-sm transition"
              >
                <Mail className="w-4 h-4" /> Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}