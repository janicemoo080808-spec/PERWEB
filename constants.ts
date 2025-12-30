
import { SiteContent, Project, ExperienceItem, SkillItem } from './types';

export const BACKGROUND_MUSIC_URL = "https://upload.wikimedia.org/wikipedia/commons/1/15/Erik_Satie_-_Gymnop%C3%A9die_No._1.mp3"; 

const SKILLS_COMMON: SkillItem[] = [
  { name: 'Brand Strategy', level: 98 },
  { name: 'Visual Identity', level: 96 },
  { name: 'Industrial Aesthetic', level: 94 },
  { name: 'AI Creative Flow', level: 95 },
];

// --- PROJECT SECTIONS ---

const TOKEN2049_SECTIONS = [
  { title: 'TOKEN 2049: Global Presence', label: 'EVENT VISUALS', icon: 'Globe', images: ['https://img.heliar.top/file/1767074381181_6.png'] },
  { title: 'Interactive Booth Design', label: 'SPACE DESIGN', icon: 'Layers', images: ['https://img.heliar.top/file/1767074376988_Brand.png'] }
];

const CRYDIT_SECTIONS = [
  { title: 'Core Visual Identity Standard', label: 'BRAND DNA', icon: 'Hexagon', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326722.3govkhorey.webp'] },
  { title: 'Strategic Positioning & Brand Manual', label: 'BRAND STRATEGY', icon: 'BookOpen', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/1.2vf7y6ub45.webp'] },
  { title: 'Digital Portal & Official Hub', label: 'WEB ARCHITECTURE', icon: 'Globe', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/4.232cghnb0s.webp'] },
  { title: 'Fintech Core Product Interface', label: 'APP INTERFACE', icon: 'Smartphone', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/22.8ok67ird05.webp'] },
  { title: 'Authority PR & Global Recognition', label: 'MEDIA BACKING', icon: 'FileText', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/44.9ddfrjew0e.webp'] },
  { title: 'Social Narrative & IP Character', label: 'SOCIAL VOICE', icon: 'Twitter', isSlider: true, images: ['https://img.heliar.top/file/1767074381181_6.png', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image-2475.4ubeojcaob.webp', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/卡戴珊-16.25.00.6f15o09i52.webp'] }
];

const LUXURY_SECTIONS = [
  { title: 'Luxury Editorial: WeChat Narrative', label: 'EDITORIAL EXPERIENCE', icon: 'Camera', isSlider: true, images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame.9o09kpepxt.webp', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-1.6f15o1r8b3.webp', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2.9rjvif7snh.webp'] }
];

const INTU_SECTIONS = [
  { 
    title: 'Visual Identity & Design Systems', 
    label: 'PHASE 03: VISUAL LOGIC', 
    icon: 'Hexagon', 
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/61b75b229825189.686c03868bc97.39lnp5zjeb.webp'
    ] 
  },
  { 
    title: 'Brand Definition & Core Narrative', 
    label: 'PHASE 02: CORE DNA', 
    icon: 'Layers', 
    isSlider: true, 
    images: [
      'https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1920',
      'https://images.unsplash.com/photo-1617788130034-783305574c10?q=80&w=1920'
    ] 
  }
];

const PROJECTS_CN: Project[] = [
  { 
    id: 'intu-brand-strategy', 
    title: 'INTU: 品牌定义与传播策略全案', 
    category: 'AUTOMOTIVE_DESIGN', 
    subCategory: 'STRATEGY', 
    description: '深耕汽车行业叙事，从底层逻辑重构品牌生命力。定义未来出行的商业美学标准。', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/61b75b229825189.686c03868bc97.39lnp5zjeb.webp', 
    tags: ['汽车品牌', '传播策略', 'CMF策略', 'INTU'], 
    sections: INTU_SECTIONS as any 
  },
  { 
    id: 'token-2049-visuals', 
    title: 'TOKEN 2049 全球峰会视觉呈现', 
    category: 'ACTIVITY_VISUALS', 
    subCategory: 'CAMPAIGN', 
    description: '主导大型国际峰会视觉体系，在5万+人次的流量中心建立品牌权威感。', 
    imageUrl: 'https://img.heliar.top/file/1767074381181_6.png', 
    tags: ['展会视觉', '空间交互', '大型活动'], 
    sections: TOKEN2049_SECTIONS as any 
  },
  { id: 'crydit-brand-narrative', title: 'Crydit: 品牌全生态系统构建', category: 'BRAND_ECOSYSTEM', subCategory: 'STRATEGY', description: '从底层视觉标准到全球权威背书，构建链接高端金融科技与生活方式的完整品牌叙事。', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/LIifestyle3.8z700n5tjh.webp', tags: ['品牌全案', '金融科技', 'Web3'], sections: CRYDIT_SECTIONS as any },
  { id: 'luxury-design-paradigm', title: '奢侈品美学范式：视觉与内容设计', category: 'LUXURY_DESIGN', subCategory: 'IDENTITY', description: '深耕 LVMH 美学体系，专注于顶级奢侈品牌公众号视觉叙事，定义卓越的内容策略。', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/cody-gallo-toe53OJv7Kg-unsplash.eszjbryme.jpg', tags: ['奢侈品美学', '公众号策略', '高端叙事'], sections: LUXURY_SECTIONS as any },
  { id: 'fnb-commercial-dessert', title: '餐饮快消商业视觉：品牌溢价设计', category: 'FNB_COMMERCIAL', subCategory: 'IDENTITY', description: '精准捕捉消费心理，通过高情感共鸣的视觉系统提升甜品品牌的商业溢价空间。', imageUrl: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1920', tags: ['餐饮视觉', '消费心理', '商业闭环'], sections: [] as any },
  { id: 'ai-creative-drama', title: 'AI 短剧内容与视觉创意', category: 'AI_CREATIVE', subCategory: 'CONTENT_CREATION', description: '利用前沿生成式 AI 技术，重塑短剧制作工作流，打造具有电影感的极致内容体验。', imageUrl: 'https://images.unsplash.com/photo-1677442135968-356c9d09c3a3?q=80&w=1920', tags: ['AI 生成', '创意流', '内容叙事'], sections: [] as any }
];

const PROJECTS_EN: Project[] = [
  { 
    id: 'intu-brand-strategy', 
    title: 'INTU: Brand Definition & Communication', 
    category: 'AUTOMOTIVE_DESIGN', 
    subCategory: 'STRATEGY', 
    description: 'Strategic blueprint for automotive brand positioning and global narrative construction.', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/61b75b229825189.686c03868bc97.39lnp5zjeb.webp', 
    tags: ['Automotive', 'CMF Strategy', 'INTU'], 
    sections: INTU_SECTIONS as any 
  },
  { 
    id: 'token-2049-visuals', 
    title: 'TOKEN 2049 Global Event Visuals', 
    category: 'ACTIVITY_VISUALS', 
    subCategory: 'CAMPAIGN', 
    description: 'Leading visual systems for international summits, establishing brand authority in high-traffic environments.', 
    imageUrl: 'https://img.heliar.top/file/1767074381181_6.png', 
    tags: ['Event Visuals', 'Space Design', 'Global'], 
    sections: TOKEN2049_SECTIONS as any 
  },
  { id: 'crydit-brand-narrative', title: 'Crydit: Brand Ecosystem', category: 'BRAND_ECOSYSTEM', subCategory: 'STRATEGY', description: 'Complete brand narrative construction for high-end Fintech and Web3 lifestyle.', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/LIifestyle3.8z700n5tjh.webp', tags: ['Fintech', 'Strategy', 'Ecosystem'], sections: CRYDIT_SECTIONS as any },
  { id: 'luxury-design-paradigm', title: 'Luxury Aesthetics: Visual & Content', category: 'LUXURY_DESIGN', subCategory: 'IDENTITY', description: 'Timeless visual languages and WeChat editorial strategies for premier luxury maisons.', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/cody-gallo-toe53OJv7Kg-unsplash.eszjbryme.jpg', tags: ['Editorial', 'Aesthetics', 'Luxury'], sections: LUXURY_SECTIONS as any }
];

// --- RESUME EXPERIENCE ---
const EXPERIENCE_CN: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: '上海天卓悦科技有限公司 (Crydit)',
    role: '品牌总监 & 设计总监',
    period: '2023.12 - 至今',
    companyIntro: 'Crydit 是一家区块链资产支付平台，专注加密货币用户创新交易解决方案。',
    reportingTo: 'CEO',
    responsibilities: [
      '品牌策略与管理：从0到1建立并实施品牌战略。',
      '创意与设计管理：领导设计团队创建品牌视觉识别系统。'
    ],
    achievements: [
      '主导 TOKEN 2049 视觉全案，吸引 5w+ 参与者。',
      '品牌知名度在 6 个月内提升 80%。'
    ]
  },
  {
    id: 'exp-2',
    company: '上海君趣汽车 (众泰汽车)',
    role: '资深视觉经理',
    period: '2022.5 - 2023.6',
    companyIntro: '上海君趣汽车是众泰汽车重整后的业务主体。',
    responsibilities: [
      '品牌设计：独立实施品牌视觉识别系统。',
      '汽车造型：主导新款车型 CMF 设计（色彩、材料、表面工艺）。'
    ]
  },
  {
    id: 'exp-3',
    company: '中国贵酒集团',
    role: '品牌高级经理 & 总裁助理',
    period: '2021.11 - 2022.4',
    companyIntro: '融合经典与创新的综合性酒业集团（股票600696）。',
    achievements: [
      '参与冠名 CCTV《大国品牌》项目，荣获“2022广告主年度内容营销案例”。',
      '在 2 个月内完成花王集团从 0 到 1 的视觉体系搭建。'
    ]
  }
];

const EXPERIENCE_EN: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: 'Crydit (Shanghai)',
    role: 'Brand & Design Director',
    period: '2023.12 - Present',
    companyIntro: 'Blockchain asset payment platform for crypto innovators.',
    achievements: [
      'Led TOKEN 2049 Global Event visuals.',
      'Achieved 80% brand awareness growth within 6 months.'
    ]
  }
];

export const STRATEGIC_EXPERTISE_CN = [
  { title: "跨行业视觉战略经验", desc: "9年经验，涵盖加密市场、奢侈品、汽车 CMF、快消、AI 创意等多个垂直领域。" },
  { title: "全方位品牌管理", desc: "从策略推演到视觉落地的全链路闭环，具备强大的行业资源整合能力。" },
  { title: "垂直行业叙事能力", desc: "擅长捕捉不同行业的底层逻辑，将其转化为极具商业溢价的视觉语言。" },
  { title: "AI 驱动的创意流", desc: "推崇“人机协同”，利用 AI 工具深度赋能设计流程，重塑内容生产效率。" }
];

export const STRATEGIC_EXPERTISE_EN = [
  { title: "Cross-Industry Visual Strategy", desc: "9+ years across crypto, luxury, automotive, F&B, and AI creative domains." },
  { title: "Full-link Brand Management", desc: "Complete closure from strategic deduction to visual implementation." },
  { title: "Vertical Narrative Depth", desc: "Expertise in translating industry logic into high-premium visual languages." },
  { title: "AI-Powered Creativity", desc: "Redefining design workflows through human-machine collaborative efficiency." }
];

export const CONTENT_CN: SiteContent = {
  hero: {
    title: "JANICE MO",
    subtitle: "设计总监 | 9 年行业经验\n深耕垂直行业叙事：从汽车 CMF 到 AI 创意内容。\n定义战略级设计标准。",
    cta: "浏览作品集",
    available: "全球战略合作伙伴"
  },
  resume: {
    aboutTitle: "项目体验维度",
    aboutText: "以行业战略逻辑为核心，提供多维度的视觉解决方案。",
    stats: { exp: "从业年限", projects: "落地项目", awards: "国际大奖" },
    skillsTitle: "核心能力",
    experienceTitle: "职业轨迹"
  },
  portfolio: {
    title: "作品档案",
    subtitle: "以 6 大视觉维度区分的战略项目展示",
    filters: {
      all: "全部领域",
      activity: "活动类视觉展示",
      brand_ecosystem: "品牌全生态系统",
      luxury: "奢侈品美学范式",
      automotive: "汽车全链路CMF与策略",
      fnb: "餐饮快消商业视觉",
      ai_drama: "AI短剧内容创意"
    }
  },
  footer: { rights: "© 2025 Janice Mo. 作品档案库." },
  experience: EXPERIENCE_CN,
  skills: SKILLS_COMMON,
  projects: PROJECTS_CN,
  aiContext: "Janice Mo (毛宇君) 是一位拥有国际视野的品牌总监，专注于区块链(Crydit)、汽车(INTU)、奢侈品(LVMH)及AI创意内容。她擅长从底层逻辑重构品牌生命力。"
};

export const CONTENT_EN: SiteContent = {
  hero: {
    title: "JANICE MO",
    subtitle: "Design Director | 9+ Years Experience\nFocusing on Vertical Industry Narratives: From Automotive CMF to AI Creative Content.",
    cta: "Explore Portfolio",
    available: "Global Strategic Partner"
  },
  resume: {
    aboutTitle: "Project Experience",
    aboutText: "Multidimensional visual solutions driven by strategic industry logic.",
    stats: { exp: "Professional Years", projects: "Global Projects", awards: "Design Awards" },
    skillsTitle: "Methodology",
    experienceTitle: "Professional Path"
  },
  portfolio: {
    title: "Archive",
    subtitle: "Strategic projects segmented by 6 visual dimensions",
    filters: {
      all: "All",
      activity: "Activity Visuals",
      brand_ecosystem: "Brand Ecosystem",
      luxury: "Luxury Aesthetics",
      automotive: "Automotive CMF & Strategy",
      fnb: "F&B Commercial",
      ai_drama: "AI Creative"
    }
  },
  footer: { rights: "© 2025 Janice Mo. Master Archive." },
  experience: EXPERIENCE_EN,
  skills: SKILLS_COMMON,
  projects: PROJECTS_EN,
  aiContext: "Janice Mo is a Design Director with expertise in Automotive CMF, Luxury Aesthetics, and Fintech. Certified by LVMH."
};
