import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import addToFavorites from "../utility/addToFavorites.js";
import removeFromFavorites from "../utility/removeFromFavorites.js";
import SearchBar from "./SearchBar.js";

export function FilteredMeals(props) {
  const [filteredMeals, setFilteredMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilteredMeals = async () => {
      const response = await fetch(
        `http://localhost:4000/api/v1/category/${props.category}`
      );
      const responseJSON = await response.json();
      console.log(responseJSON);
      setFilteredMeals(responseJSON);
    };
    fetchFilteredMeals();
  }, [props.category]);

  return (
    <div className="recipesContainer">
      <h1>{props.category.charAt(0).toUpperCase() + props.category.slice(1)} recipes</h1>
      <SearchBar
        setRecipes={props.setRecipes}
        allRecipes={props.allRecipes}
        searchValue={props.searchValue}
        setSearchValue={props.setSearchValue}
      />
      <br />
      <br />
      <div className="recipeList">
        {filteredMeals
          .filter((recipe) => {
            return recipe.strMeal.toLowerCase().includes(props.searchValue.toLowerCase());
          })
          .slice(0, props.loadedRecipes)
          .map((recipe) => {
            return (
              <div className="recipe" key={recipe.idMeal}>
                <div className="recipeName">
                  <h2>{recipe.strMeal}</h2>
                </div>
                <div className="recipeInfo">
                  <img src={recipe.strMealThumb} alt={recipe.name} width={"200px"}></img>
                  <br />
                  <button
                    onClick={() => {
                      props.setClickedRecipe(recipe);
                      navigate(`${recipe.strMeal}`);
                      props.setPage(`/category/${props.category}`);
                    }}
                  >
                    Recipe
                  </button>
                  {props.loggedInUser &&
                  !props.loggedInUser.favorites.includes(recipe._id) ? (
                    <button
                      onClick={() =>
                        addToFavorites(
                          recipe,
                          props.loggedInUser.username,
                          props.setLoggedInUser
                        )
                      }
                    >
                      Add to Favorites
                    </button>
                  ) : props.loggedInUser &&
                    props.loggedInUser.favorites.includes(recipe._id) ? (
                    <button
                      onClick={() =>
                        removeFromFavorites(
                          recipe,
                          props.loggedInUser.username,
                          props.setLoggedInUser
                        )
                      }
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
