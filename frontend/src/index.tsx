import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Homepage from "./pages/tsx/Homepage";
import RecipesGrid from "./pages/tsx/RecipesGrid";
import Recipe from "./pages/tsx/Recipe";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="/recipes" element={<RecipesGrid />} />
        <Route path="/recipes/:id/:name" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
