import AnimatedDiv from "../../utils/animations/AnimatedDiv"

const Clients = () => {

    return (
        <AnimatedDiv className='bg-white p-3 box-border overflow-hidden'>
            <div className="flex flex-row items-center animate-scroll">
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
            </div>
        </AnimatedDiv>
    )
}

export default Clients
