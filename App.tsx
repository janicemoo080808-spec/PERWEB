import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { CONTENT_EN, CONTENT_CN, STRATEGIC_EXPERTISE_EN, STRATEGIC_EXPERTISE_CN } from './constants';
import { CategoryType, Language, Project, AwardItem, EducationItem, CertificateItem } from './types';
import ProjectCard from './components/ProjectCard';
import ProjectDetails from './components/ProjectDetails';
import VideoModal from './components/VideoModal';
import AIChat from './components/AIChat';
import ResumeSection from './components/ResumeSection';
import LightRays from './components/LightRays';
import MagicBento from './components/MagicBento';
import { X, Award as AwardIcon, Mail, Phone, ExternalLink, Trophy, Star, ChevronRight, ArrowDown, GraduationCap, FileCheck, ChevronLeft } from 'lucide-react';

const AwardRow: React.FC<{ award: AwardItem; index: number; language: Language }> = ({ award, index, language }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative py-12 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-all duration-500 hover:px-8 hover:bg-white/[0.02]"
    >
      <div className="absolute left-0 top-0 w-[2px] h-0 bg-[#86570B] group-hover:h-full transition-all duration-700" />
      
      <div className="flex items-center gap-8 flex-1">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 w-16 h-16 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-[#86570B]/40 group-hover:bg-[#86570B]/5 transition-all duration-500 shadow-xl"
        >
          <Trophy className="w-6 h-6 text-zinc-600 group-hover:text-primary transition-colors" />
        </motion.div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
             <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">
               {award.level}
             </span>
             <div className="w-1 h-1 rounded-full bg-zinc-800" />
             <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-600 uppercase">
               {award.desc}
             </span>
          </div>
          <h4 className="text-2xl md:text-4xl font-display font-bold text-white group-hover:translate-x-2 transition-transform duration-500">
            {award.name}
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

const AwardsSection: React.FC<{ awards?: AwardItem[]; language: Language }> = ({ awards, language }) => {
  if (!awards) return null;

  return (
    <section id="awards" className="px-6 md:px-20 py-40 border-t border-white/5 bg-[#08080A] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-20 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: 48 }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="h-[1px] bg-[#86570B]" 
               />
               <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">Recognitions</span>
            </div>
            <h2 className="text-5xl md:text-9xl font-display font-bold tracking-tighter uppercase mb-12">
              {language === 'CN' ? '荣誉成就' : 'ACCOLADES'}
            </h2>
            <p className="text-zinc-500 text-xl md:text-2xl font-light leading-relaxed">
              {language === 'CN' 
                ? '在初创阶段团队未组建之前，独立完成产品全流程设计，并斩获多项国际设计大奖，以此构建品牌的专业基石。' 
                : 'Pioneered full-cycle product narratives independently, resulting in prestigious global accolades that define brand excellence.'}
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {awards.map((award, idx) => (
            <AwardRow key={idx} award={award} index={idx} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CredentialsSection: React.FC<{ edu: EducationItem[]; certs: CertificateItem[]; content: any; language: Language }> = ({ edu, certs, content, language }) => {
  return (
    <section id="credentials" className="px-6 md:px-20 py-40 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-display font-bold uppercase tracking-tight">{content.eduTitle}</h2>
            </div>
            <div className="space-y-12">
              {edu.map((item, idx) => (
                <div key={idx} className="relative pl-10 border-l border-white/10">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-primary" />
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.3em] mb-3 block">{item.period}</span>
                  <h3 className="text-xl font-bold text-white mb-4">{item.school}</h3>
                  <div className="space-y-2">
                    {item.degrees.map((d, dIdx) => (
                      <p key={dIdx} className="text-zinc-400 text-sm font-light">{d}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <FileCheck className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-display font-bold uppercase tracking-tight">{content.certTitle}</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {certs.map((cert, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-between group hover:bg-white/[0.05] transition-all">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{cert.year}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{cert.name}</h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-zinc-700 group-hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('CN');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('ALL');
  const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const CONTACT_INFO = { email: "maoyujun08@163.com", phone: "186 2156 8644" };
  const CONTENT = language === 'EN' ? CONTENT_EN : CONTENT_CN;
  const EXPERTISE = language === 'EN' ? STRATEGIC_EXPERTISE_EN : STRATEGIC_EXPERTISE_CN;
  
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const fgElementsY = useTransform(smoothScrollY, [0, 1000], [0, -200]);
  const progressScaleX = useSpring(useTransform(scrollY, [0, 1], [0, 1]), { stiffness: 100, damping: 30 });

  const filteredProjects = CONTENT.projects.filter(p => activeCategory === 'ALL' || p.category === activeCategory);

  const filterButtons = [
    { id: 'ALL', label: CONTENT.portfolio.filters.all },
    { id: 'ACTIVITY_VISUALS', label: CONTENT.portfolio.filters.activity },
    { id: 'BRAND_ECOSYSTEM', label: CONTENT.portfolio.filters.brand_ecosystem },
    { id: 'LUXURY_DESIGN', label: CONTENT.portfolio.filters.luxury },
    { id: 'AUTOMOTIVE_DESIGN', label: CONTENT.portfolio.filters.automotive },
    { id: 'FNB_COMMERCIAL', label: CONTENT.portfolio.filters.fnb },
    { id: 'AI_CREATIVE', label: CONTENT.portfolio.filters.ai_drama }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const heroSubtitleParts = CONTENT.hero.subtitle.split('|');
  const philosophyLine = heroSubtitleParts[0];
  const sniperStatement = heroSubtitleParts[1] || "";

  return (
    <div className="min-h-screen bg-background text-white selection:bg-[#86570B]/20">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[1100] origin-left" style={{ scaleX: progressScaleX }} />

      {/* FIXED NAV */}
      <AnimatePresence>
        {!selectedProject && (
          <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="fixed top-6 left-0 right-0 z-[1000] flex justify-center px-4 pointer-events-none"
          >
            <nav className="relative w-full max-w-6xl h-[68px] glass rounded-full flex items-center justify-between px-8 md:px-10 border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] backdrop-blur-3xl pointer-events-auto">
              <div className="flex-1 flex justify-start">
                <motion.span 
                  onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  className="text-lg font-display font-bold tracking-tighter text-white cursor-pointer uppercase whitespace-nowrap"
                >
                  JANICE MO
                </motion.span>
              </div>

              <div className="hidden lg:flex items-center justify-center gap-10">
                 <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">
                   <motion.a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} whileHover={{ scale: 1.05, color: "#fff" }} className="hover:text-white transition-all relative group py-2">
                     {CONTENT.nav.portfolios}
                     <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300 origin-center" />
                   </motion.a>
                   <motion.a href="#journey" onClick={(e) => handleNavClick(e, 'journey')} whileHover={{ scale: 1.05, color: "#fff" }} className="hover:text-white transition-all relative group py-2">
                     {CONTENT.nav.career}
                     <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300 origin-center" />
                   </motion.a>
                   <motion.a href="#connect" onClick={(e) => handleNavClick(e, 'connect')} whileHover={{ scale: 1.05, color: "#fff" }} className="hover:text-white transition-all relative group py-2">
                     {CONTENT.nav.connect}
                     <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300 origin-center" />
                   </motion.a>
                 </div>
              </div>

              <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
                <div className="hidden sm:flex items-center bg-white/5 rounded-full p-1 border border-white/10">
                  <button onClick={() => setLanguage('EN')} className={`px-3 py-1.5 rounded-full text-[9px] font-bold transition-all ${language === 'EN' ? 'bg-white text-black shadow-lg' : 'text-zinc-500 hover:text-white'}`}>EN</button>
                  <button onClick={() => setLanguage('CN')} className={`px-3 py-1.5 rounded-full text-[9px] font-bold transition-all ${language === 'CN' ? 'bg-white text-black shadow-lg' : 'text-zinc-500 hover:text-white'}`}>中文</button>
                </div>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="px-5 md:px-6 py-2.5 bg-primary text-white text-[10px] font-bold tracking-widest rounded-full hover:brightness-110 transition-all uppercase shadow-lg shadow-[#86570B]/20 whitespace-nowrap"
                >
                  Let's Talk
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section - Refined Alignment and Hierarchy */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 relative pt-24 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <LightRays 
            raysOrigin="top-center"
            raysColor="#EEA72E" 
            raysSpeed={0.5}
            rayLength={3.5} 
            lightSpread={2.2} 
            mouseInfluence={0.15}
            followMouse={true}
            saturation={0.5}
            distortion={0.1}
          />
        </div>

        <motion.div 
          style={{ y: fgElementsY }}
          className="max-w-7xl relative z-10 w-full mx-auto"
        >
          <div className="flex flex-col items-start text-left">
            {/* Professional Label with premium divider */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-6 mb-10"
            >
              <div className="w-12 h-[1px] bg-primary" />
              <p className="text-zinc-500 uppercase tracking-[0.6em] text-[10px] font-bold">
                 Creative Director / Visual Strategist
              </p>
            </motion.div>

            {/* Main Name: High-impact display */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-[12vw] md:text-[10vw] font-display font-bold leading-[0.8] tracking-tighter text-white uppercase mb-20 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                JANICE MO
              </h1>
            </motion.div>
            
            {/* Descriptive Vision: Philosophy Line & Weakened Sniper Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              className="max-w-5xl space-y-10 pl-1"
            >
               {/* Philosophy Line: Strong and Bold */}
               <motion.p 
                 className="text-2xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.1]"
               >
                 {philosophyLine}
               </motion.p>
               
               {/* Sniper Statement: Significantly Weakened as Requested */}
               <motion.p 
                 className="text-xs md:text-sm text-zinc-600 font-light max-w-xl leading-relaxed tracking-wide opacity-60"
               >
                 {sniperStatement}
               </motion.p>

               {/* Availability Indicator */}
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1, duration: 1.5 }}
                 className="flex items-center gap-4 pt-6"
               >
                  <div className="w-1 h-1 rounded-full bg-primary/40 animate-pulse" />
                  <span className="text-[9px] font-bold tracking-[0.4em] text-zinc-800 uppercase">{CONTENT.hero.available}</span>
               </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 right-12 flex flex-col items-center gap-4 text-zinc-800"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] font-bold" style={{ writingMode: 'vertical-rl' }}>Explore</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 opacity-50" />
          </motion.div>
        </motion.div>
      </section>

      {/* Strategic Expertise Section */}
      <section id="expertise" className="px-6 md:px-20 py-40 bg-[#08080A]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="flex items-center gap-4 mb-8">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: 48 }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="h-[1px] bg-[#86570B]" 
               />
               <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">Expertise</span>
            </div>
            <h2 className="text-5xl md:text-9xl font-display font-bold tracking-tighter uppercase mb-12">
              {CONTENT.resume.aboutTitle}
            </h2>
          </motion.div>
          
          <MagicBento 
            items={EXPERTISE} 
            glowColor="238, 167, 46"
            enableStars={false}
            enableTilt={true}
            enableMagnetism={true}
          />
        </div>
      </section>

      {/* Archive Section */}
      <section id="projects" className="px-6 md:px-20 py-40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex items-center gap-4 mb-8">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: 48 }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="h-[1px] bg-[#86570B]" 
               />
               <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">Portfolio</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <h2 className="text-5xl md:text-9xl font-display font-bold tracking-tighter uppercase">
                {CONTENT.portfolio.title}
              </h2>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {filterButtons.map(btn => (
                  <motion.button
                    key={btn.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(btn.id as CategoryType)}
                    className={`px-6 py-2 rounded-full text-[9px] font-bold tracking-widest uppercase transition-all border shadow-lg ${activeCategory === btn.id ? 'bg-white text-black border-white' : 'text-zinc-500 border-white/10 hover:border-white/20 hover:bg-white/5'}`}
                  >
                    {btn.label}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectCard 
                    project={project} 
                    onOpenVideo={(url) => setModalVideoUrl(url)}
                    className="aspect-[16/10]"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="px-6 md:px-20 py-40 bg-[#08080A]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="flex items-center gap-4 mb-8">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: 48 }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="h-[1px] bg-[#86570B]" 
               />
               <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">Career</span>
            </div>
            <h2 className="text-5xl md:text-9xl font-display font-bold tracking-tighter uppercase mb-12">
              {CONTENT.resume.experienceTitle}
            </h2>
          </motion.div>

          <ResumeSection 
            content={CONTENT.resume} 
            experience={CONTENT.experience} 
            skills={CONTENT.skills} 
          />
        </div>
      </section>

      {/* Credentials Section */}
      <CredentialsSection 
        edu={CONTENT.education} 
        certs={CONTENT.certificates} 
        content={CONTENT.resume} 
        language={language}
      />

      {/* Awards Section */}
      <AwardsSection awards={CONTENT.awards} language={language} />

      {/* Connect Section */}
      <section id="connect" className="px-6 md:px-20 py-40 bg-background relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[20%] w-[60%] aspect-square rounded-full border border-white/[0.02] border-dashed pointer-events-none" 
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="flex items-center gap-4 mb-8">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: 48 }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="h-[1px] bg-[#86570B]" 
               />
               <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">Contact</span>
            </div>
            <h2 className="text-5xl md:text-9xl font-display font-bold tracking-tighter uppercase">
              Let's Create.
            </h2>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-32">
            <motion.a 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href={`mailto:${CONTACT_INFO.email}`} 
              className="flex flex-col items-start gap-6 group"
            >
               <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                  <Mail className="w-8 h-8 text-zinc-500 group-hover:text-white" />
               </div>
               <div className="flex flex-col items-start gap-1">
                 <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-600 group-hover:text-primary transition-colors">Direct Email</span>
                 <span className="text-xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">{CONTACT_INFO.email}</span>
               </div>
            </motion.a>
            
            <motion.div 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-start gap-6 group cursor-pointer"
            >
               <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:-rotate-12 transition-all duration-500 shadow-2xl">
                  <Phone className="w-8 h-8 text-zinc-500 group-hover:text-white" />
               </div>
               <div className="flex flex-col items-start gap-1">
                 <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-600 group-hover:text-primary transition-colors">Business Line</span>
                 <span className="text-xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">{CONTACT_INFO.phone}</span>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-20 py-20 border-t border-white/5 text-center bg-[#08080A]">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.6em]"
        >
          {CONTENT.footer.rights}
        </motion.p>
      </footer>

      <AIChat context={CONTENT.aiContext} />
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      <VideoModal 
        isOpen={!!modalVideoUrl} 
        videoUrl={modalVideoUrl} 
        onClose={() => setModalVideoUrl(null)} 
      />
    </div>
  );
};

export default App;