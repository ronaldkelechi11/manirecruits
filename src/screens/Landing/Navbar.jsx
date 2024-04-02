import { MenuHamburger, MenuHotdog } from "@iconsans/react/linear"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    function toggleNav() {
        setIsOpen(!isOpen)
    }

    return (
        <div className='h-auto bg-primary w-full p-5 flex flex-wrap items-center justify-between'>
            <NavLink
                reloadDocument
                className="text-white text-3xl md:text-5xl font-kanit">
                <p>Mani Recruits</p>
            </NavLink>

            <div className="hidden md:flex flex-row gap-5 text-primary">
                <NavLinks />
            </div>

            <div
                className="md:hidden p-2 transition-all cursor-pointer text-white"
                onClick={toggleNav}>
                {
                    isOpen ?
                        <MenuHotdog className="h-10 w-10 text-white" /> : <MenuHamburger className="h-10 w-10 text-white" />
                }
            </div>


            {isOpen &&
                <>
                    <div className="text-primary basis-full md:hidden">
                        <NavLinks />
                    </div>
                </>
            }
        </div>
    )
}

function NavLinks() {
    const navbarStyling = "hover:scale-[1.1] hover:text-orange-300 font-poppins text-[14px] cursor-pointer transition-all md:bg-transparent w-full text-center"
    return (
        <div className='text-2xl font- text-white flex flex-col justify-center md:flex-row gap-4 items-center'>
            {/* Landing Page Links */}
            <Link reloadDocument className={navbarStyling}>Home</Link>
            <a className={navbarStyling} href="#about">About</a>
            <a className={navbarStyling} href="#contact">Contact</a>

            {/* Job Portal Link */}
            <Link to={'#'} className={navbarStyling}>Portal</Link>

            {/* Login and Signup Buttons */}
        </div >
    )
}
export default Navbar
