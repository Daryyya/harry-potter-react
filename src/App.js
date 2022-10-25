import Form from "./Form";
import Header from "./Header";
import Main from "./Main";
import { data as card } from "./hp.js";
import Card from "./Card";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";

function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const url = 'http://hp-api.herokuapp.com/api/characters';
        const result = await(await fetch(url)).json();
        setIsLoading(false);
        setData(result);
      } catch(e) {
        console.log(e)
        setIsLoading(false)
        setIsError(true)
      }
    }
    getData()
  }, [])

  
  let filter = data.filter(({name}) => !inputValue || name.toLowerCase().trim().includes(inputValue)).filter(({house}) => !selectValue || house.toLowerCase().trim() === selectValue);
  console.log(filter)


  return (
    <>
      <Header>
        <Form setInputValue={setInputValue} setSelectValue={setSelectValue}/>
      </Header>
      <Main>
        {isLoading && <Preloader />}
        {isError && <p>ERRRRROR</p>}
        
        {filter.map(({ actor, name, gender, house, wand, image, alive,  }, index) => (
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
        ))}
      </Main>
    </>
  );
}

export default App;
