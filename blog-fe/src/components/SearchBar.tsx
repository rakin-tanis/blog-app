import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import { useSearch } from '../hooks/useSearch';

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const { search } = useSearch(searchText);

  const handleKeyEvents = (event: { key: string; }) => {
    if (event.key === "Enter") {
      search()
    }
  };

  return (
    <div className="searchBar">
      <div
        className="searchIcon search"
        onClick={() => search()}
      >
        <FontAwesomeIcon icon={["fas", "magnifying-glass"]} />
      </div>
      <input
        className="searchInput"
        type="text"
        id="header-search"
        placeholder="Search blog posts"
        name="s"
        onChange={(event) => setSearchText(event.target.value)}
        value={searchText}
        onKeyDown={handleKeyEvents}
      />
      <div
        className={`searchIcon clear ${
          searchText.length > 0 ? "visible" : "gone"
        }`}
        onClick={() => setSearchText("")}
      >
        <FontAwesomeIcon icon={["fas", "xmark"]} />
      </div>
    </div>
  );
};

export default SearchBar;