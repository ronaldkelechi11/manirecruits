import { useNavigate } from "react-router-dom"
import BottomNavBar from "../../../utils/components/BottomNavBar"
import { Search1 } from "@iconsans/react/linear"
import { useEffect, useState } from "react"
import PostItem from "../../../utils/components/PostItem"
import axios from "axios"

const Home = () => {
    const navigate = useNavigate()
    document.title = "Home - Mani Recurits and Training"

    const [posts, setPosts] = useState([])

    // TODO: Check to make sure only 30 posts are fetched at a time
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/dashboard/home`).
            then(({ data }) => {
                setPosts(data)
            }).catch((err) => {
                console.log(err);
            });
    }, [])


    return (
        <div className="w-screen flex flex-col">
            <div className="h-20 w-full bg-white border-b-2 border-grey sticky top-0 p-3">
                <div type="text" className="w-full h-full bg-slate-300 rounded-lg flex flex-row justify-between items-center p-3 gap-3" >
                    <Search1 className="text-3xl text-slate-500" />
                    <input type="search" placeholder="Search Jobs" className="bg-transparent w-full font-poppins outline-none" />
                </div>
            </div>

            <div className="bg-white w-full p-3 flex flex-col gap-3 mb-24">
                {
                    posts.map(post => {
                        return (<PostItem key={posts.indexOf(post)} post={post} />)
                    })
                }
            </div>


            <BottomNavBar />
        </div>
    )
}


export default Home
