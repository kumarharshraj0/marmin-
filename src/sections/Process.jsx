import { m as motion } from "framer-motion"
import FadeUp from '../components/FadeUp'

export default function Process() {
    const steps = [
        { id: "01", title: "UNDERSTAND", desc: "Understand the business, the audience, the market and the opportunity." },
        { id: "02", title: "CREATE", desc: "Develop the positioning, ideas, narratives and creative direction." },
        { id: "03", title: "DISTRIBUTE", desc: "Put the right message in the right places, through the right channels." },
        { id: "04", title: "OPTIMISE", desc: "Measure what matters, learn from the market and improve the outcome." }
    ]

    return (
        <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
            <FadeUp delay={0.1} className="text-center">
                <p className="text-purple-400 font-medium uppercase tracking-[0.4em] text-[10px] mb-4">05 · Our approach</p>
            </FadeUp>
            <FadeUp delay={0.2} className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight font-outfit text-white">
                    Think Before You Execute. Execute With Intent.
                </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                {steps.map((step, index) => (
                    <FadeUp key={index} delay={0.3 + index * 0.1}>
                        <div className="glass-card p-8 rounded-3xl h-full border border-white/5 hover:border-purple-500/30 transition-colors group">
                            <div className="text-6xl font-serif text-white/5 mb-6 group-hover:text-purple-500/20 transition-colors">{step.id}</div>
                            <h3 className="text-xl font-medium mb-4">{step.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    </FadeUp>
                ))}
            </div>

            <FadeUp delay={0.4} className="text-center mt-16 pt-8 border-t border-white/5">
                <p className="text-white/60 text-sm md:text-base italic font-serif max-w-xl mx-auto">
                    "Strategy without execution is an idea. Execution without strategy is an expense."
                </p>
            </FadeUp>
        </section>
    )
}
