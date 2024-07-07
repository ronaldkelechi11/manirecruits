import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Message, MessagePlus, Pencil, User1, Users1 } from '@iconsans/react/linear'
import AdminBottonNavBar from '../../../utils/components/AdminBottomNavBar'
import manirecruitsLogo from '../../../assets/images/logo_black_nobg.png'

const AdminMain = () => {
    const navigate = useNavigate()
    document.title = "Admin - Mani Recruits and Training"

    const [userCount, setUserCount] = useState(34)
    const [clientCount, setClientCount] = useState(25)
    const [postsCount, setPostCount] = useState(50)
    const [unApprovedPosts, setUpapprovedPosts] = useState(40)


    useEffect(() => {
        if (!localStorage.getItem("ADMIN_IS_LOGGED_IN")) {
            alert("Protected Route")
            navigate('/')
        }
    }, [])


    return (
        <div className='w-screen h-screen flex flex-col bg-grey'>
            <TopBar />

            {/* Count displays */}
            <div className="w-full p-3 flex flex-row gap-3">
                <div className="min-h-[150px] w-[50%] bg-primary rounded-lg flex flex-col justify-between p-2">
                    <p className="text-white text-xl font-kanit"> <User1 className='text-white text-3xl' />Active Users</p>
                    <p className='text-white text-4xl font-extrabold'>{userCount}</p>
                </div>

                <div className="min-h-[150px] w-[50%] bg-orange-700 rounded-lg flex flex-col justify-between p-2">
                    <p className="text-white text-xl font-kanit">
                        <Users1 className='text-white text-3xl' />Active Clients</p>
                    <p className='text-white text-4xl font-extrabold'>{clientCount}</p>
                </div>
            </div>
            <div className="w-full p-3 flex flex-row gap-3">
                <div className="min-h-[150px] w-[50%] bg-green-700 rounded-lg flex flex-col justify-between p-2">
                    <p className="text-white text-xl font-kanit">
                        <Message className='text-white text-3xl' />Total Posts</p>
                    <p className='text-white text-4xl font-extrabold'>{postsCount}</p>
                </div>

                <div className="min-h-[150px] w-[50%] bg-blue-700 rounded-lg flex flex-col justify-between p-2">
                    <p className="text-white text-xl font-kanit">
                        <MessagePlus className='text-white text-3xl' />Unapproved Posts</p>
                    <p className='text-white text-4xl font-extrabold'>{unApprovedPosts}</p>
                </div>
            </div>


            <div className="w-full h-full mb-20 p-3">
                <div className="w-full h-full bg-white rounded-[10px_10px]"></div>
            </div>


            {/* FAB */}
            <div className="w-16 h-16 rounded-full bg-primary text-white flex justify-center items-center text-3xl fixed bottom-24 right-5">
                <Pencil onContextMenu={'Create post'} />
            </div>


            <AdminBottonNavBar />
        </div>
    )
}

function TopBar() {
    return (
        <div className="flex flex-row justify-between items-center p-3 font-kanit">
            <div className="flex-col">
                <p className="uppercase text-sm text-gray-700">Welcome back,</p>
                <p className='text-3xl font-extrabold'>Administrator</p>
            </div>

            <div className="w-12 h-12 rounded-full">
                <img src={manirecruitsLogo} alt="" />
            </div>
        </div>
    )
}

export default AdminMain
