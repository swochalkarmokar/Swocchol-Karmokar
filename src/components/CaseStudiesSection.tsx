import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderKanban,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Cpu,
  BarChart3,
  Quote,
  X,
  Sparkles,
  ArrowUpRight,
  Layers,
  Wrench
} from 'lucide-react';
import { caseStudiesData } from '../data/portfolioData';
import { CaseStudyItem } from '../types';
import { TiltCard } from './TiltCard';

interface CaseStudiesSectionProps {
  onHireMe: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onHireMe }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);

  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>MEASURABLE BUSINESS IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Detailed Case Studies &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              Transformations.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            A deep look into actual client challenges, the scientific marketing & automation strategy deployed, and the audited before-and-after results.
          </p>
        </div>

        {/* Case Studies 3-Column Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study) => (
            <TiltCard
              key={study.id}
              glowColor="blue"
              onClick={() => setSelectedCase(study)}
              className="cursor-pointer h-full"
            >
              <div className="p-7 sm:p-8 flex flex-col justify-between h-full group">
                <div>
                  {/* Client & Industry */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                        {study.client}
                      </span>
                      <span className="text-[11px] text-slate-400">{study.industry}</span>
                    </div>
                    <span className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <TrendingUp className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h3>

                  {/* Problem & Strategy Summary */}
                  <div className="space-y-3 mb-6">
                    <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-rose-400 font-bold uppercase mb-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>Problem</span>
                      </div>
                      <p className="text-xs text-slate-300 line-clamp-2">{study.challenge}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-blue-400 font-bold uppercase mb-1">
                        <Lightbulb className="w-3.5 h-3.5" />
                        <span>Strategy</span>
                      </div>
                      <p className="text-xs text-slate-300 line-clamp-2">{study.strategy}</p>
                    </div>
                  </div>

                  {/* Main Highlighted Metric */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-blue-950/40 border border-emerald-500/30 mb-6">
                    <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider block mb-1">
                      Primary Outcome:
                    </span>
                    <span className="text-sm font-bold text-white font-display">
                      {study.mainKPI}
                    </span>
                  </div>
                </div>

                {/* Bottom Tools & Action Link */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {study.tools.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300 border border-slate-700/60">
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Full Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>

        {/* 12-Section Detailed Case Study Modal */}
        <AnimatePresence>
          {selectedCase && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-lg">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-6 right-6 p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* 1. Hero / Header */}
                <div className="mb-8 pr-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs font-bold">
                      CASE STUDY DEEP-DIVE
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">{selectedCase.client}</span>
                    <span className="text-xs text-slate-400">• {selectedCase.industry}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display">
                    {selectedCase.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                    {selectedCase.summary}
                  </p>
                </div>

                {/* 8. Before vs After Interactive Metric Comparison Cards */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Audited Before vs. After Metrics</span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {selectedCase.results.map((res, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 flex flex-col justify-between">
                        <span className="text-xs text-slate-400 font-medium mb-2">{res.label}</span>
                        <div>
                          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                            <span>Before: <del className="text-rose-400">{res.before}</del></span>
                          </div>
                          <div className="text-lg sm:text-xl font-bold font-display text-emerald-400">
                            {res.after}
                          </div>
                          <span className="inline-block mt-1 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                            {res.improvement}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Challenge & 5. Strategy 2-Column Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/60">
                    <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase mb-2">
                      <AlertCircle className="w-4 h-4" />
                      <span>The Core Challenge & Friction</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {selectedCase.challenge}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/60">
                    <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-bold uppercase mb-2">
                      <Lightbulb className="w-4 h-4" />
                      <span>The Architecture & Strategy</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {selectedCase.strategy}
                    </p>
                  </div>
                </div>

                {/* 6. Execution Steps */}
                <div className="mb-8 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/60">
                  <h4 className="text-xs font-mono uppercase text-blue-400 font-bold mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Technical Execution Milestones</span>
                  </h4>
                  <div className="space-y-2.5">
                    {selectedCase.execution.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 10. Lessons Learned & 11. Client Quote */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {selectedCase.lessonsLearned && (
                    <div className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                        Key Strategic Takeaway
                      </span>
                      <ul className="space-y-2">
                        {selectedCase.lessonsLearned.map((lesson, idx) => (
                          <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedCase.clientQuote && (
                    <div className="p-5 rounded-2xl bg-gradient-to-tr from-blue-950/40 to-slate-800/60 border border-blue-500/30 flex flex-col justify-between">
                      <Quote className="w-6 h-6 text-blue-400 mb-2 opacity-60" />
                      <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                        "{selectedCase.clientQuote.text}"
                      </p>
                      <div className="mt-3 pt-3 border-t border-slate-700/60">
                        <span className="text-xs font-bold text-white block">{selectedCase.clientQuote.author}</span>
                        <span className="text-[11px] text-slate-400">{selectedCase.clientQuote.role}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 12. Modal Footer & Hire CTA */}
                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400">Stack Applied:</span>
                    {selectedCase.tools.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono text-blue-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCase(null);
                      onHireMe();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer shadow-lg shadow-blue-600/30"
                  >
                    <span>Achieve Similar Results — Let's Talk</span>
                    <ArrowRight className="w-4 h-4" />
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
