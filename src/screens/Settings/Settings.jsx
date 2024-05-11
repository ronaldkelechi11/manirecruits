import { useNavigate } from 'react-router-dom'
import BottomNavBar from '../../utils/components/BottomNavBar'
import TopNavBar from '../../utils/components/TopNavbar'

const Settings = () => {
    const navigate = useNavigate()
    document.title = "Settings - Mani Recruits and Training"


    return (
        <div className='w-screen h-screen'>
            <div className="w-screen h-16 fixed top-0 flex flex-row justify-between gap-5 items-center p-5">
                <p className="ml-3 text-xl font-extrabold font-kanit">Settings</p>
            </div>

            <div className=""></div>


            <BottomNavBar />
        </div>
    )
}

export default Settings
