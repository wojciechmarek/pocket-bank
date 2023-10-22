import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <div className="flex gap-3 w-full mt-36 items-center">
      <div className="flex flex-col w-full lg:w-1/2 md:pr-5">
        <h1 className="text-6xl font-bold text-center lg:text-left">
          <span className=" bg-gradient-to-r from-[#B24A6D] to-[#7E78A6] bg-clip-text text-transparent">
            Pocket Bank -
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#4E3EF5] to-[#B3F9D1] bg-clip-text text-transparent">
            All You Need In Your Pocket.
          </span>
        </h1>
        <p className="mt-6 text-center lg:text-left">
          The only banking app you will ever need, with a simple and intuitive UI and a wide range of features.
        </p>
        <div className="flex gap-4 mt-12 lg:mt-6 justify-center lg:justify-start items-center">
          <Link
            className="px-6 py-3 font-bold rounded-full bg-gradient-to-r from-[#B24A6D] to-[#564ED7] hover:from-[#c7577d] hover:to-[#6a60ed] hover:scale-105 transform transition-all duration-300"
            href="/login"
          >
            Get Started
          </Link>
          <Link
            className="px-6 py-3 font-bold rounded-full border-solid border-[#91A8CD] border-2"
            href="/demo"
          >
            See a demo
          </Link>
        </div>
      </div>
      <div className="h-96 hidden lg:block w-full lg:w-1/2 relative">
        <Image src="/cards.png" alt="" fill={true} style={{objectFit: "cover"}} className="rounded-lg"/>
      </div>
    </div>
  );
};
