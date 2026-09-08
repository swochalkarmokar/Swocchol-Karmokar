import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Wrench,
  Sparkles,
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { ExperienceItem } from '../types';
import { TiltCard } from './TiltCard';

export const ExperienceSection: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>WORK EXPERIENCE & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Proven Leadership &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Technical Execution.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            From 7+ years of leading operational teams at Karmokars to architecting enterprise AI workflows at Timmerman Industries.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => (
            <TiltCard
              key={exp.id}
              glowColor={exp.colorAccent === 'emerald' ? 'emerald' : exp.colorAccent === 'indigo' ? 'indigo' : 'blue'}
              onClick={() => setSelectedExp(exp)}
              className="cursor-pointer"
            >
              <div className="p-7 sm:p-8 flex flex-col justify-between h-full group">
                <div>
                  {/* Top Bar with Role & Duration */}
                  <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider block mb-1">
                        {exp.company}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-blue-400 transition-colors">
                        {exp.position}
                      </h3>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono shrink-0 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Quantifiable Results Callout */}
                  <div className="mb-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-blue-300 font-bold mb-2">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Key Quantifiable Impact:</span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.quantifiableResults.slice(0, 2).map((res, idx) => (
                        <li key={idx} className="text-xs text-slate-200 font-medium flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Responsibilities summary */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Responsibilities:
                    </span>
                    {exp.responsibilities.slice(0, 2).map((resp, idx) => (
                      <p key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Bottom Tools & Click Trigger */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tools.slice(0, 4).map((tool) => (
                      <span key={tool} className="px-2 py-0.5 rounded-md bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700/60">
                        {tool}
                      </span>
                    ))}
                    {exp.tools.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[11px] font-mono text-slate-400">
                        +{exp.tools.length - 4} more
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-medium text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 shrink-0">
                    <span>Inspect</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

        {/* Experience Detail Modal */}
        <AnimatePresence>
          {selectedExp && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedExp(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="mb-6 pr-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{selectedExp.type || "Professional Role"}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {selectedExp.position}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mt-2">
                    <span className="text-emerald-400 font-semibold font-mono">{selectedExp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      {selectedExp.duration}
                    </span>
                    {selectedExp.location && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-indigo-400" />
                          {selectedExp.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Key Quantified Results */}
                <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-blue-900/20 to-emerald-900/20 border border-blue-500/30">
                  <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Verified Quantified Achievements</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedExp.quantifiableResults.map((result, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-white font-medium flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-white font-display mb-3">Key Responsibilities & Scope</h4>
                  <div className="space-y-2.5">
                    {selectedExp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/40">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-white font-display mb-3">Key Highlights & Projects</h4>
                  <div className="space-y-2">
                    {selectedExp.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-2" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools Applied */}
                <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-slate-400 block mb-2">Tools & Environments:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.tools.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-mono text-blue-300 border border-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedExp(null)}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Done Viewing
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
