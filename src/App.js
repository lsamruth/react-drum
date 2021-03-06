import "./App.css";
import { drumData } from "./mock";

const convertFirstCharToUpperCase = (str) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};

const handleHighlight = (event) =>{
  if(event){
    event.target.setAttribute("style", "border:3px solid yellow");
    setTimeout(()=>{
      event.target.removeAttribute("style");
    },200)
  }
}
function App() {
  const playSound = (src,event) => {
    let audio = new Audio(src.audio);
    audio.play();
    handleHighlight(event);
  };
  let drums = drumData.map((i) => (
    <div className="key" key={i.key} onClick={(e) => playSound(i,e)}>
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
