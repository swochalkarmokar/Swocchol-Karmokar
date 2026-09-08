import React from 'react';
import {
  Sparkles,
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Globe,
  ArrowUp,
  Heart,
  ShieldCheck
} from 'lucide-react';
import { personalInfo, servicesData } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenResume }) => {
  const currentYear = 2026;

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Bio & Live Badge (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-500 p-0.5 shadow-lg">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-display font-extrabold text-sm text-white">
                  SK
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg tracking-tight block">
                  {personalInfo.name}
                </span>
                <span className="text-xs font-mono text-emerald-400 block">
                  {personalInfo.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {personalInfo.tagline}
            </p>

            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.status}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {['home', 'about', 'experience', 'skills', 'case-studies', 'certifications', 'projects', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="hover:text-blue-400 transition-colors capitalize cursor-pointer text-slate-400"
                  >
                    {id.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">
              Services & Capabilities
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-emerald-400 transition-colors text-slate-400 text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Social (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider">
              Connect Directly
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`https://wa.me/${personalInfo.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors text-slate-300"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors text-slate-300"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Direct Email</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 hover:text-indigo-400 transition-colors text-slate-300"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <span>+880 1306277711</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 hover:text-white transition-colors text-slate-300 cursor-pointer pt-2"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>View CV Document</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} <strong>{personalInfo.name}</strong>. All rights reserved. Designed with 3D performance standards.
          </div>
          <div className="flex items-center gap-6">
            <span>Sadullapur / Dhaka, Bangladesh</span>
            <span className="font-mono text-emerald-400">{personalInfo.website}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
