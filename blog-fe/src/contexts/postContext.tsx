import { createContext, useRef, useState } from 'react';
import { Post } from '../types/Post';

const defaultValues = {
  posts: [] as Array<Post>, 
  post: {} as Post | undefined,
  setPosts: (data: Post[]) => {},
  setPost: (data: Post) => {}
}

export const PostContext = createContext(defaultValues);

export const PostProvider = ({ children }: any) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [post, setPost] = useState<Post>();

  return (
    <PostContext.Provider value={{ posts, post, setPosts, setPost }}>
      {children}
    </PostContext.Provider >
  );
}