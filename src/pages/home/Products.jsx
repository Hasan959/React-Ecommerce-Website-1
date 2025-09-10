import React from 'react'
import { FaFilter } from 'react-icons/fa'

const Products = () => {
  return (
    <div className='max-w-screen-3xl container mx-auto xl:px-28 px-4 mb-12'>
      <h2 className='text-3xl font-semibold text-center my-8'> Or subscribe to the newsletter </h2>
      {/* product cards */}
      <div>
        {/* all btn */}
        <div className='flex flex-row justify-start md:items-center md:gap-8 '>
            <button>All products</button>
            <button>T-shirts</button>
            <button>Hoodies</button>
            <button>Bag</button>
        </div>

        {/* sorting options */}
        <div>
            <div className='bg-black p-2'>
                <FaFilter className='text-white h-4 w-4'/>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Products