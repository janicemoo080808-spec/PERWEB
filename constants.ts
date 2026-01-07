
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
    description: '致力于定义高性能电动皮卡的新范式。本次合作聚焦于 Rivian 官网的视觉叙事与体验重构，通过模拟真实的车辆配置器交互与 WebGL 3D 资产即时响应，营造极致的数字探险质感。',
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
    description: '策略核心：锐角切入 × 跨界共振 × 场景渗透。我们将传播节奏包装为一部“都市灵感电影”的三部曲。',
    points: [
      '第一幕：启示录 (The Spark) | 主题：INSPIRED by FUN (始于启发，为谁而生)\n\n• 阿里设计周首秀：联合 Alibaba Cloud Design，在 U Design Week 上不讲参数，只讲“设计灵感”。把车身颜色变成“城市街景的切片”，定义属于 INTU 的专属色号。\n• B站“The No Show Room”：拒绝传统车评。联合最严苛 UP 主打造极寒、刁钻角度等“反常规”测试，用实力为“务实”理念背书。\n• “创造力无限公司”招聘：联合北辰青年发起秋招。不招打工人只招同类“首席灵感官”，通过高话题度吸引最有野心的年轻人。',
      '第二幕：高光时刻 (The Ignition) | 主题：Ins to U (灵感注入生活)\n\n• INTU x LEGO：推出同尺寸乐高“灵感盒子”，传达车像乐高般充满创造乐趣与无限可能的基因。\n• INTU x Nintendo Switch：打造“移动游戏厅”，强调车机高性能互联，在车内沉浸式游戏，直击年轻群体娱乐痛点。\n• 文化定调：联合 GQ Lab 发起 ICON Project，挖掘内部造车人与城市创变者故事，讲述“不被定义”的品牌精神。\n• 综艺引爆：赞助《吐槽大会》并主动“求吐槽”，以“自黑”展现品牌开放自信的非典型车企人设。',
      '第三幕：城市漫游 (The Flow) | 主题：Ins to City (灵感注入城市)\n\n• 灵感杂货铺：不做传统 4S 店，在网红街区售卖咖啡、周边与设计。收入捐赠公益，将品牌融入城市平衡点。\n• 围挡艺术：联合 OUTPUT 艺术家将装修围挡变成城市中心倒计时装置，在开业前即制造社交打卡热潮。\n• 48小时够你玩：推出周末旅行计划，预订精品民宿即可获得两天深度试驾权，让试驾变成一次微度假。\n• 深夜接驳车 (OT Night Shuttle)：关注大厂加班族提供深夜免费接驳，在疲惫时刻提供温暖空间，用温度证明品牌价值。'
    ],
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.41yj8f2y6n.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.9gx1quihex.webp'
    ]
  }
];

// --- 3. CRYDIT ---
const CRYDIT_SECTIONS_CN = [
  { title: '核心视觉身份标准', label: 'BRAND DNA', icon: 'Hexagon', description: '建立 Crydit 的底层视觉基因，通过高度几何化的符号系统定义金融科技。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326722.3govkhorey.webp'] },
  { title: '战略定位与品牌手册', label: 'BRAND STRATEGY', icon: 'BookOpen', description: '从 market 竞争分析到品牌语境推演，构建了一套完整的品牌叙事逻辑，确立国际化金融科技品牌的独特调性。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/1.2vf7y6ub45.webp'] },
  { title: '数字化门户与官方枢纽', label: 'WEB ARCHITECTURE', icon: 'Globe', description: '强调信息层级的高效流动与 Web3 交互美学，提升用户对数字资产管理的信任感。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/4.232cghnb0s.webp'] },
  { title: '金融科技核心产品界面', label: 'APP INTERFACE', icon: 'Smartphone', description: '专注于去中心化资产管理的移动端 UI/UX，在满足合规性要求的条件下提供流畅的操作体验。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/22.8ok67ird05.webp'] },
  { title: '权威公关与全球化背书', label: 'MEDIA BACKING', icon: 'FileText', description: '在顶级金融媒体与国际展会中保持高度一致性的品牌发声，建立全球化的行业信誉。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/44.9ddfrjew0e.webp'] },
  { 
    title: '社交叙事与 IP 人格化', 
    label: 'SOCIAL VOICE', 
    icon: 'Twitter', 
    isSlider: true, 
    description: '在社交平台构建具有温度的 IP 叙事，将复杂的 Web3 概念转化为易于传播的感性内容，拉近与用户的距离。', 
    images: [
      'https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326851.3govki18n9.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326865.6pnzh5oq9s.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326871.4qrsqtj7y3.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326882-16.24.57.1ziqiqx3w6.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/World-Football-Day-16.24.53.5q7w3zlz20.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/You’ll-regret-selling-your-coins-now-in-the-future..4qrsqtj7w9.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image-2475.4ubeojcaob.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/卡戴珊-16.25.00.6f15o09i52.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/平安夜-16.24.57.26lye6j9b1.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---89.64ec3cfebm.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---88.9ddg002vy1.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---87.1hsp2nguno.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---90.3yexhknqju.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image-2475.4ubeojcaob.webp'
    ] 
  },
  { 
    title: '品牌触感：周边与衍生品', 
    label: 'PHYSICAL EXPERIENCE', 
    icon: 'Award', 
    isSlider: true, 
    description: '将数字资产的温度转化为可触碰的品牌质感。通过高品质周边设计，强化社群归属感与品牌渗透力。', 
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---89.64ec3cfebm.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---88.9ddg002vy1.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---87.1hsp2nguno.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---90.3yexhknqju.webp'
    ] 
  },
  { title: '官网页面设计', label: 'OFFICIAL WEBSITE', icon: 'ShieldCheck', description: '受保密协议 (NDA) 限制，项目中涉及的核心数据与敏感信息已做脱敏或替换处理。', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.5c1geh3u8f.webp'] }
];

const CRYDIT_SECTIONS_EN = [
  { title: 'Core Visual Identity Standards', label: 'BRAND DNA', icon: 'Hexagon', description: 'Establishing the foundational visual DNA of Crydit, defining fintech through a highly geometric symbolic system.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326722.3govkhorey.webp'] },
  { title: 'Strategic Positioning & Brand Manual', label: 'BRAND STRATEGY', icon: 'BookOpen', description: 'From market competitive analysis to brand contextual deduction, constructing a complete brand narrative logic.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/1.2vf7y6ub45.webp'] },
  { title: 'Digital Portal & Official Hub', label: 'WEB ARCHITECTURE', icon: 'Globe', description: 'Emphasizing efficient flow of information hierarchy and Web3 interactive aesthetics.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/4.232cghnb0s.webp'] },
  { title: 'Fintech Core Product Interface', label: 'APP INTERFACE', icon: 'Smartphone', description: 'Focusing on mobile UI/UX for decentralized asset management.', images: ['https://cdn.jsdelivr.gh/gh/janicemoo080808-spec/picx-images-hosting@master/22.8ok67ird05.webp'] },
  { title: 'Media Relations & Global Endorsements', label: 'MEDIA BACKING', icon: 'FileText', description: 'Consistent voice across top-tier financial media outlets.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/44.9ddfrjew0e.webp'] },
  { 
    title: 'Social Narrative & IP Branding', 
    label: 'SOCIAL VOICE', 
    icon: 'Twitter', 
    isSlider: true, 
    description: 'Building a warm IP narrative on social platforms, translating Web3 narratives into emotional content.', 
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326851.3govki18n9.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326865.6pnzh5oq9s.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326871.4qrsqtj7y3.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2087326882-16.24.57.1ziqiqx3w6.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/World-Football-Day-16.24.53.5q7w3zlz20.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/You’ll-regret-selling-your-coins-now-in-the-future..4qrsqtj7w9.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image-2475.4ubeojcaob.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/卡戴珊-16.25.00.6f15o09i52.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/平安夜-16.24.57.26lye6j9b1.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---89.64ec3cfebm.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---88.9ddg002vy1.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---87.1hsp2nguno.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---90.3yexhknqju.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image-2475.4ubeojcaob.webp'
    ] 
  },
  { 
    title: 'Brand Tangibles: Peripherals & Merchandise', 
    label: 'PHYSICAL EXPERIENCE', 
    icon: 'Award', 
    isSlider: true, 
    description: 'Translating digital asset warmth into tactile brand quality. Strengthening community belonging through premium merchandise design.', 
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---89.64ec3cfebm.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---88.9ddg002vy1.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---87.1hsp2nguno.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Slide-16_9---90.3yexhknqju.webp'
    ] 
  },
  { title: 'Official Website Design', label: 'OFFICIAL WEBSITE', icon: 'ShieldCheck', description: 'Due to NDA restrictions, proprietary information and sensitive data have been masked or replaced.', images: ['https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/image.5c1geh3u8f.webp'] }
];

// --- 4. LUXURY DESIGN ---
const LUXURY_COMMON_EDITORIAL_CN = { 
  title: '奢侈品美学编辑：微信视觉叙事', 
  label: 'EDITORIAL EXPERIENCE', 
  icon: 'Camera', 
  isSlider: true, 
  description: '专注于顶级奢侈品牌公众号的视觉资产深度创意。将商业资讯转化为极具艺术价值的数字读物。在为 Dom Pérignon、Balmain、Kerbedanz 等品牌操盘期间，我强调“呼吸感美学”对用户情绪的引导，使每一次指尖滑动都成为一场沉浸式的品牌价值传递之旅。', 
  images: [
    'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-1.6f15o1r8b3.webp', 
    'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-2.9rjvif7snh.webp',
    'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-4.8ok694ajjv.webp',
    'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/Frame-3.7eh92ssk8m.webp'
  ] 
};

const LUXURY_COMMON_EDITORIAL_EN = { 
  title: 'Luxury Aesthetic Editorial: WeChat Visual Storytelling', 
  label: 'EDITORIAL EXPERIENCE', 
  icon: 'Camera', 
  isSlider: true, 
  description: 'Specializing in deep creative visual assets for top-tier luxury brand WeChat accounts. Transforming commercial information into digital reads of significant artistic value. During my tenure directing for brands such as Dom Pérignon, Balmain, and Kerbedanz, I emphasized the guidance of user emotions through "Breathable Aesthetics," making every swipe an immersive journey of brand value transmission.', 
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
    title: 'LOEWE：有机超 surrealism 与触感温润', 
    label: 'BRAND CAMPAIGN', 
    icon: 'Sparkles', 
    isGrid: true, 
    description: '一场关于工艺与想象力的策略性探索，捕捉品牌独有的智性趣味与工匠精神。艺术指导的核心在于营造一种‘梦境般的自然主义’。', 
    images: LUXURY_LOEWE_IMAGES 
  },
  { 
    title: 'Loro Piana：静谧奢华与纤维之巅', 
    label: 'BRAND CAMPAIGN', 
    icon: 'Sparkles', 
    isGrid: true, 
    description: '深入 Loro Piana 的静谧奢华语境，通过视觉语言传达稀有纤维的触感美学与大自然的永恒韵律。', 
    images: LUXURY_LORO_PIANA_IMAGES 
  },
  { 
    title: 'CARTIER ：隽永光影', 
    label: 'BRAND CAMPAIGN', 
    icon: 'Sparkles', 
    isGrid: true, 
    description: '这组作品是我们对“永恒”的一次光影探索，以克制而精准的电影语言，捕捉那些凝固在时光中的优雅瞬间。', 
    images: LUXURY_CARTIER_IMAGES 
  },
  LUXURY_COMMON_EDITORIAL_CN
];

const LUXURY_SECTIONS_EN = [
  { 
    title: 'LOEWE : Organic Surrealism & Tactile Warmth', 
    label: 'BRAND CAMPAIGN', 
    icon: 'Sparkles', 
    isGrid: true, 
    description: 'A strategic exploration of craft and imagination, capturing the intellectual playfulness and artisanal spirit of the brand.', 
    images: LUXURY_LOEWE_IMAGES 
  },
  { 
    title: 'Loro Piana: The Essence of Tactile Luxury', 
    label: 'BRAND CAMPAIGN', 
    icon: 'Sparkles', 
    isGrid: true, 
    description: 'A deep dive into Loro Piana\'s quiet luxury ethos, translating the tactile excellence of rare fibers into a timeless visual narrative.', 
    images: LUXURY_LORO_PIANA_IMAGES 
  },
  { 
    title: 'CARTIER : Timeless Radiance', 
    label: 'BRAND CAMPAIGN', 
    icon: 'Sparkles', 
    isGrid: true, 
    description: 'This series is a photographic exploration of "timelessness," employing a restrained and precise cinematic language to capture moments of elegance.', 
    images: LUXURY_CARTIER_IMAGES 
  },
  LUXURY_COMMON_EDITORIAL_EN
];

// --- 5. AI CREATIVE ---
const AI_CREATIVE_SECTIONS = [
  { 
    title: 'AI 电影感视觉叙事', 
    label: 'CINEMATIC AI', 
    icon: 'Sparkles', 
    description: '重塑光影美学，打破拍摄物理边界。通过超现实主义风格与 SVD 镜头律动，定义 AI 时代的数字生命标准。', 
    videoUrl: 'https://github.com/user-attachments/assets/e3f24a85-721f-409e-9bcb-c220b7a692ad',
    images: [] 
  }
];

// --- 6. ACTIVITY & SPACE SECTIONS ---
const ACTIVITY_SECTIONS = [
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
  },
  {
    title: '肯尼亚公益行：以品牌温度赋能全球社区 (2024)',
    label: 'PUBLIC WELFARE',
    icon: 'Heart',
    isCircularGallery: true, 
    description: '主导 Crydit 肯尼亚公益行，在受洪灾影响的偏远地区深耕品牌社会责任。通过教育基础设施重建、关键物资捐赠及社区文化建设，成功塑造了品牌在非洲新兴市场的正面形象，建立起超越商业的深层价值链接。',
    points: [
      '核心基建重建：全程统筹受灾严重的 Kakola 小学教学楼修缮与加固工程，为逾 500 名学生恢复了安全且长久的受教育环境。',
      '心智占领闭环：精准配置数千册图书、现代化教学具及基础生活物资；并主导策划首届“Crydit 杯”青少年足球友谊赛，以文化共鸣达成深度的社区情感共振。',
      '顶级媒体背书：活动获肯尼亚国家电视台 (KBC) 及多家当地权威报媒 360° 专题报道，将品牌形象从单一业务逻辑升华为具备国际视野的全球公益标杆。',
      '[ 备注 ]：现场包含大量动人的纪实影像、当地主流媒体报道剪辑及完整的 ESG 项目复盘报告。如需了解品牌如何通过公益活动实现“低成本海外流量获取”与“政府级公信力背书”的策略逻辑，欢迎探讨。'
    ],
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/GXrzbbuaUAA8GDc.6m4dru60fh.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/GQWSq89WwAAqIX1.32ig21ljck.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/GSHiR2KasAAGbEw.2dp6i0x1e6.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/GSHiR2FaUAEXgWo.3yexhhu8ui.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/GSHiR2MbAAAbaaZ.4ubewy3xae.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/GSCTH0xaUAAvv3V.73ufgfonr5.webp'
    ]
  },
  {
    title: '品牌重塑：上海贵酒国际版发布会暨徐汇体验中心全案策划',
    label: 'BRAND REBRANDING',
    icon: 'Award',
    isCircularGallery: true, 
    description: '打破传统白酒的陈旧叙事，我主导了上海贵酒“中西融合”的全球品牌叙事体系。从徐汇品牌体验中心的物理空间设计，到国际版发布会的沉浸式全息交互，通过全案闭环策划，成功将品牌推向国际奢侈品赛道。',
    points: [
      '空间美学逻辑：创新性引入全息影像 (Holographic Projection) 与多维感官系统，打造了一个融合“新中式传统”与“西方超现实主义”的沉浸式视觉场馆。',
      '媒介传播高度：现场吸引了逾 50 家海内外主流及垂直媒体深度报道，社交媒体总曝光量达成 2.0M+，有效实现了从“产品发布”到“文化事件”的圈层跨越。',
      '商业价值闭环：该体验中心现已成为品牌服务高净值人群 (HNWI) 的核心阵地，成功建立起高频、高端的品牌线下交互通路。',
      '[ 备注 ]：本项目涉及完整的全息影像交互脚本、跨时空空间策展方案及全链条公关传播矩阵。受限于网页展示空间，仅呈现核心视觉片段。若您对如何通过技术手段 (Tech-Driven) 提升品牌溢价感兴趣，欢迎交流。'
    ],
    images: [
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/008qbmXTly1h2dsdwim4pj30z70jme1d.67xy2kvpxv.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/008qbmXTly1h31rxzt7k7j30u00gwtc4.7p434bzuoh.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/008qbmXTly1h3251qn114j3334223hdv.175vb0ovf4.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/008qbmXTly1h3251ofq4ij3334223b2a.2yyu5x88b0.webp',
      'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/008qbmXTly1h32521s9tej3334223npf-(1).4qrt0trl6x.webp'
    ]
  },
  {
    title: 'CCTV-1 央视大片与“大国品牌”战略操盘',
    label: 'NATIONAL BRAND STRATEGY',
    icon: 'Rocket',
    isSlider: true,
    description: '深谙权威媒体赋能品牌的长远力量，我主导了上海贵酒两支核心 TVC 广告片的策略定位与视觉执行，并前瞻性布局 CCTV-1 等顶级频道。通过独家冠名 CCTV《大国品牌》等国家级叙事项目，成功将品牌资产与国家级声望深度绑定。',
    points: [
      '权威背书与双重大奖：主导的《大国品牌》系列故事片在第 29 届中国国际广告节荣获“2022 年度内容营销案例”与“2022 媒企合作年度案例”双项大奖，实现了艺术审美与商业价值的国际化公认。',
      '顶级频道心智触达：操盘两支核心 TVC 广告的全流程视觉与策略，通过在央视黄金档的精准投放，有效提升了品牌在全国范围内的市场美誉度，极大降低了用户对高端白酒的信任成本。',
      '高品质消费案例：亲自策划并主导“千城万企”项目，在国际高品质消费博览会获评“十大高品质消费创新案例”，实现了品牌影响力对区域市场的降维打击。',
      '[ 备注 ]：如需了解如何通过官方权威媒介背书（Official Endorsement）显著降低品牌沟通成本并提升溢价空间，欢迎深度探讨。'
    ],
    images: [
      'https://github.com/user-attachments/assets/8bbc8de6-8284-4acb-a7eb-ec99a2121b5f',
      'https://github.com/user-attachments/assets/a25a2c1c-01f2-40f3-b455-7c5168017c96',
      'https://github.com/user-attachments/assets/c663ea1a-661c-462f-80f4-7358aa23ac35'
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
    tags: ['汽车重塑', '传播战役', 'CMF设计'], 
    sections: [...RIVIAN_SECTIONS, ...INTU_SECTIONS] as any 
  },
  { 
    id: 'crydit-brand', 
    title: 'Web3 金融生态', 
    category: 'BRAND_ECOSYSTEM', 
    subCategory: 'STRATEGY', 
    description: '从底层视觉基因到全球化社交 IP 叙事，为高端金融科技品牌打造完整生态。', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/LIifestyle3.8z700n5tjh.webp', 
    tags: ['品牌全案', '金融科技', 'Web3'], 
    sections: CRYDIT_SECTIONS_CN as any 
  },
  { 
    id: 'ai-drama', 
    title: 'AIGC 影像创新', 
    category: 'AI_CREATIVE', 
    subCategory: 'CONTENT_CREATION', 
    description: '利用生成式 AI 技术重塑制作流，打造电影感体验。', 
    imageUrl: 'https://images.unsplash.com/photo-1677442135968-356c9d09c3a3?q=80&w=1920', 
    videoUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/ai-preview.mp4',
    tags: ['AI 生成', '电影感', '数字生命'], 
    sections: AI_CREATIVE_SECTIONS as any 
  },
  { 
    id: 'luxury', 
    title: '奢侈品美学与调性', 
    category: 'LUXURY_DESIGN', 
    subCategory: 'IDENTITY', 
    description: 'LVMH 美学体系下的视觉叙事与内容排版。', 
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/cody-gallo-toe53OJv7Kg-unsplash.eszjbryme.jpg', 
    tags: ['美学范式', 'LVMH', '内容策略'], 
    sections: LUXURY_SECTIONS_CN as any 
  },
  {
    id: 'activity-visual',
    title: '品牌活动与空间',
    category: 'ACTIVITY_VISUALS',
    subCategory: 'CAMPAIGN',
    description: '从新加坡的国际视野到央视的国家高度，我致力于用极具未来感的视觉语言，重塑品牌在全球竞争中的叙事主权。',
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
    description: 'From the global perspective of Singapore to the national prestige of CCTV, I am dedicated to redefining brand narrative sovereignty in global competition through futuristic visual language.',
    imageUrl: 'https://cdn.jsdelivr.net/gh/janicemoo080808-spec/picx-images-hosting@master/54848677226_0c430fb790_c.58hunv4b5g.webp',
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
      '品牌策略与管理：从0到1建立并实施品牌战略，分析 market 趋势和竞争对手，制定 brand 推广计划，提升品牌知名度和市场份额。',
      '创意与设计管理：领导设计团队从0到1创建品牌视觉识别系统，监督广告、包装、数据及 activity 设计等项目，确保设计创新且符合品牌调性。',
      '跨部门合作：与市场营销、产品开发、销售等部门紧密合作，协调外部供应商 and 合作伙伴，确保品牌项目高质量完成。',
      '品牌传播与推广：规划并执行品牌传播活动，管理品牌在各渠道的传播内容，组织品牌推广活动及国际展会，提升品牌 market 影响力。',
      '团队管理与发展：负责招聘、培训及管理设计团队，制定团队工作计划和目标，监督项目进展，提升专业能力和工作效率。'
    ],
    achievements: [
      '品牌建设：从0到1成功创建 Crydit 品牌，设计并实施了全面品牌视觉识别系统。在最初阶段团队未组建之前，独立完成产品全流程设计（用户调研、定位、视觉及交互设计）。',
      '奖项荣誉：产品荣获纽约产品设计奖银奖、伦敦设计奖金奖、法国设计奖金奖、美国 MUSE 奖金奖、欧洲设计奖金奖等多项国际大奖。',
      '市场推广：通过创新的品牌推广策略，Crydit 在推出后的 6 个月内，品牌知名度在区块链行业内提升了 80%，用户增长率达 50%。',
      '跨部门协作：领导多个跨部门项目，制定品牌推广流程，使项目完成时间缩短了 15%。',
      '活动策划：主导 TOKEN 2049 活动，吸引了超过 5w 名参与者，显著提升品牌影响力和用户参与度. 策划并执行了一系列线上线下活动，社交媒体曝光量增加了 50%。'
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
      '方案策划：主导品牌创意信息，负责品牌传播视觉设计，提高市场影响力. ',
      '创意把控：审核品牌设计项目，管理品牌资产。',
      '外联管理：作为品牌设计负责人，对接各部门及供应商，协调跨职能工作关系，主导项目沟通。',
      '汽车造型设计：主导新款车型的 CMF 设计（色彩、材料、表面工艺），确保视觉和触感优势。'
    ]
  },
  {
    id: 'exp-guijiu',
    company: '中国贵酒集团',
    role: '品牌高级经理 & 总裁助理',
    period: '2021.11 - 2022.4',
    reasonForLeaving: '隶属公司搬迁至深圳',
    companyIntro: '一家融合经典与创新的综合性酒业集团（股票 600696）。',
    reportingTo: 'CMO 营销总裁',
    responsibilities: [
      '视觉管理：协助 CMO 营销总裁，负责集团及子公司的设计质量审核与监督。基于品牌设计 DNA，维护品牌视觉识别系统（Brandbook 及 Guideline）。',
      '统筹管理：负责重点项目的统筹，包括团队组建、项目进度跟踪及人员调配，确保项目按时高质量完成。',
      '公共关系：作为品牌部的代表，与各集团及职能部门进行沟通协调，整合跨部门合作。'
    ],
    achievements: [
      '集团认可：2022 年被提名为集团优秀员工，彰显了在职期间的出色表现 and 贡献。',
      '品牌建设：在团队组建完成前，仅用 2 个月时间成功完成花王集团体系搭建及设计执行，助力品牌上市发布会。',
      '行业荣誉：参与独家冠名 CCTV《大国品牌》品牌故事片项目，该项目荣获“2022 广告主年度案例·年度内容营销案例”及“2022 媒企合作年度案例”两项大奖。',
      '创新案例：“千城万企”项目在国际高品质消费博览会上被评为十大高品质消费创新案例。'
    ]
  },
  {
    id: 'exp-chunmai',
    company: '上海淳麦品牌管理有限公司',
    role: '视觉设计经理',
    period: '2018.7 - 2021.10',
    reasonForLeaving: '合同到期',
    companyIntro: '法国 Les Moulines d\'Antoine 在中国大陆的唯一品牌授权合作方。',
    reportingTo: '执行董事',
    responsibilities: [
      '品牌形象设计：负责研究与设计公司整体品牌形象，根据品牌定位构建视觉系统。',
      '团队管理：组建并领导品牌设计团队，负责团队绩效管理与辅导。',
      '创意设计：根据营销策略，精准挖掘营销卖点，对营销活动进行视觉包装并优化，提升品牌影响力。'
    ],
    achievements: [
      '品牌升级：入职两个月内，基于品牌核心策略，独立完成品牌 VIS 2.0 版本视觉系统升级。',
      '空间设计：打造北外滩网红西餐厅，成为大众点评虹口区打卡首选。',
      'IP形象设计：独立完成公司 IP 形象及其周边延展， IP 形象成为 2021 吴江路网红打卡拍照区。',
      '电商设计：设计京东、天猫新店主视觉，上线 3 周内实现 15000+ 销量。'
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
      'Brand Strategy and Management: Established and executed brand strategies from inception, analyzed market trends and competitors, and developed promotion plans to increase brand awareness and market share.',
      'Creative and Design Management: Led the design team to create the brand\'s visual identity system from 0 to 1, overseeing advertising, packaging, digital media, and event design to ensure innovative and brand-consistent outputs.',
      'Cross-Department Collaboration: Collaborated closely with marketing, product development, and sales departments, coordinated with external vendors and partners to ensure high-quality execution of brand projects.',
      'Brand Communication and Promotion: Planned and executed brand communication activities, managed content across various channels, and organized promotional events and international exhibitions to boost influence.',
      'Team Management and Development: Recruited, trained, and managed the design team, set team work plans and goals, and supervised progress to enhance professional skills and efficiency.'
    ],
    achievements: [
      'Brand Building: Successfully created the Crydit brand from scratch, designed and implemented a comprehensive visual identity system. In the initial stage before the team was formed, independently completed the full product design process (user research, positioning, visual, and interaction design).',
      'Recognition: The product won multiple international awards, including the Silver at the New York Product Design Award, and Gold awards at the London Design Award, French Design Award, American MUSE Design Awards, and European Design Award.',
      'Market Promotion: Through innovative brand strategies, increased brand recognition in the blockchain industry by 80% and achieved a 50% user growth rate within six months of launch.',
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
      'Visual Management: Assisted the CMO by overseeing and ensuring the design quality for China Guijiu Group and its subsidiaries. Maintained the visual identity system based on the brand design DNA.',
      'Project Coordination: Managed key projects by forming teams, tracking progress, and allocating personnel to ensure high-quality, on-time completion.',
      'Public Relations: Represented the brand department in communications and coordination with various groups and functional departments to ensure efficient collaboration.'
    ],
    achievements: [
      'Group Recognition: Nominated as an outstanding employee in 2022, highlighting exceptional performance.',
      'Brand Building: Successfully established and executed the visual system for Huawang Group within two months, supporting the brand\'s launch event.',
      'Industry Honors: Participated in the exclusive sponsorship of the CCTV "National Brand" story project, which won major awards at the 29th China International Advertising Festival.',
      'Innovative Projects: The "Thousand Cities and Ten Thousand Enterprises" project was recognized as one of the top ten high-quality consumption innovation cases.'
    ]
  },
  {
    id: 'exp-chunmai-en',
    company: 'Shanghai Chunmai Brand Management Co., Ltd.',
    role: 'Visual Design Manager',
    period: '2018.7 - 2021.10',
    companyIntro: 'Exclusive brand authorization partner of France\'s Les Moulines d\'Antoine in China.',
    reportingTo: 'Executive Director',
    responsibilities: [
      'Brand Image Design: Conducted research and designed the overall brand image, developed the visual system based on brand positioning.',
      'Team Management: Built and led the brand design team, managed performance and provided coaching.',
      'Creative Design: Identified marketing points based on strategies, visually packaged and optimized campaigns to boost influence.'
    ],
    achievements: [
      'Brand Upgrade: Independently completed the upgrade of the brand VIS 2.0 system within two months of joining.',
      'Space Design: Created the popular Western restaurant at North Bund, becoming a top check-in spot on Dazhong Dianping.',
      'IP Image Design: Developed the company\'s IP image and related extensions, with the IP becoming a check-in spot on Wujiang Road in 2021.',
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
      'Designed pages in various styles based on holiday and project requirements, ensuring alignment with the overall brand tone.'
    ]
  }
];

export const STRATEGIC_EXPERTISE_CN = [
  { title: "跨行业视觉战略经验", desc: "超过 9 年经验，涵盖加密市场、奢侈品、区块链、餐饮酒水、创新消费品、教育、医疗、跨境/国内电商、广告公司等多个行业。" },
  { title: "全方位品牌管理", desc: "具备掌控品牌全生命周期的卓越能力——从战略制定到创意执行。结合丰富的视觉设计资源，实现品牌跨职能的高效领导。" },
  { title: "多元风格驾驭力", desc: "创意思维活跃，审美前瞻，能够驾驭并执行多元视觉风格. 擅长利用 AI 工具重构设计工作流，倡导“人机协同”，推动效率驱动转向创意增强。" },
  { title: "团队领导与协作", desc: "在领导和对齐设计团队方面经验丰富，擅长通过高效的跨部门协作推动项目落地，实现卓越且一致的品牌表达。" }
];

export const STRATEGIC_EXPERTISE_EN = [
  { title: "Cross-Industry Visual Strategy", desc: "Over 9 years of experience across Crypto, Luxury, Blockchain, F&B, Consumer Goods, Healthcare, and E-commerce agencies." },
  { title: "Comprehensive Brand Management", desc: "Strong capability in managing the full brand lifecycle—from strategy and creative direction to execution—combined with extensive visual design resources." },
  { title: "Versatile Aesthetic & Style Adaptability", desc: "Creative and forward-thinking, with the ability to execute across diverse visual styles. Skilled in leveraging AI tools to reshape design workflows and advocate for human-AI collaboration." },
  { title: "Team Leadership & Collaboration", desc: "Experienced in leading and aligning design teams, driving project delivery, and achieving exceptional brand expression through effective cross-departmental collaboration." }
];

export const CONTENT_CN: SiteContent = {
  nav: { portfolios: "作品集", career: "职业路径", connect: "联系我" },
  hero: {
    title: "毛宇君 Janice Mo",
    subtitle: "品牌总监 & 设计总监 | 9 年行业经验\n深耕垂直行业叙事：从汽车 CMF 到 AI 创意增强内容，致力于构建具有跨行业视野的 brand 美学资产。",
    cta: "浏览作品集",
    available: "寻找全球战略合作伙伴"
  },
  resume: {
    aboutTitle: "核心战略专长",
    aboutText: "", 
    stats: { exp: "从业年限", projects: "落地项目", awards: "国际大奖" },
    skillsTitle: "方法论与技能",
    experienceTitle: "职业履历"
  },
  portfolio: {
    title: "作品档案",
    subtitle: "", 
    filters: {
      all: "全部领域",
      activity: "品牌活动与空间",
      brand_ecosystem: "Web3 金融生态",
      luxury: "奢侈品美学与调性",
      automotive: "智能出行体验",
      fnb: "餐饮商业",
      ai_drama: "AI 影像创新"
    }
  },
  footer: { rights: "© 2025 Janice Mo. 版权所有。保留所有权利。" },
  experience: EXPERIENCE_CN,
  skills: SKILLS_COMMON,
  projects: PROJECTS_CN,
  aiContext: "毛宇君 (Janice Mo) 是一位拥有 9 年经验的品牌与设计总监。核心成就包括：从 0 到 1 打造 Crydit Web3 品牌生态并获多项国际设计大奖；主导众泰汽车新能源品牌重构及 CMF 设计；为中国贵酒集团及 LVMH 体系提供顶级视觉叙事。擅长利用 AI 工具优化设计流程，具备深厚的跨行业战略视野。",
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
    title: "Janice Mo",
    subtitle: "Brand Director & Design Director | 9+ Years Experience\nSpecializing in vertical industry narratives: From Automotive CMF to AI-enhanced creative content.",
    cta: "Explore Portfolio",
    available: "Global Strategic Partner"
  },
  resume: {
    aboutTitle: "Strategic Expertise",
    aboutText: "", 
    stats: { exp: "Professional Years", projects: "Global Projects", awards: "Design Awards" },
    skillsTitle: "Methodology",
    experienceTitle: "Experience"
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
  footer: { rights: "© 2025 Janice Mo. All Rights Reserved." },
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
