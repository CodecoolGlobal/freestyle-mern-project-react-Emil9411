import React from "react";

export default function SearchBar(props) {
  const handleChanges = (event) => {
    const newValues = event.target.value;
    props.setSearchValue(newValues);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipe"
        className="form-control"
        value={props.searchValue? props.searchValue : ""}
        onChange={handleChanges}
      />
    </div>
  );
}
