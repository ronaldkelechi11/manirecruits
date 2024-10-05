import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import TopNavBar from '../../../utils/components/TopNavbar'
import ScrollToLeft from '../../../utils/animations/ScrollToLeft'
import axios from 'axios'

const PostScreen = () => {
    const webLocation = useLocation()
    const navigate = useNavigate()
    const { _id } = useParams()

    const [showContactInfo, setShowContactInfo] = useState(false);
    const [whatsappLink, setWhatsappLink] = useState("")

    const [post, setPost] = useState(
        {
            title: '',
            summary: '',
            minimumQualification: '',
            experienceLevel: '',
            experienceLength: '',
            skills: '',
            location: '',
            organisationLogo: '',
            organisationName: '',
            organisationIndustry: '',
            jobIndustry: '',
            jobUploadDate: '',
            salaryRange: '',
            prefferedGender: '',
            plusCommision: '',
            contactInformation: {
                contactEmail: '',
                contactNumber: '',
                contactWhatsapp: ''
            },
            workingDays: []
        })

    useEffect(() => {
        // No Stored post, coming from a link or so
        if (webLocation.state.post == '') {
            axios.get(`${import.meta.env.VITE_API_URL}/dashboard/search/${_id}`).then((result) => {
                console.log(result);
            }).catch((err) => {
                console.log(err);
            });
        }

        // Coming from Homscreen
        else {
            setPost(webLocation.state.post)
        }
    }, [])



    function applyForPost() {
        setShowContactInfo(true)
        setWhatsappLink(`https://wa.me/${post.contactInformation.contactWhatsapp}`)
    }

    return (
        <ScrollToLeft className="w-screen bg-white flex mb-10">
            <TopNavBar />

            <div className="mt-16 w-full h-full flex flex-col gap-3 p-3">

                <div className="h-32 w-32 rounded-full">
                    <img src={post?.organisationLogo} alt="" className="w-full h-full rounded-full border-4" />
                </div>

                <h1 className='text-2xl text-black font-poppins font-bold'>
                    {post?.organisationName}
                </h1>

                <h3 className="text-slate-400 font-poppins text-sm">
                    {post?.organisationIndustry}
                </h3>



                <p className="text-3xl mt-5 font-poppins capitalize font-extrabold text-black">
                    <strong>{post?.title}</strong>
                </p>

                <p className="font-poppins">{post?.summary}</p>


                {/* Ads */}
                <div className="h-48 bg-slate-500 text-slate-700 flex justify-center items-center">
                    <p>Ad</p>
                </div>

                <p><strong>Job Industry: </strong> {post?.jobIndustry}</p>

                <p><strong>Salary Range: </strong> {post?.salaryRange}</p>

                <p><strong>Preffered Gender:</strong> {post.prefferedGender}</p>

                <p><strong>Job Location: </strong> {post.location}</p>

                {/* Ads */}
                <div className="h-48 bg-slate-500 text-slate-700 flex justify-center items-center">
                    <p>Ad</p>
                </div>


                <p><strong>Minimum Qualification:</strong> {post?.minimumQualification}</p>

                <p><strong>Experience Level:</strong> {post?.experienceLevel}</p>

                <p><strong>Minimum Experience Length:</strong> {post?.experienceLength} years</p>

                <p className='flex flex-col bg-gray-100 rounded-lg p-3'>
                    <strong>Working Days:</strong>
                    <div className="flex flex-col">
                        {post.workingDays?.map(workDay => {
                            return (
                                <p key={1}>{workDay}</p>
                            )
                        })}
                    </div>
                </p>

                <p className='bg-gray-100 rounded-lg p-3'><strong>Skills:</strong> <br />
                    {
                        post?.skills
                    }
                </p>

                <div className="flex flex-row items-center gap-3 text-[8px] text-slate-400">
                    Post uploaded: {post?.jobUploadDate}
                </div>

                {showContactInfo && (
                    <div className="flex flex-col gap-3 bg-gray-100 rounded-lg p-3">
                        <p> <strong>Contact Email: </strong>
                            <a href="mailto:" className='underline'>{post.contactInformation.contactEmail}</a>
                        </p>

                        <p><strong>Contact Number: </strong>
                            <a href="phone:"></a>{post.contactInformation.contactNumber}
                        </p>

                        <p className='underline'><strong><a href={whatsappLink}>Chat on Whatsapp</a></strong></p>
                    </div>
                )
                }


                {!showContactInfo && (
                    <div className="w-full bg-primary text-white font-kanit flex justify-center items-center rounded-lg p-3 text-xl" onClick={applyForPost}>
                        Apply
                    </div>
                )
                }

            </div>

        </ScrollToLeft>
    )
}

export default PostScreen
