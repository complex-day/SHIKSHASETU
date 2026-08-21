export type UserRole = "student" | "parent" | "counselor" | "school_admin" | "govt_admin";

export type LanguageCode = "en" | "hi" | "ur";

export interface StudentProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  age: number;
  gender: "male" | "female" | "other" | "prefer_not_to_say";
  district: string;
  category: "OM" | "RBA" | "SC" | "ST" | "ALC/IB" | "EWS" | "PSP" | "OSC";
  familyAnnualIncome: number; // in INR
  currentEducationLevel: "class_10" | "class_11" | "class_12" | "diploma" | "undergraduate" | "graduate";
  currentStream?: "science_pcm" | "science_pcb" | "commerce" | "arts_humanities" | "vocational";
  class10Percentage?: number;
  class12Percentage?: number;
  undergradCgpa?: number;
  preferredSubjects: string[];
  interests: string[];
  hobbies: string[];
  currentSkills: string[];
  preferredWorkEnvironment: "tech_office" | "field_outdoor" | "hospital_clinic" | "classroom_academy" | "studio_creative" | "remote";
  careerAspirations: string[];
  careerReadinessScore: number; // 0 to 100
  strengths: string[];
  weaknesses: string[];
  personaBadge: string;
  personaDescription: string;
  preferredLanguage: LanguageCode;
}

export interface AssessmentDimensionScore {
  dimension: "Analytical" | "Creative" | "Technical" | "Leadership" | "Communication";
  score: number; // 0 to 100
  percentile: number;
  description: string;
  strengthsSummary: string;
}

export interface AssessmentResult {
  completedAt: string;
  scores: AssessmentDimensionScore[];
  overallAptitudeIndex: number;
  dominantTraits: string[];
  topAptitudeAreas: string[];
  careerCompatibilitySummary: string;
}

export interface AssessmentQuestion {
  id: string;
  dimension: "Analytical" | "Creative" | "Technical" | "Leadership" | "Communication";
  questionText: string;
  questionTextUrdu?: string;
  questionTextHindi?: string;
  options: {
    label: string;
    score: number; // 1 to 5
    traitIndicator: string;
  }[];
}

export interface SalaryInsight {
  entryLpa: number; // e.g. 4.5
  midLpa: number;   // e.g. 12.0
  seniorLpa: number; // e.g. 28.0
  currency: string;
}

export interface CareerRecommendation {
  id: string;
  title: string;
  category: string;
  matchScore: number; // 0 - 100
  iconName: string;
  tagline: string;
  whyRecommended: string[];
  requiredSkills: string[];
  futureDemandScore: number; // 0 - 100
  growthRatePercent: number; // e.g. +24% by 2030
  salary: SalaryInsight;
  educationPath: {
    stage: string;
    duration: string;
    requirement: string;
    exams: string[];
  }[];
  jkOpportunityOutlook: string;
  nationalGlobalOutlook: string;
  topRecruiters: string[];
  suggestedStreams: string[];
}

export interface College {
  id: string;
  name: string;
  shortName: string;
  type: "Government" | "Autonomous / IIT / NIT" | "Central University" | "State University" | "Private";
  state: "Jammu & Kashmir" | "Delhi NCR" | "Punjab" | "Chandigarh" | "Other";
  district: string;
  establishedYear: number;
  naacGrade: "A++" | "A+" | "A" | "B++" | "B+" | "B" | "Not Accredited";
  nirfRank?: number;
  tuitionFeeRangePerYear: string;
  averagePackageLpa: number;
  highestPackageLpa: number;
  pmsssApproved: boolean;
  pmsssSeatsCount?: number;
  coursesOffered: {
    courseName: string;
    degree: string;
    duration: string;
    intake: number;
    approxCutoff: string;
  }[];
  campusCity: string;
  facilities: string[];
  websiteUrl: string;
  contactEmail: string;
  admissionMode: string;
}

export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  categoryType: "JK_Special" | "National" | "Merit_Need" | "Girls_Special" | "Minority_Reserved";
  maxBenefitAmount: number; // INR
  benefitDescription: string;
  eligibilityCriteria: {
    maxFamilyIncome?: number;
    minMarksPercentage?: number;
    applicableGenders?: ("male" | "female" | "other")[];
    applicableCategories?: string[];
    domicileRequirement: boolean;
    courseLevels: string[];
  };
  applicationDeadline: string;
  status: "Open" | "Opening Soon" | "Closed";
  applicationUrl: string;
  documentsRequired: string[];
  selectionProcess: string;
  pmsssQuotaInfo?: string;
}

export interface SkillGapItem {
  skillName: string;
  category: "Technical" | "Soft Skill" | "Domain Knowledge" | "Tool / Software";
  importanceLevel: "Critical" | "High" | "Moderate";
  currentProficiency: number; // 0 - 100
  targetProficiency: number;  // 0 - 100
  gapScore: number;          // target - current
  recommendedCourses: {
    courseId: string;
    title: string;
    platform: "SWAYAM" | "NPTEL" | "JKEDI" | "Coursera" | "NSDC" | "edX";
    durationHours: string;
    isFree: boolean;
    certificateAvailable: boolean;
    url: string;
  }[];
}

export interface RoadmapMilestone {
  id: string;
  stageName: string;
  stageSubtitle: string;
  targetTimeline: string;
  status: "completed" | "in_progress" | "upcoming";
  keyActions: string[];
  recommendedExams: string[];
  scholarshipReminders: string[];
  expectedOutcome: string;
}

export interface DistrictOpportunityData {
  id: string;
  name: string;
  division: "Kashmir" | "Jammu";
  opportunityScore: number; // 0 - 100
  collegeCount: number;
  polytechnicCount: number;
  skillCentersCount: number;
  keyIndustries: string[];
  topEmergingRoles: string[];
  activeScholarshipBeneficiaries: number;
  unemploymentRateIndex: string;
  prominentInstitutions: string[];
  missionYouthCenters: number;
  hqCoordinates: { lat: number; lng: number };
  shortDescription: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "assistant" | "system";
  text: string;
  timestamp: string;
  suggestedFollowUps?: string[];
  relatedActionUrl?: string;
  relatedActionText?: string;
}

export interface AgentStatus {
  id: string;
  name: string;
  role: string;
  status: "idle" | "running" | "healthy" | "completed";
  latencyMs: number;
  lastExecutedAt: string;
  accuracyMetric: string;
}
