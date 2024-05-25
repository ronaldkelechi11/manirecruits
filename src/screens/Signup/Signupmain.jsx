import { Link, useNavigate } from "react-router-dom"
import BackButton from "../../utils/components/BackButton"
import { useState } from "react"
import PasswordInput from "../../utils/components/PasswordInput"
import NormalInput from "../../utils/components/NormalInput"
import axios from "axios"
import CustomButton from "../../utils/components/CustomButton"
import ScrollToLeft from "../../utils/animations/ScrollToLeft";

const Signupmain = () => {
    const navigate = useNavigate()
    document.title = "Login - Mani Recruits and Training"


    // Input Values
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // Error checking
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)
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
        if (password.length <= 8) {
            setPasswordError(true)

            setTimeout(() => {
                setPasswordError(false)
            }, 2000);
            return false
        }
        if (confirmPassword != password) {
            setConfirmPasswordError(true)

            setTimeout(() => {
                setConfirmPasswordError(false)
            }, 2000);
            return false
        }
        else {
            axios.post(`${import.meta.env.VITE_API_URL}/signup`, { email: email, password: password })
                .then((result) => {
                    localStorage.setItem("USER_EMAIL", email)
                    console.log(result);
                    navigate('2')
                }).catch((err) => {
                    setMessage(err.message)
                    setServerError(true)
                });
        }

    }

    return (
        <ScrollToLeft className="w-screen h-screen bg-white flex flex-col justify-center items-center">
            <BackButton />


            <div className="flex flex-col w-full">
                <p className="text-6xl font-kanit text-center text-primary">Hello,</p>
                <p className="text-xl font-kanit text-center text-gray-400">Let&apos;s get you signed up</p>

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



                    {/* Confirm Password */}
                    <PasswordInput
                        placeholder={'Confirm Password'}
                        value={confirmPassword}
                        error={confirmPasswordError}
                        onFocus={() => { setConfirmPasswordError(false) }}
                        onChange={(e) => { setConfirmPassword(e.target.value) }} />

                    <div className="text-center font-kanit text-info">
                        {confirmPasswordError &&
                            <p>Confirm Password should match Password</p>
                        }
                    </div>

                    {/* Submit Button */}
                    <CustomButton text={"Sign Up"} />

                    <p className="text-black text-center font-poppins">
                        Have an Account? <Link to="/login" className="text-info">Sign In</Link>
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

export default Signupmain
