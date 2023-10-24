"use client";

import React from "react";

type Props = {};

export default function RemoteLogin(props: Props) {
  const [isFingerprintAvailable, setIsFingerprintAvailable] = React.useState(false);

  return (
    <main className="px-8 md:px-4">
      <div className="w-full flex flex-col">
        <h1 className="text-6xl font-bold text-center lg:text-left">
          <span className=" bg-gradient-to-r from-[#9e2f6c] to-[#B24A6D] bg-clip-text text-transparent">
            Pocket Bank
          </span>
        </h1>
        <p className="mt-4 text-center">Login to the bank</p>
        {!isFingerprintAvailable &&
          <>
            <p className="mt-16 text-red-500 text-center font-bold">Fingerprint is not available</p>
            <button className="rounded-lg px-4 py-2 mt-4 text-white bg-gradient-to-bl from-[#B24A6D] to-[#564ED7] hover:from-[#c7577d] hover:to-[#6a60ed]">
              Login
            </button>
          </>
        }

      </div>
    </main>
  );
}
