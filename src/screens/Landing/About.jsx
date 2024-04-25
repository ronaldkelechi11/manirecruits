

const About = () => {
    return (
        <div id='about' className="w-screen flex flex-col gap-10 justify-evenly p-5">

            <div className="w-full flex flex-col items-center justify-center gap-5">
                <div className="w-3 h-20 bg-primary"></div>

                <h1 className="text-4xl text-primary font-kanit font-extrabold uppercase">About Us</h1>

                <div className="flex flex-row">
                    <p className="text-center font-poppins text-sm text-black md:text-xl md:w-[50%]">
                        Mani Recruits & Training (MRT) was founded to provide service for our clients, from the office to the home. Our separate divisions of Executive/ Domestic Recruitment, Trainings and Consultancy Services, are all channeled towards client’s satisfaction/ surpassing of expectations and employee job satisfaction.
                    </p>

                    <div className="w-[50%] md:flex hidden bg-hero bg-center bg-contain bg-no-repeat grayscale"></div>
                </div>
            </div>



            <div className="w-full flex flex-col items-center justify-center gap-3">
                <div className="w-3 h-20 bg-primary"></div>

                <h1 className="text-4xl text-primary font-kanit font-extrabold uppercase">Our Vision</h1>
                <div className="flex flex-row">
                    <div className="w-[50%] md:flex hidden bg-hero bg-center bg-contain bg-no-repea t grayscale"></div>

                    <p className="text-center font-poppins text-sm text-black md:text-xl md:w-[50%]">
                        At Mani Recruits and Training, our vision is to redefine the landscape of recruitment by empowering individuals and organizations to unlock their full potential and thrive in a rapidly evolving world.
                    </p>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-3">
                <div className="w-3 h-20 bg-primary"></div>

                <h1 className="text-4xl text-primary font-kanit font-extrabold uppercase">Our Mission</h1>
                <div className="flex flex-row">
                    <p className="text-center font-poppins text-sm text-black md:text-xl md:w-[50%]">
                        At Mani Recruits and Training, our mission is to revolutionize the recruitment industry by providing exceptional talent acquisition and training solutions that empower individuals and organizations to succeed in a dynamic and competitive market.
                    </p>

                    <div className="w-[50%] md:flex hidden bg-hero bg-center bg-contain bg-no-repeat grayscale"></div>
                </div>
            </div>

        </div>
    )
}

export default About
