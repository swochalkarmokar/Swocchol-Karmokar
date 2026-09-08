import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  ShieldCheck,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { testimonialsData } from '../data/portfolioData';
import { TiltCard } from './TiltCard';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const activeTestimonial = testimonialsData[currentIndex];

  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-900/40"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>ENDORSEMENTS & CLIENT PROOF</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Founders &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
              Growth Leaders.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mt-4">
            Hear directly from e-commerce founders, medical directors, and VP of Growth leaders who transformed their operations.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <TiltCard glowColor="blue">
                <div className="p-8 sm:p-12 relative overflow-hidden">
                  
                  {/* Subtle Background Quote Mark */}
                  <Quote className="absolute -top-4 -right-4 w-36 h-36 text-blue-500/5 pointer-events-none" />

                  {/* Top Rating & Metric Banner */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="ml-2 text-xs font-mono text-slate-400">5.0 Verified Review</span>
                    </div>

                    {activeTestimonial.metricAchieved && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {activeTestimonial.metricAchieved}
                      </span>
                    )}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed mb-8 italic">
                    "{activeTestimonial.text}"
                  </p>

                  {/* Client Author Info */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-800 flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={activeTestimonial.avatar}
                        alt={activeTestimonial.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-full object-cover border-2 border-blue-500/40 shadow-lg"
                      />
                      <div>
                        <h3 className="text-base font-bold text-white flex items-center gap-1.5 font-display">
                          <span>{activeTestimonial.name}</span>
                          <ShieldCheck className="w-4 h-4 text-blue-400" />
                        </h3>
                        <p className="text-xs text-slate-400">
                          {activeTestimonial.position} • <span className="text-blue-400 font-semibold">{activeTestimonial.company}</span>
                        </p>
                      </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
