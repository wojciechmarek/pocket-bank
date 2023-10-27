"use client";

import React, { useEffect } from "react";
import PocketBase from 'pocketbase'
import { Dashboard } from "@/components/app";

type Props = {};

export default function DashboardPage(props: Props) {


return (
  <main className="px-8 md:px-4">
    <Dashboard />
  </main>
);
}
