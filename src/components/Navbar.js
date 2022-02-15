import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = ({isOpen,setIsopen}) => {
  return (
    <nav className='flex justify-between items-center relative shadow-sm font-mono bg-gray-300 h-20 w-100 ' role='navigation'>
      
      <Link to='/' className='pl-8 font-sarif font-bold text-2xl'>ROMEO</Link>
       
       <div className='px-4 cursor-pointer md:hidden' onClick={()=>setIsopen(!isOpen)}>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
         </svg>
        </div>

        <div className='pr-8 md:block hidden text-xl'>
            <Link className='p-4 hover:bg-orange-400 rounded-md' to='/'>Home</Link>
            <Link className='p-4 hover:bg-orange-400 rounded-md' to='/menu'>Menu</Link>

            <Link className='p-4 hover:bg-orange-400 rounded-md' to='/about'>About</Link>
            <Link className='p-4 hover:bg-orange-400 rounded-md' to='/contact'>Contact</Link>


        </div>

     
    </nav>
  )
}

export default Navbar