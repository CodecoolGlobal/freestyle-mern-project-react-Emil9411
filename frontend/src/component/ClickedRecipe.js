import { useNavigate } from "react-router-dom";
export default function ClickedRecipe({
  clickedRecipe,
  setClickedRecipe,
  page,
}) {
  const navigate = useNavigate();

  if (!clickedRecipe) {
    return <h2>Loading recipe..</h2>;
  }

  return (
    <>
      <div className="clickedRecipe">
      <h2>{clickedRecipe.strMeal}</h2>
        <img
          src={clickedRecipe.strMealThumb}
          alt={clickedRecipe.name}
          width={"200px"}
          className="clickedRecipeImg"
        ></img>
        <section className="instruction">
          <h4>Instruction:</h4>
          <p>{clickedRecipe.strInstructions}</p>
        </section>
        <section className="ingredients">
          <ul>
            
          </ul>
        </section>
      </div>
      <button onClick={() => [setClickedRecipe(null), navigate(`${page}`)]}>
        Back
      </button>
    </>
  );
}
