import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function ClickedCountry(props) {
  const [clickedCountryData, setClickedCountryData] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/country/${props.clickedCountry}`)
      .then((response) => response.json())
      .then((data) => setClickedCountryData(data))
      .catch((error) => console.log(error));
  }, [props.clickedCountry]);

  if (!props.clickedCountry) {
    return <h2>Loading country..</h2>;
  }

  return (
    <div className="recipesContainer">
      <h2>{props.clickedCountry}</h2>
      <button onClick={() => [props.setClickedCountry(null), navigate(`/foodByCountry`)]}>
        Back
      </button>
      <br />
      <br />
      <div className="recipeList">
        {clickedCountryData &&
          clickedCountryData.map((meal) => {
            return (
              <div className="recipe" key={meal.idMeal}>
                <div className="recipeName">
                  <h3>{meal.strMeal}</h3>
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
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
