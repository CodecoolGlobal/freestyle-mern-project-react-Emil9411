import { FilteredMeals } from "../../component/FilteredMeals.js";

export default function Seafood(props) {
  return (
    <FilteredMeals
      category={"seafood"}
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