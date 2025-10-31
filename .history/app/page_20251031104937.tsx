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
  Users,
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
    <section className="relative min-h-screen flex items-center justify-center bg-white px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-8 border border-blue-200">
          <Zap className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-bold text-blue-600">First 100 Sellers: 6 Months Free</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
          Stop Selling Unprofessionally
          <br />
          <span className="text-blue-600">Everywhere</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
          AsValue is your independent business platform. Sell professionally, keep 100% of revenue.
        </p>

        {/* Problem Statement */}
        <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Your customers are scattered across WhatsApp, Instagram, Telegram. Your business looks unprofessional. You&apos;re losing sales. We solve that.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            Get 6 Months Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-lg font-bold text-lg transition-all active:scale-95"
          >
            See How It Works
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900">Sellers Joining</p>
              <p className="text-xs text-gray-600">Daily</p>
            </div>
            <div className="text-center">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900">100% Free</p>
              <p className="text-xs text-gray-600">First 6 months</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-bold text-gray-900">Zero Commission</p>
              <p className="text-xs text-gray-600">Always</p>
            </div>
          </div>
        </div>

        <div className="text-xs md:text-sm text-gray-600 mt-8 space-y-1">
          <div>✓ No credit card required</div>
          <div>✓ Cancel anytime, no questions</div>
          <div>✓ 100% free forever after 6 months</div>
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
      detail: 'WhatsApp, Instagram, Telegram - no system',
      solution: 'One unified platform',
      impact: 'Save 10+ hours weekly',
    },
    {
      icon: AlertCircle,
      problem: 'Look Unprofessional',
      detail: 'DMs and comments aren\'t professional',
      solution: 'Professional seller profile',
      impact: '3x higher conversions',
    },
    {
      icon: TrendingDown,
      problem: 'Products Lost',
      detail: 'No catalog, customers keep asking',
      solution: 'Beautiful product catalog',
      impact: '2x more engagement',
    },
    {
      icon: DollarSign,
      problem: 'Lose to Commissions',
      detail: 'Payment platforms take 2-5%',
      solution: 'Direct payments, zero commission',
      impact: 'Keep 100% revenue',
    },
    {
      icon: Clock,
      problem: 'Waste Hours',
      detail: 'Same questions, manual tracking',
      solution: 'Automated templates & dashboard',
      impact: 'Save 5+ hours daily',
    },
    {
      icon: TrendingUp,
      problem: 'Can\'t Scale',
      detail: 'More customers = chaos',
      solution: 'System that scales infinitely',
      impact: 'Handle 10x customers',
    },
  ]

  const results = [
    { icon: Target, number: '3x', label: 'More Sales' },
    { icon: Clock, number: '5h', label: 'Saved Daily' },
    { icon: DollarSign, number: '100%', label: 'Revenue Kept' },
    { icon: TrendingUp, number: '10x', label: 'Growth Potential' },
  ]

  return (
    <section id="problems" className="py-20 md:py-40 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-28">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-5">
            Real Problems. Real Solutions.
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Thousands of sellers face these issues — AsValue fixes them all with one system.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="space-y-4 md:space-y-5 mb-20 md:mb-32">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 hover:shadow-md transition-all">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {/* Problem */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Problem</p>
                    <h3 className="text-lg md:text-xl font-bold text-black mb-1">{item.problem}</h3>
                    <p className="text-sm md:text-base text-gray-600">{item.detail}</p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-wide mb-1">Solution</p>
                    <h3 className="text-lg md:text-xl font-bold text-black mb-2">{item.solution}</h3>
                    <span className="text-sm md:text-base font-bold text-blue-600 bg-blue-50 px-3 md:px-4 py-1.5 md:py-2 rounded-md inline-block">
                      {item.impact}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="bg-gray-900 text-white rounded-2xl p-10 md:p-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-3 text-center">Results from Beta Sellers</h3>
          <p className="text-center text-gray-400 mb-12 md:mb-16">Proven metrics from early members</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {results.map((r, idx) => (
              <div key={idx} className="bg-gray-800 border border-gray-700 rounded-lg p-6 md:p-8 text-center hover:border-gray-600 transition">
                <r.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl md:text-5xl font-bold mb-2 text-white">{r.number}</div>
                <p className="text-sm md:text-base text-gray-300">{r.label}</p>
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
      title: 'Professional Profile',
      description: 'Showcase your products with clean, modern design that builds instant trust.',
      benefit: 'Customers take you seriously',
    },
    {
      icon: MessageSquare,
      title: 'Unified Inbox',
      description: 'Manage all chats from WhatsApp, Instagram, and Telegram in one place.',
      benefit: 'Never miss a message',
    },
    {
      icon: Zap,
      title: 'Automation Tools',
      description: 'Send pre-built templates for orders, payments, and updates automatically.',
      benefit: 'Save hours daily',
    },
    {
      icon: Package,
      title: 'Order Tracking',
      description: 'Keep track of every order from purchase to delivery in real-time.',
      benefit: 'Smooth operations',
    },
    {
      icon: Shield,
      title: 'Zero Commission',
      description: 'Accept direct payments securely and keep 100% of your earnings.',
      benefit: 'Maximize profits',
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Manage your entire business seamlessly from your phone or tablet.',
      benefit: 'Work anywhere',
    },
    {
      icon: TrendingUp,
      title: 'Customer Retention',
      description: 'Automatically remind customers when you launch new products.',
      benefit: '2x repeat sales',
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Understand what sells best and make smarter growth decisions.',
      benefit: 'Data-driven growth',
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'Every transaction is encrypted and safe, protecting your customers and you.',
      benefit: 'Peace of mind',
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Get real-time notifications for new orders and messages.',
      benefit: 'Stay informed',
    },
    {
      icon: Headphones,
      title: 'Priority Support',
      description: 'First 100 sellers receive lifetime premium support access.',
      benefit: 'Help anytime',
    },
    {
      icon: Gauge,
      title: 'Scalable System',
      description: 'Easily manage 10 or 10,000 customers with no slowdown.',
      benefit: 'Built to grow',
    },
  ]

  return (
    <section className="py-20 md:py-40 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-28">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-5">
            Everything You Need to Scale
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Smart tools for sellers — professional, fast, and made to grow with your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
          {features.map((f, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:shadow-md transition-all flex flex-col">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 grow">{f.description}</p>
              <p className="text-xs md:text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1.5 rounded-md w-fit">
                ✓ {f.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-base md:text-lg text-gray-600 mb-6">
            First 100 sellers get <strong>6 months free</strong> — all premium features included.
          </p>
          <button
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl active:scale-95"
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

  const shareText = 'Just joined AsValue — the professional platform for online sellers. Join now and get 6 months free (only 100 spots)!'

  const getRewardTier = () => {
    if (referralCount >= 25) return 'Platinum'
    if (referralCount >= 10) return 'Gold'
    if (referralCount >= 5) return 'Silver'
    return 'Bronze'
  }

  return (
    <section className="py-20 px-4 bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl text-green-600 font-bold">✓</span>
            </div>
            <h2 className="text-4xl font-bold text-black mb-2">You&apos;re On The Waitlist</h2>
            <p className="text-base text-gray-600">
              You&apos;ve secured your spot — now invite others to move up and unlock rewards.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="rounded-lg border border-gray-200 p-6 text-center">
              <TrendingUp className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-black">#{position}</div>
              <p className="text-sm text-gray-600 mt-1">Waitlist Position</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 text-center">
              <Zap className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-black">{referralCount}</div>
              <p className="text-sm text-gray-600 mt-1">Referrals</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 text-center">
              <Award className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-lg font-bold text-black">{getRewardTier()}</div>
              <p className="text-sm text-gray-600 mt-1">Current Tier</p>
            </div>
          </div>

          {/* Rewards */}
          <div className="border border-gray-200 rounded-xl p-6 md:p-8 mb-10">
            <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
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
                      ? 'border-green-300 bg-green-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 font-bold text-sm">
                    {referralCount >= t.count ? (
                      <span className="text-green-600">✓</span>
                    ) : (
                      <span className="text-gray-600">{t.count}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {t.emoji} {t.tier} Tier: {t.text}
                    </p>
                    <p className="text-sm text-gray-600">
                      {referralCount >= t.count
                        ? 'Unlocked ✨'
                        : `${t.count - referralCount} more referrals needed`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Referral Link */}
          <div className="mb-10">
            <label className="block text-base font-bold text-gray-800 mb-3">Your Referral Link</label>
            <div className="flex gap-2 flex-col sm:flex-row">
              <input
                type="text"
                readOnly
                value={referralUrl}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm font-mono text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={copyToClipboard}
                className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex items-center justify-center gap-2 transition whitespace-nowrap"
              >
                <Copy className="w-4 h-4" /> Copy
              </button>
            </div>
          </div>

          {/* Share Buttons */}
          <div>
            <label className="block text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Share2 className="w-4 h-4 text-blue-600" /> Share with Friends
            </label>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-3 rounded-lg font-bold text-sm transition"
              >
                <Twitter className="w-4 h-4" /> Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-lg font-bold text-sm transition"
              >
                <Facebook className="w-4 h-4" /> Facebook
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent('Join AsValue – 6 Months Free!')}&body=${encodeURIComponent(shareText + ' ' + referralUrl)}`}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-3 rounded-lg font-bold text-sm transition"
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
      toast.success('🎉 You&apos;re on the waitlist!')
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
    <section id="waitlist" className="py-20 md:py-40 px-4 bg-white">
      <Toaster position="top-center" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Join the Waitlist</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Be one of the first 100 sellers to receive <strong>6 months free</strong> + early member perks.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start max-w-5xl mx-auto">
          {/* Form Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all">
            <h3 className="text-2xl font-bold text-black mb-2">Early Access Form</h3>
            <p className="text-gray-600 mb-6">Founding members enjoy premium access at zero cost.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 text-sm transition"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 text-sm transition"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-transform active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    Join Waitlist <CheckCircle2 className="w-4 h-4" />
                  </>
                )}
              </button>

              {referralCode && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center text-sm text-green-700 font-bold">
                  ✨ You were referred by a friend — both of you get perks!
                </div>
              )}
            </form>

            {/* Trust Icons */}
            <div className="mt-8 border-t border-gray-200 pt-5">
              <div className="flex flex-wrap justify-center gap-5 text-gray-600 text-xs font-bold">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-green-600" /> Secure
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Private
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
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <Award className="w-6 h-6 text-orange-500" />
                <h4 className="text-xl font-bold text-black">Founding Member Benefits</h4>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>✅ 6 Months Free Access</li>
                <li>✅ Lifetime Priority Support</li>
                <li>✅ Founder Badge on Profile</li>
                <li>✅ 50% Lifetime Discount After Trial</li>
              </ul>
            </div>

            {/* Urgency */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 flex gap-3 items-start">
              <Clock className="w-5 h-5 text-orange-600 mt-1" />
              <div>
                <p className="font-bold text-gray-900 text-sm">Limited to 100 Sellers</p>
                <p className="text-gray-600 text-xs mt-1">After 100 sign-ups, new users lose early perks.</p>
              </div>
            </div>

            {/* Zero Risk */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-5 flex gap-3 items-start">
              <Shield className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <p className="font-bold text-gray-900 text-sm mb-1">Zero Risk</p>
                <ul className="text-gray-600 text-xs space-y-1">
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

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function Page() {
  return (
    <main className="bg-white">
      <Hero />
      <Problems />
      <Features />
      <WaitlistForm />
    </main>
  )
}