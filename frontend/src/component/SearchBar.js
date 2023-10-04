export default function SearchBar(props) {

    return (
        <label className="searchBar">
          <input
            type="text"
            placeholder="Search recipe"
            onChange={(event) => props.handleSearch(event.target.value)}
          />
        </label>
      );
}