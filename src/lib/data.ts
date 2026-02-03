// ============================================
// PORTFOLIO DATA - All content in one place
// Update this file to customize your portfolio
// ============================================

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  category: "ai" | "web" | "research" | "systems" | "other";
  featured: boolean;
  github?: string;
  demo?: string;
  paper?: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  period: string;
  gpa?: string;
  coursework?: string[];
  achievements?: string[];
  logo?: string;
  transcriptUrl?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  abstract?: string;
  paperUrl?: string;
  codeUrl?: string;
  status?: string;
}

export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "concept";
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Interest {
  name: string;
  icon: string;
  description: string;
}

export interface Quote {
  text: string;
  author: string;
}

// ============================================
// PERSONAL INFO
// ============================================

export const personalInfo = {
  name: "Sankalp Kashyap",
  firstName: "Sankalp",
  lastName: "Kashyap",
  title: "Software Engineer & AI Researcher",
  tagline: "Building intelligent systems at the intersection of research and engineering",
  email: "sankalp112kashyap@gmail.com",
  phone: "+",
  location: "Davis, California",
  locationUrl: "https://www.google.com/maps/place/Davis,+CA",
  about: `I'm a Software Engineer and AI Researcher pursuing my Master's in Computer Science at UC Davis.

My journey spans from building nano-satellites under ISRO guidance at Manipal to adding guardrails in the encryption systems for AWS DynamoDB's multi-Region Strongly Consistent tables.

At DECAL Lab, I'm building RepoWise — an NSF and Sloan Foundation-funded LLM-powered tool for OSS repository analysis.

I specialize in distributed systems, machine learning, and full-stack development. My work at Danske Bank earned me the "Star of the Quarter" award among 1500+ employees, where I architected micro-frontend systems scaling across 200+ applications.

I'm passionate about turning complex research ideas into production-ready systems that make a real impact.`,
  resumeUrl: "https://drive.google.com/file/d/1tJ4j5nFdyItulGIHhiRLFR-01GEAj2Vz/view?usp=drive_link",
  avatarUrl: "/images/me.jpg",
};

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sankalp-kashyap",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/sankalp112kashyap",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:sankalp112kashyap@gmail.com",
    icon: "mail",
  },
];

// ============================================
// EXPERIENCE
// ============================================

export const experiences: Experience[] = [
  {
    id: "aws",
    role: "Software Development Engineer Intern",
    company: "Amazon Web Services (DynamoDB)",
    companyUrl: "https://aws.amazon.com/blogs/aws/build-the-highest-resilience-apps-with-multi-region-strong-consistency-in-amazon-dynamodb-global-tables/",
    location: "Seattle, WA",
    period: "June 2025 - Sept 2025",
    description:
      "Worked on DynamoDB's Multi-region Global Tables team, designing critical security infrastructure for one of AWS's most essential distributed database services.",
    achievements: [
      "Designed and implemented encryption-at-rest guardrails for DynamoDB Multi-region Global Tables in Java",
      "Serviced DynamoDB's 1M+ customer base with 99.999% SLA reliability through robust error handling",
      "Implemented cryptographic verification mechanisms for secure key exchange between distributed nodes",
      "Built live monitoring dashboard for security alarms across the distributed system",
      "Authored comprehensive design documentation covering signature validation, checksum verification, and KMS-based approaches",
    ],
    technologies: ["Java", "AWS", "DynamoDB", "Distributed Systems", "Cryptography", "KMS"],
  },
  {
    id: "decal",
    role: "Graduate Student Researcher",
    company: "DECAL Lab, UC Davis",
    companyUrl: "https://decallab.cs.ucdavis.edu/",
    location: "Davis, CA",
    period: "Sept 2024 - Present",
    description:
      "Conducting research on LLM-powered tools for open-source software analysis under Prof. Vladimir Filkov, funded by NSF and Sloan Foundation.",
    achievements: [
      "Built RepoWise, an LLM-powered conversational framework for OSS repository analysis",
      "Implemented intent classification pipeline achieving 97.6% accuracy on 250 manually labeled queries",
      "Developed dual retrieval system combining semantic RAG and structured pipelines for GitHub metadata",
      "Deployed Mistral 7B via Ollama for privacy-preserving local inference",
      "Paper under submission to FSE 2026",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "LLMs",
      "RAG",
      "FastAPI",
      "React",
      "ChromaDB",
      "Mistral 7B",
    ],
  },
  {
    id: "danske-it",
    role: "Technology Analyst",
    company: "Danske IT (Acquired by Infosys)",
    companyUrl: "https://www.infosys.com/",
    location: "Bangalore, India",
    period: "Sept 2023 - June 2024",
    description:
      "Led frontend development and migration initiatives during Infosys acquisition, recognized as top performer among 1500+ employees.",
    achievements: [
      "Developed modern React web-portal from scratch enabling multiple teams to host applications in Danske Bank's advisor portal",
      "Awarded \"Star of the Quarter\" (selected from 1500+ employees) for Advisor Portal contributions",
      "Led frontend migration of 'New Advisor Portal' post-acquisition, integrating with new Azure DevOps infrastructure",
      "Served as Scrum facilitator for 5 months, leading agile events and fostering collaborative environment",
      "Improved turnaround time by 18% for portal users",
    ],
    technologies: ["React", "TypeScript", "Azure DevOps", "Agile/Scrum", "CI/CD"],
  },
  {
    id: "danske-bank",
    role: "Software Engineer I → Software Engineer II",
    company: "Danske Bank",
    companyUrl: "https://danskebank.com/",
    location: "Bangalore, India",
    period: "Feb 2021 - Aug 2023",
    description:
      "Full-stack engineer building critical banking infrastructure, promoted within first year for exceptional performance and technical leadership.",
    achievements: [
      "Architected micro-frontend system for 'New Advisor Portal' scaling across 200+ applications with reusable UI components",
      "Owned end-to-end CI/CD pipelines using Azure and Git, reducing deployment time by 48% (110 to 55 mins)",
      "Containerized applications with Docker and orchestrated deployments via Kubernetes",
      "Developed 20 widgets (web-apps) including Accounts and Cards for personalized advisory solutions",
      "Built responsive referral tool generating 2 new potential customers weekly",
      "Boosted developer productivity by 400+ engineering hours annually through component library",
      "Reduced post-release issues by 22% through code reviews and integration testing",
    ],
    technologies: ["React", "TypeScript", "Java", "Spring Boot", "Docker", "Kubernetes", "Azure", "Microservices"],
  },
  {
    id: "upskill",
    role: "Software Development Engineer Intern",
    company: "Upskill Data Solution Pvt. Ltd",
    location: "Remote, India",
    period: "May 2020 - Aug 2020",
    description:
      "Built backend microservices for healthcare management systems using Node.js and Express.",
    achievements: [
      "Developed and deployed RESTful API microservices using Node.js and Express",
      "Built hospital information management system with efficient data access layers",
      "Designed normalized MySQL databases with optimized SQL queries and triggers",
    ],
    technologies: ["Node.js", "Express", "MySQL", "REST APIs", "Microservices"],
  },
  {
    id: "imd",
    role: "Geospatial Data Science Intern",
    company: "India Meteorological Department",
    companyUrl: "https://mausam.imd.gov.in/",
    location: "New Delhi, India",
    period: "May 2019 - July 2019",
    description:
      "Worked on satellite imagery processing and geospatial data integration for weather monitoring systems.",
    achievements: [
      "Developed web service for serving latest satellite images of INSAT 3D satellite",
      "Integrated and georeferenced satellite data into WGS84 projection system using ArcGIS Pro",
      "Processed and visualized meteorological data for weather forecasting applications",
    ],
    technologies: ["Python", "ArcGIS Pro", "Geospatial Data", "Satellite Imagery", "WGS84"],
  },
];

// ============================================
// PROJECTS
// ============================================

export const projects: Project[] = [
  {
    id: "repowise",
    title: "RepoWise",
    description:
      "An NSF and Sloan Foundation-funded LLM-powered conversational framework for analyzing open-source software repositories.",
    longDescription:
      "RepoWise enables natural-language interaction with OSS repositories, combining repository mining with AI-driven reasoning. It features a 5-category intent classification pipeline (97.6% accuracy), dual retrieval engines for semantic and structured data, and anti-hallucination rules with evidence-backed responses. Outperformed ChatGPT, Claude, and GitHub Copilot on repository-centric tasks.",
    technologies: ["React", "FastAPI", "Mistral 7B", "ChromaDB", "RAG", "Python", "LangChain"],
    category: "ai",
    featured: true,
    demo: "https://repowise.github.io/RepoWise-website",
  },
  {
    id: "healthcryption",
    title: "HealthCryption",
    description:
      "HIPAA-compliant healthcare data management system with zero-knowledge encryption architecture.",
    longDescription:
      "End-to-end encrypted healthcare system using AES-256-GCM for patient data, Scrypt/Argon2id for key derivation, and X25519 for key exchange. Features MinIO cluster with EC:2 erasure coding (tolerates 2 node failures), cryptographic access control, and hash-chain audit logs. Achieved 94% code coverage and 100% test pass rate.",
    technologies: ["React", "FastAPI", "PostgreSQL", "MinIO", "AES-256-GCM", "Web Crypto API", "Docker"],
    category: "systems",
    featured: true,
    github: "https://github.com/HealthCryption",
  },
  {
    id: "catheter-classification",
    title: "Medical Catheter Position Classification",
    description:
      "Deep learning model for multi-label classification of catheter positions in chest X-rays with 93% accuracy.",
    longDescription:
      "Built medical imaging classifier using custom ResNeXt50 architecture on 40K chest X-ray images from RANZCR-CLIP dataset. Developed novel combined anatomical and intensity-based masking approach that improved AUC from 0.91 to 0.93. Detects catheter positions across 11 categories including ETT, NGT, CVC, and Swan Ganz catheters.",
    technologies: ["PyTorch", "ResNeXt50", "Transfer Learning", "Medical Imaging", "Python"],
    category: "ai",
    featured: true,
  },
  {
    id: "coincensus",
    title: "Coincensus",
    description:
      "Blockchain-based expense tracking platform with real-time balance settlements using ResilientDB.",
    longDescription:
      "Full-stack web application for managing group expenses using blockchain technology. Features transparent immutable ledger for all transactions, real-time balance settlements, group and friend management, and equal/custom expense splitting. Built on ResilientDB framework for decentralized transaction processing.",
    technologies: ["React", "TypeScript", "FastAPI", "ResilientDB", "TailwindCSS", "SQLite"],
    category: "web",
    featured: true,
    github: "https://github.com/sankalp112kashyap/Coinsensus-app-frontend",
  },
  {
    id: "radreport",
    title: "RadReport",
    description:
      "Automated radiology report generation from chest X-rays using vision-language models and prompt-tuning.",
    longDescription:
      "Parameter-efficient alternative to traditional encoder-decoder models for generating clinically accurate radiology reports. Uses frozen MedCLIP/BLIP-2 vision encoders with T5/GPT-2 language models, integrating CheXpert medical priors. Features section-aware generation for findings and impressions sections.",
    technologies: ["PyTorch", "MedCLIP", "BLIP-2", "T5", "Vision-Language Models", "Prompt-Tuning"],
    category: "research",
    featured: false,
  },
  {
    id: "parikshit-satellite",
    title: "Parikshit Nano-Satellite",
    description:
      "2U nano-satellite developed in collaboration with ISRO scientists and Manipal professors (Jan 2018 - Oct 2018).",
    longDescription:
      "Member of the Attitude Determination and Control Subsystem team at MAHE's Student Satellite Team. Collaborated with engineering students, ISRO scientists, and MAHE professors. Developed C++ software system to control satellite's live orientation and position by interfacing with actuators, thrusters, and sensors. Carried out Reaction Wheel Failure Analysis and assisted in Motor Modeling to achieve pointing stability.",
    technologies: ["C++", "Embedded Systems", "PID Control", "MATLAB", "Satellite Systems", "ADCS"],
    category: "systems",
    featured: true,
  },
  {
    id: "allergy-card",
    title: "Allergy Card",
    description:
      "iOS app enabling emergency access to patient allergy information via NFC cards.",
    longDescription:
      "Developed iOS application in collaboration with medical professionals and software engineers. Enables medical doctors to quickly access patient allergy information from NFC cards during emergencies. Features secure data storage and intuitive UI for critical healthcare scenarios.",
    technologies: ["Swift", "iOS", "NFC", "UIKit", "Healthcare"],
    category: "other",
    featured: false,
  },
];

// ============================================
// EDUCATION
// ============================================

export const education: Education[] = [
  {
    id: "ucdavis",
    degree: "Master of Science",
    field: "Computer Science",
    institution: "University of California, Davis",
    institutionUrl: "https://www.ucdavis.edu/",
    location: "Davis, CA",
    period: "Sept 2024 - May 2026",
    gpa: "4.0 / 4.0",
    coursework: [
      "Machine Learning and Discovery",
      "Distributed Database Systems",
      "AI for Health",
      "AI Vision-Language Research",
      "Design and Analysis of Algorithms",
      "Software Engineering",
      "Computer and Information Security",
    ],
    achievements: [
      "Graduate Student Researcher at DECAL Lab",
      "Building RepoWise - NSF/Sloan Foundation funded research",
      "Focus on Vision-Language AI and LLM Applications",
    ],
    transcriptUrl: "/transcripts/ucdavis-transcript.pdf",
  },
  {
    id: "manipal",
    degree: "Bachelor of Technology",
    field: "Information Technology (Minor: Big Data)",
    institution: "Manipal Institute of Technology",
    institutionUrl: "https://manipal.edu/mit.html",
    location: "Manipal, India",
    period: "July 2017 - July 2021",
    gpa: "9.12 / 10 (Rank: 13 out of 166)",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "Object Oriented Programming",
      "Big Data Analytics",
      "Machine Learning",
      "Distributed Systems",
      "Calculus, Probability, Linear Algebra",
    ],
    achievements: [
      "Parikshit Nano-Satellite project with ISRO collaboration",
      "Alumni Talk Speaker - ICT Department orientation (July 2024)",
      "Event Organizer - Revels 2019 (National-level cultural fest)",
      "Active in technical clubs and hackathons",
    ],
    transcriptUrl: "/transcripts/manipal-transcript.pdf",
  },
];

// ============================================
// PUBLICATIONS / RESEARCH
// ============================================

export const publications: Publication[] = [
  {
    id: "repowise-paper",
    title: "RepoWise: A Conversational Framework for Mining and Reasoning About Project Repositories",
    authors: "Sankalp Kashyap, et al.",
    venue: "FSE 2026",
    year: 2026,
    abstract:
      "A domain-aware conversational framework powered by LLMs that enables natural-language interaction with open-source software repositories, combining repository mining with AI-driven reasoning to surface insights into project documentation, governance, and sustainability.",
    status: "Under Submission",
  },
];

// ============================================
// SKILLS
// ============================================

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "Java", "Go", "C++", "TypeScript", "JavaScript", "C#", "SQL", "Swift", "R"],
  },
  {
    name: "AI / ML",
    skills: [
      "PyTorch",
      "NumPy",
      "Pandas",
      "LLMs",
      "RAG",
      "Transformers",
      "Computer Vision",
      "NLP",
      "Deep Learning",
    ],
  },
  {
    name: "Web & Backend",
    skills: [
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "Spring Boot",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Azure DevOps", "CI/CD", "Git"],
  },
  {
    name: "Databases",
    skills: ["DynamoDB", "PostgreSQL", "MongoDB", "MySQL", "ChromaDB", "Redis"],
  },
  {
    name: "Research Areas",
    skills: [
      "Vision-Language Models",
      "Multi-modal AI",
      "LLM Agents",
      "Retrieval-Augmented Generation",
      "Distributed Systems",
    ],
  },
];

// ============================================
// RESEARCH INTERESTS
// ============================================

export const researchInterests: Interest[] = [
  {
    name: "Large Language Models",
    icon: "brain",
    description:
      "Building LLM-powered applications with RAG, prompt engineering, and domain-specific fine-tuning",
  },
  {
    name: "Vision-Language AI",
    icon: "eye",
    description:
      "Multi-modal models that understand both visual and textual information for medical imaging and beyond",
  },
  {
    name: "AI Agents",
    icon: "bot",
    description:
      "Autonomous AI systems that can reason, plan, and execute complex tasks with tool use",
  },
  {
    name: "Distributed Systems",
    icon: "database",
    description:
      "Scalable, fault-tolerant systems with strong consistency guarantees and security",
  },
];

// ============================================
// PERSONAL INTERESTS / HOBBIES
// ============================================

export const personalInterests: Interest[] = [
  {
    name: "Travel",
    icon: "plane",
    description: "Exploring new places, cultures, and cuisines around the world",
  },
  {
    name: "Reading",
    icon: "book-open",
    description:
      "Science fiction, philosophy, and technology books that expand perspectives",
  },
  {
    name: "Photography",
    icon: "camera",
    description: "Capturing moments and stories through the lens",
  },
];

// ============================================
// FAVORITE QUOTES
// ============================================

export const favoriteQuotes: Quote[] = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
];

// ============================================
// NAVIGATION
// ============================================

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
