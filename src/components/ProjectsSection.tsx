import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  X,
  Layers,
  Wrench,
  ArrowRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { TiltCard } from './TiltCard';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'AI Automation',
    'Marketing Campaigns',
    'SEO Projects',
    'Analytics Dashboards',
    'Creative Projects'
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO & SYSTEM ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              Automation Systems.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Interactive gallery of deployed n8n bots, programmatic SEO scrapers, and full-funnel ad architectures.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-800/60 border-slate-700/60 text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <TiltCard
                  glowColor="blue"
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer h-full"
                >
                  <div className="flex flex-col justify-between h-full group">
                    {/* Thumbnail Image */}
                    <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                      
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-blue-300 text-[10px] font-mono font-bold">
                        {project.category}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Result Highlight */}
                        <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 mb-4">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-bold mb-1">
                            <TrendingUp className="w-3.5 h-3.5" />
                            <span>Outcome:</span>
                          </div>
                          <p className="text-xs text-slate-200 font-medium">{project.result}</p>
                        </div>
                      </div>

                      {/* Bottom Tools */}
                      <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {project.tools.slice(0, 3).map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-400 border border-slate-700/50">
                              {t}
                            </span>
                          ))}
                        </div>

                        <span className="text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          <span>Inspect</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-6">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono text-xs font-bold">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-3">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="rounded-2xl overflow-hidden mb-6 border border-slate-700 h-56 w-full">
                  <img
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Key Metrics Pill Grid */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold mb-3">Key Metrics Achieved</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedProject.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-white font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tools.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded bg-slate-800 text-xs font-mono text-blue-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer"
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
