import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='w-full h-screen bg-bg-color text-white flex justify-center items-center flex-col'>
      <p className=' text-red-600 text-xl mb-6'>404 Not Found.</p>

      <Link to="/" className=' bg-button-color text-sm rounded px-[.8rem] py-1.5 border border-stroke-color hover:bg-[#383838] transition-all'>Go Back</Link>
    </div>
  )
}

export default ErrorPage