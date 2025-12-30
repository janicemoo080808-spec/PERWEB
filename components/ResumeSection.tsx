
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, User, LogOut, Building2 } from 'lucide-react';

const BentoBox: React.FC<{ children?: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`bg-zinc-900/20 backdrop-blur-sm border border-white/5 rounded-[2.5rem] p-10 hover:border-white/10 transition-colors duration-500 ${className}`}>
    {children}
  </div>
);

const ExperienceCard: React.FC<{ item: any }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasDetails = (item.responsibilities && item.responsibilities.length > 0) || (item.achievements && item.achievements.length > 0);

  return (
    <div className="relative pl-12 pb-16 last:pb-0 border-l border-white/5 group">
      <div className="absolute left-[-3px] top-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-primary transition-all duration-500 shadow-primary/20" />
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em] mb-2 block">{item.period}</span>
            <h3 className="text-2xl font-bold text-white tracking-tight">{item.role}</h3>
          </div>
          <span className="text-[9px] font-bold text-zinc-500 border border-white/10 px-4 py-1.5 rounded-full uppercase tracking-widest">{item.company}</span>
        </div>
        
        {item.companyIntro && (
          <div className="flex gap-4 items-start mb-6">
             <Building2 className="w-4 h-4 text-primary/40 mt-1 flex-shrink-0" />
             <p className="text-sm text-zinc-500 leading-relaxed font-light max-w-2xl">{item.companyIntro}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-6 mb-8">
           {item.reportingTo && (
             <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
               <User className="w-3 h-3 text-zinc-700" />
               <span className="text-zinc-700">Reporting To:</span> {item.reportingTo}
             </div>
           )}
           {item.reasonForLeaving && (
             <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
               <LogOut className="w-3 h-3 text-zinc-700" />
               <span className="text-zinc-700">Reason for Leaving:</span> {item.reasonForLeaving}
             </div>
           )}
        </div>
      </div>

      {hasDetails && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-4 text-[9px] font-bold tracking-[0.4em] text-zinc-600 hover:text-white transition-all uppercase"
        >
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
             <ChevronDown className="w-4 h-4" />
          </motion.div>
          {isExpanded ? 'Collapse Analysis' : 'Expand Strategic Breakdown'}
        </button>
      )}

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden mt-10 space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-6">
                  <h4 className="text-[10px] font-bold text-zinc-700 tracking-[0.4em] uppercase">Responsibilities</h4>
                  <ul className="space-y-4">
                    {item.responsibilities?.map((res: string, idx: number) => (
                      <li key={idx} className="text-[11px] text-zinc-500 leading-relaxed flex gap-4">
                        <span className="text-primary/40">•</span> {res}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="space-y-6">
                  <h4 className="text-[10px] font-bold text-zinc-700 tracking-[0.4em] uppercase">Impact & Achievements</h4>
                  <div className="space-y-4">
                    {item.achievements?.map((ach: string, idx: number) => (
                      <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-[11px] text-zinc-400 font-light hover:border-white/10 transition-all">
                        {ach}
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ResumeSection: React.FC<any> = ({ content, experience, skills }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8">
        <BentoBox className="space-y-16">
          <h3 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
            <Sparkles className="w-4 h-4 text-primary" /> {content.experienceTitle}
          </h3>
          {experience.map((item: any) => (
            <ExperienceCard key={item.id} item={item} />
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
                    initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "circOut", delay: idx * 0.1 }}
                    className="h-full bg-primary absolute top-0 left-0 rounded-full"
                  >
                     {skill.level >= 95 && (
                       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_#F63C0C]" />
                     )}
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24 p-8 bg-black/40 border border-white/5 rounded-3xl">
             <p className="text-[11px] text-zinc-500 leading-relaxed font-light italic">"A fusion of industrial precision and digital narrative leadership."</p>
          </div>
        </BentoBox>
      </div>
    </div>
  );
};

export default ResumeSection;
