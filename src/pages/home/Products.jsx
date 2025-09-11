import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { data } from 'react-router';

const Products = () => {
  const [products,setProducts] = useState([]);

  useEffect(() =>{

    const fetchData = async ()=> {
      try{
        const response = await fetch("/products.json");
        const data = await response.json();
        //console.log(data)
        setProducts(data)

      } catch(error){
        console.log("Error fetching data:",error)
      }
    } 

    fetchData();

  },[])
  console.log(products)

  return (
    <div className='max-w-screen-3xl container mx-auto xl:px-28 px-4 mb-12'>
      <h2 className='text-3xl font-semibold text-center my-8'> Or subscribe to the newsletter </h2>
      
      {/* product cards */}
      <div>
        <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3'> 
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
            <select className='bg-black text-white px-2 py-1 rounded-sm'>
                <option value="default"> Default </option>
                <option value="A-z">A-z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-high">Low to High </option>
                <option value="High to low">High to Low</option>
            </select>
            
        </div>
      </div>
      </div>

    </div>
  )
}

export default Products