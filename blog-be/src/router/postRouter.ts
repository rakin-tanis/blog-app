import express from "express";
import { getAllCommentsByPost } from "../controller/commentController";
import {
  addPost,
  getAllPosts,
  getPost,
  increaseLikeCount,
  increaseViewCount,
} from "../controller/postController";


const router = express.Router();

router.get("/", getAllPosts);
router.post('/', addPost)
router.get("/:id", getPost);
router.get("/comments/:id", getAllCommentsByPost)
router.put("/like/:id", increaseLikeCount);
router.put("/view/:id", increaseViewCount);


export const postRouter = router;