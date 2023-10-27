"use client";

import React, { useEffect } from "react";
import PocketBase from 'pocketbase'
import { SendMoney } from "@/components/app";

type Props = {};

export default function SendMoneyPage(props: Props) {


return (
  <main className="px-8 md:px-4">
    <SendMoney />
  </main>
);
}
