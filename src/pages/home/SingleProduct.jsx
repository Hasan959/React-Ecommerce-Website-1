import React from 'react'
import { useParams } from 'react-router'
import Products from './Products';

const SingleProduct = () => {
  const {id} = useParams();
  //console.log(id)
  useEffect(() =>{
      const fetchData = async ()=> {
        try{
          const response = await fetch("/products.json");
          const data = await response.json();
          const product = data.filter((p) => p.id == id);
          console.log(product)
          setProducts(product[0])
          
  
        } catch(error){
          console.log("Error fetching data:",error)
        }
      } 
  
      fetchData();
  
    },[id])

    const {title, category, price, image, status} = Products;

  return (
    <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'> 
    <div className='p-3 max'>
      <div>

      </div>
    </div>
     </div>
  )
}

export default SingleProduct