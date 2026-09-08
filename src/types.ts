export interface MetricStat {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  highlight?: string;
  change?: string;
  isPositive?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  result?: string;
  status?: string;
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  location?: string;
  type?: string;
  responsibilities: string[];
  achievements: string[];
  tools: string[];
  quantifiableResults: string[];
  colorAccent?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'advertising' | 'seo' | 'ai_automation' | 'analytics' | 'strategy' | 'technical';
  level: 'Advanced' | 'Professional' | 'Working Knowledge';
  description: string;
  relatedProjects: string[];
  iconName?: string;
  badgeColor?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  idealClient: string;
  icon: string;
  popular?: boolean;
  colorScheme: 'blue' | 'emerald' | 'indigo' | 'cyan';
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  strategy: string;
  execution: string[];
  mainKPI: string;
  results: {
    label: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  tools: string[];
  featured?: boolean;
  lessonsLearned?: string[];
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  skillsCovered: string[];
  verificationLink: string;
  category: 'Marketing' | 'SEO' | 'AI' | 'Analytics' | 'Advertising' | 'Automation';
  badgeIcon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Marketing Campaigns' | 'SEO Projects' | 'AI Automation' | 'Websites' | 'Analytics Dashboards' | 'Creative Projects';
  description: string;
  thumbnail: string;
  tools: string[];
  result: string;
  metrics: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  verified?: boolean;
  metricAchieved?: string;
}

export interface WorkProcessStep {
  step: number;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  keyOutputs: string[];
}
