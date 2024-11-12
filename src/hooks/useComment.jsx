import { useEffect, useState } from "react";

function useComment() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments?_limit=10"
        );
        if (!response.ok) {
          throw new Error("FETCH FAILED");
        }
        const json = await response.json();
        setComments(json.map((comment) => ({ ...comment, replies: [] })));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, []);

  const addReply = (commentId, replyText) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? {
              ...comment,
              replies: [
                ...comment.replies,
                {
                  id: Math.random(),
                  body: replyText,
                  email: "user@example.com",
                },
              ],
            }
          : comment
      )
    );
  };

  return { loading, error, comments, addReply };
}

export default useComment;
