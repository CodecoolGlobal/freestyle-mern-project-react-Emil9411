import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Recipes(props) {
    const navigate = useNavigate();

    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            const recipesResponse = await fetch("http://localhost:4000/api/v1");
            const recipesData = await recipesResponse.json();
            setRecipes(recipesData);
            console.log(recipesData);
        };
        fetchRecipes();
    }, [])

    if (!recipes) {
        return <h2>Recipes are loading...</h2>
    }

    return (
        <div className="recipesContainer">
            <h1>Recipes</h1>
            {recipes.map((recipe) => {
                return (
                    <section className="recipe" key={recipe.idMeal}>
                        <h2>{recipe.name}</h2>
                        <img src={recipe.strMealThumb} alt={recipe.name} width={"200px"}></img>
                        <br />
                        <button onClick={() => [props.setClickedRecipe(recipe), navigate(`${recipe.name}`), props.setPage("recipes")]}>Recipe</button>
                        <button>Add to Favorites</button>
                    </section>
                )
            })}
        </div>
    )
}

// check if user is logged in, if not, display login button, if yes, display add to favorites button
// if user is logged in, display user's username, with arrow to dropdown menu, for settings, logout, favorites
// check in useeffect, fetch user's favorites, compare to recipe id, if match, display 
// remove from favorites button instead of add to favorites button