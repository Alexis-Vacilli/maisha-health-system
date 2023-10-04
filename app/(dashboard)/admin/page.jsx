import Banner from "@/components/Banner";
import Card from "@/components/Card";
import React from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import BasicTable from "@/components/Table/BasicTable";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 justify-center">
      <Banner />
      <Card />
      <div className="flex justify-between items-center border-b-2 border-whiteTheme-purpleAccent w-11/12 py-2">
        <h4 className="text-base text-whiteTheme.titleColor font-semibold">
          Recent facilities
        </h4>
        <button className="bg-whiteTheme-primaryColor text-white py-2 px-10 font-semibold rounded-sm flex items-center gap-2">
          <FaPlus className="font-semibold" />
          <Link href="/admin/new-facility">Add facility</Link>
        </button>
      </div>
      <BasicTable />
    </div>
  );
};

export default page;
