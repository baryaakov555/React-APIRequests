import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./style.css";
import SearchField from "./SearchField";
//import { flushSync } from "react-dom";
//import { WatchIgnorePlugin } from "webpack";

const GIPHY_API_KEY = "FnsuQvMgFCBpp3u0rGcU1nEhBOk3n23g";

const App = () => {

const [gifs, setGifs] = useState([]);
const [input, setInput] = useState("");

useEffect(() => {
  fetchTrendingGifs();
}, []);

const fetchTrendingGifs = async () => {
const trendingGifs = (await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`)).data.data;

setGifs(trendingGifs);
}

const searchInput = () => {


}

const searchGifs = async () => {
  const searchGifByName = (await axios.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${GIPHY_API_KEY}`)).data.data;

  setGifs(searchGifByName);
}













  return (
    <div className="app">

      <h1 className="title">GIF WORLD!</h1>

      <SearchField searchGifs = {searchGifs}/>

      <div className="gif-list">

        {gifs.map((gif) => (

        <img
        key={gif.id}
        src={gif.images.fixed_height.url}
        className="gif-card-img"
        />

        ))}

      </div>
      
        
      
    </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
