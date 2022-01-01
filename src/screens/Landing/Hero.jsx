import { motion } from "framer-motion"
import { ScrollToTopText } from "../../utils/animations/ScrollToTopText";

const Hero = () => {
    return (
        <div className="bg-white h-screen flex justify-center items-center">
            <div className="flex flex-col gap-3">

                <ScrollToTopText className="md:text-7xl text-5xl text-center text-primary font-kanit font-extrabold">
                    Lorem ipsum dolor sit amet.
                </ScrollToTopText>

                <p className='text-2xl text-center text-primary font-kanit'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sunt?
                </p>


            </div>
        </div >
    )
}

export default Hero
