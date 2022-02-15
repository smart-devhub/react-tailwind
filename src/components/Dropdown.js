
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen,setIsopen}) => {

    
  return (
    <div className={isOpen ? 'md:hidden grid grid-rows-4 bg-yellow-500 text-center' : "hidden" } onClick={()=>setIsopen(!isOpen)} >
         <Link className='p-4 hover:bg-orange-400 rounded-md' to='/'>Home</Link>
          <Link className='p-4 hover:bg-orange-400 rounded-md' to='/menu'>Menu</Link>

            <Link className='p-4 hover:bg-orange-400 rounded-md' to='/about'>About</Link>
            <Link className='p-4 hover:bg-orange-400 rounded-md' to='/contact'>Contact</Link>


    </div>
  )
}

export default Dropdown