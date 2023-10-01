import { HiOutlineSearch } from "react-icons/hi";
import { BiMoon } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <nav className="sticky top-0 h-20 bg-white px-4 border-b border-[#767676] flex justify-between items-center">
      <h1 className="text-2xl text-gray-900 font-semibold">Receptionist</h1>
      <div className="flex items-center gap-4 mr-2">
        <BiMoon fontSize={24} />
        <span className="relative">
          <span className="absolute top-0.5  right-2 h-2.5 w-2.5 translate-x-1/2 bg-red-500 border border-white rounded-full text-xs text-white flex justify-center items-center z-10"></span>
          <IoMdNotificationsOutline fontSize={24} />
        </span>
        <div>
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Header;
