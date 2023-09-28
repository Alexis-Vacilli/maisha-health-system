import { HiOutlineSearch } from "react-icons/hi";
import { BiMoon } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <nav className="sticky top-0 h-20 bg-white px-4 border-b border-[#767676] flex justify-between items-center">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="absolute text-gray-400 top-1/2 -translate-y-1/2 right-3"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm bg-[#F6F7FF] focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-md px-4"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <BiMoon fontSize={24} />
        <span className="relative">
          <span className="absolute top-0.5  right-2 h-2.5 w-2.5 translate-x-1/2 bg-red-500 border border-white rounded-full text-xs text-white flex justify-center items-center z-10"></span>
          <IoMdNotificationsOutline fontSize={24} />
        </span>
      </div>
    </nav>
  );
};

export default Header;
