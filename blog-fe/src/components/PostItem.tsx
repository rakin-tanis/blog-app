import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { Link } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";
import { Post } from "../types/Post";

const PostItem = ({ post }: { post: Post }) => {

  const { isFav, toggleFav } = useFavorites();

  return (post && <div className="card">
    <img className="postImage" src={`${process.env.REACT_APP_API_URL}/image?name=${post.image}`} alt={post.title} />
    <div className="content">
      <h3>{post.title}</h3>
      <p>
        <span>{post.author}</span> | {' '}
        <span>{moment(post?.createDate).format("MMMM Do YYYY, HH:mm:ss")}</span>
      </p>
      <p>{`${post.content.substring(0, 200)}... `}<Link className="readMore" to={`/post/${post.id}`}>{'<read more>'}</Link></p>
      <div className="cardInfo">
        <div className="items">
          <div className="item">
            <FontAwesomeIcon icon={["fas", "heart"]} size='2x' />
            <span>{post.likeCount}</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={["fas", "eye"]} size='2x' />
            <span>{post.viewCount}</span>
          </div>
          <div className="item">
            <div className="button favButton">
              <div className="icon" onClick={() => toggleFav(post?.id)} >
                {isFav(post?.id)
                  ? <FontAwesomeIcon icon={["fas", "star"]} size='2x' color="orange" />
                  : <FontAwesomeIcon icon={["far", "star"]} size='2x' />}
              </div>
            </div>
          </div>
        </div>
        <div className="paddle">

        </div>
      </div>
    </div>
  </div>);
};

export default PostItem;
