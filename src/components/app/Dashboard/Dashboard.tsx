import React from 'react'
import { Navigation } from '../common/Navigation'

type Props = {}

export const Dashboard = (props: Props) => {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between max-w-5xl lg:mx-auto px-8 md:px-4 mb-8">
        <h1>Dashboard</h1>
      </main>
    </>
  )
}