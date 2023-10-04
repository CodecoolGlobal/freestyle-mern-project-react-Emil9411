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
import LogedInUser from "./pages/LogedInUser.jsx";

function App() {
  const [clickedRecipe, setClickedRecipe] = useState(null);
  const [page, setPage] = useState(null);
  const [isRegistrating, setIsRegistrating] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState("");

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
            path="logedInUser"
            element={
              <LogedInUser
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
