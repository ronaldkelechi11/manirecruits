import React from 'react'

const NormalInput = ({ type, placeholder, value, error, onChange, ...props }) => {
    const normalInput = "h-16 border-grey border p-5 rounded-lg placeholder:text-slate-400"

    return (
        <input
            type={type}
            placeholder={placeholder}
            className={normalInput}
            value={value}
            required
            maxLength={64}
            onChange={onChange}
            {...props} />
    )
}

export default NormalInput

