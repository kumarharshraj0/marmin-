import { m as motion } from "framer-motion"
import { useEffect } from "react"
import FadeUp from "./FadeUp"
import ProjectSlider from "./ProjectSlider"
import { portfolioData } from "../data/portfolio"

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const index = portfolioData.projects.findIndex(p => p.title === project.title)
  const displayIndex = index >= 0 ? (index + 1).toString().padStart(2, '0') : '01'

  const DetailItem = ({ label, value, valueClass = "text-white/80" }) => (
    <div className="flex flex-col gap-2">
      <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/40">{label}</span>
      <span className={`text-base md:text-lg font-medium ${valueClass}`}>{value}</span>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 z-[100] bg-[#050505] overflow-y-auto w-full h-full font-outfit"
    >
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-16">
        <button
          onClick={onClose}
          className="text-[10px] md:text-xs font-medium text-white/50 hover:text-white uppercase tracking-[0.3em] flex items-center gap-4 transition-colors group"
        >
          <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span> ALL WORK
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-24">
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-8 md:mb-10">
            <span className="text-purple-500 font-bold">{displayIndex}</span>
            <span className="w-8 h-[1px] bg-white/20"></span>
            <span>{project.category} / {project.role} · {project.year}</span>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] leading-[0.9] font-normal tracking-tighter text-white mb-8 md:mb-12">
            {project.title}
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="text-base md:text-lg text-white/60 font-light mb-12 md:mb-16 max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            <a
              href={project.webLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] hover:bg-purple-500 hover:scale-105 transition-all shadow-xl shadow-purple-500/20"
            >
              Visit live site ↗
            </a>
            <span className="text-[9px] md:text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
              {project.stack.slice(0, 3).join(' + ')}
            </span>
          </div>
        </FadeUp>
      </div>

      {/* Large Image Slider */}
      <FadeUp delay={0.5}>
        <div className="w-full max-w-[100rem] mx-auto mt-20 md:mt-32 px-4 md:px-12">
          <div className="w-full h-[50vh] md:h-[80vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl shadow-black">
            <ProjectSlider images={project.images} />
          </div>
        </div>
      </FadeUp>

      {/* Details Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-40 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        {/* Left Column - Metadata */}
        <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-10">
          <FadeUp delay={0.1}>
            <DetailItem label="Client" value={project.title} />
          </FadeUp>
          <FadeUp delay={0.2}>
            <DetailItem label="Role" value={project.role} />
          </FadeUp>
          <FadeUp delay={0.3}>
            <DetailItem label="Category" value={project.category} />
          </FadeUp>
          <FadeUp delay={0.4}>
            <DetailItem label="Stack" value={project.stack.join(" • ")} />
          </FadeUp>
          <FadeUp delay={0.5}>
            <DetailItem label="Year" value={project.year} />
          </FadeUp>
          <FadeUp delay={0.6}>
            <DetailItem label="Status" value="Live" valueClass="text-green-400" />
          </FadeUp>
        </div>

        {/* Right Column - Brief & Details */}
        <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-20">
          <FadeUp delay={0.3}>
            <div>
              <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30 mb-8">Brief</h4>
              <p className="text-xl md:text-3xl lg:text-4xl text-white/90 font-light leading-snug md:leading-normal">
                A comprehensive digital solution tailored for {project.title}. Designed with modern engineering practices to deliver a seamless, high-performance experience that actively converts visitors and handles complex MERN architectures efficiently.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div>
              <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30 mb-8">The Challenge</h4>
              <p className="text-base md:text-lg text-white/60 font-light leading-relaxed mb-12">
                Like every project in this archive, {project.title} started with a core problem to solve. The goal was to build an application that doesn't just look the part, but performs under load. Translating a brand identity into a highly interactive React frontend while ensuring robust backend security and state management.
              </p>

              <h4 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30 mb-8 mt-16">What I Built</h4>
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-5 text-white/70 text-base md:text-lg font-light leading-relaxed">
                  <span className="text-purple-500 mt-1 text-sm">✦</span>
                  Strategy session → Architecture planning → Wireframes mapped to the core user flow.
                </li>
                <li className="flex items-start gap-5 text-white/70 text-base md:text-lg font-light leading-relaxed">
                  <span className="text-purple-500 mt-1 text-sm">✦</span>
                  Full design pass incorporating typography, palette, motion language, and reusable component system.
                </li>
                <li className="flex items-start gap-5 text-white/70 text-base md:text-lg font-light leading-relaxed">
                  <span className="text-purple-500 mt-1 text-sm">✦</span>
                  Built on <span className="font-semibold text-white px-2">MERN Stack</span> with mobile-first responsive layout and optimized data fetching.
                </li>
                <li className="flex items-start gap-5 text-white/70 text-base md:text-lg font-light leading-relaxed">
                  <span className="text-purple-500 mt-1 text-sm">✦</span>
                  <a href={project.githubRepo} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-purple-400 transition-colors">
                    View full source code on GitHub
                  </a>
                </li>
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </motion.div>
  )
}
