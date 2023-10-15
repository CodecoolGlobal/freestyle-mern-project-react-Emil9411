const fetchCountries = async (string, setCountries, setRecipes, setAllRecipes) => {
    try {
        if (!string) {
            const countriesResponse = await fetch(`http://localhost:4000/api/v1/countries`);
            const countriesResponseJson = await countriesResponse.json();
            setCountries(countriesResponseJson);
            console.log(countriesResponseJson);
        } else {
            const foodByCountry = await fetch(
                `http://localhost:4000/api/v1/country/${string}`
            );
            const foodByCountryJson = await foodByCountry.json();
            setRecipes(foodByCountryJson);
            setAllRecipes(foodByCountryJson);
            console.log(foodByCountryJson);
        }
    } catch (error) {
        console.log(error);
    }
}

export default fetchCountries;