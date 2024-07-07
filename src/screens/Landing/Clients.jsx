import AnimatedDiv from "../../utils/animations/AnimatedDiv"
import Marquee from 'react-fast-marquee'

// Client Logos
import dreamCityLogo from '../../assets/images/logos/dreamcity_logo.png'
import delmarLogo from '../../assets/images/logos/delmar_logo.jpg'
import nabroLogo from '../../assets/images/logos/NABRO-LOGO.png'
import tscLogo from '../../assets/images/logos/the_slate_center_logo.png'
import ukiriLogo from '../../assets/images/logos/UL-100-e1556783816972.png'



const Clients = () => {


    return (
        <AnimatedDiv className='bg-white flex flex-col gap-5 p-3 box-border overflow-hidden'>
            <p className="text-5xl md:text-5xl text-center text-primary font-kanit font-extrabold uppercase">Some of our Clients</p>

            <Marquee speed={50} autoFill='true' pauseOnHover='true' className="bg-white">
                <img src={dreamCityLogo} className="h-16 min-w-32 mx-5" />
                <img src={delmarLogo} className="h-16 min-w-32 mx-5" />
                <img src={nabroLogo} className="h-16 min-w-32 mx-5" />
                <img src={tscLogo} className="h-16 min-w-32 mx-5" />
                <img src={ukiriLogo} className="h-16 min-w-32 mx-5" />
                {/* TODO: Add the remaining Clients */}
            </Marquee>
        </AnimatedDiv>
    )
}

export default Clients
