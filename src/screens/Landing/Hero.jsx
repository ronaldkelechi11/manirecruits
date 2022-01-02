import { TypeAnimation } from "react-type-animation";
import { ScrollToTopText } from "../../utils/animations/ScrollToTopText";

const Hero = () => {
    return (
        <div className="bg-hero bg-center bg-cover h-screen">
            <div className="flex flex-col gap-3 bg-[rgba(0,0,0,0.7)] justify-center items-center h-full w-full">

                <ScrollToTopText className="md:text-7xl text-5xl text-center text-white font-kanit font-extabold">
                    Explore Diverse Opportunities
                </ScrollToTopText>

                <TypeAnimation
                    sequence={[
                        "Let us help you take the next step", 1000,
                        "Explore Diverse Opportunities", 1000,
                        "Start Your Journey Today", 1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className='text-2xl text-center text-white font-kanit' />


                <div className="bg-primary py-3 px-10 text-nowrap text-white rounded-lg font-kanit border-2 border-white">Learn More</div>

            </div>
        </div >
    )
}

export default Hero
