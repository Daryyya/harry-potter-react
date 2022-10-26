import React from "react";
import Header from "../../Header";
import Form from "../../Form";
import Main from "../../Main";
import Preloader from "../../Preloader";
import Card from "../../Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
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

  let filter = data
    .filter(
      ({ name }) =>
        !inputValue || name.toLowerCase().trim().includes(inputValue)
    )
    .filter(
      ({ house }) => !selectValue || house.toLowerCase().trim() === selectValue
    );
  console.log(filter);
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

        {filter.map(
          ({ actor, name, gender, house, wand, image, alive }, index) => (
            <Card
              key={index}
              image={image}
              actor={actor}
              name={name}
              gender={gender}
              house={house}
              wand={wand.core}
              alive={alive}
            />
          )
        )}
      </Main>
    </>
  );
};

export default Home;
