import { useState } from "react";
import "./App.css";
import Post from "../Components/Post";

function App() {
  const [post, setPost] = useState([
    {
      title: "My rocket",
      content: "Look, I built a new rocket",
      author: "Elon Musk",
      likes: 0,
    },
  ]);

  const updateLike = () => {
    post[0].likes += 1;
    setPost([...post]);
    console.log(post[0].likes);
  };

  const displayPost = () => {
    return post.map((e, key) => {
      return (
        <Post
          key={key}
          title={e.title}
          content={e.content}
          author={e.author}
          like={e.likes}
          handleClick={updateLike}
        />
      );
    });
  };

  return <div className="containerApp">{displayPost()}</div>;
}

export default App;
