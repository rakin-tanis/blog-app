import { Request, Response } from "express";
import { getAllByPost, getById, save } from "../repository/commentRepository";

export const getAllCommentsByPost = async (req: Request, res: Response) => {
  const comments = await getAllByPost(req.params.id);
  return res.status(200).json(comments);
};

export const getCommentById = async (req: Request, res: Response) => {
  const comment = await getById(req.params.id);
  return res.status(200).json(comment);
};

export const addPost = async (req: Request, res: Response) => {
  const comment = await save(req.params.postId, req.body);
  return res.status(200).json(comment);
};