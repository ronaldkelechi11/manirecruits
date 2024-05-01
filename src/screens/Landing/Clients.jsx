import AnimatedDiv from "../../utils/animations/AnimatedDiv"
import Marquee from 'react-fast-marquee'

const Clients = () => {


    return (
        <AnimatedDiv className='bg-white flex flex-row gap-5 p-3 box-border overflow-hidden'>
            <Marquee speed={100}>
                <div className="h-10 min-w-20 mx-5 bg-black"></div>
                <div className="h-10 min-w-20 mx-5 bg-black"></div>
                <div className="h-10 min-w-20 mx-5 bg-black"></div>
                <div className="h-10 min-w-20 mx-5 bg-black"></div>
                <div className="h-10 min-w-20 mx-5 bg-black"></div>
                <div className="h-10 min-w-20 mx-5 bg-black"></div>
                <div className="h-10 min-w-20 mx-5 bg-black"></div>
                <div className="h-10 min-w-20 mx-5 bg-red-500"></div>
                <div className="h-10 min-w-20 mx-5 bg-black"></div>
                <div className="h-10 min-w-20 mx-5 bg-black"></div>
                <div className="h-10 min-w-20 mx-5 bg-green-500"></div>
                <div className="h-10 min-w-20 mx-5 bg-black"></div>
                <div className="h-10 min-w-20 mx-5 bg-black"></div>
            </Marquee>
        </AnimatedDiv>
    )
}

export default Clients
