import { motion } from "framer-motion"
import { useEffect, useState } from "react"


const InfoBox = ({ infoText, status }) => {
    const [isOkay, setIsOkay] = useState(null)
    const [isVisible, setIsVisible] = useState(true)

    function makeInvisible() {
        setIsVisible(!isVisible)
    }

    useEffect(() => {
        if (status == true) {
            // Status is good
            setIsOkay(true)
        }
        else {
            // Status is bad
            setIsOkay(false)
        }
    }, [status])

    return (
        <motion.div
            initial={{
                x: 100,
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 0.8, type: 'spring', delay: 0.9
            }}
            className={
                isVisible ?
                    'fixed top-24 left-0 right-0 p-3 w-screen h-24' :
                    'hidden'
            }>
            <div className="bg-white shadow-md p-3 rounded-lg flex justify-between items-center">
                <p className={isOkay ?
                    `text-success font-kanit text-lg` :
                    `text-danger font-kanit text-lg`} >
                    {infoText}
                </p>

                <p onClick={makeInvisible}>X</p>
            </div>
        </motion.div>
    )
}

export default InfoBox
