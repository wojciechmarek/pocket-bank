"use client";

import { Navigation, SendMoney } from "@/components/app";
import React from "react";
import { pb } from "@/pocketbase/pocketbase";
import { useRouter } from "next/navigation";

export default function SendMoneyPage() {
  // const router = useRouter();
  // if (!pb.authStore.isValid) {
  //   router.push("/login");
  // }

  return (
    <>
      <Navigation />
      <main className="px-8 md:px-4">
        <SendMoney />
      </main>
    </>
  );
}
