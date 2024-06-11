
import { useNavigate } from 'react-router-dom'
import AnimatedDiv from '../../../utils/animations/AnimatedDiv'
import TopNavBar from '../../../utils/components/TopNavbar'
import { useState } from 'react'

const UpdateContactDetails = () => {
    const navigate = useNavigate()
    const [phone_number, setPhoneNumber] = useState()


    function updateUserDetails() {

    }

    // Update phone Number 
    return (
        <AnimatedDiv className='w-screen h-screen bg-white'>
            <TopNavBar title={'User Contact Details'} />

            <div className="w-full flex flex-col h-[50%] justify-between mt-16 p-3 bg-white">

                <div className="flex flex-col gap-3">

                    <div className="flex flex-col gap-2">
                        <p className="font-poppins text-primary text-xl">New Phone Number</p>
                        <input
                            type='tel'
                            placeholder='+234 000 0000 000'
                            className='border-primary h-16 border-2 p-3 font-poppins rounded-lg text-xl' />
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
