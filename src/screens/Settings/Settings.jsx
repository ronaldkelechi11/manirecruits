import { useNavigate } from 'react-router-dom'
import BottomNavBar from '../../utils/components/BottomNavBar'
import TopNavBar from '../../utils/components/TopNavbar'

const Settings = () => {
    const navigate = useNavigate()
    document.title = "Settings - Mani Recruits and Training"


    return (
        <div className='w-screen h-screen flex flex-col'>
            <div className="h-48 w-full bg-info"></div>


            <BottomNavBar />
        </div>
    )
}

export default Settings
