import { SiteContent, Project, ExperienceItem, SkillItem, EducationItem, CertificateItem } from './types';

export const DESIGN_PHILOSOPHY_CN = {
  title: "设计哲学",
  quote: "以美学为杠杆，撬动商业增长",
  description: "我致力于打破传统设计的‘装饰性’局限，将其重构为核心商业战略资产。在 Web3 与汽车等高技术密度赛道，我强调‘人机协同’下的效率革命，通过构建具有高度秩序感与情绪引导力的视觉资产，帮助品牌在激烈的全球竞争中建立绝对的‘信任溢价’与叙事主权。"
};

export const DESIGN_PHILOSOPHY_EN = {
  title: "Design Philosophy",
  quote: "Leveraging Aesthetics to Drive Business Growth.",
  description: "I aim to move beyond decorative design and reposition visual identity as a core strategic asset. In high-tech sectors like Web3 and Automotive, I focus on the 'Human-AI Collaboration' revolution, creating high-order visual assets that guide emotional response and establish 'Trust Premium' and narrative sovereignty in the global marketplace."
};

// --- STRATEGIC EXPERTISE (Used for MagicBento) ---
export const STRATEGIC_EXPERTISE_CN = [
  { title: "跨行业视觉战略经验", desc: "超过 9 年从业经验，涵盖加密市场、奢侈品、区块链、餐饮酒水、创新消费品、教育、医疗、跨境/国内电商及广告公司等多个行业。", label: "EXPERIENCE" },
  { title: "全方位品牌管理", desc: "从品牌策略、设计创意到方案策划及执行，全面掌控各环节并具备强大的视觉设计资源整合能力。", label: "BRAND MANAGEMENT" },
  { title: "多元风格驾驭力", desc: "利用 AI 驱动的创意生态，桥接人类直觉与机器精度。将 AI 作为战略杠杆，在后数字时代放大品牌主权，推动从“效率驱动”向“创意增强”转变。", label: "VERSATILITY" },
  { title: "团队领导与协作", desc: "擅长领导与协调团队，主导由 AI 增强的创意主权表达，实现卓越的品牌表现。", label: "LEADERSHIP" }
];

export const STRATEGIC_EXPERTISE_EN = [
  { title: "Cross-Industry Visual Strategy", desc: "Over 9 years of experience across Crypto, Luxury, Blockchain, F&B, Consumer Goods, Healthcare, and E-commerce agencies.", label: "EXPERIENCE" },
  { title: "End-to-End Brand Management", desc: "From brand strategy and creative ideation to execution, with a strong capability in visual resource integration.", label: "BRAND MANAGEMENT" },
  { title: "AI-Driven Creative Ecosystems", desc: "Bridging the gap between human intuition and machine precision. Harnessing AI as a strategic lever to amplify brand sovereignty in a post-digital world.", label: "VERSATILITY" },
  { title: "Human-AI Collaboration", desc: "Leading the paradigm shift from traditional design cycles to AI-augmented creative sovereignty and global asset reconstruction.", label: "LEADERSHIP" }
];

const SKILLS_COMMON: SkillItem[] = [
  { name: 'Brand Strategy', level: 98 },
  { name: 'Visual Identity', level: 96 },
  { name: 'Industrial Aesthetic', level: 94 },
  { name: 'AI Creative Flow', level: 95 },
];

// --- PROJECT DATA ---

// 1. AUTOMOTIVE: RIVIAN
const RIVIAN_SECTIONS_CN = [{ title: 'Rivian 官网交互体验设计', label: 'DIGITAL EXPERIENCE', icon: 'Globe', description: '致力于定义高性能电动皮卡的新范式。本次合作聚焦于 Rivian 官网的视觉叙事与体验重构。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.175v2c7o3h.webp'] }];
const RIVIAN_SECTIONS_EN = [{ title: 'Rivian Digital Experience & Configurator', label: 'DIGITAL EXPERIENCE', icon: 'Globe', description: 'Defining a new paradigm for high-performance electric trucks.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.175v2c7o3h.webp'] }];

// 2. AUTOMOTIVE: INTU
const INTU_SECTIONS_CN = [
  { title: 'INTU 品牌战略：从功能到灵感', label: 'STRATEGIC ARCHITECTURE', icon: 'Hexagon', description: '确立 INTU 作为“生活科技品牌”的独特占位。我们是城市生活的“灵感提供商”。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---1.6wr7csl4f3.webp'] },
  { title: '视觉叙事与工业美学系统', label: 'VISUAL & CMF SYSTEM', icon: 'Layers', isSlider: true, description: '整合品牌标识、内外饰 CMF 颜色设计与原创概念场景。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_08.7p42ui7p3b.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_09.58hufl0t6w.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_10.1hsoucbxzd.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_11.eszktuu8e.webp'] },
  { title: '三幕式传播战役规划', label: 'CAMPAIGN STRATEGY', icon: 'Rocket', description: '策略核心：锐角切入 × 跨界共振 × 场景渗透。', points: ['第一幕：启示录 (The Spark) | 主题：INSPIRED by FUN','第二幕：高光时刻 (The Ignition) | 主题：Ins to U','第三幕：城市漫游 (The Flow) | 主题：Ins to City'], images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.41yj8f2y6n.webp', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.9gx1quihex.webp'] }
];
const INTU_SECTIONS_EN = [
  { title: 'INTU Strategic Architecture', label: 'STRATEGIC ARCHITECTURE', icon: 'Hexagon', description: 'Positioning INTU as a "Lifestyle Tech Brand".', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---1.6wr7csl4f3.webp'] },
  { title: 'Visual Narrative & CMF System', label: 'VISUAL & CMF SYSTEM', icon: 'Layers', isSlider: true, description: 'Integrating brand identity and interior/exterior CMF design.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_08.7p42ui7p3b.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_09.58hufl0t6w.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_10.1hsoucbxzd.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_11.eszktuu8e.webp'] }
];

// 3. CRYDIT (Web3)
const CRYDIT_SECTIONS_CN = [
  { title: '核心视觉身份标准', label: 'BRAND DNA', icon: 'Hexagon', description: '建立 Crydit 的底层视觉基因。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326722.3govkhorey.webp'] },
  { title: '数字化门户与官方枢纽', label: 'WEB ARCHITECTURE', icon: 'Globe', description: '强调信息层级的高效流动与 Web3 交互美学。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/4.232cghnb0s.webp'] },
  { title: '社交叙事与 IP 人格化', label: 'SOCIAL VOICE', icon: 'Twitter', isSlider: true, description: '在社交平台构建具有温度的 IP 叙事。', images: ['https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326851.3govki18n9.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326865.6pnzh5oq9s.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326871.4qrsqtj7y3.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326882-16.24.57.1ziqiqx3w6.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/World-Football-Day-16.24.53.5q7w3zlz20.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/You’ll-regret-selling-your-coins-now-in-the-future..4qrsqtj7w9.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/image-2475.4ubeojcaob.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/卡戴珊-16.25.00.6f15o09i52.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/平安夜-16.24.57.26lye6j9b1.webp'] }
];
const CRYDIT_SECTIONS_EN = [
  { title: 'Core Visual Identity Standards', label: 'BRAND DNA', icon: 'Hexagon', description: 'Establishing foundational visual DNA of Crydit.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326722.3govkhorey.webp'] }
];

// 4. LUXURY (LVMH)
const LUXURY_SECTIONS_CN = [
  { title: '奢侈品美学编辑', label: 'EDITORIAL EXPERIENCE', icon: 'Camera', isSlider: true, description: '为 Dom Pérignon、Balmain 等品牌操盘期间，强调“呼吸感美学”。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-1.6f15o1r8b3.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2.9rjvif7snh.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-4.8ok694ajjv.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-3.7eh92ssk8m.webp'] },
  { title: 'LOEWE：有机超 surreal', label: 'BRAND CAMPAIGN', icon: 'Sparkles', isGrid: true, description: '关于工艺与想象力的策略性探索。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326728.175v5pf78q.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326724.iclloro8u.webp'] }
];
const LUXURY_SECTIONS_EN = [
  { title: 'Luxury Aesthetic Editorial', label: 'EDITORIAL EXPERIENCE', icon: 'Camera', isSlider: true, description: 'Creative visual assets for luxury brand WeChat accounts.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-1.6f15o1r8b3.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2.9rjvif7snh.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-4.8ok694ajjv.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-3.7eh92ssk8m.webp'] }
];

// 5. ACTIVITY
const ACTIVITY_SECTIONS_CN = [
  { title: 'Token 2049 全球品牌阵地操盘', label: 'GLOBAL EXHIBITION', icon: 'Globe', isCircularGallery: true, description: '全程主导 Crydit 在新加坡 Token 2049 的亮相。', points: ['品牌声量爆发：触达 50,000+ 行业精英，1.2M+ 品牌曝光','获客效能飞跃：空间交互策划提升 35% BD 线索转化','卓越资源协同：48 小时极速周期完成高规格品牌物理空间构建'], images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/54848677226_0c430fb790_c.58hunv4b5g.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/GXrzbbuaUAA8GDc.6m4dru60fh.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Gbgz1l1bQAA3SDL.5moaeo399k.webp'] }
];
const ACTIVITY_SECTIONS_EN = [
  { title: 'Token 2049 Global Brand Sovereignty', label: 'GLOBAL EXHIBITION', icon: 'Globe', isCircularGallery: true, description: 'Managing global expansion roadmaps and futuristic interactive spaces.', points: ['Brand Momentum: 50,000+ reached, 1.2M+ impressions','Conversion Growth: 35% higher high-quality lead conversion'], images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/54848677226_0c430fb790_c.58hunv4b5g.webp'] }
];

export const PROJECTS_CN: Project[] = [
  { id: 'automotive', title: '智能出行体验', category: 'AUTOMOTIVE_DESIGN', subCategory: 'STRATEGY', description: '从 Rivian 的极致交互到 INTU 的“灵感引擎”重塑。整合三幕式传播战役与 CMF 工业美学。', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/61b75b229825189.686c03868bc97.39lnp5zjeb.webp', tags: ['汽车重塑', '传播战役', 'CMF设计'], sections: [...RIVIAN_SECTIONS_CN, ...INTU_SECTIONS_CN] as any },
  { id: 'crydit-brand', title: 'Web3 金融生态', category: 'BRAND_ECOSYSTEM', subCategory: 'STRATEGY', description: '从底层视觉基因到全球化社交 IP 叙事，为高端金融科技品牌打造完整生态。', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/LIifestyle3.8z700n5tjh.webp', tags: ['品牌全案', '金融科技', 'Web3'], sections: CRYDIT_SECTIONS_CN as any },
  { id: 'ai-drama', title: 'AIGC 影像创新', category: 'AI_CREATIVE', subCategory: 'CONTENT_CREATION', description: '利用生成式 AI 技术重塑制作流，打造电影感体验。', imageUrl: 'https://images.unsplash.com/photo-1677442135968-356c9d09c3a3?q=80&w=1920', videoUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/ai-preview.mp4', tags: ['AI 生成', '电影感', '数字生命'], sections: [{ title: 'AI 电影感叙事', label: 'CINEMATIC AI', icon: 'Sparkles', description: '重塑光影美学。', videoUrl: 'https://github.com/user-attachments/assets/e3f24a85-721f-409e-9bcb-c220b7a692ad', images: [] }] as any },
  { id: 'luxury', title: '奢侈品美学与调性', category: 'LUXURY_DESIGN', subCategory: 'IDENTITY', description: 'LVMH 美学体系下的视觉叙事与内容排版。', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/cody-gallo-toe53OJv7Kg-unsplash.eszjbryme.jpg', tags: ['美学范式', 'LVMH', '内容策略'], sections: LUXURY_SECTIONS_CN as any },
  { id: 'activity-visual', title: '品牌活动与空间', category: 'ACTIVITY_VISUALS', subCategory: 'CAMPAIGN', description: "从新加坡的国际视野到央视的国家高度，用视觉语言重塑叙事主权。", imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920', tags: ['活动视觉', '线下展陈', '全球视野'], sections: ACTIVITY_SECTIONS_CN as any }
];

export const PROJECTS_EN: Project[] = [
  { id: 'automotive', title: 'SMART MOBILITY', category: 'AUTOMOTIVE_DESIGN', subCategory: 'STRATEGY', description: 'Redefining automotive branding through Rivian and INTU case studies. Integrating CMF Industrial Aesthetics.', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/61b75b229825189.686c03868bc97.39lnp5zjeb.webp', tags: ['Automotive', 'Branding', 'Digital'], sections: [...RIVIAN_SECTIONS_EN, ...INTU_SECTIONS_EN] as any },
  { id: 'crydit-brand', title: 'WEB3 FINANCE', category: 'BRAND_ECOSYSTEM', subCategory: 'STRATEGY', description: 'Constructing a complete brand narrative for premium Fintech lifestyle.', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/LIifestyle3.8z700n5tjh.webp', tags: ['Brand Strategy', 'Fintech', 'Web3'], sections: CRYDIT_SECTIONS_EN as any },
  { id: 'ai-drama', title: 'AIGC VIDEO', category: 'AI_CREATIVE', subCategory: 'CONTENT_CREATION', description: 'Utilizing generative AI to reshape production flows and cinematic experiences.', imageUrl: 'https://images.unsplash.com/photo-1677442135968-356c9d09c3a3?q=80&w=1920', videoUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/ai-preview.mp4', tags: ['AI Gen', 'Cinematic', 'Workflow'], sections: [] as any },
  { id: 'luxury', title: 'LUXURY AESTHETICS', category: 'LUXURY_DESIGN', subCategory: 'IDENTITY', description: 'Visual storytelling and editorial layout within the LVMH aesthetic framework.', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/cody-gallo-toe53OJv7Kg-unsplash.eszjbryme.jpg', tags: ['Aesthetic', 'LVMH', 'Content Strategy'], sections: LUXURY_SECTIONS_EN as any },
  { id: 'activity-visual-en', title: 'EVENT & SPACE', category: 'ACTIVITY_VISUALS', subCategory: 'CAMPAIGN', description: 'Redefining brand narrative sovereignty in global competition through futuristic visual language.', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/54848677226_0c430fb790_c.58hunv4b5g.webp', tags: ['Event Visuals', 'Exhibition', 'Global'], sections: ACTIVITY_SECTIONS_EN as any }
];

// --- EXPERIENCE ---

const EXPERIENCE_CN: ExperienceItem[] = [
  {
    id: 'exp-crydit',
    company: '上海天卓悦科技有限公司 (Crydit)',
    role: '品牌总监 & 设计总监',
    period: '2023.12 - 至今',
    companyIntro: 'Crydit 是一家区块链资产支付平台，为加密用户提供创新交易解决方案。',
    reportingTo: 'CEO',
    responsibilities: [
      '品牌策略与管理：从0到1建立并实施品牌战略，分析市场趋势和竞争对手，制定品牌推广计划。',
      '创意与设计管理：领导设计团队从0到1创建品牌视觉识别系统。',
      '跨部门合作：与市场营销、产品开发、销售等部门紧密合作。',
      '品牌传播与推广：规划并执行品牌传播活动，管理各渠道内容，组织国际展会。'
    ],
    achievements: [
      '品牌建设：成功创建 Crydit 品牌，独立完成全流程设计（用户调研、视觉及交互设计）。',
      '奖项荣誉：产品荣获纽约、伦敦、法国设计奖金奖、美国 MUSE 金奖及欧洲设计奖金奖。',
      '市场推广：6 个月内品牌知名度提升 80%，用户增长率达 50%。'
    ]
  },
  {
    id: 'exp-zotye',
    company: '上海君越汽车 (众泰汽车)',
    role: '资深视觉经理',
    period: '2022.5 - 2023.6',
    companyIntro: '新能源汽车市场主体，主导品牌重构。',
    responsibilities: [
      '品牌设计：独立创建并实施品牌视觉识别系统和设计规范。',
      '汽车造型设计：主导新款车型的 CMF 设计（色彩、材料、表面工艺）。'
    ]
  },
  {
    id: 'exp-guijiu',
    company: '中国贵酒集团',
    role: '品牌高级经理 & 总裁助理',
    period: '2021.11 - 2022.4',
    reportingTo: 'CMO 营销总裁',
    achievements: [
      '集团认可：2022 年被提名为集团优秀员工。',
      '品牌建设：参与 CCTV《大国品牌》故事片项目，荣获“2022 广告主年度案例”大奖。'
    ]
  },
  {
    id: 'exp-chunmai',
    company: '上海淳麦品牌管理有限公司',
    role: '视觉设计经理',
    period: '2018.7 - 2021.10',
    responsibilities: [
      '品牌形象设计：负责研究与设计 VIS 2.0 视觉系统并沿用至今。',
      '爆款设计：设计并推出 20 余款新品包装，推动销量同比增长 10 倍。'
    ]
  }
];

const EXPERIENCE_EN: ExperienceItem[] = [
  {
    id: 'exp-crydit-en',
    company: 'Shanghai Tianzhuoyue Technology (Crydit)',
    role: 'Brand Director & Design Director',
    period: '2022.5 - Present',
    responsibilities: [
      'Global Brand Strategy Execution',
      'Creative Identity Design Management from 0 to 1',
      'Global Exhibition Management (Token 2049)'
    ]
  }
];

const EDUCATION_CN: EducationItem[] = [
  {
    school: '哈尔滨理工大学',
    period: '2014 - 2018',
    degrees: ['视觉传达设计专业 【第一学位】', '人力资源管理专业 【第二学位】']
  }
];

const EDUCATION_EN: EducationItem[] = [
  {
    school: 'Harbin University of Science and Technology',
    period: '2014 - 2018',
    degrees: ["Bachelor's Degree in Visual Communication Design", "Bachelor's Degree in Human Resource Management"]
  }
];

const CERTIFICATES_CN: CertificateItem[] = [
  { year: '2023', name: 'LVMH 奢侈品品牌管理证书' }
];

const CERTIFICATES_EN: CertificateItem[] = [
  { year: '2023', name: 'LVMH Luxury Brand Management Certificate' }
];

export const CONTENT_CN: SiteContent = {
  nav: { portfolios: "作品集", career: "职业路径", connect: "联系我" },
  hero: {
    title: "JANICE MO",
    subtitle: "BEYOND VISUALS, INTO NARRATIVE.|一个以 AI 为准星，精准重构全球品牌美学资产与叙事逻辑的视觉狙击手",
    cta: "浏览作品集",
  },
  resume: {
    aboutTitle: "核心战略专长",
    aboutText: "", 
    stats: { exp: "从业年限", projects: "落地项目", awards: "国际大奖" },
    skillsTitle: "方法论与技能",
    experienceTitle: "职业履历",
    eduTitle: "教育背景",
    certTitle: "最新证书"
  },
  portfolio: {
    title: "作品档案",
    subtitle: "", 
    filters: { all: "全部领域", activity: "品牌活动与空间", brand_ecosystem: "Web3 金融生态", luxury: "奢侈品美学与调性", automotive: "智能出行体验", fnb: "餐饮商业", ai_drama: "AI 影像创新" }
  },
  footer: { rights: "© 2025 Janice Mo. 版权所有。保留所有权利。" },
  experience: EXPERIENCE_CN,
  education: EDUCATION_CN,
  certificates: CERTIFICATES_CN,
  skills: SKILLS_COMMON,
  projects: PROJECTS_CN,
  aiContext: "Janice Mo 从 0 到 1 打造 Crydit Web3 品牌并获多项国际设计大奖；主导众泰汽车新能源 CMF 设计；持有 LVMH 奢侈品品牌管理证书。",
  awards: [
    { name: "New York Product Design Award", level: "Silver", desc: "纽约产品设计奖" },
    { name: "London Design Award", level: "Gold", desc: "伦敦设计奖" },
    { name: "French Design Award", level: "Gold", desc: "法国设计奖" },
    { name: "American MUSE Design Awards", level: "Gold", desc: "美国 MUSE 奖" },
    { name: "European Design Award", level: "Gold", desc: "欧洲设计奖" }
  ]
};

export const CONTENT_EN: SiteContent = {
  nav: { portfolios: "WORKS", career: "CAREER", connect: "CONNECT" },
  hero: {
    title: "JANICE MO",
    subtitle: "BEYOND VISUALS, INTO NARRATIVE.|An Aesthetic Sniper leveraging AI precision to recalibrate brand narratives and reconstruct global visual assets with surgical accuracy.",
    cta: "Explore Portfolio",
    available: "Global Strategic Partner"
  },
  resume: {
    aboutTitle: "Strategic Expertise",
    aboutText: "", 
    stats: { exp: "Professional Years", projects: "Global Projects", awards: "Design Awards" },
    skillsTitle: "Methodology",
    experienceTitle: "Experience",
    eduTitle: "Education",
    certTitle: "Latest Certificates"
  },
  portfolio: {
    title: "Archive",
    subtitle: "", 
    filters: { all: "All", activity: "EVENT & SPACE", brand_ecosystem: "WEB3 FINANCE", luxury: "LUXURY AESTHETICS", automotive: "SMART MOBILITY", fnb: "F&B Commercial", ai_drama: "AIGC VIDEO" }
  },
  footer: { rights: "© 2025 Janice Mo. All Rights Reserved." },
  experience: EXPERIENCE_EN,
  education: EDUCATION_EN,
  certificates: CERTIFICATES_EN,
  skills: SKILLS_COMMON,
  projects: PROJECTS_EN,
  aiContext: "Janice Mo is an Aesthetic Sniper leveraging AI precision to recalibrate brand narratives. Key achievements: built Crydit Web3 ecosystem from scratch (winning global awards), directed NEV CMF design, and holds LVMH Luxury Brand Management Certificate.",
  awards: [
    { name: "New York Product Design Award", level: "Silver", desc: "International Recognition" },
    { name: "London Design Award", level: "Gold", desc: "Excellence in Design" },
    { name: "French Design Award", level: "Gold", desc: "Aesthetic Innovation" },
    { name: "American MUSE Design Awards", level: "Gold", desc: "Creative Excellence" },
    { name: "European Design Award", level: "Gold", desc: "Pan-European Standard" }
  ]
};