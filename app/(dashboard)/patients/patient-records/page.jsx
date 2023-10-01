import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiCalendar } from "react-icons/bi";
import building from "../../../../public/images/building.png";
import profile from "../../../../public/images/profile.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="px-10">
      <h1 className="text-base font-semibold border-b border-[#D0D6FF] py-4">
        Patient medical records
      </h1>
      <div className="flex flex-col mt-8 gap-4">
        {/* 1st element */}
        <div className="w-full flex gap-2">
          {/* Patient information */}
          <div className="w-1/3 border border-[#abb8ff7e] rounded-md">
            <div className="w-full p-1 bg-[#abb8ff48]"></div>
            <h4 className="p-4 font-semibold">Patient information</h4>
            <div className="p-4 flex flex-col gap-2">
              <Image src={profile} alt="profile" width={150} />
              <h4 className="text-sm text-gray-900">Sabato Hakizimana</h4>
            </div>
            <div className="p-4 flex flex-col gap-3">
              <span className="text-[#1E2F97]">ID: 0002</span>
              <div className="flex justify-between">
                <span>Gender:</span>
                <span>Male</span>
              </div>
              <div className="flex justify-between">
                <span>Guardian:</span>
                <span>Celestin</span>
              </div>
              <div className="flex justify-between">
                <span>Insurance</span>
                <span>Mutuel de Sante</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-2/3">
            {/* Hospital Location */}
            <div className="border border-[#abb8ff7e] rounded-md">
              <div className="w-full p-1 bg-[#abb8ff48]"></div>
              <h4 className="px-6 py-4 font-semibold">Hospital location</h4>
              <div className="flex px-6 justify-between">
                <div className="flex gap-2 items-center pb-4">
                  <Image src={building} height={50} width={50} alt="building" />
                  <div className="">
                    <h3 className="text-base  text-gray-600 font-extralight">
                      Current Hospital
                    </h3>
                    <h1 className="text-lg text-[#1E2F97]">CHUK</h1>
                  </div>
                </div>
                <div>
                  <h3 className="text-base  text-gray-600 font-extralight">
                    Department
                  </h3>
                  <h3 className="text-lg text-[#1E2F97]">Technology</h3>
                </div>
                <div>
                  <h3 className="text-base  text-gray-600 font-extralight">
                    Department
                  </h3>
                  <h3 className="text-lg text-[#1E2F97]">Technology</h3>
                </div>
              </div>
            </div>
            {/* Medical history */}
            <div className="border border-[#abb8ff7e] rounded-md">
              <div className="w-full p-1 bg-[#abb8ff48]"></div>
              <div className="p-4 border border-b-[#abb8ff7e] flex justify-between">
                <h4 className="font-semibold">Medical History</h4>
                <div className="flex gap-4 items-center">
                  <span className="text-gray-500">Sort by</span>
                  <span className="bg-[#1e2e9722] text-[#1E2F97] py-1 px-5 rounded-full flex items-center justify-between cursor-pointer">
                    2019 <RiArrowDropDownLine />
                  </span>
                </div>
              </div>
              <div className="p-4 border border-b-[#1e2e9722] flex justify-between">
                <div>
                  <h4 className="text-sm font-semibold">Malaria</h4>
                  <h6 className="text-gray-500 font-extralight">
                    Dr John clinic Saint Joseph
                  </h6>
                </div>
                <div className="flex gap-2 items-center">
                  <span>
                    <BiCalendar className="text-red-500" />
                  </span>
                  <span className="font-extralight">5 Dec 19</span>
                </div>
              </div>
              <div className="p-4 border border-b-[#1e2e9722] flex justify-between">
                <div>
                  <h4 className="text-sm font-semibold">Headache</h4>
                  <h6 className="text-gray-500 font-extralight">
                    Dr John clinic Saint Joseph
                  </h6>
                </div>
                <div className="flex gap-2 items-center">
                  <span>
                    <BiCalendar className="text-red-500" />
                  </span>
                  <span className="font-extralight">5 oct 19</span>
                </div>
              </div>
              <div className="p-4 border border-b-[#1e2e9722] flex justify-between">
                <div>
                  <h4 className="text-sm font-semibold">Diabetes</h4>
                  <h6 className="text-gray-500 font-extralight">
                    Dr John clinic Saint Joseph
                  </h6>
                </div>
                <div className="flex gap-2 items-center">
                  <span>
                    <BiCalendar className="text-red-500" />
                  </span>
                  <span className="font-extralight">4 Jan 19</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd element */}
        <div className="border border-[#abb8ff7e] rounded-md">
          <h4 className="p-4 font-semibold">Symptoms/Medication</h4>
        </div>
      </div>
    </div>
  );
};

export default page;
