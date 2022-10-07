import { NotFoundError } from "../error/errors";
import { pool } from "./connection";

const SELECT_POSTS = `SELECT * FROM posts;`;
const SELECT_POST_BY_ID = `SELECT * FROM posts WHERE id = $1;`;
const UPDATE_POST_LIKE = `UPDATE posts SET likeCount = likeCount + 1 WHERE id = $1;`;
const UPDATE_POST_VIEW = `UPDATE posts SET viewCount = viewCount + 1 WHERE id = $1`;

export const getAll = async () => {
  const posts = await pool.query(SELECT_POSTS);
  return posts.rows;
};

export const getById = async (id: string) => {
  const post = await pool.query(SELECT_POST_BY_ID, [id]);
  if (!post.rows[0]) {
    throw new NotFoundError({
      message: `The post with the id: ${id} not found in the database.`,
    });
  }
  return post.rows[0];
};

export const like = async (id: string) => {
  const result = await pool.query(UPDATE_POST_LIKE, [id]);
  return result.rows[0]
}

export const view = async (id: string) => {
  const result = await pool.query(UPDATE_POST_VIEW, [id]);
  return result.rows[0]
}

export default {
  getAll,
  getById,
  like,
  view
};
