import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logout, Message, MessagePlus, Pencil, User1, Users1 } from '@iconsans/react/linear'
import AdminBottonNavBar from '../../../utils/components/AdminBottomNavBar'
import axios from 'axios'

const AdminMain = () => {
    const navigate = useNavigate()
    document.title = "Admin - Mani Recruits and Training"

    const [userCount, setUserCount] = useState(0)
    const [clientCount, setClientCount] = useState(0)
    const [postCount, setPostCount] = useState(0)
    const [unApprovedPosts, setUpapprovedPosts] = useState('')


    useEffect(() => {
        console.log(localStorage.getItem("ADMIN_IS_LOGGED_IN"));

        if (localStorage.getItem("ADMIN_IS_LOGGED_IN") == 'false' || localStorage.getItem("ADMIN_IS_LOGGED_IN") == undefined) {
            alert("Protected Route")
            navigate('/')
        }
        else {
            axios.get(`${import.meta.env.VITE_API_URL}/admin/main`)
                .then(({ data }) => {
                    setUserCount(data.userCount)
                    setPostCount(data.postCount)
                    setClientCount(data.activeClients)
                }).catch((err) => {
                    console.log(err);
                });
        }
    }, [])

    return (
        <div className='w-screen h-screen flex flex-col bg-grey'>
            <TopBar />

            {/* Count displays */}
            <div className="w-full p-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="min-h-[150px] w-[100%] bg-primary rounded-lg flex flex-col justify-between p-2">
                    <p className="text-white text-sm font-poppins"> <User1 className='text-white text-3xl' />Active Users</p>
                    <p className='text-white text-4xl font-extrabold'>{userCount}</p>
                </div>

                <div className="min-h-[150px] w-[100%] bg-orange-700 rounded-lg flex flex-col justify-between p-2">
                    <p className="text-white text-sm font-poppins">
                        <Users1 className='text-white text-3xl' />Active Clients</p>
                    <p className='text-white text-4xl font-extrabold'>{clientCount}</p>
                </div>

                <div className="min-h-[150px] w-[100%] bg-green-700 rounded-lg flex flex-col justify-between p-2">
                    <p className="text-white text-sm font-poppins">
                        <Message className='text-white text-3xl' />Total Posts</p>
                    <p className='text-white text-4xl font-extrabold'>{postCount}</p>
                </div>

                <div className="min-h-[150px] w-[100%] bg-blue-700 rounded-lg flex flex-col justify-between p-2">
                    <p className="text-white text-sm font-poppins">
                        <MessagePlus className='text-white text-3xl' />Unapproved Posts</p>
                    <p className='text-white text-4xl font-extrabold'>{unApprovedPosts}</p>
                </div>
            </div>


            {/* FAB */}
            <Link to={'create'} className="w-16 h-16 rounded-full bg-primary text-white flex justify-center items-center text-3xl fixed bottom-24 right-5">
                <Pencil onContextMenu={'Create post'} />
            </Link>


            <AdminBottonNavBar />
        </div>
    )
}

function TopBar() {
    const navigate = useNavigate()

    function logOut() {
        if (confirm('Are you sure you want to logout from Admin?')) {
            console.log('confirmed');
            navigate('/')
            localStorage.setItem("ADMIN_IS_LOGGED_IN", false)
        }
        else {
            return false
        }
    }

    return (
        <div className="flex flex-row justify-between items-center p-3 font-kanit">
            <div className="flex-col">
                <p className="uppercase text-sm text-gray-700">Welcome back,</p>
                <p className='text-3xl font-extrabold'>Administrator</p>
            </div>

            <div className="w-12 h-12 rounded-full flex justify-center items-center text-2xl cursor-pointer bg-primary text-white" onClick={logOut}>
                <Logout />
            </div>
        </div>
    )
}

export default AdminMain
