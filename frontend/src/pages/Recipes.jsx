import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../component/SearchBar.js";
import handleScroll from "../utility/handleScroll.js";
import addToFavorites from "../utility/addToFavorites.js";
import removeFromFavorites from "../utility/removeFromFavorites.js";
import fetchRecipes from "../utility/fetchRecipes.js";

export default function Recipes(props) {
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes("", props.setRecipes, props.setAllRecipes);
  }, [props.loadedRecipes, props.setRecipes, props.setAllRecipes, props.loggedInUser]);

  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll(props.setLoadedRecipes));
    return () => {
      window.removeEventListener("scroll", () =>
        handleScroll(props.setLoadedRecipes)
      );
    };
  }, [props.setLoadedRecipes]);

  return (
    <div className="recipesContainer">
      <h1>Recipes</h1>
      <SearchBar
        setRecipes={props.setRecipes}
        allRecipes={props.allRecipes}
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />
      <br />
      <br />
      <div className="recipeList">
        {props.recipes.filter((recipe) => {
          if (props.searchValue === "") {
            return recipe;
          } else if (
            recipe.strMeal.toLowerCase().includes(props.searchValue.toLowerCase())
          ) {
            return recipe;
          }
          return null;
        }).slice(0, props.loadedRecipes).map((recipe) => {
          return (
            <div className="recipe" key={recipe.idMeal}>
              <div className="recipeName">
                <h2>{recipe.strMeal}</h2>
              </div>
              <div className="recipeInfo">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.name}
                  width={"200px"}
                ></img>
                <br />
                <button
                  onClick={() => [
                    props.setClickedRecipe(recipe),
                    navigate(`${recipe.strMeal}`),
                    props.setPage("recipes"),
                  ]}
                >
                  Recipe
                </button>
                {props.loggedInUser && !props.loggedInUser.favorites.includes(recipe._id) ? (
                  <button
                    onClick={() => addToFavorites(recipe, props.loggedInUser.username, props.setLoggedInUser)}
                  >
                    Add to Favorites
                  </button>
                ) : props.loggedInUser && props.loggedInUser.favorites.includes(recipe._id) ? (
                  <button
                    onClick={() => removeFromFavorites(recipe, props.loggedInUser.username, props.setLoggedInUser)}
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
