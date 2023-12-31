import BasicTable from "@/components/Table/BasicTable";
import Filter from "@/components/Table/Filter";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5 justify-center">
      <div className="flex justify-between items-center  w-11/12">
        <h4 className="text-xl text-whiteTheme.titleColor font-semibold">
          System admin list
        </h4>
        <button className="bg-whiteTheme-primaryColor text-white py-2 px-10 font-semibold rounded-sm flex items-center gap-2">
          <FaPlus className="font-semibold" />
          <Link href="/admin/users/new-user">Add Admin</Link>
        </button>
      </div>
      <BasicTable />
    </div>
  );
};

export default page;
