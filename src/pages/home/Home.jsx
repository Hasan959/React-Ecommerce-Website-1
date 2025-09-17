import React from 'react'
import Banner from './Banner'
import Catagory from './Catagory'
import Products from './Products'
import Collections from './Collections'
import BestSellers from './BestSellers'


const Home = () => {
  return (
    <div>
      <Banner/>
      <Catagory/>
      <Products/>
      <Collections/>
      <BestSellers/>
      

    </div>
  )
}

export default Home