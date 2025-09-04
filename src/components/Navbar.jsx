import React from 'react'
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <header>
      <nav>
        <FaSearch />
        
        {/* logo */}
        <a href=""> <img src={logo} alt="" /> </a>
      </nav>
    </header>
  )
}

export default Navbar