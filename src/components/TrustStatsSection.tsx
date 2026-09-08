import React from 'react';
import { motion } from 'motion/react';
import { trustStats } from '../data/portfolioData';
import { StatsCounter } from './StatsCounter';
import { ShieldCheck, Award, Zap } from 'lucide-react';

export const TrustStatsSection: React.FC = () => {
  const brandLogos = [
    { name: "n8n Automation", type: "AI Orchestration" },
    { name: "Meta Ads & CAPI", type: "Paid Media" },
    { name: "Google Ads / PPC", type: "Search Engine" },
    { name: "Python Scripting", type: "Automation" },
    { name: "Google Analytics 4", type: "Attribution" },
    { name: "OpenAI / LLMs", type: "Generative AI" },
    { name: "Looker Studio", type: "BI Reporting" },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-800/80 bg-slate-900/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-12">
          {trustStats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/40 transition-all duration-300 flex flex-col items-center text-center group hover:bg-slate-800/60"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-display text-white group-hover:text-blue-400 transition-colors">
                <StatsCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <span className="text-sm font-semibold text-slate-300 mt-2">{stat.label}</span>
              <span className="text-[11px] font-mono text-emerald-400/90 mt-1 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                {stat.highlight}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack & Core Standards Bar */}
        <div className="pt-6 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
            <Zap className="w-4 h-4 text-blue-400" />
            <span>Standard Production Tooling</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {brandLogos.map((tool) => (
              <span
                key={tool.name}
                className="px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-500 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                {tool.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
