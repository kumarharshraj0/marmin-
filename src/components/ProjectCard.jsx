import { m as motion } from "framer-motion"
import React, { memo } from "react"
import FadeUp from "./FadeUp"

const ProjectCard = memo(({ project, index, onSelect }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 lg:gap-20 w-full`}
    >
      {/* Image Container */}
      <div 
        className="w-full md:w-3/5 cursor-pointer group"
        onClick={() => onSelect(project)}
      >
        <div className="relative w-full aspect-video rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#111] border border-white/5">
          <img decoding="async"
            src={project.images[0]}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Bottom tag bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-t from-black/80 to-transparent">
             <div className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-white" />
                 <span className="text-[9px] uppercase tracking-widest text-white/70 font-medium">
                     {project.stack.slice(0,2).join(' + ')}
                 </span>
             </div>
             <span className="text-[10px] text-white/50">{project.year}</span>
          </div>
        </div>
      </div>

      {/* Info Container */}
      <div className="w-full md:w-2/5 flex flex-col items-start justify-center">
         <div className="flex items-center gap-4 mb-5">
             <span className="text-white font-bold text-xs md:text-sm">
                 {String(index + 1).padStart(2, '0')}
             </span>
             <div className="w-8 md:w-12 h-[1px] bg-white/20" />
             <span className="text-[9px] md:text-[10px] font-medium tracking-widest uppercase text-white/50">
                 {project.category}
             </span>
         </div>

         <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 leading-tight">
             {project.title}
         </h3>

         {/* Subtitle / Quote */}
         <p className="text-white/70 font-mono italic text-xs md:text-sm mb-5">
             "{project.description.split('.')[0]}."
         </p>

         <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
             {project.description}
         </p>

         {/* Badges */}
         <div className="flex items-center gap-3 mb-10">
             <span className="px-4 py-2 rounded-full border border-white/10 text-[9px] md:text-[10px] uppercase tracking-widest text-white/60 bg-white/5">
                 {project.role}
             </span>
         </div>

         {/* Links */}
         <div className="flex items-center gap-6 md:gap-8">
             <button 
                 onClick={() => onSelect(project)}
                 className="text-white/80 font-medium text-sm pb-1 border-b border-white/80 hover:text-white hover:border-white transition-colors flex items-center gap-2"
             >
                 Read case study
                 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
             </button>

             {project.webLink && (
                 <a 
                     href={project.webLink} 
                     target="_blank" 
                     rel="noreferrer"
                     className="text-white/50 hover:text-white transition-colors flex items-center gap-2 text-xs md:text-sm"
                 >
                     <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                     Visit live
                 </a>
             )}
         </div>
      </div>
    </motion.div>
  )
})

export default ProjectCard;
