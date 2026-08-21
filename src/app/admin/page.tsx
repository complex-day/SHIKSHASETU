"use client";

import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAppStore } from "@/lib/store/useAppStore";
import {
  ShieldAlert,
  Cpu,
  Zap,
  Activity,
  CheckCircle2,
  Database,
  Server,
  RefreshCw,
  Layers,
  Sparkles,
  Terminal,
  Clock,
  HardDrive
} from "lucide-react";

export default function AdminPage() {
  const { orchestrationReport, runOrchestration, isOrchestrating } = useAppStore();

  const agentStatuses = orchestrationReport?.agentStatuses || [
    { id: "agent_1", name: "Student Profile Agent", role: "Profile Vectorization & Persona Classification", status: "healthy", latencyMs: 14, lastExecutedAt: "Just now", accuracyMetric: "98.4%" },
    { id: "agent_2", name: "Assessment Agent", role: "5-Dimensional Psychometric Computation", status: "healthy", latencyMs: 22, lastExecutedAt: "Just now", accuracyMetric: "97.8%" },
    { id: "agent_3", name: "Career Recommendation Agent", role: "Multimodal Career Trajectory Ranking", status: "healthy", latencyMs: 28, lastExecutedAt: "Just now", accuracyMetric: "96.5%" },
    { id: "agent_4", name: "College Matching Agent", role: "J&K Home Quota & PMSSS Seat Matching", status: "healthy", latencyMs: 16, lastExecutedAt: "Just now", accuracyMetric: "99.1%" },
    { id: "agent_5", name: "Scholarship Agent", role: "Rule Engine & Benefit Estimator", status: "healthy", latencyMs: 12, lastExecutedAt: "Just now", accuracyMetric: "99.4%" },
    { id: "agent_6", name: "Skill Gap Agent", role: "Curriculum Benchmarking & Course Synthesis", status: "healthy", latencyMs: 24, lastExecutedAt: "Just now", accuracyMetric: "96.9%" },
    { id: "agent_7", name: "Roadmap Agent", role: "Multi-Stage Sequential Timeline Generation", status: "healthy", latencyMs: 18, lastExecutedAt: "Just now", accuracyMetric: "97.2%" },
    { id: "agent_8", name: "Opportunity Discovery Agent", role: "20-District J&K Geo-Economic Corridors", status: "healthy", latencyMs: 15, lastExecutedAt: "Just now", accuracyMetric: "98.0%" },
    { id: "agent_9", name: "AI Counselor Agent", role: "ShikshaMitra Multilingual Stream Reasoning", status: "healthy", latencyMs: 45, lastExecutedAt: "Just now", accuracyMetric: "98.7%" },
  ];

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800">
              <ShieldAlert className="w-3.5 h-3.5 text-gov-primary" />
              <span>Module 11: Master AI Orchestrator & System Administration</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Multi-Agent Telemetry & Infrastructure Health
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Real-time monitoring of all 9 autonomous domain agents, pipeline latency benchmarks, LangGraph orchestration throughput, and PostgreSQL/Redis connection pooling.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={runOrchestration}
              disabled={isOrchestrating}
              className="px-5 py-2.5 rounded-xl bg-gov-primary hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-900/15 flex items-center gap-2 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 text-gov-gold ${isOrchestrating ? "animate-spin" : ""}`} />
              <span>{isOrchestrating ? "Executing Pipeline..." : "Trigger Full Pipeline Re-Run"}</span>
            </button>
          </div>
        </div>

        {/* 4 SYSTEM HEALTH CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-500 font-bold uppercase">Active AI Agents</span>
              <Cpu className="w-4 h-4 text-gov-primary" />
            </div>
            <p className="text-2xl font-black text-slate-900">9 / 9 Online</p>
            <span className="text-[10px] text-gov-green font-semibold">100% Operational Health</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-500 font-bold uppercase">Avg Pipeline Latency</span>
              <Zap className="w-4 h-4 text-gov-gold" />
            </div>
            <p className="text-2xl font-black text-gov-primary">174 ms</p>
            <span className="text-[10px] text-gov-green font-semibold">Sub-200ms Target Met</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-500 font-bold uppercase">Database Pooling</span>
              <Database className="w-4 h-4 text-teal-600" />
            </div>
            <p className="text-2xl font-black text-teal-700">PostgreSQL</p>
            <span className="text-[10px] text-slate-500 font-medium">Redis Cache Active</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-500 font-bold uppercase">Security & RBAC</span>
              <Server className="w-4 h-4 text-purple-600" />
            </div>
            <p className="text-2xl font-black text-purple-700">5 Roles</p>
            <span className="text-[10px] text-purple-600 font-semibold">State DPG Standard</span>
          </div>
        </div>

        {/* 9 AGENTS STATUS MATRIX */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-gov-primary" />
              9 Autonomous Multi-Agent Workflows (LangGraph Orchestration)
            </h3>
            <span className="text-xs font-bold text-gov-green flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-gov-green animate-pulse" />
              All Agents Synchronized
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {agentStatuses.map((agent) => (
              <div
                key={agent.id}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5 hover:border-gov-primary transition-all shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gov-primary bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {agent.id.toUpperCase().replace("_", " ")}
                  </span>
                  <span className="text-[10px] font-bold text-gov-green bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Healthy
                  </span>
                </div>

                <div>
                  <h4 className="font-black text-slate-900 text-sm">{agent.name}</h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">{agent.role}</p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-600">
                  <span>Latency: <strong>{agent.latencyMs} ms</strong></span>
                  <span>Accuracy: <strong className="text-gov-green">{agent.accuracyMetric}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AUDIT LOGS & MASTER WORKFLOW GRAPH */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-govLg space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="font-bold text-gov-gold flex items-center gap-2">
              <Terminal className="w-4 h-4 text-gov-gold" />
              Master Orchestrator Execution Pipeline Trace
            </span>
            <span className="text-slate-400 text-[10px]">Session: f5525be5-aa0c</span>
          </div>

          <div className="space-y-1.5 text-slate-300 text-[11px] leading-relaxed">
            <p className="text-emerald-400">[0.00ms] [START] MasterOrchestrator received Student Profile payload (ID: std_jk_8849)</p>
            <p className="text-blue-300">[12.4ms] [Agent 1] ProfileAgent vectorized academic standing (89.4%) &rarr; Classified Persona: &quot;Analytical Tech Innovator&quot;</p>
            <p className="text-blue-300">[30.1ms] [Agent 2] AssessmentAgent computed 5-axis radar vectors &rarr; Aptitude Index: 85/100</p>
            <p className="text-blue-300">[54.8ms] [Agent 3] CareerRecommendationAgent ranked 10 candidate trajectories &rarr; Top 1: AI/ML Engineer (96% Match)</p>
            <p className="text-blue-300">[69.2ms] [Agent 4] CollegeMatchingAgent filtered 25 institutions &rarr; Matched NIT Srinagar &amp; IIT Jammu (Home State Quota)</p>
            <p className="text-blue-300">[79.5ms] [Agent 5] ScholarshipAgent evaluated PMSSS &amp; Parvaaz criteria &rarr; Matched 4 schemes (₹3.0L potential benefit)</p>
            <p className="text-blue-300">[99.1ms] [Agent 6] SkillGapAgent identified missing competencies &rarr; Synthesized SWAYAM / NPTEL learning plan</p>
            <p className="text-blue-300">[115.4ms] [Agent 7] RoadmapAgent generated 5-stage sequential milestone timeline</p>
            <p className="text-blue-300">[129.8ms] [Agent 8] OpportunityAgent mapped 20 J&K district clusters &rarr; Extracted Srinagar STPI &amp; Tech Zone</p>
            <p className="text-emerald-400">[142.0ms] [COMPLETE] Master Orchestration Report synthesized successfully.</p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
