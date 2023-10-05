const handleSearch = (searchedItem, setter, allReci) => {
  if (searchedItem === "") {
    setter(allReci);
  } else {
    const filteredRecipes = allReci.filter((recipe) => {
      return recipe.strMeal.toLowerCase().includes(searchedItem.toLowerCase());
    });
    setter(filteredRecipes);
  }
};

export default handleSearch;
