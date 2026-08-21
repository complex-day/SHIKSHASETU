"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAppStore } from "@/lib/store/useAppStore";
import { ASSESSMENT_QUESTIONS } from "@/lib/data/assessmentQuestions";
import {
  Brain,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
  Award,
  ChevronRight,
  BarChart2,
  TrendingUp,
  Globe
} from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import confetti from "canvas-confetti";

export default function AssessmentPage() {
  const { assessmentAnswers, setAssessmentAnswer, runOrchestration, orchestrationReport, language } = useAppStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const questions = ASSESSMENT_QUESTIONS;
  const currentQ = questions[currentStep];

  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentStep + 1) / totalQuestions) * 100);

  const handleSelectOption = (score: number) => {
    setAssessmentAnswer(currentQ.id, score);
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      finishAssessment();
    }
  };

  const finishAssessment = () => {
    runOrchestration();
    setShowResults(true);
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const assessmentResult = orchestrationReport?.assessmentResult || {
    completedAt: new Date().toISOString(),
    scores: [
      { dimension: "Analytical", score: 88, percentile: 94, description: "Strong logical reasoning.", strengthsSummary: "Algorithmic problem solving" },
      { dimension: "Creative", score: 80, percentile: 86, description: "Visual and innovative ideation.", strengthsSummary: "Design thinking" },
      { dimension: "Technical", score: 92, percentile: 96, description: "Digital and computing fluency.", strengthsSummary: "Deep software curiosity" },
      { dimension: "Leadership", score: 82, percentile: 88, description: "Group coordination and resilience.", strengthsSummary: "Project leadership" },
      { dimension: "Communication", score: 84, percentile: 90, description: "Clear articulation and empathy.", strengthsSummary: "Stakeholder engagement" }
    ],
    overallAptitudeIndex: 85,
    dominantTraits: ["Technical Proficiency (92%)", "Analytical Acuity (88%)"],
    topAptitudeAreas: ["Technical", "Analytical", "Communication"],
    careerCompatibilitySummary: "Student demonstrates high aptitude for quantitative analysis and digital engineering."
  };

  const radarData = assessmentResult.scores.map((s) => ({
    dimension: s.dimension,
    score: s.score,
    fullMark: 100,
  }));

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700">
              <Brain className="w-3.5 h-3.5" />
              <span>Module 2: 5-Dimensional Psychometric Career Assessment</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Cognitive Aptitude & Personality Matrix
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Assesses 5 key foundational faculties: **Analytical**, **Creative**, **Technical**, **Leadership**, and **Communication** to determine authentic career compatibility.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            {showResults && (
              <button
                onClick={() => {
                  setShowResults(false);
                  setCurrentStep(0);
                }}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs border border-slate-200 flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Assessment</span>
              </button>
            )}
          </div>
        </div>

        {/* ASSESSMENT QUIZ STEPPER (IF NOT IN RESULTS VIEW) */}
        {!showResults ? (
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Progress Bar Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-slate-500">
                  Question {currentStep + 1} of {totalQuestions}
                </span>
                <span className="text-gov-primary bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                  Dimension: {currentQ.dimension}
                </span>
                <span className="text-gov-primary">{progressPercent}% Completed</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gov-primary h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md">
                  {currentQ.dimension} Reasoning Evaluation
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug pt-1">
                  {currentQ.questionText}
                </h3>
                {language === "ur" && currentQ.questionTextUrdu && (
                  <p className="text-sm font-medium text-slate-600 font-serif pt-1 text-right" dir="rtl">
                    {currentQ.questionTextUrdu}
                  </p>
                )}
                {language === "hi" && currentQ.questionTextHindi && (
                  <p className="text-xs sm:text-sm font-medium text-slate-600 pt-1">
                    {currentQ.questionTextHindi}
                  </p>
                )}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = assessmentAnswers[currentQ.id] === opt.score;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.score)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-150 flex items-start justify-between gap-3 group ${
                        isSelected
                          ? "border-gov-primary bg-blue-50/80 shadow-sm"
                          : "border-slate-200 hover:border-gov-primary hover:bg-slate-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 transition-colors ${
                            isSelected
                              ? "border-gov-primary bg-gov-primary text-white"
                              : "border-slate-300 group-hover:border-gov-primary text-slate-500"
                          }`}
                        >
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-slate-800 group-hover:text-slate-900">
                            {opt.label}
                          </p>
                          <span className="text-[10px] font-semibold text-slate-400 mt-0.5 inline-block">
                            Indicator: {opt.traitIndicator}
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 mt-1 transition-transform ${
                          isSelected ? "text-gov-primary" : "text-slate-300 group-hover:text-gov-primary group-hover:translate-x-0.5"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                {currentStep < totalQuestions - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="px-5 py-2 rounded-xl bg-gov-primary text-white font-bold text-xs hover:bg-blue-700 flex items-center gap-1.5"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={finishAssessment}
                    className="px-6 py-2.5 rounded-xl bg-gov-green hover:bg-green-700 text-white font-extrabold text-xs shadow-md flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-gov-gold" />
                    <span>Submit & Generate Matrix</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* RESULTS & RADAR CHART VIEW */
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Top Score Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-govLg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gov-gold px-3 py-1 rounded-full bg-gov-gold/15 border border-gov-gold/30">
                  Psychometric Assessment Report Generated
                </span>
                <h2 className="text-2xl sm:text-3xl font-black">
                  Overall Cognitive Aptitude Index:{" "}
                  <span className="text-gov-gold">{assessmentResult.overallAptitudeIndex}/100</span>
                </h2>
                <p className="text-xs sm:text-sm text-blue-200 max-w-2xl leading-relaxed">
                  {assessmentResult.careerCompatibilitySummary}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/recommendations"
                  className="px-6 py-3 rounded-xl bg-gov-gold hover:bg-amber-400 text-slate-900 font-extrabold text-xs sm:text-sm shadow-lg shadow-amber-900/30 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>View Top 5 AI Career Trajectories</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 2-COLUMN: RADAR CHART + DIMENSION BREAKDOWN */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* RADAR CHART (LEFT) */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <BarChart2 className="w-4 h-4 text-gov-primary" />
                    5-Dimensional Competency Radar
                  </h3>
                  <span className="text-[10px] font-bold text-gov-primary bg-blue-50 px-2 py-0.5 rounded-md">
                    Multi-Axis Vector
                  </span>
                </div>

                <div className="w-full h-72 sm:h-80 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid stroke="#cbd5e1" strokeDasharray="3 3" />
                      <PolarAngleAxis
                        dataKey="dimension"
                        tick={{ fill: "#0f172a", fontSize: 11, fontWeight: 700 }}
                      />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94a3b8" />
                      <Radar
                        name="Student Profile"
                        dataKey="score"
                        stroke="#0B3B8C"
                        fill="#0B3B8C"
                        fillOpacity={0.45}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 pt-2 border-t border-slate-100">
                  {assessmentResult.dominantTraits.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-gov-primary"
                    >
                      ★ {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* DIMENSION DETAILS (RIGHT) */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 pb-1 border-b border-slate-100">
                  <TrendingUp className="w-4 h-4 text-gov-primary" />
                  Dimensional Score & Percentile Rank
                </h3>

                <div className="space-y-3.5">
                  {assessmentResult.scores.map((s) => (
                    <div key={s.dimension} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-extrabold text-slate-800">{s.dimension} Aptitude</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                            {s.percentile}th Percentile
                          </span>
                          <span className="font-black text-gov-primary text-sm">{s.score}%</span>
                        </div>
                      </div>

                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gov-primary h-full rounded-full transition-all duration-500"
                          style={{ width: `${s.score}%` }}
                        />
                      </div>

                      <p className="text-[11px] text-slate-600 leading-tight">
                        <strong className="text-slate-800">Strength:</strong> {s.strengthsSummary}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
