import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

const AnimatedDiv = ({ ...props }) => {
    const ref = useRef < HTMLElement > (null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })


    return (
        <motion.div
            ref={ref}
            style={{
                opacity: scrollYProgress,
                scale: scrollYProgress
            }}
            {...props}>

        </motion.div>
    )
}

export default AnimatedDiv
