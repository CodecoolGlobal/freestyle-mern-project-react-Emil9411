import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Measurement from "./Measurement.js";

export default function ClickedRecipe(props) {
  const [show, setShow] = useState(false);
  const [measure, setMeasure] = useState("metric");

  const navigate = useNavigate();

  if (!props.clickedRecipe) {
    return <h2>Loading recipe..</h2>;
  }

  return (
    <>
      <Measurement
        show={show}
        handleClose={() => setShow(false)}
        measure={measure}
        setMeasure={setMeasure}
      />
      <table className="clickedRecipe">
        <tbody>
          <tr>
            <td>
              <h1>{props.clickedRecipe.strMeal}</h1>
              <img
                src={props.clickedRecipe.strMealThumb}
                alt={props.clickedRecipe.strMeal}
                width={"300px"}
                className="clickedRecipeImg"
              ></img>
            </td>
            <td colSpan={"2"}>
              <section className="ingredients">
                <h4>Category: {props.clickedRecipe.strCategory}</h4>
                <h4>Origin: {props.clickedRecipe.strArea}</h4>
                <h4>Ingredients:</h4>
                <ul>
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                    const ingredient = props.clickedRecipe[`strIngredient${index}`];
                    const measure = props.clickedRecipe[`strMeasure${index}`];

                    if (ingredient) {
                      return (
                        <li key={index}>
                          {measure} {ingredient}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </section>
            </td>
          </tr>
          <tr>
            <td colSpan={"3"}>
              <section className="instruction">
                <h4>Instruction:</h4>
                <p>{props.clickedRecipe.strInstructions}</p>
              </section>
              <button
                onClick={() => [props.setClickedRecipe(null), navigate(`${props.page}`)]}
              >
                Back
              </button>
              <button onClick={() => setShow(true)}>Change measurement</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
