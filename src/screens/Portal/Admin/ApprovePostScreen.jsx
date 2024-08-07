import { useEffect, useState } from 'react'
import TopNavBar from '../../../utils/components/TopNavbar'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ScrollToLeft from '../../../utils/animations/ScrollToLeft'

const ApprovePostScreen = () => {
    const navigate = useNavigate()
    const webLocation = useLocation()


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
            workingDays: []
        }
    )
    useEffect(() => {
        setPost(webLocation.state.post)
    }, [webLocation])


    function uploadToBackend() {
        axios.post(`${import.meta.env.VITE_API_URL}/admin/addpost`, { post: post })
            .then((result) => {
                console.log(result);
                navigate('/admin')
            }).catch((err) => {
                console.log(err);
            });
    }

    return (
        <ScrollToLeft className="w-screen bg-white flex mb-10">
            <TopNavBar />

            <div className="mt-16 w-full h-full flex flex-col gap-3 p-3">

                <div className="h-32 w-32 rounded-full bg-white">
                    <img src={post.organisationLogo} alt="" className="w-full h-full rounded-full" />
                </div>

                <h1 className='text-2xl text-black font-poppins font-bold'>
                    {post.organisationName}
                </h1>

                <h3 className="text-slate-400 font-poppins text-sm">
                    {post.organisationIndustry}
                </h3>



                <p className="text-3xl mt-5 font-poppins capitalize font-extrabold text-black">
                    <strong>{post.title}</strong>
                </p>

                <p className="font-poppins">{post.summary}</p>

                {/* Ads */}
                <div className="h-48 bg-slate-500 text-slate-700 flex justify-center items-center">
                    <p>Ad</p>
                </div>

                <p><strong>Job Industry: </strong> {post.jobIndustry}</p>

                <p><strong>Preffered Gender:</strong> {post.prefferedGender}</p>

                <p><strong>Salary Range: </strong> {post.salaryRange} </p>

                <p><strong>Plus Commision: </strong>{post.plusCommision.toString()}</p>

                <p><strong>Minimum Qualification:</strong> {post.minimumQualification}</p>

                <p><strong>Experience Level:</strong> {post.experienceLevel}</p>

                <p><strong>Minimum Experience Length:</strong> {post.experienceLength} years</p>

                <p><strong>Job Location: </strong> {post.location}</p>


                {/* Ads */}
                <div className="h-48 bg-slate-500 text-slate-700 flex justify-center items-center">
                    <p>Ad</p>
                </div>


                <p className='flex flex-row'>
                    <strong>Working Days: </strong>
                    <div className="flex flex-col">
                        {
                            post.workingDays.map(day => {
                                return (
                                    <p className='ml-2' key={post.workingDays.indexOf(day)}>{day}</p>
                                )
                            })
                        }
                    </div>
                </p>

                <p><strong>Skills:</strong></p>
                <p>
                    {
                        post.skills
                    }
                </p>

                <div className="flex flex-row items-center gap-3 text-[8px] text-slate-400">Post uploaded: {post.jobUploadDate}</div>


                <div className="w-full bg-primary text-white font-kanit flex justify-center items-center rounded-lg p-3 text-xl cursor-pointer" onClick={uploadToBackend}>
                    Upload
                </div>

            </div>

        </ScrollToLeft>
    )
}

export default ApprovePostScreen
