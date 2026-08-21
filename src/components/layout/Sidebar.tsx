"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  UserCheck,
  Brain,
  Compass,
  GraduationCap,
  Award,
  Sparkles,
  GitFork,
  BotMessageSquare,
  MapPin,
  BarChart3,
  ShieldAlert,
  ChevronRight,
  Flame
} from "lucide-react";
import { useAppStore } from "@/lib/store/useAppStore";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  roles?: string[];
}

const NAV_ITEMS: NavItem[] = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Student Profile", href: "/profile", icon: UserCheck, badge: "Module 1" },
  { name: "Career Assessment", href: "/assessment", icon: Brain, badge: "Module 2" },
  { name: "Career Recommendations", href: "/recommendations", icon: Compass, badge: "AI Core" },
  { name: "College Finder", href: "/colleges", icon: GraduationCap, badge: "J&K + PMSSS" },
  { name: "Scholarship Matcher", href: "/scholarships", icon: Award, badge: "₹3L Benefit" },
  { name: "Skill Gap Analyzer", href: "/skill-gap", icon: Sparkles, badge: "Module 6" },
  { name: "Career Roadmap", href: "/roadmap", icon: GitFork, badge: "Timeline" },
  { name: "AI Career Counselor", href: "/counselor", icon: BotMessageSquare, badge: "Live Chat" },
  { name: "Opportunity Heatmap", href: "/heatmap", icon: MapPin, badge: "20 Districts" },
  { name: "Reports & Analytics", href: "/analytics", icon: BarChart3, badge: "Module 10" },
  { name: "Administration & Agents", href: "/admin", icon: ShieldAlert, badge: "Admin" },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { currentRole, orchestrationReport } = useAppStore();

  const readinessScore = orchestrationReport?.profileAnalysis?.readinessScore || 86;

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gov-primary flex items-center justify-center text-white shadow-sm">
              <Compass className="w-4 h-4 text-gov-gold" />
            </div>
            <div>
              <h2 className="font-extrabold text-sm text-gov-primary tracking-tight">
                NAVIGATION SUITE
              </h2>
              <p className="text-[10px] text-slate-500 font-medium capitalize">
                Mode: {currentRole.replace("_", " ")}
              </p>
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden text-xs text-slate-400 hover:text-slate-700 px-2 py-1 bg-slate-100 rounded-md"
            >
              Close
            </button>
          )}
        </div>

        {/* Career Readiness Mini-Widget */}
        <div className="p-3 mx-3 my-2.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/80">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-gov-orange fill-gov-orange" />
              Career Readiness Score
            </span>
            <span className="text-xs font-extrabold text-gov-primary">{readinessScore}%</span>
          </div>
          <div className="w-full bg-blue-200/60 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-gov-primary to-gov-gold h-full rounded-full transition-all duration-500"
              style={{ width: `${readinessScore}%` }}
            />
          </div>
          <p className="text-[10px] text-slate-500 mt-1">
            Status: <span className="text-gov-green font-semibold">High Potential Tier</span>
          </p>
        </div>

        {/* Navigation Items List */}
        <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 ${
                  isActive
                    ? "bg-gov-primary text-white shadow-md shadow-blue-900/15"
                    : "text-slate-600 hover:text-gov-primary hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? "text-gov-gold" : "text-slate-400 group-hover:text-gov-primary"
                    }`}
                  />
                  <span>{item.name}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {item.badge && (
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-gov-primary"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight
                    className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ${
                      isActive ? "opacity-100 text-white/70" : "text-slate-400"
                    }`}
                  />
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Footer info */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/70 text-[11px] text-slate-500">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>ShikshaSetu v1.0</span>
            <span>J&K Govt</span>
          </div>
        </div>
      </aside>
    </>
  );
};
