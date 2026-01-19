import React from "react";

const SearchBar = ({ search, setSearch, fetchFood }) => {
  return (
    <div className="main flex justify-center py-10">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Your Food"
        className="bg-gray-200 py-1.5 px-2 w-80 border-2 border-gray-400 rounded-l-lg"
      />
      <button
        onClick={fetchFood}
        className="bg-yellow-100 rounded-r-lg px-5 py-1.5 border-t-2 border-r-2 border-gray-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
