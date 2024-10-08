import { useNavigate } from 'react-router-dom'
import BottomNavBar from '../../../utils/components/BottomNavBar'
import { useEffect, useState } from 'react'
import CustomLinkItem from '../../../utils/components/CustomLinkItem'
import { ArrowLeft } from '@iconsans/react/bold'
import { TickCircle } from '@iconsans/react/linear'
import axios from 'axios'

const Settings = () => {
    const navigate = useNavigate()
    document.title = "Settings - Mani Recruits and Training"

    const [user, setUser] = useState({
        // PERSONAL INFORMATION
        firstname: 'placeholde',
        lastname: 'r',
        email_address: 'placeholder',
        title: 'placeholder',
        profile_picture: '',
        date_of_birth: '',
        date_account_created: '',
        role: "User",
        isVerified: false,
        followers: 149,
        following: 200,
        religeon: "Christianity",
        state_of_origin: "Abuja",
        posts: [],
        phone_number: '+2349023456789',
        address: {
            street: '',
            city: '',
            state: '',
            zipCode: '000000',
        },
    })

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/dashboard/settings/${localStorage.getItem("USER_EMAIL")}`)
            .then(({ data }) => {
                setUser(data[0])
            }).catch((err) => {
                console.log(err);
                alert(err?.message);
            });
    }, [])


    // Click functions
    function logOut() {
        alert('Are you sure you want to log out now?')
    }


    return (
        <div className='w-screen flex mb-20 flex-col bg-primary'>

            {/* Show followers and following */}
            <div className="h-64 w-full bg-primary flex flex-col justify-center items-center font-kanit text-white p-5">
                <p className='text-2xl text-slate-200'>Hello,👋</p>
                <div className='text-3xl capitalize flex flex-row justify-center items-center'>
                    <p>{user.firstname}. {user.lastname.charAt(0)}</p>
                    <div className='ml-3 text-3xl'>
                        <TickCircle className={user.isVerified ?
                            "text-blue-400" :
                            "text-red-500"} />
                    </div>
                </div>
                <p className='text-lg text-center mt-5 text-white'>
                    {user.title}
                </p>
            </div>



            <div className="w-full z-10 p-3 bg-white flex flex-col gap-5 rounded-t-xl">

                <div className="">
                </div>

                {
                    /* <div className="w-full grid grid-cols-2">
                        <p className="font-kanit text-primary text-xl text-center">Followers</p>
    
                        <p className="font-kanit text-primary text-xl text-center">Following</p>
    
                        <p className="font-poppins text-xl text-center">{user.followers}</p>
                        <p className="font-poppins text-xl text-center">{user.following}</p>
                    </div> */
                }


                <p className='text-2xl font-kanit text-primary'>Profile Settings</p>

                <CustomLinkItem text={'User Title'} description={'Change User Current Title'} href={'updateUserTitle'} />

                <CustomLinkItem text={'Contact Details'} description={'Update user Contact Details'}
                    href={'updatecontactdetails'} />

                <CustomLinkItem text={'Role'} description={'Set the User role type'} href={'setrole'} />

                <CustomLinkItem text={'Skills'} description={'Add User Skills'} href={'setskills'} />

                <CustomLinkItem text={'Job Location'} description={"User's Preffered Job Locations"} href={'setskills'} />

                <CustomLinkItem text={'Hobbies'} description={''} href={'#'} />

                <CustomLinkItem text={'Salary Range'} description={'Set user Salary Range'} href={'#'} />

                <CustomLinkItem text={'External Links'} description={'Set foreign links for portfolios'} href={'#'} />


                <div className="border-2 border-primary bg-white text-primary w-full p-5 rounded-xl font-poppins flex justify-center items-center">View Profile</div>

                <div className="bg-primary w-full p-5 rounded-xl text-white font-poppins flex justify-center items-center" onClick={logOut}>Log Out</div>

            </div>


            <BottomNavBar />
        </div>
    )
}



export default Settings
