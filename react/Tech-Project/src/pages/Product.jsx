import React from 'react'
import photo from "../assets/tisart.avif.jpg";

const Product = () => {
  return (
    <>
     <div className='container py-2 mb-4 rounded-2xl shadow-2xl w-90 '>
        <div className=' rounded w-90  '>
            <img src={photo} alt="" className='rounded' />
        </div>
        <div className=''>
          <div className='font-bold'>Title</div>
          <div className='font-semibold text-red-400'>Price</div>
          <div className='font-semibold text-yellow-300'>Reating</div>
          <div>Discription</div>
          
        </div>

     </div>
    </>
  );
};

export default Product;