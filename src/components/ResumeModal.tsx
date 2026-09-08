import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  Download,
  Mail,
  Phone,
  Globe,
  GraduationCap,
  Briefcase,
  Award,
  Cpu,
  Languages,
  UserCheck
} from 'lucide-react';
import { personalInfo, educationData, experienceData, certificationsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-10"
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs font-bold">
              OFFICIAL CV DOCUMENT
            </span>
            <span className="text-xs text-slate-400">Verified Credentials</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Paper Container */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 sm:p-8 text-slate-200">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-slate-800">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {personalInfo.name}
              </h1>
              <p className="text-base font-semibold text-blue-400 mt-0.5">
                {personalInfo.title}
              </p>
            </div>

            <div className="text-xs sm:text-sm font-mono space-y-1 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalInfo.website}</span>
              </div>
            </div>
          </div>

          {/* 2-Column CV Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            
            {/* Left 7 Cols: Summary & Work Experience */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Summary */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white font-display border-b border-slate-800 pb-1.5 mb-2.5 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                  <span>Summary</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  I am a Computer Science & Engineering student at United International University, currently building a research focused academic career. Alongside my studies, I work remotely as a freelance AI Automation Specialist, delivering social media automation solutions and data-driven ad growth for clients through Fiverr and Upwork.
                </p>
              </div>

              {/* Work Experience */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white font-display border-b border-slate-800 pb-1.5 mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-400" />
                  <span>Work Experience</span>
                </h2>

                <div className="space-y-5">
                  {/* Exp 1 */}
                  <div className="relative pl-3.5 border-l-2 border-blue-500">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold text-white">Senior AI Specialist</h3>
                      <span className="text-[11px] font-mono text-slate-400">August 2026 to Present</span>
                    </div>
                    <p className="text-xs text-blue-400 font-medium">Timmerman Industries (SEO Expert Ltd. / AI Student)</p>
                    <ul className="mt-2 space-y-1 text-xs text-slate-300 list-disc list-inside">
                      <li>Architecting enterprise n8n workflow integrations and autonomous AI agents.</li>
                      <li>Leading technical SEO indexation and programmatic automation systems.</li>
                    </ul>
                  </div>

                  {/* Exp 2 */}
                  <div className="relative pl-3.5 border-l-2 border-emerald-500">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold text-white">Team Leader</h3>
                      <span className="text-[11px] font-mono text-slate-400">June 2018 to December 2025</span>
                    </div>
                    <p className="text-xs text-emerald-400 font-medium">Karmokars</p>
                    <ul className="mt-2 space-y-1 text-xs text-slate-300 list-disc list-inside">
                      <li><strong>Team Management:</strong> Assign tasks, guide team members, and ensure smooth collaboration.</li>
                      <li><strong>Performance Monitoring:</strong> Track progress, solve issues, and ensure tasks are completed on time.</li>
                    </ul>
                  </div>

                  {/* Exp 3 */}
                  <div className="relative pl-3.5 border-l-2 border-indigo-500">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-bold text-white">Sales Agent</h3>
                      <span className="text-[11px] font-mono text-slate-400">June 2017 to December 2018</span>
                    </div>
                    <p className="text-xs text-indigo-400 font-medium">AJIJ Group</p>
                    <ul className="mt-2 space-y-1 text-xs text-slate-300 list-disc list-inside">
                      <li><strong>Lead Generation & Engagement:</strong> Identified potential customers and maintained effective communication.</li>
                      <li><strong>Sales & Target Achievement:</strong> Promoted products/services and achieved sales quotas.</li>
                      <li><strong>Customer Relationship Management:</strong> Addressed customer needs and resolved queries.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white font-display border-b border-slate-800 pb-1.5 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Certifications & Achievements</span>
                </h2>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span><strong>Computer Operation Level 2</strong> — NSDA (Bangladesh)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span><strong>1. AI Workflows & Agent</strong> — Grameenphone Academy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span><strong>Network Smarter With AI</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span><strong>Create Agent & n8n</strong> — Ostad Academy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span><strong>n8n Course: No Code AI Agent Builder</strong> — Simplilearn | Skillup</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right 5 Cols: Education, Skills, Languages */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Education */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white font-display border-b border-slate-800 pb-1.5 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <span>Education</span>
                </h2>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <h3 className="font-bold text-white">United International University</h3>
                    <p className="text-blue-300">BSc in Computer Science & Engineering</p>
                    <span className="text-[11px] font-mono text-emerald-400">Running Student</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <h3 className="font-bold text-white">Sadullapur Govt. College</h3>
                    <p className="text-slate-300">Group: Science (2022 — 2024)</p>
                    <span className="text-[11px] font-mono text-emerald-400">Result: 4.17 / 5.00</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <h3 className="font-bold text-white">Sadullapur Multilateral Pilot High School</h3>
                    <p className="text-slate-300">Group: Science (2016 — 2022)</p>
                    <span className="text-[11px] font-mono text-emerald-400">Result: 4.56 / 5.00</span>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white font-display border-b border-slate-800 pb-1.5 mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>Core Skills</span>
                </h2>

                <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-300">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">• AI Automation in n8n</div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">• Python & Coding</div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">• Problem-Solving</div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">• Time Management</div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">• Presentation Skills</div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">• Client Acquisition</div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">• Networking</div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">• Market Research</div>
                </div>
              </div>

              {/* Language */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white font-display border-b border-slate-800 pb-1.5 mb-3 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-indigo-400" />
                  <span>Languages</span>
                </h2>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Bangla</span>
                    <span className="font-mono text-emerald-400">Native</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>English</span>
                    <span className="font-mono text-blue-300">Fluent / Professional</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Hindi</span>
                    <span className="font-mono text-slate-400">Basic</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
};
