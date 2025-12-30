 import React from 'react'
 import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
 import Ricr from './page/Ricr';

  
 
 const App = () => {
   return (
    <>
    <BrowserRouter>
     <Routes>

       <Route path='/' element={<Ricr/>}/>

     </Routes>
  
    </BrowserRouter>
    
    </>
   );
 };
 
 export default App;
