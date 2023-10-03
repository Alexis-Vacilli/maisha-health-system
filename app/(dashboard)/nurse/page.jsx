import Banner from "@/components/Banner";
import React from "react";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { AiOutlineEye } from "react-icons/ai";
import Image from "next/image";
import ourPatients from "../../../public/images/ourpatients.png";
import emergencyImage from "../../../public/images/emergencyTransfers.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 justify-center ">
      <Banner />
      <div className="w-11/12">
        <h3 className="text-whiteTheme-titleColor text-lg pb-5">{`Today's statistics`}</h3>
        {/* Cards */}
        <div className="flex justify-between border border-whiteTheme-secondaryColor border-t-4 border-t-whiteTheme-primaryColor border-b-4 border-b-whiteTheme-secondaryColor p-8">
          <div className="flex gap-5 justify-center items-center">
            <span>
              <Image src={ourPatients} alt="image" width={60} quality={100} />
            </span>
            <div>
              <h3 className="text-base text-whiteTheme-titleColor">
                Our patients
              </h3>
              <h2 className="text-2xl text-whiteTheme-primaryColor font-semibold">
                123
              </h2>
            </div>
            <div>
              <PiDotsThreeOutlineVerticalBold className="cursor-pointer text-whiteTheme-secondaryColor" />
            </div>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <span>
              <Image
                src={emergencyImage}
                alt="image"
                width={60}
                quality={100}
              />
            </span>
            <div>
              <h3 className="text-base text-whiteTheme-titleColor">
                Emargency patients
              </h3>
              <h2 className="text-2xl text-whiteTheme-orangeAccent font-semibold">
                123
              </h2>
            </div>
            <div>
              <PiDotsThreeOutlineVerticalBold className="cursor-pointer text-whiteTheme-secondaryColor" />
            </div>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <span>
              <Image
                src={emergencyImage}
                alt="image"
                width={60}
                quality={100}
              />
            </span>
            <div>
              <h3 className="text-base text-whiteTheme-titleColor">
                {`Today's active doctors`}
              </h3>
              <h2 className="text-2xl text-whiteTheme-orangeAccent font-semibold">
                23
              </h2>
            </div>
            <div>
              <PiDotsThreeOutlineVerticalBold className="cursor-pointer text-whiteTheme-secondaryColor" />
            </div>
          </div>
        </div>
        <div className="py-6">
          <div className="flex justify-between items-center border-b-2 border-whiteTheme.secondaryColor w-full py-2">
            <h4 className="text-base text-whiteTheme.titleColor font-semibold">
              {`Today's recent assigned patients`}
            </h4>
            <button className="bg-whiteTheme-primaryColor text-white py-2 px-10 font-semibold rounded-sm flex items-center gap-2">
              <AiOutlineEye className="font-semibold" />
              <Link href="/admin/new-facility">View all</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
