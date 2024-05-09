import { Bell, Home1, Message, Setting } from "@iconsans/react/linear"
import { Link, useLocation } from "react-router-dom"

const BottomNavBar = () => {

    const location = useLocation()
    // create a fucntion to check which one is active and then set the icon color to info color and scale up

    return (
        <div className='w-screen h-20 bg-white border-t-2 border-grey fixed bottom-0 left-0 right-0 flex flex-row p-3 gap-3'>

            <Link to={'/home'} className="h-full w-full text-3xl flex justify-center items-center">
                <Home1 />
            </Link>

            <Link to={'/notifications'} className="h-full w-full text-3xl flex justify-center items-center">
                <Bell />
            </Link>

            <Link to={'/messages'} className="h-full w-full text-3xl flex justify-center items-center">
                <Message />
            </Link>

            <Link to={'/settings'} className="h-full w-full text-3xl flex justify-center items-center">
                <Setting />
            </Link>

        </div>
    )
}

export default BottomNavBar
