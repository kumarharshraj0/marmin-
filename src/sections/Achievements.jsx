import { m as motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef, useEffect } from 'react'
import FadeUp from '../components/FadeUp'

const Counter = ({ prefix = "", value, suffix = "" }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))

    useEffect(() => {
        if (isInView) {
            const num = parseInt(value, 10) || 0
            const controls = animate(count, num, {
                duration: 2.2,
                ease: "easeOut"
            })
            return () => controls.stop()
        }
    }, [isInView, value, count])

    return (
        <span ref={ref} className="inline-flex items-baseline">
            {prefix && <span>{prefix}</span>}
            <motion.span>{rounded}</motion.span>
            {suffix && <span>{suffix}</span>}
        </span>
    )
}

export default function Achievements() {
    const stats = [
        { 
            prefix: "₹",
            value: "1", 
            suffix: " Cr+", 
            title: "cumulative ad spend managed",
            subtitle: "for your business" 
        },
        { 
            prefix: "",
            value: "10", 
            suffix: "+", 
            title: "brands across multiple",
            subtitle: "industries scaled" 
        },
        { 
            prefix: "",
            value: "5", 
            suffix: "+", 
            title: "years hands-on performance",
            subtitle: "marketing experience" 
        },
        { 
            prefix: "",
            value: "4", 
            suffix: "X+", 
            title: "average verified ROAS",
            subtitle: "generated on ad spend" 
        },
    ]

    return (
        <section className="py-20 px-6 md:px-12 bg-black border-y border-white/5 relative overflow-hidden font-sans">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 relative z-10">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center flex flex-col items-center justify-start group">
                        <FadeUp delay={index * 0.1}>
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-normal text-white text-glow mb-3 tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                                <Counter prefix={stat.prefix} value={stat.value} suffix={stat.suffix} />
                            </h3>
                        </FadeUp>
                        <FadeUp delay={0.15 + (index * 0.1)}>
                            <p className="text-white/70 text-xs sm:text-sm font-medium leading-snug">
                                {stat.title}
                            </p>
                            <p className="text-purple-300/70 text-[11px] sm:text-xs mt-1 font-mono tracking-wide">
                                {stat.subtitle}
                            </p>
                        </FadeUp>
                    </div>
                ))}
            </div>
        </section>
    )
}
