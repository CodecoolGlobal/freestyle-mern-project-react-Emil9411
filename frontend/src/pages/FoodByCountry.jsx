import React, { useEffect } from "react";
import fetchCountries from "../utility/fetchCountries.js";

export default function FoodByCountry(props) {

    useEffect(() => {
        fetchCountries("", props.setCountries);
    }
    , [props.setCountries]);


    return (
        <div className="countriesContainer">
            <h1>Countries</h1>
            <div className="countryList">
                {props.countries.map((country, i) => {
                    return (
                        <div className="country" key={country.strAreaCode}>
                            <h2>{country.strArea}</h2>
                            <img src={`./flags/${country.strAreaCode.toLowerCase()}.svg`}
                                alt={country.strArea}
                                width={"150px"} />
                        </div>
                    );
                }
                )}
            </div>
        </div>
    )
}