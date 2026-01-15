import React from 'react'

const CommonTextArea = (props) => {
    let { label, placeholder, starRed = false, value, onChange } = props;
    return (
        <>
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label} {starRed ? '*' : ''}
            </label>
            <textarea
                rows={4}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical"
            ></textarea>
        </>
    )
}

export default CommonTextArea