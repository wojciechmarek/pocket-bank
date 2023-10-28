'use client'

import React, { useEffect } from 'react'
import PocketBase from 'pocketbase'
import { Investing, Navigation } from '@/components/app'
import { useRouter } from 'next/navigation'
import { pb } from '@/pocketbase/pocketbase'

type Props = {}

export default function InvestingPage(props: Props) {
  const router = useRouter()
  if (!pb.authStore.isValid) {
    router.push('/login')
  }

  return (
    <>
      <Navigation />
      <main className="px-8 md:px-4">
        <Investing />
      </main>
    </>
  )
}
