import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  ShieldCheck,
  ExternalLink,
  Calendar,
  CheckCircle2,
  X,
  Sparkles,
  Search,
  Cpu,
  Target,
  BarChart3,
  Bot
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';
import { CertificationItem } from '../types';
import { TiltCard } from './TiltCard';

export const CertificationsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const filterTabs = ['All', 'AI', 'Automation', 'Advertising', 'SEO', 'Analytics', 'Marketing'];

  const filteredCerts = activeFilter === 'All'
    ? certificationsData
    : certificationsData.filter((c) => c.category === activeFilter);

  const certIcons: Record<string, React.ReactNode> = {
    Award: <Award className="w-6 h-6 text-emerald-400" />,
    Cpu: <Cpu className="w-6 h-6 text-blue-400" />,
    Share2: <Sparkles className="w-6 h-6 text-cyan-400" />,
    Bot: <Bot className="w-6 h-6 text-indigo-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-emerald-400" />,
    Target: <Target className="w-6 h-6 text-blue-400" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    Search: <Search className="w-6 h-6 text-indigo-400" />,
  };

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & AUDITED CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Industry Accredited &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              Verified Badges.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Official technical and performance certifications verified across national authorities and global learning academies.
          </p>
        </div>

        {/* Filter Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard
                  glowColor="blue"
                  onClick={() => setSelectedCert(cert)}
                  className="cursor-pointer h-full"
                >
                  <div className="p-7 flex flex-col justify-between h-full group">
                    <div>
                      {/* Top Issuer & Verified Badge */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                          {certIcons[cert.badgeIcon] || <Award className="w-6 h-6 text-blue-400" />}
                        </div>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                          <ShieldCheck className="w-3 h-3" />
                          Verified
                        </span>
                      </div>

                      {/* Certification Title & Issuer */}
                      <h3 className="text-lg font-bold text-white font-display mb-1 group-hover:text-blue-400 transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-xs font-mono text-emerald-400 mb-4">{cert.issuer}</p>

                      {/* Skills Covered */}
                      <div className="space-y-1.5 mb-6">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                          Curriculum Covered:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skillsCovered.map((skill) => (
                            <span key={skill} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 border border-slate-700/60">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Metadata & View */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono text-[11px] truncate max-w-[150px]">{cert.credentialId}</span>
                      <span className="text-blue-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        <span>Preview</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Certificate Inspection Modal */}
        <AnimatePresence>
          {selectedCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8"
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Certificate Showcase Frame */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-blue-500/40 text-center mb-6 relative overflow-hidden">
                  <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-blue-400" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                    CERTIFICATE OF COMPETENCY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                    {selectedCert.name}
                  </h3>
                  <p className="text-sm text-slate-300 font-medium">Issued by <strong className="text-white">{selectedCert.issuer}</strong></p>
                  
                  <div className="mt-4 inline-block px-3 py-1 rounded-md bg-slate-950/80 border border-slate-700 text-xs font-mono text-blue-300">
                    ID: {selectedCert.credentialId}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">Key Competencies Verified</h4>
                    <div className="space-y-1.5">
                      {selectedCert.skillsCovered.map((s, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <a
                    href={selectedCert.verificationLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors"
                  >
                    <span>Verify at Authority</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors cursor-pointer"
                  >
                    Close Preview
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
