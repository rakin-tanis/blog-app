import express from "express";
import dotenv from "dotenv";
import { postRouter } from "./router/postRouter";
import { commentRouter } from "./router/commentRouter";
import { advisor } from "./middleware/advisor";
import { notFoundRouter } from "./router/notFoundRouter";
import cors from "cors";

const app = express();
dotenv.config();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);
app.use("*", notFoundRouter)

app.use(advisor);

export default app;
