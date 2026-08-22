"use client";

import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { useAppStore } from "@/lib/store/useAppStore";
import { Compass, PanelLeftOpen } from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { isSidebarOpen, toggleSidebar, setSidebarOpen } = useAppStore();

  // Responsive initial state and keyboard shortcuts
  useEffect(() => {
    // If mobile on mount, ensure closed
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setSidebarOpen(false);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape closes sidebar
      if (e.key === "Escape") {
        setSidebarOpen(false);
      }
      // Ctrl+B / Cmd+B toggles sidebar
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setSidebarOpen, toggleSidebar]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] relative">
      {/* Top Navigation */}
      <Navbar
        onToggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex-1 flex relative">
        {/* Main Left Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Floating Quick-Open Tab when Navigation Suite is closed */}
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="fixed left-0 top-28 z-30 bg-gov-primary hover:bg-gov-primaryDark text-white px-2.5 py-2 rounded-r-xl shadow-lg hover:shadow-blue-900/20 border-y border-r border-blue-600/50 flex items-center gap-1.5 text-xs font-bold transition-all duration-200 hover:pl-3 group animate-in fade-in slide-in-from-left-4"
            title="Open Navigation Suite (Ctrl+B)"
            aria-label="Open Navigation Suite"
          >
            <Compass className="w-4 h-4 text-gov-gold group-hover:rotate-45 transition-transform duration-300" />
            <span className="hidden md:inline tracking-tight">Navigation</span>
          </button>
        )}

        {/* Content View Container */}
        <div
          className={`flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "lg:pl-72" : "pl-0"
          }`}
        >
          <main className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};
