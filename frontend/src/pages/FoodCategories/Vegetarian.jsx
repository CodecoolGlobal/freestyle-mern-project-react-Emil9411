import { FilteredMeals } from "../../component/FilteredMeals.js";

export default function Vegetarian(props) {
  return (
    <FilteredMeals
      category={"vegetarian"}
      setClickedRecipe={props.setClickedRecipe}
      setPage={props.setPage}
      searchValue={props.searchValue}
      setSearchValue={props.setSearchValue}
      recipes={props.recipes}
      setRecipes={props.setRecipes}
      allRecipes={props.allRecipes}
      loggedInUser={props.loggedInUser}
      setLoggedInUser={props.setLoggedInUser}
    />
  );
}