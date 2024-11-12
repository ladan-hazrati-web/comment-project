import { useState } from "react";
import styles from "./styles/CommentList.module.css";
function CommentList({ comment, addReply }) {
  const [showForm, setShowForm] = useState(false);
  const [replyText, setReplyText] = useState("");
  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (replyText.trim()) {
      addReply(comment.id, replyText);
      setReplyText("");
      setShowForm(false);
    }
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.commentEmail}>{comment.email}</h3>
      <p className={styles.commentBody}>{comment.body}</p>
      <button onClick={() => setShowForm((show) => !show)}>
        {showForm ? "Cancel Reply" : "Reply"}
      </button>
      {showForm && (
        <form onSubmit={handleSubmitForm}>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            className={styles.inputReply}
            placeholder="write your reply"
          />
          <button type="submit">Submit Reply</button>
        </form>
      )}
      {comment.replies.length > 0 && (
        <div className={styles.containerReply}>
          <h2>Replies:</h2>
          {comment.replies.map((reply) => (
            <div key={reply.id} className={styles.reply}>
              <h3 className={styles.emailReply}>{reply.email}</h3>
              <p className={styles.bodyReply}>{reply.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CommentList;
