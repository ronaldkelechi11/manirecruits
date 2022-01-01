import About from "./About"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"

const Landing = () => {
    return (
        <div className="w-screen flex flex-col">
            <Navbar />
            <Hero />
            <About />
            <Footer />
        </div>
    )
}

export default Landing
