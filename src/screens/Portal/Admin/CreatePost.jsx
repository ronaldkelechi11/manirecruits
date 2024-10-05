/* eslint-disable react/jsx-key */
import { useState } from 'react'
import TopNavBar from '../../../utils/components/TopNavbar'
import NormalInput from '../../../utils/components/NormalInput'
import manirecruitsLogo from '../../../../public/assets/images/logo_black_nobg.png'
import ScrollToLeft from '../../../utils/animations/ScrollToLeft'
import { Form, useNavigate } from 'react-router-dom'
import TestPostScreen from './ApprovePostScreen'


const CreatePost = () => {
    const navigate = useNavigate()


    const qualification_levels = ["Qualification Level", "None", "FSLC", "WAEC/NECO", "HND", "OND", "B.A", "B.SC", "Masters Degree", "Phd"]
    const experience_level = ["Experience Level", "None", "Entry level", "Intermediate Level", "Mid Level", "Senior level", "Executive Level"]
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const genders = ["Preffered Job Gender", "None", "Male", "Female"]
    const currencys = ["Salary Currency", "USD", "NGN", "EUR", "GBP"]

    // Form States
    const [title, setTitle] = useState("")
    const [summary, setSummary] = useState()
    const [minimumQualification, setMinimumQualification] = useState("")
    const [experienceLevel, setExperienceLevel] = useState("")
    const [experienceLength, setExperienceLength] = useState("")
    const [skills, setSkills] = useState("")
    const [applications, setApplications] = useState(0)
    const [location, setLocation] = useState()
    const [organisationLogo, setOrganisationLogo] = useState(manirecruitsLogo)
    const [organisationName, setOrganisationName] = useState("Mani Recruits and Training")
    const [organisationIndustry, setOrganisationIndustry] = useState("Human Resource and Management")
    const [jobIndustry, setJobIndustry] = useState("")
    const [jobUploadDate, setJobUploadDate] = useState("")
    const [salaryMinRange, setSalaryMinRange] = useState("")
    const [salaryMaxRange, setSalaryMaxRange] = useState("")
    const [salaryRange, setSalaryRange] = useState("")
    const [prefferedGender, setPrefferedGender] = useState("")
    const [plusCommision, setPlusCommision] = useState(false)
    const [salaryCurrency, setSalaryCurrency] = useState("")
    const [workingDays, setWorkingDays] = useState([])
    const [contactEmail, setContactEmail] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [contactWhatsapp, setContactWhatsapp] = useState("")


    function addToWorkingDays(date) {
        // Search if the date is already on the list then if yes remove 0 if no add -1
        if (workingDays.indexOf(date) === -1) {
            workingDays.push(date)
        }
        else {
            workingDays.pop(date)
        }
    }

    function submitForm(e) {
        e.preventDefault()

        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: `${salaryCurrency}`,
        });

        // Form Validation
        var date = new Date()
        var dd = date.getDay()
        var mm = date.getMonth()
        var yyyy = date.getFullYear()


        const post = {
            title: title,
            summary: summary,
            minimumQualification: minimumQualification,
            experienceLevel: experienceLevel,
            experienceLength: experienceLength,
            skills: skills,
            applications: applications,
            location: location,
            organisationLogo: organisationLogo,
            organisationName: organisationName,
            organisationIndustry: organisationIndustry,
            jobIndustry: jobIndustry,
            jobUploadDate: `${dd}/${mm}/${yyyy}`,
            salaryRange: `${formatter.format(salaryMinRange)} - ${formatter.format(salaryMaxRange)}`,
            prefferedGender: prefferedGender,
            plusCommision: plusCommision,
            salaryCurrency: salaryCurrency,
            contactInformation: {
                contactEmail,
                contactNumber,
                contactWhatsapp
            },
            workingDays: workingDays
        }

        navigate('approve', { state: { post } })
    }


    return (
        <ScrollToLeft className='w-screen'>
            <TopNavBar title={'Create Post'} />

            <form className="w-full h-full flex flex-col gap-3 p-3 mt-16 mb-5" onSubmit={submitForm}>
                <p className='text-center text-lg text-black font-kanit'>Fill in the Job criteria below</p>


                <img src={organisationLogo} alt="" className='w-20 h-20 rounded-none self-center' />
                <NormalInput type={'text'} value={organisationName} />
                <NormalInput type={'text'} value={organisationIndustry} />

                <NormalInput type="text" placeholder='Title' maxLength={64} required value={title} onChange={(e) => { setTitle(e.target.value) }} />

                <textarea className='min-h-24 border-grey border p-5 rounded-lg' required maxLength={256} placeholder='Job summary' value={summary} onChange={(e) => { setSummary(e.target.value) }}></textarea>

                <select className='h-16 border-grey border p-5 rounded-lg  text-slate-400' onChange={(e) => { setMinimumQualification(e.target.value) }} required>
                    {qualification_levels.map(level => {
                        return (
                            <option value={level}>{level}</option>
                        )
                    })}
                </select>

                <select className='h-16 border-grey border p-5 rounded-lg  text-slate-400' onChange={(e) => { setExperienceLevel(e.target.value) }}>
                    {experience_level.map(level => {
                        return (
                            <option value={level}>{level}</option>
                        )
                    })}
                </select>

                <NormalInput type={'number'} placeholder={"Experience Years (Required)"} maxLength={20} required value={experienceLength} onChange={(e) => { setExperienceLength(e.target.value) }} />

                <select className='h-16 border-grey border p-5 rounded-lg text-slate-400' onChange={(e) => { setPrefferedGender(e.target.value) }}>
                    {genders.map(gender => {
                        return (
                            <option value={gender}>{gender}</option>
                        )
                    })}
                </select>

                <NormalInput type={'text'} placeholder={'Location'} value={location} onChange={(e) => { setLocation(e.target.value) }} />

                <NormalInput type={'text'} placeholder={'Job Industry'} value={jobIndustry} onChange={(e) => { setJobIndustry(e.target.value) }} />

                {/* Salary Currency */}
                <select className='h-16 border-grey border p-5 rounded-lg text-slate-400' onChange={(e) => { setSalaryCurrency(e.target.value) }}>
                    {currencys.map(currency => {
                        return (
                            <option value={currency}>{currency}</option>
                        )
                    })}
                </select>

                <NormalInput type={'text'} min='50000' placeholder={'Minimum Salary (50,000)'} value={salaryMinRange} onChange={(e) => { setSalaryMinRange(e.target.value) }} />

                <NormalInput type={'text'} max='10000000' placeholder={'Maximum Salary (200,000)'} value={salaryMaxRange} onChange={(e) => { setSalaryMaxRange(e.target.value) }} />


                <div className="flex flex-row gap-5 justify-center">
                    <input type="checkbox" checked={plusCommision} onChange={(e) => { setPlusCommision(!plusCommision) }} />
                    <p>Plus Commision</p>
                </div>

                <textarea className='min-h-24 border-grey border p-5 rounded-lg' placeholder='Required Skills' value={skills} onChange={(e) => { setSkills(e.target.value) }} required></textarea>



                {/* Contact Information */}
                <p className='font-extrabold text-center'>Contact Details</p>

                <NormalInput type={'text'} placeholder={'Contact Email Address'} value={contactEmail} onChange={(e) => { setContactEmail(e.target.value) }} />

                <NormalInput type={'text'} placeholder={'Contact Phone Number'} value={contactNumber} onChange={(e) => { setContactNumber(e.target.value) }} />

                <NormalInput type={'text'} placeholder={'Contact Whatsapp'} value={contactWhatsapp} onChange={(e) => { setContactWhatsapp(e.target.value) }} />


                {/* Working Days */}
                {/* Add working days arraylist instead */}
                <div className="flex-col flex items-center border border-grey p-3">
                    <p className='text-xl text-black font-extrabold uppercase'>Working days</p>
                    {days.map(day => {
                        return (
                            <div className="flex flex-row  gap-5">
                                <input type="checkbox" value={day}
                                    onClick={(e) => {
                                        addToWorkingDays(e.target.value.toString())
                                    }} />
                                <p>{day}</p>
                            </div>
                        )
                    })}
                </div>



                <button type="submit" className='bg-primary text-white text-xl rounded-lg h-16 uppercase font-extrabold font-poppins'>Upload</button>
            </form>

        </ScrollToLeft >
    )
}

export default CreatePost
