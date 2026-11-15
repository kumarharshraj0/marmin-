import React, { useRef, memo } from 'react'
import { m as motion, useMotionValue, useSpring } from "framer-motion"

const Tilt = memo(({ children, className = "" }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const [bounds, setBounds] = React.useState(null);

    const handleMouseEnter = () => {
        setBounds(ref.current.getBoundingClientRect());
    }

    const handleMouse = (e) => {
        if (!ref.current || !bounds) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = bounds;

        const mouseX = clientX - left;
        const mouseY = clientY - top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(yPct * 20);
        y.set(xPct * -20);
    }

    const reset = () => {
        x.set(0);
        y.set(0);
        setBounds(null);
    }

    return (
        <motion.div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ 
                rotateX: mouseXSpring, 
                rotateY: mouseYSpring,
                perspective: 1000,
                transformStyle: "preserve-3d"
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
})

export default Tilt;
