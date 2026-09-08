import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Send,
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Globe,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { personalInfo, servicesData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

interface ContactSectionProps {
  selectedServicePreset?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: selectedServicePreset || 'Meta Ads Mastery',
    budget: '$3,000 — $5,000',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetOptions = [
    '<$1,500 (Project Trial)',
    '$1,500 — $3,000 / mo',
    '$3,000 — $5,000 / mo',
    '$5,000 — $10,000+ / mo',
    'Custom Enterprise Scope',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission & prompt direct contact option
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Swochal, I saw your portfolio and would like to discuss a project regarding ${formData.service || 'Growth & AI Automation'}.`
    );
    window.open(`https://wa.me/${personalInfo.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              Grows.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Whether you need higher ad ROAS, technical SEO rankings, or custom n8n AI workflows to automate your operations, let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact & Availability Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Availability Glass Card */}
            <TiltCard glowColor="emerald">
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-white font-display uppercase tracking-wider">
                      Current Availability: Open
                    </h3>
                    <p className="text-xs text-emerald-400 font-mono">Accepting 2 new client partnerships this month</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Fast response guaranteed. All project inquiries receive a comprehensive audit proposal and workflow architecture breakdown within 24 hours.
                </p>

                <div className="mt-6 pt-5 border-t border-slate-800 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Avg. Response Time: <strong>&lt; 30 Minutes on WhatsApp</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Non-Disclosure Agreement (NDA) Protected</span>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Direct Connect Options */}
            <div className="space-y-3">
              {/* WhatsApp Quick Chat */}
              <button
                id="contact-whatsapp-btn"
                onClick={handleWhatsAppDirect}
                className="w-full p-4 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-white flex items-center justify-between transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs text-emerald-400 font-mono font-bold block">Instant Chat via WhatsApp</span>
                    <span className="text-sm font-semibold text-white">{personalInfo.phone}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-300 group-hover:translate-x-1 transition-transform">
                  Chat Now →
                </span>
              </button>

              {/* Direct Email */}
              <a
                id="contact-email-btn"
                href={`mailto:${personalInfo.email}`}
                className="p-4 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs text-blue-400 font-mono font-bold block">Direct Email</span>
                    <span className="text-sm font-semibold text-white">{personalInfo.email}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  Send Email →
                </span>
              </a>

              {/* Phone Direct */}
              <a
                id="contact-phone-btn"
                href={`tel:${personalInfo.phone}`}
                className="p-4 rounded-2xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs text-indigo-400 font-mono font-bold block">Direct Call / Consultation</span>
                    <span className="text-sm font-semibold text-white">{personalInfo.phone}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400 group-hover:text-white transition-colors">
                  Call Now →
                </span>
              </a>

              {/* Personal Domain */}
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60 text-white flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-700/40 flex items-center justify-center text-slate-300">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs text-slate-400 font-mono font-bold block">Portfolio Domain</span>
                    <span className="text-xs font-mono text-slate-200">{personalInfo.website}</span>
                  </div>
                </div>
                <span className="px-2 py-1 rounded bg-slate-800 text-[10px] font-mono text-slate-400">Verified</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Project Intake Form */}
          <div className="lg:col-span-7">
            <TiltCard glowColor="blue">
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-bold text-white font-display mb-2">
                  Send a Direct Project Brief
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-6">
                  Fill in your details below and I will get back to you with a tailored action plan.
                </p>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-4"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="text-xl font-bold text-white font-display">Inquiry Received!</h4>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. I have received your request regarding <strong className="text-emerald-400">{formData.service}</strong> and will contact you promptly at <strong className="text-white">{formData.email}</strong>.
                      </p>
                      
                      <div className="pt-4 flex flex-wrap justify-center gap-3">
                        <button
                          onClick={handleWhatsAppDirect}
                          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors cursor-pointer"
                        >
                          Ping on WhatsApp for Instant Reply
                        </button>
                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            setFormData({
                              name: '',
                              email: '',
                              company: '',
                              service: 'Meta Ads Mastery',
                              budget: '$3,000 — $5,000',
                              message: '',
                            });
                          }}
                          className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-medium hover:bg-slate-700 transition-colors cursor-pointer"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                            Your Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm outline-none transition-all placeholder:text-slate-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                            Business Email *
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="e.g. john@brand.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm outline-none transition-all placeholder:text-slate-500"
                          />
                        </div>
                      </div>

                      {/* Company & Primary Service */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                            Company / Brand Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Acme Footwear"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm outline-none transition-all placeholder:text-slate-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                            Primary Focus Area *
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm outline-none transition-all cursor-pointer"
                          >
                            {servicesData.map((s) => (
                              <option key={s.id} value={s.title} className="bg-slate-900 text-white">
                                {s.title}
                              </option>
                            ))}
                            <option value="Full Omnichannel Growth Package" className="bg-slate-900 text-white">
                              Full Omnichannel Growth Package
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Estimated Monthly Budget */}
                      <div>
                        <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                          Estimated Monthly Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm outline-none transition-all cursor-pointer"
                        >
                          {budgetOptions.map((b) => (
                            <option key={b} value={b} className="bg-slate-900 text-white">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Project Scope / Message */}
                      <div>
                        <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                          Project Goals & Current Pain Points *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell me about your current ad performance, manual workflow bottlenecks, or SEO targets..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm outline-none transition-all placeholder:text-slate-500 resize-none"
                        />
                      </div>

                      {/* Submit CTA */}
                      <button
                        id="contact-form-submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-8 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-70 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        {isSubmitting ? (
                          <span>Transmitting Brief...</span>
                        ) : (
                          <>
                            <span>Send Project Proposal Request</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>

                    </form>
                  )}
                </AnimatePresence>

              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
