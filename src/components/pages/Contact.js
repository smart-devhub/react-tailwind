import React from 'react'

const Contact = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
        <div className='h-screen  bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center'><span className='text-3xl font-mono font-bold'>Inbox Me</span></div>
        <div className='flex justify-center items-center flex-col'>
            <div className='flex flex-col '>
                <label>Name</label>
                <input type="text" placeholder="Name...." />
            </div>
            <div className='flex flex-col my-7'>
                <label>Email</label>
                <input type="email" placeholder="Email...." className='border-none outline-none' />
            </div>
            <div className='flex flex-col'>
                <label>Phone</label>
                <input type="text" placeholder="Phone...." />
            </div>
        </div>

    </div>
  )
}

export default Contact