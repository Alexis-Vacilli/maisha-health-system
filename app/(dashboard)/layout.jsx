import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen w-screen overflow-y-auto ">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="w-full flex flex-col  gap-10  py-10">
          {children}
        </div>
      </div>
    </div>
  );
}
