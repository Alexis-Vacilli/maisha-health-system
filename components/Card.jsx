import { CARD_DATA } from "@/constants/card";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex justify-between gap-7 items-center">
      {CARD_DATA.map((item) => (
        <div
          key={item.key}
          className={`p-6 border-2 w-60 border-t-[${item.colors}] rounded-b-md flex gap-2`}
        >
          <Image
            src={item.icon}
            alt={`${item.label}-icon`}
            width={70}
            quality={100}
          />
          <div>
            <h3 className="text-lg text-gray-400">{item.label}</h3>
            <h4 className={`text-xl font-bold text-${item.colors}`}>{item.number}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
