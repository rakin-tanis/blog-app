import React from "react";
import { Post } from "../types/Post";

const PostItem = ({ post }: { post: Post }) => {
  return (post && <div>
    <h2>{post.title}</h2>
    <p><span>{post.author}</span> | <span>{post.createdate}</span></p>
    <p>{post.content}</p>
  </div>);
};

export default PostItem;
