import React from "react";
import "./SearchField.css";

const SearchField = ({searchGifs, submitInput}) => {
  return (
    <div className="search-box">
      <input 
      placeholder="Enter GIF Name"
      onChange={(event) => submitInput(event.target.value)}
      />
      <button onClick={searchGifs}>Search</button>
    </div>
  );
};

export default SearchField;