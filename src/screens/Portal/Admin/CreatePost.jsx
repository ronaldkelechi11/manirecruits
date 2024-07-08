/* eslint-disable react/jsx-key */
import { useState } from 'react'
import AnimatedDiv from '../../../utils/animations/AnimatedDiv'
import TopNavBar from '../../../utils/components/TopNavbar'
import NormalInput from '../../../utils/components/NormalInput'
import manirecruitsLogo from '../../../assets/images/logo_black_nobg.png'
import { Send } from '@iconsans/react/linear'


const CreatePost = () => {
    const qualification_levels = ["Qualification Level", "FSLC", "WAEC/NECO", "HND", "OND", "B.A", "B.SC", "Masters Degree",
        "Phd"]
    const experience_level = ["Experience Level", "Entry level", "Intermediate Level"]

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


    const [post, setPost] = useState(
        {
            title: "",
            summary: "",
            minimum_qualification: "",
            experience_level: "",
            experience_length: "2",
            skills: [
                "Proficiency in bla bla bla",
                "Proficiency in bla bla bla",
                "Good commuinication and Collaboration skills",
            ],
            likes: 0,
            views: 0,
            applications: 0,
            location: "",
            organisation_logo: { manirecruitsLogo },
            organisation: "Mani Recruits and Training",
            industry: "Human Resource and Management",
            job_industry: "",
            job_upload_date: "",
            salaray_range: "",
            working_hours: "",
            working_days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        })
    return (
        <AnimatedDiv className='w-screen'>
            <TopNavBar title={'Create Post'} />

            <form className="w-full h-full flex flex-col gap-3 p-3 mt-16 mb-5">
                <p className='text-center text-lg text-black font-kanit'>Fill in the Job criteria below</p>

                <img src={manirecruitsLogo} alt="" className='w-20 h-20 rounded-none self-center' />
                <NormalInput type={'text'} value={'Mani Recruits and Training'} />
                <NormalInput type={'text'} value={'Human Resource and Management'} />

                <NormalInput type="text" placeholder='Title' />
                <textarea className='min-h-24 border-grey border p-5 rounded-lg' placeholder='Job summary'></textarea>

                <select className='h-16 border-grey border p-5 rounded-lg'>
                    {qualification_levels.map(level => {
                        return (
                            <option value={level}>{level}</option>
                        )
                    })}
                </select>

                <select className='h-16 border-grey border p-5 rounded-lg'>
                    {experience_level.map(level => {
                        return (
                            <option value={level}>{level}</option>
                        )
                    })}
                </select>

                <NormalInput type={'number'} placeholder={"Experience Years"} maxLength={2} />
                <NormalInput type={'text'} placeholder={'Location'} />
                <NormalInput type={'text'} placeholder={'Job Industry'} />

                <NormalInput type={'text'} placeholder={'Minimum Salary (30,000)'} />

                <NormalInput type={'text'} placeholder={'Maximum Salary (200,000)'} />

                {/* Working Days */}
                <div className="flex-col flex items-center border border-grey p-3">
                    <p className='text-xl text-black font-extrabold uppercase'>Working days</p>
                    {days.map(day => {
                        return (
                            <div className="flex flex-row  gap-5">
                                {/* TODO: Work on this logic */}
                                <input type="checkbox" />
                                <p>{day}</p>
                            </div>
                        )
                    })}
                </div>


                {/* Working Hours */}
                <div className="flex-col flex items-center border border-grey p-3">
                    <p className='text-xl text-black font-extrabold uppercase'>Working hours</p>
                    <label htmlFor="">From</label>
                    <input type="time" name="" id="" />
                    <br />

                    <label htmlFor="">To</label>
                    <input type="time" name="" id="" />
                </div>

                <button type="submit" className='bg-primary text-white text-xl rounded-lg h-16 uppercase font-extrabold'>Upload</button>
            </form>

        </AnimatedDiv >
    )
}

export default CreatePost
