import React from "react";
import Header from "./WebPage/Header";
import Foter from "./WebPage/Foter";
import Home from "./page/Home";
import Product from "./page/Product";
import About from "./page/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Foter />
      </BrowserRouter>
    </>
  );
};

export default App;
