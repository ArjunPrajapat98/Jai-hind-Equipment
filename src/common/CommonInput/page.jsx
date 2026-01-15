import React from 'react'

const CommonInput = (props) => {
    let { type = "text", label, placeholder, starRed, value, onChange } = props;
    return (
        <>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label} {starRed ? '*' : ''}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </>
    )
}

export default CommonInput