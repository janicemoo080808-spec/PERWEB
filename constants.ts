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

// --- STRATEGIC EXPERTISE DATA (STRATEGIC MOAT) ---
export const STRATEGIC_EXPERTISE_CN = [
  { 
    title: "跨域视觉战略", 
    desc: "9年+实战，视界无疆。 深耕涵盖 WEB3 市场、奢侈品、餐饮酒水、创新消费品、教育、医疗、跨境/国内电商、广告公司等多个行业赛道。擅长利用跨界思维打破行业同质化，将复杂的商业逻辑转化为极具穿透力的视觉语言，实现降维打击。", 
    label: "Cross-Domain Visual Strategy" 
  },
  { 
    title: "全链路品牌操盘", 
    desc: "从顶层战略推演到像素级落地，全案掌控。 拒绝割裂执行，具备极强的资源整合力。我是品牌资产的**“增值操盘手”**，确保品牌策略在每一个视觉触点都能精准兑现，实现商业价值最大化。", 
    label: "Full-Link Brand Command" 
  },
  { 
    title: "AIGC 智能工作流架构 (🔥 核心杀手锏)", 
    desc: "AI 时代的视觉先锋与破局者。 拒绝盲目堆砌工具，专注于用 AI 重构创意生产关系。建立“人机协同”的超级工作流，将创意验证周期压缩至极限，以指数级效率输出高品质方案，在技术变革中为品牌抢占绝对先机。", 
    label: "AIGC Workflow Architecture" 
  },
  { 
    title: "敏捷效能领导力", 
    desc: "推动组织从“人力驱动”向“智力增强”进化。 打造适应 AI 变革的敏捷特种部队。不仅是管理者，更是技术布道者，擅长领导与协调团队在不确定的市场环境中，以最快速度锁定目标，拿结果说话。", 
    label: "Agile Leadership & Efficiency" 
  }
];

export const STRATEGIC_EXPERTISE_EN = [
  { 
    title: "Cross-Domain Visual Strategy", 
    desc: "Vision Without Borders: 9+ Years of Field Mastery. Deep expertise across diverse high-barrier sectors including Web3, Luxury, F&B, CPG, Education, Healthcare, Global E-commerce, and Advertising. I specialize in leveraging cross-industry insights to shatter market homogeneity, translating complex business logic into penetrating visual languages that deliver a strategic multidimensional impact.", 
    label: "STRATEGY" 
  },
  { 
    title: "Full-Link Brand Command", 
    desc: "From Top-Tier Strategy to Pixel-Perfect Execution. I reject fragmented execution. With exceptional resource integration capabilities, I operate as a \"Brand Asset Growth Architect.\" I ensure brand strategy is precisely realized across every visual touchpoint, maximizing commercial value through holistic control and consistency.", 
    label: "COMMAND" 
  },
  { 
    title: "AIGC Workflow Architecture", 
    desc: "Visual Pioneer & Disruptor in the AI Era. I go beyond tool stacking to reconstruct the creative production ecosystem with AI. By building a \"Human-AI Collaborative\" super workflow, I compress creative validation cycles to the absolute limit. This delivers high-quality solutions with exponential efficiency, securing a definitive competitive edge for brands amidst technological shifts.", 
    label: "AIGC" 
  },
  { 
    title: "Agile Leadership & Efficiency", 
    desc: "Evolving Organizations from \"Manpower-Driven\" to \"Intelligence-Enhanced.\" I build agile \"special forces\" teams adapted for the AI revolution. More than just a manager, I am a technical evangelist. I excel at leading and coordinating teams through market uncertainty, rapidly locking onto targets, and letting results speak for themselves.", 
    label: "LEADERSHIP" 
  }
];

const SKILLS_COMMON: SkillItem[] = [
  { name: 'Brand Strategy', level: 98 },
  { name: 'Visual Identity', level: 96 },
  { name: 'Industrial Aesthetic', level: 94 },
  { name: 'AI Creative Flow', level: 95 },
];

// --- PROJECT DATA ---
const RIVIAN_SECTIONS_CN = [{ title: 'Rivian 官网交互体验设计', label: 'DIGITAL EXPERIENCE', icon: 'Globe', description: '致力于定义高性能电动皮卡的新范式。本次合作聚焦于 Rivian 官网的视觉叙事与体验重构。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.175v2c7o3h.webp'] }];
const RIVIAN_SECTIONS_EN = [{ title: 'Rivian Digital Experience & Configurator', label: 'DIGITAL EXPERIENCE', icon: 'Globe', description: 'Defining a new paradigm for high-performance electric trucks.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.175v2c7o3h.webp'] }];

const INTU_SECTIONS_CN = [
  { title: 'INTU 品牌战略：从功能到灵感', label: 'STRATEGIC ARCHITECTURE', icon: 'Hexagon', description: '确立 INTU 作为“生活科技品牌”的独特占位。我们是城市生活的“灵感提供商”。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---1.6wr7csl4f3.webp'] },
  { title: '视觉叙事与工业美学系统', label: 'VISUAL & CMF SYSTEM', icon: 'Layers', isSlider: true, description: '整合品牌标识、内外饰 CMF 颜色设计与原创概念场景。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_08.7p42ui7p3b.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_09.58hufl0t6w.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_10.1hsoucbxzd.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_11.eszktuu8e.webp'] },
  { title: '三幕式传播战役规划', label: 'CAMPAIGN STRATEGY', icon: 'Rocket', description: '策略核心：锐角切入 × 跨界共振 × 场景渗透。', points: ['第一幕：启示录 (The Spark) | 主题：INSPIRED by FUN','第二幕：高光时刻 (The Ignition) | 主题：Ins to U','第三幕：城市漫游 (The Flow) | 主题：Ins to City'], images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.41yj8f2y6n.webp', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.9gx1quihex.webp'] }
];
const INTU_SECTIONS_EN = [
  { title: 'INTU Strategic Architecture', label: 'STRATEGIC ARCHITECTURE', icon: 'Hexagon', description: 'Positioning INTU as a "Lifestyle Tech Brand".', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---1.6wr7csl4f3.webp'] },
  { title: 'Visual Narrative & CMF System', label: 'VISUAL & CMF SYSTEM', icon: 'Layers', isSlider: true, description: 'Integrating brand identity and interior/exterior CMF design.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_08.7p42ui7p3b.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_09.58hufl0t6w.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_10.1hsoucbxzd.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/毛宇君个人设计作品集(高清版)_页面_11.eszktuu8e.webp'] }
];

const CRYDIT_SECTIONS_CN = [
  { title: '核心视觉身份标准', label: 'BRAND DNA', icon: 'Hexagon', description: '建立 Crydit 的底层视觉基因。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326722.3govkhorey.webp'] },
  { title: '数字化门户与官方枢纽', label: 'WEB ARCHITECTURE', icon: 'Globe', description: '强调信息层级的高效流动与 Web3 交互美学。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/4.232cghnb0s.webp'] },
  { title: '社交叙事与 IP 人格化', label: 'SOCIAL VOICE', icon: 'Twitter', isSlider: true, description: '在社交平台构建具有温度的 IP 叙事。', images: ['https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326851.3govki18n9.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326865.6pnzh5oq9s.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326871.4qrsqtj7y3.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326882-16.24.57.1ziqiqx3w6.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/World-Football-Day-16.24.53.5q7w3zlz20.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/You’ll-regret-selling-your-coins-now-in-the-future..4qrsqtj7w9.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/image-2475.4ubeojcaob.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/卡戴珊-16.25.00.6f15o09i52.webp','https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/平安夜-16.24.57.26lye6j9b1.webp'] }
];
const CRYDIT_SECTIONS_EN = [
  { title: 'Core Visual Identity Standards', label: 'BRAND DNA', icon: 'Hexagon', description: 'Establishing foundational visual DNA of Crydit.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326722.3govkhorey.webp'] }
];

const LUXURY_SECTIONS_CN = [
  { title: '奢侈品美学编辑', label: 'EDITORIAL EXPERIENCE', icon: 'Camera', isSlider: true, description: '为 Dom Pérignon、Balmain 等品牌操盘期间，强调“呼吸感美学”。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-1.6f15o1r8b3.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2.9rjvif7snh.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-4.8ok694自由.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-3.7eh92ssk8m.webp'] },
  { title: 'LOEWE：有机超 surreal', label: 'BRAND CAMPAIGN', icon: 'Sparkles', isGrid: true, description: '关于工艺与想象力的策略性探索。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326728.175v5pf78q.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326724.iclloro8u.webp'] }
];
const LUXURY_SECTIONS_EN = [
  { title: 'Luxury Aesthetic Editorial', label: 'EDITORIAL EXPERIENCE', icon: 'Camera', isSlider: true, description: 'Creative visual assets for luxury brand WeChat accounts.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-1.6f15o1r8b3.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2.9rjvif7snh.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-4.8ok694自由.webp','https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-3.7eh92ssk8m.webp'] }
];

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

// --- EXPERIENCE (FULL TRANSCRIPTION) ---

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
      '创意与设计管理：领导设计团队从0到1创建品牌视觉识别系统，监督广告、包装、数字媒体和活动设计等项目，确保创新且符合品牌形象的产出。',
      '跨部门合作：与市场营销、产品开发、销售等部门紧密合作，协调外部供应商和合作伙伴，确保品牌项目的高质量执行。',
      '品牌传播与推广：规划并执行品牌传播活动，管理各渠道品牌内容，组织国际展会，提升市场影响力。',
      '团队管理与发展：负责设计团队的招聘、培训和管理，制定团队工作计划和目标，监督项目进度，提升团队专业技能和工作效率。'
    ],
    achievements: [
      '品牌建设：成功从0到1创建 Crydit 品牌，设计并实施了全套品牌视觉识别系统。在区块链行业内迅速提升品牌认可度，6个月内品牌知名度提升80%。在初始阶段团队未组建之前，独立完成产品全流程设计（用户调研、定位、视觉及交互设计），产品荣获纽约产品设计奖金奖、伦敦设计奖银奖、法国设计奖金奖、美国MUSE金奖、欧洲设计奖金奖等多项国际大奖。',
      '市场推广：通过创新的品牌推广策略，Crydit 在推向市场后的6个月内，品牌知名度提升了30%，用户增长率达50%。',
      '跨部门协作：领导多个跨部门项目，制定品牌推广流程，使项目完成时间缩短了15%。',
      '活动策划：主导TOKEN 2049项目，吸引了超过5w名参与者，显著提升品牌影响力和用户参与度。策划并执行了一系列线上线下活动，活动期间社交媒体曝光量增加了50%。'
    ]
  },
  {
    id: 'exp-zotye',
    company: '上海君越汽车 (众泰汽车)',
    role: '资深视觉经理',
    period: '2022.5 - 2023.6',
    companyIntro: '是众泰汽车重整后的业务主体，全力进军新能源汽车市场。',
    reportingTo: '品牌部门总监',
    responsibilities: [
      '品牌设计：独立创建并实施品牌视觉识别系统和设计规范，确保品牌形象一致。',
      '方案策划：主导品牌创意创意，负责品牌传播视觉设计，提高市场影响力。',
      '创意把控：审核品牌设计项目，管理品牌资产。',
      '外联管理：作为品牌设计负责人，对接各部门和供应商，协调跨职能工作关系，主导项目沟通。',
      '汽车造型设计：主导新款车型的CMF设计（色彩、材料、表面工艺），确保视觉和触感优势。'
    ]
  },
  {
    id: 'exp-guijiu',
    company: '中国贵酒集团',
    role: '品牌高级经理 & 总裁助理',
    period: '2021.11 - 2022.4',
    companyIntro: '一家融合经典与创新的综合性酒业集团（股票600696）。',
    reportingTo: 'CMO 营销总裁',
    responsibilities: [
      '视觉管理：协助CMO营销总裁，负责中国贵酒集团及旗下子公司（含海银酒业、中国花王集团等）的设计质量审核。基于品牌DNA，持续生成并维护品牌视觉识别系统（Brandbook及Guideline）确保品牌在各个触点的的一致性和高品质呈现。',
      '项目管理：通过组建团队、负责重点项目的统筹，包括团队组建、项目进度跟踪及人员调配，确保项目按时、高标准完成，达成预期目标。',
      '公共关系：作为品牌部的代表，与各集团及职能部门进行沟通协调，整合跨职能部门的资源，确保沟通效率和顺畅协作。'
    ],
    achievements: [
      '集团认可：2022年被提名为集团优秀员工，彰显了在职期间的出色表现和贡献。',
      '品牌建设：在团队组建完成前，仅用2个月时间成功完成花王集团从0到1的视觉体系搭建及品牌发布会。',
      '行业荣誉：参与独家冠名CCTV《大国品牌》故事片项目，该项目在第29届中国国际广告节荣获“2022广告主年度案例·年度内容营销案例”及“2022媒企合作年度案例”两项大奖。',
      '创新案例：“千城万店”项目在国际高品质消费博览会上被评为十大高品质消费创新案例，提升集团品牌影响力及市场美誉度。'
    ]
  },
  {
    id: 'exp-chunmai',
    company: '上海淳麦品牌管理有限公司',
    role: '视觉设计经理',
    period: '2018.7 - 2021.10',
    companyIntro: '法国 Les Moulines d’Antoine 在中国大陆的唯一品牌授权合作方，旗下包括 Le Jardin d’Antoine 红磨坊餐厅等品牌。',
    reportingTo: '执行董事',
    responsibilities: [
      '品牌形象设计：负责研究与设计公司整体品牌形象，根据品牌定位构建品牌视觉系统，建立并维护品牌视觉标准化。',
      '团队管理：组建并领导品牌设计团队，负责团队绩效管理与领导。带领VI系统、平面设计、网页设计、包装设计等，确保设计创意、色彩、版式等符合品牌标准。',
      '创意设计：根据营销策略，精准挖掘营销卖点，对营销活动进行视觉包装并不断优化，提升品牌影响力。负责品牌和产品的上市设计输出，确保设计在各触点及媒体渠道的有效落地和传播。'
    ],
    achievements: [
      '品牌升级：入职两个月内，基于品牌核心策略，独立完成品牌 VIS 2.0 版本视觉系统升级，并沿用至今。',
      '空间设计：打造北外滩网红西餐厅，成为大众点评虹口区打卡地前首选；设计的烘焙店软装成为2021年吴江路网红打卡地。',
      '爆款设计：设计并推出20余款新品包装，成功打造爆款产品，推动销量同比增长10倍。',
      'IP形象设计：独立完成公司IP形象及其周边延展，IP形象成为2021年吴江路网红打卡拍照区。',
      '电商视觉：负责京东、天猫新店主视觉，上线3周内实现15000+销量。'
    ]
  },
  {
    id: 'exp-jd',
    company: '北京京东世纪贸易有限公司 (京东集团)',
    role: '(实习) 视觉设计师',
    period: '2017.2 - 2018.7',
    companyIntro: '京东集团旗下电商平台视觉中心。',
    responsibilities: [
      '完成店铺促销活动、大型活动、重点项目的页面设计相关工作。',
      '针对节日/项目需求，设计不同风格页面，对产品整体风格和品牌调性负责。',
      '针对店铺页面布局、色彩搭配等进行优化，确保页面美感和转化率。'
    ]
  }
];

const EXPERIENCE_EN: ExperienceItem[] = [
  {
    id: 'exp-crydit-en',
    company: 'Shanghai Tianzhuoyue Technology Co., Ltd. (Crydit)',
    role: 'Brand Director & Design Director',
    period: '2022.5 - Now',
    companyIntro: 'Crydit is a blockchain asset payment platform that provides innovative transaction solutions for cryptocurrency users.',
    reportingTo: 'CEO',
    responsibilities: [
      'Brand Strategy and Management: Established and executed brand strategies from inception, analyzed market trends and competitors, developed brand promotion plans, and enhanced brand awareness and market share.',
      'Creative and Design Management: Led the design team to create the brand\'s visual identity system from the ground up, overseeing projects including advertising, packaging, digital media, and event design to ensure innovative and brand-consistent outputs.',
      'Cross-Department Collaboration: Collaborated closely with marketing, product development, and sales departments, and coordinated with external vendors and partners to ensure the high-quality execution of brand projects.',
      'Brand Communication and Promotion: Planned and executed brand communication activities, managed brand content across various channels, organized promotional events and international exhibitions to boost market influence.',
      'Team Management and Development: Recruited, trained, and managed the design team, set team work plans and goals, and supervised project progress to enhance professional skills and efficiency.'
    ],
    achievements: [
      'Brand Building: Successfully created the Crydit brand from scratch, designed and implemented a comprehensive brand visual identity system. Increased brand recognition in the blockchain industry significantly, achieving an 80% rise in awareness within six months and earning multiple international awards.',
      'Market Promotion: Employed innovative brand promotion strategies, resulting in a 30% increase in brand awareness and a 50% user growth rate within six months of launch.',
      'Cross-Department Collaboration: Led multiple cross-departmental projects, developed brand promotion processes, and reduced project completion time by 15%.',
      'Event Planning: Headed the TOKEN 2049 event, attracting over 50,000 participants, significantly enhancing brand influence and user engagement. Planned and executed a series of online and offline activities, leading to a 50% increase in social media exposure.'
    ]
  },
  {
    id: 'exp-zotye-en',
    company: 'Shanghai Junqu Automobile (Zotye Auto)',
    role: 'Senior Visual Manager',
    period: '2022.5 - 2023.6',
    companyIntro: 'Shanghai Junqu Automobile is the main business entity of the restructured Zotye Auto, fully committed to the new energy vehicle market.',
    reportingTo: 'Director of Brand Department',
    responsibilities: [
      'Brand Design: Developed and implemented the brand\'s visual identity system and design guidelines independently, ensuring a consistent brand image.',
      'Campaign Planning: Led brand creative initiatives, responsible for the visual design of brand communications to enhance market impact.',
      'Creative Oversight: Reviewed and managed brand design projects, overseeing brand assets to ensure high-quality standards.',
      'External Liaison Management: Served as the lead for brand design, interfacing with various departments and suppliers, coordinating cross-functional relationships, and leading project communications.',
      'Automotive Design: Led the CMF (Color, Material, Finish) design for new car models, ensuring superior visual and tactile appeal.'
    ]
  },
  {
    id: 'exp-guijiu-en',
    company: 'China Guijiu Group',
    role: 'Senior Brand Manager & Executive Assistant to the President',
    period: '2021.11 - 2022.4',
    companyIntro: 'A comprehensive liquor group blending tradition with innovation (Stock code: 600696).',
    reportingTo: 'Chief Marketing Officer (CMO)',
    responsibilities: [
      'Visual Management: Assisted the CMO by overseeing and ensuring the design quality for China Guijiu Group and its subsidiaries. Maintained the brand\'s visual identity system based on the brand design DNA.',
      'Project Coordination: Managed key projects by forming teams, monitoring project progress, and allocating personnel to ensure projects were completed on time and to a high standard.',
      'Public Relations: Represented the brand department in communications and coordination with various groups and functional departments, integrating resources to ensure efficient and smooth cross-departmental collaboration.'
    ],
    achievements: [
      'Group Recognition: Nominated as an outstanding employee in 2022, highlighting exceptional performance and contributions.',
      'Brand Building: Successfully established and executed the visual system for Huawang Group within two months prior to team formation, supporting the brand\'s launch event.',
      'Industry Honors: Participated in the exclusive sponsorship of the CCTV "National Brand" story project, which won "2022 Advertiser of the Year" and "2022 Media-Enterprise Cooperation" awards at the 29th China International Advertising Festival.',
      'Innovative Projects: The "Thousand Cities and Ten Thousand Enterprises" project was recognized as one of the top ten high-quality consumption innovation cases at the International High-Quality Consumption Expo.'
    ]
  },
  {
    id: 'exp-chunmai-en',
    company: 'Shanghai Chunmai Brand Management Co., Ltd.',
    role: 'Visual Design Manager',
    period: '2018.7 - 2021.10',
    companyIntro: 'Exclusive partner of France\'s Les Moulines d\'Antoine in mainland China, encompassing brands such as Le Jardin d’Antoine.',
    reportingTo: 'Executive Director',
    responsibilities: [
      'Brand Image Design: Conducted research and designed the overall brand image for the company, developed the brand\'s visual identity system, and established standardized visual visuals.',
      'Team Management: Built and led the brand design team, managed team performance and provided coaching.',
      'Creative Design: Based on marketing strategies, accurately identified marketing points, visually packaged marketing activities, and optimized them to enhance brand influence.'
    ],
    achievements: [
      'Brand Upgrade: Independently completed the upgrade of the brand VIS 2.0 visual system within two months of joining.',
      'Space Design: Created the popular Western restaurant at North Bund, becoming the top check-in spot in Hongkou District on Dazhong Dianping.',
      'Hit Product Design: Designed and launched over 20 new packaging, successfully creating best-selling products, driving a tenfold increase in sales year-over-year.',
      'IP Image Design: Independently created the company\'s IP image and related extensions.',
      'E-commerce Visuals: Designed the main visuals for new stores on JD.com and Tmall, achieving over 15,000 sales within three weeks of launch.'
    ]
  },
  {
    id: 'exp-jd-en',
    company: 'JD.com (Beijing Jingdong Century Trade Co., Ltd.)',
    role: '(Intern) Visual Designer',
    period: '2017.2 - 2018.7',
    responsibilities: [
      'Completed page designs for store promotions, major events, and key projects.',
      'Designed pages in various styles based on holiday and project requirements, ensuring alignment with the overall product style and brand tone.'
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
    degrees: ["Bachelor's Degree in Visual Communication Design 【First Bachelor's Degree】", "Bachelor's Degree in Human Resource Management 【Second Bachelor's Degree】"]
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
    available: ""
  },
  resume: {
    aboutTitle: "STRATEGIC MOAT",
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
  aiContext: "毛宇君 (Janice Mo) 是一位以 AI 为准星的视觉狙击手。核心成就：从 0 到 1 打造 Crydit Web3 品牌并获多项国际设计大奖；主导众泰汽车新能源 CMF 设计；持有 LVMH 奢侈品品牌管理证书。",
  awards: [
    { name: "New York Product Design Award", level: "Gold", desc: "纽约产品设计奖" },
    { name: "London Design Award", level: "Silver", desc: "伦敦设计奖" },
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
    available: ""
  },
  resume: {
    aboutTitle: "STRATEGIC MOAT",
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
    { name: "New York Product Design Award", level: "Gold", desc: "International Recognition" },
    { name: "London Design Award", level: "Silver", desc: "Excellence in Design" },
    { name: "French Design Award", level: "Gold", desc: "Aesthetic Innovation" },
    { name: "American MUSE Design Awards", level: "Gold", desc: "Creative Excellence" },
    { name: "European Design Award", level: "Gold", desc: "Pan-European Standard" }
  ]
};