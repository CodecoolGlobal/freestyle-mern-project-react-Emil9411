const addToFavorites = async (recipe, user) => {
    try {
      const response = await fetch(
        `http://localhost:4000/user/add-to-favorites`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: user,
            idMeal: recipe.idMeal,
          }),
        }
      );
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.log(error);
    }
  };
  
  export default addToFavorites;