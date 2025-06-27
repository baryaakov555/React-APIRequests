import React from "react";
import "./SearchField.css";

const SearchField = ({searchGifs}) => {
  return (
    <div className="search-box">
      <input 
      placeholder="Enter GIF Name"
      />
      <button onClick={searchGifs}>Search</button>
    </div>
  );
};

export default SearchField;