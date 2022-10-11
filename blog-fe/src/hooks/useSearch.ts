import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { PostContext } from "../contexts/postContext";
import { getPosts, search as makeSearchRequest } from "../services/post";
import { Post } from "../types/Post";

const SEARCH_INPUT_LIMIT = 3;

export const useSearch = (searchText: string) => {
  const { setPosts } = useContext(PostContext);

  const { refetch } = useQuery({
    queryKey: ["search", searchText],
    queryFn: () => {
      if (searchText?.length > SEARCH_INPUT_LIMIT) {
        return makeSearchRequest(searchText);
      } else {
        return getPosts();
      }
    },
    keepPreviousData: true,
    onSuccess: (data: Post[]) => {
      setPosts(data);
    },
  });

  return { search: refetch };
};
