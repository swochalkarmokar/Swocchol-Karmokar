import React from 'react';
import { motion } from 'motion/react';
import {
  Target,
  TrendingUp,
  Search,
  Cpu,
  Code2,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Zap
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { TiltCard } from './TiltCard';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const serviceIcons: Record<string, React.ReactNode> = {
    Target: <Target className="w-6 h-6 text-blue-400" />,
    TrendingUp: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    Search: <Search className="w-6 h-6 text-indigo-400" />,
    Cpu: <Cpu className="w-6 h-6 text-emerald-400" />,
    Code2: <Code2 className="w-6 h-6 text-blue-400" />,
    Sparkles: <Sparkles className="w-6 h-6 text-cyan-400" />,
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>SOLUTIONS & PACKAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            High-Impact Growth &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              Automation Services.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            End-to-end performance media buying, algorithmic search ranking, and bespoke AI workflows tailored to your unit economics.
          </p>
        </div>

        {/* Services 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <TiltCard
              key={service.id}
              glowColor={service.colorScheme === 'emerald' ? 'emerald' : service.colorScheme === 'indigo' ? 'indigo' : 'blue'}
              className="h-full"
            >
              <div className="p-7 sm:p-8 flex flex-col justify-between h-full group relative">
                
                {service.popular && (
                  <div className="absolute top-6 right-6 px-3 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                    High Demand
                  </div>
                )}

                <div>
                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {serviceIcons[service.icon]}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs font-mono text-emerald-400 mb-4">{service.shortDesc}</p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-800">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Key Deliverables:
                    </span>
                    {service.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal Client Box */}
                  <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 mb-6 flex items-start gap-2.5">
                    <UserCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Ideal For:</span>
                      <p className="text-xs text-slate-300 leading-snug">{service.idealClient}</p>
                    </div>
                  </div>
                </div>

                {/* Service CTA Button */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-blue-600 text-white font-semibold text-xs border border-slate-700 hover:border-blue-500 shadow-md transition-all duration-200 cursor-pointer group-hover:shadow-blue-600/30"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
