import { m as motion } from "framer-motion"
import FadeUp from '../components/FadeUp'

export default function Thinking() {
    return (
        <section id="thinking" className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden font-sans text-left">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                {/* Visual Composition Image: First on mobile (order-1), right column on desktop (lg:order-2) */}
                <div className="lg:col-span-5 relative order-1 lg:order-2">
                    <FadeUp delay={0.2}>
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 p-2 bg-gradient-to-b from-white/[0.08] to-transparent shadow-2xl group">
                            {/* Main Strategic Image */}
                            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] rounded-[1.6rem] overflow-hidden bg-[#151226]">
                                <img 
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                                    alt="Strategic Marketing Analysis" 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B1D] via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-0 bg-purple-900/15 mix-blend-multiply" />

                                {/* Floating Strategic Metrics Tag Badge */}
                                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                                    <span className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono tracking-widest uppercase text-purple-200">
                                        STRATEGY & AUDIT
                                    </span>
                                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                                </div>

                                {/* Floating Insight Card Overlay at bottom */}
                                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 shadow-2xl z-10">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <span className="text-purple-400 text-sm">💡</span>
                                        <span className="text-[11px] font-mono tracking-wider text-purple-300 uppercase">
                                            Strategic Diagnostic
                                        </span>
                                    </div>
                                    <p className="text-[13px] text-white/90 font-sans leading-snug">
                                        Auditing the root problem before scaling capital on distribution.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>

                {/* Text Content: Second on mobile (order-2), left column on desktop (lg:order-1) */}
                <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
                    {/* Section Eyebrow Label */}
                    <FadeUp delay={0.1}>
                        <span className="text-purple-300 font-medium uppercase tracking-[0.2em] text-[11px] md:text-[12px] mb-4 inline-block font-sans">
                            04 · OUR THINKING
                        </span>
                    </FadeUp>

                    {/* Main Title: H2 DM Serif Display 400 Regular */}
                    <FadeUp delay={0.2}>
                        <h2 className="text-[34px] sm:text-[42px] md:text-[50px] lg:text-[58px] font-normal tracking-[-0.02em] text-white leading-[1.15] mb-6 font-display">
                            The problem is rarely just the ad.
                        </h2>
                    </FadeUp>

                    {/* Subheading: Inter 600 Semibold */}
                    <FadeUp delay={0.25}>
                        <h3 className="text-[19px] sm:text-[22px] md:text-[24px] text-white/95 font-semibold mb-5 leading-snug font-sans">
                            A business struggling to grow doesn't always need more advertising.
                        </h3>
                    </FadeUp>

                    {/* Paragraphs: Inter 400 Regular */}
                    <FadeUp delay={0.3}>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] text-white/70 leading-[1.65] mb-4 font-normal font-sans">
                            It might need a better product narrative. A stronger position in the market. A different audience. A better customer experience. A new distribution channel.
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.35}>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] text-white/70 leading-[1.65] mb-4 font-normal font-sans">
                            Increasing the advertising budget without understanding the actual problem only makes the wrong approach more expensive.
                        </p>
                    </FadeUp>

                    <FadeUp delay={0.4}>
                        <p className="text-[15px] sm:text-[16px] md:text-[17px] text-white/70 leading-[1.65] mb-8 font-normal font-sans">
                            That's why we look at the entire picture before deciding what needs to happen next.
                        </p>
                    </FadeUp>

                    {/* Concluding Highlight Box */}
                    <FadeUp delay={0.45}>
                        <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-purple-500/30 backdrop-blur-md shadow-xl">
                            <p className="text-[17px] sm:text-[19px] md:text-[21px] font-semibold text-white leading-[1.45] font-sans">
                                We don't start with what we can sell you. <span className="text-purple-300">We start with what your business actually needs.</span>
                            </p>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </section>
    )
}
