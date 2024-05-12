import { useNavigate } from 'react-router-dom'
import BottomNavBar from '../../utils/components/BottomNavBar'
import TopNavBar from '../../utils/components/TopNavbar'
import { useState } from 'react'

const Settings = () => {
    const navigate = useNavigate()
    document.title = "Settings - Mani Recruits and Training"

    const [userFirstname, setUserFirstname] = useState('John');


    return (
        <div className='w-screen h-screen flex flex-col bg-primary'>
            <div className="h-64 w-full bg-primary flex flex-col justify-center items-center font-kanit text-white">
                <p className='text-2xl text-slate-200'>Hello,👋</p>
                <p className='text-5xl'>{userFirstname}</p>
            </div>

            <div className="h-[100vh] w-full z-10 bg-white">

            </div>


            <BottomNavBar />
        </div>
    )
}

export default Settings
