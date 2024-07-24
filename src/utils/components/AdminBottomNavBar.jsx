import { Bell, Home1, Message, Setting, User1 } from "@iconsans/react/linear"
import { NavLink, } from "react-router-dom"

const AdminBottonNavBar = () => {
    // create a fucntion to check which one is active and then set the icon color to info color and scale up


    return (
        <div id="adminbnb" className='w-screen h-20 bg-white border-t-2 border-grey fixed bottom-0 left-0 right-0 flex flex-row p-3 gap-3 z-50'>

            {/* Home (Create Post and see info) */}
            <NavLink to={'/admin'} className="h-full w-full text-3xl flex justify-center items-center text-slate-500">
                <Home1 />
            </NavLink>


            {/* User Management */}
            <NavLink to={'/'} className="h-full w-full text-3xl flex justify-center items-center text-slate-500">
                <User1 />
            </NavLink>

            {/* Post Management */}
            <NavLink to={'/'} className="h-full w-full text-3xl flex justify-center items-center text-slate-500">
                <Message />
            </NavLink>

        </div>
    )
}

export default AdminBottonNavBar
