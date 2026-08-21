import { College, StudentProfile } from "@/types";
import { COLLEGES_DATABASE } from "@/lib/data/collegesData";

export interface CollegeMatchResult {
  college: College;
  matchScore: number;
  reasonForMatch: string;
  isLocalJK: boolean;
  isPmsssEligible: boolean;
}

export function runCollegeMatchingAgent(
  profile: Partial<StudentProfile>,
  targetCareerCategory?: string
): CollegeMatchResult[] {
  const results = COLLEGES_DATABASE.map((college) => {
    let matchScore = 75;
    const reasons: string[] = [];

    const isLocalJK = college.state === "Jammu & Kashmir";
    const isPmsssEligible = college.pmsssApproved;

    // District proximity preference
    if (profile.district && college.district.toLowerCase() === profile.district.toLowerCase()) {
      matchScore += 10;
      reasons.push(`Located directly in your home district (${college.district})`);
    } else if (isLocalJK) {
      matchScore += 6;
      reasons.push("Premier State Institution with J&K Home State Quota");
    }

    // PMSSS fit
    if (isPmsssEligible && (!profile.familyAnnualIncome || profile.familyAnnualIncome <= 800000)) {
      matchScore += 8;
      reasons.push("100% Eligible under AICTE PMSSS Full Fee Waiver + ₹1.0L Maintenance Scheme");
    }

    // Career Alignment
    if (targetCareerCategory) {
      if (
        (targetCareerCategory.includes("Technology") && college.coursesOffered.some((c) => c.degree === "B.Tech")) ||
        (targetCareerCategory.includes("Healthcare") && college.coursesOffered.some((c) => c.degree === "MBBS")) ||
        (targetCareerCategory.includes("Agriculture") && college.shortName.includes("SKUAST"))
      ) {
        matchScore += 8;
        reasons.push(`Top ranked curriculum matching ${targetCareerCategory}`);
      }
    }

    // Academic performance fit
    if (profile.class12Percentage && profile.class12Percentage >= 85 && (college.nirfRank || 100) < 50) {
      matchScore += 5;
      reasons.push("High academic tier matching prestigious NIRF ranking");
    }

    const finalScore = Math.min(Math.max(matchScore, 70), 99);

    return {
      college,
      matchScore: finalScore,
      reasonForMatch: reasons.join(" • ") || "Strong overall institutional reputation and placement track record.",
      isLocalJK,
      isPmsssEligible,
    };
  });

  return results.sort((a, b) => b.matchScore - a.matchScore);
}
