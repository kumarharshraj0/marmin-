import { m as motion } from "framer-motion"
import { useState, useEffect, lazy, Suspense } from 'react'
import Magnetic from './Magnetic'
import { portfolioData } from '../data/portfolio'
const MobileMenu = lazy(() => import('./MobileMenu'))

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    // Scroll Locking
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Work", href: "#projects" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ]

    const handleScroll = (e, href) => {
        e.preventDefault();
        if (href === "#" || href === "#hero") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const targetId = href.replace('#', '');
        
        // Dispatch custom event to notify LazySection to mount immediately
        window.dispatchEvent(new CustomEvent('nav-scroll-to', { detail: targetId }));

        // Allow microtask/render to ensure element is placed
        setTimeout(() => {
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                const navOffset = 90;
                const elementPosition = targetEl.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 30);
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0, x: "-50%" }}
                animate={{ y: 0, opacity: 1, x: "-50%" }}
                className="fixed top-4 left-1/2 w-[calc(100%-2rem)] max-w-7xl md:top-6 z-[100] px-4 md:px-6 py-3 md:py-4 glass-card flex items-center justify-between gap-3 shadow-2xl shadow-purple-500/10"
            >
                <div className="flex-1">
                    <a href="#" className="cursor-pointer inline-flex items-center gap-3.5 group">
                        <img
                            src="/marmin_logo_transparent.png"
                            alt="Marmin Media Logo"
                            className="w-8 h-8 sm:w-9 sm:h-9 object-contain filter drop-shadow-[0_0_12px_rgba(139,92,246,0.6)] group-hover:scale-105 transition-transform shrink-0"
                        />
                        <span
                            className="text-2xl sm:text-[28px] text-white tracking-[-0.02em] leading-none select-none group-hover:text-purple-200 transition-colors"
                            style={{
                                fontFamily: "'DM Serif Display', Georgia, serif",
                                fontWeight: 400
                            }}
                        >
                            Marmin Media.
                        </span>
                    </a>
                </div>

                <div className="hidden md:flex items-center justify-center gap-7 px-8 py-2 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <Magnetic key={link.name}>
                            <a
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="text-[14px] font-medium text-white/60 hover:text-white transition-colors font-sans cursor-pointer"
                            >
                                {link.name}
                            </a>
                        </Magnetic>
                    ))}
                </div>

                <div className="flex-1 flex justify-end">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isOpen}
                        className="relative w-10 h-10 flex flex-col items-center justify-center z-[110] group shrink-0"
                    >
                        <motion.div
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-[2px] bg-white mb-1.5 transition-colors group-hover:bg-purple-400"
                        />
                        <motion.div
                            animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                            className="w-6 h-[2px] bg-white mb-1.5 transition-colors group-hover:bg-purple-400"
                        />
                        <motion.div
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-6 h-[2px] bg-white transition-colors group-hover:bg-purple-400"
                        />
                    </button>
                </div>
            </motion.nav>

            <Suspense fallback={null}>
                <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navLinks={navLinks} />
            </Suspense>
        </>
    )
}
