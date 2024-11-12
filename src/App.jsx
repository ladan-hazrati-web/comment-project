import Comment from "./components/Comment";
import useComment from "./hooks/useComment";

function App() {
  const { loading, error, comments, addReply } = useComment();

  if (error) return <p className="error">{error}</p>;
  if (loading) return <p className="loading">loading comments</p>;
  return (
    <main>
      <Comment comments={comments} addReply={addReply} />
    </main>
  );
}

export default App;
