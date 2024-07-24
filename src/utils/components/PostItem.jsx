/* eslint-disable react/prop-types */

import { Email, Eye, Heart, Share } from "@iconsans/react/linear"
import { Link } from "react-router-dom"

function PostItem({ post }) {

    return (
        <div to={'123'} className="w-full shadow-md h-auto p-3 rounded-lg flex flex-col gap-3">
            <p className="text-3xl font-poppins capitalize font-extrabold text-black">
                <strong>{post.title}</strong>
            </p>

            <p className="font-poppins">{post.summary}</p>
            <p><strong>Minimum Qualification:</strong> {post.minimumQualification}</p>

            <p><strong>Experience Level:</strong> {post.experienceLevel}</p>

            <p><strong>Minimum Experience Length:</strong> {post.experienceLength} years</p>

            <p><strong>Preffered Gender: </strong> {post.prefferedGender}</p>

            <p><strong>Working Days: </strong>{post.workingDays.length} Days</p>

            <Link to={'123'} className="w-full bg-primary text-white font-kanit flex justify-center items-center rounded-lg p-3 text-xl">
                See more
            </Link>
        </div>
    )
}

export default PostItem
