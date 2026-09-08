import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  Target,
  Search,
  Cpu,
  BarChart3,
  Layers,
  Sparkles,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { SkillItem } from '../types';
import { TiltCard } from './TiltCard';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities', icon: Sparkles },
    { id: 'ai_automation', label: 'AI & n8n Automation', icon: Cpu },
    { id: 'advertising', label: 'Paid Advertising', icon: Target },
    { id: 'seo', label: 'Technical SEO', icon: Search },
    { id: 'analytics', label: 'Analytics & GA4', icon: BarChart3 },
    { id: 'strategy', label: 'Growth Strategy', icon: Layers },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  const getLevelBadge = (level: SkillItem['level']) => {
    switch (level) {
      case 'Advanced':
        return (
          <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 text-[11px] font-mono font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Advanced
          </span>
        );
      case 'Professional':
        return (
          <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-mono font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Professional
          </span>
        );
      case 'Working Knowledge':
        return (
          <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-[11px] font-mono font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Working Knowledge
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY & STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              Tool Mastery.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Structured skill categorizations labeled by real-world competency standards, avoiding arbitrary percentage bars.
          </p>
        </div>

        {/* Filter Navigation Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{cat.label}</span>
                <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-blue-700 text-white' : 'bg-slate-700 text-slate-400'
                }`}>
                  {cat.id === 'all'
                    ? skillsData.length
                    : skillsData.filter((s) => s.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard glowColor="blue" className="h-full">
                  <div className="p-6 sm:p-7 flex flex-col justify-between h-full group">
                    <div>
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-lg font-bold text-white font-display group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h3>
                        {getLevelBadge(skill.level)}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                        {skill.description}
                      </p>
                    </div>

                    {/* Related Projects Tagging */}
                    <div className="pt-4 border-t border-slate-800/80">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 mb-2">
                        <FolderGit2 className="w-3.5 h-3.5 text-blue-400" />
                        <span>Applied In Projects:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.relatedProjects.map((proj) => (
                          <span
                            key={proj}
                            className="px-2.5 py-1 rounded-md bg-slate-800/90 border border-slate-700/60 text-[11px] text-slate-300 font-medium"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
