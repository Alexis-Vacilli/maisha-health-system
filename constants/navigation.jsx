import {
    HiMenuAlt3,
    HiOutlineUserGroup,
    HiOutlineUsers,
    HiOutlineBuildingOffice,
  } from "react-icons/hi";
  import { MdOutlineHealthAndSafety, MdLogout } from "react-icons/md";
  import { PiSquaresFour, PiBuildingsBold } from "react-icons/pi";
  import { AiOutlineSwap, AiOutlineExclamationCircle } from "react-icons/ai";
  import { FiSettings } from "react-icons/fi";

export const MAIN_MENU_LINKS = [
    {
        key: "overview",
        label: "Overview",
        path: "/overview",
        icon: <PiSquaresFour />
    },
    {
        key: "patients",
        label: "Patients",
        path: "/patients",
        icon: <HiOutlineUserGroup />
    },


];

export const E_TRANSFERS_LINKS = [
    {
        key: "transferIn",
        label: "Transfer In",
        path: "/transfers_in",
        icon: <AiOutlineSwap />
    },
    {
        key: "transferOut",
        label: "Transfer Out",
        path: "/transfers_out",
        icon: <AiOutlineSwap />
    },

];

export const HELP_SETTINGS_LINKS = [
    {
        key: "helpCenter",
        label: "Help Center",
        path: "/help_center",
        icon: <AiOutlineExclamationCircle />
    },
    {
        key: "settings",
        label: "Settings",
        path: "/settings",
        icon: <FiSettings />
    },
    {
        key: "logout",
        label: "Logout",
        path: "/logout",
        icon: <MdLogout />
    }
]

