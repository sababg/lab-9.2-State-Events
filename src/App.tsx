import "./App.css";
import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";

function App() {
  return (
    <>
      <CharacterCounter maxWords={100} minWords={25} />
    </>
  );
}

export default App;
