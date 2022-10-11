import { PostReq } from "../types/Post";
import { fetcher } from "./fetcher";

export const getPosts = async () => {
  return await fetcher({ method: "GET", path: `/post` });
}

export const getPost = async (postId: string) => {
  if (!postId) return;
  return await fetcher({ method: "GET", path: `/post/${postId}` });
}

export const addPost = async (post: PostReq) => {
  return await fetcher({ method: "POST", path: `/post`, data: post });
}

export const likePost = async (postId: string | undefined) => {
  if (!postId) return;
  return await fetcher({ method: "PUT", path: `/post/like/${postId}` });
}

export const viewPost = async (postId: string) => {
  if (!postId) return;
  return await fetcher({ method: "PUT", path: `/post/view/${postId}` });
}

export const search = async (searchText: string) => {
  return await fetcher({ method: "GET", path: `/post/search?q=${searchText}` });
}