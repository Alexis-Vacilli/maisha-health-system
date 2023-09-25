import { AiOutlineEye } from "react-icons/ai";
import Image from "next/image";
import bannerImage from "../public/images/banner.png"

const Banner = () => {
  return (
    <div className="flex rounded-md items-center bg-[#1E2F97] w-11/12 p-8 gap-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-white text-2xl">
          Welcome <span className="text-[#FFAB7F]">Sabato Hakizimana</span>
        </h1>
        <p className="text-white font-extralight">
          Have a wonderful day and remember to look for your health
        </p>
        <div className="flex gap-3 w-1/2 p-2 rounded-full justify-center items-center border-4 border-white text-white text-lg]">
          <AiOutlineEye />
          View Transfers in
        </div>
      </div>
      <div className="flex items-center w-1/2 justify-end">
        <Image src={bannerImage} alt="banner image" width={200} blur="100" className="mr-10" />
      </div>
    </div>
  );
};

export default Banner;
