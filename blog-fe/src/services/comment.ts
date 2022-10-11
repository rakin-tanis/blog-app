import { CommentReq } from "../types/Comment";
import { fetcher } from "./fetcher";

export const getCommentById = async (commentId: string) => {
  if (!commentId) return; 
  return await fetcher({ method: "GET", path: `/comment/${commentId}` });
}

export const getCommentsByPostId = async (postId: string | undefined) => {
  if (!postId) return; 
  return await fetcher({ method: "GET", path: `/post/comments/${postId}` });
};

export const addComment = async (postId: string, comment: CommentReq) => {
  if (!postId) return; 
  return await fetcher({ method: "POST", path: `/comment/${postId}`, data: comment });
}