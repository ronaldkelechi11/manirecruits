import { Bell, Home1, Message, Setting } from "@iconsans/react/linear"
import { NavLink, } from "react-router-dom"

const AdminBottonNavBar = () => {
    // create a fucntion to check which one is active and then set the icon color to info color and scale up


    return (
        <div id="adminbnb" className='w-screen h-20 bg-white border-t-2 border-grey fixed bottom-0 left-0 right-0 flex flex-row p-3 gap-3 z-50'>

            <NavLink to={'/admin'} className="h-full w-full text-3xl flex justify-center items-center text-slate-500">
                <Home1 />
            </NavLink>

            <NavLink to={'/admin/notifications'} className="h-full w-full text-3xl flex justify-center items-center text-slate-500">
                <Bell />
            </NavLink>

            <NavLink to={'/admin/messages'} className="h-full w-full text-3xl flex justify-center items-center text-slate-500">
                <Message />
            </NavLink>

            <NavLink to={'/admin/settings'} className="h-full w-full text-3xl flex justify-center items-center text-slate-500">
                <Setting />
            </NavLink>

        </div>
    )
}

export default AdminBottonNavBar
