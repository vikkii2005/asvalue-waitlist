export interface WaitlistEntry {
  id: string
  email: string
  full_name?: string
  referral_code: string
  referred_by?: string
  position: number
  referral_count: number
  created_at: string
  approved: boolean
}

export interface WaitlistFormData {
  email: string
  full_name?: string
  referral_code?: string
}