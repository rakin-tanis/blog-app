import express from "express";
import { getAllCommentsByPost } from "../controller/commentController";
import {
  getAllPosts,
  getPost,
  increaseLikeCount,
  increaseViewCount,
} from "../controller/postController";


const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPost);
router.get("/:id/comments", getAllCommentsByPost)
router.put("/:id/like", increaseLikeCount);
router.put("/:id/view", increaseViewCount);


export const postRouter = router;