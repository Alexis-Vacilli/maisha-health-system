import {
  E_TRANSFERS_LINKS,
  HELP_SETTINGS_LINKS,
} from "@/constants/navigation";
import Link from "next/link";
import logo from '../public/images/favicon.png';
import Image from "next/image";
import userRoutes from "@/constants/userRoutes";
import { authContext } from "@/app/(dashboard)/layout";
import { useContext } from "react";

const Sidebar = () => {
  const userRole = useContext(authContext)
  const routes = userRoutes[userRole];

  return (
    <aside className=" sticky top-0 bg-white flex flex-col py-6 w-64 items-center space-y-7 border-r border-[#abb8ff]">
      <div className="flex justify-center py-5">
        {/* <Image src={logo} alt="Maisha logo" width={130} quality={100}  placeholder="blur" /> */}
        <div className="text-3xl font-bold text-gray-700">[Maisha-<span className="text-whiteTheme-primaryColor">Logo]</span></div>
      </div>
      <div className="w-full">
        <h3 className=" text-whiteTheme-titleColor pl-12 font-semibold">Main menu</h3>
        <div className="flex flex-col">
          {routes.map((route) => (
            <SidebarLink key={route.key} item={route} />
          ))}
        </div>
      </div>
      <div className="w-full">
        <h3 className="text-whiteTheme-titleColor pl-12 font-semibold">Transfers</h3>
        <div className="flex flex-col">
          {E_TRANSFERS_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>
      </div>
      <div className="w-full">
        <h3 className="text-whiteTheme-titleColor pl-12  font-semibold">Help & Settings</h3>
        <div className="flex flex-col">
          {HELP_SETTINGS_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
};

const SidebarLink = ({ item }) => {
  return (
    <Link
      href={item.path}
      className="flex justify-start items-center gap-2 px-11 py-3 text-base text-whiteTheme-blackAccent border-l-8 border-[#515ea900]  hover:border-[#515ea9] hover:bg-[#515ea917] hover:text-[#515ea9] hover:no-underline active:bg-[#515ea962]"
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
};

export default Sidebar;
