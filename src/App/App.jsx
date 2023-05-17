import { useEffect, useState } from "react";
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
    {
      title: "My rocket",
      content: "Look, I built a new rocket",
      author: "Elon Musk",
      likes: 0,
    },
    {
      title: "My rocket",
      content: "Look, I built a new rocket",
      author: "Elon Musk",
      likes: 0,
    },
  ]);

  const updateLike = (key) => {
    setPost([...post], (post[key].likes += 1));
    console.log(post[key].likes);
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
          handleClick={() => updateLike(key)}
        />
      );
    });
  };

  return <div className="containerApp">{displayPost()}</div>;
}

export default App;
