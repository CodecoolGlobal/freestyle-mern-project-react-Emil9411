const fetchRecipes = async (string, setRecipes, setAllRecipes) => {
    try {
      if (!string) {
        const recipesResponse = await fetch(`http://localhost:4000/api/v1/meals`);
        const recipesResponseJson = await recipesResponse.json();
        setRecipes(recipesResponseJson);
        setAllRecipes(recipesResponseJson);
        console.log(recipesResponseJson);
      } else {
        const recipesResponse = await fetch(
          `http://localhost:4000/api/v1/category/${string}`
        );
        const recipesResponseJson = await recipesResponse.json();
        setRecipes(recipesResponseJson);
        setAllRecipes(recipesResponseJson);
        console.log(recipesResponseJson);
      }
    } catch (error) {
      console.log(error);
    }
  };

  export default fetchRecipes