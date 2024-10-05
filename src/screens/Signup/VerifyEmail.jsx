import ScrollToLeft from "../../utils/animations/ScrollToLeft"
import VerifyIcon from "/public/assets/svgs/verify.svg"
import CustomButton from "../../utils/components/CustomButton"
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import PinInput from "react-pin-input"

const VerifyEmail = () => {
    const navigate = useNavigate()
    document.title = "Verify Email - Mani Recruits and Training"
    const USER_EMAIL = localStorage.getItem("USER_EMAIL")
    const USER_VERIFIED = localStorage.getItem("USER_VERIFIED")


    // if user verified don't show this page
    function VerifyEmail() {

    }

    return (
        <ScrollToLeft className="w-screen md:h-screen h-full bg-white flex flex-col justify-center items-center p-3">

            <Link to={"/home"} className="fixed top-8 right-8 text-xl font-kanit text-info underline capitalize">Skip</Link>

            <div className="flex flex-col gap-5 w-full justify-center p-5">
                <p className="text-primary font-kanit text-2xl md:text-4xl mt-10 self-center">Verify your Email</p>

                <motion.img
                    initial={{ scale: 0.2 }}
                    animate={{ scale: 1.2 }}
                    transition={{ duration: 0.7, type: 'spring', delay: 0.7 }}
                    src={VerifyIcon} className="md:w-32 md:h-32 w-24 h-24 self-center" />

                <p className="text-primary text-sm md:text-lg text-center font-poppins">
                    Thank you for registering with Mani Recruits and Training To ensure the security of your account and provide you with the best possible experience, we need to verify your email address.
                </p>

                <p className="text-center text-sm md:text-lg text-primary gap-2 flex flex-col font-poppins">
                    Open your email client and locate the email from Mani Recruits And Training containing a 4-digit OTP code.
                </p>

                {/* PIN INPUT */}
                <PinInput length={4} placeholder="0" style={{ textAlign: 'center', borderColor: 'red' }} type="number" />

                <CustomButton text={'Verify'} onClicked={VerifyEmail} />
            </div>

        </ScrollToLeft >
    )
}

export default VerifyEmail
