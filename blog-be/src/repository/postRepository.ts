import { NotFoundError } from "../error/errors";
import { PostReq } from "../types/types";
import { pool } from "./connection";
import { postMapper } from "../utils/postMapper";

const SELECT_POSTS = `SELECT * FROM posts ORDER BY createdate DESC;`;
const SELECT_POST_BY_ID = `SELECT * FROM posts WHERE id = $1;`;
const UPDATE_POST_LIKE = `UPDATE posts SET likeCount = likeCount + 1 WHERE id = $1;`;
const UPDATE_POST_VIEW = `UPDATE posts SET viewCount = viewCount + 1 WHERE id = $1`;
const INSERT_POST = `INSERT INTO posts (title, author, content, category, image) 
                        VALUES ($1, $2, $3, $4, $5) RETURNING *;`;
const SEARCH_QUERY = `SELECT * FROM posts WHERE 
                        title LIKE $1 OR 
                        author LIKE $2 OR 
                        content LIKE $3;`;

export const getAll = async () => {
  const posts = await pool.query(SELECT_POSTS);
  return posts.rows.map(postMapper);
};

export const getById = async (id: string) => {
  const result = await pool.query(SELECT_POST_BY_ID, [id]);
  if (!result.rows[0]) {
    throw new NotFoundError({
      message: `The post with the id: ${id} not found in the database.`,
    });
  }
  return result.rows.map(postMapper)[0];
};

export const save = async (post: PostReq) => {
  const result = await pool.query(INSERT_POST, [
    post.title,
    post.author,
    post.content,
    post.category,
    post.image,
  ]);
  return result.rows.map(postMapper)[0];
};

export const like = async (id: string) => {
  const result = await pool.query(UPDATE_POST_LIKE, [id]);
  return result.rows.map(postMapper)[0]
}

export const view = async (id: string) => {
  const result = await pool.query(UPDATE_POST_VIEW, [id]);
  return result.rows.map(postMapper)[0]
}

export const search = async (searchText: string) => {
  const result = await pool.query(SEARCH_QUERY, [
    `%${searchText}%`,
    `%${searchText}%`,
    `%${searchText}%`,
  ]);
  return result.rows.map(postMapper);
};

export default {
  getAll,
  getById,
  like,
  view
};
