import Filter from "@/components/Table/Filter";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 justify-center">
      <div className="flex justify-between items-center  w-11/12">
        <h4 className="text-xl text-whiteTheme.titleColor font-semibold">
          Facility list
        </h4>
        <button className="bg-whiteTheme-primaryColor text-white py-2 px-10 font-semibold rounded-sm flex items-center gap-2">
          <FaPlus className="font-semibold" />
          <Link href="/admin/facilities/new-facility">Add facility</Link>
        </button>
      </div>
      <Filter />
    </div>
  );
};

export default page;
