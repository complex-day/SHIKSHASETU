export interface SkillCourse {
  id: string;
  title: string;
  category: "Technical" | "Soft Skill" | "Domain Knowledge" | "Tool / Software";
  platform: "SWAYAM" | "NPTEL" | "JKEDI" | "Coursera" | "NSDC" | "edX";
  skillsTaught: string[];
  durationHours: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  isFree: boolean;
  certificateAvailable: boolean;
  providerOrg: string;
  enrollmentUrl: string;
  rating: number;
}

export const COURSES_DATABASE: SkillCourse[] = [
  {
    id: "c1",
    title: "Python for Data Science and AI Foundations",
    category: "Technical",
    platform: "NPTEL",
    skillsTaught: ["Python", "Pandas", "NumPy", "Data Structures", "Statistical Analysis"],
    durationHours: "40 Hours (8 Weeks)",
    level: "Beginner",
    isFree: true,
    certificateAvailable: true,
    providerOrg: "IIT Madras / AICTE",
    enrollmentUrl: "https://onlinecourses.nptel.ac.in",
    rating: 4.8
  },
  {
    id: "c2",
    title: "Machine Learning with PyTorch and Scikit-Learn",
    category: "Technical",
    platform: "SWAYAM",
    skillsTaught: ["PyTorch", "Machine Learning Algorithms", "Model Evaluation", "Neural Networks"],
    durationHours: "60 Hours (12 Weeks)",
    level: "Intermediate",
    isFree: true,
    certificateAvailable: true,
    providerOrg: "IIT Kharagpur",
    enrollmentUrl: "https://swayam.gov.in",
    rating: 4.9
  },
  {
    id: "c3",
    title: "Full Stack Web Development (React & Node.js)",
    category: "Technical",
    platform: "NSDC",
    skillsTaught: ["TypeScript", "React", "Node.js", "REST APIs", "PostgreSQL"],
    durationHours: "75 Hours (10 Weeks)",
    level: "Intermediate",
    isFree: true,
    certificateAvailable: true,
    providerOrg: "National Skill Development Corporation",
    enrollmentUrl: "https://nsdcindia.org",
    rating: 4.7
  },
  {
    id: "c4",
    title: "Agri-Entrepreneurship & Saffron/Apple Value Addition",
    category: "Domain Knowledge",
    platform: "JKEDI",
    skillsTaught: ["Cold Chain Logistics", "High Density Orchard Tech", "Export Compliance", "Agri-Marketing"],
    durationHours: "30 Hours (4 Weeks)",
    level: "Beginner",
    isFree: true,
    certificateAvailable: true,
    providerOrg: "Jammu & Kashmir Entrepreneurship Development Institute",
    enrollmentUrl: "https://jkedi.org",
    rating: 4.9
  },
  {
    id: "c5",
    title: "Cyber Security Fundamentals & Network Defense",
    category: "Technical",
    platform: "SWAYAM",
    skillsTaught: ["Network Security", "Penetration Testing", "Cryptography", "Incident Response"],
    durationHours: "45 Hours (8 Weeks)",
    level: "Beginner",
    isFree: true,
    certificateAvailable: true,
    providerOrg: "IIT Kanpur",
    enrollmentUrl: "https://swayam.gov.in",
    rating: 4.8
  },
  {
    id: "c6",
    title: "Executive Communication & Public Leadership",
    category: "Soft Skill",
    platform: "NPTEL",
    skillsTaught: ["Public Speaking", "Negotiation", "Crisis Communication", "Team Leadership"],
    durationHours: "25 Hours (4 Weeks)",
    level: "Intermediate",
    isFree: true,
    certificateAvailable: true,
    providerOrg: "IIT Roorkee",
    enrollmentUrl: "https://nptel.ac.in",
    rating: 4.7
  },
  {
    id: "c7",
    title: "Cloud Computing & AWS Architecture",
    category: "Tool / Software",
    platform: "Coursera",
    skillsTaught: ["AWS Solutions", "Docker", "Kubernetes", "Microservices"],
    durationHours: "50 Hours (6 Weeks)",
    level: "Intermediate",
    isFree: false,
    certificateAvailable: true,
    providerOrg: "Amazon Web Services (Financial Aid Available)",
    enrollmentUrl: "https://coursera.org",
    rating: 4.9
  },
  {
    id: "c8",
    title: "Structural Engineering & Mountain Tunnel Design",
    category: "Domain Knowledge",
    platform: "NPTEL",
    skillsTaught: ["Structural Analysis", "AutoCAD", "Revit", "Tunnel Engineering", "Geotechnical Mechanics"],
    durationHours: "55 Hours (12 Weeks)",
    level: "Advanced",
    isFree: true,
    certificateAvailable: true,
    providerOrg: "IIT Delhi",
    enrollmentUrl: "https://nptel.ac.in",
    rating: 4.8
  }
];
