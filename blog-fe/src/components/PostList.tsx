import { useContext } from "react";
import { PostContext } from "../contexts/postContext";
import { Post } from '../types/Post'
import PostItem from "./PostItem";

const PostList = () => {
  const { posts } = useContext(PostContext)

  return (posts && <div className="card-container">
    {posts.map((post: Post) => <PostItem key={post.id} post={post} />)}
  </div>);
};

export default PostList;
