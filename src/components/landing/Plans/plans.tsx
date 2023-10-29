import { PlanItem } from "./plan-item";
import React from "react";

const plans = [
  "Unlimited Cards",
  "Unlimited Transactions",
  "Unlimited ATM Withdrawals",
  "Unlimited Virtual Cards",
];

export const Plans = () => {
  return (
    <div className="mt-36 w-full">
      <h2 className="text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-[#c34f51] to-[#91A8CD] bg-clip-text text-transparent">
          3 Easy Plans.
        </span>
        <br />
        <span className="bg-gradient-to-r from-[#91A8CD] to-[#564ED7] bg-clip-text text-transparent">
          For All Your Needs.
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-3 mt-12">
        <PlanItem
          benefits={plans}
          description="The best plan for the best banking experience."
          linkText="Start Now"
          name="Free"
          price="$0/mo"
        />
        <PlanItem
          benefits={plans}
          description="The best plan for the best banking experience."
          linkText="Get Premium"
          name="Family"
          price="$9.99/mo"
        />
        <PlanItem
          benefits={plans}
          description="The best plan for the best banking experience."
          linkText="Get Premium"
          name="Enterprise"
          price="$29.99/mo"
        />
      </div>
    </div>
  );
};
