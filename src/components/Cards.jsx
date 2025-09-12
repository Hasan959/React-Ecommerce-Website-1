import React from 'react'
import { Link } from 'react-router'

const Cards = ({filteredItem}) => {
  return (
    <div>
        {
           filteredItem.map((item) =>(
            <div key={item.id}>
                <Link to={`/shop/${item.id}`}>
                <img src={item.image} alt="" />
                </Link>
                <div className='mt-4 px-4'>
                  <h4 className='text-base font-semibold mb-2'> {item.title} </h4>
                </div>
            </div>
            
            
           ) ) 
        }
    </div>
  )
}

export default Cards