import BottomNavBar from "../../../utils/components/BottomNavBar"

const Notifications = () => {
    return (
        <div className="w-screen h-screen bg-white">
            <div className="h-16 p-2 border-b-2 flex items-center">
                <p className="text-xl font-kanit">Notifications</p>
            </div>

            <BottomNavBar />
        </div>
    )
}

export default Notifications
