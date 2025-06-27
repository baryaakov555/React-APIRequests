import React from "react";
import "./SearchField.css";

const SearchField = ({searchGifs, submitInput, rating}) => {
  return (
    <div className="search-box">
      <input 
      placeholder="Enter GIF Name"
      onChange={(event) => submitInput(event.target.value)}
      />
      <button onClick={searchGifs}>Search</button>
      <label> GIF Rating </label>
      <select onChange={(event) => rating(event.target.value)}>
        <option value={""}>All</option>
        <option value={"g"}>g</option>
        <option value={"pg"}>pg</option>
        <option value={"pg-13"}>pg-13</option>
        <option value={"r"}>r</option>
      </select>
    </div>
  );
};

export default SearchField;