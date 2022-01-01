/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

export const ScrollToTopText = ({ children, ...props }) => {
    return (
        <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 1, type: 'spring'
            }}
            {...props}
        >

            {children}
        </motion.p >
    )
}
