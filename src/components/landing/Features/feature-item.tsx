import React from "react";
import Image from "next/image";

type Props = {
  title1: string;
  title2: string;
  description: string;
  image: string;
  isRevertedFlow: boolean;
};

export const FeatureItem = (props: Props) => {
  const { title1, title2, description, image, isRevertedFlow } = props;
  return (
    <div
      className={`flex flex-col h-fit gap-8 mt-12 lg:h-96 items-center ${
        isRevertedFlow ? "flex-col lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="flex flex-col gap-4 w-full lg:w-2/5">
        <h3 className="text-3xl font-bold text-center lg:text-left">
          <span>{title1}</span>
          <br />
          <span>{title2}</span>
        </h3>
        <p className="text-center lg:text-left">{description}</p>
      </div>
      <div className="h-96 lg:w-3/5 bg-[#0f0f0f] rounded-lg">
        <Image src={image} alt="" height={510} width={510} className="mx-auto "/>
      </div>
    </div>
  );
};
