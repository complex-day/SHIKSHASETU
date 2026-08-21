"use client";

import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAppStore } from "@/lib/store/useAppStore";
import { CAREERS_DATABASE } from "@/lib/data/careersData";
import { runRoadmapAgent } from "@/lib/ai/agents/roadmapAgent";
import {
  GitFork,
  CheckCircle2,
  Circle,
  Sparkles,
  Printer,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Building2,
  ChevronDown,
  Layers
} from "lucide-react";

export default function RoadmapPage() {
  const { profile, selectedCareerId, completedMilestones, toggleMilestone, setSelectedCareerId } = useAppStore();
  const [careerId, setCareerId] = useState<string>(selectedCareerId || "ai_ml_engineer");

  const activeCareer = CAREERS_DATABASE.find((c) => c.id === careerId) || CAREERS_DATABASE[0];
  const milestones = runRoadmapAgent(profile, activeCareer);

  const completedCount = completedMilestones.length;
  const progressPercent = Math.round((completedCount / (milestones.length || 1)) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <AppLayout>
      <div className="space-y-8 print:p-0">
        {/* HEADER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov flex flex-col md:flex-row items-start md:items-center justify-between gap-6 print:border-none print:shadow-none">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-gov-primary">
              <GitFork className="w-3.5 h-3.5" />
              <span>Module 7: Career Roadmap Planner</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Interactive Sequential Milestone Timeline
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Step-by-step navigational blueprint tailored for **{profile.fullName}** ({profile.district} District) to become a recognized **{activeCareer.title}**.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 print:hidden">
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs border border-slate-200 flex items-center gap-2 transition-colors"
            >
              <Printer className="w-4 h-4 text-gov-primary" />
              <span>Print / Save Roadmap PDF</span>
            </button>
          </div>
        </div>

        {/* CAREER SELECTOR & PROGRESS BAR */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 print:hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                Target Career Trajectory:
              </label>
              <select
                value={careerId}
                onChange={(e) => {
                  setCareerId(e.target.value);
                  setSelectedCareerId(e.target.value);
                }}
                className="w-full sm:w-80 px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 font-bold text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-gov-primary"
              >
                {CAREERS_DATABASE.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="text-slate-500 font-semibold">Milestone Progression:</span>
              <span className="text-gov-primary font-black text-sm">
                {completedCount} of {milestones.length} Done ({progressPercent}%)
              </span>
            </div>
          </div>

          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-gov-primary to-gov-gold h-full rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* INTERACTIVE TIMELINE NODES */}
        <div className="space-y-6">
          {milestones.map((milestone, idx) => {
            const isCompleted = completedMilestones.includes(milestone.id);

            return (
              <div
                key={milestone.id}
                className={`p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-200 shadow-gov hover:shadow-govLg space-y-4 relative ${
                  isCompleted ? "border-emerald-200 bg-emerald-50/20" : "border-slate-200"
                }`}
              >
                {/* Stage Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleMilestone(milestone.id)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors shrink-0 ${
                        isCompleted
                          ? "bg-gov-green text-white shadow-sm"
                          : "bg-slate-100 text-slate-500 hover:bg-gov-primary hover:text-white"
                      }`}
                      title={isCompleted ? "Mark as Incomplete" : "Mark as Completed"}
                    >
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                    </button>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gov-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {milestone.targetTimeline}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                        {milestone.stageName}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleMilestone(milestone.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                        isCompleted
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {isCompleted ? "✓ Completed" : "Mark Stage Complete"}
                    </button>
                  </div>
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {milestone.stageSubtitle}
                </p>

                {/* 3 Columns: Actions + Exams + Scholarships */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs pt-1">
                  {/* Key Actions (Col 1) */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gov-primary" />
                      Key Action Items:
                    </span>
                    <ul className="space-y-1.5 text-[11px] text-slate-700">
                      {milestone.keyActions.map((act, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gov-primary mt-1.5 shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recommended Entrance Exams (Col 2) */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-gov-gold" />
                      Target Entrance Exams:
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {milestone.recommendedExams.map((exam, i) => (
                        <span key={i} className="px-2 py-1 rounded-lg bg-white border border-slate-200 font-bold text-gov-primary text-[11px]">
                          {exam}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Scholarship Reminders (Col 3) */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <span className="text-[10px] font-bold text-slate-500 uppercase flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-gov-green" />
                      Scholarship Facilitation:
                    </span>
                    <ul className="space-y-1 text-[11px] text-slate-700">
                      {milestone.scholarshipReminders.map((sch, i) => (
                        <li key={i} className="text-gov-green font-semibold">
                          ★ {sch}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Expected Outcome */}
                <div className="p-3 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-center justify-between text-xs text-slate-700">
                  <span>
                    <strong>Expected Milestone Outcome:</strong> {milestone.expectedOutcome}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
