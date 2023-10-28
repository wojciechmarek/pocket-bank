"use client";

import { Navigation } from "@/components/app";
import { pb } from "@/pocketbase/pocketbase";
import { useRouter } from "next/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
