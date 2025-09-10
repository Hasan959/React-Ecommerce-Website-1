import React from 'react'
import { Link } from 'react-router'

const Catagory = () => {

    const companyLogo = [
     {id: 1, img:"/image/catagory/company/brand-1.png"},
     {id: 2, img:"/image/catagory/company/brand-2.png"},
     {id: 3, img:"/image/catagory/company/brand-3.png"},
     {id: 4, img:"/image/catagory/company/brand-4.png"},
     {id: 5, img:"/image/catagory/company/brand-5.png"},

        
    ]

  return (
    <div className='max-w-screen-2xl container xl:px-28 px-4 py-28'>

        {/* brand logo */}
        <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
          {
            companyLogo.map(({id,img})=>(
              <div key={id}> <img src={img} alt="" /> </div>
            ))
          }
        </div>
         
         {/* catagory grid */}
         <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>

          <div className='font-semibold uppercase md:rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex'>
          <p>Explore new and popular styles</p>
         </div>
         <div>
          <Link to="/"> <img src="/image/image-1.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /> </Link>
         </div>

         <div className='md:w-1/2'>
          <div className='grid grid-cols-2 gap-2 '>
            
            <Link to="/"><img src="/image/image-2.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /> </Link>
            <Link to="/"><img src="/image/image-3.png" alt=""  className='w-full hover:scale-105 transition-all duration-200'  /></Link>
            <Link to="/"><img src="/image/image-4.png" alt=""  className='w-full hover:scale-105 transition-all duration-200' /></Link>
            <Link to="/"><img src="/image/image-5.png" alt=""  className='w-full hover:scale-105 transition-all duration-200' /></Link>

          </div>
         </div>

         </div>




    </div>
  )
}

export default Catagory