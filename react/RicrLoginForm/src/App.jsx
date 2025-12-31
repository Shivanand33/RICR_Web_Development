 import React from 'react'
 import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
 import Ricr from './page/Ricr';
import Header from './Camponents/Header';

  
 
 const App = () => {
   return (
    <>
    <BrowserRouter>
    <Header />
     <Routes>
      
       

       <Route path='ricr' element={<Ricr/>}/>
       

     </Routes>
  
    </BrowserRouter>
    
    </>
   );
 };
 
 export default App;
