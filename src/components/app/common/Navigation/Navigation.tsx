"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

export const Navigation = (props: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogOutButtonClick = () => {
    // PocketBase.auth.logout();
    router.push("/");
  }

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
          <h1 className="text-2xl font-bold">
            <Link
              className="bg-gradient-to-r from-[#9e2f6c] to-[#B24A6D] bg-clip-text text-transparent"
              href="/dashboard"
            >
              Pocket Bank
            </Link>
          </h1>
        </div>
        <ul className="md:gap-6 lg:gap-8 hidden md:flex items-center">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/send-money">Send</Link>
          </li>
          <li>
            <Link href="/history">History</Link>
          </li>
          <li>
            <Link href="/investing">Investing</Link>
          </li>
          <li>
            <motion.div
              whileHover={{ scale: 1.1 }}
            >
              <button
                className="px-6 py-2 rounded-full bg-gradient-to-bl from-[#B24A6D] to-[#564ED7] font-bold"
                onClick={handleLogOutButtonClick}
              >
                Logout
              </button>
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
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/send-money">Send</Link>
            </li>
            <li>
              <Link href="/history">History</Link>
            </li>
            <li>
              <Link href="/investing">Investing</Link>
            </li>
            <li className="my-2">
              <button
                className="px-6 py-2 rounded-full bg-gradient-to-bl from-[#B24A6D] to-[#564ED7] font-bold"
                onClick={handleLogOutButtonClick}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
