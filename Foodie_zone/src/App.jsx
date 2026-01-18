import React, { useState } from 'react'
import { BrowserRouter } from 'react-router';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';

const App = () => {
  const [allFood, setAllFood] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const feychFood = async () =>{
    try {
      
      const res = await fetch("")
    } catch (error) {
      
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <SearchBar />
    <ProductCard />
    
    </BrowserRouter>
    </>
  );
};

export default App;