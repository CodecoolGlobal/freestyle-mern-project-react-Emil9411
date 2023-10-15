import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import removeFromFavorites from "../utility/removeFromFavorites.js";

export default function LoggedInUser(props) {
  const [userData, setUserData] = useState({});
  const [userFavorites, setUserFavorites] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/user/user/${props.loggedInUser._id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((err) => console.log(err));
  }, [props.loggedInUser._id]);

  useEffect(() => {
    userData.favorites &&
      userData.favorites.map(async (favorite) => {
        return fetch(`http://localhost:4000/api/v1/meals/${favorite}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setUserFavorites((userFavorites) => [...userFavorites, data]);
          })
          .catch((err) => console.log(err));
      });
  }, [userData.favorites]);

  return (
    <div>
      <h1>{userData.username}</h1>
      <h2>Favorites:</h2>
      <div className="recipeList">
        {userFavorites
          .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
          .map((favorite) => {
            return (
              <div className="recipe" key={favorite._id}>
                <div className="recipeName">
                  <h2>{favorite.strMeal}</h2>
                </div>
                <div className="recipeInfo">
                  <img
                    src={favorite.strMealThumb}
                    alt={favorite.strMeal}
                    width={"200px"}
                  />
                  <br />
                  <button
                    onClick={() => [
                      props.setClickedRecipe(favorite),
                      navigate(`${favorite.strMeal}`),
                      props.setPage("loggedInUser"),
                    ]}
                  >
                    Recipe
                  </button>
                  <button
                    onClick={() =>
                      removeFromFavorites(
                        favorite,
                        userData.username,
                        props.setLoggedInUser,
                        userFavorites,
                        setUserFavorites
                      )
                    }
                  >
                    Remove from Favorites
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
