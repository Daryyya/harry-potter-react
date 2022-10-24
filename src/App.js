import Form from "./Form";
import Header from "./Header";
import Main from "./Main";
import { data } from "./hp.js";
import Card from "./Card";

function App() {
  return (
    <>
      <Header>
        <Form />
      </Header>
      <Main>
        {data.map(({ actor, name, gender, house, wand, image, alive }) => (
          <Card
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
