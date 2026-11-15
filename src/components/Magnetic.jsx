import React, { useRef, useState, memo } from 'react'
import { m as motion } from "framer-motion"

const Magnetic = memo(({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const [bounds, setBounds] = useState(null);

    const handleMouseEnter = () => {
        setBounds(ref.current.getBoundingClientRect());
    }

    const handleMouse = (e) => {
        if (!bounds) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = bounds;
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        setPosition({ x: middleX * 0.5, y: middleY * 0.5 })
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 })
        setBounds(null)
    }

    const { x, y } = position;

    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    )
})

export default Magnetic;
