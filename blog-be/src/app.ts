import express from "express";
import dotenv from "dotenv";
import { postRouter } from "./router/postRouter";
import { commentRouter } from "./router/commentRouter";
import { advisor } from "./middleware/advisor";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/post', postRouter);
app.use('/api/comment', commentRouter);

app.use(advisor);

export default app;