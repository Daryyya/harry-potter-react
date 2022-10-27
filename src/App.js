import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Liked from "./pages/Liked";

const savedLikes = JSON.parse(localStorage.getItem("likedNames")) ?? [];

function App() {
  const [liked, setLiked] = useState(savedLikes);
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const like = (name) => setLiked((p) => [...p, name]);
  const dislike = (name) => setLiked((p) => p.filter((elem) => elem !== name));

  useEffect(() => {
    localStorage.setItem("likedNames", JSON.stringify(liked));
  }, [liked]);

  useEffect(() => {
    async function getData() {
      try {
        const url = "http://hp-api.herokuapp.com/api/characters";
        const result = await (await fetch(url)).json();
        setIsLoading(false);
        setData(result);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);

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
            data={data}
            setData={setData}
            isLoading={isLoading}
            isError={isError}
          />
        }
      />
      <Route
        path="about"
        element={
          <Liked data={data} like={like} dislike={dislike} liked={liked} />
        }
      />
    </Routes>
  );
}

export default App;
