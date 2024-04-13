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
                <p>Logo</p>
            </NavLink>

            <div className="hidden md:flex flex-row gap-5 text-primary">
                <NavLinks />
            </div>

            <div
                className="md:hidden p-2 transition-all cursor-pointer text-white"
                onClick={toggleNav}>
                {
                    isOpen ?
                        <MenuHotdog className="h-10 w-10 text-white" /> :
                        <MenuHamburger className="h-10 w-10 text-white" />
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
    const navbarStyling = "md:hover:scale-[1.1] hover:text-white text-idle font-poppins text-[14px] cursor-pointer transition-all w-full text-nowrap"

    return (
        <div className='flex flex-col justify-center md:flex-row gap-4 items-center mt-3'>
            {/* Landing Page Links */}
            <a className={navbarStyling} href="#about">About</a>
            <a className={navbarStyling} href="#services">Our Services</a>
            <a className={navbarStyling} href="#contact">Contact</a>

            {/* Login and Signup Buttons */}
            <Link to={'/signup'}
                className="rounded-lg w-full bg-white px-8 py-2 text-black text-[14px] font-poppins text-nowrap hover:bg-primary hover:text-white border-2 hover:border-white border-white text-center">
                Sign Up
            </Link>

        </div >
    )
}
export default Navbar
