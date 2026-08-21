import { CareerRecommendation } from "@/types";

export const CAREERS_DATABASE: CareerRecommendation[] = [
  {
    id: "ai_ml_engineer",
    title: "Artificial Intelligence & Machine Learning Engineer",
    category: "Technology & Computing",
    matchScore: 96,
    iconName: "BrainCircuit",
    tagline: "Build neural networks, generative AI systems, and automated intelligence models that transform industries.",
    whyRecommended: [
      "High match with your strong Analytical (88%) and Technical (92%) assessment scores.",
      "Thriving demand across India with remote global work potential and expanding tech clusters in Srinagar & Jammu.",
      "Exceptional compensation trajectory with ₹8.5 LPA entry packages and over 35% compound annual market growth."
    ],
    requiredSkills: ["Python", "PyTorch / TensorFlow", "Machine Learning Algorithms", "Data Structures", "Linear Algebra & Statistics", "Prompt Engineering / LLMOps"],
    futureDemandScore: 98,
    growthRatePercent: 38,
    salary: {
      entryLpa: 8.5,
      midLpa: 22.0,
      seniorLpa: 48.0,
      currency: "INR"
    },
    educationPath: [
      {
        stage: "Class 10 & 12",
        duration: "2 Years",
        requirement: "Science Stream with Physics, Chemistry, and Mathematics (PCM) with 75%+ aggregate.",
        exams: ["JEE Main", "JEE Advanced", "JKCET", "BITSAT"]
      },
      {
        stage: "Undergraduate Degree",
        duration: "4 Years",
        requirement: "B.Tech in Computer Science / AI & Data Science (e.g. NIT Srinagar, IIT Jammu, IUST, SMVDU).",
        exams: ["GATE (for M.Tech)", "Campus Placement Rounds"]
      },
      {
        stage: "Certifications & Specializations",
        duration: "6-12 Months",
        requirement: "Deep Learning Specialization, AWS Certified Machine Learning, HuggingFace LLM Engineering.",
        exams: ["Industry Certifications"]
      },
      {
        stage: "Internships & Capstones",
        duration: "6 Months",
        requirement: "Hands-on projects with Kaggle competitions, open-source repositories, and enterprise AI internships.",
        exams: ["Technical Interviews"]
      }
    ],
    jkOpportunityOutlook: "Emerging startup ecosystem at Srinagar STPI, SIDCO IT towers, and academic AI labs at IIT Jammu & NIT Srinagar.",
    nationalGlobalOutlook: "Top tier demand in Bengaluru, Hyderabad, Pune, Gurugram, US, and European multinational innovation labs.",
    topRecruiters: ["Google", "Microsoft", "Amazon", "NVIDIA", "TCS Research", "Infosys AI Lab", "Wipro"],
    suggestedStreams: ["science_pcm"]
  },
  {
    id: "software_architect",
    title: "Full Stack Software Engineer & Cloud Architect",
    category: "Technology & Computing",
    matchScore: 94,
    iconName: "Code2",
    tagline: "Design and implement scalable enterprise web applications, distributed cloud backends, and microservices.",
    whyRecommended: [
      "Directly leverages your technical problem solving, algorithmic thinking, and structural logic.",
      "High flexibility with remote-first international work possibilities allowing students in J&K to work globally.",
      "High qualification compatibility with PMSSS scholarship covering premier B.Tech seats across India."
    ],
    requiredSkills: ["TypeScript / JavaScript", "React / Next.js", "Node.js / Python", "PostgreSQL / Redis", "Docker & Kubernetes", "AWS / Azure Cloud"],
    futureDemandScore: 95,
    growthRatePercent: 28,
    salary: {
      entryLpa: 7.0,
      midLpa: 18.5,
      seniorLpa: 42.0,
      currency: "INR"
    },
    educationPath: [
      {
        stage: "Class 10 & 12",
        duration: "2 Years",
        requirement: "Science Stream (PCM) or Computer Science vocational electives.",
        exams: ["JEE Main", "JKCET", "CUET-UG"]
      },
      {
        stage: "Undergraduate Degree",
        duration: "3-4 Years",
        requirement: "B.Tech / B.E. in CSE / IT or BCA + MCA.",
        exams: ["University Semesters", "NIMCET"]
      },
      {
        stage: "Practical Projects & Open Source",
        duration: "1 Year concurrent",
        requirement: "Building full-stack SaaS apps, contributing to GitHub open-source, and cloud deployment.",
        exams: ["AWS Solutions Architect Exam"]
      }
    ],
    jkOpportunityOutlook: "Rapid digitisation of J&K Government services (e-Unnat, Janbhagidari) and private software consulting agencies.",
    nationalGlobalOutlook: "Dominant technology recruitment pillar across all major IT hubs in India and remote overseas contracts.",
    topRecruiters: ["Adobe", "Oracle", "Zoho", "Atlassian", "Persistent Systems", "Cognizant"],
    suggestedStreams: ["science_pcm", "vocational"]
  },
  {
    id: "data_scientist",
    title: "Data Scientist & Predictive Modeler",
    category: "Analytics & Mathematics",
    matchScore: 91,
    iconName: "LineChart",
    tagline: "Extract high-value business insights, statistical correlations, and predictive intelligence from massive datasets.",
    whyRecommended: [
      "Aligns strongly with high Analytical and Logical scores in your profile.",
      "Critical for modern industries: Finance, Healthcare, E-Commerce, Logistics, and Governance.",
      "Offers high starting salaries and cross-disciplinary migration flexibility."
    ],
    requiredSkills: ["Python / R", "SQL Database Mastery", "Pandas / NumPy / Scikit-Learn", "Tableau / PowerBI", "Statistical Inference", "Machine Learning"],
    futureDemandScore: 92,
    growthRatePercent: 31,
    salary: {
      entryLpa: 7.5,
      midLpa: 19.0,
      seniorLpa: 38.0,
      currency: "INR"
    },
    educationPath: [
      {
        stage: "Class 12",
        duration: "2 Years",
        requirement: "Mathematics or Statistics as a core subject (PCM or Commerce with Maths).",
        exams: ["CUET-UG", "JEE Main", "ISI Admission Test"]
      },
      {
        stage: "Undergraduate Degree",
        duration: "3-4 Years",
        requirement: "B.Sc Statistics / Data Science or B.Tech CSE / Mathematics & Computing (IIT Jammu, Univ of Kashmir).",
        exams: ["JAM", "GATE"]
      }
    ],
    jkOpportunityOutlook: "Government analytics departments, banking institutions (J&K Bank), healthcare research, and horticulture logistics.",
    nationalGlobalOutlook: "Exponential demand across FinTech, E-Commerce, BioTech, and Big Data consulting firms worldwide.",
    topRecruiters: ["Mu Sigma", "Fractal Analytics", "JPMorgan Chase", "Flipkart", "Accenture AI", "American Express"],
    suggestedStreams: ["science_pcm", "commerce"]
  },
  {
    id: "cybersecurity_analyst",
    title: "Cybersecurity Analyst & Ethical Hacker",
    category: "Security & Infrastructure",
    matchScore: 89,
    iconName: "ShieldCheck",
    tagline: "Defend critical national digital infrastructure, enterprise systems, and networks from cyber threats and zero-day exploits.",
    whyRecommended: [
      "Combines technical depth with analytical investigation and rapid strategic thinking.",
      "Designated as a national critical skill sector with substantial government defense and private banking vacancies.",
      "High global demand with severe talent shortages leading to competitive remuneration."
    ],
    requiredSkills: ["Network Security & Protocols", "Penetration Testing (Metasploit, Burp Suite)", "Linux Hardening", "SOC Incident Response", "Cryptography", "SIEM Tools"],
    futureDemandScore: 96,
    growthRatePercent: 33,
    salary: {
      entryLpa: 6.5,
      midLpa: 16.0,
      seniorLpa: 36.0,
      currency: "INR"
    },
    educationPath: [
      {
        stage: "Class 12",
        duration: "2 Years",
        requirement: "Science Stream (PCM) with minimum 60%.",
        exams: ["JEE Main", "JKCET"]
      },
      {
        stage: "Degree & Certifications",
        duration: "4 Years",
        requirement: "B.Tech in CSE / Cyber Security + CompTIA Security+, CEH (Certified Ethical Hacker), OSCP.",
        exams: ["OSCP Exam", "CISSP"]
      }
    ],
    jkOpportunityOutlook: "J&K Cyber Police, Defense IT wings, e-Governance datacenters, and state banking cyber security units.",
    nationalGlobalOutlook: "Global shortage of 3.5 million cybersecurity professionals with lucrative international remote opportunities.",
    topRecruiters: ["Palo Alto Networks", "CrowdStrike", "KPMG Cyber", "CERT-In", "Deloitte Cyber", "Cisco"],
    suggestedStreams: ["science_pcm"]
  },
  {
    id: "medical_officer_specialist",
    title: "Medical Doctor (MBBS) & Specialist Clinician",
    category: "Healthcare & Life Sciences",
    matchScore: 88,
    iconName: "Stethoscope",
    tagline: "Diagnose, treat, and pioneer clinical interventions to safeguard public health and save human lives.",
    whyRecommended: [
      "Superb fit for strong Biology/Life Science preferences and empathetic communication traits.",
      "Respected profession with lifetime stability, government employment avenues, and social impact.",
      "Expanding healthcare ecosystem in J&K with new AIIMS Jammu, AIIMS Kashmir, and 8+ new GMCs."
    ],
    requiredSkills: ["Clinical Diagnostics", "Patient Care & Empathy", "Pharmacology", "Human Anatomy & Physiology", "Emergency Triage", "Medical Ethics"],
    futureDemandScore: 90,
    growthRatePercent: 20,
    salary: {
      entryLpa: 9.0,
      midLpa: 24.0,
      seniorLpa: 55.0,
      currency: "INR"
    },
    educationPath: [
      {
        stage: "Class 12 (PCB)",
        duration: "2 Years",
        requirement: "Physics, Chemistry, and Biology (PCB) with 60%+ aggregate.",
        exams: ["NEET-UG"]
      },
      {
        stage: "MBBS Undergraduate",
        duration: "5.5 Years (incl. Internship)",
        requirement: "MBBS at premier GMC Srinagar, GMC Jammu, SKIMS Soura, GMC Anantnag/Baramulla, or AIIMS Jammu.",
        exams: ["NEXT / NEET-PG"]
      },
      {
        stage: "MD / MS / DNB Specialization",
        duration: "3 Years",
        requirement: "Postgraduate residency in Cardiology, Radiology, Pediatrics, Surgery, or Medicine.",
        exams: ["Board Certifications"]
      }
    ],
    jkOpportunityOutlook: "Tremendous vacancy in J&K Health Services, SKIMS, GMCs across all districts, and emerging private specialty hospitals.",
    nationalGlobalOutlook: "Immense demand across AIIMS, Apollo, Fortis, Max, and international medical licensure (USMLE, PLAB).",
    topRecruiters: ["SKIMS Soura", "Govt Medical Colleges J&K", "Apollo Hospitals", "Max Healthcare", "Medanta", "Armed Forces Medical Services"],
    suggestedStreams: ["science_pcb"]
  },
  {
    id: "civil_infrastructure_engineer",
    title: "Civil & Infrastructure Engineer (Smart Cities & Tunnels)",
    category: "Engineering & Construction",
    matchScore: 85,
    iconName: "HardHat",
    tagline: "Engineer state-of-the-art mountain tunnels, smart highways, mega bridges, and seismic-resilient infrastructure.",
    whyRecommended: [
      "J&K is witnessing historic infrastructure development (USBRL Railway, Z-Morh & Zojila Tunnels, Ring Roads).",
      "High match for students with spatial visualization, physics aptitude, and environmental interest.",
      "Substantial public sector engineering exams (JKSSB JE, JKPSC AE, IES, NHPC, CPWD)."
    ],
    requiredSkills: ["Structural Analysis", "AutoCAD / Revit", "Geotechnical & Soil Mechanics", "Tunnel Engineering", "Project Management (Primavera)", "Surveying & GIS"],
    futureDemandScore: 88,
    growthRatePercent: 22,
    salary: {
      entryLpa: 5.5,
      midLpa: 14.0,
      seniorLpa: 32.0,
      currency: "INR"
    },
    educationPath: [
      {
        stage: "Class 12 (PCM)",
        duration: "2 Years",
        requirement: "Science PCM stream with 60%+.",
        exams: ["JEE Main", "JKCET"]
      },
      {
        stage: "B.Tech Civil Engineering",
        duration: "4 Years",
        requirement: "B.Tech Civil at NIT Srinagar, GCET Jammu, IIT Jammu, or SMVDU Katra.",
        exams: ["GATE (Civil)", "JKSSB JE / JKPSC AE"]
      }
    ],
    jkOpportunityOutlook: "NHIDCL tunnel projects, Border Roads Organisation (BRO), NHPC hydro plants, J&K PWD and Jal Shakti missions.",
    nationalGlobalOutlook: "Mega infrastructure initiatives: PM Gati Shakti, Smart Cities Mission, Middle East infrastructure projects.",
    topRecruiters: ["Larsen & Toubro (L&T)", "NHAI / NHIDCL", "IRCON International", "Afcons Infrastructure", "Tata Projects", "J&K PWD"],
    suggestedStreams: ["science_pcm"]
  },
  {
    id: "agri_tech_horticulture_specialist",
    title: "Agri-Tech & Precision Horticulture Specialist",
    category: "Agriculture & Bio-Economy",
    matchScore: 87,
    iconName: "Sprout",
    tagline: "Revolutionize J&K's multi-billion apple, saffron, and lavender economies with high-density precision farming and bio-tech.",
    whyRecommended: [
      "Direct alignment with J&K's primary economic backbone — Horticulture & the Purple Revolution.",
      "High government grant backing through Mission Youth, HADP (Holistic Agriculture Development Program), and JKEDI.",
      "High entrepreneurial yield with modern CA cold chains, high-density rootstock, and international export."
    ],
    requiredSkills: ["High-Density Orchard Management", "Post-Harvest Cold Chain Tech", "Drip Irrigation Automation", "Soil Microbiology", "Agronomy AI Sensors", "Export Quality Compliance"],
    futureDemandScore: 91,
    growthRatePercent: 26,
    salary: {
      entryLpa: 5.0,
      midLpa: 13.5,
      seniorLpa: 30.0,
      currency: "INR"
    },
    educationPath: [
      {
        stage: "Class 12 (PCB / PCM / Agriculture)",
        duration: "2 Years",
        requirement: "Class 12 with 55%+.",
        exams: ["SKUAST-UET", "ICAR AIEEA"]
      },
      {
        stage: "B.Sc (Hons) Horticulture / Agriculture",
        duration: "4 Years",
        requirement: "B.Sc at SKUAST Kashmir (Shalimar) or SKUAST Jammu (Chatha).",
        exams: ["ICAR PG / SKUAST PG"]
      }
    ],
    jkOpportunityOutlook: "HADP 5,000 Cr project rollout, J&K Horticulture Department, Apple FPOs in Shopian & Sopore, Saffron parks in Pampore.",
    nationalGlobalOutlook: "Huge rise of Agri-Tech startups, hydroponics, organic superfoods export to GCC and European markets.",
    topRecruiters: ["SKUAST Research", "J&K HADP Board", "ITC Agri-Business", "Mahindra Agri Solutions", "Bayer CropScience", "Kashmir CA Storage Hubs"],
    suggestedStreams: ["science_pcb", "science_pcm"]
  },
  {
    id: "civil_services_administrative_officer",
    title: "Civil Services Officer (IAS / IPS / JKAS)",
    category: "Governance, Public Administration & Law",
    matchScore: 86,
    iconName: "Building2",
    tagline: "Drive public governance, socioeconomic development policy, law and order, and public welfare at state and national levels.",
    whyRecommended: [
      "Top choice for students with comprehensive general awareness, leadership, and public service ethos.",
      "Mission Youth J&K provides full Parvaaz scheme funding for free IAS/JKAS coaching for qualified youth.",
      "Highest prestige, decision-making authority, and direct impact on governance and citizen welfare."
    ],
    requiredSkills: ["Policy Analysis", "Public Administration", "Constitutional Law", "Crisis Management", "Leadership & Communication", "Ethics & Integrity"],
    futureDemandScore: 85,
    growthRatePercent: 15,
    salary: {
      entryLpa: 8.0,
      midLpa: 18.0,
      seniorLpa: 30.0,
      currency: "INR"
    },
    educationPath: [
      {
        stage: "Graduation (Any Stream)",
        duration: "3-4 Years",
        requirement: "Bachelor's degree in Arts, Science, Commerce, Engineering, or Law with sound GPA.",
        exams: ["UPSC Civil Services Examination (CSE)", "JKPSC Combined Competitive Examination (CCE)"]
      },
      {
        stage: "Preparation & Training",
        duration: "1-2 Years",
        requirement: "Intensive preparation under Mission Youth Parvaaz scheme followed by LBSNAA or IMPARD training.",
        exams: ["UPSC Prelims, Mains, Interview"]
      }
    ],
    jkOpportunityOutlook: "Appointments across all 20 District Collectorates, J&K Secretariat, Police subdivisions, and Revenue departments.",
    nationalGlobalOutlook: "Central government ministries, international diplomatic postings (IFS), and policy advisory think tanks (NITI Aayog).",
    topRecruiters: ["Government of Jammu & Kashmir", "Government of India (UPSC)", "NITI Aayog", "Ministry of External Affairs"],
    suggestedStreams: ["arts_humanities", "science_pcm", "commerce"]
  },
  {
    id: "renewable_energy_engineer",
    title: "Renewable Energy & Solar/Hydro Technologist",
    category: "Energy & Sustainability",
    matchScore: 84,
    iconName: "Zap",
    tagline: "Design, commission, and optimize mega hydro-power plants, solar microgrids, and lithium energy storage systems.",
    whyRecommended: [
      "J&K has 20,000+ MW hydro-electric potential (Chenab & Jhelum basins) plus 5.9M tonnes of Lithium in Reasi.",
      "Perfect intersection of electrical engineering, sustainability science, and green economy jobs.",
      "Strong support under PM Surya Ghar and state renewable energy policies."
    ],
    requiredSkills: ["Hydro-Turbine Systems", "Solar PV Design (PVsyst)", "Grid Integration & Inverters", "Battery Chemistry & Lithium Storage", "SCADA Automation", "Environmental Impact Assessment"],
    futureDemandScore: 94,
    growthRatePercent: 30,
    salary: {
      entryLpa: 6.0,
      midLpa: 15.5,
      seniorLpa: 34.0,
      currency: "INR"
    },
    educationPath: [
      {
        stage: "Class 12 (PCM)",
        duration: "2 Years",
        requirement: "Science PCM with 60%+.",
        exams: ["JEE Main", "JKCET"]
      },
      {
        stage: "B.Tech in Electrical / Energy Engineering",
        duration: "4 Years",
        requirement: "B.Tech from NIT Srinagar, IIT Jammu, or GCET Jammu.",
        exams: ["GATE (EE/ME)"]
      }
    ],
    jkOpportunityOutlook: "NHPC projects in Kishtwar/Doda, JKSPDC hydro plants, JAKEDA solar grid projects, and Reasi lithium extraction.",
    nationalGlobalOutlook: "Dominant global energy transition: Adani Green, Tata Power, Renew Power, Tesla Energy, and international grids.",
    topRecruiters: ["NHPC Limited", "JKSPDC", "Tata Power Solar", "Suzlon", "Adani Green", "NTPC"],
    suggestedStreams: ["science_pcm"]
  },
  {
    id: "corporate_lawyer_ip_attorney",
    title: "Corporate Lawyer & Intellectual Property Attorney",
    category: "Law & Corporate Governance",
    matchScore: 83,
    iconName: "Scale",
    tagline: "Advise on international trade, cross-border intellectual property, patent protection (GI tags), and high-stakes corporate contracts.",
    whyRecommended: [
      "Ideal for students with analytical debate, legal reasoning, reading comprehension, and persuasive articulation.",
      "Crucial for protecting J&K's geographical indications (GI) like Pashmina, Kani Shawl, Saffron, and Walnut Wood Carving.",
      "Highly lucrative private sector career with paths in corporate litigation, law firms, and judiciary."
    ],
    requiredSkills: ["Contract Law & Drafting", "Intellectual Property Rights (IPR)", "Corporate Mergers & Acquisitions", "Legal Research & Citation", "Negotiation & Arbitration", "Constitutional Law"],
    futureDemandScore: 87,
    growthRatePercent: 18,
    salary: {
      entryLpa: 6.5,
      midLpa: 17.0,
      seniorLpa: 45.0,
      currency: "INR"
    },
    educationPath: [
      {
        stage: "Class 12 (Any Stream)",
        duration: "2 Years",
        requirement: "Pass Class 12 with 50%+ in any stream.",
        exams: ["CLAT (Common Law Admission Test)", "AILET", "CUET-UG"]
      },
      {
        stage: "Integrated B.A. LL.B / B.B.A. LL.B",
        duration: "5 Years",
        requirement: "Graduation from National Law Universities (NLUs), Kashmir University Law Department, or Jammu University Law School.",
        exams: ["Bar Council of India All India Bar Exam (AIBE)"]
      }
    ],
    jkOpportunityOutlook: "J&K High Court (Srinagar & Jammu Benches), district judiciary, corporate legal advisors, and GI registry defense.",
    nationalGlobalOutlook: "Top Tier 1 law firms in Mumbai, Delhi, Bengaluru, and multinational corporate counsel offices.",
    topRecruiters: ["Shardul Amarchand Mangaldas", "AZB & Partners", "Trilegal", "Khaitan & Co", "Corporate Houses", "Judicial Services"],
    suggestedStreams: ["arts_humanities", "commerce", "science_pcm"]
  }
];
