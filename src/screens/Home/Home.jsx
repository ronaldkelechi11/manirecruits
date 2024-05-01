import { useNavigate } from "react-router-dom"
import BottomNavBar from "../../utils/components/BottomNavBar"

const Home = () => {
    const navigate = useNavigate()
    document.title = "Home - Mani Recurits and Training"

    return (
        <div className="w-screen h-screen ">


            <BottomNavBar />
        </div>
    )
}

export default Home
