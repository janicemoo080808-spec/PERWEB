
export type CategoryType = 
  | 'ALL' 
  | 'ACTIVITY_VISUALS'
  | 'BRAND_ECOSYSTEM' 
  | 'LUXURY_DESIGN' 
  | 'AUTOMOTIVE_DESIGN' 
  | 'FNB_COMMERCIAL' 
  | 'AI_CREATIVE';

export type Language = 'EN' | 'CN';

export type SubCategoryType = 
  | 'STRATEGY' 
  | 'IDENTITY' 
  | 'CAMPAIGN' 
  | 'SYSTEMS' 
  | 'UX_DESIGN'
  | 'CONTENT_CREATION'
  | 'CMF_DESIGN';

export interface ProjectSection {
  title: string;
  label: string;
  icon: string;
  images: string[];
  videoUrl?: string;    
  iframeUrl?: string;   
  description?: string; 
  points?: string[];    
  isGrid?: boolean;
  isSlider?: boolean;
  isHeader?: boolean;   
  isCircularGallery?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: CategoryType;
  subCategory: SubCategoryType;
  description: string;
  imageUrl: string;
  videoUrl?: string; 
  sections: ProjectSection[];
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
  imageUrl: string;
  sections: {
    subtitle: string;
    text: string;
    image?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  companyIntro?: string;
  reportingTo?: string;
  reasonForLeaving?: string;
  responsibilities?: string[];
  achievements?: string[];
}

export interface EducationItem {
  school: string;
  period: string;
  degrees: string[];
}

export interface CertificateItem {
  year: string;
  name: string;
  issuer?: string;
  focus?: string;
  isPriority?: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export interface AwardItem {
  name: string;
  level: string;
  desc: string;
}

export interface SiteContent {
  nav: {
    portfolios: string;
    career: string;
    credentials: string;
    awards: string;
    blog: string;
    connect: string;
    downloadCv: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    available: string;
  };
  resume: {
    aboutTitle: string;
    aboutText: string;
    stats: {
      exp: string;
      projects: string;
      awards: string;
    };
    skillsTitle: string;
    experienceTitle: string;
    eduTitle: string;
    certTitle: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    filters: {
      all: string;
      activity: string;
      brand_ecosystem: string;
      luxury: string;
      automotive: string;
      fnb: string;
      ai_drama: string;
    };
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
  };
  footer: {
    rights: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
  skills: SkillItem[];
  projects: Project[];
  blogPosts: BlogPost[];
  aiContext: string;
  awards?: AwardItem[];
}
