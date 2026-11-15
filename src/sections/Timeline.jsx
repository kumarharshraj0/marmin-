import { m as motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from 'react'
import FadeUp from '../components/FadeUp'

const PhaseItem = ({ ev, index, scrollYProgress }) => {
    const isEven = index % 2 === 0
    // Each phase has a specific trigger threshold along the vertical progress line
    const dotThreshold = 0.15 + index * 0.23
    
    // Line arrival trigger
    const lineReached = useTransform(
        scrollYProgress, 
        [dotThreshold - 0.08, dotThreshold], 
        [0, 1]
    )

    // Dot scale & glow activates when the vertical line connects to it
    const dotScale = useTransform(lineReached, [0, 1], [0.85, 1.25])
    const dotOpacity = useTransform(lineReached, [0, 1], [0.4, 1])

    // Thread path draw animation from central spine dot to the right end edge of the card
    const threadPathLength = useTransform(
        scrollYProgress,
        [dotThreshold, dotThreshold + 0.12],
        [0, 1]
    )

    // Floating card activates when the thread reaches it
    const cardOpacity = useTransform(
        scrollYProgress,
        [dotThreshold + 0.02, dotThreshold + 0.14],
        [0.25, 1]
    )
    const cardY = useTransform(
        scrollYProgress,
        [dotThreshold + 0.02, dotThreshold + 0.14],
        [30, 0]
    )

    const floatDuration = 5 + index * 0.7

    return (
        <div className={`relative flex flex-col md:flex-row items-start md:items-center min-h-[220px] md:min-h-[280px] ${isEven ? 'md:flex-row-reverse' : ''} group`}>
            {/* Blank Spacer Column for alternating zigzag layout */}
            <div className="hidden md:block w-1/2" />

            {/* Central Glowing Dot on Spine */}
            <div className="absolute left-[19px] md:left-1/2 -translate-x-1/2 z-30 flex items-center justify-center top-6 md:top-1/2 md:-translate-y-1/2">
                {/* Active Pulsing Aura Ring */}
                <motion.div 
                    style={{ opacity: dotOpacity }}
                    className="w-7 h-7 rounded-full bg-purple-500/25 animate-ping absolute pointer-events-none" 
                />
                
                {/* Outer Core Dot on Central Spine */}
                <motion.div 
                    style={{ scale: dotScale, opacity: dotOpacity }}
                    className="w-4 h-4 rounded-full bg-[#0E0B1D] border-2 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.9)] flex items-center justify-center transition-colors duration-300"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-200" />
                </motion.div>
            </div>

            {/* Distant Floating Card: Doubled gap from central spine (md:pr-56 lg:md:pr-64 & md:pl-56 lg:md:pl-64) */}
            <motion.div 
                style={{ opacity: cardOpacity, y: cardY }}
                animate={{ 
                    y: [0, -9, 0],
                    rotate: isEven ? [-0.6, 0.6, -0.6] : [0.6, -0.6, 0.6]
                }}
                transition={{
                    repeat: Infinity,
                    duration: floatDuration,
                    ease: "easeInOut"
                }}
                className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-48 lg:md:pr-60 md:pl-0 text-left' : 'md:pl-48 lg:md:pl-60 md:pr-0 text-left'} relative z-20`}
            >
                <div className="max-w-[440px] p-6 md:p-8 rounded-[1.75rem] bg-[#0E0B1D]/90 border border-white/10 hover:border-purple-500/50 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl backdrop-blur-xl group-hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] relative overflow-visible">
                    
                    {/* The White Glowing Dot positioned right at the edge of the card where the long curved laser connects */}
                    <div className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${isEven ? '-right-1.5' : '-left-1.5'} z-40 items-center justify-center`}>
                        <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_18px_#ffffff] border-2 border-purple-400 animate-pulse" />
                    </div>

                    {/* Floating ambient glow inside card */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl pointer-events-none" />

                    {/* Top Phase Badge */}
                    <div className="flex items-center gap-2 mb-3 justify-start">
                        <span className="text-[10px] font-mono tracking-widest px-3 py-1 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-200 uppercase shadow-md">
                            PHASE {ev.step}
                        </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-white font-sans text-[20px] md:text-[23px] font-semibold tracking-tight mb-2.5 group-hover:text-purple-200 transition-colors">
                        {ev.step} — {ev.title}
                    </h3>

                    {/* Subtle dashed accent bar */}
                    <div className="w-16 h-[2px] bg-purple-500/40 rounded-full mb-3" />

                    {/* Description */}
                    <p className="text-white/70 leading-[1.65] text-[15px] sm:text-[16px] font-normal font-sans">
                        {ev.desc}
                    </p>
                </div>
            </motion.div>

            {/* Connecting Thread SVG: Extends across the doubled distance to reach the displaced card edge */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 z-10 pointer-events-none overflow-visible w-1/2">
                <svg 
                    className={`w-full h-32 overflow-visible ${isEven ? '-translate-x-full' : ''}`} 
                    viewBox="0 0 420 80" 
                    fill="none"
                >
                    {/* Extended curved guide path spanning the wide double gap */}
                    <path
                        d={isEven 
                            ? "M 420 40 C 310 40, 180 70, 20 40" 
                            : "M 0 40 C 110 40, 240 70, 400 40"
                        }
                        stroke="rgba(168, 85, 247, 0.2)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                    />

                    {/* Laser Animated Connecting Thread spanning all the way from the center dot to the card */}
                    <motion.path
                        d={isEven 
                            ? "M 420 40 C 310 40, 180 70, 20 40" 
                            : "M 0 40 C 110 40, 240 70, 400 40"
                        }
                        stroke="url(#timelineThreadGrad)"
                        strokeWidth="2.5"
                        strokeDasharray="6 6"
                        strokeLinecap="round"
                        style={{ pathLength: threadPathLength }}
                        animate={{ strokeDashoffset: isEven ? [40, 0] : [0, -40] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                        filter="url(#timelineGlow)"
                    />

                    <defs>
                        <linearGradient id="timelineThreadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#C9C2E3" />
                            <stop offset="50%" stopColor="#A855F7" />
                            <stop offset="100%" stopColor="#818CF8" />
                        </linearGradient>
                        <filter id="timelineGlow" x="-30%" y="-30%" width="160%" height="160%">
                            <feGaussianBlur stdDeviation="2.5" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>

            {/* Mobile Curved Connecting Thread */}
            <div className="block md:hidden absolute left-[19px] top-6 z-10 pointer-events-none w-16">
                <svg className="w-16 h-12 overflow-visible" viewBox="0 0 60 30" fill="none">
                    <motion.path
                        d="M 0 6 C 20 6, 35 20, 60 20"
                        stroke="#A855F7"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                        style={{ pathLength: threadPathLength }}
                        animate={{ strokeDashoffset: [0, -30] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    />
                </svg>
            </div>
        </div>
    )
}

export default function Timeline() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 70%", "end 50%"]
    })

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])
    const smoothScaleY = useSpring(scaleY, { stiffness: 90, damping: 25 })

    const events = [
        { 
            step: "01", 
            title: "UNDERSTAND", 
            desc: "Understand the business, the audience, the market and the opportunity."
        },
        { 
            step: "02", 
            title: "CREATE", 
            desc: "Develop the positioning, ideas, narratives and creative direction."
        },
        { 
            step: "03", 
            title: "DISTRIBUTE", 
            desc: "Put the right message in the right places, through the right channels."
        },
        { 
            step: "04", 
            title: "OPTIMISE", 
            desc: "Measure what matters, learn from the market and improve the outcome."
        }
    ]

    return (
        <section id="approach" className="py-28 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto overflow-hidden font-sans relative select-none">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none" />

            <FadeUp delay={0.1} className="text-center">
                <span className="text-purple-300 font-medium uppercase tracking-[0.2em] text-[11px] md:text-[12px] mb-3 inline-block font-sans">
                    05 · OUR APPROACH
                </span>
            </FadeUp>
            <FadeUp delay={0.2} className="text-center mb-24 max-w-3xl mx-auto">
                <h2 className="text-[34px] sm:text-[42px] md:text-[50px] lg:text-[58px] font-normal tracking-[-0.02em] font-display text-white leading-[1.15]">
                    Think before you execute. Execute with intent.
                </h2>
            </FadeUp>

            <div ref={containerRef} className="relative pb-16">
                {/* Central Vertical Spine Line with Animated Glow */}
                <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/10 origin-top">
                    {/* Active Drawn Line on Scroll */}
                    <motion.div 
                        style={{ scaleY: smoothScaleY }} 
                        className="w-full h-full bg-gradient-to-b from-purple-400 via-purple-500 to-indigo-500 origin-top shadow-[0_0_25px_rgba(168,85,247,0.9)]" 
                    />
                </div>

                {/* Stack of phases with linked scroll progression */}
                <div className="space-y-16 md:space-y-24 relative z-10">
                    {events.map((ev, index) => (
                        <PhaseItem 
                            key={ev.step} 
                            ev={ev} 
                            index={index} 
                            scrollYProgress={scrollYProgress} 
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Editorial Quote */}
            <FadeUp delay={0.4} className="text-center mt-16 pt-8 border-t border-white/5">
                <p className="text-white/80 text-[18px] md:text-[22px] font-normal font-display max-w-2xl mx-auto italic leading-[1.5]">
                    "Strategy without execution is an idea. Execution without strategy is an expense."
                </p>
            </FadeUp>
        </section>
    )
}
