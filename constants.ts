
import { SiteContent, Project, ExperienceItem, SkillItem } from './types';

export const BACKGROUND_MUSIC_URL = "https://upload.wikimedia.org/wikipedia/commons/1/15/Erik_Satie_-_Gymnop%C3%A9die_No._1.mp3"; 

const SKILLS_COMMON: SkillItem[] = [
  { name: 'Brand Strategy', level: 98 },
  { name: 'Visual Identity', level: 96 },
  { name: 'Industrial Aesthetic', level: 94 },
  { name: 'AI Creative Flow', level: 95 },
];

// --- PROJECT SECTIONS ---

const CRYDIT_SECTIONS = [
  { title: 'Core Visual Identity Standard', label: 'BRAND DNA', icon: 'Hexagon', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326722.3govkhorey.webp'] },
  { title: 'Strategic Positioning & Brand Manual', label: 'BRAND STRATEGY', icon: 'BookOpen', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/1.2vf7y6ub45.webp'] },
  { title: 'Digital Portal & Official Hub', label: 'WEB ARCHITECTURE', icon: 'Globe', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/4.232cghnb0s.webp'] },
  { title: 'Fintech Core Product Interface', label: 'APP INTERFACE', icon: 'Smartphone', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/22.8ok67ird05.webp'] },
  { title: 'Authority PR & Global Recognition', label: 'MEDIA BACKING', icon: 'FileText', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/44.9ddfrjew0e.webp'] },
  { title: 'Social Narrative & IP Character', label: 'SOCIAL VOICE', icon: 'Twitter', isSlider: true, images: ['https://img.heliar.top/file/1767074381181_6.png', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image-2475.4ubeojcaob.webp', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/卡戴珊-16.25.00.6f15o09i52.webp'] }
];

const LUXURY_SECTIONS = [
  { 
    title: 'Luxury Editorial: WeChat Narrative', 
    label: 'EDITORIAL EXPERIENCE', 
    icon: 'Camera', 
    isSlider: true, 
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame.9o09kpepxt.webp', 
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-1.6f15o1r8b3.webp', 
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2.9rjvif7snh.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-3.2yytvyhl8q.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-4.1ziqiseu2w.webp'
    ] 
  }
];

const INTU_SECTIONS_CN = [
  { 
    title: '1. 市场挑战与机遇', 
    label: 'MARKET ANALYSIS', 
    icon: 'TrendingUp', 
    description: '在消费文化剧烈变化的今天，回归“理性消费”的趋势与高端市场的增长并存。',
    points: [
      '挑战与机遇：疫情催生“新理性主义”，消费者回归理性；但在高端市场和新能源汽车领域仍有强劲增长。',
      '战略切入点：INTU 旨在填补传统豪华品牌与低端入门品牌之间的空白，定位在中高端市场。'
    ],
    images: [] 
  },
  { 
    title: '2. INTU 品牌核心定义与视觉 CMF', 
    label: 'CORE DNA & VISUALS', 
    icon: 'Hexagon', 
    isSlider: true,
    description: 'Name: INTU (INSPIRATION TO U) | Slogan: Inspiration To U / 都市灵感。本章节展示品牌视觉标准与 CMF 核心设计。',
    points: [
      '使命与人群：增色生活科技，为一二线城市 Z 世代都市自由青年提供最明智的出行选择。',
      '视觉与 CMF：强调“感性科技”触感，融合可持续材料，构建极简且具有爆发力的视觉符号。'
    ],
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_08.7p42ui7p3b.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_09.58hufl0t6w.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_10.1hsoucbxzd.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_11.lw7ew29je.webp'
    ] 
  },
  { 
    title: '3. 产品基石', 
    label: 'FOUNDATION', 
    icon: 'Cpu', 
    description: 'INTU 定义自己为“生活科技品牌”，而非冰冷的科技堆砌。',
    points: [
      '数字化高级感 (Digital Premium)：内在的数字化美观与整体氛围营造，如高端 HMI 交互。',
      '情感化连通 (Emotional Connection)：强调社交价值与即时互动。',
      '感性科技 (Warm Tech)：千人千面的 AI 应用，是有温度的人性化科技。'
    ],
    images: [] 
  },
  { 
    title: '4. 品牌传播策略', 
    label: 'COMMUNICATION ROADMAP', 
    icon: 'Rocket', 
    description: '传播核心逻辑：“锐角记忆 × 高频共振 × 细分部署”。',
    points: [
      '第一阶段：发布前 (Pre-Launch) | 主题：INSPIRED by FUN (始于启发，为谁而生)。策略：借势流量平台与品牌背书，树立新形象。',
      'Phase 1 关键动作 | 设计背书：联合阿里云设计团队国际首发；硬核测评：Bilibili “The No Show Room”测试；人才招募：联合“北辰青年”。',
      '第二阶段：上市发布期 (Launch) | 主题：Ins to U (灵感注入生活)。策略：事件营销与跨界合作，丰富内涵并收集销售线索。',
      'Phase 2 关键动作 | 综艺植入：赞助《吐槽大会》讨论真实槽点；跨界联名：LEGO 礼盒、Nintendo Switch 游戏、GQ Lab ICON Project。',
      '第三阶段：持续期 (Sustain) | 主题：Ins to City (灵感注入城市)。策略：城市战略本地化，扩大体验场景。',
      'Phase 3 关键动作 | Inspiration Hub：打造城市灵感门店；场景化试驾：白天/夜晚双线体验及深夜接送服务；周末旅行：推出“48小时够你玩”计划。'
    ],
    images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---1.6wr7csl4f3.webp'] 
  }
];

const INTU_SECTIONS_EN = [
  { 
    title: '1. Market Challenges & Opportunities', 
    label: 'MARKET ANALYSIS', 
    icon: 'TrendingUp', 
    description: 'Amid dramatic shifts in consumer culture, returning to "rational spending" coexists with high-end growth.',
    points: [
      'Challenges: The rise of "New Rationalism" post-pandemic has shifted consumers toward value. High market homogeneity persists.',
      'Positioning: INTU fills the gap between rigid luxury and entry-level brands, targeting the emerging mid-to-high-end urban market.'
    ],
    images: [] 
  },
  { 
    title: '2. INTU Brand Definition & Visual CMF', 
    label: 'CORE DNA & VISUALS', 
    icon: 'Hexagon', 
    isSlider: true,
    description: 'Name: INTU (INSPIRATION TO U) | Slogan: Inspiration To U / Urban Inspiration.',
    points: [
      'Mission: Enhancing life with technology, providing the wisest mobility choices for Tier 1 & 2 Gen Z youth.',
      'Strategy: Tactile "Warm Tech" philosophy, blending sustainable materials with a minimal iconic system.'
    ],
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_08.7p42ui7p3b.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_09.58hufl0t6w.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_10.1hsoucbxzd.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_11.lw7ew29je.webp'
    ] 
  },
  { 
    title: '3. Product Pillars', 
    label: 'FOUNDATION', 
    icon: 'Cpu', 
    description: 'INTU defines itself as a "Lifestyle Tech Brand," moving away from cold, utilitarian technology.',
    points: [
      'Digital Premium: Built-in digital aesthetics and holistic atmosphere creation.',
      'Emotional Connection: Social value and instant interaction through connectivity.',
      'Warm Tech: Personalized AI applications that offer human-centric technology.'
    ],
    images: [] 
  },
  { 
    title: '4. Communication Strategy', 
    label: 'COMMUNICATION ROADMAP', 
    icon: 'Rocket', 
    description: 'Core logic: "Sharp Angle Memory × High-Frequency Resonance × Segmented Deployment."',
    points: [
      'Phase 1: Pre-Launch | Theme: INSPIRED by FUN. Strategy: Leveraging traffic platforms and design endorsements to establish a new image.',
      'Key Actions: Alibaba Cloud Design endorsement; Bilibili "The No Show Room" hardcore testing; Talent hunt with Beichen Youth.',
      'Phase 2: Launch | Theme: Ins to U. Strategy: Event marketing and crossovers to enrich brand depth and collect sales leads.',
      'Key Actions: "Roast Show" sponsorship; Crossovers with LEGO, Nintendo Switch, and GQ Lab ICON Project.',
      'Phase 3: Sustain | Theme: Ins to City. Strategy: Localizing urban strategies and expanding experience scenarios.',
      'Key Actions: Inspiration Hub stores; Day/Night test drives & Midnight Shuttle; "48 Hours is Enough" weekend plans.'
    ],
    images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---1.6wr7csl4f3.webp'] 
  }
];

const PROJECTS_CN: Project[] = [
  { 
    id: 'intu-brand-strategy', 
    title: '汽车品牌与产品设计', 
    category: 'AUTOMOTIVE_DESIGN', 
    subCategory: 'STRATEGY', 
    description: '为全新电动汽车品牌 INTU 构建从 market insight 到三阶段传播闭环的战略蓝图。定义“生活科技”与“都市灵感”的商业叙事。', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/61b75b229825189.686c03868bc97.39lnp5zjeb.webp', 
    tags: ['汽车品牌', '传播策略', 'CMF策略', 'INTU'], 
    sections: INTU_SECTIONS_CN as any 
  },
  { id: 'crydit-brand-narrative', title: 'Crydit: 品牌全生态系统构建', category: 'BRAND_ECOSYSTEM', subCategory: 'STRATEGY', description: '从底层视觉标准到全球权威背书，构建链接高端金融科技与生活方式的完整品牌叙事。', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/LIifestyle3.8z700n5tjh.webp', tags: ['品牌全案', '金融科技', 'Web3'], sections: CRYDIT_SECTIONS as any },
  { id: 'luxury-design-paradigm', title: '奢侈品美学范式：视觉与内容设计', category: 'LUXURY_DESIGN', subCategory: 'IDENTITY', description: '深耕 LVMH 美学体系，专注于顶级奢侈品牌公众号视觉叙事，定义卓越的内容策略。', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/cody-gallo-toe53OJv7Kg-unsplash.eszjbryme.jpg', tags: ['奢侈品美学', '公众号策略', '高端叙事'], sections: LUXURY_SECTIONS as any },
  { id: 'fnb-commercial-dessert', title: '餐饮快消商业视觉：品牌溢价设计', category: 'FNB_COMMERCIAL', subCategory: 'IDENTITY', description: '精准捕捉消费心理，通过高情感共鸣的视觉系统提升甜品品牌的商业溢价空间。', imageUrl: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1920', tags: ['餐饮视觉', '消费心理', '商业闭环'], sections: [] as any },
  { id: 'ai-creative-drama', title: 'AI 短剧内容与视觉创意', category: 'AI_CREATIVE', subCategory: 'CONTENT_CREATION', description: '利用前沿生成式 AI 技术，重塑短剧制作工作流，打造具有电影感的极致内容体验。', imageUrl: 'https://images.unsplash.com/photo-1677442135968-356c9d09c3a3?q=80&w=1920', tags: ['AI 生成', '创意流', '内容叙事'], sections: [] as any }
];

const PROJECTS_EN: Project[] = [
  { 
    id: 'intu-brand-strategy', 
    title: 'INTU: Brand Definition & Communication Strategy', 
    category: 'AUTOMOTIVE_DESIGN', 
    subCategory: 'STRATEGY', 
    description: 'Building a strategic blueprint for the new EV brand INTU, from market insights to a three-phase communication loop. Defining the "Lifestyle Tech" and "Urban Inspiration" narrative.', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/61b75b229825189.686c03868bc97.39lnp5zjeb.webp', 
    tags: ['Automotive', 'Communication', 'Brand Strategy', 'INTU'], 
    sections: INTU_SECTIONS_EN as any 
  },
  { id: 'crydit-brand-narrative', title: 'Crydit: Brand Ecosystem Construction', category: 'BRAND_ECOSYSTEM', subCategory: 'STRATEGY', description: 'From visual standards to global authority endorsements, constructing a complete narrative for premium Fintech and Web3 lifestyle.', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/LIifestyle3.8z700n5tjh.webp', tags: ['Fintech', 'Strategy', 'Ecosystem'], sections: CRYDIT_SECTIONS as any },
  { id: 'luxury-design-paradigm', title: 'Luxury Aesthetics: Visual & Content Design', category: 'LUXURY_DESIGN', subCategory: 'IDENTITY', description: 'Deep roots in the LVMH aesthetic system, focusing on high-end editorial narratives for premier luxury maisons.', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/cody-gallo-toe53OJv7Kg-unsplash.eszjbryme.jpg', tags: ['Editorial', 'Aesthetics', 'Luxury'], sections: LUXURY_SECTIONS as any }
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
      '主导大型国际活动视觉呈现，提升全球品牌权威感。',
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
      'Led global brand visual identity and major summit presence.',
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
  { title: "Cross-Industry Visual Strategy", desc: "9+ years across crypto, luxury, automotive, f&b, and AI creative domains." },
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
