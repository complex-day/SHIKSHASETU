# 🏛️ SHIKSHASETU (शिक्षासेतु / شکھشا سیتو)
### *One-Stop Personalized Career & Education Advisor*
**Government of Jammu & Kashmir | Higher & School Education Department**

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🌟 Overview

**SHIKSHASETU** is an enterprise-grade AI advisory platform developed to empower students, parents, counselors, school administrators, and government officials across all 20 districts of Jammu & Kashmir.

It integrates **Multi-Agent Agentic AI** to evaluate student aptitude, match top-tier career trajectories, discover colleges (NIT Srinagar, IIT Jammu, KU, JU, SKUAST, IUST, GMCs), calculate PMSSS scholarship eligibility (up to ₹3.0 Lakhs fee waiver + ₹1.0 Lakh maintenance allowance), diagnose skill gaps, and provide interactive district opportunity heatmaps.

---

## 🚀 Key Modules & Capabilities

1. **Module 1 — Student Profile & Persona Engine**: Comprehensive socioeconomic & academic profiling with real-time Career Readiness Score and persona badge classification.
2. **Module 2 — 5D Psychometric Career Assessment**: Interactive aptitude & personality quiz across 5 dimensions (Analytical, Creative, Technical, Leadership, Communication) rendered as a dynamic Radar Chart.
3. **Module 3 — AI Career Recommendation Engine**: Top 5 ranked career trajectories with match scores, AI rationale, future demand index 2026–2035 (+38%), salary ladders (Entry, Mid, Senior in INR LPA), and J&K local vs national outlooks.
4. **Module 4 — Intelligent College Finder**: Directory of premier J&K institutions + AICTE PMSSS supernumerary colleges across India with cutoffs, NAAC grades, and NIRF rankings.
5. **Module 5 — Smart Scholarship Matcher**: Automated rule engine for AICTE PMSSS, Mission Youth Parvaaz (free IAS/JKAS coaching), Tejaswini, Mumkin, AICTE Pragati/Saksham, and NSP schemes.
6. **Module 6 — Skill Gap Analyzer**: Diagnoses missing competencies for any chosen career and synthesizes curated learning plans with free government courses from SWAYAM, NPTEL, and JKEDI.
7. **Module 7 — Career Roadmap Planner**: 5-stage sequential timeline (Class 10 → Class 12 & Exams → Degree → Certifications → High Growth Job) with persistent milestone checkmarks and printable PDF layout.
8. **Module 8 — AI Career Counselor ("ShikshaMitra")**: Conversational assistant with suggested prompts, text-to-speech voice synthesis, voice mic input, and instant actionable links.
9. **Module 9 — J&K District Opportunity Heatmap**: Interactive 20-district map visualizing Opportunity Indices, college density, Mission Youth hubs, and key industrial growth zones (Lassipora, Ghati, IGC Samba).
10. **Module 10 — Reports & Analytics**: Macro state-wide intelligence with career demand trends, stream enrollment distributions, scholarship fund allocation (₹48 Cr), and exportable CSV dataset.
11. **Module 11 — Multi-Agent Health Monitor**: Live telemetry, latency benchmarks, and accuracy metrics for all 9 AI agents in the orchestrator pipeline.

---

## 👥 5 Stakeholder Roles (Role-Based Access Control)

* **Student View**: Dream career matching, readiness meters, and upcoming exam milestones.
* **Parent View**: Financial safety analysis, projected fee savings (AICTE PMSSS full fee waivers), expected salary ladders, and campus safety ratings.
* **Counselor View**: Diagnostic dossiers with 5D trait alignments and targeted counseling interventions.
* **School Admin View**: Cluster batch metrics (science/commerce/arts stream percentages and PMSSS verification tracking).
* **Govt Admin View**: State-wide district opportunity indices, Mission Youth Parvaaz enrollment stats, and ₹48 Cr scholarship allocation mapping.

---

## 🛠️ Tech Stack

* **Frontend**: Next.js 15 (App Router), TypeScript, TailwindCSS, Framer Motion, Recharts, Lucide Icons, Canvas Confetti.
* **Backend**: FastAPI (Python 3.11+), SQLAlchemy, PostgreSQL, Redis, Pydantic.
* **AI Layer**: Autonomous Multi-Agent Architecture (9 Domain Agents + Master Orchestrator Pipeline).
* **Deployment**: Docker, Docker Compose.

---

## 🏃 Quick Start Guide

### Prerequisites
* Node.js v18+ and npm v9+
* (Optional) Python 3.11+ for FastAPI backend

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/shikshasetu-jk.git
cd shikshasetu-jk
```

### 2. Install Frontend Dependencies & Run
```bash
npm install
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 3. (Optional) Run with Docker Compose
```bash
docker-compose up --build
```

---

## 📜 License
This project is licensed under the MIT License.
Department of Higher & School Education, Government of Jammu & Kashmir.
