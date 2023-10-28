import Link from 'next/link'
import React from 'react'

type Props = {}

export const Footer = (props: Props) => {
  return (
    <footer className="bg-[#0d0d0d] px-8 lg:px-0">
      <div className="flex items-center justify-between py-8 max-w-5xl mx-auto h-56">
        {/* NAME AND ALL RIGHT RESERVED */}
        <div className="flex flex-col justify-between h-full">
          {/* <Image src="/logo.svg" width={40} height={40} /> */}
          <h1 className="text-2xl font-bold">
            <Link
              className="bg-gradient-to-r from-[#9e2f6c] to-[#B24A6D] bg-clip-text text-transparent"
              href="/"
            >
              Pocket Bank
            </Link>
          </h1>
          <p className="text-xs font-bold">©2023 All rights reserved.</p>
        </div>

        {/* SITE MAP AND SOCIALS */}
        <div className="flex gap-8 lg:gap-24">
          {/* SITE MAP */}
          <div className="flex flex-col gap-2">
            <p className="text-md font-bold">Site Map</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/features">Features</Link>
              </li>
              <li>
                <Link href="/plans">Plans</Link>
              </li>
              <li>
                <Link href="/community">Community</Link>
              </li>
              <li>
                <Link href="/help">Help</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-col gap-2">
            <p className="text-md font-bold">Our Socials</p>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="https://www.facebook.com">Facebook</Link>
              </li>
              <li>
                <Link href="https://www.instagram.com">Instagram</Link>
              </li>
              <li>
                <Link href="https://www.tiktok.com">TikTok</Link>
              </li>
              <li>
                <Link href="https://www.snapchat.com">Snapchat</Link>
              </li>
              <li>
                <Link href="https://www.x.com">X</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
