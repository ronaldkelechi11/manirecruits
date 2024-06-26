/* eslint-disable react/prop-types */
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

const AnimatedDiv = ({ children, ...props }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 1", "center 1"]
    })


    return (
        <motion.div
            transition={{ duration: 0.5, type: 'spring' }}
            ref={ref}
            style={{
                opacity: scrollYProgress,
                scale: scrollYProgress
            }}
            {...props}>
            {children}
        </motion.div>
    )
}

export default AnimatedDiv
