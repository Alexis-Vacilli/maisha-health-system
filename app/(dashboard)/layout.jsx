"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar";
import { createContext } from "react";
import { usePathname } from "next/navigation";

export const authContext = createContext("admin");

export default function DashboardLayout({ children }) {
  let user = "";
  const router = usePathname();

  if (router.includes("admin")) {
    user = "admin";
  } else if (router.includes("nurse")) {
    user = "nurse";
  } else if (router.includes("receptionist")) {
    user = "receptionist";
  } else if (router.includes("facilitator")) {
    user = "facilitator"
  } else {
    
  }

  return (
    <authContext.Provider value={user}>
      <div className="flex h-screen w-screen overflow-y-auto">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="w-full flex flex-col  gap-10  py-10">{children}</div>
        </div>
      </div>
    </authContext.Provider>
  );
}
