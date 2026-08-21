"use client";

import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAppStore } from "@/lib/store/useAppStore";
import { JK_DISTRICTS_DATA } from "@/lib/data/jkDistricts";
import { DistrictOpportunityData } from "@/types";
import {
  MapPin,
  Building2,
  GraduationCap,
  Sparkles,
  Award,
  TrendingUp,
  Layers,
  ChevronRight,
  ShieldCheck,
  Compass,
  Users,
  X
} from "lucide-react";

export default function HeatmapPage() {
  const { profile } = useAppStore();
  const [selectedMetric, setSelectedMetric] = useState<"opportunity" | "colleges" | "beneficiaries" | "hubs">("opportunity");
  const [activeDistrict, setActiveDistrict] = useState<DistrictOpportunityData>(
    JK_DISTRICTS_DATA.find((d) => d.name.toLowerCase() === (profile.district?.toLowerCase() || "srinagar")) ||
    JK_DISTRICTS_DATA[0]
  );
  const [divisionFilter, setDivisionFilter] = useState<"All" | "Kashmir" | "Jammu">("All");

  const filteredDistricts = JK_DISTRICTS_DATA.filter((d) => {
    if (divisionFilter !== "All" && d.division !== divisionFilter) return false;
    return true;
  });

  const getDistrictMetricValue = (dist: DistrictOpportunityData) => {
    switch (selectedMetric) {
      case "opportunity":
        return `${dist.opportunityScore}/100 Score`;
      case "colleges":
        return `${dist.collegeCount + dist.polytechnicCount} Institutes`;
      case "beneficiaries":
        return `${(dist.activeScholarshipBeneficiaries / 1000).toFixed(1)}k Scholars`;
      case "hubs":
        return `${dist.missionYouthCenters} Centers`;
    }
  };

  const getScoreColorBg = (score: number) => {
    if (score >= 88) return "bg-emerald-500 text-white";
    if (score >= 80) return "bg-blue-600 text-white";
    if (score >= 74) return "bg-amber-500 text-white";
    return "bg-slate-700 text-white";
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-xs font-bold text-teal-800">
              <MapPin className="w-3.5 h-3.5" />
              <span>Module 9: J&K 20-District Opportunity Heatmap</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Geo-Economic & Educational Resource Heatmap
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Visual intelligence across all 20 districts of Jammu & Kashmir mapping college density, Mission Youth skilling centers, industrial growth zones, and regional scholarship absorption.
            </p>
          </div>

          {/* Metric Selector Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setSelectedMetric("opportunity")}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                selectedMetric === "opportunity"
                  ? "bg-gov-primary text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Opportunity Score
            </button>
            <button
              onClick={() => setSelectedMetric("colleges")}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                selectedMetric === "colleges"
                  ? "bg-gov-primary text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Colleges & Polytechs
            </button>
            <button
              onClick={() => setSelectedMetric("beneficiaries")}
              className={`px-3 py-1.5 rounded-xl transition-all ${
                selectedMetric === "beneficiaries"
                  ? "bg-gov-primary text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Scholarship Beneficiaries
            </button>
          </div>
        </div>

        {/* 2-COLUMN LAYOUT: DISTRICT HEATMAP TILES (LEFT) & DISTRICT DOSSIER (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* DISTRICT HEATMAP GRID (2 COLS) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Division Filter Tabs */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-bold">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDivisionFilter("All")}
                  className={`px-3 py-1 rounded-xl transition-colors ${
                    divisionFilter === "All" ? "bg-gov-primary text-white" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  All 20 Districts
                </button>
                <button
                  onClick={() => setDivisionFilter("Kashmir")}
                  className={`px-3 py-1 rounded-xl transition-colors ${
                    divisionFilter === "Kashmir" ? "bg-gov-primary text-white" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Kashmir Division (10)
                </button>
                <button
                  onClick={() => setDivisionFilter("Jammu")}
                  className={`px-3 py-1 rounded-xl transition-colors ${
                    divisionFilter === "Jammu" ? "bg-gov-primary text-white" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Jammu Division (10)
                </button>
              </div>

              <span className="text-slate-400 text-[11px] hidden sm:inline">
                Click district for full institutional dossier
              </span>
            </div>

            {/* Heatmap Grid of Districts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filteredDistricts.map((dist) => {
                const isSelected = activeDistrict.id === dist.id;
                const isHome = dist.name.toLowerCase() === (profile.district?.toLowerCase() || "srinagar");

                return (
                  <button
                    key={dist.id}
                    onClick={() => setActiveDistrict(dist)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between gap-3 relative group ${
                      isSelected
                        ? "border-gov-primary bg-blue-50/80 shadow-md shadow-blue-900/10 ring-2 ring-gov-primary/20 scale-[1.02]"
                        : "border-slate-200 bg-white hover:border-gov-primary hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase">
                        {dist.division}
                      </span>
                      {isHome && (
                        <span className="text-[9px] font-black bg-gov-goldLight text-gov-goldDark px-1.5 py-0.5 rounded border border-amber-200">
                          HOME
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-gov-primary transition-colors">
                        {dist.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-slate-500 mt-0.5">
                        {getDistrictMetricValue(dist)}
                      </p>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          dist.opportunityScore >= 85
                            ? "bg-gov-green"
                            : dist.opportunityScore >= 75
                            ? "bg-gov-primary"
                            : "bg-gov-orange"
                        }`}
                        style={{ width: `${dist.opportunityScore}%` }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ACTIVE DISTRICT DETAILED RESOURCE DRAWER (1 COL) */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-6 animate-in fade-in duration-200">
            {/* Drawer Header */}
            <div className="space-y-1 pb-4 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-gov-primary bg-blue-50 px-2.5 py-0.5 rounded-full">
                  {activeDistrict.division} Division HQ
                </span>
                <span className="text-sm font-black text-gov-primary">
                  {activeDistrict.opportunityScore}/100 Index
                </span>
              </div>
              <h3 className="text-2xl font-black text-slate-900">{activeDistrict.name} District</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{activeDistrict.shortDescription}</p>
            </div>

            {/* Key Metrics 2x2 Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-500 font-bold uppercase">Degree Colleges</span>
                <p className="text-lg font-black text-slate-900 mt-0.5">{activeDistrict.collegeCount}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-500 font-bold uppercase">Mission Youth Hubs</span>
                <p className="text-lg font-black text-gov-primary mt-0.5">{activeDistrict.missionYouthCenters}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-500 font-bold uppercase">Skill Centers</span>
                <p className="text-lg font-black text-slate-900 mt-0.5">{activeDistrict.skillCentersCount}</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] text-slate-500 font-bold uppercase">Scholar Beneficiaries</span>
                <p className="text-lg font-black text-gov-green mt-0.5">
                  {(activeDistrict.activeScholarshipBeneficiaries / 1000).toFixed(1)}k
                </p>
              </div>
            </div>

            {/* Prominent Educational Institutions */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-gov-primary" />
                Premier Higher Ed Institutions:
              </h4>
              <div className="space-y-1 text-xs">
                {activeDistrict.prominentInstitutions.map((inst, i) => (
                  <div key={i} className="p-2 bg-blue-50/60 rounded-xl text-gov-primary font-semibold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gov-primary" />
                    <span>{inst}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Industries & Growth Roles */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-gov-gold" />
                Key Economic Corridors:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeDistrict.keyIndustries.map((ind, i) => (
                  <span key={i} className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Top Emerging In-Demand Roles */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-gov-green" />
                High Demand Emerging Roles:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeDistrict.topEmergingRoles.map((role, i) => (
                  <span key={i} className="text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md">
                    ★ {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
