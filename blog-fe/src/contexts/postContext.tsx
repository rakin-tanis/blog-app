import { createContext, useRef, useState } from 'react';
// import { useMutation, useQuery } from '@tanstack/react-query';
// import { getPosts, likePost, viewPost } from '../services/post';
// import { search as makeSearchRequest } from '../services/post';
import { Post } from '../types/Post';

const defaultValues = {
  posts: [] as Array<Post>, 
  post: {} as Post | undefined,
  setPosts: (data: Post[]) => {},
  setPost: (data: Post) => {}
}

export const PostContext = createContext(defaultValues);

// let isSearch = false;

export const PostProvider = ({ children }: any) => {
  const [posts, setPosts] = useState<Post[]>([])
  // const [searchText, setSearchText] = useState('')
  const [post, setPost] = useState<Post>();

  /* const { refetch: reSearch } = useQuery({
    queryKey: ["search", searchText],
    queryFn: () => makeSearchRequest(searchText),
    keepPreviousData: true,
    onSuccess: (data) => {
      if(isSearch) setPosts(data)
    }
  }); */

  /* const { data } = useQuery({
    queryKey: ['getPosts'],
    queryFn: () => getPosts(),
    keepPreviousData: true,
    onSuccess: (data: Post[]) => setPosts(data)
  }) */

  /* const { mutate: likeMutate } = useMutation({
    mutationFn: async (postId: string) => {
      return likePost(postId)
    },
    onSuccess: (data: Post) => {
      const oldPosts = posts.filter(p => p.id !== data.id)
      setPosts([...oldPosts, data])
      selectedPost.current = data;
    }
  }) */

  /* const { mutate: viewMutate } = useMutation({
    mutationFn: async (postId: string) => {
      return viewPost(postId)
    },
    onSuccess: (data: Post) => {
      const oldPosts = posts.filter(p => p.id !== data.id)
      setPosts([...oldPosts, data])
      selectedPost.current = data;
    }
  }) */

  /* const search = (searchText: string) => {
    isSearch = true;
    setSearchText(searchText);
    reSearch();
  } */

  /* const getAll = () => {
    if (data) {
      setPosts(data)
    }
  } */

  /* const like = (postId: string) => {
    console.log('liked')
    likeMutate(postId)
  } */

  /* const view = (postId: string) => {
    if(selectedPost.current?.id === postId) return 
    selectedPost.current = (posts.find(p => p.id === postId))
    viewMutate(postId)
  } */

  return (
    <PostContext.Provider value={{ posts, post, setPosts, setPost }}>
      {children}
    </PostContext.Provider >
  );
}