import React from 'react'
import myphoto from '../images/myphoto.jpg'

const About = () => {
  return (
    <div className='h-screen bg-gradient-to-r hover:bg-gradient-to-r from-purple-500 to-pink-500  '>
        
        <div className='container grid grid-rows-1 grid-flow-col gap-4'>
            <div className='container flex justify-center items-center'>
                <img src={myphoto} className="rounded-full mt-10" style={{width:"500px"}}/>
            </div>
            <div className='flex justify-center items-center flex-col'>
            <h1 className='text-black text-center text-5xl uppercase font-serif '>About Us</h1>
                 <h1 className='text-5xl text-blue-800 font-mono font-sans font-bold mt-20'>I am Zafar Ahmad</h1>
                 <h3 className='text-4xl text-black-600 mt-10'>React developer</h3>
                 <span className='text-2xl text-black mt-10'>+923400953938</span>
            </div>

        </div>

    </div>
  )
}

export default About