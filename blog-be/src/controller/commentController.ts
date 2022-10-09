import { NextFunction, Request, Response } from "express";
import { getAllByPost, getById, save } from "../repository/commentRepository";
import { getById as getPostById } from "../repository/postRepository";

export const getAllCommentsByPost = async (req: Request, res: Response) => {
  const comments = await getAllByPost(req.params.id);
  res.status(200).json(comments);
};

export const getCommentById = async (req: Request, res: Response) => {
  const comment = await getById(req.params.id);
  res.status(200).json(comment);
};

export const addComment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await getPostById(req.params.postId);
    const comment = await save(req.params.postId, req.body);
    res.status(200).json(comment);
  } catch (error) {
    next(error);
  }
};