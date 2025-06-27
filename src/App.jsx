import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./style.css";
import SearchField from "./SearchField";
import GifCard from "./GifCard";
//import { flushSync } from "react-dom";
//import { WatchIgnorePlugin } from "webpack";

const GIPHY_API_KEY = "FnsuQvMgFCBpp3u0rGcU1nEhBOk3n23g";

const App = () => {

const [gifs, setGifs] = useState([]);
const [input, setInput] = useState("");
const [rating, setRating] = useState("");

useEffect(() => {
  fetchTrendingGifs();
}, []);

const fetchTrendingGifs = async () => {
  let url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`
  const trendingGifs = (await axios.get(url)).data.data;

setGifs(trendingGifs);
}

const searchGifs = async () => {
  let url = `http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${GIPHY_API_KEY}`
  if (rating != "")
  {
    url+= `&rating=${rating}`
  }
  
  const searchGifByName = (await axios.get(url)).data.data;

  setGifs(searchGifByName);
}














  return (
    <div className="app">

      <h1 className="title">GIF WORLD!</h1>

      <SearchField searchGifs = {searchGifs} submitInput = {setInput} rating = {setRating}/>
      

      <div className="gif-list">

        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}

      </div>
      
    </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
