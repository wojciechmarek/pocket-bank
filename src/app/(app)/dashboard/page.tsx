"use client";

import React from "react";

import { Dashboard, Navigation } from "@/components/app";
import { useRouter } from "next/navigation";
import { pb } from "@/pocketbase/pocketbase";

type Props = {};

export default function DashboardPage(props: Props) {
  const router = useRouter();
  if (!pb.authStore.isValid) {
    router.push("/login");
  }

  return (
    <>
      <Navigation />
      <main className="px-8 md:px-4">
        <Dashboard />
      </main>
    </>
  );
}
