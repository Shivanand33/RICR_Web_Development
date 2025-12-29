 import React from 'react'
 import {BrowserRouter, Routes, Route}  from 'react-router-dom';

 import Header from './Camponenets/Header';
 import Footer from './Camponenets/Footer';
 import Home from './page/Home';
 import About from './page/About';
 import Product from './page/Product';
 import Contact from './page/Contact';
 import SingUp from './page/SingUp';
 
 const App = () => {
   return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
       
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='Product' element={<Product/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='SingUP' element={<SingUp/>}/>

       
    </Routes>
     <Footer />
    </BrowserRouter>
    </>
   );
 };
 
 export default App;