import { CARD_DATA } from "@/constants/card";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex w-11/12 justify-between">
      {CARD_DATA.map((item) => (
        <div key={item.key} className="flex flex-col gap-3 p-8 border border-t-4 w-60 rounded-b-md" style={{ borderTopColor: item.colors }}>
          <div className="flex gap-4 items-center">
            <Image
              src={item.icon}
              alt={`${item.label}-icon`}
              width={60}
              quality={100}
            />
            <div>
              <h4 className="text-lg text-[#767676]">{item.label}</h4>
              <h2 className="text-2xl font-semibold" style={{ color: item.colors }} >{item.number}</h2>
            </div>
          </div>
          <div>
            <h4 className="text-lg" style={{ color: item.colors }}>New patients</h4>
            <h3 className="text-xl font-semibold" style={{ color: item.colors }}>120</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

// <div
//           key={item.key}
//           className={`p-6 border-2 w-60 border-t-[${item.colors}] rounded-b-md flex gap-2`}
//         >
//           <Image
//             src={item.icon}
//             alt={`${item.label}-icon`}
//             width={70}
//             quality={100}
//           />
//           <div>
//             <h3 className="text-lg text-gray-400">{item.label}</h3>
//             <h4 className={`text-xl font-bold text-${item.colors}`}>{item.number}</h4>
//           </div>
//         </div>
