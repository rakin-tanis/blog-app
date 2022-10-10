import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import Banner from "../components/Banner";
import SearchBar from "../components/SearchBar";
import { search } from "../services/search";
import PostList from "../components/PostList";

const Home = () => {
  const [searchText, setSearchText] = useState('');

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["search", searchText],
    queryFn: () => search(searchText),
    keepPreviousData: true,
  });

  return (
    <div className="App">
      <Banner />
      <SearchBar searchText={searchText} setSearchText={setSearchText} refetch={refetch} />
      <PostList posts={data}></PostList>
    </div>
  );
};

export default Home;
