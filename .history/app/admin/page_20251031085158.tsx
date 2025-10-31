'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function AdminDashboard() {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetchEntries()
  }, [])

  const fetchEntries = async () => {
    const { data } = await supabase
      .from('waitlist')
      .select('*')
      .order('position', { ascending: true })
    
    setEntries(data || [])
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Waitlist Dashboard</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">Position</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Referrals</th>
              <th className="px-6 py-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry: any) => (
              <tr key={entry.id} className="border-t">
                <td className="px-6 py-4">#{entry.position}</td>
                <td className="px-6 py-4">{entry.full_name}</td>
                <td className="px-6 py-4">{entry.email}</td>
                <td className="px-6 py-4">{entry.referral_count}</td>
                <td className="px-6 py-4">
                  {new Date(entry.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}