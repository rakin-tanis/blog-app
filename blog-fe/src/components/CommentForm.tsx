import { useContext, useState } from "react";
import { CommentContext } from "../contexts/commentContext";

const CommentForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [content, setComment] = useState('')

  const { addNewComment } = useContext(CommentContext)

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    addNewComment({ name, email, content })
    setName("")
    setEmail("")
    setComment('')
    event.preventDefault();
  }

  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <input type='text' name="name" placeholder="name*" value={name} onChange={(e) => setName(e.target.value)} />
      <input type='email' name="mail" placeholder="email*" value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea name="content" placeholder="comment*" value={content} onChange={(e) => setComment(e.target.value)} />
      <button className="btn btn-4" type="submit" disabled={!name || !email || !content}>
        <span>Send</span> {/* <FontAwesomeIcon icon={["far", "comment-arrow-up-right"]} /> */}
      </button>
    </form>
  );
};

export default CommentForm;
