import React from 'react'



const Collections = () => {
  return (
    <div className='bg-[url("/image/collection-bg.png")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20'> 
    <div className='h-[580px] flex justify-between  md:flex-row items-center'>
      <div className='md:w-1/2'></div>
      <div className='md:w-1/2'>
          <img src="/image/zara-logo.png" alt="" />
          <p className='text-lg text-white capitalize my-8 md:w-2/3'> 
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit accusamus omnis
            ipsam quibusdam  quod sequi debitis aut quisquam officiis dolorum. 
          </p>
          <button className=' px-6 py-2 bg-white text-black  rounded-sm font-semibold'> See Collection </button>
      </div>
    </div> 
    </div>
  )
}

export default Collections