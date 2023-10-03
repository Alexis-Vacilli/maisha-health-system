import {
  HiMenuAlt3,
  HiOutlineUserGroup,
  HiOutlineUsers,
  HiOutlineBuildingOffice,
} from "react-icons/hi";
import {
  MdOutlineHealthAndSafety,
  MdLogout
} from "react-icons/md";
import {
  PiSquaresFour,
  PiBuildingsBold
} from "react-icons/pi";
import {
  AiOutlineSwap,
  AiOutlineExclamationCircle
} from "react-icons/ai";
import {
  FiSettings
} from "react-icons/fi";

import {
  CiHospital1
} from "react-icons/ci";




// userRoutes.js
const userRoutes = {
  admin: [{
      path: "/admin/",
      label: "Overview",
      key: "overview",
      icon: < PiSquaresFour / >
    },
    {
      path: "/admin/users",
      label: "Users",
      key: "users",
      icon: < HiOutlineUserGroup / >
    },
    {
      path: "/admin/facilities",
      label: "Facilities",
      key: "facilities",
      icon: < CiHospital1 />
    },
  ],

  facilitator: [{
      path: "/facilitator/",
      label: "Overview",
      key: "overview",
      icon: < PiSquaresFour / >
    },
    {
      path: "/facilitator/hospital-staff",
      label: "Hospital Staff",
      key: "hospitalStaff",
      icon: < HiOutlineUserGroup / >
    },
    {
      path: "/facilitator/patients",
      label: "Patients",
      key: "patients",
      icon: < HiOutlineUserGroup / >
    },
    {
      path: "/facilitator/department",
      label: "Department",
      key: "department",
      icon: < HiOutlineUserGroup / >
    },
    {
      path: "/facilitator/insurance",
      label: "Insurance",
      key: "insurance",
      icon: < CiHospital1 />
    },
  ],
  
  receptionist: [{
      path: "/receptionist/overview",
      label: "Overview",
      key: "overview",
      icon: < PiSquaresFour / >
    },
    {
      path: "/receptionist/patients",
      label: "Patients",
      key: "patients",
      icon: < HiOutlineUserGroup / >
    },
  ],
  nurse: [{
      path: "/receptionist/overview",
      label: "Overview",
      key: "overview",
      icon: < PiSquaresFour / >
    },
    {
      path: "/receptionist/patients",
      label: "Patients",
      key: "patients",
      icon: < PiSquaresFour / >
    },
  ]
};

export default userRoutes;