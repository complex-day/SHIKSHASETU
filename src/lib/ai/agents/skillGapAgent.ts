import { CareerRecommendation, SkillGapItem, StudentProfile } from "@/types";
import { COURSES_DATABASE } from "@/lib/data/coursesData";

export interface SkillGapAnalysisResult {
  careerTitle: string;
  overallGapScore: number; // 0 - 100
  readinessPercentage: number;
  gapItems: SkillGapItem[];
  learningPlan30_60_90: {
    day30: string[];
    day60: string[];
    day90: string[];
  };
}

export function runSkillGapAgent(
  profile: Partial<StudentProfile>,
  targetCareer: CareerRecommendation
): SkillGapAnalysisResult {
  const studentSkills = (profile.currentSkills || []).map((s) => s.toLowerCase());

  const gapItems: SkillGapItem[] = targetCareer.requiredSkills.map((skillName) => {
    const hasSkillDirect = studentSkills.some((ss) => ss.includes(skillName.toLowerCase()) || skillName.toLowerCase().includes(ss));
    const currentProficiency = hasSkillDirect ? 75 : 20;
    const targetProficiency = 90;
    const gapScore = targetProficiency - currentProficiency;

    // Find matching courses
    const matchingCourses = COURSES_DATABASE.filter((course) =>
      course.skillsTaught.some(
        (st) =>
          st.toLowerCase().includes(skillName.toLowerCase()) ||
          skillName.toLowerCase().includes(st.toLowerCase()) ||
          course.category === "Technical"
      )
    ).slice(0, 2).map((c) => ({
      courseId: c.id,
      title: c.title,
      platform: c.platform,
      durationHours: c.durationHours,
      isFree: c.isFree,
      certificateAvailable: c.certificateAvailable,
      url: c.enrollmentUrl,
    }));

    let category: "Technical" | "Soft Skill" | "Domain Knowledge" | "Tool / Software" = "Technical";
    if (skillName.toLowerCase().includes("communication") || skillName.toLowerCase().includes("leadership")) {
      category = "Soft Skill";
    } else if (skillName.toLowerCase().includes("management") || skillName.toLowerCase().includes("ethics") || skillName.toLowerCase().includes("orchard")) {
      category = "Domain Knowledge";
    } else if (skillName.toLowerCase().includes("docker") || skillName.toLowerCase().includes("aws") || skillName.toLowerCase().includes("autocad")) {
      category = "Tool / Software";
    }

    return {
      skillName,
      category,
      importanceLevel: "Critical",
      currentProficiency,
      targetProficiency,
      gapScore,
      recommendedCourses: matchingCourses.length > 0 ? matchingCourses : [
        {
          courseId: "gen1",
          title: `Mastering ${skillName} Masterclass`,
          platform: "SWAYAM",
          durationHours: "30 Hours",
          isFree: true,
          certificateAvailable: true,
          url: "https://swayam.gov.in",
        }
      ],
    };
  });

  const avgGap = gapItems.reduce((acc, i) => acc + i.gapScore, 0) / (gapItems.length || 1);
  const readinessPercentage = Math.max(100 - Math.round(avgGap), 25);

  const learningPlan30_60_90 = {
    day30: [
      `Complete foundational theory modules for ${targetCareer.requiredSkills.slice(0, 2).join(" & ")} via SWAYAM/NPTEL.`,
      "Dedicate 1.5 hours daily to core conceptual problem solving and syntax fundamentals.",
      "Build a structured Git repository or learning journal to document daily progress."
    ],
    day60: [
      `Implement 2 guided hands-on capstone projects using ${targetCareer.requiredSkills.slice(0, 3).join(", ")}.`,
      "Participate in online mock assessments and peer code reviews or case studies.",
      "Apply for free Government of J&K Mission Youth / JKEDI skill enhancement workshops."
    ],
    day90: [
      `Obtain official certification for ${targetCareer.requiredSkills[0]} through NPTEL / AICTE portal.`,
      "Publish your portfolio on GitHub / LinkedIn and connect with J&K alumni working in top organizations.",
      "Begin applying for virtual internships or summer apprenticeships."
    ]
  };

  return {
    careerTitle: targetCareer.title,
    overallGapScore: Math.round(avgGap),
    readinessPercentage,
    gapItems,
    learningPlan30_60_90,
  };
}
