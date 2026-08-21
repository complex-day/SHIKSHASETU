"use client";

import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { JK_DISTRICTS_DATA } from "@/lib/data/jkDistricts";
import {
  BarChart3,
  TrendingUp,
  Award,
  Users,
  Download,
  FileSpreadsheet,
  Layers,
  Sparkles,
  Calendar,
  CheckCircle2
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Legend
} from "recharts";

const CAREER_TRENDS_DATA = [
  { career: "AI & ML Eng", demandIndex: 98, vacancies: 14200 },
  { career: "Software Arch", demandIndex: 95, vacancies: 22500 },
  { career: "Data Science", demandIndex: 92, vacancies: 11800 },
  { career: "Agri-Tech & Hort", demandIndex: 91, vacancies: 8400 },
  { career: "Cyber Security", demandIndex: 96, vacancies: 9200 },
  { career: "Medical Specialist", demandIndex: 90, vacancies: 13000 },
  { career: "Civil/Tunnel Eng", demandIndex: 88, vacancies: 7600 },
];

const STREAM_DISTRIBUTION_DATA = [
  { name: "Science (PCM)", value: 42, color: "#0B3B8C" },
  { name: "Science (PCB)", value: 26, color: "#16A34A" },
  { name: "Commerce", value: 18, color: "#D4A017" },
  { name: "Arts & Humanities", value: 10, color: "#9333EA" },
  { name: "Vocational & Polytech", value: 4, color: "#0284C7" },
];

const SCHOLARSHIP_UTILIZATION_DATA = [
  { year: "2022", pmsssCrores: 28.5, parvaazCrores: 4.2, nspCrores: 6.1 },
  { year: "2023", pmsssCrores: 34.0, parvaazCrores: 6.8, nspCrores: 7.5 },
  { year: "2024", pmsssCrores: 39.2, parvaazCrores: 8.5, nspCrores: 8.9 },
  { year: "2025", pmsssCrores: 43.1, parvaazCrores: 10.2, nspCrores: 9.8 },
  { year: "2026 (Projected)", pmsssCrores: 48.0, parvaazCrores: 12.5, nspCrores: 11.2 },
];

export default function AnalyticsPage() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleExportCSV = () => {
    const csvContent = [
      ["District", "Division", "Opportunity Score", "Colleges", "Skill Centers", "Scholarship Beneficiaries"],
      ...JK_DISTRICTS_DATA.map((d) => [
        d.name,
        d.division,
        d.opportunityScore,
        d.collegeCount + d.polytechnicCount,
        d.skillCentersCount,
        d.activeScholarshipBeneficiaries,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ShikshaSetu_District_Analytics_2026.csv`;
    a.click();
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-gov-primary">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Module 10: Reports & Executive Analytics</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              State Educational Trends & PMSSS Utilization
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Macro-level visual intelligence designed for Government Directors, Principals, and Career Counselors to optimize education policy and fund deployment.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2.5 rounded-xl bg-gov-primary hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-900/15 flex items-center gap-2 transition-all"
            >
              <FileSpreadsheet className="w-4 h-4 text-gov-gold" />
              <span>Export District CSV Dataset</span>
            </button>
          </div>
        </div>

        {downloadSuccess && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-gov-green" />
            <span>District summary CSV successfully generated and downloaded!</span>
          </div>
        )}

        {/* 4 MACRO METRIC STAT TILES */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase">Total Students Guided</span>
            <p className="text-2xl sm:text-3xl font-black text-gov-primary">52,480</p>
            <span className="text-[10px] text-gov-green font-semibold">Across all 20 Districts</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase">Total PMSSS Quota Seats</span>
            <p className="text-2xl sm:text-3xl font-black text-slate-900">5,000</p>
            <span className="text-[10px] text-gov-green font-semibold">100% Supernumerary</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase">Scholarship Fund Tracked</span>
            <p className="text-2xl sm:text-3xl font-black text-gov-goldDark">₹48.0 Cr</p>
            <span className="text-[10px] text-slate-500 font-medium">PMSSS + Mission Youth</span>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <span className="text-[10px] text-slate-500 font-bold uppercase">Avg Career Readiness</span>
            <p className="text-2xl sm:text-3xl font-black text-gov-green">81.6%</p>
            <span className="text-[10px] text-slate-500 font-medium">+9.4% YoY Gain</span>
          </div>
        </div>

        {/* 2-CHART ROW: CAREER DEMAND TRENDS + STREAM DISTRIBUTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CAREER DEMAND BAR CHART (LEFT) */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-gov-primary" />
                Emerging Career Demand Index (2026-2030)
              </h3>
              <span className="text-[10px] font-bold text-gov-primary bg-blue-50 px-2 py-0.5 rounded-md">
                Industry Vacancies
              </span>
            </div>

            <div className="w-full h-72 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={CAREER_TRENDS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis
                    dataKey="career"
                    tick={{ fontSize: 10, fill: "#64748b" }}
                    angle={-20}
                    textAnchor="end"
                  />
                  <YAxis tick={{ fontSize: 10, fill: "#64748b" }} />
                  <Tooltip
                    contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "11px" }}
                  />
                  <Bar dataKey="demandIndex" fill="#0B3B8C" radius={[6, 6, 0, 0]} name="Demand Index (0-100)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* STREAM DISTRIBUTION PIE CHART (RIGHT) */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4 text-gov-primary" />
                Student Higher Secondary Stream Enrollment
              </h3>
              <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                J&K Batch 2026
              </span>
            </div>

            <div className="w-full h-72 sm:h-80 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={STREAM_DISTRIBUTION_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={95}
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {STREAM_DISTRIBUTION_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "11px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* SCHOLARSHIP FUND UTILIZATION AREA CHART */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-gov-green" />
              Annual J&K Scholarship Disbursement Growth (₹ Crores)
            </h3>
            <span className="text-[10px] font-bold text-gov-green bg-emerald-50 px-2 py-0.5 rounded-md">
              Direct Benefit Transfer (DBT)
            </span>
          </div>

          <div className="w-full h-64 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={SCHOLARSHIP_UTILIZATION_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#64748b" }} />
                <YAxis tick={{ fontSize: 11, fill: "#64748b" }} />
                <Tooltip
                  contentStyle={{ borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "11px" }}
                />
                <Legend wrapperStyle={{ fontSize: "11px" }} />
                <Area type="monotone" dataKey="pmsssCrores" stroke="#0B3B8C" fill="#0B3B8C" fillOpacity={0.25} name="AICTE PMSSS (₹ Cr)" />
                <Area type="monotone" dataKey="parvaazCrores" stroke="#16A34A" fill="#16A34A" fillOpacity={0.25} name="Mission Youth Parvaaz (₹ Cr)" />
                <Area type="monotone" dataKey="nspCrores" stroke="#D4A017" fill="#D4A017" fillOpacity={0.25} name="NSP Schemes (₹ Cr)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 20-DISTRICT PERFORMANCE BENCHMARK TABLE */}
        <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-gov-primary" />
              Comprehensive 20-District Educational Benchmark
            </h3>
            <span className="text-[10px] text-slate-500 font-semibold">Updated August 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold text-[10px] uppercase">
                  <th className="p-3">District</th>
                  <th className="p-3">Division</th>
                  <th className="p-3">Opportunity Index</th>
                  <th className="p-3">Colleges & Polytechnics</th>
                  <th className="p-3">Mission Youth Centers</th>
                  <th className="p-3">Active Beneficiaries</th>
                  <th className="p-3">Key Sector</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {JK_DISTRICTS_DATA.map((dist) => (
                  <tr key={dist.id} className="hover:bg-blue-50/40 transition-colors">
                    <td className="p-3 font-extrabold text-slate-900">{dist.name}</td>
                    <td className="p-3 text-slate-500">{dist.division}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-0.5 rounded font-black text-xs ${
                          dist.opportunityScore >= 85
                            ? "bg-emerald-50 text-gov-green"
                            : dist.opportunityScore >= 75
                            ? "bg-blue-50 text-gov-primary"
                            : "bg-amber-50 text-gov-orange"
                        }`}
                      >
                        {dist.opportunityScore}/100
                      </span>
                    </td>
                    <td className="p-3">{dist.collegeCount + dist.polytechnicCount} Institutes</td>
                    <td className="p-3">{dist.missionYouthCenters} Hubs</td>
                    <td className="p-3 font-bold text-gov-primary">
                      {dist.activeScholarshipBeneficiaries.toLocaleString("en-IN")}
                    </td>
                    <td className="p-3 text-[11px] text-slate-500">{dist.keyIndustries[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
