import { m as motion } from "framer-motion"
import FadeUp from '../components/FadeUp'

export default function TechStack() {
    return (
        <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
            <FadeUp delay={0.1} className="text-center">
                <p className="text-purple-400 font-medium uppercase tracking-[0.4em] text-[10px] mb-4">Ecosystem</p>
            </FadeUp>
            <FadeUp delay={0.2} className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-normal uppercase tracking-tighter">My Tech Stack</h2>
            </FadeUp>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {/* Frontend Card */}
                <FadeUp delay={0.3} className="md:col-span-2 glass-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group border border-white/5 hover:border-purple-500/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Decorative Background Element */}
                    <div className="absolute right-0 top-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-blue-500/20 transition-colors duration-700" />
                    
                    <div className="relative z-10 flex justify-between items-start">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                            <span className="text-2xl">⚛️</span>
                        </div>
                        <div className="flex gap-2">
                            {["React", "Tailwind", "Framer"].map(tech => (
                                <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">{tech}</span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-medium mb-3 tracking-tight">Frontend Engineering</h3>
                        <p className="text-white/50 max-w-md leading-relaxed text-sm md:text-base">Building highly interactive, accessible, and performant user interfaces with modern React paradigms.</p>
                    </div>
                </FadeUp>
                
                {/* Backend Card */}
                <FadeUp delay={0.4} className="md:col-span-1 glass-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group border border-white/5 hover:border-green-500/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-bl from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute right-0 top-0 w-48 h-48 bg-green-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/4 group-hover:bg-green-500/20 transition-colors duration-700" />
                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md mb-6">
                            <span className="text-2xl">⚡</span>
                        </div>
                    </div>
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-medium mb-3 tracking-tight">Backend & API</h3>
                        <p className="text-white/50 leading-relaxed text-sm">Scalable Node.js & Express architectures.</p>
                    </div>
                </FadeUp>
                
                {/* Database Card */}
                <FadeUp delay={0.5} className="md:col-span-1 glass-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group border border-white/5 hover:border-emerald-500/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute left-0 bottom-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4 group-hover:bg-emerald-500/20 transition-colors duration-700" />
                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md mb-6">
                            <span className="text-2xl">🗄️</span>
                        </div>
                    </div>
                    
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-medium mb-3 tracking-tight">Database</h3>
                        <p className="text-white/50 leading-relaxed text-sm">MongoDB NoSQL structures & Mongoose ODM.</p>
                    </div>
                </FadeUp>
                
                {/* 3D & Creative Card */}
                <FadeUp delay={0.6} className="md:col-span-2 glass-card rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group border border-white/5 hover:border-pink-500/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute right-0 bottom-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] translate-y-1/2 translate-x-1/4 group-hover:bg-pink-500/20 transition-colors duration-700" />
                    
                    <div className="relative z-10 flex justify-between items-start">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                            <span className="text-2xl">🧊</span>
                        </div>
                        <div className="flex gap-2">
                            {["Three.js", "WebGL", "GSAP"].map(tech => (
                                <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">{tech}</span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-medium mb-3 tracking-tight">Creative & 3D</h3>
                        <p className="text-white/50 max-w-md leading-relaxed text-sm md:text-base">Pushing the boundaries of the browser with immersive WebGL graphics, custom shaders, and complex GSAP timelines.</p>
                    </div>
                </FadeUp>
            </div>
        </section>
    )
}
