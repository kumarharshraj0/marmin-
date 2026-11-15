import { m as motion, useScroll, useTransform } from "framer-motion"
import { useRef } from 'react'
import HeroLeft from '../components/HeroLeft'
import HeroRight from '../components/HeroRight'

export default function Hero({ isLoaded }) {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const textY = useTransform(scrollYProgress, [0, 1], ["0px", "-200px"])
    const opacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

    return (
        <section ref={containerRef} className="relative min-h-screen lg:min-h-[90vh] flex flex-col items-center justify-center bg-black overflow-hidden pt-28 pb-20 md:pt-24 md:pb-36 lg:pt-20 lg:pb-10 px-5 sm:px-8 md:px-12 lg:px-32">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-grid opacity-[0.05] mask-radial" />
            </div>

            <div className="grainy-bg" />

            <motion.div 
                style={{ y: textY, opacity, scale }}
                className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14 lg:gap-16 items-center"
            >
                <HeroLeft isLoaded={isLoaded} />
                <HeroRight isLoaded={isLoaded} />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center z-20 pointer-events-none"
            >
                 <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-white/40 mb-4">Discover</span>
                 <div className="w-[1px] h-16 bg-gradient-to-b from-purple-500 to-transparent" />
            </motion.div>

        </section>
    )
}
