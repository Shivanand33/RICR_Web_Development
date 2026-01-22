import React from 'react'
import photo from '../assets/2.png'

const Home = () => {
  return (
    <>
    <div className='text-5xl font-bold  p-5'>
     
      {/* <h1 className='text-center text-blue-950'>🍕 WelCome To  Cravings Food App!</h1>  */}
        <img src={photo} alt="" className='w-2xs flex  ms-120 top-2 animate-spin' />
     
</div>
    </>
  )
}

export default Home