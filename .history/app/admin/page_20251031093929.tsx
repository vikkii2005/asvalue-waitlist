'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface WaitlistEntry {
  id: string
  position: number
  full_name: string
  email: string
  referral_count: number
  created_at: string
}

export default function AdminDashboard() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchEntries()
  }, [])

  const fetchEntries = async () => {
    try {
      if (!supabase) {
        setError('Supabase not configured')
        setLoading(false)
        return
      }

      const { data, error: fetchError } = await supabase
        .from('waitlist')
        .select('*')
        .order('position', { ascending: true })
      
      if (fetchError) throw fetchError
      setEntries(data || [])
    } catch (err) {
      console.error('Error:', err)
      setError('Failed to fetch waitlist')
    } finally {
      setLoading(false)
    }
  }

  if (!supabase) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-lg text-red-600">Supabase not configured</p>
          <p className="text-sm text-slate-600 mt-2">Check your environment variables</p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <p className="text-lg text-red-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-slate-900 mb-2">Waitlist Dashboard</h1>
          <p className="text-lg text-slate-600">Total members: {entries.length}</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b-2 border-slate-200">
                <tr>
                  <th className="px-8 py-5 text-left text-sm font-bold text-slate-700">Position</th>
                  <th className="px-8 py-5 text-left text-sm font-bold text-slate-700">Name</th>
                  <th className="px-8 py-5 text-left text-sm font-bold text-slate-700">Email</th>
                  <th className="px-8 py-5 text-left text-sm font-bold text-slate-700">Referrals</th>
                  <th className="px-8 py-5 text-left text-sm font-bold text-slate-700">Date Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {entries.map((entry) => (
                  <tr key={entry.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-5 text-sm font-semibold text-slate-900">#{entry.position}</td>
                    <td className="px-8 py-5 text-sm text-slate-700">{entry.full_name || '—'}</td>
                    <td className="px-8 py-5 text-sm text-slate-700">{entry.email}</td>
                    <td className="px-8 py-5 text-sm">
                      <span className="inline-flex px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 font-semibold">
                        {entry.referral_count}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-sm text-slate-600">
                      {new Date(entry.created_at).toLocaleDateString('en-IN')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}