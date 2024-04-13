import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Services from "./Services"

const Landing = () => {
    return (
        <div className="w-screen flex flex-col">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landing
