"use client";

import React from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAppStore } from "@/lib/store/useAppStore";
import {
  Compass,
  Award,
  GraduationCap,
  Sparkles,
  Flame,
  MapPin,
  ArrowRight,
  Brain,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  ShieldCheck,
  Zap,
  Users,
  LineChart
} from "lucide-react";
import { formatCurrencyINR, getScoreColor } from "@/lib/utils";

export default function DashboardPage() {
  const { currentRole, profile, orchestrationReport, runOrchestration, isOrchestrating } = useAppStore();

  const kpis = orchestrationReport?.kpis || {
    careerMatchScore: 96,
    eligibleScholarshipsCount: 4,
    recommendedCollegesCount: 11,
    skillReadinessScore: 78,
    careerConfidenceScore: 88,
    opportunityIndex: 94,
  };

  const topCareer = orchestrationReport?.careerRecommendations[0] || {
    id: "ai_ml_engineer",
    title: "Artificial Intelligence & Machine Learning Engineer",
    category: "Technology & Computing",
    matchScore: 96,
    salary: { entryLpa: 8.5, midLpa: 22.0, seniorLpa: 48.0, currency: "INR" },
    tagline: "Build neural networks, generative AI systems, and automated intelligence models.",
    whyRecommended: [
      "High match with your Analytical (88%) and Technical (92%) assessment scores.",
      "Thriving demand with remote global work potential and expanding tech clusters in Srinagar & Jammu."
    ],
    requiredSkills: ["Python", "PyTorch", "Machine Learning", "Data Structures"],
    jkOpportunityOutlook: "Emerging startup ecosystem at Srinagar STPI and labs at IIT Jammu & NIT Srinagar."
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* TOP WELCOME & ROLE BANNER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-bold text-gov-primary">
              <ShieldCheck className="w-3.5 h-3.5 text-gov-primary" />
              <span className="capitalize">Active Mode: {currentRole.replace("_", " ")}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600">{profile.district} District</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Welcome back, <span className="text-gov-primary">{profile.fullName}</span>!
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Your personalized AI Advisor has synthesized your academic profile, 5D assessment scores, PMSSS eligibility, and regional opportunity indicators.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={runOrchestration}
              disabled={isOrchestrating}
              className="px-4 py-2.5 rounded-xl bg-gov-primary hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-900/15 flex items-center gap-2 transition-all disabled:opacity-50"
            >
              <Zap className={`w-4 h-4 text-gov-gold ${isOrchestrating ? "animate-spin" : ""}`} />
              <span>{isOrchestrating ? "Orchestrating 9 Agents..." : "Re-Run AI Multi-Agent Engine"}</span>
            </button>

            <Link
              href="/counselor"
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-gov-gold" />
              <span>Ask ShikshaMitra</span>
            </Link>
          </div>
        </div>

        {/* 6 CORE DASHBOARD KPIS */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-gov-primary" />
              Executive Key Performance Indicators (KPIs)
            </h2>
            <span className="text-[11px] text-gov-green font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Live Vector Sync
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {/* KPI 1 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-500">Career Match</span>
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-gov-primary flex items-center justify-center">
                  <Compass className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-black text-gov-primary">{kpis.careerMatchScore}%</p>
              <span className="text-[10px] text-gov-green font-semibold mt-1 inline-block">
                Top: {topCareer.title.split(" ")[0]}
              </span>
            </div>

            {/* KPI 2 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-500">Scholarships</span>
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-gov-green flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-black text-gov-green">{kpis.eligibleScholarshipsCount} Matched</p>
              <span className="text-[10px] text-slate-500 mt-1 inline-block">
                Up to ₹3.0L / Year
              </span>
            </div>

            {/* KPI 3 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-500">Target Colleges</span>
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-black text-slate-800">{kpis.recommendedCollegesCount}</p>
              <span className="text-[10px] text-purple-600 font-semibold mt-1 inline-block">
                NIT / IIT / KU / JU
              </span>
            </div>

            {/* KPI 4 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-500">Skill Readiness</span>
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-gov-orange flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-black text-gov-orange">{kpis.skillReadinessScore}%</p>
              <span className="text-[10px] text-slate-500 mt-1 inline-block">
                SWAYAM Courses Ready
              </span>
            </div>

            {/* KPI 5 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-500">Confidence</span>
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Flame className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-black text-indigo-600">{kpis.careerConfidenceScore}%</p>
              <span className="text-[10px] text-indigo-500 font-semibold mt-1 inline-block">
                High Motivation
              </span>
            </div>

            {/* KPI 6 */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-slate-500">Opportunity</span>
                <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
              <p className="text-2xl font-black text-teal-700">{kpis.opportunityIndex}/100</p>
              <span className="text-[10px] text-teal-600 font-semibold mt-1 inline-block capitalize">
                {profile.district} Zone
              </span>
            </div>
          </div>
        </section>

        {/* ROLE-SPECIFIC SPECIALIZED INTELLIGENCE VIEW */}
        {currentRole === "student" && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-white border border-blue-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gov-primary bg-white px-2 py-0.5 rounded-md border border-blue-200">
                Student Personalized Action Plan
              </span>
              <h3 className="font-extrabold text-slate-900 text-base">
                Your Next Crucial Milestone: PMSSS Verification & Entrance Prep
              </h3>
              <p className="text-xs text-slate-600">
                Keep Class 12 marks cards and local Tehsildar income certificate ready. You are currently 86% prepared for your target AI & Engineering career.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/roadmap"
                className="px-4 py-2 rounded-xl bg-gov-primary text-white font-bold text-xs hover:bg-blue-700 transition-colors shadow-sm"
              >
                Open 5-Stage Roadmap →
              </Link>
            </div>
          </div>
        )}

        {currentRole === "parent" && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-white border border-emerald-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gov-green bg-white px-2 py-0.5 rounded-md border border-emerald-200">
                Parent & Guardian Trust Portal
              </span>
              <span className="text-xs font-bold text-gov-green">100% Verified Govt Data</span>
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">
              Financial Security & Career ROI Breakdown for {profile.fullName}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-emerald-100">
                <span className="text-slate-500 font-semibold">Projected Fee Savings:</span>
                <p className="text-lg font-black text-gov-green mt-0.5">₹3.0 Lakhs / Year</p>
                <p className="text-[11px] text-slate-500">Covered fully by AICTE PMSSS</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-emerald-100">
                <span className="text-slate-500 font-semibold">Expected Starting Salary:</span>
                <p className="text-lg font-black text-gov-primary mt-0.5">₹8.5 LPA (Entry Level)</p>
                <p className="text-[11px] text-slate-500">Scaling to ₹22 LPA in 5 years</p>
              </div>
              <div className="p-3 bg-white rounded-xl border border-emerald-100">
                <span className="text-slate-500 font-semibold">Campus Safety & Accreditation:</span>
                <p className="text-lg font-black text-slate-800 mt-0.5">NAAC A+ Verified</p>
                <p className="text-[11px] text-slate-500">NIT Srinagar / IIT Jammu</p>
              </div>
            </div>
          </div>
        )}

        {currentRole === "counselor" && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-50 via-fuchsia-50 to-white border border-purple-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-white px-2 py-0.5 rounded-md border border-purple-200">
                Counselor Diagnostic Dossier
              </span>
              <span className="text-xs font-bold text-purple-700">Student ID: {profile.id}</span>
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">
              Psychometric Trait Alignment: Analytical (88%) & Technical (92%)
            </h3>
            <p className="text-xs text-slate-600">
              Student displays strong algorithmic thinking. Recommended counseling intervention: Advise student to prioritize mock test timing for JEE/JKCET and apply for Mission Youth Parvaaz free coaching.
            </p>
          </div>
        )}

        {currentRole === "school_admin" && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-white border border-amber-200/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gov-orange bg-white px-2 py-0.5 rounded-md border border-amber-200">
                School Principal & Admin Overview
              </span>
              <span className="text-xs font-bold text-slate-700">Srinagar High School Cluster</span>
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">
              Class 12 Batch: 142 Students Registered • 89 PMSSS Applications Prepared
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-2.5 bg-white rounded-xl border border-amber-100">
                <span className="text-slate-500">Science Stream:</span>
                <p className="font-black text-slate-800 text-sm">62% (88 Students)</p>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-amber-100">
                <span className="text-slate-500">Commerce Stream:</span>
                <p className="font-black text-slate-800 text-sm">24% (34 Students)</p>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-amber-100">
                <span className="text-slate-500">Arts / Humanities:</span>
                <p className="font-black text-slate-800 text-sm">14% (20 Students)</p>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-amber-100">
                <span className="text-slate-500">Avg Readiness:</span>
                <p className="font-black text-gov-green text-sm">82.4%</p>
              </div>
            </div>
          </div>
        )}

        {currentRole === "govt_admin" && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-100 via-blue-50 to-white border border-slate-300 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gov-primary bg-white px-2 py-0.5 rounded-md border border-slate-300">
                J&K State Administration Dashboard
              </span>
              <span className="text-xs font-bold text-gov-primary">Mission Youth & HED Portal</span>
            </div>
            <h3 className="font-extrabold text-slate-900 text-base">
              State-Wide Analytics: 20 Districts • ₹45.8 Cr Scholarship Allocation Mapped
            </h3>
            <p className="text-xs text-slate-600">
              Highest enrollment observed in Srinagar, Jammu, and Pulwama districts. Emerging surge in Agri-Tech (Shopian/Pulwama) and Hydro-Engineering (Doda/Kishtwar).
            </p>
          </div>
        )}

        {/* TOP RECOMMENDED CAREER CARD & SALARY LADDER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Career Card (2 cols) */}
          <div className="lg:col-span-2 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[11px] font-bold text-gov-goldDark mb-1">
                  <Sparkles className="w-3 h-3 text-gov-gold" />
                  <span>#1 Ranked AI Recommendation</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">{topCareer.title}</h3>
                <p className="text-xs text-slate-500 font-medium">{topCareer.category}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span className="text-2xl font-black text-gov-primary">{topCareer.matchScore}%</span>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Compatibility</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-gov-primary flex items-center justify-center font-bold text-lg shadow-inner">
                  <Compass className="w-6 h-6" />
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {topCareer.tagline}
            </p>

            {/* Why Recommended Bullets */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Why ShikshaSetu AI Recommends This:
              </h4>
              <ul className="space-y-1.5">
                {topCareer.whyRecommended.map((r, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gov-green shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Salary Ladder Visualization */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <LineChart className="w-4 h-4 text-gov-primary" />
                  Salary Growth Ladder (INR Lakhs Per Annum)
                </span>
                <span className="text-[11px] font-bold text-gov-primary">+38% 5-Yr Growth</span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Entry Level</span>
                  <p className="text-base sm:text-lg font-black text-slate-800 mt-0.5">
                    ₹{topCareer.salary.entryLpa} LPA
                  </p>
                  <span className="text-[10px] text-slate-400">0-2 Years</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-blue-200 shadow-sm">
                  <span className="text-[10px] text-gov-primary font-bold uppercase">Mid Senior</span>
                  <p className="text-base sm:text-lg font-black text-gov-primary mt-0.5">
                    ₹{topCareer.salary.midLpa} LPA
                  </p>
                  <span className="text-[10px] text-blue-600 font-medium">3-6 Years</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-amber-200">
                  <span className="text-[10px] text-amber-700 font-bold uppercase">Lead / Principal</span>
                  <p className="text-base sm:text-lg font-black text-amber-800 mt-0.5">
                    ₹{topCareer.salary.seniorLpa} LPA
                  </p>
                  <span className="text-[10px] text-amber-600 font-medium">7+ Years</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex flex-wrap gap-1.5">
                {topCareer.requiredSkills.slice(0, 4).map((s, i) => (
                  <span key={i} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href="/recommendations"
                className="text-xs font-bold text-gov-primary hover:underline flex items-center gap-1"
              >
                <span>View All 5 Recommended Careers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Quick Nav Launchers & Alerts (1 col) */}
          <div className="space-y-6">
            {/* Quick Actions Panel */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-3">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Quick Advisory Actions
              </h3>
              <div className="space-y-2">
                <Link
                  href="/assessment"
                  className="p-3 rounded-xl bg-blue-50/70 hover:bg-blue-50 border border-blue-100 flex items-center justify-between text-xs font-bold text-gov-primary transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Brain className="w-4 h-4 text-gov-primary" />
                    <span>Take 5D Assessment</span>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/scholarships"
                  className="p-3 rounded-xl bg-emerald-50/70 hover:bg-emerald-50 border border-emerald-100 flex items-center justify-between text-xs font-bold text-gov-green transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-gov-green" />
                    <span>Check PMSSS Eligibility</span>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/skill-gap"
                  className="p-3 rounded-xl bg-amber-50/70 hover:bg-amber-50 border border-amber-100 flex items-center justify-between text-xs font-bold text-amber-800 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Analyze Skill Gaps</span>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  href="/heatmap"
                  className="p-3 rounded-xl bg-teal-50/70 hover:bg-teal-50 border border-teal-100 flex items-center justify-between text-xs font-bold text-teal-800 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    <span>J&K Opportunity Map</span>
                  </div>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Upcoming Deadlines Widget */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Upcoming Deadlines
                </h3>
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-gov-orange mt-1.5 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-800">PMSSS 2026 Verification</p>
                    <p className="text-[11px] text-slate-500">Document checking at Facilitation Centres</p>
                    <span className="text-[10px] font-extrabold text-gov-orange">30 June 2026</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-gov-green mt-1.5 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-800">Mission Youth 'Parvaaz' PQT</p>
                    <p className="text-[11px] text-slate-500">Free IAS/JKAS Coaching Entrance Test</p>
                    <span className="text-[10px] font-extrabold text-gov-green">15 May 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
