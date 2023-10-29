"use client";

import { Investing, Navigation } from "@/components/app";
import React from "react";
import { pb } from "@/pocketbase/pocketbase";
import { useRouter } from "next/navigation";

export default function InvestingPage() {
  const router = useRouter();
  if (!pb.authStore.isValid) {
    router.push("/login");
  }

  return (
    <>
      <Navigation />
      <main className="px-8 md:px-4">
        <Investing />
      </main>
    </>
  );
}
