/* eslint-disable react/prop-types */
import { ArrowLeft } from "@iconsans/react/linear";
import { useNavigate } from "react-router-dom";


const TopNavBar = ({ title, extra }) => {
    const navigate = useNavigate()


    return (
        <div className="w-screen h-16 fixed bg-white top-0 flex flex-row justify-between gap-5 items-center p-5">
            <div className="flex flex-row items-center">
                <ArrowLeft onClick={() => { navigate(-1) }} className="text-3xl text-black cursor-pointer" />
                <p className="ml-3 text-xl font-poppins">{title}</p>
            </div>



            <div className="">{extra}</div>
        </div>
    )
}

export default TopNavBar
