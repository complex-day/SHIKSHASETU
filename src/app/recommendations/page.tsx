"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAppStore } from "@/lib/store/useAppStore";
import {
  Compass,
  Sparkles,
  CheckCircle2,
  Bookmark,
  ArrowRight,
  TrendingUp,
  LineChart,
  GraduationCap,
  Briefcase,
  Building2,
  Layers,
  MapPin,
  Globe,
  Flame,
  ChevronRight
} from "lucide-react";
import { formatCurrencyINR } from "@/lib/utils";

export default function RecommendationsPage() {
  const { orchestrationReport, bookmarkedCareers, toggleBookmarkCareer, setSelectedCareerId } = useAppStore();

  const recommendations = orchestrationReport?.careerRecommendations || [];
  const [selectedIdx, setSelectedIdx] = useState(0);

  const activeCareer = recommendations[selectedIdx] || recommendations[0];

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-gov-goldDark">
              <Sparkles className="w-3.5 h-3.5 text-gov-gold" />
              <span>Module 3: Core AI Career Recommendation Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Top 5 AI Recommended Career Trajectories
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Synthesized by Agent 3 using your academic history, 5D psychometric assessment vectors, and J&K socioeconomic opportunity datasets.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/roadmap"
              className="px-5 py-2.5 rounded-xl bg-gov-primary hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-900/15 flex items-center gap-2 transition-all"
            >
              <span>Build Interactive Roadmap</span>
              <ArrowRight className="w-4 h-4 text-gov-gold" />
            </Link>
          </div>
        </div>

        {/* 5 CAREER SELECTOR TABS */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {recommendations.map((career, idx) => {
            const isSelected = selectedIdx === idx;
            const isBookmarked = bookmarkedCareers.includes(career.id);
            return (
              <button
                key={career.id}
                onClick={() => {
                  setSelectedIdx(idx);
                  setSelectedCareerId(career.id);
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between gap-2 relative ${
                  isSelected
                    ? "bg-gov-primary text-white border-gov-primary shadow-md shadow-blue-900/20 scale-[1.02]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-gov-primary hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                      isSelected ? "bg-white/20 text-white" : "bg-blue-50 text-gov-primary"
                    }`}
                  >
                    #{idx + 1} Match
                  </span>
                  <span className={`text-xs font-black ${isSelected ? "text-gov-gold" : "text-gov-primary"}`}>
                    {career.matchScore}%
                  </span>
                </div>

                <div>
                  <h4 className="font-extrabold text-xs leading-snug line-clamp-2">{career.title}</h4>
                  <p className={`text-[10px] mt-0.5 truncate ${isSelected ? "text-blue-100" : "text-slate-500"}`}>
                    ₹{career.salary.entryLpa} - ₹{career.salary.seniorLpa} LPA
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* ACTIVE CAREER DETAILED DOSSIER */}
        {activeCareer && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-8 animate-in fade-in duration-200">
            {/* Top Bar with Title, Match & Bookmark */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gov-primary bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {activeCareer.category}
                  </span>
                  <span className="text-xs font-bold text-gov-green bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    +{activeCareer.growthRatePercent}% Market Growth
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{activeCareer.title}</h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">{activeCareer.tagline}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => toggleBookmarkCareer(activeCareer.id)}
                  className={`p-3 rounded-2xl border flex items-center gap-2 text-xs font-bold transition-all ${
                    bookmarkedCareers.includes(activeCareer.id)
                      ? "bg-amber-50 border-amber-300 text-amber-900"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      bookmarkedCareers.includes(activeCareer.id)
                        ? "text-gov-gold fill-gov-gold"
                        : "text-slate-400"
                    }`}
                  />
                  <span>
                    {bookmarkedCareers.includes(activeCareer.id) ? "Bookmarked" : "Bookmark Career"}
                  </span>
                </button>

                <div className="p-3 bg-blue-50 rounded-2xl border border-blue-200 text-center min-w-[90px]">
                  <span className="text-2xl font-black text-gov-primary">{activeCareer.matchScore}%</span>
                  <p className="text-[9px] font-extrabold uppercase text-slate-500">Compatibility</p>
                </div>
              </div>
            </div>

            {/* 3 CORE PILLARS: WHY RECOMMENDED + SALARY LADDER + SKILLS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Why Recommended (Col 1) */}
              <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-3">
                <h3 className="text-xs font-bold text-gov-primary uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gov-primary" />
                  AI Match Rationale
                </h3>
                <ul className="space-y-2 text-xs">
                  {activeCareer.whyRecommended.map((w, idx) => (
                    <li key={idx} className="text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gov-primary mt-1.5 shrink-0" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Salary Progression Ladder (Col 2) */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <LineChart className="w-4 h-4 text-gov-primary" />
                  Salary Progression (INR LPA)
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-center p-2 bg-white rounded-xl border border-slate-200">
                    <span className="text-slate-500 font-semibold">Entry Level (0-2 Yrs):</span>
                    <span className="font-extrabold text-slate-900">₹{activeCareer.salary.entryLpa} LPA</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded-xl border border-blue-200 shadow-sm">
                    <span className="text-gov-primary font-bold">Mid-Level (3-6 Yrs):</span>
                    <span className="font-black text-gov-primary">₹{activeCareer.salary.midLpa} LPA</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded-xl border border-amber-200">
                    <span className="text-amber-800 font-bold">Senior / Lead (7+ Yrs):</span>
                    <span className="font-black text-amber-800">₹{activeCareer.salary.seniorLpa} LPA</span>
                  </div>
                </div>
              </div>

              {/* Required Skills (Col 3) */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-gov-gold" />
                    Essential Skills
                  </h3>
                  <Link
                    href="/skill-gap"
                    className="text-[10px] font-bold text-gov-primary hover:underline"
                  >
                    Analyze Gap →
                  </Link>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeCareer.requiredSkills.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-800"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* EDUCATION JOURNEY ROADMAP STEPS */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-gov-primary" />
                Structured Educational Journey
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {activeCareer.educationPath.map((step, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-bold text-gov-primary">Stage {idx + 1}</span>
                        <span className="text-[10px] font-semibold text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {step.duration}
                        </span>
                      </div>
                      <h4 className="font-extrabold text-slate-800 text-xs">{step.stage}</h4>
                      <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{step.requirement}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Key Exams:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {step.exams.map((e, i) => (
                          <span key={i} className="text-[9px] font-bold bg-blue-50 text-gov-primary px-1.5 py-0.5 rounded">
                            {e}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* J&K LOCAL VS NATIONAL & GLOBAL OUTLOOK */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-1.5">
                <h4 className="text-xs font-bold text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-teal-700" />
                  Jammu & Kashmir Regional Outlook
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">{activeCareer.jkOpportunityOutlook}</p>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-200 space-y-1.5">
                <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-indigo-700" />
                  National & Global Outlook
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">{activeCareer.nationalGlobalOutlook}</p>
              </div>
            </div>

            {/* TOP RECRUITERS & QUICK ACTIONS */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Top Recruiters:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeCareer.topRecruiters.map((r, i) => (
                    <span key={i} className="text-[11px] font-semibold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/skill-gap"
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
                >
                  Analyze Skill Gap
                </Link>
                <Link
                  href="/colleges"
                  className="px-4 py-2 rounded-xl bg-gov-primary hover:bg-blue-700 text-white font-bold text-xs transition-colors"
                >
                  Find Matching Colleges →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
