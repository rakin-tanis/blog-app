import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { PostContext } from "../contexts/postContext";
import { useFavorites } from "../hooks/useFavorites";
import { useLike } from "../hooks/useLike";

const ButtonBar = () => {
  const { post } = useContext(PostContext)
  const { isFav, toggleFav } = useFavorites();
  const { isLiked, toggleLike } = useLike();

  return (
    <div className="buttonBar">
      
      <div className="button likeButton">
        <span>{post?.likeCount}</span>
        <div className="icon" onClick={() => post && toggleLike(post.id)} >
          {isLiked(post?.id) 
            ? <FontAwesomeIcon icon={["fas", "heart"]} size='2x' color="red" /> 
            : <FontAwesomeIcon icon={["far", "heart"]} size='2x' />}
        </div>
      </div>

      <div className="button">
        <span>{post?.viewCount}</span>
        <FontAwesomeIcon icon={["fas", "eye"]} size='2x' />
      </div>

      <div className="button favButton">
        <div className="icon" onClick={() => toggleFav(post?.id)} >
        {isFav(post?.id) 
            ? <FontAwesomeIcon icon={["fas", "star"]} size='2x' color="orange" /> 
            : <FontAwesomeIcon icon={["far", "star"]} size='2x' />}
        </div>
      </div>
      
    </div>
  );
};

export default ButtonBar;
