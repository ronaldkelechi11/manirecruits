import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminMain = () => {
    const navigate = useNavigate()
    document.title = "Admin - Mani Recruits and Training"

    useEffect(() => {
        if (!localStorage.getItem("ADMIN_IS_LOGGED_IN")) {
            alert("Protected Route")
            navigate('/')
        }
        else {
            return true;
        }
    }, [])

    return (
        <div className='bg-primary w-screen h-screen'>

        </div>
    )
}

export default AdminMain
