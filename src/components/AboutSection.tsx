import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  User,
  GraduationCap,
  Sparkles,
  Layers,
  CheckCircle2,
  ChevronRight,
  Compass,
  BarChart3,
  Rocket,
  Cpu,
  Sliders,
  TrendingUp,
  Languages,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo, educationData, workProcessSteps } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const AboutSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedTimelineId, setSelectedTimelineId] = useState<string>('step_current');

  const careerMilestones = [
    {
      id: "step_beginning",
      year: "2016 — 2017",
      title: "Foundation & Commercial Sales",
      role: "Sales & Client Engagement at AJIJ Group",
      description: "Started in frontline direct sales, learning buyer psychology, customer relationship management, and objection handling.",
      achievement: "Generated 240+ qualified leads and consistently exceeded sales quotas by 135%."
    },
    {
      id: "step_leadership",
      year: "2018 — 2025",
      title: "Team Leadership & Operations",
      role: "Team Leader at Karmokars",
      description: "Managed cross-functional teams of 8+ specialists, directing client deliveries, task tracking, and milestone quality standards.",
      achievement: "Maintained 99.4% on-time milestone delivery across 80+ customer-facing projects over 7+ consecutive years."
    },
    {
      id: "step_academic",
      year: "2024 — Present",
      title: "Computer Science & Engineering",
      role: "BSc CSE Student at United International University (UIU)",
      description: "Building a research-oriented software and algorithms foundation in distributed systems, graph theory, and artificial intelligence.",
      achievement: "Applying core computer science principles directly to algorithmic marketing telemetry and autonomous AI agent development."
    },
    {
      id: "step_freelance",
      year: "2023 — Present",
      title: "Global Freelance Scaling",
      role: "AI Automation & Performance Specialist on Fiverr & Upwork",
      description: "Delivering custom n8n pipelines, WhatsApp AI bots, and high-ROAS Meta/Google PPC ad strategies to international founders.",
      achievement: "Maintained a 5.0-star client rating across 35+ brand automation blueprints."
    },
    {
      id: "step_current",
      year: "2026 — Present",
      title: "Senior AI & Automation Specialist",
      role: "Senior AI Specialist at Timmerman Industries (SEO Expert Ltd.)",
      description: "Leading enterprise n8n workflow architecture, programmatic search indexation, and multi-agent LLM systems for high-scale growth.",
      achievement: "Reduced manual reporting overhead by 75% and scaled client ad account revenue by 2.4x."
    }
  ];

  const processIcons: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-5 h-5" />,
    BarChart3: <BarChart3 className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    Rocket: <Rocket className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    Sliders: <Sliders className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
  };

  const selectedProcess = workProcessSteps.find((s) => s.step === activeStep) || workProcessSteps[0];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium mb-3">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT SWOCHAL KUMAR KARMOKAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Precision Meets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Performance Marketing.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            A rare fusion of rigorous Computer Science engineering fundamentals and 5+ years of high-converting advertising and automation execution.
          </p>
        </div>

        {/* 2-Column Overview & Academic Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Left Bio Card */}
          <div className="lg:col-span-7">
            <TiltCard glowColor="blue" className="h-full">
              <div className="p-7 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                    <div>
                      <h3 className="text-2xl font-bold text-white font-display">{personalInfo.name}</h3>
                      <p className="text-blue-400 font-medium text-sm mt-0.5">{personalInfo.subtitle}</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Dhaka, BD / Remote
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-base mt-6">
                    {personalInfo.bio}
                  </p>

                  {/* 4 Core Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                      <div className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider mb-1">Career Philosophy</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Data without telemetry is guesswork. Every ad dollar and SEO effort must be mathematically accounted for through clean attribution.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/60">
                      <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1">AI & Automation</div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        AI shouldn't just generate generic text—it should actively orchestrate workflows, route leads instantly, and eliminate human friction.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spoken Languages */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Languages className="w-4 h-4 text-indigo-400" />
                    <span>Languages:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.languages.map((lang) => (
                      <span key={lang.name} className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/70 text-xs text-slate-200">
                        <strong className="text-white">{lang.name}:</strong> <span className="text-slate-400">{lang.proficiency}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Academic & Research Card */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <TiltCard glowColor="emerald" className="h-full">
              <div className="p-7 sm:p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2.5 text-emerald-400 mb-4">
                    <GraduationCap className="w-5 h-5" />
                    <h3 className="text-lg font-bold font-display text-white">Academic Journey & Foundations</h3>
                  </div>

                  <div className="space-y-4">
                    {educationData.map((edu) => (
                      <div key={edu.id} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-colors">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-bold text-white">{edu.institution}</h4>
                          <span className="text-[11px] font-mono text-slate-400 shrink-0">{edu.duration}</span>
                        </div>
                        <p className="text-xs text-blue-400 font-medium mt-0.5">{edu.degree}</p>
                        {edu.result && (
                          <div className="inline-block mt-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[11px] font-mono font-semibold">
                            Result: {edu.result}
                          </div>
                        )}
                        {edu.status && (
                          <div className="inline-block mt-1.5 px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 text-[11px] font-mono font-semibold">
                            {edu.status}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Computer Science & Engineering</span>
                  <span className="font-mono text-emerald-400">Research Focus</span>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>

        {/* 3D Interactive Career Timeline */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">CAREER MILESTONES</div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">Interactive Career Progression</h3>
            </div>
            <span className="text-xs text-slate-400 hidden sm:inline">Click any milestone to inspect</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {careerMilestones.map((item, index) => {
              const isSelected = selectedTimelineId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedTimelineId(item.id)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border relative ${
                    isSelected
                      ? 'bg-slate-800/90 border-blue-500 shadow-xl shadow-blue-600/20 translate-y-[-4px]'
                      : 'bg-slate-800/30 border-slate-700/60 hover:bg-slate-800/60 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-blue-500 text-white' : 'bg-slate-700/60 text-slate-300'
                    }`}>
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-slate-500">0{index + 1}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-display mb-1">{item.title}</h4>
                  <p className="text-xs text-blue-400 font-medium mb-3">{item.role}</p>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">{item.description}</p>
                  
                  {isSelected && (
                    <motion.div
                      layoutId="timeline-active-glow"
                      className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 rounded-full"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Expanded Detail Box for Selected Milestone */}
          <AnimatePresence mode="wait">
            {selectedTimelineId && (
              <motion.div
                key={selectedTimelineId}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90 border border-blue-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono uppercase text-emerald-400 font-bold">Key Quantified Milestone</span>
                  </div>
                  <h5 className="text-lg font-bold text-white">
                    {careerMilestones.find((m) => m.id === selectedTimelineId)?.title}
                  </h5>
                  <p className="text-sm text-slate-300">
                    {careerMilestones.find((m) => m.id === selectedTimelineId)?.achievement}
                  </p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-medium shrink-0">
                  Verified In CV
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* "How I Work" — 7-Step Interactive Visual Process */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>HOW I WORK — 7-STEP GROWTH ENGINE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                A Structured Framework for Compounding ROI
              </h3>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Every project follows an agile 7-stage engineering pipeline designed to eliminate ad spend waste and scale autonomously.
            </p>
          </div>

          {/* Interactive Stepper Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
            {workProcessSteps.map((step) => {
              const isActive = activeStep === step.step;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`p-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border relative ${
                    isActive
                      ? 'bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30'
                      : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold opacity-80">0{step.step}</span>
                    <span className={isActive ? 'text-white' : 'text-slate-400'}>
                      {processIcons[step.icon]}
                    </span>
                  </div>
                  <span className="text-xs font-bold font-display truncate">{step.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-800/60 border border-slate-700/80 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            >
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 font-mono text-xs font-bold">
                    STEP {selectedProcess.step} of 7
                  </span>
                  <span className="text-xs font-mono text-emerald-400">{selectedProcess.tagline}</span>
                </div>
                <h4 className="text-2xl font-bold text-white font-display mb-3">
                  {selectedProcess.step}. {selectedProcess.title}
                </h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedProcess.description}
                </p>
              </div>

              {/* Key Deliverables Pill Box */}
              <div className="w-full lg:w-auto shrink-0 bg-slate-900/80 p-5 rounded-xl border border-slate-700/60 min-w-[260px]">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Key Stage Outputs
                </span>
                <div className="space-y-2">
                  {selectedProcess.keyOutputs.map((output, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{output}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
