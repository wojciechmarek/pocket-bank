import React from "react";
import { QRCodeSVG } from "qrcode.react";

type Props = {};

export default function Login(props: Props) {
  return (
    <div className="bg-[#0f0f0f] h-fit w-fit p-4 rounded-lg">
      <h1 className="text-3xl font-bold text-center lg:text-left">
        <span className="bg-gradient-to-r from-[#B24A6D] to-[#7E78A6] bg-clip-text text-4xl text-transparent">
          Pocket bank
        </span>
      </h1>
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-2xl font-bold">Login to your favorite bank:</h2>
        <div className="flex gap-12 h-72">
          <div className="flex flex-col gap-2 w-96">
            <p>Enter your credentials</p>
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
          <div className="bg-[#1d1d1d] w-0.5 h-full"></div>
          <div className="flex flex-col gap-2 w-72">
            <p>If you have a mobile app installed, scan a QR code:</p>
            <div className="flex-row grid h-full place-items-center">
              <QRCodeSVG value="https://pocketbank.com/login" className="p-2 bg-white"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
