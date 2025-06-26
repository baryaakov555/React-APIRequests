import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./style.css";
import SearchField from "./SearchField";

// const GIPHY_API_KEY = "YOUR_API_KEY";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Let's Make Some API Requests!</h1>
      <SearchField/>
    </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
