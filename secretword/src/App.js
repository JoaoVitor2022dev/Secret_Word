// css
import './App.css';

// react 
import {useCallback, useEffect , useState } from "react"; 

//data
import {wordsList} from "./data/words"; 

// components
import StartScreen from "./components/StartScreen";
import Game from './components/Game';
import GameOver from './components/GameOver';

const stage = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
];

function App () { 
   const [gamesStage, setgameStage] = useState(stage[0].name);   
    const [words] = useState(wordsList); 
      console.log(words);
  
  // start the secret word game     
  const startGame = () => {
     setgameStage(stage[1].name); 
  };    
  // process the latter input
  const verifyLetter = () => {
    setgameStage(stage[2].name); 
  };     
  // retarts the game 
  const retry = () => {
    setgameStage(stage[0].name); 
  };

  return (
    <div className="App">
      {gamesStage === "start" && <StartScreen startGame={startGame}/>}
      {gamesStage === "game" && <Game verifyLetter={verifyLetter}/>}
      {gamesStage === "end" && <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
