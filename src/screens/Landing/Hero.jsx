
const Hero = () => {
    return (
        <div className="bg-primary h-screen text-white py-20 px-8 md:px-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Dream Job</h1>
                <p className="text-lg md:text-xl mb-8">Discover thousands of job opportunities tailored for you.</p>
                <div className="flex">
                    <input type="text" placeholder="Enter your job title" className="w-full md:w-3/4 px-4 py-2 rounded-l-lg focus:outline-none" />
                    <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-lg">Search</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
