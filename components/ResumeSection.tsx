
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, User, LogOut, Building2, Quote } from 'lucide-react';
import { DESIGN_PHILOSOPHY_CN, DESIGN_PHILOSOPHY_EN } from '../constants';

const BentoBox: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className={`bg-zinc-900/20 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-10 hover:border-white/10 transition-colors duration-500 ${className}`}
  >
    {children}
  </motion.div>
);

const DesignPhilosophy: React.FC<{ isEn: boolean }> = ({ isEn }) => {
  const content = isEn ? DESIGN_PHILOSOPHY_EN : DESIGN_PHILOSOPHY_CN;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-20 p-12 md:p-16 rounded-[3rem] bg-zinc-950/50 border border-white/5 relative overflow-hidden group shadow-2xl"
    >
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#86570B]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-full bg-[#86570B]/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-8 h-[1px] bg-primary" />
          <span className="text-[10px] font-bold tracking-[0.5em] text-primary uppercase">{content.title}</span>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.1] mb-10">
              <Quote className="w-12 h-12 text-primary opacity-20 mb-6" />
              {content.quote}
            </h3>
          </div>
          <div className="flex-1 md:border-l md:border-white/10 md:pl-12">
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceCard: React.FC<{ item: any; index: number }> = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = (item.responsibilities && item.responsibilities.length > 0) || (item.achievements && item.achievements.length > 0);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-12 pb-16 last:pb-0 border-l border-white/5 group"
    >
      <div className="absolute left-[-3px] top-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-primary group-hover:scale-150 transition-all duration-500 shadow-primary/20" />
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em] mb-2 block">{item.period}</span>
            <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">{item.role}</h3>
          </div>
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-[9px] font-bold text-zinc-500 border border-white/10 px-4 py-1.5 rounded-full uppercase tracking-widest bg-white/[0.02]"
          >
            {item.company}
          </motion.span>
        </div>
        
        {item.companyIntro && (
          <div className="flex gap-4 items-start mb-6">
             <Building2 className="w-4 h-4 text-primary/40 mt-1 flex-shrink-0" />
             <p className="text-sm text-zinc-500 leading-relaxed font-light max-w-2xl">{item.companyIntro}</p>
          </div>
        )}
      </div>

      {hasDetails && (
        <motion.button 
          whileHover={{ x: 5 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-4 text-[9px] font-bold tracking-[0.4em] text-zinc-600 hover:text-white transition-all uppercase"
        >
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ type: "spring", stiffness: 200 }}>
             <ChevronDown className="w-4 h-4" />
          </motion.div>
          {isExpanded ? 'Collapse Analysis' : 'Expand Strategic Breakdown'}
        </motion.button>
      )}

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden mt-10 space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-6">
                  <h4 className="text-[10px] font-bold text-zinc-700 tracking-[0.4em] uppercase">Core Responsibilities</h4>
                  <ul className="space-y-4">
                    {item.responsibilities?.map((res: string, idx: number) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={idx} 
                        className="text-[11px] text-zinc-500 leading-relaxed flex gap-4"
                      >
                        <span className="text-primary/40">•</span> {res}
                      </motion.li>
                    ))}
                  </ul>
               </div>
               <div className="space-y-6">
                  <h4 className="text-[10px] font-bold text-zinc-700 tracking-[0.4em] uppercase">Impact & Achievements</h4>
                  <div className="space-y-4">
                    {item.achievements?.map((ach: string, idx: number) => (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-[11px] text-zinc-400 font-light hover:border-white/10 hover:bg-white/[0.04] transition-all"
                      >
                        {ach}
                      </motion.div>
                    ))}
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ResumeSection: React.FC<any> = ({ content, experience, skills }) => {
  const isEn = content.experienceTitle.toLowerCase().includes('journey');

  return (
    <div className="flex flex-col gap-12">
      <DesignPhilosophy isEn={isEn} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <BentoBox className="space-y-16">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.5em] mb-12 flex items-center gap-4"
            >
              <motion.div
                animate={{ rotate: [0, 90, 180, 270, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              {content.experienceTitle}
            </motion.h3>
            {experience.map((item: any, idx: number) => (
              <ExperienceCard key={item.id} item={item} index={idx} />
            ))}
          </BentoBox>
        </div>

        <div className="lg:col-span-4">
          <BentoBox className="h-full">
            <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.5em] mb-16">{content.skillsTitle}</h3>
            <div className="space-y-12">
              {skills.map((skill: any, idx: number) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between text-[10px] mb-5 font-bold tracking-widest uppercase">
                    <span className="text-zinc-500 group-hover:text-white transition-colors">{skill.name}</span>
                    <span className="text-zinc-700">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 relative overflow-visible rounded-full">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${skill.level}%` }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 1.5, ease: "circOut", delay: idx * 0.1 }}
                      className="h-full bg-primary absolute top-0 left-0 rounded-full"
                    >
                       {skill.level >= 95 && (
                         <motion.div 
                           initial={{ scale: 0 }}
                           animate={{ scale: [1, 1.5, 1] }}
                           transition={{ duration: 2, repeat: Infinity }}
                           className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_#86570B]" 
                         />
                       )}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </BentoBox>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
