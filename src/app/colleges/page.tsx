"use client";

import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAppStore } from "@/lib/store/useAppStore";
import { COLLEGES_DATABASE } from "@/lib/data/collegesData";
import { JK_DISTRICTS_DATA } from "@/lib/data/jkDistricts";
import {
  GraduationCap,
  Search,
  Filter,
  MapPin,
  Award,
  ExternalLink,
  Bookmark,
  CheckCircle2,
  Building2,
  BookOpen,
  IndianRupee,
  Layers,
  ChevronDown,
  X
} from "lucide-react";
import { College } from "@/types";

export default function CollegesPage() {
  const { bookmarkedColleges, toggleBookmarkCollege, profile } = useAppStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState<string>("All");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("All");
  const [selectedDegree, setSelectedDegree] = useState<string>("All");
  const [pmsssOnly, setPmsssOnly] = useState<boolean>(false);
  const [selectedCollegeForModal, setSelectedCollegeForModal] = useState<College | null>(null);

  const filteredColleges = COLLEGES_DATABASE.filter((col) => {
    // Search match
    if (
      searchTerm &&
      !col.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !col.shortName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !col.campusCity.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // State filter
    if (selectedState !== "All" && col.state !== selectedState) {
      return false;
    }

    // District filter
    if (selectedDistrict !== "All" && col.district.toLowerCase() !== selectedDistrict.toLowerCase()) {
      return false;
    }

    // PMSSS filter
    if (pmsssOnly && !col.pmsssApproved) {
      return false;
    }

    // Degree filter
    if (selectedDegree !== "All") {
      const hasDegree = col.coursesOffered.some((c) => c.degree === selectedDegree || c.courseName.includes(selectedDegree));
      if (!hasDegree) return false;
    }

    return true;
  });

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-gov flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Module 4: Intelligent College & Institute Finder</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Premier Higher Education Directory & Cutoffs
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Explore premier Jammu & Kashmir universities (NIT, IIT, KU, JU, SKUAST, IUST, GMCs) along with AICTE PMSSS approved supernumerary institutes across India.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 px-3.5 py-2 rounded-2xl border border-slate-200">
            <Building2 className="w-4 h-4 text-gov-primary" />
            <span>{filteredColleges.length} Colleges Available</span>
          </div>
        </div>

        {/* SEARCH & FILTERS BAR */}
        <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search college by name, short acronym (e.g. NIT, KU, IIT), or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-gov-primary text-xs"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* PMSSS Fast Toggle */}
            <button
              onClick={() => setPmsssOnly(!pmsssOnly)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-2 shrink-0 ${
                pmsssOnly
                  ? "bg-gov-goldLight border-amber-300 text-gov-goldDark shadow-sm"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Award className="w-4 h-4 text-gov-gold" />
              <span>AICTE PMSSS Approved Only</span>
            </button>
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            {/* State Filter */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">State / Territory</label>
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedDistrict("All");
                }}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white font-medium text-slate-800"
              >
                <option value="All">All States & Territories</option>
                <option value="Jammu & Kashmir">Jammu & Kashmir Only</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Punjab">Punjab</option>
              </select>
            </div>

            {/* J&K District Filter */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">J&K District</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                disabled={selectedState !== "All" && selectedState !== "Jammu & Kashmir"}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white font-medium text-slate-800 disabled:opacity-50"
              >
                <option value="All">All 20 J&K Districts</option>
                {JK_DISTRICTS_DATA.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Degree Filter */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1">Target Degree / Program</label>
              <select
                value={selectedDegree}
                onChange={(e) => setSelectedDegree(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white font-medium text-slate-800"
              >
                <option value="All">All Degree Types</option>
                <option value="B.Tech">B.Tech / B.E. (Engineering)</option>
                <option value="MBBS">MBBS (Medicine & Surgery)</option>
                <option value="B.Sc">B.Sc (Horticulture / Agriculture / Nursing)</option>
                <option value="MBA">MBA / IPM (Management)</option>
                <option value="Dual Degree">Integrated 5-Year IPM / Law</option>
              </select>
            </div>
          </div>
        </div>

        {/* COLLEGE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredColleges.map((col) => {
            const isBookmarked = bookmarkedColleges.includes(col.id);

            return (
              <div
                key={col.id}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-gov hover:shadow-govLg transition-all duration-200 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-gov-primary border border-blue-200">
                        {col.type}
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        NAAC {col.naacGrade}
                      </span>
                      {col.nirfRank && (
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                          NIRF #{col.nirfRank}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => toggleBookmarkCollege(col.id)}
                      className={`p-1.5 rounded-xl border transition-colors ${
                        isBookmarked
                          ? "bg-amber-50 border-amber-300 text-gov-gold"
                          : "bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600"
                      }`}
                      title="Bookmark College"
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-gov-gold text-gov-gold" : ""}`} />
                    </button>
                  </div>

                  {/* College Name & Location */}
                  <div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-gov-primary transition-colors leading-snug">
                      {col.name}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{col.campusCity} ({col.district} District)</span>
                    </p>
                  </div>

                  {/* PMSSS Quota Tag if eligible */}
                  {col.pmsssApproved && (
                    <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-amber-900 font-bold">
                        <Award className="w-4 h-4 text-gov-gold shrink-0" />
                        <span>AICTE PMSSS Supernumerary Seats Active</span>
                      </div>
                      <span className="text-[10px] font-extrabold text-amber-800 bg-white px-2 py-0.5 rounded border border-amber-200">
                        {col.pmsssSeatsCount || "Available"} Quota Seats
                      </span>
                    </div>
                  )}

                  {/* Metrics: Fees & Average Placement */}
                  <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-500 font-semibold uppercase">Annual Tuition</span>
                      <p className="font-extrabold text-slate-900 mt-0.5">{col.tuitionFeeRangePerYear}</p>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-[10px] text-slate-500 font-semibold uppercase">Avg Placement CTC</span>
                      <p className="font-extrabold text-gov-green mt-0.5">₹{col.averagePackageLpa} LPA (Max ₹{col.highestPackageLpa}L)</p>
                    </div>
                  </div>

                  {/* Prominent Courses Preview */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Key Courses & Programs:</span>
                    <div className="space-y-1">
                      {col.coursesOffered.slice(0, 2).map((c, i) => (
                        <div key={i} className="flex justify-between items-center text-xs p-1.5 bg-slate-50 rounded-lg">
                          <span className="font-medium text-slate-700">{c.courseName}</span>
                          <span className="text-[10px] font-bold text-gov-primary">{c.degree}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
                  <button
                    onClick={() => setSelectedCollegeForModal(col)}
                    className="font-bold text-gov-primary hover:underline flex items-center gap-1"
                  >
                    <span>View All Cutoffs & Courses ({col.coursesOffered.length})</span>
                  </button>

                  <a
                    href={col.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1 font-semibold"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* DETAILED COLLEGE MODAL */}
        {selectedCollegeForModal && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 animate-in zoom-in-95 duration-150">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-gov-primary border border-blue-200">
                      {selectedCollegeForModal.type}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      NAAC {selectedCollegeForModal.naacGrade}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900">{selectedCollegeForModal.name}</h3>
                  <p className="text-xs text-slate-500">{selectedCollegeForModal.campusCity}</p>
                </div>
                <button
                  onClick={() => setSelectedCollegeForModal(null)}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Admission Mode */}
              <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs">
                <span className="font-bold text-gov-primary block mb-0.5">Official Admission & Counseling Mode:</span>
                <p className="text-slate-700">{selectedCollegeForModal.admissionMode}</p>
              </div>

              {/* Full Courses & Cutoffs Table */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Full Course Offerings, Intake & Historical Cutoffs
                </h4>
                <div className="space-y-2 text-xs">
                  {selectedCollegeForModal.coursesOffered.map((c, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-extrabold text-slate-800">{c.courseName}</span>
                        <span className="font-bold text-gov-primary text-[11px] bg-white px-2 py-0.5 rounded border border-slate-200">
                          {c.degree} • {c.duration}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1">
                        <span>Intake Capacity: <strong>{c.intake} Seats</strong></span>
                        <span className="text-gov-primary font-semibold">Cutoff: {c.approxCutoff}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Campus Facilities */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Campus Amenities & Facilities</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCollegeForModal.facilities.map((fac, i) => (
                    <span key={i} className="text-xs font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg">
                      ✓ {fac}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedCollegeForModal(null)}
                  className="px-5 py-2 rounded-xl bg-gov-primary text-white font-bold text-xs"
                >
                  Close Institute Dossier
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
