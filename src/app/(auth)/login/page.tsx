"use client";

import React, { useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";

type Props = {};

export default function Login(props: Props) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const handleMakePasswordVisibleClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const uuid = uuidv4();

  const router = useRouter();
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(`https://pocket-bank.vercel.app/api/authorized-ids`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Origin": "https://pocket-bank.vercel.app",
        },
        body: JSON.stringify({
          id: uuid,
        }),
      }).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            if (data.isAuthorized) {
              router.push('/dashboard');
            }
          });
        }
      }
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

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
                    className="bg-[#1d1d1d] rounded-lg px-4 py-2 disabled:opacity-50"
                    value="demo@pocket-bank.com"
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="password">Password</label>
                  <div className="flex flex-row justify-between items-center relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      id="password"
                      className="bg-[#1d1d1d] rounded-lg px-4 py-2 disabled:opacity-50 w-full"
                      value="Demo123!"
                      disabled
                    />
                    <button className="absolute right-4" style={{ top: "50%", transform: "translateY(-50%)" }} onClick={handleMakePasswordVisibleClick} type="button">
                      {
                        isPasswordVisible ? (
                          <EyeOff size={24} />
                        ) : (
                          <Eye size={24} />
                        )
                      }
                    </button>
                  </div>
                </div>
                <button className="rounded-lg px-4 py-2 mt-2 text-white bg-gradient-to-bl from-[#B24A6D] to-[#564ED7] hover:from-[#c7577d] hover:to-[#6a60ed]">
                  Login
                </button>
              </form>
            </div>
            <div className="bg-[#1d1d1d] w-full h-0.5 mt-6"></div>
            <div className="flex gap-2 w-full mt-6">
              <p className="w-1/2 font-bold">Scan a QR code to login using fingerprint:</p>
              <div className="w-1/2 flex-row grid h-full place-items-center">
                <QRCodeSVG value={`https://pocket-bank.vercel.app/remote-login?id=${uuid}`} className="p-2 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
