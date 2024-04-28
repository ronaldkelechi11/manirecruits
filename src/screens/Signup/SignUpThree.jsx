import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScrollToLeft from '../../utils/animations/ScrollToLeft'
import axios from 'axios'
import CustomButton from '../../utils/components/CustomButton'
import ErrorCard from '../../utils/components/ErrorCard'

const SignUpThree = () => {
    const navigate = useNavigate()
    const USER_EMAIL = localStorage.getItem("USER_EMAIL")

    const [telephone, setTelephone] = useState(undefined)
    const [street, setStreet] = useState(undefined)
    const [city, setCity] = useState(undefined)
    const [userState, setUserState] = useState(undefined)
    const [zipcode, setZipCode] = useState(undefined)

    // Error checking
    const [serverError, setServerError] = useState(false)

    // ErrorShowing
    const [message, setMessage] = useState('')

    function submitForm(e) {
        e.preventDefault()

        try {
            axios.post(`${import.meta.env.VITE_API_URL}/signup/${USER_EMAIL}/3`,
                {
                    phone_number: telephone,
                    street: street,
                    city: city,
                    state: userState,
                    zipCode: zipcode
                }
            ).then((result) => {
                localStorage.setItem("USER_VERIFIED", false)
                navigate('/signup/verifyemail')
                console.log(result);
            }).catch((err) => {
                setMessage(err)
                setServerError(true)
                console.log(err);
            });

        } catch (error) {
            setMessage(error)
            setServerError(true)
            console.log(error);
        }

    }

    return (
        <ScrollToLeft className="w-screen h-screen bg-white flex flex-col justify-center items-center">


            <div className="flex flex-col w-full">
                <p className="text-6xl font-kanit text-center text-primary">What next?</p>
                <p className="text-xl p-3 font-kanit text-center text-gray-400">
                    Just getting some more information, we&apos;ll be done in a bit
                </p>

                <form className="flex flex-col gap-5 mt-10 px-5" onSubmit={submitForm}>
                    <input type="tel" required placeholder="Phone Number (+234)" className="h-16 border-grey border p-5 rounded-lg"
                        value={telephone} onChange={(e) => { setTelephone(e.target.value) }} />

                    <input type="text" required placeholder='Street' className='h-16 border-grey border p-5 rounded-lg font-poppins'
                        value={street} onChange={(e) => { setStreet(e.target.value) }} />

                    <input type="text" required placeholder='City' className='h-16 border-grey border p-5 rounded-lg font-poppins'
                        value={city} onChange={(e) => { setCity(e.target.value) }} />

                    <input type="text" required placeholder='State' className='h-16 border-grey border p-5 rounded-lg font-poppins capitalize'
                        value={userState} onChange={(e) => { setUserState(e.target.value) }} />

                    <input type="text" placeholder='Zipcode' maxLength={6} minLength={5} title='Zip Code'
                        required className='h-16 border-grey border p-5 rounded-lg font-poppins'
                        value={zipcode} onChange={(e) => { setZipCode(e.target.value) }} />

                    {/* Submit Button */}
                    <CustomButton text={'Done'} />


                    {/* Error Display Component */}
                    <ErrorCard text={message} error={serverError} />

                </form>
            </div>

        </ScrollToLeft>
    )
}

export default SignUpThree
