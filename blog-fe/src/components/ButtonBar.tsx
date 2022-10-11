import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { PostContext } from "../contexts/postContext";
import { Post } from "../types/Post";

const ButtonBar = (/* { post }: { post: Post } */) => {
  const {post, like, view, search} = useContext(PostContext)

  const save = () => {
    console.log('save')
  }

  return (
    <div className="buttonBar">
      
      <div className="button">
        <span>{post?.likeCount}</span>
        <div className="icon" onClick={() => post && like(post.id)} >
          <FontAwesomeIcon icon={["far", "heart"]} size='2x' />
        </div>
      </div>

      <div className="button">
        <span>{post?.viewCount}</span>
        <FontAwesomeIcon icon={["fas", "eye"]} size='2x' />
      </div>

      <div className="button">
        <div className="icon" onClick={save} >
          <FontAwesomeIcon icon={["far", "bookmark"]} size='2x' />
        </div>
      </div>
      
    </div>
  );
};

export default ButtonBar;
