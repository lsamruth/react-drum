import "./App.css";
import { drumData } from "./mock";

const convertFirstCharToUpperCase = (str) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

function App() {
  const playSound = (src) => {
    let audio = new Audio(src.audio);
    audio.play();
  };
  let drums = drumData.map((i) => (
    <div className="key" key={i.key} onClick={() => playSound(i)}>
      {i.key}
      <p className="audio">{convertFirstCharToUpperCase(i.name)}</p>
    </div>
  ));
  return (
    <div className="App">
      <div className="key-container">{drums}</div>
    </div>
  );
}

export default App;
