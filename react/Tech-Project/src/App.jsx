import React from 'react'
 import {BrowserRouter, Routes, Route} from 'react-router-dom';
 import Header from './Components/Header';
 import Footer from './Components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
const App = () => {
  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/Register' element={<Register/>}/>

       
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  );
};

export default App;