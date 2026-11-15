import { portfolioData } from '../data/portfolio'
import FadeUp from '../components/FadeUp'

export default function FAQ() {
    const faqs = portfolioData.faq

    return (
        <section id="faq" className="py-24 px-6 md:px-20 max-w-4xl mx-auto relative z-10 font-sans">
            <div className="mb-16 z-0">
                <FadeUp delay={0.1} className="text-center">
                    <span className="text-purple-300 font-medium uppercase tracking-[0.18em] text-[11px] md:text-[12px] mb-3 block font-sans">
                        QUESTIONS & ANSWERS
                    </span>
                </FadeUp>
                <FadeUp delay={0.2} className="text-center">
                    <h2 className="text-[34px] sm:text-[42px] md:text-[50px] font-normal tracking-[-0.02em] font-display text-white leading-[1.15]">
                        Frequently asked questions.
                    </h2>
                </FadeUp>
            </div>

            <div className="relative z-10 pb-[20vh]">
                {faqs.map((faq, index) => (
                    <div 
                        key={index} 
                        className="sticky w-full mb-6"
                        style={{ top: `calc(12vh + ${index * 20}px)` }}
                    >
                        <div className="glass-card bg-[#0E0B1D]/95 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden group w-full hover:border-purple-500/40 transition-colors">
                            <details className="w-full">
                                <summary className="p-7 md:p-9 min-h-[90px] md:min-h-[105px] cursor-pointer list-none flex justify-between items-center outline-none">
                                    <span className="text-[17px] md:text-[20px] font-semibold text-white/95 pr-4 leading-snug font-sans tracking-tight">
                                        {faq.q}
                                    </span>
                                    <span className="text-purple-400 group-open:rotate-45 transition-transform text-3xl font-light shrink-0">
                                        +
                                    </span>
                                </summary>
                                <div className="px-7 md:px-9 pb-7 md:pb-9 pt-1 text-white/70 leading-[1.65] font-normal text-[15px] md:text-[16px] font-sans">
                                    {faq.a}
                                </div>
                            </details>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
