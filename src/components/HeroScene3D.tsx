import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  Bot,
  Zap,
  Layers,
  FileText
} from 'lucide-react';
import { personalInfo, heroMetrics } from '../data/portfolioData';
import { StatsCounter } from './StatsCounter';

interface HeroScene3DProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const HeroScene3D: React.FC<HeroScene3DProps> = ({ onNavigate, onOpenResume }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dynamic 3D Grid Underlay */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"
        style={{
          transform: `perspective(800px) rotateX(${mousePos.y * 0.4 + 15}deg) rotateY(${mousePos.x * 0.4}deg) translateZ(-40px)`,
          transformOrigin: 'center 40%',
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Radial Gradient Focus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Hero Content & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/70 shadow-lg mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-300 font-mono">
              {personalInfo.heroBadge}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6"
          >
            I Turn Marketing Data Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              Measurable Growth.
            </span>
          </motion.h1>

          {/* Subtitle / Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
          >
            <span className="text-white font-semibold">{personalInfo.name}</span> — {personalInfo.title} helping e-commerce, B2B SaaS, and local brands scale with data-driven Ads, Technical SEO, and n8n AI autonomous workflows.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
          >
            <button
              id="hero-view-case-studies-btn"
              onClick={() => onNavigate('case-studies')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-hire-me-btn"
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-white font-semibold text-base border border-slate-700 hover:border-slate-600 shadow-lg backdrop-blur-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Hire Me</span>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </button>

            <button
              id="hero-view-cv-btn"
              onClick={onOpenResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Explore CV / Credentials</span>
            </button>
          </motion.div>

          {/* Quick Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>UIU Computer Science & Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Certified n8n AI Agent Architect</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>100% Attribution & Server-side CAPI</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: 3D Interactive Scene with Floating Glass Cards */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] sm:min-h-[500px]">
          
          {/* Main 3D Container with Perspective & Parallax */}
          <div
            className="relative w-full max-w-[460px] h-[480px] perspective-1000 flex items-center justify-center"
            style={{
              transform: `perspective(1000px) rotateX(${-mousePos.y * 0.7}deg) rotateY(${mousePos.x * 0.7}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.15s ease-out',
            }}
          >
            {/* Center Orb & Geometric Rotating Ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="absolute w-80 h-80 rounded-full border border-dashed border-emerald-500/20 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
              <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-blue-600/20 to-emerald-600/20 blur-2xl animate-pulse-subtle" />
            </div>

            {/* Floating Central Node: AI Orchestration Core */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transform: 'translateZ(30px)' }}
              className="relative z-20 w-44 h-44 rounded-3xl bg-slate-900/90 border border-blue-500/40 p-5 shadow-2xl flex flex-col items-center justify-center text-center backdrop-blur-xl glow-blue"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg mb-2">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-wider">n8n Engine</span>
              <span className="text-[11px] text-slate-400">Autonomous Workflows</span>
              <div className="mt-2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Node
              </div>
            </motion.div>

            {/* Floating Metric Card 1: +147% ROAS (Top Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                transform: `translate3d(-105px, -135px, 50px) rotate(-3deg)`,
              }}
              className="absolute z-30 p-3.5 rounded-2xl glass-panel border border-blue-500/30 shadow-xl backdrop-blur-xl w-44 animate-float-slow"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-medium text-slate-400">Meta & Google</span>
                <span className="p-1 rounded-lg bg-blue-500/20 text-blue-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="text-2xl font-bold font-display text-emerald-400 tracking-tight">
                <StatsCounter value={heroMetrics[0].value} prefix={heroMetrics[0].prefix} suffix={heroMetrics[0].suffix} />
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Average ROAS Lift</span>
            </motion.div>

            {/* Floating Metric Card 2: +82% Organic Traffic (Top Right) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{
                transform: `translate3d(115px, -115px, 40px) rotate(4deg)`,
              }}
              className="absolute z-30 p-3.5 rounded-2xl glass-panel border border-emerald-500/30 shadow-xl backdrop-blur-xl w-44 animate-float-reverse"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-medium text-slate-400">Technical SEO</span>
                <span className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <BarChart3 className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="text-2xl font-bold font-display text-blue-400 tracking-tight">
                <StatsCounter value={heroMetrics[1].value} prefix={heroMetrics[1].prefix} suffix={heroMetrics[1].suffix} />
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Organic Traffic Lift</span>
            </motion.div>

            {/* Floating Metric Card 3: -34% CPA (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{
                transform: `translate3d(-110px, 120px, 45px) rotate(2deg)`,
              }}
              className="absolute z-30 p-3.5 rounded-2xl glass-panel border border-slate-700/80 shadow-xl backdrop-blur-xl w-44 animate-float-reverse"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-medium text-slate-400">Ad Efficiency</span>
                <span className="p-1 rounded-lg bg-indigo-500/20 text-indigo-400">
                  <Zap className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="text-2xl font-bold font-display text-emerald-400 tracking-tight">
                <StatsCounter value={heroMetrics[2].value} prefix={heroMetrics[2].prefix} suffix={heroMetrics[2].suffix} />
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Lower CPA Baseline</span>
            </motion.div>

            {/* Floating Metric Card 4: +61% CVR (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              style={{
                transform: `translate3d(100px, 135px, 60px) rotate(-4deg)`,
              }}
              className="absolute z-30 p-3.5 rounded-2xl glass-panel border border-blue-500/30 shadow-xl backdrop-blur-xl w-44 animate-float-slow"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-medium text-slate-400">Conversion Funnel</span>
                <span className="p-1 rounded-lg bg-emerald-500/20 text-emerald-400">
                  <Layers className="w-3.5 h-3.5" />
                </span>
              </div>
              <div className="text-2xl font-bold font-display text-emerald-300 tracking-tight">
                <StatsCounter value={heroMetrics[3].value} prefix={heroMetrics[3].prefix} suffix={heroMetrics[3].suffix} />
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Conversion Rate</span>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
