import { useNavigate } from "react-router-dom"
import AnimatedDiv from "../../../utils/animations/AnimatedDiv"
import NormalInput from "../../../utils/components/NormalInput"
import TopNavBar from "../../../utils/components/TopNavbar"
import { useState } from "react"
import axios from "axios"


const UpdateUserTitle = () => {
    const navigate = useNavigate()
    const USER_EMAIL = localStorage.getItem("USER_EMAIL")


    const [title, setTitle] = useState("")

    function updateTitle(e) {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/dashboard/edit/title/${USER_EMAIL}`, { title: title }).then((result) => {
            alert('Succesfully Changed User Title')
            navigate('/settings')
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <AnimatedDiv className="w-screen h-screen bg-white flex flex-col">
            <TopNavBar title={'Update User Title'} />

            <div className="w-full flex flex-col h-full justify-between mt-16 p-3 bg-white">

                <div className="flex flex-col gap-3">
                    <p className="font-poppins text-primary text-sm">New User Title</p>
                    <NormalInput
                        placeholder={'Driver'}
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                        className='border-primary h-16 border-2 p-3 font-poppins rounded-lg text-lg' />
                </div>

                <button className="bg-primary w-full h-16 rounded-lg text-white font-kanit flex justify-center items-center text-xl" onClick={updateTitle}>
                    Done
                </button>
            </div>


        </AnimatedDiv>
    )
}

export default UpdateUserTitle
