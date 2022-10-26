import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Liked from "./pages/Liked";

const savedLikes = JSON.parse(localStorage.getItem("likedNames")) ?? [];

function App() {
  const [liked, setLiked] = useState(savedLikes);
  const like = (name) => setLiked((p) => [...p, name]);
  const dislike = (name) => setLiked((p) => p.filter((elem) => elem !== name));

  useEffect(() => {
    localStorage.setItem("likedNames", JSON.stringify(liked));
  }, [liked]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            like={like}
            dislike={dislike}
            liked={liked}
            setLiked={setLiked}
          />
        }
      />
      <Route path="about" element={<Liked />} />
    </Routes>
  );
}

export default App;
