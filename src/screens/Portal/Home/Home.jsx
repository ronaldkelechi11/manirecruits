import { useNavigate } from "react-router-dom"
import BottomNavBar from "../../../utils/components/BottomNavBar"
import { Search1 } from "@iconsans/react/linear"
import { useState } from "react"
import PostItem from "../../../utils/components/PostItem"

const Home = () => {
    const navigate = useNavigate()
    document.title = "Home - Mani Recurits and Training"

    // For testing
    const [posts, setPosts] = useState(
        [
            {
                title: "lorem ipsum",
                summary: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas repellat, sapiente nisi expedita inventore blanditiis nam omnis ipsam, minus facilis enim harum a atque. Libero rerum architecto aliquam, beatae perferendis soluta incidunt, odio officiis autem facere quidem animi adipisci. Soluta reprehenderit quibusdam minus animi delectus. Distinctio fuga vitae, eum accusamus culpa vel placeat qui, beatae excepturi exercitationem facere nostrum in esse minus dolorem iure necessitatibus! Debitis fuga dolores explicabo accusamus laborum odit maiores voluptatem sapiente nostrum, aliquid sit accusantium quasi impedit eligendi architecto porro. Alias distinctio nihil autem ut rem eaque. Porro tenetur laborum recusandae aut nihil exercitationem odit dolor soluta obcaecati ab distinctio perferendis maiores, repellat temporibus maxime et corporis nemo odio assumenda optio.",
                minimum_qualification: "HND",
                experience_level: "Entry Level",
                experience_length: "2",
                skills: [
                    "Proficiency in bla bla bla",
                    "Proficiency in bla bla bla",
                    "Good commuinication and Collaboration skills",
                ],
                likes: 2,
                views: 4,
                applications: 1
            },
            {
                title: "lorem ipsum",
                summary: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui itaque dolores nobis id vel in nemo, explicabo ratione rem fugit quos maxime, voluptatibus unde non porro, voluptatum dolor iste! Numquam, nesciunt rem voluptatem quas dolorem ipsa rerum maxime possimus sint beatae necessitatibus modi illum, est sit laudantium, vel sunt natus qui porro a iure reprehenderit deleniti hic ex. Sint optio reprehenderit nihil atque laudantium nesciunt, veniam amet, ducimus aspernatur vero quia exercitationem consectetur repellat asperiores harum repellendus iusto beatae corporis! Laborum distinctio, accusantium, aspernatur quos explicabo, atque nam tempore repellat necessitatibus corporis ipsum omnis. Delectus ea in rem qui dolorem!",

                minimum_qualification: "HND",
                experience_level: "Entry Level",
                experience_length: "2",
                skills: [
                    "Proficiency in bla bla bla",
                    "Proficiency in bla bla bla",
                    "Good commuinication and Collaboration skills",
                ],
                likes: 3,
                views: 10,
                applications: 4

            }, {
                title: "lorem ipsum",
                summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad velit earum ut autem animi, at aspernatur facilis quos molestias, ullam impedit quia porro, aut accusamus natus adipisci veniam et. Quod non accusantium hic esse. Blanditiis omnis error doloribus itaque, nemo dolores excepturi nam! Iste dicta, error nisi commodi earum neque iure, tempore ab animi adipisci vero voluptates, fugit velit ut.",
                minimum_qualification: "HND",
                experience_level: "Entry Level",
                experience_length: "2",
                skills: [
                    "Proficiency in bla bla bla",
                    "Proficiency in bla bla bla",
                    "Good commuinication and Collaboration skills",
                ],
                likes: 3,
                views: 10,
                applications: 4

            }, {
                title: "lorem ipsum",
                summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad velit earum ut autem animi, at aspernatur facilis quos molestias, ullam impedit quia porro, aut accusamus natus adipisci veniam et. Quod non accusantium hic esse. Blanditiis omnis error doloribus itaque, nemo dolores excepturi nam! Iste dicta, error nisi commodi earum neque iure, tempore ab animi adipisci vero voluptates, fugit velit ut.",
                minimum_qualification: "HND",
                experience_level: "Entry Level",
                experience_length: "2",
                skills: [
                    "Proficiency in bla bla bla",
                    "Proficiency in bla bla bla",
                    "Good commuinication and Collaboration skills",
                ],
                likes: 3,
                views: 10,
                applications: 4

            }, {
                title: "lorem ipsum",
                summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad velit earum ut autem animi, at aspernatur facilis quos molestias, ullam impedit quia porro, aut accusamus natus adipisci veniam et. Quod non accusantium hic esse. Blanditiis omnis error doloribus itaque, nemo dolores excepturi nam! Iste dicta, error nisi commodi earum neque iure, tempore ab animi adipisci vero voluptates, fugit velit ut.",

                minimum_qualification: "HND",
                experience_level: "Entry Level",
                experience_length: "2",
                skills: [
                    "Proficiency in bla bla bla",
                    "Proficiency in bla bla bla",
                    "Good commuinication and Collaboration skills",
                ],
                likes: 3,
                views: 10,
                applications: 4
            }, {
                title: "lorem ipsum",
                summary: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui itaque dolores nobis id vel in nemo, explicabo ratione rem fugit quos maxime, voluptatibus unde non porro, voluptatum dolor iste! Numquam, nesciunt rem voluptatem quas dolorem ipsa rerum maxime possimus sint beatae necessitatibus modi illum, est sit laudantium, vel sunt natus qui porro a iure reprehenderit deleniti hic ex. Sint optio reprehenderit nihil atque laudantium nesciunt, veniam amet, ducimus aspernatur vero quia exercitationem consectetur repellat asperiores harum repellendus iusto beatae corporis! Laborum distinctio, accusantium, aspernatur quos explicabo, atque nam tempore repellat necessitatibus corporis ipsum omnis. Delectus ea in rem qui dolorem!",
                minimum_qualification: "HND",
                experience_level: "Entry Level",
                experience_length: "2",
                skills: [
                    "Proficiency in bla bla bla",
                    "Proficiency in bla bla bla",
                    "Good commuinication and Collaboration skills",
                ],
                likes: 3,
                views: 10,
                applications: 4

            }, {
                title: "lorem ipsum",
                summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad velit earum ut autem animi, at aspernatur facilis quos molestias, ullam impedit quia porro, aut accusamus natus adipisci veniam et. Quod non accusantium hic esse. Blanditiis omnis error doloribus itaque, nemo dolores excepturi nam! Iste dicta, error nisi commodi earum neque iure, tempore ab animi adipisci vero voluptates, fugit velit ut.",
                minimum_qualification: "HND",
                experience_level: "Entry Level",
                experience_length: "2",
                skills: [
                    "Proficiency in bla bla bla",
                    "Proficiency in bla bla bla",
                    "Good commuinication and Collaboration skills",
                ],
                likes: 3,
                views: 10,
                applications: 4

            }, {
                title: "lorem ipsum",
                summary: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui itaque dolores nobis id vel in nemo, explicabo ratione rem fugit quos maxime, voluptatibus unde non porro, voluptatum dolor iste! Numquam, nesciunt rem voluptatem quas dolorem ipsa rerum maxime possimus sint beatae necessitatibus modi illum, est sit laudantium, vel sunt natus qui porro a iure reprehenderit deleniti hic ex. Sint optio reprehenderit nihil atque laudantium nesciunt, veniam amet, ducimus aspernatur vero quia exercitationem consectetur repellat asperiores harum repellendus iusto beatae corporis! Laborum distinctio, accusantium, aspernatur quos explicabo, atque nam tempore repellat necessitatibus corporis ipsum omnis. Delectus ea in rem qui dolorem!",
                minimum_qualification: "HND",
                experience_level: "Entry Level",
                experience_length: "2",
                skills: [
                    "Proficiency in bla bla bla",
                    "Proficiency in bla bla bla",
                    "Good commuinication and Collaboration skills",
                ],
                likes: 3,
                views: 10,
                applications: 4

            }, {
                title: "lorem ipsum",
                summary: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad velit earum ut autem animi, at aspernatur facilis quos molestias, ullam impedit quia porro, aut accusamus natus adipisci veniam et. Quod non accusantium hic esse. Blanditiis omnis error doloribus itaque, nemo dolores excepturi nam! Iste dicta, error nisi commodi earum neque iure, tempore ab animi adipisci vero voluptates, fugit velit ut.",

                minimum_qualification: "HND",
                experience_level: "Entry Level",
                experience_length: "2",
                skills: [
                    "Proficiency in bla bla bla",
                    "Proficiency in bla bla bla",
                    "Good commuinication and Collaboration skills",
                ],
                likes: 3,
                views: 10,
                applications: 4
            },
        ]
    )

    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="h-20 w-full bg-white border-b-2 border-grey sticky top-0 p-3">
                <div type="text" className="w-full h-full bg-slate-300 rounded-lg flex flex-row justify-between items-center p-3 gap-3" >
                    <Search1 className="text-3xl text-slate-500" />
                    <input type="search" placeholder="Search Jobs" className="bg-transparent w-full font-poppins outline-none" />
                </div>
            </div>

            <div className="bg-white h-full w-full p-3 flex flex-col gap-3">
                {
                    posts.map(post => {
                        return (<PostItem key={posts.indexOf(post)} post={post} />)
                    })
                }
            </div>


            <BottomNavBar />
        </div>
    )
}


export default Home
