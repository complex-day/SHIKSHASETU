import { Scholarship, StudentProfile } from "@/types";
import { SCHOLARSHIPS_DATABASE } from "@/lib/data/scholarshipsData";

export interface ScholarshipMatchResult {
  scholarship: Scholarship;
  isEligible: boolean;
  matchScore: number;
  eligibilityReasons: string[];
  ineligibilityReasons: string[];
  estimatedAnnualSavingsINR: number;
}

export function runScholarshipAgent(profile: Partial<StudentProfile>): ScholarshipMatchResult[] {
  return SCHOLARSHIPS_DATABASE.map((sch) => {
    let eligible = true;
    const matchReasons: string[] = [];
    const ineligibility: string[] = [];
    let matchScore = 80;

    const criteria = sch.eligibilityCriteria;

    // 1. Income Check
    if (criteria.maxFamilyIncome && profile.familyAnnualIncome) {
      if (profile.familyAnnualIncome <= criteria.maxFamilyIncome) {
        matchReasons.push(`Income ₹${(profile.familyAnnualIncome / 100000).toFixed(1)}L is well within the ceiling of ₹${(criteria.maxFamilyIncome / 100000).toFixed(1)}L`);
        matchScore += 10;
      } else {
        eligible = false;
        ineligibility.push(`Annual family income exceeds the eligibility ceiling of ₹${(criteria.maxFamilyIncome / 100000).toFixed(1)}L`);
      }
    }

    // 2. Gender Check
    if (criteria.applicableGenders && profile.gender) {
      const userGender = profile.gender as "male" | "female" | "other";
      if (criteria.applicableGenders.includes(userGender)) {
        matchReasons.push(`Eligible for designated gender category (${profile.gender})`);
        if (profile.gender === "female" && sch.categoryType === "Girls_Special") {
          matchScore += 15;
          matchReasons.push("Special priority girl student empowerment scheme");
        }
      } else {
        eligible = false;
        ineligibility.push("Exclusive to designated gender categories");
      }
    }

    // 3. Category Check
    if (criteria.applicableCategories && profile.category) {
      if (criteria.applicableCategories.includes(profile.category)) {
        matchReasons.push(`Eligible under category: ${profile.category}`);
        matchScore += 8;
      } else {
        eligible = false;
        ineligibility.push(`Restricted to ${criteria.applicableCategories.join(", ")} categories`);
      }
    }

    // 4. Marks Percentage Check
    const marks = profile.class12Percentage || profile.class10Percentage || 75;
    if (criteria.minMarksPercentage) {
      if (marks >= criteria.minMarksPercentage) {
        matchReasons.push(`Academic score (${marks}%) meets minimum cutoff (${criteria.minMarksPercentage}%)`);
        matchScore += 6;
      } else {
        eligible = false;
        ineligibility.push(`Requires minimum ${criteria.minMarksPercentage}% in qualifying exam`);
      }
    }

    // 5. J&K Domicile
    if (criteria.domicileRequirement) {
      matchReasons.push("Valid for Jammu & Kashmir domicile students");
    }

    const estimatedAnnualSavingsINR = eligible ? sch.maxBenefitAmount : 0;
    const finalScore = eligible ? Math.min(matchScore, 99) : 30;

    return {
      scholarship: sch,
      isEligible: eligible,
      matchScore: finalScore,
      eligibilityReasons: matchReasons,
      ineligibilityReasons: ineligibility,
      estimatedAnnualSavingsINR,
    };
  }).sort((a, b) => b.matchScore - a.matchScore);
}
