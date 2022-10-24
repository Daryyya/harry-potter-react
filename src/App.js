import Form from "./Form";
import Header from "./Header";
import Main from "./Main";
import { data } from "./hp.js";
import Card from "./Card";
import { useState } from "react";

function App() {
  const [localst, setLocalst] = useState([])
  const [ch, setCh] = useState('');

  console.log(localst)
  return (
    <>
      <Header>
        <Form />
      </Header>
      <Main>
        {data.map(({ actor, name, gender, house, wand, image, alive,  }) => (
          <Card setCh={setCh}
          setLocalst={setLocalst}
          ch={ch}
          localst={localst}
            key={name}
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
