import { Link, useNavigate } from "react-router-dom"
import BackButton from "../../utils/components/BackButton"
import { useState } from "react"
import PasswordInput from "../../utils/components/PasswordInput"
import NormalInput from "../../utils/components/NormalInput"

const Signupmain = () => {
    const navigate = useNavigate()

    // Input Values
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // Error checking
    const [passwordError, setPasswordError] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState(false)


    function formSubmit(e) {
        e.preventDefault();
        console.log(password, confirmPassword);

        if (password.length <= 8) {
            setPasswordError(true)
        }
        if (confirmPassword != password) {
            setConfirmPasswordError(true)
        }

        navigate('2')
    }

    return (
        <div className="w-screen h-screen bg-white flex flex-col justify-center items-center">
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



                    {/* Password */}
                    <PasswordInput
                        placeholder={'Password'}
                        value={password}
                        error={passwordError}
                        onFocus={() => { setPasswordError(false) }}
                        onChange={(e) => { setPassword(e.target.value) }} />

                    <div className="text-center font-kanit text-info">
                        {passwordError &&
                            <p>Password should be greater than 8 digits</p>
                        }
                    </div>



                    {/* Confirm Password */}
                    <PasswordInput
                        placeholder={'ConfirmPassword'}
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
                    <button type="submit" className="bg-primary text-white rounded-lg h-16 font-kanit uppercase">Sign Up</button>

                    <Link to={'#'} className="text-black text-center font-poppins">
                        Have an Account? <a href="#" className="text-info">Sign In</a>
                    </Link>
                </form>
            </div>

        </div>
    )
}

export default Signupmain
