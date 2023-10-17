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
import ClickedCountry from "./component/ClickedCountry.js";
import User from "./pages/User.jsx";
import Registration from "./component/Registration.js";
import LoggedInUser from "./pages/LoggedInUser.jsx";
import UserDataEdit from "./component/UserDataEdit.js";

import Chicken from "./pages/FoodCategories/Chicken.jsx";
import Pork from "./pages/FoodCategories/Pork.jsx";
import Beef from "./pages/FoodCategories/Beef.jsx";
import Lamb from "./pages/FoodCategories/Lamb.jsx";
import Goat from "./pages/FoodCategories/Goat.jsx";
import Seafood from "./pages/FoodCategories/Seafood.jsx";
import Breakfast from "./pages/FoodCategories/Breakfast.jsx";
import Miscellaneous from "./pages/FoodCategories/Miscellaneous.jsx";
import Pasta from "./pages/FoodCategories/Pasta.jsx";
import Side from "./pages/FoodCategories/Side.jsx";
import Starter from "./pages/FoodCategories/Starter.jsx";
import Vegan from "./pages/FoodCategories/Vegan.jsx";

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
  const [countries, setCountries] = useState([]);
  const [clickedCountry, setClickedCountry] = useState(null);

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
                  countries={countries}
                  setCountries={setCountries}
                />
              }
            />
            ;
            <Route
              path="foodByCountry"
              element={
                <FoodByCountry
                  countries={countries}
                  setCountries={setCountries}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                  setAllRecipes={setAllRecipes}
                  setClickedCountry={setClickedCountry}
                  setPage={setPage}
                />
              }
            />
            ;
            <Route
              path="login"
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
              path="user"
              element={
                <LoggedInUser
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                />
              }
            />
            <Route
            path="user/edit"
            element={
              <UserDataEdit
                loggedInUser={loggedInUser}
                setLoggedInUser={setLoggedInUser}
                setUsername={setUsername}
                setPassword={setPassword}
                setEmail={setEmail}
                setCPassword={setCPassword}
                setIsRegistrating={setIsRegistrating}
              />
            }
          />
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
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
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
            <Route
              path="category/chicken"
              element={
                <Chicken
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            <Route
              path="category/pork"
              element={
                <Pork
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            <Route
              path="category/beef"
              element={
                <Beef
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            <Route
              path="category/lamb"
              element={
                <Lamb
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            <Route
              path="category/goat"
              element={
                <Goat
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            <Route
              path="category/seafood"
              element={
                <Seafood
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            <Route
              path="category/breakfast"
              element={
                <Breakfast
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            <Route
              path="category/miscellaneous"
              element={
                <Miscellaneous
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            <Route
              path="category/pasta"
              element={
                <Pasta
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            <Route
              path="category/side"
              element={
                <Side
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            <Route
              path="category/starter"
              element={
                <Starter
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            <Route
              path="category/vegan"
              element={
                <Vegan
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            <Route
              path="category/vegetarian"
              element={
                <Vegetarian
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            ;
            <Route
              path="category/dessert"
              element={
                <Dessert
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  setClickedRecipe={setClickedRecipe}
                  setPage={setPage}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                  recipes={recipes}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                />
              }
            />
            ;
            <Route
              path={"foodByCountry/:clickedCountry"}
              element={
                <ClickedCountry
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                  clickedCountry={clickedCountry}
                  setClickedCountry={setClickedCountry}
                  page={page}
                  setPage={setPage}
                  setClickedRecipe={setClickedRecipe}
                  setRecipes={setRecipes}
                  allRecipes={allRecipes}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
