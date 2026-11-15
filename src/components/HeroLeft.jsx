import Reveal from './Reveal'
import Magnetic from './Magnetic'

export default function HeroLeft({ isLoaded }) {
    return (
        <div className="lg:col-span-7 order-1 text-left flex flex-col items-start pt-2 md:pt-10 w-full relative z-20">
            {/* Supporting line tag: Inter 500 Medium 11-12px uppercase slight letter spacing */}
            <Reveal isLoaded={isLoaded} delay={0.1}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full border border-purple-500/30 bg-purple-500/10 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(90,59,140,0.8)]" />
                    <span className="text-[10px] sm:text-[11px] md:text-[12px] text-purple-300 font-medium tracking-[0.14em] uppercase font-sans">
                        CREATIVE / PERFORMANCE / DISTRIBUTION / STRATEGY
                    </span>
                </div>
            </Reveal>

            {/* Main Headline: Perfectly balanced responsive sizing */}
            <div className="mb-5 md:mb-6 w-full max-w-2xl">
                <Reveal isLoaded={isLoaded} delay={0.2} y={30}>
                    <h1 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[56px] xl:text-[62px] font-normal leading-[1.12] tracking-[-0.015em] text-white font-display">
                        The world doesn't need more advertising.
                        <span className="block mt-1.5 md:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-200 to-white">
                            It needs better marketing.
                        </span>
                    </h1>
                </Reveal>
            </div>

            {/* Sub-headline & Description */}
            <Reveal isLoaded={isLoaded} delay={0.4} y={20}>
                <h3 className="text-[17px] sm:text-[19px] md:text-[22px] font-semibold text-white/95 mb-2.5 font-sans tracking-tight leading-snug">
                    We make brands impossible to ignore.
                </h3>
            </Reveal>

            <Reveal isLoaded={isLoaded} delay={0.5} y={20}>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/70 max-w-lg mb-2.5 leading-[1.6] font-normal font-sans">
                    We bring together creative, performance, distribution and strategic thinking to shape how businesses are perceived, discovered and chosen.
                </p>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] text-purple-200/90 font-medium italic mb-6 md:mb-8 leading-[1.5] font-sans">
                    Marketing beyond the screen. Thinking beyond the obvious.
                </p>
            </Reveal>

            <Reveal isLoaded={isLoaded} delay={0.6} y={15}>
                <div className="flex flex-row items-center gap-6 w-full sm:w-auto">
                    {/* Circular Badge */}
                    <div className="hidden sm:block">
                        <Magnetic>
                            <div className="relative w-28 h-28 flex items-center justify-center bg-[#fdfaf6] rounded-full shrink-0">
                                <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                                    <svg className="w-full h-full text-black/80" viewBox="0 0 100 100">
                                        <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                        <text fontSize="10.5" fontWeight="600" letterSpacing="2.5" className="uppercase fill-current">
                                            <textPath href="#circlePath" startOffset="0%">
                                                CREATIVE • STRATEGY • GROWTH •
                                            </textPath>
                                        </text>
                                    </svg>
                                </div>
                                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center z-10 text-white shadow-lg shadow-purple-500/30">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </Magnetic>
                    </div>

                    {/* Explore what we do Button */}
                    <Magnetic>
                        <a href="#services" className="w-full sm:w-auto justify-center px-7 py-3.5 md:px-8 md:py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex items-center gap-4 text-white text-[14px] md:text-[15px] font-semibold tracking-wide font-sans group shadow-lg">
                            Explore what we do
                            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-purple-500 flex items-center justify-center transition-transform group-hover:rotate-45 shrink-0">
                                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </a>
                    </Magnetic>
                </div>
            </Reveal>
        </div>
    )
}
