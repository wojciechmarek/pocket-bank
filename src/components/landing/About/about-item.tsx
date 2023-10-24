import { Minus, Plus } from "lucide-react";

type Props = {
  title: string;
  description: string;
  isExpanded: boolean;
  onExpandClick: () => void;
};

export const AboutItem = (props: Props) => {
  const { title, description, isExpanded, onExpandClick } = props;

  return (
    <div className="w-full py-4 flex flex-col bg-[#0f0f0f] pl-6 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <button
          className="font-bold px-6 py-3 text-2xl"
          onClick={onExpandClick}
        >
          {isExpanded ? <Minus /> : <Plus />}
        </button>
      </div>
      <p
        className={`mr-12 ${isExpanded ? "visible" : "hidden"} transition-all`}
      >
        {description}
      </p>
    </div>
  );
};
