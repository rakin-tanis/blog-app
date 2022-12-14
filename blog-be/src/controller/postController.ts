import { NextFunction, Request, Response } from "express";
import {
  dislike,
  getAll,
  getById,
  like,
  save,
  view,
} from "../repository/postRepository";
import url from "url";
import { search } from "../repository/postRepository";
import { PostReq } from "../types/types";

export const getAllPosts = async (req: Request, res: Response) => {
  const posts = await getAll();
  res.status(200).json(posts);
};

export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const post = await getById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

export const addPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postReq: PostReq = {
      ...req.body,
      image: req.file?.filename,
    };
    const post = await save(postReq);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

export const increaseLikeCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await like(req.params.id);
    const post = await getById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

export const decreaseLikeCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await dislike(req.params.id);
    const post = await getById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

export const increaseViewCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await view(req.params.id);
    const post = await getById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

export const searchPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const queryObject = url.parse(req.url, true).query;
    const post = await search(queryObject.q as string);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};