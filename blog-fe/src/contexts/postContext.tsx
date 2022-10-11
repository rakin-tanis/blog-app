import { createContext, useRef, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { likePost, viewPost } from '../services/post';
import { search as makeSearchRequest } from '../services/search';
import { Post } from '../types/Post';

const defaultValues = {
  posts: [] as Array<Post>, 
  post: {} as Post | undefined, 
  like: (postId: string) => {}, 
  view: (postId: string) => {}, 
  search: (searchText: string) => {}
}

export const PostContext = createContext(defaultValues);

export const PostProvider = ({ children }: any) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [searchText, setSearchText] = useState('')
  const selectedPost = useRef<Post>();

  const { refetch: reSearch } = useQuery({
    queryKey: ["search", searchText],
    queryFn: () => makeSearchRequest(searchText),
    keepPreviousData: true,
    onSuccess: (data) => setPosts(data)
  });

  const { mutate: likeMutate } = useMutation({
    mutationFn: async (postId: string) => {
      return likePost(postId)
    },
    onSuccess: (data: Post) => {
      const oldPosts = posts.filter(p => p.id !== data.id)
      setPosts([...oldPosts, data])
      selectedPost.current = data;
    }
  })

  const { mutate: viewMutate } = useMutation({
    mutationFn: async (postId: string) => {
      return viewPost(postId)
    },
    onSuccess: (data: Post) => {
      const oldPosts = posts.filter(p => p.id !== data.id)
      setPosts([...oldPosts, data])
      selectedPost.current = data;
    }
  })

  const search = (searchText: string) => {
    setSearchText(searchText);
    reSearch();
  }

  const like = (postId: string) => {
    console.log('liked')
    likeMutate(postId)
  }

  const view = (postId: string) => {
    if(selectedPost.current?.id === postId) return 
    selectedPost.current = (posts.find(p => p.id === postId))
    viewMutate(postId)
  }

  return (
    <PostContext.Provider value={{ posts, post: selectedPost.current, like, view, search }}>
      {children}
    </PostContext.Provider >
  );
}