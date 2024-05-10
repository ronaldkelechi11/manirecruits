import { useNavigate } from 'react-router-dom'
import BottomNavBar from '../../utils/components/BottomNavBar'

const Settings = () => {
    const navigate = useNavigate()
    document.title = "Settings - Mani Recruits and Training"
    return (
        <div className='w-screen h-screen'>


            <BottomNavBar />
        </div>
    )
}

export default Settings
