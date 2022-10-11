import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { PostContext } from "../contexts/postContext";
import { getPosts, search as makeSearchRequest } from '../services/post';
import { Post } from "../types/Post";

const SEARCH_INPUT_LIMIT = 3;

export const useSearch = (searchText: string) => {
  const { setPosts } = useContext(PostContext)

  const { refetch } = useQuery({
    queryKey: ["search", searchText],
    queryFn: () => {
      console.log(searchText)
      if(searchText?.length > SEARCH_INPUT_LIMIT){
        console.log('search')
        return makeSearchRequest(searchText)
      }else{
        console.log('posts')
        return getPosts()
      }
    },
    keepPreviousData: true,
    onSuccess: (data: Post[]) => {
      setPosts(data);
    } 
  });

  return { search: refetch }
}