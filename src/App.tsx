import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { HeroScene3D } from './components/HeroScene3D';
import { TrustStatsSection } from './components/TrustStatsSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { RoiCalculator } from './components/RoiCalculator';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedServicePreset, setSelectedServicePreset] = useState<string | undefined>(undefined);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Service exploration trigger
  const handleSelectService = (serviceTitle: string) => {
    setSelectedServicePreset(serviceTitle);
    handleNavigate('contact');
  };

  // ROI calculator trigger
  const handleCustomStrategy = (calcData: { adSpend: number; manualHours: number; estAddedRevenue: number; estHoursSaved: number }) => {
    handleNavigate('contact');
  };

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'skills', 'services', 'case-studies', 'certifications', 'projects', 'testimonials', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white font-sans relative overflow-x-hidden">
      {/* Particle Canvas Background */}
      <ParticleBackground />

      {/* Sticky Glass Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="relative z-10">
        {/* Page 1: Hero Section */}
        <HeroScene3D
          onViewCaseStudies={() => handleNavigate('case-studies')}
          onHireMe={() => handleNavigate('contact')}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Live Trust Metrics Strip */}
        <TrustStatsSection />

        {/* Page 2: About Me, Background, & 7-Step Workflow */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Page 3: Experience & Track Record */}
        <ExperienceSection />

        {/* Page 4: Skills & Real-World Competencies */}
        <SkillsSection />

        {/* Page 5: Services & Growth Solutions */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Interactive Growth & n8n ROI Calculator */}
        <RoiCalculator onGetCustomStrategy={handleCustomStrategy} />

        {/* Page 6: Deep Dive Case Studies */}
        <CaseStudiesSection onHireMe={() => handleNavigate('contact')} />

        {/* Page 7: Official Certifications & Accredited Badges */}
        <CertificationsSection />

        {/* Page 8: Projects & Deployed Automation Systems */}
        <ProjectsSection />

        {/* Page 9: Client Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* Page 10: High-Converting Contact & Project Scope Form */}
        <ContactSection selectedServicePreset={selectedServicePreset} />
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Back to top floating button */}
      <BackToTop />

      {/* Verified CV & Academic Records Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
