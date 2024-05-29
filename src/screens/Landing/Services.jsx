import AnimatedDiv from "../../utils/animations/AnimatedDiv"


const Services = () => {
    return (
        <AnimatedDiv id="services" className="w-screen flex flex-col gap-3 p-5 mt-5">
            <h1 className="text-5xl md:text-5xl text-center text-primary font-kanit font-extrabold uppercase">Our creative Services</h1>

            <div className="h-full w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8 justify-items-center items-center mt-5">

                <div className="rounded-lg w-full min-h-[30vh] md:min-h-[50vh] bg-gray-200 md:hover:scale-105 transition p-5 md:p-10 flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className="text-xl md:text-2xl text-gray-900 font-poppins">Recruitment</p>
                        <p className="text-xl md:text-2xl text-gray-500 font-poppins font-extrabold group-hover:bg-gray-900">Services</p>
                    </div>

                    <p className="font-poppins text-slate-900">Expertly matching top talent with ideal job openings.</p>
                </div>


                <div className="rounded-lg w-full min-h-[30vh] md:min-h-[50vh] bg-gray-200 md:hover:scale-105 transition p-5 md:p-10 flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className="text-xl md:text-2xl text-gray-900 font-poppins">Training and </p>
                        <p className="text-xl md:text-2xl text-gray-500 font-poppins font-extrabold group-hover:bg-gray-900">Development</p>
                    </div>

                    <p className="font-poppins text-slate-900">Empowering employees with skills enhancement and knowledge growth.</p>
                </div>


                <div className="rounded-lg w-full min-h-[30vh] md:min-h-[50vh] bg-gray-200 md:hover:scale-105 transition p-5 md:p-10 flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className="text-xl md:text-2xl text-gray-900 font-poppins">Staffing</p>
                        <p className="text-xl md:text-2xl text-gray-500 font-poppins font-extrabold group-hover:bg-gray-900">
                            Solutions
                        </p>
                    </div>

                    <p className="font-poppins text-slate-900">Providing temporary, contract, or permanent staffing support.</p>
                </div>


                <div className="rounded-lg w-full min-h-[30vh] md:min-h-[50vh] bg-gray-200 md:hover:scale-105 transition p-5 md:p-10 flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className="text-xl md:text-2xl text-gray-900 font-poppins">Leadership</p>
                        <p className="text-xl md:text-2xl text-gray-500 font-poppins font-extrabold group-hover:bg-gray-900">Coaching</p>
                    </div>

                    <p className="font-poppins text-slate-900">Guiding executives and managers to achieve their full potential.</p>
                </div>


                <div className="rounded-lg w-full min-h-[30vh] md:min-h-[50vh] bg-gray-200 md:hover:scale-105 transition p-5 md:p-10 flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className="text-xl md:text-2xl text-gray-900 font-poppins">Talent</p>
                        <p className="text-xl md:text-2xl text-gray-500 font-poppins font-extrabold group-hover:bg-gray-900">Management</p>
                    </div>

                    <p className="font-poppins text-slate-900">Identifying, developing, and retaining top performers.</p>
                </div>

                <div className="rounded-lg w-full min-h-[30vh] md:min-h-[50vh] bg-gray-200 md:hover:scale-105 transition p-5 md:p-10 flex flex-col justify-between">
                    <div className="flex flex-col">
                        <p className="text-xl md:text-2xl text-gray-900 font-poppins">HR</p>
                        <p className="text-xl md:text-2xl text-gray-500 font-poppins font-extrabold group-hover:bg-gray-900">Consulting</p>
                    </div>

                    <p className="font-poppins text-slate-900">Offering expert advice on human resources management and strategy.</p>
                </div>
            </div>

            <div className="border border-gray-200 border-x-0 border-b-0 text-center mt-5">
                <p className="font-kanit text-sm">
                    These services aim to support businesses in finding, developing, and retaining the best talent,<br /> while also improving overall HR functions and leadership effectiveness.
                </p>
            </div>
        </AnimatedDiv>
    )
}

export default Services
