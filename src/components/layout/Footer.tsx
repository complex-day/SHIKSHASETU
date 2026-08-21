import React from "react";
import Link from "next/link";
import { ShieldCheck, Phone, Mail, ExternalLink, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Gov Credentials */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gov-primary flex items-center justify-center text-white font-bold text-sm">
                <Sparkles className="w-4 h-4 text-gov-gold" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                SHIKSHA<span className="text-gov-gold">SETU</span>
              </span>
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Official One-Stop AI-Powered Career & Education Advisory Platform. An initiative of the
              Department of Higher & School Education, Government of Jammu & Kashmir.
            </p>
            <div className="flex items-center gap-2 text-gov-gold text-[11px] font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified State Digital Public Good</span>
            </div>
          </div>

          {/* Col 2: Core Advisory Modules */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Advisory Suite
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <Link href="/assessment" className="hover:text-white transition-colors">
                  5D Psychometric Assessment
                </Link>
              </li>
              <li>
                <Link href="/recommendations" className="hover:text-white transition-colors">
                  AI Career Recommendations
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="hover:text-white transition-colors">
                  J&K Colleges & PMSSS Quota
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="hover:text-white transition-colors">
                  PMSSS & Mission Youth Schemes
                </Link>
              </li>
              <li>
                <Link href="/skill-gap" className="hover:text-white transition-colors">
                  Skill Gap & Free SWAYAM Courses
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-white transition-colors">
                  Multi-Stage Career Timeline
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Government Portals & Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              State & National Portals
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li>
                <a
                  href="https://jkhighereducation.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>J&K Higher Education Dept</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://aicte-jk-scholarship-gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>AICTE PMSSS Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://missionyouth.jk.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Mission Youth J&K (Parvaaz)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://jkbopee.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>JKBOPEE Entrance Board</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://scholarships.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>National Scholarship Portal (NSP)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Helplines & Contact */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Support & Facilitation
            </h4>
            <div className="space-y-2.5 text-[11px]">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-gov-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Student Helpline (Toll-Free):</span>
                  <p className="text-slate-300">1800-180-7171 / 0194-2452097</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-gov-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Support Email:</span>
                  <p className="text-slate-300">helpdesk@shikshasetu.jk.gov.in</p>
                </div>
              </div>
              <p className="text-[10px] text-slate-500 pt-2 border-t border-slate-800">
                Civil Secretariat, Srinagar (May–Oct) & Civil Secretariat, Jammu (Nov–Apr)
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-[10px] text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2026 Government of Jammu & Kashmir. All Rights Reserved.</p>
          <p>Built with Next.js 15, TypeScript & Multi-Agent Agentic AI Architecture.</p>
        </div>
      </div>
    </footer>
  );
};
