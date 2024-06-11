/* eslint-disable react/prop-types */

import { Email, Eye, Heart, Share } from "@iconsans/react/linear"

function PostItem({ post }) {
    return (
        <div className="w-full shadow-md h-auto p-3 rounded-lg flex flex-col gap-3">
            <p className="text-2xl font-poppins capitalize font-extrabold text-black">
                <strong>{post.title}</strong>
            </p>

            <p className="font-poppins">{post.summary}</p>
            <p><strong>Minimum Qualification:</strong> {post.minimum_qualification}</p>

            <p><strong>Experience Level:</strong> {post.experience_level}</p>

            <p><strong>Minimum Experience Length:</strong> {post.experience_length} years</p>

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

            <div className="w-full h-10 mt-3 flex flex-row justify-between px-5 items-center text-2xl text-primary">
                <div className="flex flex-col items-center">
                    <Eye />
                    <p className="text-sm">123</p>
                </div>

                <div className="flex flex-col items-center">
                    <Email />
                    <p className="text-sm">0</p>
                </div>

                <div className="flex flex-col items-center">
                    <Share />
                    <p className="text-sm"></p>
                </div>
            </div>
        </div>
    )
}

export default PostItem
