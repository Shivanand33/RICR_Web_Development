import React from 'react'
 import {BrowserRouter, Routes, Route} from 'react-router-dom';
 import toast, {Toaster} from 'react-hot-toast';
 import Header from './Components/Header';
 import Footer from './Components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
  import Product from './pages/Product';
const App = () => {
  return (
    <>
     <BrowserRouter>
     <Toaster />
     <Header />
     <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Product' element={<Product/>}/>
      

       
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  );
};

export default App;