import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout.jsx";
import Main from "./pages/Main.jsx";
import Recipes from "./pages/Recipes.jsx";
import MeatAndSeafood from "./pages/MeatAndSeafood.jsx";
import Vegetarian from "./pages/Vegetarian.jsx";
import Cuisine from "./pages/Cuisine.jsx";
import ClickedRecipe from "./component/ClickedRecipe.js";

function App() {
  const [clickedRecipe, setClickedRecipe] = useState(null);
  const [page, setPage] = useState(null);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout
            setClickedRecipe={setClickedRecipe} />}>;
            <Route index element={<Main />} />;
            <Route path="recipes" element={<Recipes
              setClickedRecipe={setClickedRecipe}
              clickedRecipe={clickedRecipe}
              setPage={setPage} />} />;
            <Route path="meatAndSeafood" element={<MeatAndSeafood />} />;
            <Route path="vegetarian" element={<Vegetarian />} />;
            <Route path="cuisine" element={<Cuisine />} />;
          </Route>
          <Route path="*" element={<ClickedRecipe
            clickedRecipe={clickedRecipe}
            setClickedRecipe={setClickedRecipe}
            page={page} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
