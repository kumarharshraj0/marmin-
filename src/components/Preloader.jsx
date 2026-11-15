import { m as motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from 'react'

export default function Preloader({ onComplete }) {
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 8) + 3;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    setLoading(false);
                    if (onComplete) onComplete();
                }, 400);
            }
            setProgress(currentProgress);
        }, 60);

        return () => clearInterval(interval);
    }, [onComplete])

    // Circumference for r=54 circle is ~339.29
    const radius = 54
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (progress / 100) * circumference

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[10000] bg-[#0E0B1D] flex flex-col items-center justify-center select-none overflow-hidden font-sans"
                >
                    {/* Background Ambient Radial Glow */}
                    <div className="absolute w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

                    <div className="relative flex flex-col items-center z-10">
                        
                        {/* Circular Progress Ring surrounding the Logo */}
                        <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
                            {/* SVG Circular Progress Track and Loader */}
                            <svg className="w-full h-full -rotate-90 overflow-visible" viewBox="0 0 120 120">
                                <defs>
                                    <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#A855F7" />
                                        <stop offset="50%" stopColor="#818CF8" />
                                        <stop offset="100%" stopColor="#C084FC" />
                                    </linearGradient>
                                    <filter id="glowCircle" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="3" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>

                                {/* Base Faint Track */}
                                <circle
                                    cx="60"
                                    cy="60"
                                    r={radius}
                                    stroke="rgba(255, 255, 255, 0.08)"
                                    strokeWidth="3"
                                    fill="none"
                                />

                                {/* Animated Progress Arc */}
                                <motion.circle
                                    cx="60"
                                    cy="60"
                                    r={radius}
                                    stroke="url(#circleGrad)"
                                    strokeWidth="3.5"
                                    strokeLinecap="round"
                                    fill="none"
                                    filter="url(#glowCircle)"
                                    style={{
                                        strokeDasharray: circumference,
                                        strokeDashoffset
                                    }}
                                />
                            </svg>

                            {/* Centered Logo Inside the Circular Loader */}
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                                <img 
                                    src="/marmin_logo_transparent.png" 
                                    alt="Marmin Media Logo" 
                                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]"
                                />
                            </div>
                        </div>

                        {/* Brand Title: Compact spacing right below the circular loader */}
                        <div className="text-center mt-5">
                            <h1 className="text-2xl sm:text-3xl font-normal tracking-[-0.015em] text-white font-display mb-1.5">
                                Marmin Media.
                            </h1>
                            <div className="flex items-center justify-center gap-3 text-[11px] font-mono tracking-widest text-purple-300">
                                <span className="uppercase text-white/50">LOADING</span>
                                <span className="w-1 h-1 rounded-full bg-purple-400" />
                                <span className="font-semibold text-white/90">{progress}%</span>
                            </div>
                        </div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
