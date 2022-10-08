import express from "express";
import { addComment, getCommentById } from "../controller/commentController";

const router = express.Router();

router.get("/:id", getCommentById);
router.post("/:postId", addComment);

export const commentRouter = router;