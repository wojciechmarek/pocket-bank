"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

export const Navigation = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const updateScreen = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    }
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  return (
    <nav>
      <div className="flex items-center justify-between py-8 max-w-5xl mx-auto lg:mx-auto px-8 md:px-4">
        <div className="flex items-center gap-4">
          {/* <Image src="/logo.svg" width={40} height={40} /> */}
          <h1 className="text-2xl font-bold">
            <Link
              className="bg-gradient-to-r from-[#9e2f6c] to-[#B24A6D] bg-clip-text text-transparent"
              href="/"
            >
              Pocket Bank
            </Link>
          </h1>
        </div>
        <ul className="md:gap-6 lg:gap-8 hidden md:flex">
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
            <motion.div
              whileHover={{ scale: 1.1 }}
            >
              <Link
                className="px-6 py-3 rounded-full bg-gradient-to-bl from-[#B24A6D] to-[#564ED7] font-bold"
                href="/login"
              >
                Get Started
              </Link>
            </motion.div>
          </li>
        </ul>
        <button className="md:hidden p-1" onClick={handleMobileMenuClick}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute h-fit py-6 w-screen bg-[#0f0f0f]">
          <ul className="gap-4 flex flex-col items-center text-lg">
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
            <li className="my-2">
              <Link
                className="px-6 py-3 rounded-full bg-gradient-to-bl from-[#B24A6D] to-[#564ED7] font-bold"
                href="/login"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
