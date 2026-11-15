import { m as motion } from "framer-motion"
import { useLoading } from '../context/LoadingContext'

export default function FadeUp({ children, delay = 0, y = 30, duration = 1, className = "" }) {
    const { isLoaded } = useLoading()

    return (
        <div className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y, scale: 0.95, filter: "blur(10px)" }}
                animate={isLoaded ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : { opacity: 0, y, scale: 0.95, filter: "blur(10px)" }}
                whileInView={isLoaded ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    duration,
                    delay: isLoaded ? delay : 0,
                    ease: [0.16, 1, 0.3, 1] // Custom premium spring-like easing
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}
