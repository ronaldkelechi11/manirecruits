import { useNavigate } from "react-router-dom"
import BottomNavBar from "../../../utils/components/BottomNavBar"
import { Search1 } from "@iconsans/react/linear"

const Home = () => {
    const navigate = useNavigate()
    document.title = "Home - Mani Recurits and Training"

    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="h-20 w-full bg-white border-b-2 border-grey sticky top-0 p-3">
                <div type="text" className="w-full h-full bg-slate-300 rounded-lg flex flex-row justify-between items-center p-3 gap-3" >
                    <Search1 className="text-3xl text-slate-500" />
                    <input type="search" placeholder="Search Jobs" className="bg-transparent w-full font-poppins outline-none" />
                </div>
            </div>

            <div className="bg-white h-full w-full"></div>


            <BottomNavBar />
        </div>
    )
}

export default Home
