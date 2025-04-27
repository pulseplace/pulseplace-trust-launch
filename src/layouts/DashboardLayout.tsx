
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";

interface DashboardLayoutProps {
  isAdmin?: boolean;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ isAdmin = false }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <div className="flex h-screen bg-pulse-gray">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} isAdmin={isAdmin} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar isAdmin={isAdmin} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
