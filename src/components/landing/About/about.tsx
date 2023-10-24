"use client";

import { useState } from "react";
import { AboutItem } from "./about-item";

type Props = {};

export const About = (props: Props) => {
  const [expandedItem, setExpandedItem] = useState(0);

  const handleFaqItemExpandClick = (itemNo: number) => {
    if (expandedItem === itemNo) {
      setExpandedItem(0);
    } else {
      setExpandedItem(itemNo);
    }
  };

  return (
    <div className="mt-56 lg:mt-36 w-full">
      <h2 className="text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-[#c34f51] to-[#91A8CD] bg-clip-text text-transparent">
          FAQ.
        </span>
        <br />
        <span className="bg-gradient-to-r from-[#91A8CD] to-[#564ED7] bg-clip-text text-transparent">
          Get To Know Us.
        </span>
      </h2>
      <div className="flex flex-col gap-4 mt-12">
        <AboutItem
          title="What is Pocket Bank?"
          description="Pocket bank is a banking app that allows you to manage your money, pay bills, and much more. It's the only banking app you'll ever need."
          isExpanded={expandedItem === 1}
          onExpandClick={() => handleFaqItemExpandClick(1)}
        />
        <AboutItem
          title="Who can use Pocket Bank?"
          description="Everyone can use Pocket Bank. It's the only banking app you'll ever need."
          isExpanded={expandedItem === 2}
          onExpandClick={() => handleFaqItemExpandClick(2)}
        />
        <AboutItem
          title="How do I get started?"
          description="Just sign up for an account and you're good to go. It's that simple."
          isExpanded={expandedItem === 3}
          onExpandClick={() => handleFaqItemExpandClick(3)}
        />
        <AboutItem
          title="How old do I have to be to use Pocket Bank?"
          description="You have to be at least 18 years old to use Pocket Bank. If you are younger than that, you can ask your parents to create an account for you."
          isExpanded={expandedItem === 4}
          onExpandClick={() => handleFaqItemExpandClick(4)}
        />
      </div>
    </div>
  );
};
