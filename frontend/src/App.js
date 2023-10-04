import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout.jsx";
import Main from "./pages/Main.jsx";
import Recipes from "./pages/Recipes.jsx";
import MeatAndSeafood from "./pages/MeatAndSeafood.jsx";
import Vegetarian from "./pages/Vegetarian.jsx";
import Dessert from "./pages/Dessert.jsx";
import FoodByCountry from "./pages/FoodByCountry.jsx";
import ClickedRecipe from "./component/ClickedRecipe.js";
import User from "./pages/User.jsx";
import Registration from "./component/Registration.js";

function App() {
  const [clickedRecipe, setClickedRecipe] = useState(null);
  const [page, setPage] = useState(null);
  const [loginUserData, setLoginUserData] = useState({
    username: "",
    password: "",
  });
  const [isRegistrating, setIsRegistrating] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                setClickedRecipe={setClickedRecipe}
                setIsRegistrating={setIsRegistrating}
              />
            }
          >
            ;
            <Route index element={<Main />} />;
              <Route
                path="recipes"
                element={
                  <Recipes
                    setClickedRecipe={setClickedRecipe}
                    clickedRecipe={clickedRecipe}
                    setPage={setPage}
                  />
                }
              />
              ;
            <Route path="meatAndSeafood" element={<MeatAndSeafood />} />;
            <Route path="vegetarian" element={<Vegetarian />} />;
            <Route path="dessert" element={<Dessert />} />;
            <Route path="foodByCountry" element={<FoodByCountry />} />;
            <Route
              path="logIn"
              element={
                <User
                  loginUserData={loginUserData}
                  setLoginUserData={setLoginUserData}
                  isRegistrating={isRegistrating}
                  setIsRegistrating={setIsRegistrating}
                  page={page}
                  setPage={setPage}
                />
              }
            />
            ;
          </Route>
          <Route
            path="*"
            element={
              <ClickedRecipe
                clickedRecipe={clickedRecipe}
                setClickedRecipe={setClickedRecipe}
                page={page}
              />
            }
          />
          <Route
            path="register"
            element={
              <Registration />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
