
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
  iframeUrl?: string;   // 新增：支持 Bilibili 等外部嵌入视频
  description?: string; 
  points?: string[];    
  isGrid?: boolean;
  isSlider?: boolean;
  isHeader?: boolean;   
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

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description?: string;
  companyIntro?: string;
  reportingTo?: string;
  reasonForLeaving?: string;
  responsibilities?: string[];
  achievements?: string[];
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

export interface SiteContent {
  nav: {
    portfolios: string;
    career: string;
    connect: string;
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
  footer: {
    rights: string;
  };
  experience: ExperienceItem[];
  skills: SkillItem[];
  projects: Project[];
  aiContext: string;
}
