import { SiteContent, Project, ExperienceItem, SkillItem, EducationItem, CertificateItem, BlogPost } from './types';

export const CV_URL = 'YOUR_CV_FILE_PATH.pdf';

export const DESIGN_PHILOSOPHY_CN = {
  title: "",
  quote: "真正的战略视觉，不该被行业壁垒设限。",
  description: "拥有跨越加密、高奢、快消及科技等 9 年+ 多赛道实战经验，我拒绝做单纯的执行者，而是擅长捕捉不同商业形态下的核心共性。 打破策略与设计的边界，我利用 AI 效能重构工作流，将抽象的商业策略无损翻译为具象的视觉资产。\n\n无论赛道如何切换，我的目的只有一个：帮品牌建立绝对的“信任溢价”，拿回市场的叙事主权。"
};

export const DESIGN_PHILOSOPHY_EN = {
  title: "",
  quote: "True strategic design should recognize no boundaries.",
  description: "With 9+ years of expertise spanning Crypto, Luxury, FMCG, and Tech, I refuse to be a mere executor. Instead, I specialize in identifying the core commercial logic across diverse sectors.\n\nBridging the gap between Strategy and Design, I leverage AI to reconstruct workflows, flawlessly translating abstract business strategies into tangible visual assets. Regardless of the industry, my goal remains singular: to secure a definitive \"Trust Premium\" for the brand and reclaim its \"Narrative Sovereignty\" in the market."
};

export const STRATEGIC_EXPERTISE_CN = [
  { title: "跨域视觉战略", desc: "9年+实战，视界无疆。 深耕涵盖 WEB3 市场、奢侈品、餐饮酒水、创新消费品、教育、医疗、跨境/国内电商、广告公司等多个行业赛道。擅长利用跨界思维打破行业同质化，将复杂的商业逻辑转化为极具穿透力的视觉语言，实现降维打击。", label: "Cross-Domain Visual Strategy" },
  { title: "全链路品牌操盘", desc: "从顶层战略推演到像素级落地，全案掌控。 拒绝割裂执行，具备极强的资源整合力。我是品牌资产的**“增值操盘手”**，确保品牌策略在每一个视觉触点都能精准兑现，实现商业价值最大化。", label: "Full-Link Brand Command" },
  { title: "AIGC 智能工作流架构 (🔥 核心杀手锏)", desc: "AI 时代的视觉先锋与破局者。 拒绝盲目堆砌工具，专注于用 AI 重构创意生产关系。建立“人机协同”的超级工作流，将创意验证周期压缩至极限，以指数级效率输出高品质方案，在技术变革中为品牌抢占绝对先机。", label: "AIGC Workflow Architecture" },
  { title: "敏捷效能领导力", desc: "推动组织从“人力驱动”向“智力增强”进化。 打造适应 AI 变革的敏捷特种部队。不仅是管理者，更是技术布道者，擅长领导与协调团队在不确定的市场环境中，以最快速度锁定目标，拿结果说话。", label: "Agile Leadership & Efficiency" }
];

export const STRATEGIC_EXPERTISE_EN = [
  { title: "Cross-Domain Visual Strategy", desc: "Vision Without Borders: 9+ Years of Field Mastery. Deep expertise across diverse high-barrier sectors including Web3, Luxury, F&B, CPG, Education, Healthcare, Global E-commerce, and Advertising. I specialize in leveraging cross-industry insights to shatter market homogeneity, translating complex business logic into penetrating visual languages that deliver a strategic multidimensional impact.", label: "STRATEGY" },
  { title: "Full-Link Brand Command", desc: "From Top-Tier Strategy to Pixel-Perfect Execution. I reject fragmented execution. With exceptional resource integration capabilities, I operate as a \"Brand Asset Growth Architect.\" I ensure brand strategy is precisely realized across every visual touchpoint, maximizing commercial value through holistic control and consistency.", label: "COMMAND" },
  { title: "AIGC Workflow Architecture", desc: "Visual Pioneer & Disruptor in the AI Era. I go beyond tool stacking to reconstruct the creative production ecosystem with AI. By building a \"Human-AI Collaborative\" super workflow, I compress creative validation cycles to the absolute limit. This delivers high-quality solutions with exponential efficiency, securing a definitive competitive edge for brands amidst technological shifts.", label: "AIGC" },
  { title: "Agile Leadership & Efficiency", desc: "Evolving Organizations from \"Manpower-Driven\" to \"Intelligence-Enhanced.\" I build agile \"special forces\" teams adapted for the AI revolution. More than just a manager, I am a technical evangelist. I excel at leading and coordinating teams through market uncertainty, rapidly locking onto targets, and letting results speak for themselves.", label: "LEADERSHIP" }
];

const SKILLS_COMMON: SkillItem[] = [
  { name: 'Brand Strategy', level: 98 },
  { name: 'Visual Identity', level: 96 },
  { name: 'Industrial Aesthetic', level: 94 },
  { name: 'AI Creative Flow', level: 95 },
];

// --- IMAGES (RECOVERED & PERSISTED) ---
const LUXURY_LOEWE_IMAGES = [
  'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326728.175v5pf78q.webp',
  'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326724.iclloro8u.webp'
];
const LUXURY_LORO_PIANA_IMAGES = [
  'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326737.6m4do4uclr.webp',
  'https://github.com/user-attachments/assets/5072b46b-f6ec-4d8c-b761-c15a147e2ea3',
  'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326740.2kse9qq99e.webp',
  'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326741.9kgnrn2m1q.webp'
];
const LUXURY_CARTIER_IMAGES = [
  'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326732.51emonx56r.webp',
  'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326733.4cld4n9m52.webp',
  'https://github.com/user-attachments/assets/fd425ba6-edf7-447c-ac48-ec4d49cb008e',
  'https://github.com/user-attachments/assets/40d73c9b-37b2-4ff9-b362-0e4035b366d8'
];

// --- SECTIONS ---
const RIVIAN_SECTIONS_CN = [{ title: 'Rivian 官网交互体验设计', label: 'DIGITAL EXPERIENCE', icon: 'Globe', description: '致力于定义高性能电动皮卡的新范式。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.175v2c7o3h.webp'] }];
const RIVIAN_SECTIONS_EN = [{ title: 'Rivian Digital Interactive Experience', label: 'DIGITAL EXPERIENCE', icon: 'Globe', description: 'Defining a new paradigm for high-performance electric pick-up trucks.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.175v2c7o3h.webp'] }];

const INTU_SECTIONS_CN = [
  { title: 'INTU 品牌战略：从功能到灵感', label: 'STRATEGIC ARCHITECTURE', icon: 'Hexagon', description: '不造冷冰冰的机器，只做懂你的都市灵感伴侣。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---1.6wr7csl4f3.webp'] },
  { title: '视觉叙事与工业美学系统', label: 'VISUAL & CMF SYSTEM', icon: 'Layers', isSlider: true, description: '整合品牌标识、内外饰 CMF 颜色设计与原创概念场景。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_08.7p42ui7p3b.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_09.58hufl0t6w.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_10.1hsoucbxzd.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_11.eszktuu8e.webp'] }
];
const INTU_SECTIONS_EN = [
  { title: 'INTU Strategic Architecture', label: 'STRATEGIC ARCHITECTURE', icon: 'Hexagon', description: 'Positioning INTU as a "Lifestyle Tech Brand."', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---1.6wr7csl4f3.webp'] },
  { title: 'Visual Narrative & CMF Identity', label: 'VISUAL & CMF SYSTEM', icon: 'Layers', isSlider: true, description: 'Integrating brand ID, interior/exterior CMF design.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_08.7p42ui7p3b.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_09.58hufl0t6w.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_10.1hsoucbxzd.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_11.eszktuu8e.webp'] }
];

const CRYDIT_SECTIONS_CN = [
  { title: '核心视觉身份标准', label: 'BRAND DNA', icon: 'Hexagon', description: '建立 Crydit 的底层视觉基因，通过高度几何化的符号系统定义金融科技。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326722.3govkhorey.webp'] },
  { title: '数字化门户与官方枢纽', label: 'WEB ARCHITECTURE', icon: 'Globe', description: '强调信息层级的高效流动与 Web3 交互美学。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/4.232cghnb0s.webp'] },
  { title: '社交叙事与 IP 人格化', label: 'SOCIAL VOICE', icon: 'Twitter', isSlider: true, description: '在社交平台构建具有温度的 IP 叙事。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326851.3govki18n9.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326865.6pnzh5oq9s.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326871.4qrsqtj7y3.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326882-16.24.57.1ziqiqx3w6.webp'] }
];

const LUXURY_SECTIONS_CN = [
  { title: 'LOEWE：有机超现实与触感温润', label: 'BRAND CAMPAIGN', icon: 'Sparkles', isGrid: true, description: '捕捉品牌独有的智性趣味与工匠精神。', images: LUXURY_LOEWE_IMAGES },
  { title: 'Loro Piana：静谧奢华与纤维之巅', label: 'BRAND CAMPAIGN', icon: 'Sparkles', isGrid: true, description: '深入 Loro Piana 的静谧奢华语境。', images: LUXURY_LORO_PIANA_IMAGES },
  { title: 'CARTIER ：隽永光影', label: 'BRAND CAMPAIGN', icon: 'Sparkles', isGrid: true, description: '这组作品是我们对“永恒”的一次光影探索。', images: LUXURY_CARTIER_IMAGES }
];

const ACTIVITY_SECTIONS_CN = [
  {
    title: 'Token 2049 全球品牌阵地操盘 (2024-2025)',
    label: 'GLOBAL EXHIBITION',
    icon: 'Globe',
    isCircularGallery: true,
    description: '作为品牌负责人，我全程主导了 Crydit 连续两届在新加坡 Token 2049 的深度亮相。从品牌出海的战略蓝图规划，到全链路视觉导视系统与高科技交互空间的无缝落地，确保在世界级金融流量中心实现品牌价值的高频且一致性输出。',
    points: [
      '品牌声量爆发：累计精准触达全球 50,000+ 行业精英，线上线下协同传播矩阵共计达成 1.2M+ 次品牌曝光。',
      '获客效能飞跃：通过差异化的沉浸式空间交互策划，现场高质量 BD 线索转化率较传统展位模式显著提升 35%。',
      '卓越资源协同：统筹跨国供应链及 10+ 全球合作伙伴，在 48 小时极速周期内完成从 0 到 1 的高规格品牌物理空间构建。',
      '[ 备注 ]：由于网页篇幅及品牌保密限制，此处仅展示部分现场纪实。如需了解完整的品牌营销策略、展位动线设计稿及更多视觉交付物，欢迎在沟通中深度探讨。'
    ],
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/54848677226_0c430fb790_c.58hunv4b5g.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/GXrzbbuaUAA8GDc.6m4dru60fh.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Gbgz1l1bQAA3SDL.5moaeo399k.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/54848921704_5e59e0491a_c.26lymkl0lc.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/54848677416_1fb15318b3_c.7w7ay5fe4f.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/54843876797_870cfa779e_k.3k8hqlw2m3.webp'
    ]
  }
];

const ACTIVITY_SECTIONS_EN = [
  {
    title: 'Token 2049: Global Brand Presence & Strategic Command (2024-2025)',
    label: 'GLOBAL EXHIBITION',
    icon: 'Globe',
    isCircularGallery: true,
    description: 'As Head of Brand, I spearheaded Crydit\'s expansive presence at Token 2049 Singapore for two consecutive years.',
    points: [
      'Brand Momentum: Reached over 50,000 global industry leaders, generating 1.2M+ impressions.',
      'Conversion Efficiency: Increased high-quality BD lead conversion by 35%.',
      'Logistical Synergy: Constructed high-spec physical brand environment from zero within 48 hours.'
    ],
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/54848677226_0c430fb790_c.58hunv4b5g.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/GXrzbbuaUAA8GDc.6m4dru60fh.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Gbgz1l1bQAA3SDL.5moaeo399k.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/54848921704_5e59e0491a_c.26lymkl0lc.webp'
    ]
  }
];

// --- EXPERIENCE DATA ---
const EXPERIENCE_CN: ExperienceItem[] = [
  {
    id: 'exp-crydit',
    company: '上海天卓悦科技有限公司 (Crydit)',
    role: '品牌总监 & 设计总监',
    period: '2023.12 - 至今',
    companyIntro: 'Crydit 是一家区块链资产支付平台，为加密用户提供创新交易解决方案。',
    reportingTo: 'CEO',
    responsibilities: [
      '品牌策略与管理：从0到1建立并实施品牌战略，分析市场趋势和竞争对手，制定品牌推广计划，提升品牌知名度和市场份额。',
      '创意与设计管理：领导设计团队从0到1创建品牌视觉识别系统，监督广告、包装、数字媒体和活动设计等创意项目，确保输出创新且品牌一致。',
      '跨部门合作：与市场营销、产品开发、销售等部门紧密合作，协调外部供应商和合作伙伴，确保品牌项目的高质量执行。',
      '品牌传播与推广：规划并执行品牌传播活动，管理各渠道品牌内容，组织推广活动和国际展会，提升市场影响力。',
      '团队管理与发展：负责设计团队的招聘、培训和管理，制定团队工作计划和目标，监督项目进度，提升团队专业技能和效率。'
    ],
    achievements: [
      '品牌建设：从0到1成功创建Crydit品牌，设计并实施了全面的品牌视觉识别系统。在初创阶段团队未组建之前，独立完成产品全流程设计（用户调研、定位、视觉及交互设计），产品荣获纽约产品设计奖金奖、伦敦设计奖银奖、法国设计奖金奖、美国MUSE金奖、欧洲设计奖金奖等多项国际大奖。',
      '市场推广：通过创新的品牌推广策略，Crydit在推向市场后的6个月内，品牌知名度提升了30%，用户增长率达50%。',
      '跨部门协作：领导多个跨部门项目，制定品牌推广流程，使项目完成时间缩短了15%。',
      '活动策划：主导TOKEN 2049项目，吸引了超过5w名参与者，显著提升了品牌影响力和用户参与度。策划并执行了一系列线上线下活动，活动期间社交媒体曝光量增加了50%。'
    ]
  },
  {
    id: 'exp-zotye',
    company: '上海君越汽车 (众泰汽车)',
    role: '资深视觉经理',
    period: '2022.5 - 2023.6',
    companyIntro: '是众泰汽车重整后的业务主体，全力进军新能源汽车市场。',
    reportingTo: '品牌部总监',
    reasonForLeaving: '公司项目资金停滞',
    responsibilities: [
      '品牌设计：独立创建并实施品牌视觉识别系统和设计规范，确保品牌形象的一致性。',
      '方案策划：主导品牌创意创意，负责品牌传播视觉设计，提高市场影响力。',
      '创意把控：审核并管理品牌设计项目，监督品牌资产，确保高标准。',
      '外联管理：作为品牌设计负责人，对接各部门和供应商，协调跨职能工作关系，主导项目沟通。',
      '汽车造型设计：主导新款车型的CMF设计（色彩、材料、表面工艺），确保视觉和触感优势。'
    ]
  },
  {
    id: 'exp-guijiu',
    company: '中国贵酒集团',
    role: '品牌高级经理 & 总裁助理',
    period: '2021.11 - 2022.4',
    companyIntro: '一家融合经典与创新的综合性酒业集团（股票代码600696）。',
    reportingTo: 'CMO 营销总裁',
    reasonForLeaving: '隶属公司搬迁至深圳',
    responsibilities: [
      '视觉管理：协助CMO营销总裁，负责中国贵酒集团及其子公司的设计质量审核与把关。基于品牌设计DNA，持续生成并维护品牌视觉识别系统（Brandbook及Guideline）。',
      '公共关系：作为品牌部门代表，与各集团及各职能部门进行沟通协调，整合资源，确保跨部门合作的高效顺畅。'
    ],
    achievements: [
      '行业荣誉：参与独家冠名CCTV《大国品牌》故事片项目，项目在第29届中国国际广告节荣获年度内容营销案例及年度媒企合作案例大奖。',
      '创新案例：“千城万企”项目在国际高品质消费博览会上被评为十大高品质消费创新案例。'
    ]
  }
];

const EXPERIENCE_EN: ExperienceItem[] = [
  {
    id: 'exp-crydit-en',
    company: 'Shanghai Tianzhuoyue Technology Co., Ltd. (Crydit)',
    role: 'Brand Director & Design Director',
    period: '2023.12 - Present',
    companyIntro: 'Crydit is a blockchain asset payment platform for cryptocurrency users.',
    reportingTo: 'CEO',
    responsibilities: [
      'Brand Strategy and Management: Executed brand strategies from inception, analyzing market trends and competitors.',
      'Creative and Design Management: Led the team to create the visual identity from the ground up, overseeing advertising, packaging, and digital media.',
      'Team Leadership: Recruited and managed the design team, setting goals and supervising project progress.'
    ],
    achievements: [
      'Brand Building: Won multiple international awards (New York Gold, MUSE Gold, European Gold) for full-link product design.',
      'Market Reach: Reached 50,000+ leaders at TOKEN 2049, increasing brand exposure by 50%.'
    ]
  },
  {
    id: 'exp-zotye-en',
    company: 'Shanghai Junqu Automobile (Zotye Auto)',
    role: 'Senior Visual Manager',
    period: '2022.5 - 2023.6',
    reportingTo: 'Director of Brand Department',
    responsibilities: [
      'Brand Design: Developed the visual identity independently, ensuring consistent brand imagery.',
      'Automotive Design: Led CMF (Color, Material, Finish) design for new car models.'
    ]
  }
];

const EDUCATION_CN: EducationItem[] = [{ school: '哈尔滨理工大学', period: '2014 - 2018', degrees: ['视觉传达设计专业 【第一学位】', '人力资源管理专业 【第二学位】'] }];
const EDUCATION_EN: EducationItem[] = [{ school: 'Harbin University of Science and Technology', period: '2014 - 2018', degrees: ["Bachelor's Degree in Visual Communication Design", "Second Bachelor's Degree in Human Resource Management"] }];

// --- CERTIFICATES (UPDATED ACCREDITATIONS SECTION) ---
export const CERTIFICATES_CN: CertificateItem[] = [
  { 
    year: '2023', 
    name: 'LVMH Luxury Brand Management Certificate', 
    issuer: 'LVMH', 
    focus: 'Luxury Codes, Heritage Storytelling, Premium Brand Equity.' 
  },
  { 
    year: '2024', 
    name: 'Google AI Essentials 【Google AI 基础】', 
    issuer: 'Google', 
    focus: 'Gen-AI Workflow Architecture, Human-AI Collaboration.', 
    isPriority: true 
  },
  { 
    year: '2024', 
    name: 'Google Data Analytics Professional Certificate 【Google 数据分析专业认证】', 
    issuer: 'Google', 
    focus: 'Data-Driven Insight, Precision Decision Making.' 
  },
  { 
    year: '2024', 
    name: 'Google Digital Marketing & E-commerce Professional Certificate 【Google 数字营销与电子商务专业认证】', 
    issuer: 'Google', 
    focus: 'Full-Funnel Growth, Omni-channel Strategy.' 
  },
  { 
    year: '2024', 
    name: 'Google UX Design Professional Certificate 【Google UX 设计专业认证】', 
    issuer: 'Google', 
    focus: 'User-Centric Experience Ecosystems.' 
  }
];

export const CERTIFICATES_EN: CertificateItem[] = [
  { 
    year: '2023', 
    name: 'LVMH Luxury Brand Management Certificate', 
    issuer: 'LVMH', 
    focus: 'Luxury Codes, Heritage Storytelling, Premium Brand Equity.' 
  },
  { 
    year: '2024', 
    name: 'Google AI Essentials', 
    issuer: 'Google', 
    focus: 'Gen-AI Workflow Architecture, Human-AI Collaboration.', 
    isPriority: true 
  },
  { 
    year: '2024', 
    name: 'Google Data Analytics Professional Certificate', 
    issuer: 'Google', 
    focus: 'Data-Driven Insight, Precision Decision Making.' 
  },
  { 
    year: '2024', 
    name: 'Google Digital Marketing & E-commerce Professional Certificate', 
    issuer: 'Google', 
    focus: 'Full-Funnel Growth, Omni-channel Strategy.' 
  },
  { 
    year: '2024', 
    name: 'Google UX Design Professional Certificate', 
    issuer: 'Google', 
    focus: 'User-Centric Experience Ecosystems.' 
  }
];

export const BLOG_POSTS_CN: BlogPost[] = [
  {
    id: 'luxury-ai-narrative',
    title: '奢侈品行业的 AI 叙事：如何保持稀缺性？',
    author: 'Janice Mo',
    date: '2025.03.10',
    readTime: '6 分钟',
    summary: '丰饶的悖论：在 AIGC 时代重构奢侈品的“稀缺性”',
    content: '🚨 核心摘要：奢侈品必须从视觉美学向排他性叙事转型。',
    imageUrl: 'https://images.unsplash.com/photo-1678382156212-f140130094e8?q=80&w=1920',
    sections: [{ subtitle: '审美平权后的资产贬值', text: '高级感不再稀缺。在 AI 时代，拼“好看”是低维竞争，拼“叙事主权”才是核心。', image: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?q=80&w=1920' }]
  }
];

export const BLOG_POSTS_EN: BlogPost[] = [
  {
    id: 'luxury-ai-narrative-en',
    title: 'AI Narratives in Luxury: Maintaining Scarcity?',
    author: 'Janice Mo',
    date: 'March 10, 2025',
    readTime: '6 min',
    summary: 'The Paradox of Abundance in the AIGC Era.',
    content: 'AI should be used for "Customized Solitude" rather than mass production.',
    imageUrl: 'https://images.unsplash.com/photo-1678382156212-f140130094e8?q=80&w=1920',
    sections: [{ subtitle: 'Depreciation of Aesthetics', text: 'Looking good is no longer a moat.' }]
  }
];

// --- PROJECTS CONFIG ---
export const PROJECTS_CN: Project[] = [
  { id: 'automotive', title: '智能出行体验', category: 'AUTOMOTIVE_DESIGN', subCategory: 'STRATEGY', description: '从 Rivian 的极致交互到 INTU 的“灵感引擎”重塑。整合三幕式传播战役与 CMF 工业美学。', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/61b75b229825189.686c03868bc97.39lnp5zjeb.webp', tags: ['汽车重塑', '传播战役', 'CMF设计'], sections: [...RIVIAN_SECTIONS_CN, ...INTU_SECTIONS_CN] as any },
  { id: 'crydit-brand', title: 'Web3 金融生态', category: 'BRAND_ECOSYSTEM', subCategory: 'STRATEGY', description: '从底层视觉基因到全球化社交 IP 叙事，为高端金融科技品牌打造完整生态。', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/LIifestyle3.8z700n5tjh.webp', tags: ['品牌全案', '金融科技', 'Web3'], sections: CRYDIT_SECTIONS_CN as any },
  { id: 'ai-drama', title: 'AIGC 影像创新', category: 'AI_CREATIVE', subCategory: 'CONTENT_CREATION', description: '利用生成式 AI 技术重塑制作流，打造电影感体验。', imageUrl: 'https://images.unsplash.com/photo-1677442135968-356c9d09c3a3?q=80&w=1920', videoUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/ai-preview.mp4', tags: ['AI 生成', '电影感', '数字生命'], sections: [{ title: 'AI 电影感叙事', label: 'CINEMATIC AI', icon: 'Sparkles', description: '重塑光影美学。', videoUrl: 'https://github.com/user-attachments/assets/e3f24a85-721f-409e-9bcb-c220b7a692ad', images: [] }] as any },
  { id: 'luxury', title: '奢侈品美学与调性', category: 'LUXURY_DESIGN', subCategory: 'IDENTITY', description: 'LVMH 美学体系下的视觉叙事与内容排版。', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/cody-gallo-toe53OJv7Kg-unsplash.eszjbryme.jpg', tags: ['美学范式', 'LVMH', '内容策略'], sections: LUXURY_SECTIONS_CN as any },
  { id: 'activity-visual', title: '品牌活动与空间', category: 'ACTIVITY_VISUALS', subCategory: 'CAMPAIGN', description: "从新加坡的国际视野到央视的国家高度，我致力于用极具未来感的视觉语言，重塑品牌在全球竞争中的叙事主权。", imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920', tags: ['活动视觉', '线下展陈', '全球视野'], sections: ACTIVITY_SECTIONS_CN as any }
];

export const PROJECTS_EN: Project[] = [
  { id: 'automotive', title: 'SMART MOBILITY', category: 'AUTOMOTIVE_DESIGN', subCategory: 'STRATEGY', description: 'Redefining automotive branding through Rivian and INTU case studies. Integrating CMF Industrial Aesthetics.', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/61b75b229825189.686c03868bc97.39lnp5zjeb.webp', tags: ['Automotive', 'Branding', 'Digital'], sections: [...RIVIAN_SECTIONS_EN, ...INTU_SECTIONS_EN] as any },
  { id: 'crydit-brand', title: 'WEB3 FINANCE', category: 'BRAND_ECOSYSTEM', subCategory: 'STRATEGY', description: 'Constructing a complete brand narrative for premium Fintech lifestyle.', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/LIifestyle3.8z700n5tjh.webp', tags: ['Brand Strategy', 'Fintech', 'Web3'], sections: CRYDIT_SECTIONS_CN as any },
  { id: 'ai-drama', title: 'AIGC VIDEO', category: 'AI_CREATIVE', subCategory: 'CONTENT_CREATION', description: 'Utilizing generative AI to reshape production flows and cinematic experiences.', imageUrl: 'https://images.unsplash.com/photo-1677442135968-356c9d09c3a3?q=80&w=1920', videoUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/ai-preview.mp4', tags: ['AI Gen', 'Cinematic', 'Workflow'], sections: [{ title: 'Cinematic AI Narrative', label: 'CINEMATIC AI', icon: 'Sparkles', description: 'Reshaping aesthetic horizons through light and shadow.', videoUrl: 'https://github.com/user-attachments/assets/e3f24a85-721f-409e-9bcb-c220b7a692ad', images: [] }] as any },
  { id: 'luxury', title: 'LUXURY AESTHETICS', category: 'LUXURY_DESIGN', subCategory: 'IDENTITY', description: 'Visual storytelling and editorial layout within the LVMH aesthetic framework.', imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/cody-gallo-toe53OJv7Kg-unsplash.eszjbryme.jpg', tags: ['Aesthetic', 'LVMH', 'Content Strategy'], sections: LUXURY_SECTIONS_CN as any },
  { id: 'activity-visual-en', title: 'EVENT & SPACE', category: 'ACTIVITY_VISUALS', subCategory: 'CAMPAIGN', description: 'Redefining brand narrative sovereignty in global competition through futuristic visual language.', imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920', tags: ['Event Visuals', 'Exhibition', 'Global'], sections: ACTIVITY_SECTIONS_EN as any }
];

export const CONTENT_CN: SiteContent = {
  nav: { portfolios: "作品档案", career: "职业履历", credentials: "个人职业资质", awards: "商业实战荣誉", blog: "Blog", connect: "联系我", downloadCv: "下载 CV" },
  hero: { title: "JANICE MO", subtitle: "BEYOND VISUALS, INTO NARRATIVE.|一个以 AI 为准星，精准重构全球品牌美学资产与叙事逻辑的视觉狙击手", cta: "浏览作品集", available: "" },
  resume: { aboutTitle: "STRATEGIC MOAT", aboutText: "", stats: { exp: "从业年限", projects: "落地项目", awards: "国际大奖" }, skillsTitle: "方法论与技能", experienceTitle: "职业履历", eduTitle: "教育背景", certTitle: "个人职业资质" },
  portfolio: { title: "作品档案", subtitle: "", filters: { all: "全部领域", activity: "品牌活动与空间", brand_ecosystem: "Web3 金融生态", luxury: "奢侈品美学与调性", automotive: "智能出行体验", fnb: "餐饮商业", ai_drama: "AI 影像创新" } },
  blog: { title: "AI Thought Leadership", subtitle: "关于 AIGC、品牌叙事与未来美学的深度思考", readMore: "阅读全文" },
  footer: { rights: "© 2025 Janice Mo. 版权所有。保留所有权利。" },
  experience: EXPERIENCE_CN,
  education: EDUCATION_CN,
  certificates: CERTIFICATES_CN,
  skills: SKILLS_COMMON,
  projects: PROJECTS_CN,
  blogPosts: BLOG_POSTS_CN,
  aiContext: "Janice Mo 是一位以 AI 为准星的视觉狙击手。核心成就：Crydit 品牌主理，获多项国际大奖；曾任众泰汽车视觉经理及中国贵酒总裁助理。持有 LVMH 品牌管理证书及 Google AI 认证。",
  awards: [
    { name: "New York Product Design Award", level: "Gold", desc: "纽约产品设计奖" },
    { name: "London Design Award", level: "Silver", desc: "伦敦设计奖" },
    { name: "French Design Award", level: "Gold", desc: "法国设计奖" },
    { name: "American MUSE Design Awards", level: "Gold", desc: "美国 MUSE 奖" },
    { name: "European Design Award", level: "Gold", desc: "欧洲设计奖" }
  ]
};

export const CONTENT_EN: SiteContent = {
  nav: { portfolios: "Archive", career: "Career", credentials: "Qualifications", awards: "Accolades", blog: "Blog", connect: "Connect", downloadCv: "Download CV" },
  hero: { title: "JANICE MO", subtitle: "BEYOND VISUALS, INTO NARRATIVE.|An Aesthetic Sniper leveraging AI precision to recalibrate brand narratives.", cta: "Explore Portfolio", available: "" },
  resume: { aboutTitle: "STRATEGIC MOAT", aboutText: "", stats: { exp: "Professional Years", projects: "Global Projects", awards: "Design Awards" }, skillsTitle: "Methodology", experienceTitle: "Career", eduTitle: "Education", certTitle: "Professional Qualifications" },
  portfolio: { title: "Archive", subtitle: "", filters: { all: "All", activity: "EVENT & SPACE", brand_ecosystem: "WEB3 FINANCE", luxury: "LUXURY AESTHETICS", automotive: "SMART MOBILITY", fnb: "F&B Commercial", ai_drama: "AIGC VIDEO" } },
  blog: { title: "AI Thought Leadership", subtitle: "Reflections on AIGC, Branding, and Future Aesthetics", readMore: "Read More" },
  footer: { rights: "© 2025 Janice Mo. All Rights Reserved." },
  experience: EXPERIENCE_EN,
  education: EDUCATION_EN,
  certificates: CERTIFICATES_EN,
  skills: SKILLS_COMMON,
  projects: PROJECTS_EN,
  blogPosts: BLOG_POSTS_EN,
  aiContext: "Janice Mo is a Brand & Design Director with 9+ years of experience across crypto, luxury, and tech. She has secured multiple international awards including New York, London, and French Design Awards.",
  awards: [{ name: "New York Product Design Award", level: "Gold", desc: "International Recognition" }]
};