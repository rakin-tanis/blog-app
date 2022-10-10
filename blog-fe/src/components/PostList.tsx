import React from "react";
import { Post } from '../types/Post'
import PostItem from "./PostItem";

const PostList = ({posts}:{ posts: Array<Post> }) => {
  return (posts && <div>
    {posts.map((post: Post) => <PostItem key={post.id} post={post} />)}
  </div>);
};

export default PostList;
