 import React from 'react'
 import { BrowserRouter, Routes, Route } from 'react-router-dom';

 import Header from './Website/Header';
 import Footer from './Website/Footer';
 import Home from './page/Home';
 import About from './page/About';
 import Contact from './page/Contact';
 import Product from './page/Product';
import Start from './page/Start';
import SingUp from './page/SingUp';
 import { FcBusinessContact } from "react-icons/fc";
 
 function App() {
   return (
    <>
       <BrowserRouter>
       <Header />
       
       <Routes>
        
        <Route path='/'  element={ <Home />} />
         <Route path='About'  element={ <About />} />
          <Route path='Product'  element={ <Product />} />
           <Route path='Contact'  element={ <Contact />} />
           <Route path='Start' element={ <Start />} />
          <Route path='SingUp' element={ <SingUp />} />
        
       </Routes>
       <Footer />
       </BrowserRouter>
    
    </>
    
   );
 };
 
 export default App;