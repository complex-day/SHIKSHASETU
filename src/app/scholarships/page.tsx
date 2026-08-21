"use client";

import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAppStore } from "@/lib/store/useAppStore";
import { SCHOLARSHIPS_DATABASE } from "@/lib/data/scholarshipsData";
import {
  Award,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  ExternalLink,
  Bookmark,
  FileText,
  DollarSign,
  ShieldCheck,
  Sparkles,
  Info,
  ChevronRight,
  Filter
} from "lucide-react";
import { formatCurrencyINR } from "@/lib/utils";

export default function ScholarshipsPage() {
  const { profile, updateProfile, bookmarkedScholarships, toggleBookmarkScholarship, orchestrationReport } = useAppStore();

  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const scholarshipResults = orchestrationReport?.eligibleScholarships || [];

  const filteredScholarships = scholarshipResults.filter((item) => {
    const sch = item.scholarship;
    if (categoryFilter !== "All" && sch.categoryType !== categoryFilter) {
      return false;
    }
    if (statusFilter !== "All" && sch.status !== statusFilter) {
      return false;
    }
    return true;
  });

  const totalAnnualSavings = scholarshipResults
    .filter((s) => s.isEligible)
    .reduce((acc, curr) => acc + curr.scholarship.maxBenefitAmount, 0);

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* HEADER & SAVINGS HIGHLIGHT */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-gov-green">
              <Award className="w-3.5 h-3.5" />
              <span>Module 5: Smart Scholarship Matcher & PMSSS Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Personalized Scholarship & Fee Waiver Matrix
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Matched against your family income (₹{(profile.familyAnnualIncome / 100000).toFixed(1)}L), category ({profile.category}), and academic marks ({profile.class12Percentage || 88}%).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-900/15 shrink-0 text-left min-w-[240px]">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-200 block">
              Total Potential Annual Benefit
            </span>
            <p className="text-2xl sm:text-3xl font-black text-white mt-0.5">
              ₹{(totalAnnualSavings / 100000).toFixed(1)} Lakhs / Yr
            </p>
            <span className="text-[11px] text-emerald-100 font-medium">
              {scholarshipResults.filter((s) => s.isEligible).length} Qualifying Government Schemes
            </span>
          </div>
        </div>

        {/* AICTE PMSSS SPOTLIGHT CARD */}
        <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-govLg space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-40 h-40 rounded-full bg-gov-gold/20 blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="bg-gov-gold text-slate-950 font-black text-xs px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                Flagship J&K Scheme
              </span>
              <span className="text-xs text-blue-200 font-semibold">AICTE • Govt of India</span>
            </div>
            <span className="text-xs font-bold text-gov-gold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-gov-gold" />
              100% Guaranteed Fee Waiver for Eligible Youth
            </span>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Prime Minister's Special Scholarship Scheme (PMSSS 2026)
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-3xl leading-relaxed">
              Provides **full tuition fee reimbursement** (up to ₹3.0L for MBBS, ₹1.25L for Engineering) plus **₹1,00,000 per year maintenance allowance** (₹10,000/month) directly deposited into student DBT accounts for over 5,000 supernumerary seats nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-blue-200 font-semibold text-[11px]">Academic Fee Waiver:</span>
              <p className="font-extrabold text-white text-sm mt-0.5">Up to ₹3,00,000 / Yr</p>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-blue-200 font-semibold text-[11px]">Hostel & Living Allowance:</span>
              <p className="font-extrabold text-gov-gold text-sm mt-0.5">₹1,00,000 / Yr (DBT)</p>
            </div>
            <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="text-blue-200 font-semibold text-[11px]">Eligibility Status:</span>
              <p className="font-extrabold text-emerald-300 text-sm mt-0.5">✓ 100% Eligible (Income & Marks)</p>
            </div>
          </div>
        </div>

        {/* FILTERS BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs">
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <Filter className="w-4 h-4 text-gov-primary" />
            <span>Filter Schemes:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-800"
            >
              <option value="All">All Categories</option>
              <option value="JK_Special">J&K Special (PMSSS / Parvaaz)</option>
              <option value="Girls_Special">Girls Special (Tejaswini / Pragati)</option>
              <option value="Minority_Reserved">Reserved / Post-Matric</option>
              <option value="Merit_Need">Merit & Need Based</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 font-medium text-slate-800"
            >
              <option value="All">All Application Statuses</option>
              <option value="Open">Currently Open</option>
              <option value="Opening Soon">Opening Soon</option>
            </select>
          </div>
        </div>

        {/* SCHOLARSHIP CARDS LIST */}
        <div className="space-y-6">
          {filteredScholarships.map((item) => {
            const sch = item.scholarship;
            const isBookmarked = bookmarkedScholarships.includes(sch.id);

            return (
              <div
                key={sch.id}
                className={`p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-200 shadow-gov hover:shadow-govLg space-y-5 ${
                  item.isEligible ? "border-slate-200" : "border-slate-200 opacity-80"
                }`}
              >
                {/* Top Row: Title, Provider, Eligibility Badge */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-gov-primary border border-blue-200">
                        {sch.provider}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                          sch.status === "Open"
                            ? "bg-emerald-50 text-gov-green border border-emerald-200"
                            : "bg-amber-50 text-amber-800 border border-amber-200"
                        }`}
                      >
                        ● {sch.status}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">{sch.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">{sch.benefitDescription}</p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <button
                      onClick={() => toggleBookmarkScholarship(sch.id)}
                      className={`p-2.5 rounded-xl border transition-colors ${
                        isBookmarked
                          ? "bg-amber-50 border-amber-300 text-gov-gold"
                          : "bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600"
                      }`}
                      title="Bookmark Scheme"
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-gov-gold text-gov-gold" : ""}`} />
                    </button>

                    <div
                      className={`p-3 rounded-2xl border text-center min-w-[130px] ${
                        item.isEligible
                          ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                          : "bg-rose-50 border-rose-200 text-rose-800"
                      }`}
                    >
                      <span className="text-sm font-black flex items-center justify-center gap-1">
                        {item.isEligible ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 text-gov-green" />
                            Eligible
                          </>
                        ) : (
                          <>
                            <AlertTriangle className="w-4 h-4 text-gov-red" />
                            Ineligible
                          </>
                        )}
                      </span>
                      <p className="text-[10px] font-bold mt-0.5">
                        {item.isEligible ? `Match ${item.matchScore}%` : "Criteria Unmet"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3 Columns: Benefit Value + Reasons + Documents */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  {/* Benefit & Deadline (Col 1) */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Financial Benefit:</span>
                    <p className="text-xl font-black text-gov-green">
                      {formatCurrencyINR(sch.maxBenefitAmount)}
                    </p>
                    <div className="pt-2 border-t border-slate-200/60 flex items-center gap-1.5 text-slate-600">
                      <Calendar className="w-3.5 h-3.5 text-gov-orange shrink-0" />
                      <span>Deadline: <strong>{sch.applicationDeadline}</strong></span>
                    </div>
                  </div>

                  {/* Eligibility Match Notes (Col 2) */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Eligibility Breakdown:</span>
                    <ul className="space-y-1 text-[11px]">
                      {item.eligibilityReasons.map((r, i) => (
                        <li key={i} className="text-slate-700 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-gov-green shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                      {item.ineligibilityReasons.map((ir, i) => (
                        <li key={i} className="text-rose-700 flex items-start gap-1.5">
                          <AlertTriangle className="w-3 h-3 text-gov-red shrink-0 mt-0.5" />
                          <span>{ir}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documents Required (Col 3) */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Documents Checklist:</span>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      {sch.documentsRequired.slice(0, 3).map((doc, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <FileText className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-500">
                    Selection Process: <strong>{sch.selectionProcess}</strong>
                  </span>

                  <a
                    href={sch.applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gov-primary hover:bg-blue-700 text-white font-bold text-xs shadow-sm flex items-center gap-1.5 transition-colors"
                  >
                    <span>Apply on Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gov-gold" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
