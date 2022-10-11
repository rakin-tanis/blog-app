import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { PostContext } from "../contexts/postContext";
import { useLike } from "../hooks/useLike";

const ButtonBar = () => {
  const { post } = useContext(PostContext)

  const { likeMutate } = useLike();

  const like = (postId: string) => {
    likeMutate(postId)
  }

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
