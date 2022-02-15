import React from 'react'

const Content = () => {
  return (
      <>
    <div className='menu-images'>
        <img src='https://image.shutterstock.com/image-photo/bacon-pancake-set-photo-600w-1848333430.jpg'
        className='rounded-full'
        alt='eggImg' />
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl mt-5 text-green-700'>Egg Muffins</h1>
            <p className='text-xl text-gray-400 my-4'>Crispy,Delicious and Nutritions</p>
            <span>$16</span>
        </div>
    </div>
    <div className='menu-images'>
        <img src='https://image.shutterstock.com/image-photo/bacon-pancake-set-photo-600w-1848333430.jpg'
        className='rounded-full'
        alt='eggImg' />
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl mt-5 text-green-700'>Egg Muffins</h1>
            <p className='text-xl text-gray-400 my-4'>Crispy,Delicious and Nutritions</p>
            <span>$16</span>
        </div>
    </div>
</>
  )
}

export default Content