import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import PostList from "../components/PostList";

const Home = () => {
  
  return (
    <div className="App">
      <Banner />
      <SearchBar/>
      <PostList />
    </div>
  );
};

export default Home;
