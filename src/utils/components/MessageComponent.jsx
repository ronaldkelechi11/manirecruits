/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const MessageComponent = ({ user_firstname, user_lastname, user_title }) => {

    return (
        <div className='w-full h-24 p-3 flex flex-row'>
            <div className="w-[20%] h-16 rounded-full bg-slate-500 flex justify-center items-center text-white font-kanit text-3xl">
                {user_firstname.charAt(0)}{user_lastname.charAt(0)}
            </div>

            <div className="w-full h-full flex flex-col p-3">
                <p className='font-kanit text-xl text-black'>{user_firstname + " " + user_lastname}</p>
                <p className='font-poppins text-md text-slate-500'>{user_title}</p>
            </div>


        </div>
    )
}

export default MessageComponent
