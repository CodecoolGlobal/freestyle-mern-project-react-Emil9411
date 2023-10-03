import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Recepies(props) {
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
                    </section>
                )
            })}
        </div>
    )
}