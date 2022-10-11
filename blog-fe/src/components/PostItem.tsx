import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Post } from "../types/Post";

const PostItem = ({ post }: { post: Post }) => {

  const like = () => {
    console.log('like')
  }
  
  const save = () => {
    console.log('save')
  }
  
  return (post && <div className="card">
    <img className="postImage" src={`${process.env.REACT_APP_API_URL}/image?name=${post.image}`} alt={post.title} />
    <div className="content">
      <h3>{post.title}</h3>
      <p><span>{post.author}</span> | <span>{post.createDate}</span></p>
      <p>{`${post.content.substring(0, 200)}... `}<Link className="readMore" to={`/post/${post.id}`}>{'<read more>'}</Link></p>
      <div className="cardInfo">
        <div className="items">
          <div className="item">
            <div className="icon" onClick={like} >
              <FontAwesomeIcon icon={["far", "heart"]} size='2x' />
            </div>
            <span>{post.likeCount}</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={["fas", "eye"]} size='2x' />
            <span>{post.viewCount}</span>
          </div>
          <div className="item">
            <div className="icon" onClick={save} >
              <FontAwesomeIcon icon={["far", "bookmark"]} size='2x' />
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
