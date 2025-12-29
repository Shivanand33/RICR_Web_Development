import React from "react";
import Header from "./WebPage/Header";
import Foter from "./WebPage/Foter";
import Home from "./page/Home";
import Product from "./page/Product";
import About from "./page/About";
import Contact from "./page/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./page/Contact";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Foter />
      </BrowserRouter>
    </>
  );
};

export default App;
