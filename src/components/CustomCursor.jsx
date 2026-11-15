import { useEffect, useState } from 'react'
import { m as motion } from "framer-motion"

export default function CustomCursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [cursorType, setCursorType] = useState("default")

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }

        const handleHover = (e) => {
            setIsHovering(true)
            const target = e.target.closest('button, a, .cursor-pointer, [layoutId^="project-"]')
            if (target && target.getAttribute('layoutId')?.startsWith('project-')) {
                setCursorType("project")
            } else {
                setCursorType("pointer")
            }
        }

        const handleUnhover = () => {
            setIsHovering(false)
            setCursorType("default")
        }

        window.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseover', handleHover)
        document.addEventListener('mouseout', handleUnhover)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseover', handleHover)
            document.removeEventListener('mouseout', handleUnhover)
        }
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-[99999]">
            <motion.div
                className="absolute top-0 left-0 w-4 h-4 bg-white/40 rounded-full mix-blend-difference items-center justify-center hidden md:flex"
                animate={{
                    x: mousePos.x - 8,
                    y: mousePos.y - 8,
                    scale: cursorType === "project" ? 8 : (isHovering ? 4 : 1),
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
            >
                {cursorType === "project" && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[2px] font-medium text-black uppercase tracking-tighter"
                    >
                        View
                    </motion.span>
                )}
            </motion.div>

            <motion.div
                className="absolute top-0 left-0 w-12 h-12 border border-white/20 rounded-full"
                animate={{
                    x: mousePos.x - 24,
                    y: mousePos.y - 24,
                    scale: isHovering ? 1.5 : 1,
                    opacity: cursorType === "project" ? 0 : 1
                }}
                transition={{ type: 'spring', damping: 30, stiffness: 150, mass: 1 }}
            />
        </div>
    )
}
