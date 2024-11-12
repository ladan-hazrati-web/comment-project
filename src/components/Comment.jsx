import CommentList from "./CommentList";
import styles from "./styles/Comment.module.css";
function Comment({ comments, addReply }) {
  return (
    <div className={styles.container}>
      <h1>Comment Display</h1>
      {comments.map((comment) => (
        <CommentList key={comment.id} comment={comment} addReply={addReply} />
      ))}
    </div>
  );
}

export default Comment;
