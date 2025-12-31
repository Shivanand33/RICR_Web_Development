 import React from 'react'
 import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./pages/Home";
import Ragister from "./pages/Ragister";
import { Toaster } from 'react-hot-toast';
 const App = () => {
   return (
     
   <>
      <BrowserRouter>

        <Toaster/>
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ragister" element={<Ragister />} />
        </Routes>
      </BrowserRouter>
    </>

   );
 };
 
 export default App;