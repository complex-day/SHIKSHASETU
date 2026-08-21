import { Scholarship } from "@/types";

export const SCHOLARSHIPS_DATABASE: Scholarship[] = [
  {
    id: "pmsss_jk_2026",
    title: "Prime Minister's Special Scholarship Scheme (PMSSS) for J&K & Ladakh",
    provider: "AICTE & Ministry of Education, Government of India",
    categoryType: "JK_Special",
    maxBenefitAmount: 300000,
    benefitDescription: "Full tuition fee waiver (up to ₹3.0 Lakhs/yr for Medical, ₹1.25 Lakhs/yr for Engineering, ₹30,000 for General Degree) PLUS ₹1,00,000 per year maintenance allowance directly to student account in 10 equal installments.",
    eligibilityCriteria: {
      maxFamilyIncome: 800000, // ₹8.0 LPA
      minMarksPercentage: 60,
      applicableGenders: ["male", "female", "other"],
      applicableCategories: ["OM", "RBA", "SC", "ST", "ALC/IB", "EWS", "PSP", "OSC"],
      domicileRequirement: true,
      courseLevels: ["class_12", "diploma"]
    },
    applicationDeadline: "2026-06-30",
    status: "Open",
    applicationUrl: "https://aicte-jk-scholarship-gov.in",
    documentsRequired: [
      "Domicile Certificate of J&K / Ladakh",
      "Class 12 Marks Card (JKBOSE or CBSE)",
      "Income Certificate issued by Tehsildar (below ₹8 LPA)",
      "Category / Caste Certificate (if applicable)",
      "Aadhaar Card linked to Bank Account"
    ],
    selectionProcess: "Online merit list prepared on basis of Class 12 Marks followed by online AICTE seat counseling for 5,000+ reserved supernumerary seats in premier institutes across India.",
    pmsssQuotaInfo: "5,000 total seats across Engineering (2,830), Medical/B.Sc Nursing (100), and General Degrees (2,070)."
  },
  {
    id: "mission_youth_parvaaz",
    title: "Mission Youth J&K 'PARVAAZ' Free Coaching Scheme",
    provider: "Mission Youth, Government of Jammu & Kashmir",
    categoryType: "JK_Special",
    maxBenefitAmount: 150000,
    benefitDescription: "100% financial assistance for top-tier coaching for UPSC Civil Services, JKPSC CCE, NEET-UG, and JEE Main/Advanced through empanelled national coaching institutes.",
    eligibilityCriteria: {
      maxFamilyIncome: 800000,
      minMarksPercentage: 55,
      applicableGenders: ["male", "female", "other"],
      domicileRequirement: true,
      courseLevels: ["class_12", "undergraduate", "graduate"]
    },
    applicationDeadline: "2026-05-15",
    status: "Open",
    applicationUrl: "https://missionyouth.jk.gov.in/parvaaz",
    documentsRequired: [
      "Domicile Certificate",
      "Graduation / 12th Certificate",
      "Valid Income Certificate",
      "Passport Size Photographs",
      "Parvaaz Qualifying Test (PQT) Score Card"
    ],
    selectionProcess: "Special PARVAAZ Qualifying Test (PQT) conducted across Jammu and Srinagar test centers. Top meritorious candidates receive full sponsorship.",
    pmsssQuotaInfo: "30% seats strictly reserved for female candidates across all coaching streams."
  },
  {
    id: "mission_youth_tejaswini",
    title: "Mission Youth 'TEJASWINI' Women Livelihood Scheme",
    provider: "Mission Youth & J&K Bank",
    categoryType: "Girls_Special",
    maxBenefitAmount: 500000,
    benefitDescription: "Interest-free financial assistance up to ₹5,00,000 for young female entrepreneurs (aged 18-35) with 10% upfront subsidy from Mission Youth + zero collateral bank loan.",
    eligibilityCriteria: {
      minMarksPercentage: 50,
      applicableGenders: ["female"],
      domicileRequirement: true,
      courseLevels: ["class_10", "class_12", "diploma", "undergraduate", "graduate"]
    },
    applicationDeadline: "2026-08-31",
    status: "Open",
    applicationUrl: "https://missionyouth.jk.gov.in/tejaswini",
    documentsRequired: [
      "Proof of Age (18-35 years)",
      "J&K Domicile Certificate",
      "Detailed Project Report (DPR) of enterprise",
      "Educational qualification certificates",
      "No-Objection Certificate (NOC)"
    ],
    selectionProcess: "District Level Task Force Committee (DLTFC) interview and project feasibility appraisal.",
    pmsssQuotaInfo: "Special focus on tech startups, boutique handicraft ventures, cafes, and healthcare clinics."
  },
  {
    id: "aicte_pragati_girls",
    title: "AICTE PRAGATI Scholarship for Girl Students in Technical Education",
    provider: "All India Council for Technical Education (AICTE)",
    categoryType: "Girls_Special",
    maxBenefitAmount: 50000,
    benefitDescription: "₹50,000 per annum for every year of study towards college fee payment, computer purchase, books, software, and equipment.",
    eligibilityCriteria: {
      maxFamilyIncome: 800000,
      applicableGenders: ["female"],
      domicileRequirement: false,
      courseLevels: ["class_12", "diploma", "undergraduate"]
    },
    applicationDeadline: "2026-10-31",
    status: "Opening Soon",
    applicationUrl: "https://scholarships.gov.in",
    documentsRequired: [
      "Class 10 and 12 Marksheets",
      "Admission Letter from AICTE approved Degree/Diploma college",
      "Income Certificate",
      "Family Declaration Certificate (Max 2 girls per family)",
      "Bank Account details (DBT enabled)"
    ],
    selectionProcess: "Merit in qualifying exam (Class 12 / Polytechnic Diploma) for girls admitted into AICTE technical programs."
  },
  {
    id: "nsp_post_matric_sc_st",
    title: "NSP Post-Matric Scholarship Scheme for SC & ST Students",
    provider: "Ministry of Social Justice & Empowerment / Ministry of Tribal Affairs",
    categoryType: "Minority_Reserved",
    maxBenefitAmount: 75000,
    benefitDescription: "Complete non-refundable compulsory fees reimbursement plus maintenance allowance up to ₹1,200 per month for hostellers.",
    eligibilityCriteria: {
      maxFamilyIncome: 250000,
      minMarksPercentage: 50,
      applicableCategories: ["SC", "ST"],
      domicileRequirement: true,
      courseLevels: ["class_11", "class_12", "diploma", "undergraduate", "graduate"]
    },
    applicationDeadline: "2026-11-15",
    status: "Opening Soon",
    applicationUrl: "https://scholarships.gov.in",
    documentsRequired: [
      "Caste / Tribe Certificate issued by Competent Authority",
      "Income Certificate (below ₹2.5 LPA)",
      "Fee Receipt of current academic session",
      "Previous year marksheet"
    ],
    selectionProcess: "Direct Benefit Transfer (DBT) verification via National Scholarship Portal."
  },
  {
    id: "central_sector_csss",
    title: "Central Sector Scheme of Scholarship for College & University Students",
    provider: "Department of Higher Education, Ministry of Education, GoI",
    categoryType: "Merit_Need",
    maxBenefitAmount: 20000,
    benefitDescription: "₹12,000 per annum for Graduation years and ₹20,000 per annum for Post-Graduation years for high merit scorers.",
    eligibilityCriteria: {
      maxFamilyIncome: 450000,
      minMarksPercentage: 80,
      domicileRequirement: false,
      courseLevels: ["class_12", "undergraduate"]
    },
    applicationDeadline: "2026-09-30",
    status: "Opening Soon",
    applicationUrl: "https://scholarships.gov.in",
    documentsRequired: [
      "Class 12 Marksheet showing Top 20th percentile rank",
      "Income Certificate",
      "College Enrollment Verification Slip",
      "Bank Passbook copy"
    ],
    selectionProcess: "Top 20th percentile rank in respective Board (JKBOSE / CBSE) in Class 12."
  }
];
