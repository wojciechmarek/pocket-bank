"use client";

import React, { useEffect } from "react";
import PocketBase from 'pocketbase'
import { Investing } from "@/components/app";

type Props = {};

export default function InvestingPage(props: Props) {

return (
  <main className="px-8 md:px-4">
    <Investing />
  </main>
);
}
