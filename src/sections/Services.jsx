import React, { memo } from 'react'
import { m as motion, useMotionTemplate, useMotionValue } from "framer-motion"
import FadeUp from '../components/FadeUp'

const servicesData = [
  {
    id: "01",
    capability: "CREATIVE",
    subheadline: "Ideas deserve better execution.",
    desc: "We build creative that earns attention. From brand identity and storytelling to campaigns, films and visual experiences, we turn ideas into work people remember.",
    tags: ["Brand Identity", "Campaigns", "Content", "Films", "Art Direction"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200",
    badge: "CINEMATIC & VISUAL"
  },
  {
    id: "02",
    capability: "PERFORMANCE",
    subheadline: "Attention should lead somewhere.",
    desc: "We connect marketing activity to business outcomes. Acquisition, conversion, retention and optimisation—every decision should have a purpose and every investment should be accountable.",
    tags: ["Paid Media", "Customer Acquisition", "Conversion", "Analytics", "Growth"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    badge: "ANALYTICS & CONVERSION"
  },
  {
    id: "03",
    capability: "DISTRIBUTION",
    subheadline: "A great idea needs an audience.",
    desc: "Creating something remarkable is only half the work. We build distribution strategies that take ideas, stories and brands to the places where attention already exists—and where new audiences can be created.",
    tags: ["Media Distribution", "Influencer Networks", "Organic Reach", "Partnerships", "Audience Development"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    badge: "VIRAL REACH & NETWORKS"
  },
  {
    id: "04",
    capability: "MARKETING",
    subheadline: "Understand the market before moving it.",
    desc: "We look beyond the obvious. Positioning, consumer behaviour, competitive landscapes and market opportunities shape the decisions that determine how a brand competes and grows.",
    tags: ["Market Research", "Brand Positioning", "Consumer Psychology", "Strategy", "Business Growth"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    badge: "POSITIONING & PSYCHOLOGY"
  }
]

const ServiceCard = memo(({ service, index }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [bounds, setBounds] = React.useState(null)

  function handleMouseEnter({ currentTarget }) {
    setBounds(currentTarget.getBoundingClientRect())
  }

  function handleMouseLeave() {
    setBounds(null)
  }

  function handleMouseMove({ clientX, clientY }) {
    if (typeof window === 'undefined' || !bounds) return
    const { left, top } = bounds
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer flex flex-col bg-white/[0.02] hover:bg-white/[0.04] p-5 sm:p-6 rounded-[2rem] border border-white/5 hover:border-purple-500/30 transition-all duration-300 w-full"
    >
      {/* Spotlight Hover Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-300 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.18),
              transparent 80%
            )
          `,
        }}
      />

      {/* Prominent Image Aspect Ratio matching Blog Cards (aspect-[16/10]) */}
      <div className="relative w-full aspect-[16/10] rounded-[1.25rem] overflow-hidden mb-6 bg-[#111] border border-white/5 shrink-0">
        <img 
          src={service.image} 
          alt={service.capability} 
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/50 transition-colors duration-500" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] sm:text-[10px] font-medium tracking-widest uppercase text-purple-200 font-sans shadow-md">
            {service.id} — {service.capability}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-purple-600/30 backdrop-blur-md border border-purple-400/30 text-[8px] sm:text-[9px] font-mono tracking-wider uppercase text-white shadow-md">
            {service.badge}
          </span>
        </div>
      </div>

      {/* Content Body: Taller vertical rhythm matching Blog Cards */}
      <div className="flex flex-col flex-1 relative z-10">
        <div className="flex items-center gap-3 mb-3 font-sans">
          <span className="text-[11px] text-white/50 tracking-wide uppercase font-mono">CAPABILITY</span>
          <span className="w-1 h-1 rounded-full bg-purple-500" />
          <span className="text-[11px] text-purple-300/90 font-medium tracking-wide uppercase">{service.capability}</span>
        </div>

        <FadeUp delay={0.1}>
          <h3 className="text-xl sm:text-2xl font-serif text-white mb-3 group-hover:text-purple-300 transition-colors duration-300 leading-snug">
            {service.subheadline}
          </h3>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-white/65 text-sm leading-relaxed mb-6 flex-1 font-sans">
            {service.desc}
          </p>
        </FadeUp>

        {/* Tags Row */}
        <div className="pt-4 border-t border-white/5 mt-auto">
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.1em] text-white/60 group-hover:text-white/95 group-hover:border-purple-500/40 group-hover:bg-purple-900/20 transition-all font-sans"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
})

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 min-h-screen relative overflow-hidden font-sans bg-black">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none" />

      {/* max-w-7xl matching Blog and other sections exactly so side margins are perfectly consistent */}
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="mb-14 md:mb-20 flex flex-col items-center text-center">
          <FadeUp delay={0.1}>
            <span className="text-purple-300 font-medium uppercase tracking-[0.2em] text-[11px] md:text-[12px] mb-2.5 block font-sans">
              03 · WHAT WE DO
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-[34px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-normal tracking-[-0.02em] text-white leading-[1.15] font-display">
              Four capabilities. One direction.
            </h2>
          </FadeUp>
        </div>

        {/* Responsive Grid: 4 cards in 4-column layout on large screens (exact blog card width & tall height!) or 2-column on tablets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
