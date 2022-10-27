import React from "react";
import Header from "../../Header";
import Form from "../../Form";
import Main from "../../Main";
import Preloader from "../../Preloader";
import Card from "../../Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = (props) => {
  const { liked, setLiked, like, dislike } = props;

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

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

  let filteredList = data.filter(({ name, house }) => {
    const isNameFit =
      !inputValue || name.toLowerCase().includes(inputValue);
    const isHouseFit =
      !selectValue || house.toLowerCase().trim() === selectValue;

    return isNameFit && isHouseFit;
  });
  return (
    <>
      <Header>
        <Form setInputValue={setInputValue} setSelectValue={setSelectValue} />
      </Header>
      <Main>
        <Link to="/about">
          <button>CLICK</button>
        </Link>
        {isLoading && <Preloader />}
        {isError && <p>ERRRRROR</p>}

        {filteredList.map((item) => (
          <Card
            key={`${item.name}-${item.image}-${item.gender}`}
            item={item}
            isLiked={liked?.includes(item.name)}
            like={like}
            dislike={dislike}
          />
        ))}
      </Main>
    </>
  );
};

export default Home;
