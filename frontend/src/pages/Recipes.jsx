import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../component/SearchBar";

export default function Recipes(props) {
  const navigate = useNavigate();

  const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loadedRecipes, setLoadedRecipes] = useState(12);

  const fetchAllRecipes = async () => {
    try {
      const recipesResponse = await fetch(`http://localhost:4000/api/v1`);
      const recipesResponseJson = await recipesResponse.json();
      setRecipes(recipesResponseJson);
      setAllRecipes(recipesResponseJson);
      console.log(recipesResponseJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAllRecipes();
  }, [loadedRecipes]);

  const handleScroll = () => {
    if (
      window.innerHeight + Math.round(window.scrollY) >=
      document.body.offsetHeight
    ) {
      setLoadedRecipes((prevLoadedItems) => prevLoadedItems + 12);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Search
  const handleSearch = (searchedItem) => {
    if (searchedItem === "") {
      setRecipes(allRecipes);
    } else {
      const filteredRecipes = allRecipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchedItem.toLowerCase());
      });
      setRecipes(filteredRecipes);
    }
  };

  return (
    <div className="recipesContainer">
      <h1>Recipes</h1>
      <SearchBar handleSearch={handleSearch} />
      <br /><br />
      <div className="recipeList">
        {recipes.slice(0, loadedRecipes).map((recipe) => {
          return (
            <div className="recipe" key={recipe.idMeal}>
              <div className="recipeName">
                <h2>{recipe.name}</h2>
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
                    navigate(`${recipe.name}`),
                    props.setPage("recipes"),
                  ]}
                >
                  Recipe
                </button>
                <button>Add to Favorites</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// check if user is logged in, if not, display login button, if yes, display add to favorites button
// if user is logged in, display user's username, with arrow to dropdown menu, for settings, logout, favorites
// check in useeffect, fetch user's favorites, compare to recipe id, if match, display
// remove from favorites button instead of add to favorites button
