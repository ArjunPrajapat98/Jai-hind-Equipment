import React from 'react'

const CommonInput = (props) => {
    let { type = "text", label, placeholder, starRed } = props;
    return (
        <>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label} {starRed ? '*' : ''}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </>
    )
}

export default CommonInput