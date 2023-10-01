import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner";
import Tables from "@/components/Table/Tables";
import Card from "@/components/Card";
import { BasicTable } from "@/components/Table/BasicTable";

export default function Home() {
  return (
    <div className="flex flex-row h-screen w-screen overflow-y-auto">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="w-full flex flex-col items-center gap-10 justify-center py-10">
          <Banner />
          <Card />
          <Tables />
        </div>
      </div>
    </div>
  );
}
