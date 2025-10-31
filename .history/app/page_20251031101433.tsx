'use client'

import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import WaitlistForm from '@/components/WaitlistForm'
import { Analytics } from '@vercel/analytics/react'

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Features />
      <WaitlistForm />
      <Analytics />
    </>
  )
}