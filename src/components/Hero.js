import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col h-screen bg-white  justify-center items-center'>
        <h1 className='text-black lg:text-7xl md:text-5xl sm:text-3xl text-2xl font-bold font-serif '>ROMEOCELLENT</h1>
        
        <Link to="/" className='flex mt-10 py-6 px-6 bg-yellow-500 text-3xl items-center rounded-full
         translate duration-300 ease-in-out animate-bounce hover:bg-orange-300
        '>
         Order Now
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
       </svg>
        </Link>
    </div>
  )
}

export default Hero