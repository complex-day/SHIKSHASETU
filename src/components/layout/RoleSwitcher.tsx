"use client";

import React from "react";
import { useAppStore } from "@/lib/store/useAppStore";
import { UserRole } from "@/types";
import { User, Users, Compass, School, Landmark } from "lucide-react";

interface RoleOption {
  id: UserRole;
  label: string;
  sublabel: string;
  icon: React.ElementType;
}

const ROLES: RoleOption[] = [
  { id: "student", label: "Student", sublabel: "Career & Study Path", icon: User },
  { id: "parent", label: "Parent", sublabel: "Growth & Scholarships", icon: Users },
  { id: "counselor", label: "Counselor", sublabel: "Guidance & Assessment", icon: Compass },
  { id: "school_admin", label: "School Admin", sublabel: "Batch Performance", icon: School },
  { id: "govt_admin", label: "Govt Admin", sublabel: "J&K Youth Analytics", icon: Landmark },
];

export const RoleSwitcher: React.FC = () => {
  const { currentRole, setRole } = useAppStore();

  return (
    <div className="relative inline-flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner">
      {ROLES.map((r) => {
        const Icon = r.icon;
        const isActive = currentRole === r.id;
        return (
          <button
            key={r.id}
            onClick={() => setRole(r.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
              isActive
                ? "bg-gov-primary text-white shadow-md shadow-blue-900/20 scale-[1.02]"
                : "text-slate-600 hover:text-gov-primary hover:bg-white/60"
            }`}
            title={`${r.label} View (${r.sublabel})`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? "text-gov-gold" : ""}`} />
            <span className="hidden sm:inline">{r.label}</span>
          </button>
        );
      })}
    </div>
  );
};
