import React, { useState } from "react";

export default function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");

  const handleChanges = (event) => {
    const newValues = event.target.value;
    setSearchValue(newValues);
    props.handleSearch(newValues);
  }

    return (
        <label className="searchBar">
          <input
            type="text"
            placeholder="Search recipe"
            value={searchValue}
            onChange={handleChanges}
          />
        </label>
      );
}