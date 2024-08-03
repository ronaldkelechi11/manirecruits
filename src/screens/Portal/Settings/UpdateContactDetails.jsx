
import { useNavigate } from 'react-router-dom'
import AnimatedDiv from '../../../utils/animations/AnimatedDiv'
import TopNavBar from '../../../utils/components/TopNavbar'
import { useEffect, useState } from 'react'
import axios from 'axios'

const UpdateContactDetails = () => {
    const navigate = useNavigate()
    var USER_EMAIL = localStorage.getItem("USER_EMAIL")
    const [phone_number, setPhoneNumber] = useState('')
    const [email_address, setEmailAddress] = useState('')

    // fetch user current phone number and email address
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/dashboard/edit/contactdetails/${USER_EMAIL}`)
            .then((result) => {

            }).catch((err) => {

            });
    }, [])



    // Fetch old user phone number, address and email
    // Add a confirmation(Are you sure you want to update these details)
    function updateUserDetails() {

    }

    return (
        <AnimatedDiv className='w-screen h-screen bg-white flex flex-col'>
            <TopNavBar title={'User Contact Details'} />

            <div className="w-full h-full flex flex-col justify-between mt-16 p-3 bg-white">

                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        {/* Phone Number */}
                        <p className="font-poppins text-primary text-sm">New Phone Number</p>
                        <input
                            type='tel'
                            placeholder='+234 000 0000 000'
                            className='border-primary h-16 border-2 p-3 font-poppins rounded-lg text-lg'
                            value={phone_number}
                            onChange={(e) => { setPhoneNumber(e.target.value) }} />

                        {/* Email Address */}
                        <p className="font-poppins text-primary text-sm">New Email Address</p>
                        <input
                            type='tel'
                            placeholder='newemail@gmail.com'
                            className='border-primary h-16 border-2 p-3 font-poppins rounded-lg text-lg'
                            value={email_address}
                            onChange={(e) => { setEmailAddress(e.target.value) }} />
                    </div>
                </div>

                <button className="bg-primary w-full h-16 rounded-lg text-white font-kanit flex justify-center items-center text-xl" onClick={updateUserDetails}>
                    Done
                </button>
            </div>

        </AnimatedDiv>
    )
}

export default UpdateContactDetails
