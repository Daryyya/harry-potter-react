import React from "react";
import Header from "../../Header";
import Form from "../../Form";
import Main from "../../Main";
import Preloader from "../../Preloader";
import Card from "../../Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = (props) => {
  const { liked, setLiked, like, dislike, data, setData, isLoading, isError} = props;

  
  

  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");



  

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

        {filteredList.map((item, index) => (
          <Card
            key={index}
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
