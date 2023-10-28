'use client'

import React, { useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { io } from 'socket.io-client'

type Props = {}

export default function RemoteLoginPage(props: Props) {
  const searchParams = useSearchParams()
  const id = searchParams?.get('id')

  const [isFingerprintAvailable, setIsFingerprintAvailable] =
    React.useState(false)
  const [isLoggingIn, setIsLoggingIn] = React.useState(false)
  const [isLogged, setIsLogged] = React.useState(false)

  useEffect(() => socketInitializer(), [])

  const socket = useRef<any>()

  const socketInitializer = () => {
    socket.current = io('http://localhost:3000')
  }

  const handleOnLoginButtonClick = () => {
    socket.current.emit('update-input', 'clicked')
  }

  return (
    <main className="px-8 md:px-4">
      <div className="w-full flex flex-col">
        <h1 className="text-6xl font-bold text-center lg:text-left">
          <span className=" bg-gradient-to-r from-[#9e2f6c] to-[#B24A6D] bg-clip-text text-transparent">
            Pocket Bank
          </span>
        </h1>
        <div className="flex flex-col mt-16 h-12">
          {!isFingerprintAvailable && (
            <>
              <p className=" text-red-500 text-center font-bold">
                Fingerprint is not available
              </p>
              <button
                className="rounded-lg px-4 py-2 mt-4 text-white bg-gradient-to-bl from-[#B24A6D] to-[#564ED7] hover:from-[#c7577d] hover:to-[#6a60ed]"
                onClick={handleOnLoginButtonClick}
              >
                {isLoggingIn ? 'Logging in...' : 'Login'}
              </button>
            </>
          )}
          {isLogged && (
            <>
              <p className="text-green-500 text-center font-bold">
                Logged successfully
              </p>
              <p className="text-center mt-4">You can close this tab now.</p>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
