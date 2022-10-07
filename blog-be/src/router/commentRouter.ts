import express from "express";
import { addPost, getCommentById } from "../controller/commentController";

const router = express.Router();

router.get("/:id", getCommentById);
router.post("/:postId", addPost);

export const commentRouter = router;