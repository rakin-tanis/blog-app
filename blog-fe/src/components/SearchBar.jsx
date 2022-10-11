import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from "react";
import { PostContext } from "../contexts/postContext";

const SearchBar = () => {
  const { search } = useContext(PostContext);
  const [searchText, setSearchText] = useState("");

  const SEARCH_INPUT_LIMIT = 3;

  const handleKeyEvents = (event) => {
    if (event.key === "Enter") {
      searchBlogs(searchText);
    }
  };

  const searchBlogs = (value) => {
    if (value.length < SEARCH_INPUT_LIMIT) {
      return;
    }
    console.log("search: " + value);
    search(searchText);
  };

  return (
    <div className="searchBar">
      <div
        className="searchIcon search"
        onClick={() => searchBlogs(searchText)}
      >
        <FontAwesomeIcon icon={["solid", "magnifying-glass"]} />
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
        <FontAwesomeIcon icon={["solid", "xmark"]} />
      </div>
    </div>
  );
};

export default SearchBar;