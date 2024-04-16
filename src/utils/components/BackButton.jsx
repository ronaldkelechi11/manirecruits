import { ArrowLeft } from "@iconsans/react/linear"
import { useNavigate } from "react-router-dom"

const BackButton = () => {
    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }


    return (
        <div onClick={goBack} className="w-16 h-16 rounded-xl fixed left-0 top-0 text-5xl flex justify-center items-center text-white m-5 bg-primary">
            <ArrowLeft />
        </div>
    )
}

export default BackButton
