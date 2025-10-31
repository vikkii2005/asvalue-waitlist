'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import toast, { Toaster } from 'react-hot-toast'
import {
  Instagram,
  MessageSquare,
  Zap,
  Package,
  Shield,
  Smartphone,
  TrendingUp,
  BarChart3,
  Lock,
  Bell,
  Headphones,
  Gauge,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Clock,
  DollarSign,
  TrendingDown,
  Users2,
  Target,
  Copy,
  Facebook,
  Twitter,
  Mail,
  Award,
  Share2,
  Loader2,
  User,
} from 'lucide-react'

// ============================================================================
// HERO SECTION
// ============================================================================

function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white pt-16 md:pt-24 lg:pt-32 pb-20 md:pb-28 lg:pb-36">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600 px-4 py-2.5 rounded-full mb-6 sm:mb-8">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">First 100 Sellers: 6 Months Free</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Professional Seller
              <br />
              <span className="text-blue-600">Platform Made Simple</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-6 leading-relaxed font-medium">
              One platform. All your sales channels. Keep 100% revenue.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 mb-10 leading-relaxed">
              Manage WhatsApp, Instagram, and Telegram customers in one unified inbox. Build a professional storefront. Scale without limits.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-base flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-8 py-4 rounded-lg font-semibold text-base transition-all shadow-sm hover:shadow-md"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right: Trust Stats */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 space-y-8 shadow-xl border border-slate-200">
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-6">Why Choose AsValue</p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-lg">100% Revenue Kept</p>
                    <p className="text-sm text-slate-600">Zero commission. Ever.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-lg">6 Months Free</p>
                    <p className="text-sm text-slate-600">For first 100 sellers only</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-lg">Lifetime Support</p>
                    <p className="text-sm text-slate-600">Priority help when you need it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// PROBLEMS & SOLUTIONS SECTION
// ============================================================================

function Problems() {
  const problems = [
    {
      icon: Users2,
      problem: 'Scattered Customers',
      detail: 'Messages spread across WhatsApp, Instagram, Telegram',
      solution: 'Unified inbox for all channels',
      impact: 'Save 10+ hours weekly',
    },
    {
      icon: AlertCircle,
      problem: 'Unprofessional Appearance',
      detail: 'Selling through DMs doesn\'t build trust',
      solution: 'Professional seller profile',
      impact: '3x more conversions',
    },
    {
      icon: TrendingDown,
      problem: 'Missing Sales',
      detail: 'No product catalog = lost customers',
      solution: 'Complete product showcase',
      impact: '2x more engagement',
    },
    {
      icon: DollarSign,
      problem: 'Commission Losses',
      detail: 'Payment apps take 2-5% per transaction',
      solution: 'Direct payments to your bank',
      impact: 'Keep 100% earnings',
    },
    {
      icon: Clock,
      problem: 'Manual Work Overload',
      detail: 'Repetitive messages and order tracking',
      solution: 'Automated order management',
      impact: 'Save 5+ hours daily',
    },
    {
      icon: TrendingUp,
      problem: 'Growth Challenges',
      detail: 'Can\'t scale without overwhelming chaos',
      solution: 'Built to handle 10,000+ customers',
      impact: 'Scale infinitely',
    },
  ]

  const results = [
    { icon: Target, number: '3x', label: 'Sales Increase' },
    { icon: Clock, number: '5h', label: 'Time Saved Daily' },
    { icon: DollarSign, number: '100%', label: 'Revenue Kept' },
    { icon: TrendingUp, number: '10x', label: 'Scale Capacity' },
  ]

  return (
    <section id="problems" className="w-full bg-white py-20 md:py-28 lg:py-36">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Your Challenges, Solved
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl">
            Every seller faces these issues. AsValue solves them all in one platform.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-8 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
              <div className="grid grid-cols-2 gap-8">
                {/* Problem */}
                <div>
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Problem</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.problem}</h3>
                  <p className="text-sm text-slate-600">{item.detail}</p>
                </div>

                {/* Solution */}
                <div>
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Solution</p>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.solution}</h3>
                  <span className="text-sm font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-md inline-block">
                    {item.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Section */}
        <div className="bg-slate-900 text-white rounded-2xl p-12">
          <h3 className="text-4xl font-bold mb-3 text-center">Proven Results</h3>
          <p className="text-center text-slate-400 text-base mb-12">From sellers in our beta program</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center hover:border-slate-600 transition-all">
                <r.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-5xl font-bold mb-2 text-white">{r.number}</div>
                <p className="text-sm text-slate-300">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// FEATURES SECTION
// ============================================================================

function Features() {
  const features = [
    {
      icon: Instagram,
      title: 'Unified Inbox',
      description: 'All messages from WhatsApp, Instagram, Telegram in one place.',
    },
    {
      icon: MessageSquare,
      title: 'Professional Profile',
      description: 'Showcase your products with a modern, trusted storefront.',
    },
    {
      icon: Zap,
      title: 'Smart Automation',
      description: 'Pre-built templates for orders, payments, and shipping updates.',
    },
    {
      icon: Package,
      title: 'Order Management',
      description: 'Track every order from purchase to delivery automatically.',
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'See what sells, peak hours, and revenue trends.',
    },
    {
      icon: TrendingUp,
      title: 'Customer Retention',
      description: 'Remind customers about new products automatically.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Run your entire business from your phone or tablet.',
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Encrypted transactions. Zero commission. Direct to your account.',
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Enterprise-grade security protecting your business.',
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Real-time notifications for orders and messages.',
    },
    {
      icon: Headphones,
      title: 'Priority Support',
      description: 'Lifetime premium support for first 100 sellers.',
    },
    {
      icon: Gauge,
      title: 'Unlimited Scale',
      description: 'Handle 10 or 10,000 customers with zero slowdown.',
    },
  ]

  return (
    <section className="w-full bg-slate-50 py-20 md:py-28 lg:py-36">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Everything You Get
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl">
            Complete toolkit to manage, grow, and scale your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-8 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                <f.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-base text-slate-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-base transition-all shadow-lg hover:shadow-xl"
          >
            Join Waitlist – Get 6 Months Free
          </button>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// REFERRAL DASHBOARD
// ============================================================================

interface ReferralDashboardProps {
  referralCode: string
  email: string
}

function ReferralDashboard({ referralCode, email }: ReferralDashboardProps) {
  const [position, setPosition] = useState(0)
  const [referralCount, setReferralCount] = useState(0)

  const referralUrl = `${process.env.NEXT_PUBLIC_SITE_URL}?ref=${referralCode}`

  const fetchUserData = useCallback(async () => {
    try {
      if (!supabase) {
        console.error('Supabase not initialized')
        return
      }

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

  const shareText = 'Just joined AsValue — the professional seller platform. Join now and get 6 months free! Only 100 spots available.'

  const getRewardTier = () => {
    if (referralCount >= 25) return 'Platinum'
    if (referralCount >= 10) return 'Gold'
    if (referralCount >= 5) return 'Silver'
    return 'Bronze'
  }

  return (
    <section className="w-full bg-slate-50 py-20 min-h-screen flex items-center">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-10 shadow-xl border border-slate-200">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-3">You're On The Waitlist!</h2>
            <p className="text-lg text-slate-600">
              Invite friends to move up and unlock exclusive rewards.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-slate-200 rounded-xl p-8 text-center bg-white shadow-sm">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900">#{position}</div>
              <p className="text-base text-slate-600 mt-2">Waitlist Position</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-8 text-center bg-white shadow-sm">
              <Zap className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900">{referralCount}</div>
              <p className="text-base text-slate-600 mt-2">Referrals</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-8 text-center bg-white shadow-sm">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-slate-900">{getRewardTier()}</div>
              <p className="text-base text-slate-600 mt-2">Current Tier</p>
            </div>
          </div>

          {/* Rewards */}
          <div className="border border-slate-200 rounded-xl p-10 mb-10 bg-white shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Zap className="w-6 h-6 text-blue-600" />
              Unlock Rewards
            </h3>
            <div className="space-y-5">
              {[
                { tier: 'Silver', count: 5, text: 'Skip 50 Spots', emoji: '🥈' },
                { tier: 'Gold', count: 10, text: '1 Year Free', emoji: '🥇' },
                { tier: 'Platinum', count: 25, text: 'Lifetime Free', emoji: '💎' },
              ].map((t, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-6 rounded-xl border transition-all ${
                    referralCount >= t.count
                      ? 'border-green-300 bg-green-50'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200 font-bold text-sm text-slate-700 shrink-0">
                    {referralCount >= t.count ? '✓' : t.count}
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">{t.emoji} {t.tier}: {t.text}</p>
                    <p className="text-sm text-slate-600 mt-1">
                      {referralCount >= t.count ? 'Unlocked!' : `${t.count - referralCount} more needed`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Referral Link */}
          <div className="mb-10">
            <label className="flex text-lg font-bold text-slate-900 mb-4">Your Referral Link</label>
            <div className="flex gap-3 flex-col sm:flex-row">
              <input
                type="text"
                readOnly
                value={referralUrl}
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg font-mono text-sm text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={copyToClipboard}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition text-base whitespace-nowrap"
              >
                <Copy className="w-4 h-4" /> Copy
              </button>
            </div>
          </div>

          {/* Share Buttons */}
          <div>
            <label className="flex text-lg font-bold text-slate-900 mb-4 items-center gap-2">
              <Share2 className="w-5 h-5 text-blue-600" /> Share
            </label>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 rounded-lg font-semibold text-base transition"
              >
                <Twitter className="w-4 h-4" /> Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-5 py-3 rounded-lg font-semibold text-base transition"
              >
                <Facebook className="w-4 h-4" /> Facebook
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent('Join AsValue – 6 Months Free!')}&body=${encodeURIComponent(shareText + ' ' + referralUrl)}`}
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-5 py-3 rounded-lg font-semibold text-base transition"
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

// ============================================================================
// WAITLIST FORM
// ============================================================================

function WaitlistForm() {
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

      if (!supabase) {
        toast.error('Supabase not initialized')
        setLoading(false)
        return
      }

      const newReferralCode = generateReferralCode()

      const { error } = await supabase.from('waitlist').insert([
        {
          email: email.toLowerCase(),
          full_name: fullName || null,
          referral_code: newReferralCode,
          referred_by: referralCode || null,
          referral_count: 0,
          position: 0,
        },
      ])

      if (error) throw error

      if (referralCode && supabase) {
        await supabase.rpc('increment_referral_count', { ref_code: referralCode })
      }

      setUserReferralCode(newReferralCode)
      setShowDashboard(true)
      toast.success('🎉 Welcome to the waitlist!')
    } catch (err: unknown) {
      const error = err as { code?: string; message?: string }
      if (error.code === '23505') toast.error('This email is already registered.')
      else toast.error('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  if (showDashboard) {
    return <ReferralDashboard referralCode={userReferralCode} email={email} />
  }

  return (
    <section id="waitlist" className="w-full bg-white py-20">
      <Toaster position="top-center" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Join in 30 Seconds
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get 6 months free + lifetime perks. Limited to 100 sellers.
          </p>
        </div>

        {/* Form Grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-lg">
            <h3 className="text-3xl font-bold text-slate-900 mb-3">Get Started</h3>
            <p className="text-base text-slate-600 mb-8">Founding member signup</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="flex text-base font-semibold text-slate-900 mb-3">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Seller"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 placeholder-slate-500 text-base transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="flex text-base font-semibold text-slate-900 mb-3">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-slate-900 placeholder-slate-500 text-base transition"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all text-base"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    Join Waitlist <CheckCircle2 className="w-5 h-5" />
                  </>
                )}
              </button>

              {referralCode && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center text-sm text-green-800 font-semibold">
                  ✨ Referred by a friend — both get perks!
                </div>
              )}
            </form>

            {/* Trust */}
            <div className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-xs font-bold text-slate-500 uppercase mb-4">Protected</p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Secure
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 font-semibold">
                  <Lock className="w-4 h-4 text-green-600" /> Private
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            {/* Main Benefits */}
            <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-7 h-7 text-blue-600" />
                <h4 className="text-2xl font-bold text-slate-900">Free Forever</h4>
              </div>
              <ul className="space-y-5 text-base">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-900 font-medium">6 months completely free</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-900 font-medium">Lifetime priority support</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-slate-900 font-medium">50% off after trial</span>
                </li>
              </ul>
            </div>

            {/* Urgency */}
            <div className="bg-white border border-orange-300 rounded-xl p-8 flex gap-4 shadow-sm">
              <Clock className="w-6 h-6 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900 text-base">100 Spots Only</p>
                <p className="text-sm text-slate-600 mt-1">After that, no free trial for new members</p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-white border border-green-300 rounded-xl p-8 shadow-sm">
              <p className="font-bold text-slate-900 text-base mb-3">No Risk</p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✓ No credit card needed</li>
                <li>✓ Cancel anytime</li>
                <li>✓ Zero commitment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function Page() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <Problems />
      <Features />
      <WaitlistForm />
    </main>
  )
}