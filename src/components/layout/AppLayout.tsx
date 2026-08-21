"use client";

import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc]">
      {/* Top Navigation */}
      <Navbar
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex-1 flex">
        {/* Main Left Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Content View Container */}
        <div className="flex-1 flex flex-col lg:pl-72 min-w-0">
          <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
