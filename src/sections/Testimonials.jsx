import { m as motion } from "framer-motion"
import { portfolioData } from '../data/portfolio'
import FadeUp from '../components/FadeUp'

export default function Testimonials() {
    const testimonials = portfolioData.testimonials

    return (
        <section id="testimonials" className="py-28 px-6 md:px-20 bg-black border-y border-white/5 relative overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto">
                <FadeUp delay={0.1} className="text-center">
                    <span className="text-purple-300 font-medium uppercase tracking-[0.18em] text-[11px] md:text-[12px] mb-3 block font-sans">
                        TESTIMONIALS
                    </span>
                </FadeUp>
                <FadeUp delay={0.2} className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-[34px] sm:text-[42px] md:text-[50px] font-normal tracking-[-0.02em] font-display text-white leading-[1.15]">
                        Words from our clients.
                    </h2>
                </FadeUp>

                <div className="relative flex overflow-hidden w-full group py-4 select-none">
                    {/* Gradient Masks for smooth fade at edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                    <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex gap-6 px-3">
                                {testimonials.map((t, index) => (
                                    <div
                                        key={`${i}-${index}`}
                                        className="p-8 md:p-10 flex flex-col justify-between w-[320px] sm:w-[360px] md:w-[400px] shrink-0 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.06] transition-all backdrop-blur-md shadow-xl"
                                    >
                                        <p className="text-[16px] md:text-[17px] text-white/80 leading-[1.65] font-normal whitespace-normal mb-8 font-sans">
                                            "{t.text}"
                                        </p>
                                        
                                        <div className="flex items-center gap-3.5 pt-6 border-t border-white/10">
                                            <img 
                                                src={t.avatar} 
                                                alt={t.name}
                                                className="w-11 h-11 rounded-full object-cover border border-purple-500/30" 
                                            />
                                            <div>
                                                <h4 className="font-semibold text-[15px] text-white tracking-tight leading-snug font-sans">
                                                    {t.name}
                                                </h4>
                                                <p className="text-purple-300 text-[10.5px] font-medium uppercase tracking-[0.15em] font-sans mt-0.5">
                                                    {t.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
