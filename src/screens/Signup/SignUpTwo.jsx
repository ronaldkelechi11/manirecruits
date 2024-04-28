import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ScrollToLeft from "../../utils/animations/ScrollToLeft"
import CustomButton from "../../utils/components/CustomButton"

// To get firstname,lastname,date_of_birth, phone_number,address
const SignUpTwo = () => {
    const navigate = useNavigate()

    // Local Storage
    const USER_EMAIL = localStorage.getItem("USER_EMAIL")

    const [firstname, setFirstName] = useState(undefined)
    const [lastname, setLastName] = useState(undefined)
    const [dateOfBirth, setDateofBirth] = useState(undefined)

    // Error Checking
    const [serverError, setServerError] = useState(false)

    // Error Showing
    const [message, setMessage] = useState('')

    // Submit Form
    function submitForm(e) {
        e.preventDefault()

        // Validation
        if (!firstname) {
            setServerError(true)
            setMessage("Firstname Cannot be empty")

            setTimeout(() => {
                setServerError(false)
            }, 2000);
            return false;
        }
        if (!lastname) {
            setServerError(true)
            setMessage("Lastname Cannot be empty")

            setTimeout(() => {
                setServerError(false)
            }, 2000);
            return false;
        }
        else {
            axios.post(`${import.meta.env.VITE_API_URL}/signup/${USER_EMAIL}/2`,
                {
                    firstname: firstname,
                    lastname: lastname,
                    date_of_birth: dateOfBirth
                })
                .then((result) => {
                    navigate('/signup/3')
                }).catch((err) => {
                    setMessage(err)
                    setServerError(true)
                    console.log(err);
                });
        }
    }

    return (
        <ScrollToLeft className="w-screen h-screen bg-white flex flex-col justify-center items-center">


            <div className="flex flex-col w-full">
                <p className="text-6xl font-kanit text-center text-primary">Thanks,</p>
                <p className="text-xl font-kanit text-center text-gray-400">We just need some info from you</p>

                <form className="flex flex-col gap-5 mt-10 px-5" onSubmit={submitForm}>
                    <input type="text" placeholder="First Name" className="h-16 border-grey border p-5 rounded-lg font-poppins"
                        value={firstname} onChange={(e) => { setFirstName(e.target.value) }} />

                    <input type="text" placeholder="Last Name" className="h-16 border-grey border p-5 rounded-lg font-poppins"
                        value={lastname} onChange={(e) => { setLastName(e.target.value) }} />

                    <div className="flex flex-col">
                        <p className="text-grey font-poppins">Date of Birth</p>
                        <input type="date" className="h-16 border-grey border p-5 rounded-lg font-poppins"
                            value={dateOfBirth} title="Date of Birth" enterKeyHint="Date of Birth" required onChange={(e) => { setDateofBirth(e.target.value) }} />
                    </div>


                    {/* Submit Button */}
                    <CustomButton text={"Done"} />

                    {/* Error Display Component */}
                    <div className="text-center font-kanit text-danger fixed bottom-10 left-0 right-0  p-3">

                        {serverError &&
                            <p className="border border-danger rounded-xl p-3">{message}</p>
                        }
                    </div>
                </form>
            </div>

        </ScrollToLeft>
    )
}

export default SignUpTwo
