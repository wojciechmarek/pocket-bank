import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  price: string;
  description: string;
  benefits: string[];
  linkText: string;
};

export const PlanItem = (props: Props) => {
  const { name, price, description, benefits, linkText } = props;

  return (
    <div className="h-fit lg:h-[500px] w-full lg:w-1/3 bg-[#0f0f0f] flex flex-col rounded-xl justify-between px-6 sm:px-20 lg:px-6 hover:bg-[#151515]">
      <div className="flex justify-between lg:flex-col mt-8 lg:mt-0 gap-4">
        <div>
          <h3 className="text-4xl font-bold lg:mt-8 text-center">{name}</h3>
          <div className="flex flex-col items-center mt-8">
            <p className="text-2xl font-bold">{price}</p>
            <p className="text-center px-6">{description}</p>
          </div>
        </div>

        <ul className="flex flex-col gap-3 lg:mt-8 list-disc list-inside">
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
      <Link
        className="mt-8 lg:mt-0 px-12 py-3 font-bold rounded-full bg-gradient-to-r from-[#B24A6D] to-[#564ED7] mb-8 mx-auto"
        href="/login"
      >
        {linkText}
      </Link>
    </div>
  );
};
