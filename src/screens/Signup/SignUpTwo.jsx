import BackButton from "../../utils/components/BackButton"

// To get firstname,lastname,date_of_birth, phone_number,address
const SignUpTwo = () => {
    return (
        <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
            <BackButton />


            <div className="flex flex-col w-full">
                <p className="text-6xl font-kanit text-center text-primary">Thanks,</p>
                <p className="text-xl font-kanit text-center text-gray-400">We just need some info from you</p>

                <form className="flex flex-col gap-5 mt-10 px-5">
                    <input type="text" placeholder="First Name" className="h-16 border-grey border p-5 rounded-lg" />

                    <input type="text" placeholder="Last Name" className="h-16 border-grey border p-5 rounded-lg" />

                    <input type="tel" placeholder="Phone Number (+234)" className="h-16 border-grey border p-5 rounded-lg" pattern="{3}[0-9] {3}[0-9] {3}[0-9]" />

                    <input type="date" className="h-16 border-grey border p-5 rounded-lg" />

                </form>
            </div>

        </div>
    )
}

export default SignUpTwo
