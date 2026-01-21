import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ProductCard from "./components/ProductCard";

const App = () => {
  const [allFood, setAllFood] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFood = async () => {
    if (!search) return;

    try {
      setLoading(true);

      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );

      const data = await res.json();
      setAllFood(data.meals || []); 
    } catch (error) {
      console.error("Error fetching meals:", error);
      setAllFood([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} fetchFood={fetchFood} />
      <ProductCard allFood={allFood} loading={loading} />
    </>
  );
};

export default App;
