import React from 'react'

const ErrorMessage = ({ children }) => {
    return (
        <div>
            <p className=' text-red-500'>{children}</p>
        </div>
    )
}

export default ErrorMessage