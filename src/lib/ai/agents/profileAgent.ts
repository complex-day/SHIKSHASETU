import { StudentProfile } from "@/types";

export interface ProfileAnalysisResult {
  readinessScore: number;
  strengths: string[];
  weaknesses: string[];
  personaBadge: string;
  personaDescription: string;
  recommendedFocusAreas: string[];
}

export function runProfileAgent(profile: Partial<StudentProfile>): ProfileAnalysisResult {
  let score = 50;
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  // Academic factor
  if (profile.class10Percentage && profile.class10Percentage > 85) {
    score += 12;
    strengths.push("High Academic Consistency (Class 10 Distinction)");
  } else if (profile.class10Percentage && profile.class10Percentage > 70) {
    score += 8;
    strengths.push("Solid Academic Foundation");
  } else {
    weaknesses.push("Need to strengthen core academic fundamentals");
  }

  if (profile.class12Percentage && profile.class12Percentage > 85) {
    score += 15;
    strengths.push("Exceptional Higher Secondary Performance");
  } else if (profile.class12Percentage && profile.class12Percentage > 70) {
    score += 10;
    strengths.push("Good Higher Secondary Standing");
  }

  // Skills factor
  const currentSkillsCount = profile.currentSkills?.length || 0;
  if (currentSkillsCount >= 4) {
    score += 14;
    strengths.push("Diverse Technical & Practical Skill Arsenal");
  } else if (currentSkillsCount >= 2) {
    score += 8;
    strengths.push("Basic Skill Toolkit Established");
  } else {
    weaknesses.push("Limited practical skills documented; recommended skill gap certification");
  }

  // Aspirations & clarity
  if (profile.careerAspirations && profile.careerAspirations.length > 0) {
    score += 10;
    strengths.push("Clear Target Career Ambition");
  } else {
    weaknesses.push("Career goals unfinalized; explore assessment modules");
  }

  // Interests and subjects
  if (profile.preferredSubjects && profile.preferredSubjects.length >= 3) {
    score += 9;
    strengths.push("Broad Academic Subject Curiosity");
  }

  // Cap score 10-98
  const finalScore = Math.min(Math.max(score, 35), 98);

  // Derive Persona
  let personaBadge = "Aspiring Pioneer";
  let personaDescription = "A dedicated student actively building foundational knowledge and exploring emerging career pathways.";

  const hasTech = profile.preferredSubjects?.some(s => ["Computer Science", "Mathematics", "Physics", "Information Technology"].includes(s)) ||
    profile.currentSkills?.some(s => ["Python", "Coding", "Web Development", "Data Analysis"].includes(s));
  const hasBio = profile.preferredSubjects?.some(s => ["Biology", "Chemistry", "Biotechnology"].includes(s));
  const hasCommerce = profile.preferredSubjects?.some(s => ["Economics", "Accountancy", "Business Studies"].includes(s));
  const hasHumanities = profile.preferredSubjects?.some(s => ["Political Science", "History", "Sociology", "Psychology"].includes(s));

  if (hasTech && finalScore >= 80) {
    personaBadge = "Analytical Tech Innovator";
    personaDescription = "High analytical acuity combined with modern computational thinking, ideal for AI, software engineering, and advanced research.";
  } else if (hasBio && finalScore >= 75) {
    personaBadge = "Empathetic Healthcare Pioneer";
    personaDescription = "Strong aptitude for life sciences, clinical diagnosis, and high social impact community healthcare.";
  } else if (hasCommerce && finalScore >= 75) {
    personaBadge = "Strategic Enterprise Builder";
    personaDescription = "Driven by financial acumen, market dynamics, quantitative strategy, and executive leadership.";
  } else if (hasHumanities && finalScore >= 75) {
    personaBadge = "Policy & Governance Leader";
    personaDescription = "Exceptional civic awareness, ethical judgment, and communication skills primed for Civil Services (JKAS/IAS) and Corporate Law.";
  } else if (hasTech) {
    personaBadge = "Digital Craftsman";
    personaDescription = "Practical hands-on technologist eager to master applied digital tools, engineering systems, and creative solutions.";
  }

  const recommendedFocusAreas = [
    "Complete the 5-dimension psychometric career assessment",
    "Explore PMSSS scholarship opportunities for J&K domicile holders",
    "Enroll in free SWAYAM/NPTEL foundational skill courses",
    "Review district-specific opportunity clusters in J&K"
  ];

  return {
    readinessScore: finalScore,
    strengths,
    weaknesses,
    personaBadge,
    personaDescription,
    recommendedFocusAreas
  };
}
