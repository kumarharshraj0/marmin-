import { m as motion } from "framer-motion"
import { memo } from 'react'

const partnersRow1 = [
    { name: "FitFuel Nutrition", role: "D2C Health Brand · 3.8X ROAS", icon: "🥗" },
    { name: "NEXA Tech Labs", role: "B2B SaaS Growth · $450k ARR", icon: "⚡" },
    { name: "Aura Living", role: "D2C Home Décor · 1.8M Reach", icon: "🛋️" },
    { name: "Kavya Sharma", role: "Finance Creator · 850K Subs", icon: "🎙️" },
    { name: "UrbanEdge Apparel", role: "Fashion E-Com · 4.2X Blended", icon: "🧥" },
    { name: "Apex Wealth Advisory", role: "High-Ticket Inbound Leads", icon: "📈" },
    { name: "MindEase Clinic", role: "Wellness & Telehealth · 5X Leads", icon: "🧠" },
    { name: "CodeSprint Academy", role: "EdTech Cohort · ₹85L Launch", icon: "💡" },
]

const partnersRow2 = [
    { name: "UrbanEdge Apparel", role: "Fashion E-Com · 4.2X Blended", icon: "🧥" },
    { name: "Kavya Sharma", role: "Finance Creator · 850K Subs", icon: "🎙️" },
    { name: "FitFuel Nutrition", role: "D2C Health Brand · 3.8X ROAS", icon: "🥗" },
    { name: "NEXA Tech Labs", role: "B2B SaaS Growth · $450k ARR", icon: "⚡" },
    { name: "CodeSprint Academy", role: "EdTech Cohort · ₹85L Launch", icon: "💡" },
    { name: "Apex Wealth Advisory", role: "High-Ticket Inbound Leads", icon: "📈" },
    { name: "Aura Living", role: "D2C Home Décor · 1.8M Reach", icon: "🛋️" },
    { name: "MindEase Clinic", role: "Wellness & Telehealth · 5X Leads", icon: "🧠" },
]

const PartnerCard = ({ partner }) => (
    <div className="inline-flex items-center gap-3.5 px-4 sm:px-5 py-2.5 rounded-2xl bg-[#0E0B1D]/80 border border-white/10 hover:border-purple-500/50 hover:bg-purple-950/20 transition-all duration-300 backdrop-blur-md shadow-lg group mx-2.5 cursor-pointer shrink-0">
        <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
            {partner.icon}
        </div>
        <div className="text-left font-sans">
            <h4 className="text-[13px] font-semibold text-white/95 group-hover:text-purple-200 transition-colors leading-tight">
                {partner.name}
            </h4>
            <p className="text-[10px] text-purple-300/80 tracking-wider uppercase font-mono font-medium mt-0.5">
                {partner.role}
            </p>
        </div>
    </div>
)

const SkillsMarquee = memo(() => {
    return (
        <section className="py-16 bg-black border-y border-white/5 overflow-hidden relative font-sans">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[220px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

            {/* Title: DM Serif Display H2 & Inter Subhead */}
            <div className="text-center mb-10 px-6 relative z-10">
                <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-normal tracking-[-0.015em] text-white font-display leading-tight mb-2">
                    Trusted by high-output
                </h2>
                <p className="text-[20px] sm:text-[24px] md:text-[28px] font-normal text-purple-300 font-sans tracking-tight">
                    Creators & Founders
                </p>
            </div>

            {/* Dual Direction Tickers */}
            <div className="flex flex-col gap-4 relative z-10">
                {/* Row 1: Leftward Scroll */}
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 26,
                            ease: "linear"
                        }}
                        className="flex shrink-0 items-center"
                    >
                        {partnersRow1.concat(partnersRow1).map((partner, index) => (
                            <PartnerCard key={`row1-${index}`} partner={partner} />
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Rightward Scroll */}
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 28,
                            ease: "linear"
                        }}
                        className="flex shrink-0 items-center"
                    >
                        {partnersRow2.concat(partnersRow2).map((partner, index) => (
                            <PartnerCard key={`row2-${index}`} partner={partner} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
})

export default SkillsMarquee
