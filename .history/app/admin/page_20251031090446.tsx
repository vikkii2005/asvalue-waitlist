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

  useEffect(() => {
    fetchEntries()
  }, [])

  const fetchEntries = async () => {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .select('*')
        .order('position', { ascending: true })
      
      if (error) throw error
      setEntries(data || [])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Waitlist</h1>
          <p className="text-slate-600">Total: {entries.length} members</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Position</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Referrals</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {entries.map((entry) => (
                  <tr key={entry.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">#{entry.position}</td>
                    <td className="px-6 py-4 text-sm text-slate-700">{entry.full_name || '-'}</td>
                    <td className="px-6 py-4 text-sm text-slate-700">{entry.email}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="inline-flex px-2 py-1 rounded bg-indigo-100 text-indigo-700 text-xs font-medium">
                        {entry.referral_count}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {new Date(entry.created_at).toLocaleDateString()}
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