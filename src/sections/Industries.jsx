import { m as motion } from "framer-motion"
import FadeUp from "../components/FadeUp"

const industriesData = [
  {
    title: "E-commerce & D2C Brands",
    metrics: "14+ BRANDS SCALED",
    playbook: "META ADS · TIKTOK SHOP · REEL FUNNELS · ROAS OPTIMIZATION",
    bgImage: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
    )
  },
  {
    title: "High-Ticket Professional Services",
    metrics: "8+ AGENCIES & FIRMS",
    playbook: "FOUNDER BRANDING · LINKEDIN REACH · INBOUND CLIENT FUNNELS",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    )
  },
  {
    title: "SaaS & High-Growth Tech",
    metrics: "6+ TECH VENTURES",
    playbook: "VIRAL PRODUCT LAUNCHES · RETENTION HOOKS · PAID ACQUISITION",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
    )
  },
  {
    title: "Creator Economy & Media",
    metrics: "12M+ REACH GENERATED",
    playbook: "SHORT-FORM EDITING · VIRAL STORYTELLING · MULTI-CHANNEL DISTRIBUTION",
    bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
    )
  },
  {
    title: "Education & Coaching Programs",
    metrics: "5+ INFOPRODUCTS SCALED",
    playbook: "WEBINAR FUNNELS · AUDIENCE NURTURING · RETARGETING SEQUENCES",
    bgImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14v7"/></svg>
    )
  },
  {
    title: "Health, Wellness & Clinics",
    metrics: "4X AVERAGE ROAS",
    playbook: "LOCAL LEAD GEN · SOCIAL PROOF CAMPAIGNS · CONVERSION LANDERS",
    bgImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
    )
  }
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-20 sm:py-24 px-4 sm:px-6 md:px-12 bg-black overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-24">
          <div className="max-w-3xl flex flex-col items-center">
            <FadeUp delay={0.1}>
              <div className="flex items-center gap-4 mb-4 sm:mb-6 md:mb-10 justify-center">
                <div className="w-12 h-[1px] bg-white/20 hidden md:block" />
                <span className="text-purple-300 font-medium text-xs md:text-sm tracking-widest uppercase font-sans">
                  04 · Growth Verticals
                </span>
                <div className="w-12 h-[1px] bg-white/20 hidden md:block" />
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-white tracking-tight leading-[1.15]">
                Proven reach across <span className="italic text-purple-400 font-light">growth verticals.</span>
              </h2>
            </FadeUp>
          </div>

          <FadeUp delay={0.3}>
            <p className="text-white/60 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed mx-auto font-sans px-2">
              Every vertical demands its own consumer psychology, creative hooks, and media distribution playbook. Here is where we repeatedly generate outsized attention and revenue.
            </p>
          </FadeUp>
        </div>

        {/* Grid Section: Responsive 1-col on mobile (w-full full width), 2-col on tablet, 3-col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-0 md:border-t md:border-l border-white/10 md:rounded-3xl shadow-2xl">
          {industriesData.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative w-full rounded-2xl md:rounded-none border border-white/10 md:border-t-0 md:border-l-0 md:border-b md:border-r overflow-hidden p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[240px] sm:min-h-[260px] md:h-[290px] bg-[#0E0B1D] transition-colors cursor-default"
            >
              {/* Background Image Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 group-hover:opacity-45 transition-opacity duration-500 scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url(${industry.bgImage})` }}
              />
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0E0B1D]/50 via-[#0E0B1D]/85 to-[#0E0B1D]" />

              <div className="relative z-10 flex justify-between items-start mb-6 md:mb-0 gap-3">
                <div className="text-purple-300 bg-purple-500/20 p-2.5 sm:p-3 rounded-2xl backdrop-blur-md border border-purple-400/30 group-hover:scale-110 group-hover:bg-purple-500/30 transition-all duration-300 shadow-lg shrink-0">
                  {industry.icon}
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-mono text-purple-200 bg-black/70 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md shadow-md text-right shrink-0">
                  {industry.metrics}
                </span>
              </div>
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl sm:text-2xl md:text-[26px] font-display text-white mb-2 sm:mb-3 group-hover:-translate-y-0.5 transition-transform duration-300 drop-shadow-md leading-snug">
                  {industry.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-purple-200/80 leading-relaxed group-hover:text-purple-100 transition-colors duration-300 font-mono">
                  {industry.playbook}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
