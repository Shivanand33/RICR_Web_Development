import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let counter=10
 const Addvalue=()=>{
 counter = counter +1
 console.log("all value:",counter);
 
  
 }
  return (
    <>
       <h1>Welcome !!!</h1>
       <h2>Home: {counter}</h2>

       <button onClick={Addvalue}>Add value</button>
       <button>Remove value{counter}</button>
    </>
  )
}

export default App
