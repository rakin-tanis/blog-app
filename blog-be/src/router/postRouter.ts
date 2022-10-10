import express from "express";
import { getAllCommentsByPost } from "../controller/commentController";
import {
  addPost,
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
router.get("/:id", getPost);
router.get("/comments/:id", getAllCommentsByPost)
router.put("/like/:id", increaseLikeCount);
router.put("/view/:id", increaseViewCount);


export const postRouter = router;