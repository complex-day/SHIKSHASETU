"use client";

import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAppStore } from "@/lib/store/useAppStore";
import { JK_DISTRICTS_DATA } from "@/lib/data/jkDistricts";
import {
  UserCheck,
  Save,
  Flame,
  Award,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Brain,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  MapPin,
  IndianRupee,
  Briefcase
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ProfilePage() {
  const { profile, updateProfile, orchestrationReport } = useAppStore();
  const [formData, setFormData] = useState(profile);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [interestInput, setInterestInput] = useState("");
  const [aspirationInput, setAspirationInput] = useState("");

  const readinessScore = orchestrationReport?.profileAnalysis?.readinessScore || profile.careerReadinessScore || 86;
  const personaBadge = orchestrationReport?.profileAnalysis?.personaBadge || profile.personaBadge || "Analytical Tech Innovator";
  const personaDesc = orchestrationReport?.profileAnalysis?.personaDescription || profile.personaDescription;
  const strengths = orchestrationReport?.profileAnalysis?.strengths || profile.strengths;
  const weaknesses = orchestrationReport?.profileAnalysis?.weaknesses || profile.weaknesses;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setSaveSuccess(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    setTimeout(() => setSaveSuccess(false), 4000);
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.currentSkills.includes(skillInput.trim())) {
      setFormData({
        ...formData,
        currentSkills: [...formData.currentSkills, skillInput.trim()],
      });
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setFormData({
      ...formData,
      currentSkills: formData.currentSkills.filter((s) => s !== skill),
    });
  };

  const addInterest = () => {
    if (interestInput.trim() && !formData.interests.includes(interestInput.trim())) {
      setFormData({
        ...formData,
        interests: [...formData.interests, interestInput.trim()],
      });
      setInterestInput("");
    }
  };

  const removeInterest = (item: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter((i) => i !== item),
    });
  };

  const addAspiration = () => {
    if (aspirationInput.trim() && !formData.careerAspirations.includes(aspirationInput.trim())) {
      setFormData({
        ...formData,
        careerAspirations: [...formData.careerAspirations, aspirationInput.trim()],
      });
      setAspirationInput("");
    }
  };

  const removeAspiration = (asp: string) => {
    setFormData({
      ...formData,
      careerAspirations: formData.careerAspirations.filter((a) => a !== asp),
    });
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-gov-primary">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Module 1: Student Profile & Persona Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Comprehensive Academic & Persona Profile
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Your profile forms the foundational knowledge vector for all 9 Agentic AI models. Keep your marks, income, category, and skills up to date for precise PMSSS and career matching.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={handleSave}
              className="px-5 py-2.5 rounded-xl bg-gov-primary hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-900/15 flex items-center gap-2 transition-all"
            >
              <Save className="w-4 h-4 text-gov-gold" />
              <span>Save & Re-Analyze Profile</span>
            </button>
          </div>
        </div>

        {saveSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2.5 animate-in fade-in slide-in-from-top-2">
            <CheckCircle2 className="w-5 h-5 text-gov-green" />
            <span>Profile successfully updated! All 9 AI agents have synchronized the new parameters.</span>
          </div>
        )}

        {/* 2-COLUMN LAYOUT: FORM (LEFT) & PERSONA DOSSIER (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* PROFILE FORM (2 COLS) */}
          <form onSubmit={handleSave} className="lg:col-span-2 space-y-6">
            {/* Personal Details */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-slate-100">
                <MapPin className="w-4 h-4 text-gov-primary" />
                1. Personal & Socioeconomic Information (J&K Quota)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gov-primary text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gov-primary text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Phone (Aadhaar linked)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gov-primary text-xs"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Age & Gender</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                      min="14"
                      max="35"
                    />
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Home District (Jammu & Kashmir)
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white font-medium"
                  >
                    {JK_DISTRICTS_DATA.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} ({d.division} Division)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Reservation Category (J&K SRO / Rules)
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white font-medium"
                  >
                    <option value="OM">OM (Open Merit / General)</option>
                    <option value="RBA">RBA (Resident of Backward Area)</option>
                    <option value="SC">SC (Scheduled Caste)</option>
                    <option value="ST">ST (Scheduled Tribe)</option>
                    <option value="ALC/IB">ALC / IB (Actual Line of Control / Intl Border)</option>
                    <option value="EWS">EWS (Economically Weaker Section)</option>
                    <option value="PSP">PSP (Pahari Speaking People)</option>
                    <option value="OSC">OSC (Other Social Castes)</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between items-center mb-1">
                    <label className="font-semibold text-slate-700">
                      Family Annual Income:{" "}
                      <span className="text-gov-primary font-bold">
                        ₹{(formData.familyAnnualIncome / 100000).toFixed(2)} Lakhs / Year
                      </span>
                    </label>
                    <span className="text-[10px] text-gov-green font-bold">
                      {formData.familyAnnualIncome <= 800000 ? "✓ PMSSS Income Eligible (<₹8.0L)" : "Above PMSSS Limit"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1500000"
                    step="25000"
                    value={formData.familyAnnualIncome}
                    onChange={(e) => setFormData({ ...formData, familyAnnualIncome: Number(e.target.value) })}
                    className="w-full accent-gov-primary cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>₹50,000</span>
                    <span>₹4.0 Lakhs</span>
                    <span>₹8.0 Lakhs (PMSSS Cutoff)</span>
                    <span>₹15.0 Lakhs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic History */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-slate-100">
                <GraduationCap className="w-4 h-4 text-gov-primary" />
                2. Academic History & Stream Selection
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Current Education Level</label>
                  <select
                    value={formData.currentEducationLevel}
                    onChange={(e) => setFormData({ ...formData, currentEducationLevel: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white font-medium"
                  >
                    <option value="class_10">Class 10 (Secondary)</option>
                    <option value="class_11">Class 11 (Higher Secondary Part 1)</option>
                    <option value="class_12">Class 12 (Higher Secondary Part 2)</option>
                    <option value="diploma">Polytechnic Diploma</option>
                    <option value="undergraduate">Undergraduate Degree (B.Tech / MBBS / B.Sc / BA)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Higher Secondary Stream</label>
                  <select
                    value={formData.currentStream}
                    onChange={(e) => setFormData({ ...formData, currentStream: e.target.value as any })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs bg-white font-medium"
                  >
                    <option value="science_pcm">Science (Physics, Chemistry, Mathematics)</option>
                    <option value="science_pcb">Science (Physics, Chemistry, Biology)</option>
                    <option value="commerce">Commerce (Accountancy, Business Studies, Economics)</option>
                    <option value="arts_humanities">Arts & Humanities (Pol Sci, History, Psychology)</option>
                    <option value="vocational">Vocational / Technical</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Class 10 Percentage (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="33"
                    max="100"
                    value={formData.class10Percentage || ""}
                    onChange={(e) => setFormData({ ...formData, class10Percentage: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    placeholder="e.g. 89.4"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Class 12 Percentage (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="33"
                    max="100"
                    value={formData.class12Percentage || ""}
                    onChange={(e) => setFormData({ ...formData, class12Percentage: Number(e.target.value) })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs"
                    placeholder="e.g. 88.2"
                  />
                </div>
              </div>
            </div>

            {/* Skills & Aspirations */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 pb-2 border-b border-slate-100">
                <Briefcase className="w-4 h-4 text-gov-primary" />
                3. Skills, Aspirations & Interests
              </h3>

              {/* Current Skills Tags */}
              <div className="space-y-2 text-xs">
                <label className="block font-semibold text-slate-700">Current Technical / Practical Skills</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addSkill();
                      }
                    }}
                    placeholder="Type skill (e.g. Python, Public Speaking, AutoCAD) & press Add"
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                  <button
                    type="button"
                    onClick={addSkill}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold text-slate-700"
                  >
                    + Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {formData.currentSkills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-gov-primary text-xs font-semibold"
                    >
                      {s}
                      <button
                        type="button"
                        onClick={() => removeSkill(s)}
                        className="text-slate-400 hover:text-red-600 font-bold"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Career Aspirations Tags */}
              <div className="space-y-2 text-xs pt-2">
                <label className="block font-semibold text-slate-700">Dream Career Aspirations</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={aspirationInput}
                    onChange={(e) => setAspirationInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        addAspiration();
                      }
                    }}
                    placeholder="Type target role (e.g. AI Engineer, Medical Specialist, IAS/JKAS)"
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs"
                  />
                  <button
                    type="button"
                    onClick={addAspiration}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl font-bold text-slate-700"
                  >
                    + Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {formData.careerAspirations.map((a) => (
                    <span
                      key={a}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold"
                    >
                      {a}
                      <button
                        type="button"
                        onClick={() => removeAspiration(a)}
                        className="text-slate-400 hover:text-red-600 font-bold"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-gov-primary hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-900/20 flex items-center gap-2"
              >
                <Save className="w-4 h-4 text-gov-gold" />
                <span>Save Changes & Sync AI Agents</span>
              </button>
            </div>
          </form>

          {/* PERSONA DOSSIER & READINESS GAUGE (1 COL) */}
          <div className="space-y-6">
            {/* Persona Badge Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-blue-900 via-indigo-900 to-slate-900 text-white shadow-govLg space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 rounded-full bg-gov-gold/20 blur-xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gov-gold px-2.5 py-0.5 rounded-full bg-gov-gold/10 border border-gov-gold/30">
                  AI Student Persona
                </span>
                <Sparkles className="w-4 h-4 text-gov-gold" />
              </div>

              <div>
                <h3 className="text-xl font-black text-white">{personaBadge}</h3>
                <p className="text-xs text-blue-200 mt-1 leading-relaxed">{personaDesc}</p>
              </div>

              {/* Career Readiness Meter */}
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-gov-orange fill-gov-orange" />
                    Career Readiness Score
                  </span>
                  <span className="text-lg font-black text-gov-gold">{readinessScore}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-gov-gold to-emerald-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${readinessScore}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-300">
                  Calculated by Profile Agent based on academic consistency, skill diversity, and stream alignment.
                </p>
              </div>
            </div>

            {/* Strengths & Weaknesses Card */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-gov space-y-5">
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-gov-green" />
                  Key Identified Strengths
                </h4>
                <ul className="space-y-2 text-xs">
                  {strengths.map((s, idx) => (
                    <li key={idx} className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gov-green mt-1.5 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-gov-orange" />
                  Areas for Strategic Focus
                </h4>
                <ul className="space-y-2 text-xs">
                  {weaknesses.map((w, idx) => (
                    <li key={idx} className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-100 text-slate-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gov-orange mt-1.5 shrink-0" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
