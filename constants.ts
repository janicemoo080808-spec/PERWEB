
import { SiteContent, Project, ExperienceItem, SkillItem } from './types';

const SKILLS_COMMON: SkillItem[] = [
  { name: 'Brand Strategy', level: 98 },
  { name: 'Visual Identity', level: 96 },
  { name: 'Industrial Aesthetic', level: 94 },
  { name: 'AI Creative Flow', level: 95 },
];

// --- 1. AUTOMOTIVE: RIVIAN ---
const RIVIAN_SECTIONS = [
  { 
    title: 'Rivian 官网交互体验设计', 
    label: 'DIGITAL EXPERIENCE', 
    icon: 'Globe', 
    description: 'Rivian 致力于定义高性能电动皮卡的新范式。本次合作聚焦于 Rivian 官网的视觉叙事与体验重构，通过模拟真实的车辆配置器交互与 WebGL 3D 资产即时响应，营造极致的数字探险质感。',
    images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.175v2c7o3h.webp'] 
  }
];

// --- 2. AUTOMOTIVE: INTU ---
const INTU_SECTIONS = [
  { 
    title: 'INTU 品牌战略：从功能到灵感', 
    label: 'STRATEGIC ARCHITECTURE', 
    icon: 'Hexagon', 
    description: '不造冷冰冰的机器，只做懂你的都市灵感伴侣。确立 INTU 作为“生活科技品牌”的独特占位。我们是城市生活的“灵感提供商”，强调平等、务实与开放的核心价值观。',
    images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---1.6wr7csl4f3.webp'] 
  },
  { 
    title: '视觉叙事与工业美学系统', 
    label: 'VISUAL & CMF SYSTEM', 
    icon: 'Layers', 
    isSlider: true,
    description: '整合品牌标识、内外饰 CMF 颜色设计与原创概念场景，构建一套完整的“生活科技”视觉语言体系。将城市街景切片转化为材质，实现工业美学与人文情感的平衡。',
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_08.7p42ui7p3b.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_09.58hufl0t6w.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_10.1hsoucbxzd.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_11.eszktuu8e.webp'
    ]
  },
  { 
    title: '三幕式传播战役规划', 
    label: 'CAMPAIGN STRATEGY', 
    icon: 'Rocket', 
    description: '策略核心：锐角切入 × 跨界共振 × 场景渗透 。我们将传播节奏包装为一部“都市灵感电影”的三部曲。',
    points: [
      '第一幕：启示录 (The Spark) | 主题：INSPIRED by FUN (始于启发，为谁而生)\n\n• 阿里设计周首秀：联合 Alibaba Cloud Design，在 U Design Week 上不讲参数，只讲“设计灵感”。把车身颜色变成“城市街景的切片”，定义属于 INTU 的专属色号。\n• B站“The No Show Room”：拒绝传统车评。联合最严苛 UP 主打造极寒、刁钻角度等“反常规”测试，用实力为“务实”理念背书。\n• “创造力无限公司”招聘：联合北辰青年发起秋招。不招打工人只招同类“首席灵感官”，通过高话题度吸引最有野心的年轻人。',
      '第二幕：高光时刻 (The Ignition) | 主题：Ins to U (灵感注入生活)\n\n• INTU x LEGO：推出同尺寸乐高“灵感盒子”，传达车像乐高般充满创造乐趣与无限可能的基因。\n• INTU x Nintendo Switch：打造“移动游戏厅”，强调车机高性能互联，在车内沉浸式游戏，直击年轻群体娱乐痛点。\n• 文化定调：联合 GQ Lab 发起 ICON Project，挖掘内部造车人与城市创变者故事，讲述“不被定义”的品牌精神。\n• 综艺引爆：赞助《吐槽大会》并主动“求吐槽”，以“自黑”展现品牌开放自信的非典型车企人设。',
      '第三幕：城市漫游 (The Flow) | 主题：Ins to City (灵感注入城市)\n\n• 灵感杂货铺：不做传统 4S 店，在网红街区售卖咖啡、周边与设计。收入捐赠公益，将品牌融入城市毛细血管。\n• 围挡艺术：联合 OUTPUT 艺术家将装修围挡变成城市中心倒计时装置，在开业前即制造社交打卡热潮。\n• 48小时够你玩：推出周末旅行计划，预订精品民宿即可获得两天深度试驾权，让试驾变成一次微度假。\n• 深夜接驳车 (OT Night Shuttle)：关注大厂加班族提供深夜免费接驳，在疲惫时刻提供温暖空间，用温度证明品牌价值。'
    ],
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.41yj8f2y6n.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.9gx1quihex.webp'
    ]
  }
];

// --- 3. CRYDIT ---
const CRYDIT_SECTIONS = [
  { title: '核心视觉身份标准', label: 'BRAND DNA', icon: 'Hexagon', description: '建立 Crydit 的底层视觉基因，通过高度几何化的符号系统定义金融科技。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326722.3govkhorey.webp'] },
  { title: '战略定位与品牌手册', label: 'BRAND STRATEGY', icon: 'BookOpen', description: '从市场竞争分析到品牌语境推演，构建了一套完整的品牌叙事逻辑。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/1.2vf7y6ub45.webp'] },
  { title: '数字化门户与官方枢纽', label: 'WEB ARCHITECTURE', icon: 'Globe', description: '强调信息层级的高效流动与 Web3 交互美学。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/4.232cghnb0s.webp'] },
  { title: '金融科技核心产品界面', label: 'APP INTERFACE', icon: 'Smartphone', description: '专注于去中心化资产管理的移动端 UI/UX。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/22.8ok67ird05.webp'] },
  { title: '权威公关与全球化背书', label: 'MEDIA BACKING', icon: 'FileText', description: '在顶级金融媒体中的一致性发声。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/44.9ddfrjew0e.webp'] },
  { title: '社交叙事与 IP 人格化', label: 'SOCIAL VOICE', icon: 'Twitter', isSlider: true, description: '在社交平台构建具有温度的 IP 叙事，将 Web3 叙事转化为感性内容。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/6.3k8hjkbw3b.webp', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326827.wj17v1a1b.webp', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image-2475.4ubeojcaob.webp', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Twitter--post-16.24.53.9rjvidq2h4.webp'] },
  { title: '合规性界面与安全协议', label: 'INTERFACE SECURITY', icon: 'ShieldCheck', description: '安全中心与合规架构界面，强调信息的严谨性与安全性。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.5c1geh3u8f.webp'] }
];

// --- 4. LUXURY DESIGN ---
const LUXURY_SECTIONS = [
  { 
    title: '奢侈品美学编辑：微信视觉叙事', 
    label: 'EDITORIAL EXPERIENCE', 
    icon: 'Camera', 
    isSlider: true, 
    description: '深耕 LVMH 美学体系，专注于顶级奢侈品牌公众号视觉叙事。采用黄金比例排版，通过艺术化分镜重组商业资讯，强调呼吸感与留白的美学。', 
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame.9o09kpepxt.webp', 
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-1.6f15o1r8b3.webp', 
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2.9rjvif7snh.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-4.8ok694ajjv.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-3.7eh92ssk8m.webp'
    ] 
  }
];

// --- 5. AI CREATIVE ---
const AI_CREATIVE_SECTIONS = [
  { 
    title: 'AI 电影感视觉叙事', 
    label: 'CINEMATIC AI', 
    icon: 'Sparkles', 
    description: '重塑光影美学，打破拍摄物理边界。通过超 surreal 主义风格与 SVD 镜头律动，定义 AI 时代的数字生命与虚拟叙事标准。', 
    videoUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/ai-preview.mp4', 
    images: [] 
  },
  { 
    title: '数字角色一致性', 
    label: 'VIRTUAL IDENTITY', 
    icon: 'Fingerprint', 
    isSlider: true, 
    description: '利用生成式技术定义 AI 时代的虚拟生命一致性标准。', 
    images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000', 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1000'] 
  }
];

const ACTIVITY_SECTIONS = [
  { title: '品牌年度盛典视觉', label: 'EVENT VISUALS', icon: 'Award', description: '大型活动现场多维视觉呈现，整合线下展陈与多媒体互动视觉。', images: ['https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1920'] }
];

export const PROJECTS_CN: Project[] = [
  { 
    id: 'automotive', 
    title: '汽车品牌与产品设计：Rivian & INTU', 
    category: 'AUTOMOTIVE_DESIGN', 
    subCategory: 'STRATEGY', 
    description: '从 Rivian 的极致交互到 INTU 的“灵感引擎”重塑。整合三幕式传播战役与 CMF 工业美学。', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/61b75b229825189.686c03868bc97.39lnp5zjeb.webp', 
    tags: ['汽车重塑', '传播战役', '数字高定', '生活科技'], 
    sections: [...RIVIAN_SECTIONS, ...INTU_SECTIONS] as any 
  },
  { 
    id: 'crydit-brand', 
    title: 'Crydit: 品牌全生态系统构建', 
    category: 'BRAND_ECOSYSTEM', 
    subCategory: 'STRATEGY', 
    description: '从底层视觉基因到全球化社交 IP 叙事，为高端金融科技品牌打造完整生态。', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/LIifestyle3.8z700n5tjh.webp', 
    tags: ['品牌全案', '金融科技', 'Web3', 'IP构建'], 
    sections: CRYDIT_SECTIONS as any 
  },
  { 
    id: 'ai-drama', 
    title: 'AI 短剧内容与视觉创意', 
    category: 'AI_CREATIVE', 
    subCategory: 'CONTENT_CREATION', 
    description: '利用生成式 AI 技术重塑制作流，打造电影感体验。', 
    imageUrl: 'https://images.unsplash.com/photo-1677442135968-356c9d09c3a3?q=80&w=1920', 
    videoUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/ai-preview.mp4',
    tags: ['AI 生成', '电影感', '创意流'], 
    sections: AI_CREATIVE_SECTIONS as any 
  },
  { 
    id: 'luxury', 
    title: '奢侈品美学范式', 
    category: 'LUXURY_DESIGN', 
    subCategory: 'IDENTITY', 
    description: 'LVMH 美学体系下的视觉叙事与内容排版。', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/cody-gallo-toe53OJv7Kg-unsplash.eszjbryme.jpg', 
    tags: ['美学范式', 'LVMH', '内容策略'], 
    sections: LUXURY_SECTIONS as any 
  },
  {
    id: 'activity-visual',
    title: '品牌活动类视觉展示',
    category: 'ACTIVITY_VISUALS',
    subCategory: 'CAMPAIGN',
    description: '多维度线下活动视觉传达。',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920',
    tags: ['活动视觉', '线下展陈'],
    sections: ACTIVITY_SECTIONS as any
  }
];

export const PROJECTS_EN: Project[] = [
  { 
    id: 'automotive', 
    title: 'Automotive & Product Strategy', 
    category: 'AUTOMOTIVE_DESIGN', 
    subCategory: 'STRATEGY', 
    description: 'Redefining automotive branding through Rivian and INTU case studies.', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/61b75b229825189.686c03868bc97.39lnp5zjeb.webp', 
    tags: ['Automotive', 'Branding', 'Digital'], 
    sections: [...RIVIAN_SECTIONS, ...INTU_SECTIONS] as any 
  },
  { 
    id: 'crydit-brand', 
    title: 'Crydit: Brand Ecosystem', 
    category: 'BRAND_ECOSYSTEM', 
    subCategory: 'STRATEGY', 
    description: 'Constructing a complete brand narrative for premium Fintech lifestyle.', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/LIifestyle3.8z700n5tjh.webp', 
    tags: ['Brand Strategy', 'Fintech', 'Web3'], 
    sections: CRYDIT_SECTIONS as any 
  }
];

const EXPERIENCE_CN: ExperienceItem[] = [
  {
    id: 'exp-1',
    company: '上海天卓悦科技有限公司 (Crydit)',
    role: '品牌总监 & 设计总监',
    period: '2023.12 - 至今',
    companyIntro: 'Crydit 是一家区块链资产支付平台，致力于通过 Web3 技术重塑生活消费方式。',
    responsibilities: ['品牌全生命周期策略', '全球化视觉标准', 'UI/UX 监管'],
    achievements: ['品牌知名度提升 80%', '主导多项全球跨界联名。']
  }
];

export const STRATEGIC_EXPERTISE_CN = [
  { title: "跨行业视觉战略", desc: "9年深厚经验，涵盖加密市场、奢侈品、汽车 CMF、AI 创意等。" },
  { title: "AI 驱动的创意流", desc: "主张“人机协同”，利用前沿 AI 工具重塑生产效率。" }
];

export const STRATEGIC_EXPERTISE_EN = [
  { title: "Cross-Industry Strategy", desc: "9+ years in Crypto, Luxury, Automotive CMF, and AI." },
  { title: "AI-Powered Flow", desc: "Redefining efficiency through human-AI collaborative workflows." }
];

export const CONTENT_CN: SiteContent = {
  nav: { portfolios: "作品档案", career: "职业轨迹" },
  hero: {
    title: "JANICE MO",
    subtitle: "设计总监 | 9 年行业经验\n深耕垂直行业叙事：从汽车 CMF 到 AI 创意内容。",
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
      automotive: "汽车品牌与产品设计",
      fnb: "餐饮快消商业视觉",
      ai_drama: "AI短剧内容创意"
    }
  },
  footer: { rights: "© 2025 Janice Mo. 作品档案库." },
  experience: EXPERIENCE_CN,
  skills: SKILLS_COMMON,
  projects: PROJECTS_CN,
  aiContext: "Janice Mo (毛宇君) 是一位拥有国际视野的品牌/设计总监。核心成就包括：打造 Crydit Web3 品牌生态；主导 INTU 汽车品牌重塑与三幕式传播战役；为 LVMH 体系提供视觉叙事。"
};

export const CONTENT_EN: SiteContent = {
  nav: { portfolios: "Portfolios", career: "Career" },
  hero: {
    title: "JANICE MO",
    subtitle: "Design Director | 9+ Years Experience\nFocusing on Vertical Industry Narratives.",
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
      automotive: "Automotive Design",
      fnb: "F&B Commercial",
      ai_drama: "AI Creative"
    }
  },
  footer: { rights: "© 2025 Janice Mo. Master Archive." },
  experience: [],
  skills: SKILLS_COMMON,
  projects: PROJECTS_EN,
  aiContext: "Janice Mo is a Design Director with expertise in Automotive CMF, Luxury Aesthetics, and AI Creative."
};
