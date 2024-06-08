import { useNavigate } from "react-router-dom"
import AnimatedDiv from "../../../utils/animations/AnimatedDiv"
import NormalInput from "../../../utils/components/NormalInput"
import TopNavBar from "../../../utils/components/TopNavbar"
import { useState } from "react"


const UpdateUserTitle = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState()


    function updateTitle(e) {
        e.preventDefault();
        alert("Hi")
    }

    return (
        <AnimatedDiv className="w-screen h-screen bg-white">
            <TopNavBar title={'Update User Title'} />

            <div className="w-full flex flex-col h-[50%] justify-between mt-16 p-3 bg-white">

                <div className="flex flex-col gap-3">
                    <p className="font-poppins text-primary text-xl">New User Title</p>
                    <NormalInput
                        placeholder={'Driver'}
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        className='border-primary h-16 border-2 p-3 font-poppins rounded-lg text-xl' />
                </div>

                <button className="bg-primary w-full h-16 rounded-lg text-white font-kanit flex justify-center items-center text-xl" onClick={updateTitle}>
                    Done
                </button>
            </div>


        </AnimatedDiv>
    )
}

export default UpdateUserTitle
