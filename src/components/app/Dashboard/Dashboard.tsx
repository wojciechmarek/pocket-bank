"use client";

import {
  MoreVertical,
  Plus,
  SendHorizontal,
} from "lucide-react";
import React from "react";
import { TransactionsTable } from "../History/TransactionsTable";

const accounts = [
  {
    amount: "234,02",
    code: "EUR",
    name: "Euro 🇪🇺",
  },
  {
    amount: "12 445,55",
    code: "PLN",
    name: "Polish zloty 🇵🇱",
  },
  {
    amount: "994,93",
    code: "USD",
    name: "US Dollar 🇺🇸",
  },
];

const defaultData = [
  {
    type: "in",
    date: "2021-01-01",
    amount: 20,
    description: "test",
    status: "Processing",
    amountAfter: 80,
  },
  {
    type: "in",
    date: "2021-01-02",
    amount: 20,
    description: "test",
    status: "Finished",
    amountAfter: 60,
  },
];

export const Dashboard = () => {
  return (
    <div className="min-h-screen max-w-5xl lg:mx-auto mb-8">
      <div className="mt-8">
        <p className="text-xl font-bold">Accounts</p>
        <div className="flex gap-4 mt-4">
          {accounts.map((account) => (
            <div
              className="bg-[#1d1d1d] rounded-md p-4 w-72"
              key={`account-${account.name}`}
            >
              <p className="text-2xl font-bold">
                {account.amount.split(",").at(0)}
                <span className="text-sm mr-2">
                  ,{account.amount.split(",").at(1)}
                </span>
                {account.code}
              </p>
              <p className="text-sm">{account.name}</p>
              <div className="flex mt-4 justify-evenly">
                <div className="flex flex-col gap-2 items-center">
                  <button className="p-2 rounded-full bg-[#564ED7] ">
                    <Plus size={16} />
                  </button>
                  <p className="text-xs">Add</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <button className="p-2 rounded-full bg-[#564ED7] ">
                    <SendHorizontal size={16} />
                  </button>
                  <p className="text-xs">Send</p>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <button className="p-2 rounded-full bg-[#564ED7]">
                    <MoreVertical size={16} />
                  </button>
                  <p className="text-xs">More</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <p className="text-xl font-bold mb-4">Latest transactions</p>
        <TransactionsTable
          transactions={defaultData}
          onTransactionClick={() => {}}
        />
      </div>
    </div>
  );
};
