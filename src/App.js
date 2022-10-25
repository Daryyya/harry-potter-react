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


  return (
    <>
      <Header>
        <Form />
      </Header>
      <Main>
        {isLoading && <Preloader />}
        {isError && <p>ERRRRROR</p>}
        
        {data.map(({ actor, name, gender, house, wand, image, alive,  }, index) => (
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
