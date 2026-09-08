import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
  FileText,
  Bot,
  MessageSquare
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-slate-950/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 group cursor-pointer text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 p-0.5 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <span className="font-display font-extrabold text-sm text-white tracking-wider">SK</span>
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-white text-base tracking-tight block group-hover:text-blue-400 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 block tracking-wider uppercase">
                AI Automation • n8n
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-blue-600 rounded-full shadow-md shadow-blue-600/40 -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-800 hover:border-slate-700 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>CV / Resume</span>
            </button>

            <button
              id="nav-hire-me-btn"
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Hire Me</span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold"
            >
              Hire Me
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl px-6 py-6 overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2 mb-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-medium text-left transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View Full CV & Academic Records</span>
              </button>

              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
              >
                <span>Hire Swochal — Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
