import { create } from "zustand";
import {
  AssessmentResult,
  CareerRecommendation,
  LanguageCode,
  StudentProfile,
  UserRole,
} from "@/types";
import { executeMasterOrchestrator, MasterOrchestrationReport } from "@/lib/ai/orchestrator";

const DEFAULT_PROFILE: StudentProfile = {
  id: "std_jk_8849",
  fullName: "Faizan Ahmad Wani",
  email: "faizan.wani@shikshasetu.jk.gov.in",
  phone: "+91 94190 12345",
  age: 17,
  gender: "male",
  district: "Srinagar",
  category: "RBA",
  familyAnnualIncome: 320000, // ₹3.2 Lakhs
  currentEducationLevel: "class_12",
  currentStream: "science_pcm",
  class10Percentage: 89.4,
  class12Percentage: 88.2,
  preferredSubjects: ["Mathematics", "Physics", "Computer Science"],
  interests: ["Coding & Algorithms", "Robotics", "Himalayan Astronomy", "Smart Agriculture"],
  hobbies: ["Trekking", "Chess", "Building Arduino Gadgets"],
  currentSkills: ["Python", "C++ Basics", "Problem Solving", "Web Design"],
  preferredWorkEnvironment: "tech_office",
  careerAspirations: ["AI / Machine Learning Engineer", "Cloud Software Architect"],
  careerReadinessScore: 86,
  strengths: [
    "High Academic Standing (89.4% in 10th)",
    "Strong Quantitative & Computational Logic",
    "Self-taught Python & Web Development"
  ],
  weaknesses: [
    "Needs structured preparation for JEE Advanced & JKCET mocks",
    "Limited exposure to enterprise cloud frameworks"
  ],
  personaBadge: "Analytical Tech Innovator",
  personaDescription: "High analytical acuity combined with modern computational thinking, ideal for AI, software engineering, and advanced research.",
  preferredLanguage: "en",
};

const DEFAULT_ANSWERS: Record<string, number> = {
  q1: 5,
  q2: 4,
  q3: 4,
  q4: 4,
  q5: 5,
  q6: 5,
  q7: 4,
  q8: 4,
  q9: 4,
  q10: 5,
};

interface AppState {
  currentRole: UserRole;
  language: LanguageCode;
  profile: StudentProfile;
  assessmentAnswers: Record<string, number>;
  assessmentResult: AssessmentResult | null;
  orchestrationReport: MasterOrchestrationReport | null;
  isOrchestrating: boolean;
  selectedCareerId: string;
  bookmarkedCareers: string[];
  bookmarkedColleges: string[];
  bookmarkedScholarships: string[];
  completedMilestones: string[];

  // Actions
  setRole: (role: UserRole) => void;
  setLanguage: (lang: LanguageCode) => void;
  updateProfile: (updates: Partial<StudentProfile>) => void;
  setAssessmentAnswer: (questionId: string, score: number) => void;
  runOrchestration: () => void;
  setSelectedCareerId: (careerId: string) => void;
  toggleBookmarkCareer: (id: string) => void;
  toggleBookmarkCollege: (id: string) => void;
  toggleBookmarkScholarship: (id: string) => void;
  toggleMilestone: (milestoneId: string) => void;
}

export const useAppStore = create<AppState>((set, get) => {
  const initialReport = executeMasterOrchestrator(DEFAULT_PROFILE, DEFAULT_ANSWERS);

  return {
    currentRole: "student",
    language: "en",
    profile: DEFAULT_PROFILE,
    assessmentAnswers: DEFAULT_ANSWERS,
    assessmentResult: initialReport.assessmentResult,
    orchestrationReport: initialReport,
    isOrchestrating: false,
    selectedCareerId: "ai_ml_engineer",
    bookmarkedCareers: ["ai_ml_engineer", "software_architect"],
    bookmarkedColleges: ["nit_srinagar", "iit_jammu"],
    bookmarkedScholarships: ["pmsss_jk_2026", "mission_youth_parvaaz"],
    completedMilestones: ["m1"],

    setRole: (role) => set({ currentRole: role }),
    setLanguage: (lang) => {
      set((state) => ({
        language: lang,
        profile: { ...state.profile, preferredLanguage: lang },
      }));
    },
    updateProfile: (updates) => {
      set((state) => {
        const updated = { ...state.profile, ...updates };
        const newReport = executeMasterOrchestrator(updated, state.assessmentAnswers);
        return {
          profile: updated,
          orchestrationReport: newReport,
        };
      });
    },
    setAssessmentAnswer: (questionId, score) => {
      set((state) => ({
        assessmentAnswers: {
          ...state.assessmentAnswers,
          [questionId]: score,
        },
      }));
    },
    runOrchestration: () => {
      set({ isOrchestrating: true });
      setTimeout(() => {
        const state = get();
        const newReport = executeMasterOrchestrator(state.profile, state.assessmentAnswers);
        set({
          orchestrationReport: newReport,
          assessmentResult: newReport.assessmentResult,
          isOrchestrating: false,
        });
      }, 600);
    },
    setSelectedCareerId: (careerId) => set({ selectedCareerId: careerId }),
    toggleBookmarkCareer: (id) => {
      set((state) => ({
        bookmarkedCareers: state.bookmarkedCareers.includes(id)
          ? state.bookmarkedCareers.filter((i) => i !== id)
          : [...state.bookmarkedCareers, id],
      }));
    },
    toggleBookmarkCollege: (id) => {
      set((state) => ({
        bookmarkedColleges: state.bookmarkedColleges.includes(id)
          ? state.bookmarkedColleges.filter((i) => i !== id)
          : [...state.bookmarkedColleges, id],
      }));
    },
    toggleBookmarkScholarship: (id) => {
      set((state) => ({
        bookmarkedScholarships: state.bookmarkedScholarships.includes(id)
          ? state.bookmarkedScholarships.filter((i) => i !== id)
          : [...state.bookmarkedScholarships, id],
      }));
    },
    toggleMilestone: (milestoneId) => {
      set((state) => ({
        completedMilestones: state.completedMilestones.includes(milestoneId)
          ? state.completedMilestones.filter((m) => m !== milestoneId)
          : [...state.completedMilestones, milestoneId],
      }));
    },
  };
});
