import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../component/SearchBar";

export default function Recipes(props) {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [loadedRecipes, setLoadedRecipes] = useState(12);
  //   const [pag, setPag] = useState(1);
  //   const [loading, setLoading] = useState(false);

  //   const initialLoadLimit = 12;

  //   const observer = useRef(null);

  useEffect(() => {
    const fetchAllRecipes = async () => {
      try {
        const recipesResponse = await fetch(`http://localhost:4000/api/v1`);
        const recipesResponseJson = await recipesResponse.json();
        setRecipes(recipesResponseJson);
        console.log(recipesResponseJson);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllRecipes();
  }, [loadedRecipes]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
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

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     setLoading(true);
  //     try {
  //       const recipesToLoad = allRecipes.slice(
  //         (pag - 1) * initialLoadLimit,
  //         pag * initialLoadLimit
  //       );

  //       setRecipes((prevRecipes) => [...prevRecipes, ...recipesToLoad]);
  //       setPag((prevPag) => prevPag + 1);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   if (observer.current) {
  //     observer.current.disconnect();
  //   }

  //   observer.current = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting && !loading) {
  //       fetchRecipes();
  //     }
  //   });

  //   observer.current.observe(document.querySelector("#scroll-loader"));

  //   return () => {
  //     if (observer.current) {
  //       observer.current.disconnect();
  //     }
  //   };
  // }, [allRecipes, pag, loading]);

  //Search
  const handleSearch = (query) => {
    if (query === "") {
      // Reset to all recipes
      setRecipes(recipes);
    } else {
      // Filter recipes by name
      const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      );
      setRecipes(filteredRecipes);
    }
  };

  return (
    <div className="recipesContainer">
      <h1>Recipes</h1>
      <SearchBar handleSearch={handleSearch} />
      <div className="recipeList">
        {recipes.slice(0, loadedRecipes).map((recipe) => {
          return (<div className="recipe" key={recipe.idMeal}>
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
          </div>)
})}
      </div>
      {/* <div id="scroll-loader" style={{ height: "10px" }}></div>
      {loading && <p>Loading...</p>} */}
    </div>
  );
}

// check if user is logged in, if not, display login button, if yes, display add to favorites button
// if user is logged in, display user's username, with arrow to dropdown menu, for settings, logout, favorites
// check in useeffect, fetch user's favorites, compare to recipe id, if match, display
// remove from favorites button instead of add to favorites button
