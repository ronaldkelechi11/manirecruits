import { Link, useNavigate } from "react-router-dom"
import BackButton from "../../utils/components/BackButton"
import { useState } from "react"
import PasswordInput from "../../utils/components/PasswordInput"
import NormalInput from "../../utils/components/NormalInput"
import axios from "axios"
import CustomButton from "../../utils/components/CustomButton"
import ScrollToLeft from "../../utils/animations/ScrollToLeft";



const LoginMain = () => {
    const navigate = useNavigate()
    document.title = "Login - Mani Recruits and Training"

    // Input Values
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Error checking
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [serverError, setServerError] = useState(false)

    // Error Indicating
    const [message, setMessage] = useState('')


    function formSubmit(e) {
        e.preventDefault();

        if (!email) {
            setEmailError(true)

            setTimeout(() => {
                setEmailError(false)
            }, 2000);
            return false
        }
        // Admin 202, user correct 200, password incorrect 404, user no exist 500
        else {
            axios.post(`${import.meta.env.VITE_API_URL}/login`, { email: email, password: password })
                .then((result) => {
                    localStorage.setItem("USER_EMAIL", email)

                    // Admin Login
                    if (result?.status == 202) {
                        alert("Admin Logged In")
                        localStorage.setItem('ADMIN_IS_LOGGED_IN', true)
                        navigate('/admin')
                    }
                    else if (result?.status == 200) {
                        localStorage.setItem("USER_EMAIL", email)
                        navigate('/home')
                    }
                    else if (result?.status == 204) {
                        setServerError(true)
                        setMessage("Incorrect Password")

                        setTimeout(() => {
                            setServerError(false)
                        }, 2000);
                        return false;
                    }
                }).catch((err) => {
                    console.log(err.data);
                    setMessage(err.message)
                    setServerError(true)
                });
        }

    }

    return (
        <ScrollToLeft className="w-screen h-screen bg-white flex flex-col justify-center items-center">
            <BackButton />


            <div className="flex flex-col w-full">
                <p className="text-4xl font-kanit text-center text-primary">Welcome back,</p>
                <p className="text-xl font-kanit text-center text-gray-400">Let&apos;s get you logged in</p>

                <form onSubmit={formSubmit} className="flex flex-col gap-5 mt-10 px-5">

                    {/* Email */}
                    <NormalInput
                        placeholder={'Email Address'}
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <div className="text-center font-kanit text-danger">
                        {emailError &&
                            <p>Email cannot be blank</p>
                        }
                    </div>



                    {/* Password */}
                    <PasswordInput
                        placeholder={'Password'}
                        value={password}
                        error={passwordError}
                        onFocus={() => { setPasswordError(false) }}
                        onChange={(e) => { setPassword(e.target.value) }} />

                    <div className="text-center font-kanit text-info transition-all animate-[0.2s]">
                        {passwordError &&
                            <p>Password should be greater than 8 digits</p>
                        }
                    </div>


                    {/* Submit Button */}
                    <CustomButton text={"Login"} />

                    <p className="text-black text-center font-poppins">
                        Don&apos;t have an Account? <Link to="/signup" className="text-info">Sign Up</Link>
                    </p>


                    {/* Error Display Component */}
                    <div className="text-center font-kanit text-danger fixed bottom-10 left-0 right-0  p-3">
                        {serverError &&
                            <p className="border border-danger rounded-xl p-3">{message}</p>
                        }
                    </div>


                </form>
            </div>

        </ScrollToLeft>
    )
}

export default LoginMain
