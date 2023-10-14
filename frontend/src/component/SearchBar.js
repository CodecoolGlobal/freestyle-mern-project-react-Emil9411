import React from "react";
import handleSearch from "../utility/handleSearch.js";

export default function SearchBar(props) {
  const handleChanges = (event) => {
    const newValues = event.target.value;
    props.setSearchValue(newValues);
    handleSearch(newValues, props.setRecipes, props.allRecipes);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipe"
        className="form-control"
        value={props.searchValue}
        onChange={handleChanges}
      />
    </div>
  );
}
