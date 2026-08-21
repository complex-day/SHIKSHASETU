"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAppStore } from "@/lib/store/useAppStore";
import { RoleSwitcher } from "./RoleSwitcher";
import {
  Bell,
  Globe,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Menu,
  X,
  BookOpen
} from "lucide-react";
import { LanguageCode } from "@/types";

interface NavbarProps {
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  const { language, setLanguage, profile, currentRole } = useAppStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const languages: { code: LanguageCode; label: string; native: string }[] = [
    { code: "en", label: "English", native: "English" },
    { code: "hi", label: "Hindi", native: "हिन्दी" },
    { code: "ur", label: "Urdu", native: "اردو" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Top Sovereign Bar */}
      <div className="bg-slate-900 text-slate-300 text-[11px] font-medium py-1 px-4 sm:px-6 flex justify-between items-center border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-gov-green animate-pulse" />
          <span>Government of Jammu & Kashmir • Higher & School Education Department</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs text-slate-300">
          <span>AICTE PMSSS 2026 Portal Active</span>
          <span className="text-slate-600">|</span>
          <span>Mission Youth Helpline: 1800-180-7171</span>
          <span className="text-slate-600">|</span>
          <span className="text-gov-gold font-semibold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-gov-gold" />
            Verified Gov-Tech AI
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* Brand & Emblem */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 text-slate-600 hover:text-gov-primary hover:bg-slate-100 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gov-primary via-blue-700 to-indigo-900 flex items-center justify-center text-white shadow-md shadow-blue-900/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-gov-gold" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-gov-primary">
                  SHIKSHA<span className="text-gov-gold">SETU</span>
                </span>
                <span className="bg-gov-goldLight text-gov-goldDark border border-amber-300 text-[10px] font-bold px-1.5 py-0.2 rounded-md uppercase tracking-wider">
                  J&K AI
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                One-Stop Career & Education Advisor
              </p>
            </div>
          </Link>
        </div>

        {/* Role Switcher in center (desktop) */}
        <div className="hidden xl:flex items-center">
          <RoleSwitcher />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-lg border border-slate-200 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-gov-primary" />
              <span>{languages.find((l) => l.code === language)?.native}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl shadow-govLg border border-slate-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setShowLangDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between ${
                      language === l.code
                        ? "bg-blue-50 text-gov-primary font-bold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{l.native}</span>
                    <span className="text-[10px] text-slate-400">{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notification Center */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-slate-600 hover:text-gov-primary hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-gov-orange ring-2 ring-white" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-govLg border border-slate-200 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    J&K Education Alerts & Deadlines
                  </h4>
                  <span className="text-[10px] font-semibold text-gov-primary bg-blue-50 px-2 py-0.5 rounded-full">
                    3 New
                  </span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5 bg-amber-50 rounded-xl border border-amber-200/80 flex gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-gov-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800">PMSSS 2026 Registration Open</p>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Class 12 verification open across 40 J&K facilitation centers.
                      </p>
                      <span className="text-[10px] font-bold text-gov-orange mt-1 inline-block">
                        Deadline: 30 June 2026
                      </span>
                    </div>
                  </div>
                  <div className="p-2.5 bg-blue-50 rounded-xl border border-blue-200/80 flex gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gov-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800">Mission Youth 'Parvaaz' Coaching</p>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        Free IAS/JKAS entrance qualifying test registrations now accepting.
                      </p>
                    </div>
                  </div>
                  <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200/80 flex gap-2.5">
                    <BookOpen className="w-4 h-4 text-gov-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-800">New AI & Tech Courses on SWAYAM</p>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        IIT Kharagpur machine learning batch open for enrollment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 text-center">
                  <Link
                    href="/scholarships"
                    onClick={() => setShowNotifications(false)}
                    className="text-xs font-semibold text-gov-primary hover:underline"
                  >
                    View All Scholarship & Admission Alerts →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Avatar Card */}
          <Link
            href="/profile"
            className="flex items-center gap-2.5 pl-2 py-1 pr-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200/80 transition-colors"
          >
            <div className="w-7 h-7 rounded-lg bg-gov-primary text-white font-bold text-xs flex items-center justify-center shadow-sm">
              {profile.fullName.charAt(0)}
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-slate-800 leading-none">{profile.fullName.split(" ")[0]}</p>
              <p className="text-[10px] text-slate-500 leading-tight capitalize">
                {profile.district} • {currentRole.replace("_", " ")}
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Role Switcher Bar */}
      <div className="xl:hidden px-4 py-1.5 bg-slate-50 border-t border-slate-200 flex justify-center overflow-x-auto">
        <RoleSwitcher />
      </div>
    </header>
  );
};
