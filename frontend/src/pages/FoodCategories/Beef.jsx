import { FilteredMeals } from "../../component/FilteredMeals.js";

export default function Beef(props) {
  return (
    <FilteredMeals
      category={"beef"}
      setClickedRecipe={props.setClickedRecipe}
      setPage={props.setPage}
    />
  );
}
