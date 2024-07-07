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

            {/* Main Functions of Admin will display here */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 mt-16 w-full gap-3 justify-items-center items-center p-3" > */}

            {/* Total Users Count */}
            {/* <div className="bg-info h-28 min-w-full md:h-48 md:p-5 md:w-[50%] flex flex-row p-2 rounded-lg">
                    <div className="w-[70%] h-full flex flex-col justify-between">
                        <div className="flex flex-row items-center">
                            <p className="font-kanit text-white text-2xl">Total Users</p>
                        </div>
                        <p className='text-white text-xl font-extrabold'>{userCount}</p>
                    </div>
                    <div className="w-[30%] h-full flex justify-center items-center text-7xl text-slate-200">
                        <User2 />
                    </div>
                </div> */}

            {/* Total Clients Accounts*/}
            {/* <div className="bg-success h-28 min-w-full md:h-48 md:p-5 md:w-[50%] flex flex-row p-2 rounded-lg">
                    <div className="w-[70%] h-full flex flex-col justify-between">
                        <div className="flex flex-row items-center">
                            <p className="font-kanit text-white text-2xl">Total Clients</p>
                        </div>
                        <p className='text-white text-xl font-extrabold'>{clientCount}</p>
                    </div>
                    <div className="w-[30%] h-full flex justify-center items-center text-7xl text-slate-200">
                        <Users2 />
                    </div>
                </div> */}

            {/* Total posts */}
            {/* <div className="bg-primary h-28 min-w-full md:h-48 md:p-5 md:w-[50%] flex flex-row p-2 rounded-lg">
                    <div className="w-[70%] h-full flex flex-col justify-between">
                        <div className="flex flex-row items-center">
                            <p className="font-kanit text-white text-2xl">Total Posts</p>
                        </div>
                        <p className='text-white text-xl font-extrabold'>{postsCount}</p>
                    </div>
                    <div className="w-[30%] h-full flex justify-center items-center text-7xl text-slate-200">
                        <Messages />
                    </div>
                </div> */}
            {/* </div> */}



            {/* FAB */}
            <div className="w-16 h-16 rounded-full bg-primary text-white flex justify-center items-center text-3xl fixed bottom-24 right-5">
                <Pencil onContextMenu={'Create post'} />
            </div>


            <AdminBottonNavBar />
        </div>
    )
}

export default AdminMain
