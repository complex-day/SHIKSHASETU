"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAppStore } from "@/lib/store/useAppStore";
import { CAREERS_DATABASE } from "@/lib/data/careersData";
import { runSkillGapAgent } from "@/lib/ai/agents/skillGapAgent";
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Award,
  ExternalLink,
  Calendar,
  Layers,
  Clock,
  Briefcase
} from "lucide-react";

export default function SkillGapPage() {
  const { profile, selectedCareerId, setSelectedCareerId } = useAppStore();

  const [careerId, setCareerId] = useState<string>(selectedCareerId || "ai_ml_engineer");

  const activeCareer = CAREERS_DATABASE.find((c) => c.id === careerId) || CAREERS_DATABASE[0];

  const analysis = runSkillGapAgent(profile, activeCareer);

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-gov-goldDark">
              <Sparkles className="w-3.5 h-3.5 text-gov-gold" />
              <span>Module 6: Skill Gap Analyzer & Learning Pathways</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Skill Benchmarking & Free Course Synthesis
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Compare your current skill inventory against real-world industry requirements and access free government-certified courses on **SWAYAM**, **NPTEL**, and **JKEDI**.
            </p>
          </div>

          {/* Career Selector Dropdown */}
          <div className="shrink-0 w-full sm:w-auto">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Select Desired Career Role:
            </label>
            <select
              value={careerId}
              onChange={(e) => {
                setCareerId(e.target.value);
                setSelectedCareerId(e.target.value);
              }}
              className="w-full sm:w-72 px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 font-bold text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-gov-primary"
            >
              {CAREERS_DATABASE.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* OVERALL READINESS METER & SUMMARY */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gov-primary bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
              Role Readiness Benchmark
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              You are <span className="text-gov-primary">{analysis.readinessPercentage}% Ready</span> for {activeCareer.title}
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
              Based on your declared skills ({profile.currentSkills.join(", ")}), the AI agent identified an average skill gap of <strong>{analysis.overallGapScore}%</strong>. Mastering the recommended 3 priority competencies will elevate you to high-employability tier.
            </p>

            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden mt-2">
              <div
                className="bg-gradient-to-r from-gov-primary to-gov-gold h-full rounded-full transition-all duration-500"
                style={{ width: `${analysis.readinessPercentage}%` }}
              />
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-tr from-blue-900 to-indigo-900 text-white text-center space-y-1 shadow-md shadow-blue-900/15">
            <span className="text-[10px] font-bold text-gov-gold uppercase tracking-wider">
              Diagnostic Gap Score
            </span>
            <p className="text-3xl sm:text-4xl font-black text-white">{analysis.overallGapScore}%</p>
            <span className="text-[11px] text-blue-200 font-medium block">
              30-60-90 Day Plan Available
            </span>
          </div>
        </div>

        {/* SKILL GAP MATRIX TABLE */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-5">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-gov-primary" />
              Detailed Competency Matrix & Gap Breakdown
            </h3>
            <span className="text-xs font-bold text-slate-500">
              {analysis.gapItems.length} Key Competencies
            </span>
          </div>

          <div className="space-y-4">
            {analysis.gapItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 hover:border-gov-primary transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-gov-primary shrink-0" />
                    <h4 className="font-extrabold text-sm text-slate-900">{item.skillName}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs">
                    <span className="text-slate-500">
                      Current: <strong>{item.currentProficiency}%</strong>
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-gov-primary font-bold">
                      Target: {item.targetProficiency}%
                    </span>
                    <span className="text-slate-300">•</span>
                    <span
                      className={`font-black text-xs px-2 py-0.5 rounded-md ${
                        item.gapScore > 50
                          ? "bg-rose-50 text-gov-red border border-rose-200"
                          : "bg-emerald-50 text-gov-green border border-emerald-200"
                      }`}
                    >
                      Gap: {item.gapScore}%
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gov-primary h-full rounded-full"
                    style={{ width: `${item.currentProficiency}%` }}
                  />
                </div>

                {/* Recommended courses for this skill */}
                <div className="pt-2 border-t border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-gov-primary shrink-0" />
                    <span className="font-semibold text-slate-700">
                      Recommended Govt/Verified Course:{" "}
                      <strong className="text-slate-900">{item.recommendedCourses[0]?.title}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-bold bg-blue-50 text-gov-primary px-2 py-0.5 rounded">
                      {item.recommendedCourses[0]?.platform} • {item.recommendedCourses[0]?.durationHours}
                    </span>
                    <a
                      href={item.recommendedCourses[0]?.url || "https://swayam.gov.in"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-gov-primary font-bold text-xs flex items-center gap-1 shadow-sm"
                    >
                      <span>Enroll Free</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 30-60-90 DAY STRUCTURED ACTION PLAN */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-6">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gov-primary" />
              30-60-90 Day Structured Learning Action Plan
            </h3>
            <span className="text-xs font-bold text-gov-green flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Free Government Pathways
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 30 Days */}
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-gov-primary bg-white px-2.5 py-0.5 rounded-md border border-blue-200">
                  Days 1 - 30
                </span>
                <Clock className="w-4 h-4 text-gov-primary" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-sm">Foundations & Theory</h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {analysis.learningPlan30_60_90.day30.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gov-primary mt-1.5 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 60 Days */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-amber-800 bg-white px-2.5 py-0.5 rounded-md border border-amber-200">
                  Days 31 - 60
                </span>
                <Briefcase className="w-4 h-4 text-amber-600" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-sm">Hands-on Capstones</h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {analysis.learningPlan30_60_90.day60.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gov-orange mt-1.5 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 90 Days */}
            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-gov-green bg-white px-2.5 py-0.5 rounded-md border border-emerald-200">
                  Days 61 - 90
                </span>
                <Award className="w-4 h-4 text-gov-green" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-sm">Certification & Placements</h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {analysis.learningPlan30_60_90.day90.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gov-green mt-1.5 shrink-0" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
