import { useEffect, useState } from 'react'
import AnimatedDiv from '../../../utils/animations/AnimatedDiv'
import TopNavBar from '../../../utils/components/TopNavbar'
import { useLocation } from 'react-router-dom'

const ApprovePostScreen = () => {
    const webLocation = useLocation()
    const [post, setPost] = useState(
        {
            title: '',
            summary: '',
            minimumQualification: '',
            experienceLevel: '',
            experienceLength: '',
            skills: '',
            applications: '',
            location: '',
            organisationLogo: '',
            organisationName: '',
            organisationIndustry: '',
            jobIndustry: '',
            jobUploadDate: '',
            salaryRange: '',
            prefferedGender: '',
            plusCommision: '',
            salaryCurrency: '',
            workingDays: ''
        }
    )
    useEffect(() => {
        setPost(webLocation.state.post)
        console.log(post);
    }, [webLocation])


    return (
        <AnimatedDiv className="w-screen bg-white flex mb-10">
            <TopNavBar />

            <div className="mt-16 w-full h-full flex flex-col gap-3 p-3">

                <div className="h-32 w-32 rounded-full bg-white">
                    <img src={post.organisationLogo} alt="" className="w-full h-full rounded-full border-primary border-4" />
                </div>

                <h1 className='text-4xl text-black font-poppins font-bold'>
                    {post.organisationName}
                </h1>

                <h3 className="text-slate-400 font-poppins text-xl">
                    {post.industry}
                </h3>

                <div className="flex flex-row items-center gap-3 text-sm text-slate-400">Post uploaded: {post.jobUploadDate}</div>

                <p className="text-3xl mt-5 font-poppins capitalize font-extrabold text-black">
                    <strong>{post.title}</strong>
                </p>

                <p className="font-poppins">{post.summary}</p>

                <p><strong>Job Industry: </strong> {post.job_industry}</p>

                <p><strong>Salary Range: </strong> {post.salaray_range}</p>

                <p><strong>Minimum Qualification:</strong> {post.minimum_qualification}</p>

                <p><strong>Experience Level:</strong> {post.experience_level}</p>

                <p><strong>Minimum Experience Length:</strong> {post.experience_length} years</p>

                <p><strong>Working Hours: </strong> {post.working_hours}</p>

                <p className='flex flex-col'>
                    <strong>Working Days:</strong>
                    <div className="flex flex-col">
                        {/* {post.workingDays.map(day => {
                            return (
                                <p key={post.workingDays.indexOf(day)}>{day}</p>
                            )
                        })} */}
                    </div>
                </p>

                <p><strong>Skills:</strong></p>
                {/* {
                    post.skills.map(skill => {
                        return (
                            <li key={1}>
                                {skill}
                            </li>
                        )
                    })
                } */}


                <div to={'123'} className="w-full bg-primary text-white font-kanit flex justify-center items-center rounded-lg p-3 text-xl">
                    Apply
                </div>

            </div>

        </AnimatedDiv>
    )
}

export default ApprovePostScreen
