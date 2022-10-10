import { CommentReq } from "../types/Comment";
import { fetcher } from "./fetcher";

export const getCommentById = async (commentId: string) => {
  return await fetcher({ method: "GET", path: `/comment/${commentId}` });
}

export const getCommentsByPostId = async (postId: string) => {
  return await fetcher({ method: "GET", path: `/posts/comments/${postId}` });
};

export const addComment = async (postId: string, comment: CommentReq) => {
  return await fetcher({ method: "POST", path: `/comment/${postId}`, data: comment });
}