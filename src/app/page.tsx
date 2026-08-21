"use client";

import React from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import {
  Sparkles,
  Compass,
  GraduationCap,
  Award,
  Brain,
  MapPin,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Users,
  Building2,
  TrendingUp,
  BotMessageSquare,
  Flame,
  ChevronRight
} from "lucide-react";
import { useAppStore } from "@/lib/store/useAppStore";
import { UserRole } from "@/types";

export default function HomePage() {
  const { setRole } = useAppStore();

  const handleRoleStart = (role: UserRole) => {
    setRole(role);
  };

  return (
    <AppLayout>
      <div className="space-y-12 sm:space-y-16">
        {/* HERO SECTION */}
        <section className="relative rounded-3xl overflow-hidden gov-gradient-header text-white p-6 sm:p-10 md:p-14 shadow-govLg">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-10 w-72 h-72 rounded-full bg-gov-gold/15 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            {/* Gov Crest Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-amber-200">
              <ShieldCheck className="w-4 h-4 text-gov-gold" />
              <span>Official Government of Jammu & Kashmir Initiative</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
              SHIKSHA<span className="text-gov-gold">SETU</span>
            </h1>
            <p className="text-lg sm:text-2xl font-light text-blue-100 max-w-2xl leading-snug">
              One-Stop Personalized Career & Education Advisor for the Youth of Jammu & Kashmir
            </p>
            <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed">
              Empowering students across all 20 districts with **Multi-Agent Agentic AI** to discover suitable careers, premier colleges (NIT, IIT, KU, JU), AICTE PMSSS scholarships (up to ₹3 Lakhs/yr), skill roadmaps, and local economic opportunities.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/assessment"
                className="px-6 py-3 rounded-xl bg-gov-gold hover:bg-amber-400 text-slate-900 font-extrabold text-sm shadow-lg shadow-amber-900/30 flex items-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Brain className="w-4 h-4" />
                <span>Start AI Career Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/dashboard"
                className="px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm backdrop-blur-md border border-white/20 flex items-center gap-2 transition-all"
              >
                <span>Open Student Dashboard</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <Link
                href="/counselor"
                className="px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-slate-100 font-semibold text-sm border border-slate-700 flex items-center gap-2 transition-all"
              >
                <BotMessageSquare className="w-4 h-4 text-gov-gold" />
                <span>Ask ShikshaMitra AI</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-gov-gold">50,000+</span>
                <p className="text-xs text-blue-200">J&K Students Guided</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white">20</span>
                <p className="text-xs text-blue-200">Districts Mapped</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-gov-gold">₹45 Cr+</span>
                <p className="text-xs text-blue-200">Scholarships Mapped</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white">5,000+</span>
                <p className="text-xs text-blue-200">AICTE PMSSS Seats</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 ROLE PORTALS */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-gov-primary uppercase tracking-wider">
                Tailored Stakeholder Portals
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Designed for the Whole Education Ecosystem
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Switch roles seamlessly at any time to experience personalized dashboards and analytical tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                role: "student" as UserRole,
                title: "Student",
                desc: "Discover dream careers, take aptitude tests, match PMSSS scholarships & find colleges.",
                icon: Compass,
                color: "border-blue-200 bg-blue-50/50 hover:border-gov-primary",
                badge: "Primary Portal",
              },
              {
                role: "parent" as UserRole,
                title: "Parent",
                desc: "Explore fee waivers, safety ratings, salary projections & educational ROI.",
                icon: Users,
                color: "border-emerald-200 bg-emerald-50/50 hover:border-gov-green",
                badge: "Family & Trust",
              },
              {
                role: "counselor" as UserRole,
                title: "Counselor",
                desc: "Access student psychometric profiles, diagnostic matrices & counseling roadmaps.",
                icon: Brain,
                color: "border-purple-200 bg-purple-50/50 hover:border-purple-600",
                badge: "Mentorship",
              },
              {
                role: "school_admin" as UserRole,
                title: "School Admin",
                desc: "Track batch streams, entrance exam readiness, and scholarship submissions.",
                icon: Building2,
                color: "border-amber-200 bg-amber-50/50 hover:border-gov-orange",
                badge: "Institutional",
              },
              {
                role: "govt_admin" as UserRole,
                title: "Govt Admin",
                desc: "Monitor district opportunity indices, skill shortages & PMSSS utilization rates.",
                icon: TrendingUp,
                color: "border-slate-300 bg-slate-100 hover:border-slate-700",
                badge: "State Level",
              },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.role}
                  href="/dashboard"
                  onClick={() => handleRoleStart(p.role)}
                  className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between group hover:shadow-md ${p.color}`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gov-primary group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/80 text-slate-700">
                        {p.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-gov-primary">
                    <span>Enter {p.title} Mode</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 10 CORE MODULES SHOWCASE */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-gov-primary uppercase tracking-wider">
              Comprehensive 10-Module Platform
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              End-to-End Educational Intelligence
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              From Class 10 stream selection to high-impact career placement, ShikshaSetu provides continuous personalized guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Module 1: Student Profile & Persona",
                desc: "Build your multidimensional academic and socioeconomic profile to calculate your real-time Career Readiness Score and persona badge.",
                href: "/profile",
                icon: Users,
                tag: "Profile Engine",
              },
              {
                title: "Module 2: 5D Career Assessment",
                desc: "Interactive psychometric evaluation covering Analytical, Creative, Technical, Leadership, and Communication dimensions with radar charts.",
                href: "/assessment",
                icon: Brain,
                tag: "Psychometrics",
              },
              {
                title: "Module 3: AI Career Recommendations",
                desc: "Top 5 tailored trajectories ranked with match scores, future demand index 2026-2035, salary insights, and education milestones.",
                href: "/recommendations",
                icon: Compass,
                tag: "Core AI Engine",
              },
              {
                title: "Module 4: Intelligent College Finder",
                desc: "Directory of premier J&K institutions (NIT, IIT, KU, JU, SKUAST, IUST, GMCs) plus top PMSSS-approved colleges across India.",
                href: "/colleges",
                icon: GraduationCap,
                tag: "College Matching",
              },
              {
                title: "Module 5: Smart Scholarship Matcher",
                desc: "Instant eligibility checker for AICTE PMSSS (₹3L/yr), Mission Youth Parvaaz, Tejaswini, Mumkin, and NSP post-matric schemes.",
                href: "/scholarships",
                icon: Award,
                tag: "Fee Waiver Portal",
              },
              {
                title: "Module 6: Skill Gap Analyzer",
                desc: "Select any dream job to diagnose missing competencies and enroll in free verified courses on SWAYAM, NPTEL, and JKEDI.",
                href: "/skill-gap",
                icon: Sparkles,
                tag: "Course Synthesis",
              },
              {
                title: "Module 7: Career Roadmap Planner",
                desc: "Interactive multi-stage timeline from Class 10 → Class 12 → Entrance Exams (JKCET/JEE/NEET) → Degree → High Growth Job.",
                href: "/roadmap",
                icon: TrendingUp,
                tag: "Interactive Timeline",
              },
              {
                title: "Module 8: AI Counselor 'ShikshaMitra'",
                desc: "Conversational AI assistant with multilingual voice support, expert knowledge of J&K education policy, and instant guidance.",
                href: "/counselor",
                icon: BotMessageSquare,
                tag: "24/7 AI Advisor",
              },
              {
                title: "Module 9: J&K Opportunity Heatmap",
                desc: "Interactive 20-district map visualizing college density, industrial growth centers (Lassipora, Ghati, IGC Samba), and Mission Youth hubs.",
                href: "/heatmap",
                icon: MapPin,
                tag: "20 Districts Map",
              },
            ].map((m, idx) => {
              const Icon = m.icon;
              return (
                <Link
                  key={idx}
                  href={m.href}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-gov hover:shadow-govLg hover:border-gov-primary transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-gov-primary flex items-center justify-center group-hover:bg-gov-primary group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {m.tag}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base group-hover:text-gov-primary transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-gov-primary">
                    <span>Explore Module</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* AGENTIC AI ARCHITECTURE BANNER */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-govLg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-gov-gold/20 text-amber-300 px-3 py-1 rounded-full text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-gov-gold" />
                <span>Powered by 9 Specialized AI Agents</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Autonomous Multi-Agent Orchestration
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ShikshaSetu does not use a single rigid chatbot. Our Master Orchestrator delegates tasks dynamically across 9 dedicated domain agents (Profile, Assessment, Career, College, Scholarship, Skill Gap, Roadmap, Opportunity & Counselor) to synthesize personalized recommendations.
              </p>
            </div>
            <Link
              href="/admin"
              className="px-6 py-3 rounded-xl bg-gov-primary hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 shrink-0"
            >
              <span>View Live Agent Health Monitor</span>
              <ArrowRight className="w-4 h-4 text-gov-gold" />
            </Link>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
