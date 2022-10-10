import { NotFoundError } from "../error/errors";
import { CommentRes } from "../types/types";
import { pool } from "./connection";

const SELECT_COMMENTS_BY_POST_ID = `SELECT * FROM comments WHERE postId = $1;`;
const SELECT_COMMENT_BY_ID = `SELECT * FROM comments WHERE id = $1;`;
const INSERT_COMMENT = `INSERT INTO comments (name, email, content, postId) 
                        VALUES ($1, $2, $3, $4) RETURNING *;`;

export const getAllByPost = async (postId: string) => {
  const results = await pool.query(SELECT_COMMENTS_BY_POST_ID, [postId]);
  return results.rows;
};

export const getById = async (id: string) => {
  const result = await pool.query(SELECT_COMMENT_BY_ID, [id]);
  if (!result.rows[0]) {
    throw new NotFoundError({
      message: `The comment with the id: ${id} not found in the database.`,
    });
  }
  return result.rows[0];
};


export const save = async (postId: string, comment: CommentRes) => {
  const result = await pool.query(INSERT_COMMENT, [
    comment.name,
    comment.email,
    comment.content,
    postId,
  ]);
  return result.rows[0];
};


export default {
  getAllByPost,
  getById,
  save,
};