'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Copy, Facebook, Twitter, Mail, Share2, TrendingUp } from 'lucide-react'
import toast from 'react-hot-toast'

interface Props {
  referralCode: string
  email: string
}

export default function ReferralDashboard({ referralCode, email }: Props) {
  const [position, setPosition] = useState<number>(0)
  const [referralCount, setReferralCount] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  const referralUrl = `${process.env.NEXT_PUBLIC_SITE_URL}?ref=${referralCode}`

  useEffect(() => {
    fetchUserData()
  }, [email])

  const fetchUserData = async () => {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .select('position, referral_count')
        .eq('email', email)
        .single()

      if (error) throw error
      
      setPosition(data.position)
      setReferralCount(data.referral_count)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralUrl)
    toast.success('Link copied to clipboard!')
  }

  const shareText = `Join me on AsValue.com - the WhatsApp selling platform with zero commission! 🚀`

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">You're In! 🎉</h2>
            <p className="text-gray-600">
              Move up the waitlist by inviting friends
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-indigo-50 rounded-xl p-6 text-center">
              <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-indigo-600">#{position}</div>
              <div className="text-sm text-gray-600">Your Position</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <Share2 className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-purple-600">{referralCount}</div>
              <div className="text-sm text-gray-600">Referrals</div>
            </div>
          </div>

          {/* Rewards */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-lg mb-3">🎁 Referral Rewards</h3>
            <ul className="space-y-2 text-sm">
              <li>✨ <strong>3 referrals:</strong> Skip ahead 50 spots</li>
              <li>🚀 <strong>10 referrals:</strong> 1 year free subscription</li>
              <li>👑 <strong>25 referrals:</strong> Lifetime founding member status</li>
            </ul>
          </div>

          {/* Referral Link */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Referral Link
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={referralUrl}
                readOnly
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
              />
              <button
                onClick={copyToClipboard}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-lg flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
          </div>

          {/* Social Share */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Share on Social Media
            </label>
            <div className="grid grid-cols-3 gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-all"
              >
                <Twitter className="w-5 h-5" />
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg transition-all"
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent('Join AsValue.com')}&body=${encodeURIComponent(shareText + ' ' + referralUrl)}`}
                className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-lg transition-all"
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