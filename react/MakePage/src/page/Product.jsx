import React from 'react'
import photo from '../assets/OIP.jpg'
const Product = () => {
  return (
    <>
     <div className='container shadow-2xl   w-70 h-auto p-2'>
      <div className='shadow-xl'>
        <img src={photo} alt="" className='' />
      </div>
      <div className=''>
        <div className='font-bold'>Title</div>
        <div className='font-semibold'>Reating</div>
        <div className='font-semibold'>Price</div>
        <div className='font-semibold'>Discription</div>

      </div>
     </div>
    </>
  );
};

export default Product;