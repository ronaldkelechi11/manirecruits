import { useState } from 'react'
import AnimatedDiv from '../../../utils/animations/AnimatedDiv'
import TopNavBar from '../../../utils/components/TopNavbar'

const TestPostScreen = () => {
    const [post, setPost] = useState(
        {
            title: "Content Creation and Social media management",
            summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas repellat, sapiente nisi expedita inventore blanditiis nam omnis ipsam, minus facilis enim harum a atque. Libero rerum architecto aliquam, beatae perferendis soluta incidunt, odio officiis autem facere quidem animi adipisci. Soluta reprehenderit quibusdam minus animi delectus. Distinctio fuga vitae, eum accusamus culpa vel placeat qui, beatae excepturi exercitationem facere nostrum in esse minus dolorem iure necessitatibus! Debitis fuga dolores explicabo accusamus laborum odit maiores voluptatem sapiente nostrum, aliquid sit accusantium quasi impedit eligendi architecto porro. Alias distinctio nihil autem ut rem eaque. Porro tenetur laborum recusandae aut nihil exercitationem odit dolor soluta obcaecati ab distinctio perferendis maiores, repellat temporibus maxime et corporis nemo odio assumenda optio.",
            minimum_qualification: "HND",
            experience_level: "Entry Level",
            experience_length: "2",
            skills: [
                "Proficiency in bla bla bla",
                "Proficiency in bla bla bla",
                "Good commuinication and Collaboration skills",
            ],
            applications: 1,
            location: "Abuja",
            organisation_logo: "/src/assets/images/wehub_logo.jpg",
            organisation: "WeHub Studio",
            industry: "Software and Data",
            job_industry: "Branding and Design",
            job_upload_date: "09-06-2024",
            salaray_range: "150,000 - 200,000",
            working_hours: "9:00am - 6:00pm",
            working_days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        })

    return (
        <AnimatedDiv className="w-screen bg-white flex mb-10">
            <TopNavBar />

            <div className="mt-16 w-full h-full flex flex-col gap-3 p-3">

                <div className="h-32 w-32 rounded-full bg-white">
                    <img src="/src/assets/images/wehub_logo.jpg" alt="" className="w-full h-full rounded-full border-primary border-4" />
                </div>

                <h1 className='text-4xl text-black font-poppins font-bold'>
                    {post.organisation}
                </h1>

                <h3 className="text-slate-400 font-poppins text-xl">
                    {post.industry}
                </h3>

                <div className="flex flex-row items-center gap-3 text-sm text-slate-400">Post uploaded: {post.job_upload_date}</div>

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
                        {post.working_days.map(day => {
                            return (
                                <p key={post.working_days.indexOf(day)}>{day}</p>
                            )
                        })}
                    </div>
                </p>

                <p><strong>Skills:</strong></p>
                {
                    post.skills.map(skill => {
                        return (
                            <li key={1}>
                                {skill}
                            </li>
                        )
                    })
                }


                <div to={'123'} className="w-full bg-primary text-white font-kanit flex justify-center items-center rounded-lg p-3 text-xl">
                    Apply
                </div>

            </div>

        </AnimatedDiv>
    )
}

export default TestPostScreen
