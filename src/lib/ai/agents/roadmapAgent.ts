import { CareerRecommendation, RoadmapMilestone, StudentProfile } from "@/types";

export function runRoadmapAgent(
  profile: Partial<StudentProfile>,
  career: CareerRecommendation
): RoadmapMilestone[] {
  const isClass10 = profile.currentEducationLevel === "class_10";
  const isClass12 = profile.currentEducationLevel === "class_12" || profile.currentEducationLevel === "class_11";
  const isUndergrad = profile.currentEducationLevel === "undergraduate" || profile.currentEducationLevel === "diploma";

  const milestones: RoadmapMilestone[] = [
    {
      id: "m1",
      stageName: "Stage 1: Secondary Foundations (Class 10)",
      stageSubtitle: "Build core numerical and scientific literacy with 75%+ score",
      targetTimeline: "Year 1 - Class 10",
      status: isClass10 ? "in_progress" : "completed",
      keyActions: [
        "Focus on Mathematics, Science, and English to secure high merit.",
        "Engage in school science exhibitions and state talent search exams (NTSE).",
        "Select the optimal +2 stream (PCM / PCB / Commerce / Arts) tailored for this career."
      ],
      recommendedExams: ["JKBOSE / CBSE Class 10 Board", "National Talent Search Exam (NTSE)"],
      scholarshipReminders: ["Check National Means-cum-Merit Scholarship (NMMS)"],
      expectedOutcome: "Strong conceptual base and eligibility for premier Higher Secondary institutions."
    },
    {
      id: "m2",
      stageName: "Stage 2: Higher Secondary & Competitive Prep (Class 11-12)",
      stageSubtitle: "Stream specialization and national entrance examination training",
      targetTimeline: "Years 2-3 (Class 11 & 12)",
      status: isClass10 ? "upcoming" : isClass12 ? "in_progress" : "completed",
      keyActions: [
        `Enroll in target stream: ${career.suggestedStreams.join(" / ").toUpperCase()}.`,
        "Register for Mission Youth J&K 'PARVAAZ' scheme for free entrance coaching.",
        "Complete regular mock tests for national and state entrance tests.",
        "Prepare documentation for AICTE PMSSS scholarship application."
      ],
      recommendedExams: career.educationPath[0]?.exams || ["JEE Main", "JKCET", "CUET-UG", "NEET-UG"],
      scholarshipReminders: [
        "AICTE PMSSS (Prime Minister Special Scholarship for J&K)",
        "Mission Youth Parvaaz Coaching Assistance"
      ],
      expectedOutcome: "Top percentile entrance rank and secured admission into an accredited university."
    },
    {
      id: "m3",
      stageName: "Stage 3: Undergraduate Degree & Practical Mastery",
      stageSubtitle: "Formal higher education and hands-on laboratory/project depth",
      targetTimeline: "Years 4-7 (Undergraduate)",
      status: isUndergrad ? "in_progress" : "upcoming",
      keyActions: [
        `Pursue bachelor degree matching ${career.title} (e.g., at NIT Srinagar, IIT Jammu, KU, or PMSSS host institute).`,
        "Maintain consistent academic CGPA (above 8.0/10).",
        "Join university tech societies, coding clubs, research journals, or legal moot courts.",
        "Master industry tools: " + career.requiredSkills.slice(0, 3).join(", ")
      ],
      recommendedExams: ["Semester Exams", "GATE / CAT / CUET-PG", "AIBE / NEXT (if applicable)"],
      scholarshipReminders: [
        "PMSSS ₹1,00,000/year Direct Maintenance Allowance",
        "NSP Post-Matric / AICTE Pragati"
      ],
      expectedOutcome: "Rigorous academic degree with high technical proficiency and capstone portfolio."
    },
    {
      id: "m4",
      stageName: "Stage 4: Industry Certifications & Practical Internships",
      stageSubtitle: "Real-world exposure, apprenticeship, and industry networking",
      targetTimeline: "Pre-Final & Final Year",
      status: "upcoming",
      keyActions: [
        "Secure 2 summer internships (via AICTE Internship Portal or J&K STPI/SIDCO startups).",
        "Obtain recognized certifications from SWAYAM/NPTEL/AWS/Google.",
        "Contribute to open-source software, case studies, or published research papers.",
        "Participate in campus placement mock technical and HR interviews."
      ],
      recommendedExams: ["Industry Credential Exams", "Aptitude Placement Drives"],
      scholarshipReminders: ["Mission Youth Mumkin / Startup Seed Grants"],
      expectedOutcome: "Verified professional portfolio, industry recommendations, and pre-placement offers (PPOs)."
    },
    {
      id: "m5",
      stageName: "Stage 5: High-Growth Placement & Career Elevation",
      stageSubtitle: `Launch career as ${career.title} and scale into senior leadership`,
      targetTimeline: "Post-Graduation + Continuous Growth",
      status: "upcoming",
      keyActions: [
        `Step into entry-level role (${career.salary.currency} ${career.salary.entryLpa} LPA expected).`,
        "Join professional associations (IEEE, Bar Council, Medical Association, CSI).",
        "Pursue ongoing upskilling to transition towards senior leadership.",
        "Mentor aspiring J&K youth via ShikshaSetu alumni networks."
      ],
      recommendedExams: ["Professional Licensure / Executive Certifications"],
      scholarshipReminders: ["Govt Youth Leadership Awards"],
      expectedOutcome: `Thriving lifelong career with ${career.salary.currency} ${career.salary.seniorLpa} LPA growth trajectory.`
    }
  ];

  return milestones;
}
