
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
  },
  { 
    id: 'ai-drama', 
    title: 'AI Content & Visual Creativity', 
    category: 'AI_CREATIVE', 
    subCategory: 'CONTENT_CREATION', 
    description: 'Utilizing generative AI to reshape production flows and cinematic experiences.', 
    imageUrl: 'https://images.unsplash.com/photo-1677442135968-356c9d09c3a3?q=80&w=1920', 
    videoUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/ai-preview.mp4',
    tags: ['AI Gen', 'Cinematic', 'Workflow'], 
    sections: AI_CREATIVE_SECTIONS as any 
  },
  { 
    id: 'luxury', 
    title: 'Luxury Aesthetics Paradigm', 
    category: 'LUXURY_DESIGN', 
    subCategory: 'IDENTITY', 
    description: 'Visual storytelling and editorial layout within the LVMH aesthetic framework.', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/cody-gallo-toe53OJv7Kg-unsplash.eszjbryme.jpg', 
    tags: ['Aesthetic', 'LVMH', 'Content Strategy'], 
    sections: LUXURY_SECTIONS as any 
  }
];

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
      '创意与设计管理：领导设计团队从0到1创建品牌视觉识别系统，监督广告、包装、数据和活动设计等项目，确保设计创新且符合品牌调性。',
      '跨部门合作：与市场营销、产品开发、销售等部门紧密合作，协调外部供应商和合作伙伴，确保品牌项目高质量完成。',
      '品牌传播与推广：规划和执行品牌传播活动，管理品牌在各渠道的传播内容，组织品牌推广活动和国际展会，提升品牌市场影响力。',
      '团队管理与发展：负责招聘、培训和管理设计团队，制定团队工作计划和目标，监督项目进展提升专业能力和工作效率。'
    ],
    achievements: [
      '品牌建设：从0到1成功创建Crydit品牌，设计并实施了全面品牌视觉识别系统，品牌在区块链行业内知名度迅速提升，知名度在6个月内提升了80%。在最初阶段团队未组建之前，独立完成产品全流程设计（用户调研、定位、视觉及交互设计），产品荣获纽约产品设计奖银奖、伦敦设计奖金奖、法国设计奖金奖、美国MUSE奖金奖、欧洲设计奖金奖等多项国际大奖。',
      '市场推广：通过创新的品牌推广策略，Crydit在推出后的6个月内，品牌知名度提升了30%，用户增长率达50%。',
      '跨部门协作：领导多个跨部门项目，制定品牌推广流程，使项目完成时间缩短了15%。',
      '活动策划：主导TOKEN 2049活动，吸引了超过5w名参与者，显著提升品牌影响力和用户参与度。策划并执行了一系列线上线下活动，活动期间社交媒体曝光量增加了50%。'
    ]
  },
  {
    id: 'exp-zotye',
    company: '上海君越汽车 (众泰汽车)',
    role: '资深视觉经理',
    period: '2022.5 - 2023.6',
    reasonForLeaving: '公司项目资金停滞',
    companyIntro: '是众泰汽车重整后的业务主体，全力进军新能源汽车市场。',
    reportingTo: '品牌部总监',
    responsibilities: [
      '品牌设计：独立创建并实施品牌视觉识别系统和设计规范，确保品牌形象一致。',
      '方案策划：主导品牌创意信息，负责品牌传播视觉设计，提高市场影响力。',
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
    reasonForLeaving: '隶属公司搬迁至深圳',
    companyIntro: '一家融合经典与创新的综合性酒业集团（股票600696）。',
    reportingTo: 'CMO营销总裁',
    responsibilities: [
      '视觉管理：协助CMO营销总裁，负责中国贵酒集团、海银集团、中国花王集团、章贡酒业、美酒链公司等子公司的设计质量审核与监督。基于品牌设计DNA，持续生成并维护品牌视觉识别系统（Brandbook及Guideline），确保品牌在各个触点的一致性和高质量呈现。',
      '统筹管理：负责重点项目的统筹，包括团队组建、项目进度跟踪及人员调配，确保项目按时、高质量完成，达成预期目标。',
      '公共关系：作为品牌部的代表，与各集团及职能部门进行沟通协调，整合跨部门合作的高效性和顺畅性。'
    ],
    achievements: [
      '集团认可：2022年被提名为集团优秀员工，彰显了在职期间的出色表现和贡献。',
      '品牌建设：在团队组建完成前，仅用2个月时间成功完成花王集团体系搭建及设计执行，助力品牌上市发布会。',
      '行业荣誉：参与独家冠名CCTV《大国品牌》品牌故事片项目，该项目在第29届中国国际广告节荣获“2022广告主年度案例·年度内容营销案例”及“2022媒企合作年度案例”两项大奖。',
      '创新案例：“千城万企”项目在国际高品质消费博览会上被评为十大高品质消费创新案例，提升集团品牌影响力和市场美誉度。'
    ]
  },
  {
    id: 'exp-chunmai',
    company: '上海淳麦品牌管理有限公司',
    role: '视觉设计经理',
    period: '2018.7 - 2021.10',
    reasonForLeaving: '合同到期',
    companyIntro: '法国 Les Moulines d\'Antoine 在中国大陆的唯一品牌授权合作方，旗下包括 Le Jardin d\'Antoine 红磨坊餐厅、Antoine Bakery等品牌。',
    reportingTo: '执行董事',
    responsibilities: [
      '品牌形象设计：负责研究与设计公司整体品牌形象，根据品牌定位构建品牌视觉系统，建立并维护品牌视觉标准化。',
      '团队管理：组建并领导品牌设计团队，负责团队绩效管理与辅导。带领团队完成各类视觉创意项目，包括 VI 系统、平面设计、网页设计、包装设计等，确保设计创意、色彩、版式等符合品牌标准。',
      '创意设计：根据营销策略，精准挖掘营销卖点，对营销活动进行视觉包装并不断优化，提升品牌影响力。负责品牌和产品上市设计输出，确保设计在各触点及媒体渠道的有效落地和传播。'
    ],
    achievements: [
      '品牌升级：入职两个月内，基于品牌核心策略，独立完成品牌 VIS 2.0 版本视觉系统升级，并沿用至今。',
      '空间设计：打造北外滩网红西餐厅，成为大众点评虹口区打卡首选；设计的烘焙店新软装成为2021年年度吴江路网红打卡地。',
      '爆款设计：设计并推出20余款新品包装，成功打造爆款产品，推动销量同比增长10倍。',
      'IP形象设计：独立完成公司IP形象及其周边延展，IP形象成为2021吴江路网红打卡拍照区。',
      '电商视觉：设计京东、天猫新店主视觉，上线3周内实现15000+销量。'
    ]
  },
  {
    id: 'exp-jd',
    company: '北京京东世纪贸易有限公司 (JD.com)',
    role: '(实习) 视觉设计师',
    period: '2017.2 - 2018.7',
    responsibilities: [
      '完成店铺促销活动、大型活动、重点项目的页面设计相关工作。',
      '针对节日/项目需求，设计不同风格页面，对产品整体风格和品牌调性负责。'
    ]
  }
];

const EXPERIENCE_EN: ExperienceItem[] = [
  {
    id: 'exp-crydit-en',
    company: 'Shanghai Tianzhuoyue Technology Co., Ltd. (Crydit)',
    role: 'Brand Director & Design Director',
    period: '2023.12 - Present',
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
      'Event Planning: Headed the TOKEN 2049 event, attracting over 50,000 participants, significantly enhancing brand influence and user engagement. Planned and executed a series of online and offline activities, leading to a 50% increase in social media exposure during the event period.'
    ]
  },
  {
    id: 'exp-zotye-en',
    company: 'Shanghai Junqu Automobile (Zotye Auto)',
    role: 'Senior Visual Manager',
    period: '2022.5 - 2023.6',
    reasonForLeaving: 'Project funding stagnation',
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
    reasonForLeaving: 'Company relocation to Shenzhen',
    companyIntro: 'A comprehensive liquor group blending tradition with innovation (Stock code: 600696).',
    reportingTo: 'Chief Marketing Officer (CMO)',
    responsibilities: [
      'Visual Management: Assisted the CMO by overseeing and ensuring the design quality for China Guijiu Group and its subsidiaries. Developed and maintained the brand\'s visual identity system (Brandbook and Guidelines) based on the brand design DNA to ensure consistency and high-quality presentation across all touchpoints.',
      'Project Coordination: Managed key projects by forming teams, tracking project progress, and allocating personnel to ensure projects were completed on time and to a high standard, achieving set goals.',
      'Public Relations: Represented the brand department in communications and coordination with various groups and functional departments, integrating resources to ensure efficient and smooth cross-departmental collaboration.'
    ],
    achievements: [
      'Group Recognition: Nominated as an outstanding employee in 2022, highlighting exceptional performance and contributions during my tenure.',
      'Brand Building: Successfully established and executed the visual system for Huawang Group within two months prior to team formation, supporting the brand\'s launch event.',
      'Industry Honors: Participated in the exclusive sponsorship of the CCTV "National Brand" story project, which won major awards at the 29th China International Advertising Festival.',
      'Innovative Projects: The "Thousand Cities and Ten Thousand Enterprises" project was recognized as a top ten high-quality consumption innovation case at the International High-Quality Consumption Expo.'
    ]
  },
  {
    id: 'exp-chunmai-en',
    company: 'Shanghai Chunmai Brand Management Co., Ltd.',
    role: 'Visual Design Manager',
    period: '2018.7 - 2021.10',
    reasonForLeaving: 'Contract expiration',
    companyIntro: 'The exclusive brand authorization partner of France\'s Les Moulines d\'Antoine in mainland China.',
    reportingTo: 'Executive Director',
    responsibilities: [
      'Brand Image Design: Conducted research and designed the overall brand image for the company, developed the brand\'s visual system based on brand positioning.',
      'Team Management: Built and led the brand design team, managed team performance and provided coaching.',
      'Creative Design: Based on marketing strategies, accurately identified marketing points, visually packaged marketing activities, and continuously optimized them to enhance brand influence.'
    ],
    achievements: [
      'Brand Upgrade: Independently completed the upgrade of the brand VIS 2.0 visual system within two months of joining.',
      'Space Design: Created the popular Western restaurant at North Bund, becoming the top check-in spot in Hongkou District.',
      'Hit Product Design: Designed and launched over 20 new product packages, driving a tenfold increase in sales year-over-year.',
      'IP Image Design: Independently created the company\'s IP image and related extensions.',
      'E-commerce Visuals: Designed main visuals for stores on JD.com and Tmall, achieving over 15,000 sales in 3 weeks.'
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

export const STRATEGIC_EXPERTISE_CN = [
  { title: "跨行业视觉战略经验", desc: "超过9年工作经验，涵盖加密市场、奢侈品、区块链、F&B、创新消费品、教育、医疗、跨境/国内电商、广告公司等多个行业。" },
  { title: "全方位品牌管理", desc: "从品牌策略、设计创意到方案策划及执行，全面掌控各环节并具备强大的视觉设计资源能力。" },
  { title: "多元风格驾驭力", desc: "创意思维活跃，审美前瞻，擅长多风格表达，利用AI工具对设计流程与角色的重构，倡导“人机协同”，推动从“效率驱动”向“创意增强”转变。" },
  { title: "团队领导与协作", desc: "擅长领导和协调团队，推动项目落地，实现卓越的品牌表现。" }
];

export const STRATEGIC_EXPERTISE_EN = [
  { title: "Cross-Industry Strategy", desc: "Over 9 years of experience across Crypto, Luxury, Blockchain, F&B, Education, Healthcare, and E-commerce." },
  { title: "Comprehensive Brand Management", desc: "Strong capability in managing the full brand lifecycle—from strategy to execution—with extensive design resources." },
  { title: "Versatile Aesthetic & Style", desc: "Creative and forward-thinking, skilled in leveraging AI tools to reshape design workflows and advocate human-AI collaboration." },
  { title: "Team Leadership & Collaboration", desc: "Experienced in leading and aligning teams, driving project delivery, and achieving exceptional brand expression." }
];

export const CONTENT_CN: SiteContent = {
  nav: { portfolios: "作品档案", career: "职业轨迹" },
  hero: {
    title: "毛宇君 Janice Mo",
    subtitle: "品牌总监 & 设计总监 | 9 年行业经验\n深耕垂直行业叙事：从汽车 CMF 到 AI 创意内容。",
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
  aiContext: "毛宇君 (Janice Mo) 是一位拥有超过9年经验的品牌/设计总监。核心成就包括：从0到1打造 Crydit Web3 品牌生态并获多项国际大奖；主导众泰汽车/君越汽车新能源品牌重塑；为中国贵酒集团及 LVMH 体系提供顶级视觉叙事与传播策略。"
};

export const CONTENT_EN: SiteContent = {
  nav: { portfolios: "Portfolios", career: "Career" },
  hero: {
    title: "Janice Mo",
    subtitle: "Brand Director & Design Director | 9+ Years Experience\nFocusing on Vertical Industry Narratives.",
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
  experience: EXPERIENCE_EN,
  skills: SKILLS_COMMON,
  projects: PROJECTS_EN,
  aiContext: "Janice Mo is a Brand & Design Director with 9+ years of experience. Key achievements include building the Crydit Web3 ecosystem from scratch (winning NYC Design, Muse, etc.), leading NEV brand restructuring for Zotye Auto, and directing visual strategy for China Guijiu Group and LVMH-aligned luxury narratives."
};
