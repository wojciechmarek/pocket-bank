"use client";

import React from "react";
import PocketBase from "pocketbase";
import { History, Navigation } from "@/components/app";
import { useRouter } from "next/navigation";
import { pb } from "@/pocketbase/pocketbase";

type Props = {};

export default function HistoryPage(props: Props) {
  const router = useRouter();
  if (!pb.authStore.isValid) {
    router.push("/login");
  }

  return (
    <>
      <Navigation />
      <main className="px-8 md:px-4">
        <History />
      </main>
    </>
  );
}
