import AboutUsImage from "../../assets/images/about.jpg";

const About = () => {
    return (
        <div id='about' className="w-screen h-auto flex flex-col p-3 gap-4">
            <div className="text-primary font-kanit font-extrabold uppercase text-5xl md:text-6xl">About Us</div>

            <div className="w-full h-full flex flex-col md:items-center md:flex-row">
                <div className="h-[50%] p-3 w-full md:w-[50%] md:h-full flex justify-center items-center">
                    <img src={AboutUsImage} alt="" />
                </div>

                <div className="h-auto w-full md:w-[50%] md:h-full p-3">
                    <strong className="text-primary">Mani Recruits and Training</strong>
                </div>
            </div>
        </div>
    )
}

export default About
