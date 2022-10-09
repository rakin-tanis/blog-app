import express from "express";
import { NotFoundError } from "../error/errors";

const router = express.Router();

router.get("*", (req, res, next) =>
  next(new NotFoundError({ message: `path not found` }))
);

export const notFoundRouter = router;