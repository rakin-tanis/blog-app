import express from "express";
import { getAllCommentsByPost } from "../controller/commentController";
import {
  addPost,
  decreaseLikeCount,
  getAllPosts,
  getPost,
  increaseLikeCount,
  increaseViewCount,
  searchPost,
} from "../controller/postController";
import { upload } from "../config/fileUploadConfig";

const router = express.Router();

router.get("/", getAllPosts);
router.post('/', upload.single('image'), addPost)
router.get("/search", searchPost);
router.get("/comments/:id", getAllCommentsByPost)
router.get("/:id", getPost);
router.put("/like/:id", increaseLikeCount);
router.put("/dislike/:id", decreaseLikeCount);
router.put("/view/:id", increaseViewCount);


export const postRouter = router;