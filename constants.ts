
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
    description: 'Rivian 致力于 definition 高性能电动皮卡的新范式。本次合作聚焦于 Rivian 官网的视觉叙事与体验重构，通过模拟真实的车辆配置器交互与 WebGL 3D 资产即时响应，营造极致的数字探险质感。',
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
    description: '整合品牌标识、内外饰 CMF 颜色设计 with 原创概念场景，构建一套完整的“生活科技”视觉语言体系。将城市街景切片转化为材质，实现工业美学与人文情感的平衡。',
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
      '第三幕：城市漫游 (The Flow) | 主题：Ins to City (灵感注入城市)\n\n• 灵感杂货铺：不做传统 4S 店，在网红街区售卖咖啡、周边与设计。收入捐赠公益，将品牌融入城市毛细血管。\n• 围挡艺术：联合 OUTPUT 艺术家将装修围挡变成城市中心倒计时装置，在开业前即制造社交打卡热潮。\n• 48小时够你玩：推出周末旅行计划，预订精品民宿即可获得两天深度试驾权，让试驾变成一次微度假。\n• 深夜接驳车 (OT Night Shuttle)：关注大厂加班族提供深夜免费接驳，在疲驳时刻提供温暖空间，用温度证明品牌价值。'
    ],
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.41yj8f2y6n.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.9gx1quihex.webp'
    ]
  }
];

// --- 3. CRYDIT ---
const CRYDIT_SECTIONS_CN = [
  { title: '核心视觉身份标准', label: 'BRAND DNA', icon: 'Hexagon', description: '建立 Crydit 的底层视觉基因，通过高度几何化的符号系统 definition 金融科技。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326722.3govkhorey.webp'] },
  { title: '战略定位与品牌手册', label: 'BRAND STRATEGY', icon: 'BookOpen', description: '从市场竞争分析到品牌语境推演，构建了一套完整的品牌叙事逻辑。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/1.2vf7y6ub45.webp'] },
  { title: '数字化门户与官方枢纽', label: 'WEB ARCHITECTURE', icon: 'Globe', description: '强调信息层级的高效流动与 Web3 交互美学。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/4.232cghnb0s.webp'] },
  { title: '金融科技核心产品界面', label: 'APP INTERFACE', icon: 'Smartphone', description: '专注于去中心化资产管理的移动端 UI/UX。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/22.8ok67ird05.webp'] },
  { title: '权威公关与全球化背书', label: 'MEDIA BACKING', icon: 'FileText', description: '在顶级金融媒体中的一致性发声。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/44.9ddfrjew0e.webp'] },
  { title: '社交叙事与 IP 人格化', label: 'SOCIAL VOICE', icon: 'Twitter', isSlider: true, description: '在社交平台构建具有温度的 IP 叙事，将 Web3 叙事转化为感性内容分析。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/6.3k8hjkbw3b.webp', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326827.wj17v1a1b.webp', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image-2475.4ubeojcaob.webp', 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Twitter--post-16.24.53.9rjvidq2h4.webp'] },
  { title: '官网页面设计', label: 'OFFICIAL WEBSITE', icon: 'ShieldCheck', description: '受保密协议 (NDA) 限制，项目中涉及的核心数据与敏感信息已做脱敏或替换处理。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.5c1geh3u8f.webp'] }
];

const CRYDIT_SECTIONS_EN = [
  { title: 'Core Visual Identity Standards', label: 'BRAND DNA', icon: 'Hexagon', description: 'Establishing the foundational visual DNA of Crydit, defining fintech through a highly geometric symbolic system.', images: ['https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326722.3govkhorey.webp'] },
  { title: 'Strategic Positioning & Brand Manual', label: 'BRAND STRATEGY', icon: 'BookOpen', description: 'From market competitive analysis to brand contextual deduction, constructing a complete brand narrative logic.', images: ['https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/1.2vf7y6ub45.webp'] },
  { title: 'Digital Portal & Official Hub', label: 'WEB ARCHITECTURE', icon: 'Globe', description: 'Emphasizing efficient flow of information hierarchy and Web3 interactive aesthetics.', images: ['https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/4.232cghnb0s.webp'] },
  { title: 'Fintech Core Product Interface', label: 'APP INTERFACE', icon: 'Smartphone', description: 'Focusing on mobile UI/UX for decentralized asset management.', images: ['https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/22.8ok67ird05.webp'] },
  { title: 'Media Relations & Global Endorsements', label: 'MEDIA BACKING', icon: 'FileText', description: 'Consistent voice across top-tier financial media outlets.', images: ['https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/44.9ddfrjew0e.webp'] },
  { title: 'Social Narrative & IP Branding', label: 'SOCIAL VOICE', icon: 'Twitter', isSlider: true, description: 'Building a warm IP narrative on social platforms, translating Web3 narratives into emotional content.', images: ['https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/6.3k8hjkbw3b.webp', 'https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326827.wj17v1a1b.webp', 'https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/image-2475.4ubeojcaob.webp', 'https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/Twitter--post-16.24.53.9rjvidq2h4.webp'] },
  { title: 'Official Website Design', label: 'OFFICIAL WEBSITE', icon: 'ShieldCheck', description: 'Due to NDA restrictions, proprietary information and sensitive data have been masked or replaced.', images: ['https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/image.5c1geh3u8f.webp'] }
];

// --- 4. LUXURY DESIGN ---
const LUXURY_COMMON_EDITORIAL = { 
  title: '奢侈品美学编辑：微信视觉叙事', 
  label: 'EDITORIAL EXPERIENCE', 
  icon: 'Camera', 
  isSlider: true, 
  description: '深耕 LVMH 美学体系，专注于顶级奢侈品牌公众号视觉叙事。采用黄金比例排版，通过艺术化分镜重组商业资讯，强调呼吸感与留白的美学。', 
  images: [
    'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-1.6f15o1r8b3.webp', 
    'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2.9rjvif7snh.webp',
    'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-4.8ok694ajjv.webp',
    'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-3.7eh92ssk8m.webp'
  ] 
};

const LUXURY_LOEWE_IMAGES = [
  'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326728.175v5pf78q.webp', 
  'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326724.iclloro8u.webp', 
  'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326726.pfth4dtmv.webp',
  'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326727.13m97zm4ik.webp'
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
  'https://github.com/user-attachments/assets/40d73c9b-37b2-4ff9-b362-0e4035b366d8',
];

const LUXURY_SECTIONS_CN = [
  { 
    title: 'LOEWE：有机超 surreal 主义与触感温润', 
    label: 'BRAND CAMPAIGN', 
    icon: 'Sparkles', 
    isGrid: true, 
    description: '一场关于工艺与想象力的策略性探索，捕捉品牌独有的智性趣味与工匠精神。艺术指导的核心在于营造一种‘梦境般的自然主义’——通过充满阳光感的柔焦美学与丰富的材质肌理互动，确立了一套充满灵性、以艺术为驱动的视觉语汇，模糊了现实物件与梦境的边界。', 
    images: LUXURY_LOEWE_IMAGES 
  },
  { 
    title: 'Loro Piana：静谧奢华与纤维之巅', 
    label: 'BRAND CAMPAIGN', 
    icon: 'Sparkles', 
    isGrid: true, 
    description: '深入 Loro Piana 的静谧奢华语境，通过视觉语言传达稀有纤维的触感美学与大自然的永恒韵律。本次战役强调人类精湛工艺与地球珍稀资源的和谐共振，利用 1792x2400 的超大垂直画幅，将观众带入一场充满质感与温度的叙事旅程，重新定义当代高端生活方式的审美高度。', 
    images: LUXURY_LORO_PIANA_IMAGES 
  },
  { 
    title: 'CARTIER ：隽永光影', 
    label: 'BRAND CAMPAIGN', 
    icon: 'Sparkles', 
    isGrid: true, 
    description: '这组作品是我们对“永恒”的一次光影探索，以克制而精准的电影语言，捕捉那些凝固在时光中的优雅瞬间，重塑卡地亚不可复制的传奇风范。', 
    images: LUXURY_CARTIER_IMAGES 
  },
  LUXURY_COMMON_EDITORIAL
];

const LUXURY_SECTIONS_EN = [
  { 
    title: 'LOEWE : Organic Surrealism & Tactile Warmth', 
    label: 'BRAND CAMPAIGN', 
    icon: 'Sparkles', 
    isGrid: true, 
    description: 'A strategic exploration of craft and imagination, capturing the intellectual playfulness and artisanal spirit of the brand. The art direction prioritizes a dreamlike naturalism—using sun-drenched, soft-focus aesthetics and rich textural interplay to create a soulful, art-driven visual language that blurs the line between object and dream.', 
    images: LUXURY_LOEWE_IMAGES 
  },
  { 
    title: 'Loro Piana: The Essence of Tactile Luxury', 
    label: 'BRAND CAMPAIGN', 
    icon: 'Sparkles', 
    isGrid: true, 
    description: 'A deep dive into Loro Piana\'s quiet luxury ethos, translating the tactile excellence of rare fibers into a timeless visual narrative. This campaign emphasizes the harmony between meticulous human craftsmanship and the raw beauty of nature. Presented through a 1792x2400 vertical tapestry, it invites viewers into a sensory-rich experience that celebrates quality over artifice.', 
    images: LUXURY_LORO_PIANA_IMAGES 
  },
  { 
    title: 'CARTIER :Timeless Radiance', 
    label: 'BRAND CAMPAIGN', 
    icon: 'Sparkles', 
    isGrid: true, 
    description: 'This series is a photographic exploration of "timelessness," employing a restrained and precise cinematic language to capture moments of elegance frozen in time, reshaping the inimitable legend of Cartier.', 
    images: LUXURY_CARTIER_IMAGES 
  },
  LUXURY_COMMON_EDITORIAL
];

// --- 5. AI CREATIVE ---
const AI_CREATIVE_SECTIONS = [
  { 
    title: 'AI 电影感视觉叙事', 
    label: 'CINEMATIC AI', 
    icon: 'Sparkles', 
    description: '重塑光影美学，打破拍摄物理边界。通过超 surreal 主义风格与 SVD 镜头律动，定义 AI 时代的数字生命与虚拟叙事标准。', 
    videoUrl: 'https://github.com/user-attachments/assets/e3f24a85-721f-409e-9bcb-c220b7a692ad',
    images: [] 
  },
  { 
    title: '数字角色一致性', 
    label: 'VIRTUAL IDENTITY', 
    icon: 'Fingerprint', 
    isSlider: true, 
    description: '利用生成式技术 definition AI 时代的虚拟生命一致性标准。', 
    images: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000', 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=1000'] 
  }
];

// --- 6. ACTIVITY & SPACE SECTIONS ---
const ACTIVITY_SECTIONS = [
  {
    title: 'Singapore Token 2049 线下展会',
    label: 'GLOBAL EXHIBITION',
    icon: 'Globe',
    isCircularGallery: true, // Use specialized interactive animation
    description: '作为全球顶尖的加密货币峰会，Token 2049 是品牌走向国际化的重要舞台。我们设计并执行了极具未来感与科技感的展位空间，通过多媒体交互与视觉阵列吸引全球投资者关注。',
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/GXrzbbuaUAA8GDc.6m4dru60fh.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Gbgz1l1bQAA3SDL.5moaeo399k.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/54848921704_5e59e0491a_c.26lymkl0lc.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/54848677416_1fb15318b3_c.7w7ay5fe4f.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/54843876797_870cfa779e_k.3k8hqlw2m3.webp'
    ]
  },
  {
    title: '上海贵酒年度品牌盛典',
    label: 'BRAND EXPERIENCE',
    icon: 'Award',
    isGrid: true,
    description: '一场融合中式传统与现代奢华的品牌大秀。从入场仪式到舞台视觉，我们构建了一个沉浸式的品牌故事空间，强化“大国品牌”的身份认同。',
    images: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1920',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1920',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1920',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1920'
    ]
  },
  {
    title: '肯尼亚公益行：社会责任叙事',
    label: 'PUBLIC WELFARE',
    icon: 'Heart',
    description: '品牌不仅关于商业，更关于温度。我们在肯尼亚发起的公益活动中，通过影像叙事与空间装置，记录了品牌对全球社区的关怀与贡献，提升了品牌的社会溢价。',
    images: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920',
      'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1920',
      'https://images.unsplash.com/photo-1524062731293-840f6622d7b3?q=80&w=1920',
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?q=80&w=1920'
    ]
  }
];

export const PROJECTS_CN: Project[] = [
  { 
    id: 'automotive', 
    title: '智能出行体验', 
    category: 'AUTOMOTIVE_DESIGN', 
    subCategory: 'STRATEGY', 
    description: '从 Rivian 的极致交互到 INTU 的“灵感引擎”重塑。整合三幕式传播战役与 CMF 工业美学。', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/61b75b229825189.686c03868bc97.39lnp5zjeb.webp', 
    tags: ['汽车重塑', '传播战役', '数字高定', '生活科技'], 
    sections: [...RIVIAN_SECTIONS, ...INTU_SECTIONS] as any 
  },
  { 
    id: 'crydit-brand', 
    title: 'Web3 金融生态', 
    category: 'BRAND_ECOSYSTEM', 
    subCategory: 'STRATEGY', 
    description: '从底层视觉基因到全球化社交 IP 叙事，为高端金融科技品牌打造完整生态分析。', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/LIifestyle3.8z700n5tjh.webp', 
    tags: ['品牌全案', '金融科技', 'Web3', 'IP构建'], 
    sections: CRYDIT_SECTIONS_CN as any 
  },
  { 
    id: 'ai-drama', 
    title: 'AIGC 影像创新', 
    category: 'AI_CREATIVE', 
    subCategory: 'CONTENT_CREATION', 
    description: '利用生成式 AI 技术重塑制作流，打造电影感体验分析分析。', 
    imageUrl: 'https://images.unsplash.com/photo-1677442135968-356c9d09c3a3?q=80&w=1920', 
    videoUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/ai-preview.mp4',
    tags: ['AI 生成', '电影感', '创意流'], 
    sections: AI_CREATIVE_SECTIONS as any 
  },
  { 
    id: 'luxury', 
    title: '奢侈品美学与调性', 
    category: 'LUXURY_DESIGN', 
    subCategory: 'IDENTITY', 
    description: 'LVMH 美学体系下的视觉叙事与内容排版分析分析。', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/cody-gallo-toe53OJv7Kg-unsplash.eszjbryme.jpg', 
    tags: ['美学范式', 'LVMH', '内容策略'], 
    sections: LUXURY_SECTIONS_CN as any 
  },
  {
    id: 'activity-visual',
    title: '品牌活动与空间',
    category: 'ACTIVITY_VISUALS',
    subCategory: 'CAMPAIGN',
    description: '从 Token 2049 国际峰会到高端白酒品牌盛典，我们致力于通过多维空间叙事强化品牌线下资产。',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920',
    tags: ['活动视觉', '线下展陈', '全球视野'],
    sections: ACTIVITY_SECTIONS as any
  }
];

export const PROJECTS_EN: Project[] = [
  { 
    id: 'automotive', 
    title: 'SMART MOBILITY', 
    category: 'AUTOMOTIVE_DESIGN', 
    subCategory: 'STRATEGY', 
    description: 'Redefining automotive branding through Rivian and INTU case studies.', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/61b75b229825189.686c03868bc97.39lnp5zjeb.webp', 
    tags: ['Automotive', 'Branding', 'Digital'], 
    sections: [...RIVIAN_SECTIONS, ...INTU_SECTIONS] as any 
  },
  { 
    id: 'crydit-brand', 
    title: 'WEB3 FINANCE', 
    category: 'BRAND_ECOSYSTEM', 
    subCategory: 'STRATEGY', 
    description: 'Constructing a complete brand narrative for premium Fintech lifestyle.', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/LIifestyle3.8z700n5tjh.webp', 
    tags: ['Brand Strategy', 'Fintech', 'Web3'], 
    sections: CRYDIT_SECTIONS_EN as any 
  },
  { 
    id: 'ai-drama', 
    title: 'AIGC VIDEO', 
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
    title: 'LUXURY AESTHETICS', 
    category: 'LUXURY_DESIGN', 
    subCategory: 'IDENTITY', 
    description: 'Visual storytelling and editorial layout within the LVMH aesthetic framework.', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/cody-gallo-toe53OJv7Kg-unsplash.eszjbryme.jpg', 
    tags: ['Aesthetic', 'LVMH', 'Content Strategy'], 
    sections: LUXURY_SECTIONS_EN as any 
  },
  {
    id: 'activity-visual-en',
    title: 'EVENT & SPACE', 
    category: 'ACTIVITY_VISUALS',
    subCategory: 'CAMPAIGN',
    description: 'From Token 2049 international summits to high-end liquor brand ceremonies.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1920',
    tags: ['Event Visuals', 'Exhibition', 'Global'],
    sections: ACTIVITY_SECTIONS as any
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
      '品牌策略与管理：从0到1建立并实施 brand 战略，分析市场趋势 and 竞争对手，制定 brand 推广计划，提升 brand 知名度和市场份额。',
      '创意与设计管理：领导设计团队从0到1创建 brand 视觉识别系统，监督广告、包装、数据 and 活动设计等项目，确保设计创新且符合 brand 调性。',
      '跨部门合作：与市场营销、产品开发、销售等部门紧密合作，协调外部供应商 and 合作伙伴，确保 brand 项目高质量完成。',
      '品牌传播与推广：规划 and 执行 brand 传播活动，管理 brand 在各渠道的传播内容，组织 brand 推广活动 and 国际展会，提升 brand 市场影响力。',
      '团队管理与发展：负责招聘、培训 and 管理设计团队，制定团队工作计划 and 目标，监督项目进展提升专业能力 and 工作效率。'
    ],
    achievements: [
      '品牌建设：从0到1成功创建Crydit brand，设计并实施了全面 brand 视觉识别系统， brand 在区块链行业内知名度迅速提升，知名度在6个月内提升了80%。在最初阶段团队未组建之前，独立完成产品全流程设计（用户调研、定位、视觉及交互设计），产品荣获纽约产品设计奖银奖、伦敦设计奖金奖、法国设计奖金奖、美国MUSE奖金奖、欧洲设计奖金奖等多项国际大奖。',
      '市场推广：通过创新的 brand 推广策略，Crydit在推出后的6个月内， brand 知名度提升了30%，用户增长率达50%。',
      '跨部门协作：领导多个跨部门项目，制定 brand 推广流程，使项目完成时间缩短了15%。',
      '活动策划：主导TOKEN 2049活动，吸引了超过5w名参与者，显著提升 brand 影响力和用户参与度。策划并执行了一系列线上线下活动，活动期间社交媒体曝光量增加了50%。'
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
      '品牌设计：独立创建并实施 brand 视觉识别系统和设计规范，确保 brand 形象一致。',
      '方案策划：主导 brand 创意信息，负责 brand 传播视觉设计，提高市场影响力。',
      '创意把控：审核 brand 设计项目，管理 brand 资产。',
      '外联管理：作为 brand 设计负责人，对接各部门 and 供应商，协调跨职能工作关系，主导项目沟通。',
      '汽车造型设计：主导新款车型的CMF设计（色彩、材料、表面工艺），确保视觉 and 触感优势。'
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
      '视觉管理：协助CMO营销总裁，负责中国贵酒集团、海银集团、中国花王集团、章贡酒业、美酒链公司等子公司的设计质量审核与监督。基于 brand 设计DNA，持续生成并维护 brand 视觉识别系统（Brandbook及Guideline），确保 brand 在各个触点的一致性 and 高质量呈现。',
      '统筹管理：负责重点项目的统筹，包括团队组建、项目进度跟踪及人员调配，确保项目按时、高质量完成，达成预期目标。',
      '公共关系：作为品牌部的代表，与各集团及职能部门进行沟通协调，整合跨部门合作的高效性 and 顺畅性。'
    ],
    achievements: [
      '集团认可：2022年被提名为集团优秀员工，彰显了在职期间的出色表现 and 贡献。',
      '品牌建设：在团队组建完成前，仅用2个月时间成功完成花王集团体系搭建及设计执行，助力 brand 上市发布会。',
      '行业荣誉：参与独家冠名CCTV《大国品牌》 brand 故事片项目，该项目在第29届中国国际广告节荣获“2022广告主年度案例·年度内容营销案例”及“2022媒企合作年度案例”两项大奖。',
      '创新案例：“千城万企”项目在国际高品质消费博览会上被评为十大高品质消费创新案例，提升集团 brand 影响力 and 市场美誉度。'
    ]
  },
  {
    id: 'exp-chunmai',
    company: '上海淳麦品牌管理有限公司',
    role: '视觉设计经理',
    period: '2018.7 - 2021.10',
    reasonForLeaving: '合同到期',
    companyIntro: '法国 Les Moulines d\'Antoine 在中国大陆的唯一 brand 授权合作方。',
    reportingTo: '执行董事',
    responsibilities: [
      '品牌形象设计：负责研究与设计公司整体 brand 形象，根据 brand 定位构建 brand 视觉系统。',
      '团队管理：组建并领导 brand 设计团队，负责团队绩效管理 with 辅导。',
      '创意设计：根据营销策略，精准挖掘营销卖点，对营销活动进行视觉包装并不断优化，提升 brand 影响力。'
    ],
    achievements: [
      '品牌升级：入职两个月内，基于 brand 核心策略，独立完成 brand VIS 2.0 版本视觉系统升级。',
      '空间设计：打造北外滩网红西餐厅，成为大众点评虹口区打卡首选。',
      'IP形象设计：独立完成公司IP形象及其周边延展，IP形象成为2021吴江路网红打卡拍照区。'
    ]
  },
  {
    id: 'exp-jd',
    company: '北京京东世纪贸易有限公司 (JD.com)',
    role: '(实习) 视觉设计师',
    period: '2017.2 - 2018.7',
    responsibilities: [
      '完成店铺促销活动、大型活动、重点项目的页面设计相关工作。',
      '针对节日/项目需求，设计不同风格页面，对产品整体风格 and brand 调性负责。'
    ]
  }
];

const EXPERIENCE_EN: ExperienceItem[] = [
  {
    id: 'exp-crydit-en',
    company: 'Shanghai Tianzhuoyue Technology Co., Ltd. (Crydit)',
    role: 'Brand Director & Design Director',
    period: '2023.12 - Present',
    companyIntro: 'Crydit is a blockchain asset payment platform.',
    reportingTo: 'CEO',
    responsibilities: [
      'Brand Strategy and Management: Established and executed brand strategies from inception.',
      'Creative and Design Management: Led the design team to create the brand\'s visual identity system.'
    ],
    achievements: [
      'Brand Building: Successfully created the Crydit brand from scratch, winning multiple international awards.',
      'Market Promotion: 30% increase in brand awareness within six months of launch.'
    ]
  },
  {
    id: 'exp-zotye-en',
    company: 'Zotye Auto',
    role: 'Senior Visual Manager',
    period: '2022.5 - 2023.6',
    companyIntro: 'Main business entity of the restructured Zotye Auto.',
    reportingTo: 'Director of Brand Department',
    responsibilities: [
      'Brand Design: Developed the brand\'s visual identity system and design guidelines.',
      'Automotive Design: Led the CMF (Color, Material, Finish) design for new car models.'
    ]
  },
  {
    id: 'exp-guijiu-en',
    company: 'China Guijiu Group',
    role: 'Senior Brand Manager',
    period: '2021.11 - 2022.4',
    companyIntro: 'A comprehensive liquor group (Stock code: 600696).',
    reportingTo: 'Chief Marketing Officer (CMO)',
    responsibilities: [
      'Visual Management: Overseeing design quality for the group and its subsidiaries.',
      'Project Coordination: Managed key projects from team formation to tracking progress.'
    ]
  },
  {
    id: 'exp-chunmai-en',
    company: 'Shanghai Chunmai Brand Management Co., Ltd.',
    role: 'Visual Design Manager',
    period: '2018.7 - 2021.10',
    companyIntro: 'Exclusive brand authorization partner of Les Moulines d\'Antoine in China.',
    reportingTo: 'Executive Director',
    responsibilities: [
      'Brand Image Design: Conducted research and designed the overall brand image.',
      'Team Management: Built and led the brand design team.'
    ]
  },
  {
    id: 'exp-jd-en',
    company: 'JD.com',
    role: '(Intern) Visual Designer',
    period: '2017.2 - 2018.7',
    responsibilities: [
      'Completed page designs for store promotions and major events.',
      'Designed pages in various styles based on project requirements.'
    ]
  }
];

export const STRATEGIC_EXPERTISE_CN = [
  { title: "跨行业视觉战略经验", desc: "超过9年工作经验，涵盖加密市场、奢侈品、区块链、F&B、创新消费品、教育、医疗、跨境/国内电商、广告公司等多个行业。" },
  { title: "全方位品牌管理", desc: "从 brand 策略、设计创意到方案策划及执行，全面掌控各环节并具备强大的视觉设计资源能力。" },
  { title: "多元风格驾驭力", desc: "创意思维活跃，审美前瞻，擅长多风格表达，利用AI工具对设计流程与角色的重构。" },
  { title: "团队领导与协作", desc: "擅长领导 and 协调团队，推动项目落地，实现卓越的 brand 表现。" }
];

export const STRATEGIC_EXPERTISE_EN = [
  { title: "Cross-Industry Strategy", desc: "Over 9 years of experience across Crypto, Luxury, Blockchain, F&B, Education, Healthcare, and E-commerce." },
  { title: "Comprehensive Brand Management", desc: "Strong capability in managing the full brand lifecycle—from strategy to execution—with extensive design resources." },
  { title: "Versatile Aesthetic & Style", desc: "Creative and forward-thinking, skilled in leveraging AI tools to reshape design workflows." },
  { title: "Team Leadership & Collaboration", desc: "Experienced in leading and aligning teams, driving project delivery, and achieving exceptional brand expression." }
];

export const CONTENT_CN: SiteContent = {
  nav: { portfolios: "WORKS", career: "Professional Path", connect: "Connect" },
  hero: {
    title: "毛宇君 Janice Mo",
    subtitle: "品牌总监 & 设计总监 | 9 年行业经验\n深耕垂直行业叙事：从汽车 CMF 到 AI 创意内容。",
    cta: "浏览作品集",
    available: "全球战略合作伙伴"
  },
  resume: {
    aboutTitle: "Strategic Expertise",
    aboutText: "", 
    stats: { exp: "从业年限", projects: "落地项目", awards: "国际大奖" },
    skillsTitle: "核心能力",
    experienceTitle: "Professional Path"
  },
  portfolio: {
    title: "Archive",
    subtitle: "", 
    filters: {
      all: "全部领域",
      activity: "品牌活动与空间",
      brand_ecosystem: "Web3 金融生态",
      luxury: "奢侈品美学与调性",
      automotive: "智能出行体验",
      fnb: "F&B Commercial",
      ai_drama: "AIGC 影像创新"
    }
  },
  footer: { rights: "© 2025 Janice Mo. 作品档案库." },
  experience: EXPERIENCE_CN,
  skills: SKILLS_COMMON,
  projects: PROJECTS_CN,
  aiContext: "毛宇君 (Janice Mo) 是一位拥有超过9年经验的品牌/设计总监。核心成就包括：从0到1打造 Crydit Web3 brand 生态并获多项国际大奖；主导众泰汽车/君越汽车新能源品牌重塑；为中国贵酒集团及 LVMH 体系提供顶级视觉叙事与传播策略。",
  awards: [
    { name: "New York Product Design Award", level: "Silver", desc: "纽约产品设计奖" },
    { name: "London Design Award", level: "Gold", desc: "伦敦设计奖" },
    { name: "French Design Award", level: "Gold", desc: "法国设计奖" },
    { name: "American MUSE Design Awards", level: "Gold", desc: "美国MUSE奖" },
    { name: "European Design Award", level: "Gold", desc: "欧洲设计奖" }
  ]
};

export const CONTENT_EN: SiteContent = {
  nav: { portfolios: "WORKS", career: "Professional Path", connect: "Connect" },
  hero: {
    title: "Janice Mo",
    subtitle: "Brand Director & Design Director | 9+ Years Experience\nFocusing on Vertical Industry Narratives.",
    cta: "Explore Portfolio",
    available: "Global Strategic Partner"
  },
  resume: {
    aboutTitle: "Strategic Expertise",
    aboutText: "", 
    stats: { exp: "Professional Years", projects: "Global Projects", awards: "Design Awards" },
    skillsTitle: "Methodology",
    experienceTitle: "Professional Path"
  },
  portfolio: {
    title: "Archive",
    subtitle: "", 
    filters: {
      all: "All",
      activity: "EVENT & SPACE",
      brand_ecosystem: "WEB3 FINANCE",
      luxury: "LUXURY AESTHETICS",
      automotive: "SMART MOBILITY",
      fnb: "F&B Commercial",
      ai_drama: "AIGC VIDEO"
    }
  },
  footer: { rights: "© 2025 Janice Mo. Master Archive." },
  experience: EXPERIENCE_EN,
  skills: SKILLS_COMMON,
  projects: PROJECTS_EN,
  aiContext: "Janice Mo is a Brand & Design Director with 9+ years of experience. Key achievements include building the Crydit Web3 ecosystem from scratch (winning NYC Design, Muse, etc.), leading NEV brand restructuring for Zotye Auto, and directing visual strategy for China Guijiu Group and LVMH-aligned luxury narratives.",
  awards: [
    { name: "New York Product Design Award", level: "Silver", desc: "International Recognition" },
    { name: "London Design Award", level: "Gold", desc: "Excellence in Design" },
    { name: "French Design Award", level: "Gold", desc: "Aesthetic Innovation" },
    { name: "American MUSE Design Awards", level: "Gold", desc: "Creative Excellence" },
    { name: "European Design Award", level: "Gold", desc: "Pan-European Standard" }
  ]
};
