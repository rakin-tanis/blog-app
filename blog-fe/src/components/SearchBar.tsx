import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useState } from "react";
import { PostContext } from '../contexts/postContext';
import { useSearch } from '../hooks/useSearch';

const SearchBar = () => {
  const { setPosts } = useContext(PostContext)
  const [searchText, setSearchText] = useState("");
  const { search } = useSearch(searchText);
  // const { getAll } = usePosts()

  const SEARCH_INPUT_LIMIT = 3;

  const handleKeyEvents = (event: { key: string; }) => {
    if (event.key === "Enter") {
      searchBlogs(searchText);
    }
  };

  const searchBlogs = (value: string | any[]) => {
    search();
  };

  return (
    <div className="searchBar">
      <div
        className="searchIcon search"
        onClick={() => searchBlogs(searchText)}
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