

const About = () => {
    return (
        <div id='about' className="w-screen flex flex-col gap-10 justify-evenly p-5">

            <div className="w-full flex flex-col items-center justify-center gap-5">
                <div className="w-3 h-20 bg-primary"></div>

                <h1 className="text-4xl text-primary font-kanit font-extrabold uppercase">About Us</h1>

                <div className="flex flex-row">
                    <p className="text-center font-poppins text-sm text-black md:text-xl md:w-[50%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam possimus aliquam odit facere dolore, magnam autem eligendi iure accusantium eum ipsum! Eum et repellat cum expedita odit dolores illum nobis deserunt ad nemo. Fugit consequuntur possimus quis ipsam libero mollitia odio suscipit. Voluptatum optio eius maiores rerum velit quod?</p>

                    <div className="w-[50%] md:flex hidden bg-hero bg-center bg-contain bg-no-repeat grayscale"></div>
                </div>
            </div>



            <div className="w-full flex flex-col items-center justify-center gap-3">
                <div className="w-3 h-20 bg-primary"></div>

                <h1 className="text-4xl text-primary font-kanit font-extrabold uppercase">Our Vision</h1>
                <div className="flex flex-row">
                    <div className="w-[50%] md:flex hidden bg-hero bg-center bg-contain bg-no-repea t grayscale"></div>

                    <p className="text-center font-poppins text-sm text-black md:text-xl md:w-[50%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam possimus aliquam odit facere dolore, magnam autem eligendi iure accusantium eum ipsum! Eum et repellat cum expedita odit dolores illum nobis deserunt ad nemo. Fugit consequuntur possimus quis ipsam libero mollitia odio suscipit. Voluptatum optio eius maiores rerum velit quod?</p>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center gap-3">
                <div className="w-3 h-20 bg-primary"></div>

                <h1 className="text-4xl text-primary font-kanit font-extrabold uppercase">Our Mission</h1>
                <div className="flex flex-row">
                    <p className="text-center font-poppins text-sm text-black md:text-xl md:w-[50%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam possimus aliquam odit facere dolore, magnam autem eligendi iure accusantium eum ipsum! Eum et repellat cum expedita odit dolores illum nobis deserunt ad nemo. Fugit consequuntur possimus quis ipsam libero mollitia odio suscipit. Voluptatum optio eius maiores rerum velit quod?</p>

                    <div className="w-[50%] md:flex hidden bg-hero bg-center bg-contain bg-no-repeat grayscale"></div>
                </div>
            </div>

        </div>
    )
}

export default About
