import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar.js";
import addToFavorites from "../utility/addToFavorites.js";
import removeFromFavorites from "../utility/removeFromFavorites.js";

export default function ClickedCountry(props) {
  const [clickedCountryData, setClickedCountryData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/country/${props.clickedCountry}`)
      .then((response) => response.json())
      .then((data) => setClickedCountryData(data))
      .catch((error) => console.log(error));
  }, [props.clickedCountry]);

  useEffect(() => {
    props.setSearchValue("");
  }, []);

  if (!props.clickedCountry) {
    return <h2>Loading country..</h2>;
  }

  return (
    <div className="recipesContainer">
      <h1>{props.clickedCountry}</h1>
      <button onClick={() => [props.setClickedCountry(null), navigate(`/foodByCountry`)]}>
        Back
      </button>
      <br />
      <SearchBar
        setRecipes={props.setRecipes}
        allRecipes={props.allRecipes}
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />
      <br />
      <div className="recipeList">
        {clickedCountryData &&
          clickedCountryData.filter((recipe) => {
            return recipe.strMeal.toLowerCase().includes(props.searchValue.toLowerCase());
          }).map((meal) => {
            return (
              <div className="recipe" key={meal.idMeal}>
                <div className="recipeName">
                  <h2>{meal.strMeal}</h2>
                </div>
                <div className="recipeInfo">
                  <img src={meal.strMealThumb} alt={meal.strMeal} width={"200px"} />
                  <button
                    onClick={() => [
                      props.setClickedRecipe(meal),
                      navigate(`${meal.strMeal}`),
                      props.setPage(`/foodByCountry/${props.clickedCountry}`),
                    ]}
                  >
                    Recipe
                  </button>
                  {props.loggedInUser && !props.loggedInUser.favorites.includes(meal._id) ? (
                  <button
                    onClick={() => addToFavorites(meal, props.loggedInUser.username, props.setLoggedInUser)}
                  >
                    Add to Favorites
                  </button>
                ) : props.loggedInUser && props.loggedInUser.favorites.includes(meal._id) ? (
                  <button
                    onClick={() => removeFromFavorites(meal, props.loggedInUser.username, props.setLoggedInUser)}
                  >
                    Remove from Favorites
                  </button>
                ) : null}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
