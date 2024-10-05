/* eslint-disable react/prop-types */
import { Eye, EyeSlash } from '@iconsans/react/linear'
import { useState } from 'react'

const PasswordInput = ({ value, onChange, error, placeholder, ...props }) => {

    const [isPassword, setIsPassword] = useState(true)

    return (
        <div
            className={error ?
                "h-16 border-danger border p-5 rounded-lg flex flex-row" :
                "h-16 border-grey border p-5 rounded-lg flex flex-row"}
            {...props}>

            <input
                type={isPassword ? 'password' : 'text'}
                placeholder={placeholder}
                className="w-full outline-none h-full"
                value={value}
                onChange={onChange} />

            <div className="text-2xl text-grey cursor-pointer" onClick={(e) => { setIsPassword(!isPassword) }} >
                {isPassword ? <EyeSlash /> : <Eye />}
            </div>

        </div>
    )
}

export default PasswordInput
