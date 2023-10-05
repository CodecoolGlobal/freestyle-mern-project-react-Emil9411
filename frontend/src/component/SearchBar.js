import React from "react";
import handleSearch from "../utility/handleSearch.js";


export default function SearchBar(props) {

  const handleChanges = (event) => {
    const newValues = event.target.value;
    props.setSearchValue(newValues);
    handleSearch(newValues,props.setRecipes,props.allRecipes);
  }

    return (
        <label className="searchBar">
          <input
            type="text"
            placeholder="Search recipe"
            value={props.searchValue}
            onChange={handleChanges}
          />
        </label>
      );
}