import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../services/post';

export const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    keepPreviousData: true,
  });