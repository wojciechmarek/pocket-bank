import React from "react";
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";

type Props = {};

export default function Login(props: Props) {
  return (
    <main className="px-8 md:px-4">
      <div className="bg-[#0f0f0f] h-[500px] w-full lg:w-[1000px] rounded-lg flex flex-row">
        <div className="h-full hidden lg:block w-full lg:w-1/2 relative">
          <Image src="/cards.png" alt="" fill={true} style={{ objectFit: "cover" }} className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-4 lg:w-1/2 px-4 lg:px-8 py-4">
          <div className="flex flex-col">
            <div className="flex flex-col gap-2 w-full">
              <p className="font-bold">Enter your credentials:</p>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="bg-[#1d1d1d] rounded-lg px-4 py-2"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="bg-[#1d1d1d] rounded-lg px-4 py-2"
                  />
                </div>
                <button className="rounded-lg px-4 py-2 text-white bg-gradient-to-r from-[#B24A6D] to-[#564ED7] hover:from-[#c7577d] hover:to-[#6a60ed]">
                  Login
                </button>
              </form>
            </div>
            <div className="bg-[#1d1d1d] w-full h-0.5 mt-8"></div>
            <div className="flex gap-2 w-full mt-8">
              <p className="w-1/2 font-bold">If you have a mobile app installed, scan a QR code:</p>
              <div className="w-1/2 flex-row grid h-full place-items-center">
                <QRCodeSVG value="https://pocketbank.com/login" className="p-2 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
