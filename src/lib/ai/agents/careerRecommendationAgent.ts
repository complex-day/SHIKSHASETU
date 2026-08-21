import { AssessmentResult, CareerRecommendation, StudentProfile } from "@/types";
import { CAREERS_DATABASE } from "@/lib/data/careersData";

export function runCareerRecommendationAgent(
  profile: Partial<StudentProfile>,
  assessment?: AssessmentResult
): CareerRecommendation[] {
  // Compute match score for each career in database
  const ranked = CAREERS_DATABASE.map((career) => {
    let score = 70; // baseline

    // 1. Check Assessment Dimensions if available
    if (assessment) {
      const analyticalScore = assessment.scores.find((s) => s.dimension === "Analytical")?.score || 70;
      const technicalScore = assessment.scores.find((s) => s.dimension === "Technical")?.score || 70;
      const creativeScore = assessment.scores.find((s) => s.dimension === "Creative")?.score || 70;
      const leadershipScore = assessment.scores.find((s) => s.dimension === "Leadership")?.score || 70;
      const communicationScore = assessment.scores.find((s) => s.dimension === "Communication")?.score || 70;

      if (career.category.includes("Technology") || career.category.includes("Analytics")) {
        score += (analyticalScore * 0.15 + technicalScore * 0.20) - 25;
      } else if (career.category.includes("Healthcare")) {
        score += (analyticalScore * 0.12 + communicationScore * 0.15) - 20;
      } else if (career.category.includes("Engineering")) {
        score += (analyticalScore * 0.15 + technicalScore * 0.15) - 22;
      } else if (career.category.includes("Governance") || career.category.includes("Law")) {
        score += (leadershipScore * 0.15 + communicationScore * 0.20) - 25;
      } else if (career.category.includes("Agriculture")) {
        score += (analyticalScore * 0.10 + technicalScore * 0.10 + leadershipScore * 0.10) - 20;
      }
    }

    // 2. Check Academic Stream Match
    if (profile.currentStream && career.suggestedStreams.includes(profile.currentStream)) {
      score += 8;
    }

    // 3. Check Student Skills Match
    if (profile.currentSkills && profile.currentSkills.length > 0) {
      const matchingSkills = career.requiredSkills.filter((req) =>
        profile.currentSkills?.some((cs) => req.toLowerCase().includes(cs.toLowerCase()) || cs.toLowerCase().includes(req.toLowerCase()))
      );
      score += matchingSkills.length * 3;
    }

    // 4. Check Subject Preferences Match
    if (profile.preferredSubjects && profile.preferredSubjects.length > 0) {
      if (
        (career.category.includes("Technology") && profile.preferredSubjects.includes("Computer Science")) ||
        (career.category.includes("Healthcare") && profile.preferredSubjects.includes("Biology")) ||
        (career.category.includes("Governance") && profile.preferredSubjects.includes("Political Science")) ||
        (career.category.includes("Analytics") && profile.preferredSubjects.includes("Mathematics"))
      ) {
        score += 6;
      }
    }

    // Bound match score between 75 and 99
    const matchScore = Math.min(Math.max(Math.round(score), 74), 99);

    return {
      ...career,
      matchScore,
    };
  });

  // Sort descending by match score and return top 5 recommendations
  ranked.sort((a, b) => b.matchScore - a.matchScore);
  return ranked.slice(0, 5);
}
