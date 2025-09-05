import React from 'react'
import { FaSearch,FaUser, FaShoppingBag } from "react-icons/fa";
import logo from "../assets/logo.png"
import { Link } from 'react-router';


const Navbar = () => {

  const navItems = [
    {title: "Jewelry & Accessories", path:"/"},
    {title: "Clothing & Shoes", path:"/"},
    {title: "Home & Living", path:"/"},
    {title: "Wedding & Party", path:"/"},
    {title: "Toys & Entertainment", path:"/"},
    {title: "Art & Collectibles", path:"/"},
    {title: "Craft Supplies & Tools", path:"/"},

  ]
  return (
    <header className='max-w-screen-2xl xl:px-28 px-4 mx-auto '>
      <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3  '>
        <FaSearch />
        
        {/* logo */}
        <a href="/"> <img src={logo} alt="" /> </a>

        {/* account and shopping btn */}
         <div className='text-lg text-black sm:flex items-center gap-4 hidden'>
           <a href="/" className='flex items-center gap-2'> <FaUser /> Account </a>
           <a href="/" className='flex items-center gap-2'> <FaShoppingBag /> Shooping </a>
         </div>


      </nav>

      <hr />

      {/* catagory items */}
      <div>
        <ul>
          {
            navItems.map(({title, path})=> (
              <li key={title}>
                <Link to="/">{title}</Link>

              </li>
             ) )
          }
        </ul>

      </div>
    </header>
  )
}

export default Navbar