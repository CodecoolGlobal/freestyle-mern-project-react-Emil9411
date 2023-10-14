import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout.jsx";
import Main from "./pages/Main.jsx";
import Recipes from "./pages/Recipes.jsx";
import Vegetarian from "./pages/FoodCategories/Vegetarian.jsx";
import Dessert from "./pages/FoodCategories/Dessert.jsx";
import FoodByCountry from "./pages/FoodByCountry.jsx";
import ClickedRecipe from "./component/ClickedRecipe.js";
import User from "./pages/User.jsx";
import Registration from "./component/Registration.js";
import LoggedInUser from "./pages/LoggedInUser.jsx";

import Chicken from "./pages/FoodCategories/Chicken.jsx";
import Pork from "./pages/FoodCategories/Pork.jsx";
import Beef from "./pages/FoodCategories/Beef.jsx";
import Lamb from "./pages/FoodCategories/Lamb.jsx";
import Goat from "./pages/FoodCategories/Goat.jsx";
import Seafood from "./pages/FoodCategories/Seafood.jsx";

function App() {
  const [page, setPage] = useState(null);

  const [clickedRecipe, setClickedRecipe] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const [isRegistrating, setIsRegistrating] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loadedRecipes, setLoadedRecipes] = useState(12);

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
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
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
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                  setAllRecipes={setAllRecipes}
                  loadedRecipes={loadedRecipes}
                  setLoadedRecipes={setLoadedRecipes}
                />
              }
            />
            ;
            <Route path="vegetarian" element={<Vegetarian />} />;
            <Route path="dessert" element={<Dessert />} />;
            <Route path="foodByCountry" element={<FoodByCountry />} />;
            <Route
              path="logIn"
              element={
                <User
                  isRegistrating={isRegistrating}
                  setIsRegistrating={setIsRegistrating}
                  page={page}
                  setPage={setPage}
                  password={password}
                  setPassword={setPassword}
                  email={email}
                  setEmail={setEmail}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route
              path="loggedInUser"
              element={
                <LoggedInUser
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
          </Route>

          {/* components outside of the layout */}

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
              <Registration
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                email={email}
                setEmail={setEmail}
                cPassword={cPassword}
                setCPassword={setCPassword}
                setIsRegistrating={setIsRegistrating}
              />
            }
          />

          {/* Meat&Seafood */}

          <Route path="category/chicken" element={<Chicken />} />
          <Route path="category/pork" element={<Pork />} />
          <Route path="category/beef" element={<Beef />} />
          <Route path="category/lamb" element={<Lamb />} />
          <Route path="category/goat" element={<Goat />} />
          <Route path="category/seafood" element={<Seafood />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
