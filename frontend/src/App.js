import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./pages/Layout.jsx";
import Main from "./pages/Main.jsx";
import Recipes from "./pages/Recipes.jsx";
import FoodByCountry from "./pages/FoodByCountry.jsx";
import ClickedRecipe from "./component/ClickedRecipe.js";
import ClickedCountry from "./component/ClickedCountry.js";
import User from "./pages/User.jsx";
import Registration from "./component/Registration.js";
import LoggedInUser from "./pages/LoggedInUser.jsx";
import UserDataEdit from "./component/UserDataEdit.js";

import FoodByCategory from "./pages/FoodByCategory.jsx";

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

  const foodCategories = ["chicken", "pork", "beef", "lamb", "goat", "seafood", "breakfast", "miscellaneous", "pasta", "side", "starter", "vegan", "vegetarian", "dessert"];

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
            {foodCategories.map((category) => (
              <Route
                path={`category/${category}`}
                element={
                  <FoodByCategory
                    category={category}
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
            ))}
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
