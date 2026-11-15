import { m as motion, AnimatePresence } from "framer-motion"
import LiveStatus from './LiveStatus'
import { portfolioData } from '../data/portfolio'

export default function MobileMenu({ isOpen, setIsOpen, navLinks }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                    className="fixed inset-0 z-[90] bg-neutral-950 flex flex-col md:hidden overflow-hidden"
                >
                    {/* Background Accents */}
                    <div className="absolute inset-0 pointer-events-none opacity-30">
                        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 blur-[120px] rounded-full" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
                        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
                    </div>

                    {/* Menu Content */}
                    <div className="relative z-10 flex flex-col h-full px-8 pt-32 pb-12 justify-between">
                        <div className="flex flex-col gap-8">
                            <motion.span 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-[10px] font-medium uppercase tracking-[0.5em] text-white/20 mb-4"
                            >
                                Navigation
                            </motion.span>
                            
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
                                    className="group"
                                >
                                    <a
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpen(false);
                                            const targetId = link.href.replace('#', '');
                                            if (link.href === "#" || link.href === "#hero") {
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                                return;
                                            }
                                            // Trigger lazy loading
                                            window.dispatchEvent(new CustomEvent('nav-scroll-to', { detail: targetId }));
                                            setTimeout(() => {
                                                const targetEl = document.getElementById(targetId);
                                                if (targetEl) {
                                                    const navOffset = 80;
                                                    const elementPosition = targetEl.getBoundingClientRect().top;
                                                    const offsetPosition = elementPosition + window.pageYOffset - navOffset;
                                                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                                }
                                            }, 100);
                                        }}
                                        className="flex items-baseline gap-4 cursor-pointer"
                                    >
                                        <span className="text-xs font-medium text-purple-500/50 group-hover:text-purple-500 transition-colors">
                                            0{index + 1} /
                                        </span>
                                        <span className="text-5xl font-semibold uppercase tracking-tighter text-white group-hover:translate-x-3 transition-transform duration-500">
                                            {link.name}
                                        </span>
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Menu Footer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="border-t border-white/5 pt-10 flex flex-col gap-10"
                        >
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex flex-col gap-4">
                                    <span className="text-[9px] font-medium uppercase tracking-widest text-white/20">Socials</span>
                                    <div className="flex flex-col gap-2">
                                        <a href={portfolioData.profile.github} target="_blank" className="text-sm font-medium uppercase text-white/60 hover:text-white transition-colors">GitHub</a>
                                        <a href={portfolioData.profile.instagram} target="_blank" className="text-sm font-medium uppercase text-white/60 hover:text-white transition-colors">Instagram</a>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="text-[9px] font-medium uppercase tracking-widest text-white/20">Contact</span>
                                    <a href={`mailto:${portfolioData.profile.email}`} className="text-sm font-medium text-white/60 hover:text-white transition-colors break-words">
                                        {portfolioData.profile.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <LiveStatus />
                                <a
                                    href={portfolioData.profile.resume}
                                    download
                                    className="px-8 py-3 bg-white text-black text-[10px] font-bold rounded-xl uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all shadow-xl shadow-white/5"
                                >
                                    Resume
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
