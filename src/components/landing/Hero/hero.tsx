"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="flex gap-3 w-full mt-36 items-center">
      <div className="flex flex-col w-full lg:w-1/2 md:pr-5">
        <h1 className="text-6xl font-bold text-center lg:text-left">
          <span className=" bg-gradient-to-r from-[#9e2f6c] to-[#B24A6D] bg-clip-text text-transparent">
            Pocket Bank -
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#4E3EF5] to-[#B3F9D1] bg-clip-text text-transparent">
            All You Need In Your Pocket.
          </span>
        </h1>
        <p className="mt-6 text-center lg:text-left">
          The only banking app you will ever need, with a simple and intuitive
          UI and a wide range of features.
        </p>
        <div className="flex gap-4 mt-12 lg:mt-6 justify-center lg:justify-start items-center">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              className="px-7 py-4 font-bold rounded-full bg-gradient-to-bl from-[#B24A6D] to-[#564ED7]"
              href="/login"
            >
              Get Started
            </Link>
          </motion.div>

          <Link
            className="px-6 py-3 font-bold rounded-full border-solid border-[#91A8CD] border-2"
            href="/demo"
          >
            See a demo
          </Link>
        </div>
      </div>
      <div className="h-96 hidden lg:block w-full lg:w-1/2 relative">
        <Image
          src="/cards.png"
          alt=""
          fill={true}
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};
