
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { CONTENT_EN, CONTENT_CN, STRATEGIC_EXPERTISE_EN, STRATEGIC_EXPERTISE_CN, CV_URL } from './constants';
import { CategoryType, Language, Project, AwardItem, EducationItem, CertificateItem } from './types';
import ProjectCard from './components/ProjectCard';
import ProjectDetails from './components/ProjectDetails';
import VideoModal from './components/VideoModal';
import AIChat from './components/AIChat';
import ResumeSection from './components/ResumeSection';
import LightRays from './components/LightRays';
import MagicBento from './components/MagicBento';
import BlurText from './components/BlurText';
import ShinyText from './components/ShinyText';
import { X, Award as AwardIcon, Mail, Phone, ExternalLink, Trophy, Star, ChevronRight, ArrowDown, GraduationCap, FileCheck, ChevronLeft, Download, ShieldCheck, Cpu, Globe, Rocket, Target, Layout, Database, BarChart4 } from 'lucide-react';

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
              {language === 'CN' ? '商业实战荣誉' : 'Commercial Accolades'}
            </h2>
            <p className="text-zinc-500 text-xl md:text-2xl font-light leading-relaxed italic">
              {language === 'CN' 
                ? '“深耕实战，以结果定义专业。以下荣誉均为我在各职业阶段，主导产品全流程视觉策略期间，助力企业斩获的国际级认可。”' 
                : '“Results define expertise. The following accolades represent global recognitions secured for products and brands under my strategic visual leadership.”'}
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
  const lvmhCert = certs.find(c => c.issuer === 'LVMH');
  const googleCerts = certs.filter(c => c.issuer === 'Google');

  return (
    <section id="credentials" className="px-6 md:px-20 py-40 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Architecture</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tight text-white">{content.certTitle}</h2>
          </div>
          <div className="flex items-center gap-8 text-[10px] font-bold tracking-widest text-zinc-600 uppercase">
             <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-primary" /> Zone A: Brand Equity</span>
             <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-500" /> Zone B: Growth Stack</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group"
          >
            <div className="h-full bg-zinc-950 border border-white/5 rounded-[2.5rem] p-12 flex flex-col justify-between transition-all duration-700 hover:border-primary/40 hover:bg-primary/[0.02]">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                  <ShieldCheck className="w-24 h-24 text-primary" />
               </div>
               
               <div>
                 <span className="text-[10px] font-bold text-primary tracking-[0.5em] uppercase mb-12 block">Zone A: Heritage Foundation</span>
                 <div className="mb-12">
                   <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">{lvmhCert?.name}</h3>
                   <p className="text-primary font-bold text-[11px] tracking-widest uppercase mb-6">Year: {lvmhCert?.year}</p>
                 </div>
               </div>

               <div className="pt-12 border-t border-white/5">
                 <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-3">Strategy Focus</p>
                 <p className="text-lg font-light text-zinc-300 leading-relaxed italic">"{lvmhCert?.focus}"</p>
               </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {googleCerts.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative group h-full bg-zinc-900/30 border border-white/5 rounded-[2rem] p-8 transition-all duration-500 hover:bg-white/[0.04] ${cert.isPriority ? 'md:col-span-2 bg-zinc-950 border-white/10' : ''}`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                       <span className="text-[9px] font-bold text-zinc-500 tracking-widest uppercase">Google Accredited</span>
                       {cert.isPriority && <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-[8px] font-bold text-blue-400 rounded-full uppercase tracking-widest">Priority Highlight</div>}
                    </div>
                    <h3 className={`${cert.isPriority ? 'text-2xl' : 'text-lg'} font-bold text-white mb-6 leading-tight group-hover:text-primary transition-colors`}>{cert.name}</h3>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <p className="text-[8px] font-bold text-zinc-700 uppercase tracking-[0.3em] mb-2">Strategy Focus</p>
                    <p className="text-[11px] text-zinc-400 font-light leading-relaxed">{cert.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-40 border-t border-white/5 pt-32">
          <div className="flex items-center gap-4 mb-16">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight">{content.eduTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {edu.map((item, idx) => (
              <div key={idx} className="relative pl-12">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5" />
                <div className="absolute left-[-2.5px] top-0 w-[5px] h-[5px] rounded-full bg-primary" />
                <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.3em] mb-4 block">{item.period}</span>
                <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{item.school}</h3>
                <div className="space-y-3">
                  {item.degrees.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-3">
                       <div className="w-1.5 h-[1px] bg-primary/40" />
                       <p className="text-zinc-500 text-sm font-light">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
            <nav className="relative w-full max-w-7xl h-auto py-3 glass rounded-full flex flex-wrap items-center justify-between px-6 md:px-10 border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] backdrop-blur-3xl pointer-events-auto overflow-hidden">
              <div className="flex-1 flex justify-start">
                <motion.span 
                  onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  className="text-base font-display font-bold tracking-tighter text-white cursor-pointer uppercase whitespace-nowrap"
                >
                  JANICE MO
                </motion.span>
              </div>

              <div className="hidden lg:flex items-center justify-center gap-6">
                 <div className="flex gap-6 text-[9px] uppercase tracking-[0.25em] font-bold text-zinc-500">
                   <motion.a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} whileHover={{ scale: 1.05, color: "#fff" }} className="hover:text-white transition-all relative group py-2">
                     {CONTENT.nav.portfolios}
                     <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300 origin-center" />
                   </motion.a>
                   <motion.a href="#journey" onClick={(e) => handleNavClick(e, 'journey')} whileHover={{ scale: 1.05, color: "#fff" }} className="hover:text-white transition-all relative group py-2">
                     {CONTENT.nav.career}
                     <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300 origin-center" />
                   </motion.a>
                   <motion.a href="#credentials" onClick={(e) => handleNavClick(e, 'credentials')} whileHover={{ scale: 1.05, color: "#fff" }} className="hover:text-white transition-all relative group py-2">
                     {CONTENT.nav.credentials}
                     <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300 origin-center" />
                   </motion.a>
                   <motion.a href="#awards" onClick={(e) => handleNavClick(e, 'awards')} whileHover={{ scale: 1.05, color: "#fff" }} className="hover:text-white transition-all relative group py-2">
                     {CONTENT.nav.awards}
                     <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300 origin-center" />
                   </motion.a>
                   <motion.a href="#connect" onClick={(e) => handleNavClick(e, 'connect')} whileHover={{ scale: 1.05, color: "#fff" }} className="hover:text-white transition-all relative group py-2">
                     {CONTENT.nav.connect}
                     <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300 origin-center" />
                   </motion.a>
                   <motion.a 
                    href={CV_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, color: "#fff" }} 
                    className="flex items-center gap-2 hover:text-white transition-all relative group py-2 text-primary"
                   >
                     <Download className="w-3.5 h-3.5" />
                     {CONTENT.nav.downloadCv}
                     <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300 origin-center" />
                   </motion.a>
                 </div>
              </div>

              <div className="flex-1 flex justify-end items-center gap-4">
                <div className="hidden sm:flex items-center bg-white/5 rounded-full p-1 border border-white/10">
                  <button onClick={() => setLanguage('EN')} className={`px-2.5 py-1 rounded-full text-[8px] font-bold transition-all ${language === 'EN' ? 'bg-white text-black shadow-lg' : 'text-zinc-500 hover:text-white'}`}>EN</button>
                  <button onClick={() => setLanguage('CN')} className={`px-2.5 py-1 rounded-full text-[8px] font-bold transition-all ${language === 'CN' ? 'bg-white text-black shadow-lg' : 'text-zinc-500 hover:text-white'}`}>中文</button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 relative pt-24 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-dots opacity-20" />
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

        <motion.div style={{ y: fgElementsY }} className="max-w-7xl relative z-10 w-full mx-auto">
          <div className="flex flex-col items-start text-left">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="flex items-center gap-6 mb-10">
              <div className="w-12 h-[1px] bg-primary" />
              <p className="text-zinc-200 uppercase tracking-[0.6em] text-[10px] font-bold">Creative Director / Visual Strategist</p>
            </motion.div>

            <div className="mb-16">
              <BlurText text="JANICE MO" delay={150} animateBy="letters" direction="top" className="text-[12vw] md:text-[10vw] font-display font-bold leading-[0.8] tracking-tighter text-white uppercase" />
            </div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.6 }} className="max-w-5xl pl-1 space-y-2">
               <motion.p className="text-lg md:text-xl font-display font-bold text-white tracking-tight leading-[1.1] uppercase border-l-[2px] border-primary pl-6">{philosophyLine}</motion.p>
               <motion.p className="text-lg md:text-xl text-white/90 font-display font-bold max-w-4xl leading-[1.1] tracking-tight pl-6 uppercase">{sniperStatement}</motion.p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="expertise" className="px-6 md:px-20 py-40 bg-[#08080A]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
            <div className="flex items-center gap-4 mb-8">
               <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#86570B]" />
               <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">Strategy</span>
            </div>
            <h2 className="text-5xl md:text-9xl font-display font-bold tracking-tighter uppercase mb-12">{CONTENT.resume.aboutTitle}</h2>
          </motion.div>
          <MagicBento items={EXPERTISE} glowColor="238, 167, 46" enableStars={false} enableTilt={true} enableMagnetism={true} />
        </div>
      </section>

      <section id="projects" className="px-6 md:px-20 py-40">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
            <div className="flex items-center gap-4 mb-8">
               <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#86570B]" />
               <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">Portfolio</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <h2 className="text-5xl md:text-9xl font-display font-bold tracking-tighter uppercase">{CONTENT.portfolio.title}</h2>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-wrap gap-3">
                {filterButtons.map(btn => (
                  <motion.button key={btn.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveCategory(btn.id as CategoryType)} className={`px-6 py-2 rounded-full text-[9px] font-bold tracking-widest uppercase transition-all border shadow-lg ${activeCategory === btn.id ? 'bg-white text-black border-white' : 'text-zinc-500 border-white/10 hover:border-white/20 hover:bg-white/5'}`}>{btn.label}</motion.button>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.5, ease: "circOut" }} onClick={() => setSelectedProject(project)}>
                  <ProjectCard project={project} onOpenVideo={(url) => setModalVideoUrl(url)} className="aspect-[16/10]" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section id="journey" className="px-6 md:px-20 py-40 bg-[#08080A]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
            <div className="flex items-center gap-4 mb-8">
               <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#86570B]" />
               <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">Career</span>
            </div>
            <h2 className="text-5xl md:text-9xl font-display font-bold tracking-tighter uppercase mb-12">{CONTENT.resume.experienceTitle}</h2>
          </motion.div>
          <ResumeSection content={CONTENT.resume} experience={CONTENT.experience} skills={CONTENT.skills} />
        </div>
      </section>

      <CredentialsSection edu={CONTENT.education} certs={CONTENT.certificates} content={CONTENT.resume} language={language} />

      <AwardsSection awards={CONTENT.awards} language={language} />

      <section id="connect" className="px-6 md:px-20 py-40 bg-background relative overflow-hidden">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute -top-[20%] -right-[20%] w-[60%] aspect-square rounded-full border border-white/[0.02] border-dashed pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-32">
            <div className="flex items-center gap-4 mb-8">
               <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} transition={{ duration: 1, delay: 0.2 }} className="h-[1px] bg-[#86570B]" />
               <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">Contact</span>
            </div>
            <h2 className="text-5xl md:text-9xl font-display font-bold tracking-tighter uppercase">Let's Create.</h2>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-32">
            <motion.a whileHover={{ y: -10 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} href={`mailto:${CONTACT_INFO.email}`} className="flex flex-col items-start gap-6 group">
               <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                  <Mail className="w-8 h-8 text-zinc-500 group-hover:text-white" />
               </div>
               <div className="flex flex-col items-start gap-1">
                 <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-600 group-hover:text-primary transition-colors">Direct Email</span>
                 <span className="text-xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">{CONTACT_INFO.email}</span>
               </div>
            </motion.a>
            <motion.div whileHover={{ y: -10 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex flex-col items-start gap-6 group cursor-pointer">
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
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[10px] font-bold text-zinc-700 uppercase tracking-[0.6em]">{CONTENT.footer.rights}</motion.p>
      </footer>

      <AIChat context={CONTENT.aiContext} />
      <AnimatePresence>{selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
      <VideoModal isOpen={!!modalVideoUrl} videoUrl={modalVideoUrl} onClose={() => setModalVideoUrl(null)} />
    </div>
  );
};

export default App;
