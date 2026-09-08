import {
  MetricStat,
  EducationItem,
  ExperienceItem,
  SkillItem,
  ServiceItem,
  CaseStudyItem,
  CertificationItem,
  ProjectItem,
  TestimonialItem,
  WorkProcessStep,
} from '../types';

export const personalInfo = {
  name: "Swochal Kumar Karmokar",
  preferredName: "Swochal",
  title: "AI Automation Creator in n8n",
  subtitle: "Digital Marketer & AI Performance Specialist",
  tagline: "Helping e-commerce and local brands scale with data-driven Ads, SEO & AI automation.",
  bio: "I am a Computer Science & Engineering student at United International University, building a research-focused academic career alongside delivering high-impact freelance AI automation solutions and data-driven growth strategies for global clients through Upwork, Fiverr, and direct enterprise contracts.",
  email: "swochalkarmokar9@gmail.com",
  phone: "+8801306277711",
  whatsapp: "8801306277711",
  website: "swochal.karmokars.com",
  location: "Dhaka, Bangladesh",
  status: "Available for select projects",
  heroBadge: "AVAILABLE FOR SELECT PROJECTS",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/8801306277711",
    email: "mailto:swochalkarmokar9@gmail.com",
  },
  coreCompetencies: [
    "AI Automation in n8n",
    "Meta Ads & Google PPC",
    "Technical SEO & Audits",
    "Python Scripting & Automation",
    "Generative AI & Autonomous Agents",
    "Full-Funnel CRO & GA4 Analytics"
  ],
  languages: [
    { name: "Bangla", proficiency: "Native" },
    { name: "English", proficiency: "Professional Working" },
    { name: "Hindi", proficiency: "Conversational / Basic" },
  ]
};

export const heroMetrics: MetricStat[] = [
  { id: "roas", label: "Average ROAS", value: 147, prefix: "+", suffix: "%", highlight: "147% ROAS Increase", change: "+147%", isPositive: true },
  { id: "traffic", label: "Organic Traffic Growth", value: 82, prefix: "+", suffix: "%", highlight: "+82% Organic Boost", change: "+82%", isPositive: true },
  { id: "cpa", label: "Cost Per Acquisition", value: 34, prefix: "-", suffix: "%", highlight: "-34% Ad Spend CPA", change: "-34%", isPositive: true },
  { id: "cvr", label: "Conversion Rate", value: 61, prefix: "+", suffix: "%", highlight: "+61% CVR Lift", change: "+61%", isPositive: true },
];

export const trustStats: MetricStat[] = [
  { id: "exp", label: "Years of Experience", value: 5, suffix: "+", highlight: "Continuous Growth" },
  { id: "projects", label: "Projects Completed", value: 80, suffix: "+", highlight: "On-time Delivery" },
  { id: "brands", label: "Brands Scaled", value: 35, suffix: "+", highlight: "Global Reach" },
  { id: "avg_roas", label: "Average ROAS", value: 3.8, suffix: "x", decimals: 1, highlight: "Performance First" },
  { id: "hours_saved", label: "Hours Automated / Mo", value: 450, suffix: "+", highlight: "n8n AI Workflows" },
];

export const educationData: EducationItem[] = [
  {
    id: "uiu",
    institution: "United International University",
    degree: "BSc in Computer Science & Engineering",
    field: "Computer Science & Engineering",
    duration: "2024 — Present",
    status: "Running Student (Active)",
    highlights: [
      "Focused on Artificial Intelligence, Machine Learning algorithms, and Distributed Systems.",
      "Conducting research in autonomous AI agent orchestration and workflow graph engines.",
      "Active participant in competitive programming and automated software systems."
    ]
  },
  {
    id: "college",
    institution: "Sadullapur Govt. College",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    duration: "2022 — 2024",
    result: "GPA 4.17 / 5.00",
    highlights: [
      "Specialized in Higher Mathematics, Physics, Chemistry, and Information Technology.",
      "Recognized for analytical problem solving and academic consistency."
    ]
  },
  {
    id: "school",
    institution: "Sadullapur Multilateral Pilot High School",
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    duration: "2016 — 2022",
    result: "GPA 4.56 / 5.00",
    highlights: [
      "Graduated with honors in General Science and Mathematics.",
      "Leadership roles in science club exhibitions and student debate competitions."
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "timmerman",
    company: "Timmerman Industries",
    position: "Senior AI Specialist",
    duration: "August 2026 — Present",
    location: "Remote / Hybrid",
    type: "Full-Time Senior Specialist",
    responsibilities: [
      "Architect and deploy enterprise-grade n8n automation pipelines bridging CRM, ad accounts, and internal databases.",
      "Lead technical SEO audits and programmatic content indexation strategies under SEO Expert Ltd.",
      "Build custom LangChain and autonomous AI agent workflows to automate lead qualification and customer intelligence.",
      "Collaborate with executive stakeholders to translate high-level marketing objectives into high-converting AI systems."
    ],
    achievements: [
      "Built an automated multi-platform ad performance monitor that reduced daily optimization time by 75%.",
      "Deployed 12+ production n8n workflows handling over 50,000 monthly webhook triggers with zero downtime.",
      "Mentored junior team members in prompt engineering, Python automation scripts, and GA4 custom tracking."
    ],
    tools: ["n8n", "Python", "Generative AI", "Meta Ads Manager", "Google Ads", "Technical SEO", "Make.com", "PostgreSQL"],
    quantifiableResults: [
      "Reduced CPA by 34% across high-competition PPC search campaigns",
      "Scaled client ad account revenue by 2.4x using automated dynamic creative testing",
      "Automated 120+ hours of repetitive manual data entry per month"
    ],
    colorAccent: "blue"
  },
  {
    id: "karmokars",
    company: "Karmokars",
    position: "Team Leader",
    duration: "June 2018 — December 2025",
    location: "Dhaka, Bangladesh",
    type: "Leadership & Operations",
    responsibilities: [
      "Team Management: Assign tasks, guide team members, and ensure smooth cross-functional collaboration across projects.",
      "Performance Monitoring: Track daily progress, solve operational bottlenecks, and ensure deliverables meet strict quality deadlines.",
      "Developed structured SOPs (Standard Operating Procedures) for client onboarding, marketing execution, and automated reporting.",
      "Coordinated with clients and vendors to ensure project scope alignment and continuous customer satisfaction."
    ],
    achievements: [
      "Led a high-performing operations and marketing team of 8+ specialists over 7+ consecutive years.",
      "Successfully delivered 80+ customer-facing projects with a 99.4% on-time completion rate.",
      "Introduced automated task tracking dashboards that boosted internal team productivity by 40%."
    ],
    tools: ["Team Leadership", "Project Management", "Process Automation", "Client Communication", "KPI Dashboards", "Google Sheets API"],
    quantifiableResults: [
      "Maintained a 98% client retention rate over multiple continuous fiscal quarters",
      "Reduced team project turnaround time from 14 days down to 6 days",
      "Trained and upskilled 15+ junior associates in digital performance tactics"
    ],
    colorAccent: "emerald"
  },
  {
    id: "ajij_group",
    company: "AJIJ Group",
    position: "Sales Agent & Client Specialist",
    duration: "June 2017 — December 2018",
    location: "Bangladesh",
    type: "Sales & Client Acquisition",
    responsibilities: [
      "Lead Generation & Customer Engagement: Identified high-value potential customers, initiated outreach, and maintained effective communication channels.",
      "Sales & Target Achievement: Promoted core products/services and consistently worked toward achieving demanding sales quotas.",
      "Customer Relationship Management: Proactively addressed customer needs, resolved complex queries, and maintained positive long-term relationships.",
      "Gathered vital market intelligence and consumer feedback to refine product positioning strategies."
    ],
    achievements: [
      "Exceeded quarterly sales targets by an average of 135% for 4 consecutive quarters.",
      "Pioneered an early customer follow-up tracking matrix that cut lead drop-off by 28%.",
      "Awarded Top Performer in client retention and positive feedback resolution."
    ],
    tools: ["CRM Systems", "Lead Generation", "Direct Negotiation", "Customer Engagement", "Market Research", "Sales Pipeline"],
    quantifiableResults: [
      "Generated 240+ qualified enterprise and retail leads in 18 months",
      "Achieved 94% positive customer satisfaction index across all assigned client accounts",
      "Boosted repeat purchase rates by 22% through structured post-sales follow-up"
    ],
    colorAccent: "indigo"
  },
  {
    id: "freelance",
    company: "Fiverr & Upwork (Global Freelance)",
    position: "AI Automation & Digital Marketing Specialist",
    duration: "2023 — Present",
    location: "Global Remote",
    type: "Independent Consultant",
    responsibilities: [
      "Deliver bespoke n8n automation setups, AI chatbots, and API integrations for e-commerce stores and agencies.",
      "Manage end-to-end Meta and Google Ads campaigns with custom conversion tracking and lookalike audience modeling.",
      "Execute in-depth technical SEO audits, site speed optimization, schema markup injection, and keyword ranking roadmaps."
    ],
    achievements: [
      "Maintained 5.0-star rating across international client reviews on complex automation deliveries.",
      "Built custom webhook systems linking Shopify, WooCommerce, Stripe, and Telegram/WhatsApp alerts."
    ],
    tools: ["n8n", "Meta Ads", "Google PPC", "SEMrush", "GA4", "Webhooks", "Zapier", "OpenAI API"],
    quantifiableResults: [
      "Helped e-commerce clients achieve up to 4.3x ROAS during Q4 peak seasons",
      "Reduced client response time to inbound leads from 4 hours to under 60 seconds",
      "Delivered 35+ custom automation blueprints to international founders"
    ],
    colorAccent: "cyan"
  }
];

export const skillsData: SkillItem[] = [
  // Paid Advertising
  {
    id: "meta_ads",
    name: "Meta Ads (Facebook & Instagram)",
    category: "advertising",
    level: "Advanced",
    description: "Deep funnel architecture, creative testing frameworks, Advantage+ campaigns, CAPI server-side tracking, and custom high-intent retargeting.",
    relatedProjects: ["E-Commerce Footwear Scale", "B2B SaaS Lead Accelerator"],
    badgeColor: "blue"
  },
  {
    id: "google_ppc",
    name: "Google Ads & PPC",
    category: "advertising",
    level: "Advanced",
    description: "Search, Shopping, Performance Max, and YouTube ad architectures optimized for target CPA, maximizing conversion value, and negative keyword filtering.",
    relatedProjects: ["High-Ticket B2B Lead Gen", "Local Clinic Patient Acquisition"],
    badgeColor: "blue"
  },
  {
    id: "conversion_opt",
    name: "Conversion Rate Optimization (CRO)",
    category: "advertising",
    level: "Professional",
    description: "Landing page heatmaps, A/B copy testing, micro-conversion tracking, checkout friction elimination, and user journey optimization.",
    relatedProjects: ["Shopify Store Overhaul", "SaaS Free Trial Funnel"],
    badgeColor: "blue"
  },

  // AI & Automation
  {
    id: "n8n_automation",
    name: "n8n Workflow Automation",
    category: "ai_automation",
    level: "Advanced",
    description: "Self-hosted and cloud n8n workflows, complex JSON data parsing, webhook routing, cron triggers, error fallback nodes, and multi-app orchestration.",
    relatedProjects: ["Zero-Touch Lead Router", "Omnichannel Order Sync Bot"],
    badgeColor: "emerald"
  },
  {
    id: "python_automation",
    name: "Python Automation & Scripting",
    category: "ai_automation",
    level: "Professional",
    description: "Custom Python scrapers, data cleaning, automated PDF report generation, REST API connectors, and automated social distribution scripts.",
    relatedProjects: ["Competitor Price Tracker", "Automated SEO Audit Bot"],
    badgeColor: "emerald"
  },
  {
    id: "generative_ai",
    name: "Generative AI & Agentic Systems",
    category: "ai_automation",
    level: "Advanced",
    description: "Fine-tuned system prompts, LLM function calling, multi-agent workflows, vector database RAG setups, and automated high-converting ad copy generators.",
    relatedProjects: ["AI Social Content Engine", "WhatsApp Autonomous Support Agent"],
    badgeColor: "emerald"
  },
  {
    id: "prompt_eng",
    name: "Prompt Engineering & LLM Orchestration",
    category: "ai_automation",
    level: "Advanced",
    description: "Few-shot prompting, structured JSON schema outputs, temperature tuning, dynamic variable injection, and automated content quality assurance.",
    relatedProjects: ["Automated Blog Generator", "Customer Review Sentiment Classifier"],
    badgeColor: "emerald"
  },

  // SEO
  {
    id: "technical_seo",
    name: "Technical SEO & Site Architecture",
    category: "seo",
    level: "Advanced",
    description: "Canonicalization, robots.txt, XML sitemaps, Core Web Vitals optimization, JS rendering fixes, and structured Schema.org microdata injection.",
    relatedProjects: ["Clinic 82% Traffic Surge", "E-Commerce 50k SKU Indexing"],
    badgeColor: "indigo"
  },
  {
    id: "keyword_research",
    name: "Keyword Research & Topic Clusters",
    category: "seo",
    level: "Professional",
    description: "Search intent mapping, competitor content gap analysis, long-tail opportunity discovery, and high-authority pillar page planning.",
    relatedProjects: ["SaaS Topic Cluster Strategy", "Local Service GEO Optimization"],
    badgeColor: "indigo"
  },
  {
    id: "gsc_analytics",
    name: "Google Search Console & Audits",
    category: "seo",
    level: "Advanced",
    description: "Coverage error triage, indexation monitoring, mobile usability fixing, crawl budget optimization, and CTR snippet enhancement.",
    relatedProjects: ["404 Redirect Restructure", "Search Snippet CTR Lift"],
    badgeColor: "indigo"
  },

  // Analytics
  {
    id: "ga4",
    name: "Google Analytics 4 (GA4)",
    category: "analytics",
    level: "Advanced",
    description: "Custom event tracking, cross-domain user tracking, purchase event debugging, funnel exploration reports, and BigQuery data export setup.",
    relatedProjects: ["E-Commerce Revenue Attribution", "Lead Value Modeling"],
    badgeColor: "cyan"
  },
  {
    id: "looker_studio",
    name: "Looker Studio & Visual Dashboards",
    category: "analytics",
    level: "Professional",
    description: "Executive client dashboards, real-time blended ad spend vs ROAS charts, automated email reports, and interactive KPI scorecards.",
    relatedProjects: ["Agency All-in-One Client Portal", "Monthly Growth Scorecard"],
    badgeColor: "cyan"
  },
  {
    id: "server_tracking",
    name: "Server-Side Tracking & CAPI",
    category: "analytics",
    level: "Professional",
    description: "Meta Conversions API via Google Tag Manager Server-side, overcoming iOS 14+ tracking loss, and data deduplication.",
    relatedProjects: ["iOS Tracking Loss Recovery", "Stripe Webhook Revenue Link"],
    badgeColor: "cyan"
  },

  // Strategy & Leadership
  {
    id: "funnel_strategy",
    name: "Growth & Acquisition Funnel Strategy",
    category: "strategy",
    level: "Advanced",
    description: "Full lifecycle customer acquisition, lead magnets, value ladders, email nurturing sequences, and LTV/CAC optimization.",
    relatedProjects: ["High-Ticket Coaching Funnel", "Direct-to-Consumer Launch"],
    badgeColor: "blue"
  },
  {
    id: "team_leadership",
    name: "Team Leadership & Process Management",
    category: "strategy",
    level: "Advanced",
    description: "7+ years managing teams at Karmokars, setting milestone deadlines, delegating task boards, and fostering collaborative accountability.",
    relatedProjects: ["Karmokars Operations Streamlining", "Agency Training Curriculum"],
    badgeColor: "blue"
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "meta_ads",
    title: "Meta Ads Mastery",
    shortDesc: "Performance-focused Facebook & Instagram advertising.",
    description: "Transform your social ad spend into a predictable revenue engine. We build full-funnel Meta ad structures using creative testing arrays, dynamic product ads, and server-side Conversions API for unshakeable attribution.",
    deliverables: [
      "Custom Campaign Architecture (Top, Middle, Bottom of Funnel)",
      "High-Converting Ad Copy & Creative Angle Testing",
      "Server-Side Meta Conversions API (CAPI) Setup",
      "Lookalike & Custom Audience Segmentation",
      "Weekly Optimization & Real-Time Looker Studio Dashboard"
    ],
    idealClient: "E-commerce stores and service businesses wanting scalable positive-ROI ad acquisition.",
    icon: "Target",
    popular: true,
    colorScheme: "blue"
  },
  {
    id: "google_ppc",
    title: "Google PPC Campaigns",
    shortDesc: "Search, shopping, remarketing and conversion-focused campaigns.",
    description: "Capture high-intent buyers exactly when they are searching for your solutions. We engineer precision Google Search, Shopping, and Performance Max campaigns with disciplined negative keyword filtering.",
    deliverables: [
      "High-Intent Keyword & Competitor Search Audits",
      "Performance Max & Google Shopping Feed Optimization",
      "Negative Keyword Sculpting to eliminate ad spend waste",
      "Landing Page Quality Score Enhancements",
      "Granular Conversion Tracking via GA4 and GTM"
    ],
    idealClient: "High-ticket service providers, B2B brands, and e-commerce stores targeting purchase-ready searchers.",
    icon: "TrendingUp",
    colorScheme: "emerald"
  },
  {
    id: "technical_seo",
    title: "Technical SEO & Audits",
    shortDesc: "Technical audits, optimization and search visibility improvements.",
    description: "Elevate your brand to the top of Google search rankings organically. We fix hidden technical errors, structure your content into authority clusters, and accelerate your page loading speeds for long-term organic compounding.",
    deliverables: [
      "100+ Point Deep Technical Site Audit",
      "Core Web Vitals & Page Speed Optimization",
      "Structured Schema.org Microdata Implementation",
      "Crawl Budget & Indexation Fixing on Google Search Console",
      "Content Gap Analysis & Topic Cluster Blueprint"
    ],
    idealClient: "Brands seeking sustainable, long-term organic traffic without ongoing ad costs.",
    icon: "Search",
    colorScheme: "indigo"
  },
  {
    id: "n8n_automation",
    title: "AI & n8n Automation",
    shortDesc: "Automating repetitive marketing and business workflows.",
    description: "Replace hours of manual copy-pasting, lead routing, and reporting with bulletproof n8n workflow pipelines. We connect your ad accounts, webhooks, CRMs, and messaging channels into self-driving systems.",
    deliverables: [
      "Self-Hosted / Cloud n8n Infrastructure Setup",
      "Instant Lead Routing to WhatsApp / Slack / CRM in < 30 seconds",
      "Automated Multi-Channel Customer Follow-Up Sequences",
      "Webhook & API Integrations across Stripe, Shopify, HubSpot, Airtable",
      "Automated Error Notification & Fallback Systems"
    ],
    idealClient: "Busy agency owners and scaling brands losing time to repetitive manual operations.",
    icon: "Cpu",
    popular: true,
    colorScheme: "emerald"
  },
  {
    id: "python_automation",
    title: "Python Custom Automation",
    shortDesc: "Custom data processing and marketing automation.",
    description: "When off-the-shelf tools fall short, we write clean, robust Python scripts to scrape competitor pricing, parse unstructured lead data, generate programmatic reports, and automate proprietary marketing tasks.",
    deliverables: [
      "Custom Web Scrapers & Competitor Price Trackers",
      "Automated CSV / Excel Data Cleaning and Transformation",
      "Programmatic SEO Content Generation Pipelines",
      "REST API Custom Connectors & Script Scheduling",
      "Automated Executive PDF Report Generation"
    ],
    idealClient: "Enterprises needing tailored data pipelines and custom programmatic solutions.",
    icon: "Code2",
    colorScheme: "blue"
  },
  {
    id: "generative_ai_systems",
    title: "Generative AI Systems",
    shortDesc: "AI-powered content, workflows and marketing systems.",
    description: "Leverage cutting-edge LLMs and autonomous AI agents to qualify incoming leads 24/7, draft personalized email outreach, classify customer support inquiries, and scale tailored marketing collateral at near-zero marginal cost.",
    deliverables: [
      "Custom Autonomous WhatsApp / Web AI Customer Agents",
      "Fine-Tuned Prompt Templates for Ad Copy & SEO Content",
      "RAG (Retrieval-Augmented Generation) Knowledge Base Bots",
      "AI Review Sentiment Analysis & Automated Escalation",
      "Integration with OpenAI, Anthropic, and Gemini Models"
    ],
    idealClient: "Forward-thinking businesses eager to gain an unfair competitive edge with artificial intelligence.",
    icon: "Sparkles",
    colorScheme: "cyan"
  }
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "ecommerce_footwear",
    title: "Scaling Direct-to-Consumer Footwear Brand to 4.3x ROAS",
    client: "Velox Footwear Co.",
    industry: "E-Commerce / Fashion & Apparel",
    summary: "Rebuilt fragmented ad architecture, installed server-side CAPI tracking, and launched automated n8n retargeting to slash acquisition costs by 38%.",
    challenge: "The client suffered from high customer acquisition costs ($24 CPA), declining ROAS (2.1x), and poor attribution due to post-iOS14 browser signal loss. Ad creatives were fatiguing quickly with no testing structure.",
    strategy: "Implemented a 3-tier creative testing matrix, established server-side Meta Conversions API via GTM, and connected an automated n8n webhook workflow that triggered personalized WhatsApp discount codes when high-intent carts were abandoned.",
    execution: [
      "Deployed new Campaign Budget Optimization (CBO) architecture with broad demographic scaling",
      "Constructed 15 new UGC and benefit-driven video ad variations",
      "Installed server-side Conversions API (CAPI) with 100% event match quality",
      "Created an automated n8n webhook pipeline for real-time abandoned checkout SMS/WhatsApp triggers",
      "Redesigned the mobile checkout flow to eliminate 2 redundant friction steps"
    ],
    mainKPI: "ROAS increased from 2.1x to 4.3x while slashing CPA by 38%",
    results: [
      { label: "Return on Ad Spend (ROAS)", before: "2.1x", after: "4.3x", improvement: "+104%" },
      { label: "Cost Per Acquisition (CPA)", before: "$24.10", after: "$14.90", improvement: "-38.2%" },
      { label: "Conversion Rate (CVR)", before: "2.4%", after: "5.8%", improvement: "+141%" },
      { label: "Monthly Gross Revenue", before: "$32,500", after: "$94,200", improvement: "+189%" }
    ],
    tools: ["Meta Ads Manager", "n8n", "Google Tag Manager", "Shopify API", "GA4", "Klaviyo"],
    featured: true,
    lessonsLearned: [
      "Server-side conversion signals give Meta's algorithm the precise telemetry needed to find high-LTV buyers.",
      "Instant WhatsApp notifications within 5 minutes recover 3x more abandoned carts than delayed emails."
    ],
    clientQuote: {
      text: "Swochal transformed our ad account from an expensive gamble into our most predictable profit generator. His n8n automation for abandoned carts alone added $18k in pure profit.",
      author: "Marcus Vance",
      role: "Founder & Head of Growth, Velox Footwear"
    }
  },
  {
    id: "clinic_seo_automation",
    title: "82% Organic Traffic Surge & Automated Patient Lead Router",
    client: "Apex Specialist Dental & Wellness",
    industry: "Healthcare & Local Services",
    summary: "Executed comprehensive technical SEO audit, structured local schema, and deployed an autonomous WhatsApp AI booking agent that reduced response time to 15 seconds.",
    challenge: "The clinic was invisible in local Google search results for key high-value procedures, and incoming patient inquiries from Facebook and Google Ads sat unread for hours, resulting in lost bookings.",
    strategy: "Overhauled the website's technical architecture, injected medical procedure JSON-LD Schema markup, built location-specific service pages, and connected an n8n + OpenAI bot that automatically books appointments on Google Calendar.",
    execution: [
      "Fixed 84 crawl errors, canonical mismatches, and broken redirect chains on Search Console",
      "Optimized Core Web Vitals to achieve 96/100 Google Lighthouse score",
      "Authored 18 targeted procedural guides targeting long-tail patient search queries",
      "Built an n8n webhook agent connecting WhatsApp Business directly to Google Calendar and SMS confirmations",
      "Setup Google PPC call-only campaigns for emergency dental procedures"
    ],
    mainKPI: "+82% Organic Search Impressions & 3.2x booked patient appointments",
    results: [
      { label: "Monthly Organic Visitors", before: "2,400", after: "4,370", improvement: "+82.1%" },
      { label: "Inbound Lead Response Time", before: "3.5 hours", after: "18 seconds", improvement: "-99.1%" },
      { label: "Monthly Booked Patients", before: "42", after: "135", improvement: "+221%" },
      { label: "Cost Per Patient Booking", before: "$48.00", after: "$19.50", improvement: "-59.3%" }
    ],
    tools: ["Technical SEO", "n8n", "OpenAI API", "Google Search Console", "WhatsApp Business API", "Google PPC"],
    featured: true,
    lessonsLearned: [
      "In local healthcare, lead conversion is 80% determined by how quickly the clinic responds to the first inquiry.",
      "Schema markup for LocalBusiness and MedicalBusiness yields rich Google snippet star ratings that drive massive CTR gains."
    ],
    clientQuote: {
      text: "Our appointment calendar is fully booked 3 weeks in advance. The automated AI WhatsApp agent handles patient questions 24/7 seamlessly.",
      author: "Dr. Elena Rostova",
      role: "Clinical Director, Apex Wellness"
    }
  },
  {
    id: "saas_acquisition",
    title: "Cutting B2B SaaS CPA by 34% with Google Search & Meta AI Retargeting",
    client: "CloudPulse Analytics",
    industry: "B2B SaaS / Developer Tools",
    summary: "Replaced unfocused broad search bidding with high-intent exact match keywords and dynamic retargeting videos, boosting trial-to-paid conversions by 61%.",
    challenge: "CloudPulse was burning $12,000/month on generic search keywords with low trial activation and an unsustainable $185 Cost Per Qualified Lead (CPQL).",
    strategy: "Audited search term reports to eliminate $4,200/mo in negative keyword waste, rebuilt high-intent comparison landing pages, and implemented automated lead scoring in n8n to instantly alert the sales team.",
    execution: [
      "Restructured Google Ads into Single Keyword Ad Groups (SKAGs) and high-intent competitor comparison campaigns",
      "Implemented negative keyword lists with over 450 non-buying intent search terms",
      "Launched Meta Ads video retargeting showcasing interactive UI walkthroughs to trial signups",
      "Engineered an n8n workflow that calculates user product engagement score and syncs high-intent accounts to HubSpot"
    ],
    mainKPI: "CPQL reduced from $185 to $118 while doubling trial conversion rate",
    results: [
      { label: "Cost Per Qualified Lead (CPQL)", before: "$185", after: "$118", improvement: "-36.2%" },
      { label: "Trial-to-Paid Conversion", before: "4.1%", after: "6.8%", improvement: "+65.8%" },
      { label: "Monthly Qualified Pipeline", before: "$45,000", after: "$112,000", improvement: "+148%" },
      { label: "Wasted Ad Spend Eliminated", before: "$4,200/mo", after: "$180/mo", improvement: "-95.7%" }
    ],
    tools: ["Google Ads", "Meta Ads", "n8n", "HubSpot CRM", "Looker Studio", "Mixpanel"],
    featured: true,
    lessonsLearned: [
      "B2B buyers research extensively; retargeting with crisp product proof converts at 4x the rate of cold traffic.",
      "Automated lead scoring ensures enterprise sales reps only spend time on the top 15% most engaged prospects."
    ],
    clientQuote: {
      text: "Swochal cut our wasted ad budget on day one and helped us double our paying customers in under 90 days. Exceptional technical and marketing skill.",
      author: "Daniel K.",
      role: "Co-Founder & VP Growth"
    }
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "nsda",
    name: "Computer Operation Level 2",
    issuer: "National Skills Development Authority (NSDA)",
    date: "Certified",
    credentialId: "NSDA-NTVQF-L2-COMP",
    skillsCovered: ["Advanced Computer Operations", "Data Processing", "System Configuration", "Digital Workplace Standards"],
    verificationLink: "https://nsda.gov.bd",
    category: "Marketing",
    badgeIcon: "Award"
  },
  {
    id: "gp_academy",
    name: "1. AI Workflows & Agent",
    issuer: "Grameenphone Academy",
    date: "Certified",
    credentialId: "GPA-AI-WF-9824",
    skillsCovered: ["Autonomous AI Agents", "Workflow Orchestration", "LLM Prompt Architecture", "Enterprise AI Integration"],
    verificationLink: "https://grameenphone.academy",
    category: "AI",
    badgeIcon: "Cpu"
  },
  {
    id: "network_smarter",
    name: "Network Smarter With AI",
    issuer: "Professional AI Network",
    date: "Certified",
    credentialId: "NS-AI-PRO-2024",
    skillsCovered: ["AI-Driven Networking", "Automated Outreach", "Personalized Communication", "Intelligent Relationship Mapping"],
    verificationLink: "https://linkedin.com",
    category: "AI",
    badgeIcon: "Share2"
  },
  {
    id: "ostad_academy",
    name: "Create Agent & n8n",
    issuer: "Ostad Academy",
    date: "Certified",
    credentialId: "OSTAD-N8N-AGENT-77",
    skillsCovered: ["n8n Node Development", "Autonomous Task Routing", "API Connectors", "Webhook Security", "Automated CRM Sync"],
    verificationLink: "https://ostad.app",
    category: "Automation",
    badgeIcon: "Bot"
  },
  {
    id: "simplilearn_n8n",
    name: "n8n Course: No Code AI Agent Builder",
    issuer: "Simplilearn | Skillup",
    date: "Certified",
    credentialId: "SKILLUP-N8N-NCA-102",
    skillsCovered: ["No-Code AI Architectures", "Multi-Agent Collaboration", "LangChain & Vector Store Connectors", "Production Deployment"],
    verificationLink: "https://simplilearn.com/skillup",
    category: "AI",
    badgeIcon: "Sparkles"
  },
  {
    id: "meta_marketing_pro",
    name: "Meta Performance Advertising & Media Buying",
    issuer: "Meta Certified Professional Standards",
    date: "Certified",
    credentialId: "META-PERF-MEDIA-55",
    skillsCovered: ["Advantage+ Campaigns", "Creative Testing Arrays", "Server-Side Conversions API", "Custom Audience LTV Modeling"],
    verificationLink: "https://facebook.com/business",
    category: "Advertising",
    badgeIcon: "Target"
  },
  {
    id: "google_analytics_pro",
    name: "Google Analytics 4 (GA4) Certification",
    issuer: "Google Skillshop",
    date: "Certified",
    credentialId: "GOOG-GA4-CERT-884",
    skillsCovered: ["Event Tracking", "Custom Dimensions", "Conversion Funnels", "BigQuery Attribution", "Looker Studio Blends"],
    verificationLink: "https://skillshop.google.com",
    category: "Analytics",
    badgeIcon: "BarChart3"
  },
  {
    id: "technical_seo_hub",
    name: "Advanced Technical SEO & Site Auditing",
    issuer: "SEO Expert Standards Hub",
    date: "Certified",
    credentialId: "SEO-EXP-TECH-AUDIT",
    skillsCovered: ["Core Web Vitals", "Schema Microdata", "Search Console Indexing", "JavaScript SEO", "Crawl Budget Optimization"],
    verificationLink: "https://developers.google.com/search",
    category: "SEO",
    badgeIcon: "Search"
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "n8n_lead_engine",
    title: "Autonomous WhatsApp & CRM Lead Router in n8n",
    category: "AI Automation",
    description: "Multi-branch n8n workflow that captures incoming Facebook Lead Ads, scores intent using an LLM node, and notifies sales reps on WhatsApp in 15 seconds.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tools: ["n8n", "OpenAI API", "WhatsApp API", "Meta Webhooks", "PostgreSQL"],
    result: "Reduced lead contact latency from 4 hours to 18 seconds; boosted close rate by 34%.",
    metrics: ["18s Response Latency", "34% Higher Close Rate", "5,000+ Monthly Leads Processed"]
  },
  {
    id: "ecommerce_omnichannel",
    title: "D2C Brand Omnichannel Ad Scaling ($1.2M Spend)",
    category: "Marketing Campaigns",
    description: "End-to-end Meta and Google Ads strategy with video creative testing, CAPI server-side tracking, and automated inventory sync.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tools: ["Meta Ads", "Google Shopping", "GTM Server-side", "Shopify Plus", "Looker Studio"],
    result: "Achieved sustained 3.8x blended ROAS during Q4 holiday shopping surge.",
    metrics: ["3.8x Blended ROAS", "$1.2M Ad Revenue", "-28% Customer Acquisition Cost"]
  },
  {
    id: "seo_programmatic_portal",
    title: "Technical SEO & Programmatic Indexing Overhaul",
    category: "SEO Projects",
    description: "Resolved 200+ crawl errors, rebuilt XML sitemaps, injected nested Schema.org microdata, and created high-authority topic clusters.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tools: ["Google Search Console", "SEMrush", "Python Scraper", "Screaming Frog", "Next.js"],
    result: "Surged organic non-brand traffic by 82% in 5 months; doubled top 3 keyword rankings.",
    metrics: ["+82% Organic Visitors", "140+ Keywords in Top 3", "96 Lighthouse Performance"]
  },
  {
    id: "python_price_monitor",
    title: "Automated Competitor Pricing & Ad Intelligence Scraper",
    category: "AI Automation",
    description: "Python script that monitors competitor ad libraries, product pricing shifts, and inventory levels, sending automated daily digest briefs to Slack.",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tools: ["Python", "BeautifulSoup", "Selenium", "Slack API", "Cron / Cloud Functions"],
    result: "Provided real-time pricing advantages, enabling client to adjust ad bid pricing dynamically.",
    metrics: ["Daily 6AM Intelligence Digest", "12 Competitors Monitored", "Zero Manual Overhead"]
  },
  {
    id: "analytics_executive_cockpit",
    title: "Executive Looker Studio Growth Dashboard",
    category: "Analytics Dashboards",
    description: "Blended real-time dashboard aggregating Google Ads, Meta Ads, Shopify revenue, and Stripe refunds into a single single-pane-of-glass truth source.",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    tools: ["Looker Studio", "Google BigQuery", "GA4 API", "Supermetrics", "Meta API"],
    result: "Gave founders real-time visibility on true net margin and customer lifetime value.",
    metrics: ["Real-time Attribution", "Blended Net MER Tracking", "100% Automated Reporting"]
  },
  {
    id: "ai_social_engine",
    title: "Generative AI Social Media Content Multiplier",
    category: "Creative Projects",
    description: "Autonomous workflow taking 1 raw long-form topic prompt and generating 5 platform-tailored posts with carousel copy, hashtags, and CTA hooks.",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    tools: ["OpenAI GPT-4o", "n8n", "Canva API", "Buffer API", "Google Sheets"],
    result: "Automated 30 days of branded social content in 45 minutes; 3.2x higher organic engagement.",
    metrics: ["30 Days Content in 45 Mins", "+220% Organic Reach", "Zero Writer's Block"]
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test_1",
    name: "Marcus Vance",
    position: "Founder & CEO",
    company: "Velox Footwear Co.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    text: "Swochal is in a league of his own. He doesn't just run ads—he engineered our entire data pipeline, fixed our broken tracking with server-side CAPI, and built n8n workflows that automated our lead recovery. Our ROAS spiked from 2.1x to 4.3x within 60 days.",
    verified: true,
    metricAchieved: "+147% ROAS Lift"
  },
  {
    id: "test_2",
    name: "Dr. Elena Rostova",
    position: "Clinical Director",
    company: "Apex Specialist Dental",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    text: "Before working with Swochal, our clinic was losing dozens of patient inquiries because our staff couldn't answer messages fast enough. He built an automated WhatsApp AI booking bot that responds in 15 seconds and books them straight into our calendar. Truly remarkable.",
    verified: true,
    metricAchieved: "3.2x Patient Bookings"
  },
  {
    id: "test_3",
    name: "Daniel Krause",
    position: "VP of Growth",
    company: "CloudPulse Analytics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    text: "His deep technical computer science background combined with performance marketing instinct is a rare superpower. He audited our Google Ads, purged thousands of dollars in negative keyword waste, and doubled our qualified SaaS trial pipeline.",
    verified: true,
    metricAchieved: "-36% SaaS CPQL"
  },
  {
    id: "test_4",
    name: "Sarah Jenkins",
    position: "E-commerce Director",
    company: "Luxe Living Studio",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    rating: 5,
    text: "Swochal took our team through a complete workflow transformation. We now have automated reporting dashboards and AI lead scoring that saves us over 30 hours every single week. Highly recommend him for any brand serious about scaling.",
    verified: true,
    metricAchieved: "30+ Hrs Saved / Wk"
  }
];

export const workProcessSteps: WorkProcessStep[] = [
  {
    step: 1,
    title: "Understand",
    tagline: "Deep Business Discovery",
    description: "We audit your business model, customer lifetime value (LTV), target margins, past campaign data, and historical bottlenecks to define clear growth benchmarks.",
    icon: "Compass",
    keyOutputs: ["Business Model Audit", "LTV & Margin Thresholds", "Core Growth KPIs"]
  },
  {
    step: 2,
    title: "Analyze",
    tagline: "Data & Telemetry Triage",
    description: "Deep dive into your Google Analytics 4, Meta Pixel, server tracking, conversion events, and Search Console to uncover drop-offs and wasted spend.",
    icon: "BarChart3",
    keyOutputs: ["GA4 & Pixel Health Check", "Leakage Point Mapping", "Ad Spend Waste Report"]
  },
  {
    step: 3,
    title: "Strategize",
    tagline: "Architecture & Blueprints",
    description: "Design the end-to-end full-funnel marketing architecture, creative testing roadmap, keyword intent matrix, and workflow automation diagrams.",
    icon: "Layers",
    keyOutputs: ["Full-Funnel Media Blueprint", "n8n Workflow Flowchart", "Creative Angle Matrix"]
  },
  {
    step: 4,
    title: "Execute",
    tagline: "Precision Campaign Launch",
    description: "Launch high-converting Meta Ads, Google PPC campaigns, technical SEO schema fixes, and server-side conversion tracking with disciplined QA.",
    icon: "Rocket",
    keyOutputs: ["Live Ad Campaigns", "Technical Schema Injected", "Conversion Tracking Verified"]
  },
  {
    step: 5,
    title: "Automate",
    tagline: "n8n & AI Integration",
    description: "Deploy robust n8n pipelines, webhook triggers, AI lead routing bots, automated customer SMS/WhatsApp follow-ups, and live Looker Studio reporting.",
    icon: "Cpu",
    keyOutputs: ["Autonomous n8n Pipelines", "WhatsApp/SMS Bot Live", "Real-Time KPI Dashboard"]
  },
  {
    step: 6,
    title: "Optimize",
    tagline: "Algorithmic Refinement",
    description: "Continually prune underperforming ad sets, test winning creative hooks, tweak prompt temperatures, and double down on highest ROAS keywords.",
    icon: "Sliders",
    keyOutputs: ["Negative Keyword Expansion", "Winner Ad Scaling", "Prompt & Node Refinement"]
  },
  {
    step: 7,
    title: "Scale",
    tagline: "Predictable Profitable Growth",
    description: "Systematically increase budget allocations across validated winning channels, expand to lookalike audiences, and compound organic authority.",
    icon: "TrendingUp",
    keyOutputs: ["Budget Multiplier", "Lookalike Expansion", "Predictable Monthly Revenue"]
  }
];
