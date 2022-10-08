import { Request, Response } from "express";
import { getAll, getById, like, save, view } from "../repository/postRepository";

export const getAllPosts = async (req: Request, res: Response) => {
  const posts = await getAll();
  return res.status(200).json(posts);
};

export const getPost = async (req: Request, res: Response) => {
  const post = await getById(req.params.id);
  return res.status(200).json(post);
};

export const addPost = async (req: Request, res: Response) => {
  const comment = await save(req.body);
  return res.status(200).json(comment);
};

export const increaseLikeCount = async (req: Request, res: Response) => {
  await like(req.params.id);
  const post = await getById(req.params.id);
  return res.status(200).json(post);
};

export const increaseViewCount = async (req: Request, res: Response) => {
  await view(req.params.id);
  const post = await getById(req.params.id);
  return res.status(200).json(post);
};
