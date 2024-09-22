import React from 'react'

export const Button = ({children}) => {
  return (
    <button type="button" className="w-64 py-2.5 px-5 font-medium text-dark-gray-700 dark:text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-800 my-7 rounded-lg">
            {children}
    </button> 
  )
}
