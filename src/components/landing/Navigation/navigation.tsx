"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

export const Navigation = (props: Props) => {
  return (
    <nav className="flex items-center justify-between py-8 max-w-5xl mx-auto lg:mx-auto px-8 md:px-4">
      <div className="flex items-center gap-4">
        {/* <Image src="/logo.svg" width={40} height={40} /> */}
        <h1 className="text-2xl font-bold">
          <Link
            className="bg-gradient-to-r from-[#B24A6D] to-[#7E78A6] bg-clip-text text-transparent"
            href="/"
          >
            Pocket Bank
          </Link>
        </h1>
      </div>
      <ul className="gap-8 hidden md:flex">
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
        <li>
          <Link
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#B24A6D] to-[#564ED7]"
            href="/login"
          >
            Get Started
          </Link>
        </li>
      </ul>
      <button className="md:hidden p-1">
        <Menu />
      </button>
    </nav>
  );
};
