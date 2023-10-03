import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout.jsx";
import Main from "./pages/Main.jsx";
import Recipes from "./pages/Recipes.jsx";
import MeatAndSeafood from "./pages/MeatAndSeafood.jsx";
import Vegetarian from "./pages/Vegetarian.jsx";
import Dessert from "./pages/Dessert.jsx";
import FoodByCountry from "./pages/FoodByCountry.jsx"
import ClickedRecipe from "./component/ClickedRecipe.js";
import User from "./pages/User.jsx";

function App() {
  const [clickedRecipe, setClickedRecipe] = useState(null);
  const [page, setPage] = useState(null);
  const [loginUserData, setLoginUserData] = useState({username: "", password: ""})



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
            <Route path="dessert" element={<Dessert />} />;
            <Route path="foodByCountry" element={<FoodByCountry />} />;
            <Route path="user" element={<User
            loginUserData={loginUserData}
            setLoginUserData={setLoginUserData} />} />;
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
