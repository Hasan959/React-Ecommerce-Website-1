import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Theme from '../Theme'

const AppLayout = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
    </>
  )
}

export default AppLayout