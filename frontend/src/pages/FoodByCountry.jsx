import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fetchCountries from "../utility/fetchCountries.js";

export default function FoodByCountry(props) {

    const navigate = useNavigate();

  useEffect(() => {
    fetchCountries("", props.setCountries);
  }, [props.setCountries]);

  return (
    <div className="countriesContainer">
      <h1>Countries</h1>
      <div className="countryList">
        {props.countries.map((country) => {
          return (
            <div
              className="country"
              key={country.strAreaCode}
            >
              <h2>{country.strArea}</h2>
              <img
                src={`./flags/${country.strAreaCode.toLowerCase()}.svg`}
                alt={country.strArea}
                width={"150px"}
                onClick={() => [
                    props.setClickedCountry(country.strArea),
                    navigate(`${country.strArea}`),
                    console.log(country.strArea)
                  ]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
