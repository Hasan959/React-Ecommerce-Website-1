import React from 'react'
import { Link } from 'react-router'

const Newletters = () => {
  return (
    <div className=' bg-opacity-5 xl:px-28 px-4 py-16'>
        <h2> Follow product and discounts on Instagram </h2>

        {/* insta grid */}
        {/* link added */}
        <div className='flex flex-wrap gap-4 items-center justify-center mb-20'>
           <Link to="/">
           <img src="/image/instagram/image-1.png" alt="" />
           </Link> 
           <Link to="/">
           <img src="/image/instagram/image-2.png" alt="" />
           </Link>
           <Link to="/">
           <img src="/image/instagram/image-3.png" alt="" />
           </Link>
           <Link to="/">
           <img src="/image/instagram/image-4.png" alt="" />
           </Link>
           <Link to="/">
           <img src="/image/instagram/image-5.png" alt="" />
           </Link>
           <Link to="/">
           <img src="/image/instagram/image-6.png" alt="" />
           </Link>
        </div>
        {/* newsletters */}
        <div>
            <h2 className='title'>Or subscribe to the newsletter</h2>
            <form>
                <input type="email" name='email' id='email'placeholder='Email address..' className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4'/>
                <input type="submit" value={"submit"} className='bg-black text-white px-6 py-1 rounded-sm' />
            </form>
        </div>
    </div>
  )
}

export default Newletters