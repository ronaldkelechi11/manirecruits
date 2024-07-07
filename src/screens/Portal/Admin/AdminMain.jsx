import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNavBar from '../../../utils/components/TopNavbar'
import { Messages, Pencil, User2, Users2 } from '@iconsans/react/linear'
import AdminBottonNavBar from '../../../utils/components/AdminBottomNavBar'

const AdminMain = () => {
    const navigate = useNavigate()
    document.title = "Admin - Mani Recruits and Training"

    const [userCount, setUserCount] = useState(3428)
    const [clientCount, setClientCount] = useState(2528)
    const [postsCount, setPostCount] = useState(340028)


    useEffect(() => {
        if (!localStorage.getItem("ADMIN_IS_LOGGED_IN")) {
            alert("Protected Route")
            navigate('/')
        }
    }, [])


    return (
        <div className='w-screen h-screen bg-grey'>
            <TopNavBar title={'Admin'} />


            {/* FAB */}
            <div className="w-16 h-16 rounded-full bg-primary text-white flex justify-center items-center text-3xl fixed bottom-24 right-5">
                <Pencil onContextMenu={'Create post'} />
            </div>


            <AdminBottonNavBar />
        </div>
    )
}

export default AdminMain
