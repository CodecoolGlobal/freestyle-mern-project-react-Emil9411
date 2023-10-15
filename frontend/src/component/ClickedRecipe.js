import { useNavigate } from "react-router-dom";
export default function ClickedRecipe({ clickedRecipe, setClickedRecipe, page }) {
  const navigate = useNavigate();

  if (!clickedRecipe) {
    return <h2>Loading recipe..</h2>;
  }

  return (
    <>
      <table className="clickedRecipe">
        <tbody>
          <tr>
            <td>
        <h1>{clickedRecipe.strMeal}</h1>
        <img
          src={clickedRecipe.strMealThumb}
          alt={clickedRecipe.strMeal}
          width={"300px"}
          className="clickedRecipeImg"
        ></img>
        </td>
        <td colSpan={"2"}>
        <section className="ingredients">
        <h4>Ingredients:</h4>
          <ul>
            {clickedRecipe.strIngredient1 ? (
              <li>
                {clickedRecipe.strMeasure1} {clickedRecipe.strIngredient1}
              </li>
            ) : null}
            {clickedRecipe.strIngredient2 ? (
              <li>
                {clickedRecipe.strMeasure2} {clickedRecipe.strIngredient2}
              </li>
            ) : null}
            {clickedRecipe.strIngredient3 ? (
              <li>
                {clickedRecipe.strMeasure3} {clickedRecipe.strIngredient3}
              </li>
            ) : null}
            {clickedRecipe.strIngredient4 ? (
              <li>
                {clickedRecipe.strMeasure4} {clickedRecipe.strIngredient4}
              </li>
            ) : null}
            {clickedRecipe.strIngredient5 ? (
              <li>
                {clickedRecipe.strMeasure5} {clickedRecipe.strIngredient5}
              </li>
            ) : null}
            {clickedRecipe.strIngredient6 ? (
              <li>
                {clickedRecipe.strMeasure6} {clickedRecipe.strIngredient6}
              </li>
            ) : null}
            {clickedRecipe.strIngredient7 ? (
              <li>
                {clickedRecipe.strMeasure7} {clickedRecipe.strIngredient7}
              </li>
            ) : null}
            {clickedRecipe.strIngredient8 ? (
              <li>
                {clickedRecipe.strMeasure8} {clickedRecipe.strIngredient8}
              </li>
            ) : null}
            {clickedRecipe.strIngredient9 ? (
              <li>
                {clickedRecipe.strMeasure9} {clickedRecipe.strIngredient9}
              </li>
            ) : null}
            {clickedRecipe.strIngredient10 ? (
              <li>
                {clickedRecipe.strMeasure10} {clickedRecipe.strIngredient10}
              </li>
            ) : null}
            {clickedRecipe.strIngredient11 ? (
              <li>
                {clickedRecipe.strMeasure11} {clickedRecipe.strIngredient11}
              </li>
            ) : null}
            {clickedRecipe.strIngredient12 ? (
              <li>
                {clickedRecipe.strMeasure12} {clickedRecipe.strIngredient12}
              </li>
            ) : null}
            {clickedRecipe.strIngredient13 ? (
              <li>
                {clickedRecipe.strMeasure13} {clickedRecipe.strIngredient13}
              </li>
            ) : null}
            {clickedRecipe.strIngredient14 ? (
              <li>
                {clickedRecipe.strMeasure14} {clickedRecipe.strIngredient14}
              </li>
            ) : null}
            {clickedRecipe.strIngredient15 ? (
              <li>
                {clickedRecipe.strMeasure15} {clickedRecipe.strIngredient15}
              </li>
            ) : null}
            {clickedRecipe.strIngredient16 ? (
              <li>
                {clickedRecipe.strMeasure16} {clickedRecipe.strIngredient16}
              </li>
            ) : null}
            {clickedRecipe.strIngredient17 ? (
              <li>
                {clickedRecipe.strMeasure17} {clickedRecipe.strIngredient17}
              </li>
            ) : null}
            {clickedRecipe.strIngredient18 ? (
              <li>
                {clickedRecipe.strMeasure18} {clickedRecipe.strIngredient18}
              </li>
            ) : null}
            {clickedRecipe.strIngredient19 ? (
              <li>
                {clickedRecipe.strMeasure19} {clickedRecipe.strIngredient19}
              </li>
            ) : null}
            {clickedRecipe.strIngredient20 ? (
              <li>
                {clickedRecipe.strMeasure20} {clickedRecipe.strIngredient20}
              </li>
            ) : null}
          </ul>
        </section>
        </td>
        </tr>
        <tr>
        <td colSpan={"3"}>
        <section className="instruction">
          <h4>Instruction:</h4>
          <p>{clickedRecipe.strInstructions}</p>
        </section>
        </td>
        </tr>
        </tbody>
      </table>
      <button onClick={() => [setClickedRecipe(null), navigate(`${page}`)]}>Back</button>
    </>
  );
}
