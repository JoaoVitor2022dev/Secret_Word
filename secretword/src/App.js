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
      
   const [pickedWord, setPickedWord] = useState(""); 
   const [pickedCategory, setPickedCategory] = useState(""); 
   const [letters, setLetters] = useState([]); 

   const pickWordAndCategory = () => {
    // pick random category... 
    
    const categories = Object.keys(words);
     const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]; 
      console.log(category); 

   // pick random word 
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    console.log(word); 

    return {word,category}; 
   };   

  // start the secret word game     
  const startGame = () => {
   // pick word and pick category
     const { word , category } = pickWordAndCategory();
  
  // create an array of letters 
     let wordLetters = word.split(""); 
   
      wordLetters = wordLetters.map( (i)=> i.toLowerCase()); 
     
     console.log(word, category);
     console.log(wordLetters);

    // fill states 
    setPickedWord(word); 
    setPickedCategory(category); 
    setLetters(letters); 
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
