import React, { useState } from 'react'

const Home = () => {
    const [Count , setcount] = useState(0);
  return (
    <>
    <div className='text-center'>
        <div>The Count is {Count}</div>
            <button className='bg-red-100' onClick={ ()=>{setcount(Count+1)}}>Click</button>
        
    </div>
    </>
  );
};

export default Home;