import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Ricr from "./page/Ricr";
import Header from "./Camponents/Header";
import toast, { Toaster } from "react-hot-toast";
import Ragister from "./page/Ragister";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Header />
        <Routes>
          <Route path="ricr" element={<Ricr />} />
          <Route path="/ragister" element={<Ragister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
