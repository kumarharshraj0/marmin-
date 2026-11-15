import { m as motion } from "framer-motion"

const Reveal = ({ children, delay = 0, duration = 1, x = 0, y = 30, isLoaded }) => {
    return (
        <div className="relative overflow-hidden w-full">
            <motion.div
                initial={{ opacity: 0, x, y, scale: 0.95, filter: "blur(10px)" }}
                animate={isLoaded ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" } : {}}
                transition={{ 
                    duration, 
                    delay, 
                    ease: [0.16, 1, 0.3, 1] 
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default Reveal;
