"use client";

import { FeatureItem } from "./feature-item";
import React from "react";
import { motion } from "framer-motion";

export const Features = () => {
  return (
    <div className="mt-56 lg:mt-36 w-full">
      <h2 className="text-4xl font-bold text-center">
        <span className="bg-gradient-to-r from-[#c34f51] to-[#91A8CD] bg-clip-text text-transparent">
          One App. Multiple Benefits.
        </span>
        <br />
        <span className="bg-gradient-to-r from-[#91A8CD] to-[#564ED7] bg-clip-text text-transparent">
          Tons Of Features.
        </span>
      </h2>

      {/* FEATURE 1 */}
      <motion.div>
        <FeatureItem
          title1="Great Dashboard"
          title2="with Light/Dark Mode."
          description="Make your banking experience more enjoyable with our great dashboard, which supports both Light and Dark Mode."
          image="/feature1.jpg"
          isRevertedFlow={false}
        />
      </motion.div>

      {/* FEATURE 2 */}
      <motion.div>
        <FeatureItem
          title1="Unlimited Cards"
          title2="only in the Premium Plan."
          description="Credit cards, debit cards, virtual cards, you name it. We have it all. And you can have it too, by subscribing to our Premium Plan."
          image="/feature2.png"
          isRevertedFlow={true}
        />
      </motion.div>

      {/* FEATURE 3 */}
      <motion.div>
        <FeatureItem
          title1="IRS Tax Calculator"
          title2="to pay less taxes."
          description="Start saving money by paying less taxes. Our IRS Tax Calculator will help you calculate your taxes and save money."
          image="/feature3.jpg"
          isRevertedFlow={false}
        />
      </motion.div>
    </div>
  );
};
