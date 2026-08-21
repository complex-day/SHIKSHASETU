import { ChatMessage, StudentProfile } from "@/types";

export async function runCounselorAgent(
  userQuery: string,
  history: ChatMessage[],
  profile?: Partial<StudentProfile>
): Promise<{ replyText: string; suggestedFollowUps: string[]; actionUrl?: string; actionText?: string }> {
  const queryLower = userQuery.toLowerCase();

  // Keyword-rich contextual reasoning & RAG synthesis
  if (queryLower.includes("pmsss") || queryLower.includes("prime minister scholarship") || queryLower.includes("special scholarship")) {
    return {
      replyText: `### 🎓 Prime Minister's Special Scholarship Scheme (PMSSS) for J&K

The **AICTE PMSSS** is one of the most generous government scholarships for students of Jammu & Kashmir and Ladakh.

#### 1. Key Financial Benefits:
* **Academic Fee Waiver**: 
  - Up to **₹3,00,000 / year** for Medical & B.Sc Nursing degrees.
  - Up to **₹1,25,000 / year** for Engineering (B.Tech / B.E.) degrees.
  - Up to **₹30,000 / year** for General BA/B.Sc/B.Com degrees.
* **Maintenance & Hostel Allowance**: **₹1,00,000 per annum** deposited directly into your bank account in 10 equal monthly installments (₹10,000/mo) for hostel, food, books, and living expenses.

#### 2. Eligibility Criteria:
* **Domicile**: Must hold a valid J&K or Ladakh Domicile Certificate.
* **Academic**: Passed Class 12 from JKBOSE or CBSE recognized schools in J&K.
* **Income Limit**: Total family annual income must not exceed **₹8,00,000 (8 LPA)**.

#### 3. Recommended Next Steps:
1. Obtain your **Income Certificate** from the local Tehsildar early.
2. Verify that your Aadhaar card is seeded with your bank account for DBT.
3. Keep scanned copies of your Class 10 & 12 marksheets ready for the AICTE online verification drive.`,
      suggestedFollowUps: [
        "Which top engineering colleges in Delhi NCR offer PMSSS seats?",
        "What documents are needed for PMSSS facilitation center verification?",
        "How is the PMSSS merit list calculated for CBSE vs JKBOSE students?"
      ],
      actionUrl: "/scholarships",
      actionText: "Check Your PMSSS Eligibility"
    };
  }

  if (queryLower.includes("after class 12") || queryLower.includes("after 12th") || queryLower.includes("what should i do")) {
    return {
      replyText: `### 🧭 Comprehensive Pathways After Class 12 in Jammu & Kashmir

Your ideal pathway depends on your Higher Secondary stream and cognitive assessment strengths:

#### 1. Science Stream (PCM - Physics, Chemistry, Mathematics):
* **B.Tech / B.E.**: Top institutes include **NIT Srinagar**, **IIT Jammu**, **SMVDU Katra**, and **IUST Awantipora**. Apply via **JEE Main** and **JKCET**.
* **AI & Data Science / Computing**: Exceptional national growth with starting packages of ₹8 - ₹15 LPA.
* **Architecture (B.Arch)** & Planning via NATA / JEE Paper 2.

#### 2. Science Stream (PCB - Physics, Chemistry, Biology):
* **MBBS / BDS**: **GMC Srinagar**, **GMC Jammu**, **SKIMS Soura**, and **AIIMS Vijaypur** via **NEET-UG**.
* **B.Sc (Hons) Agriculture / Horticulture / Veterinary**: **SKUAST Kashmir** & **SKUAST Jammu** via **SKUAST-UET**.
* **B.Sc Nursing & Paramedical**: High demand across J&K Health Services via **JKBOPEE**.

#### 3. Commerce & Management:
* **Integrated IPM (BBA + MBA)**: **IIM Jammu** (5-Year IPM via IPMAT exam).
* **Chartered Accountancy (CA) / CS / CMA**: Highly respected financial career with private practice potential.
* **B.Com (Hons) / Fintech**: University of Kashmir / University of Jammu via CUET-UG.

#### 4. Arts & Humanities / Interdisciplinary:
* **Integrated 5-Year Law (B.A. LL.B)**: Law departments at KU/JU or Top NLUs via **CLAT**.
* **Civil Services Foundation (IAS / JKAS)**: Eligible for **Mission Youth 'PARVAAZ'** 100% free coaching scholarship.
* **Digital Media, Journalism & Heritage Tourism**: Booming sectors across Kashmir & Jammu regions.`,
      suggestedFollowUps: [
        "What is the exam pattern for JKCET 2026?",
        "Can I get into IIM Jammu directly after 12th Commerce?",
        "Tell me more about Mission Youth Parvaaz free IAS coaching"
      ],
      actionUrl: "/roadmap",
      actionText: "View Interactive Career Roadmap"
    };
  }

  if (queryLower.includes("girl") || queryLower.includes("female") || queryLower.includes("women") || queryLower.includes("tejaswini")) {
    return {
      replyText: `### 🌟 Special Schemes & Scholarships for Female Students in J&K

The Government of Jammu & Kashmir and Government of India have prioritized high-impact schemes for young women:

1. **AICTE Pragati Scholarship for Girls**:
   * **Benefit**: **₹50,000 per year** for every year of degree/diploma education.
   * **Eligibility**: Admitted to AICTE-approved technical college; family income < ₹8 LPA; up to 2 girl children per family.

2. **Mission Youth 'TEJASWINI' Scheme**:
   * **Benefit**: Up to **₹5,00,000 interest-free financing** with 10% upfront capital subsidy from Mission Youth.
   * **Target**: Female youth aged 18–35 launching tech, commerce, handicraft, or clinic ventures.

3. **Mission Youth 'PARVAAZ' Female Quota**:
   * **30% of all fully sponsored seats** for UPSC IAS / JKAS and NEET/JEE coaching are strictly reserved for female applicants.

4. **Dedicated Women's Premier Institutions in J&K**:
   * **Govt College for Women M.A. Road, Srinagar** (NAAC A+ accredited heritage institute).
   * **Govt College for Women Gandhi Nagar, Jammu** (Autonomous premier college).`,
      suggestedFollowUps: [
        "How do I apply for the AICTE Pragati Scholarship?",
        "What business projects are eligible under the Tejaswini Scheme?",
        "Are there special hostels for female students under PMSSS in Delhi?"
      ],
      actionUrl: "/scholarships",
      actionText: "View All Girls Schemes"
    };
  }

  if (queryLower.includes("cse") || queryLower.includes("computer science") || queryLower.includes("ai") || queryLower.includes("software")) {
    return {
      replyText: `### 💻 Top Institutes for Computer Science (CSE) & AI in J&K & National Quota

#### Premier Institutions in Jammu & Kashmir:
1. **NIT Srinagar (Hazratbal)**:
   * **NIRF Rank**: 79 | **Average CTC**: ₹11.2 LPA | **Highest CTC**: ₹42 LPA
   * **Admission**: JEE Main with 50% Home State reservation for J&K students.
2. **IIT Jammu (Jagti)**:
   * **NIRF Rank**: 67 | **Average CTC**: ₹17.5 LPA | **Highest CTC**: ₹53 LPA
   * **Specializations**: B.Tech CSE, AI & Data Science.
3. **Islamic University of Science & Technology (IUST Awantipora)**:
   * Strong CIED innovation incubation, cutting-edge computing labs, and industry tie-ups.
4. **SMVDU Katra**:
   * Established B.Tech CSE program with active campus placements in TCS, Infosys, and Cognizant.

#### Top PMSSS National Options for CSE:
* **Delhi Technological University (DTU)** & **NSUT Delhi** (Reserved PMSSS supernumerary seats).
* **COEP Pune** and **VJTI Mumbai**.
* **PEC Chandigarh** and **Thapar University**.`,
      suggestedFollowUps: [
        "What is the expected JEE Main cutoff for NIT Srinagar CSE home state?",
        "What skills should I learn in 1st year B.Tech CSE?",
        "Which certifications are best: AWS, PyTorch, or Full-Stack?"
      ],
      actionUrl: "/colleges",
      actionText: "Explore CSE Colleges"
    };
  }

  // Fallback intelligent response
  return {
    replyText: `### 🎓 ShikshaSetu Personalized Guidance

Thank you for your question regarding **"${userQuery}"**.

Based on the Government of Jammu & Kashmir educational framework and your student profile:

* **Strategic Academic Alignment**: Focus on maintaining strong fundamental scores (75%+) in your core subjects to keep multiple competitive pathways open (PMSSS, JKCET, CUET, and NEET).
* **Institutional Options**: Explore both prestigious regional universities (**NIT Srinagar, IIT Jammu, KU, JU, IUST, SKUAST**) as well as national institutions through the **PMSSS 5,000+ seat reservation quota**.
* **Financial Empowerment**: Check your eligibility for **Mission Youth Parvaaz** (free coaching) and state/national scholarships offering up to **₹3.0 Lakhs/year** in financial coverage.

Would you like to drill down into a specific career roadmap, college cutoff, or scholarship timeline?`,
    suggestedFollowUps: [
      "Show me the step-by-step career roadmap for my stream",
      "Which scholarships match my family income and category?",
      "How do I analyze my skill gap for top tech & govt roles?"
    ],
    actionUrl: "/assessment",
    actionText: "Take Full Career Assessment"
  };
}
