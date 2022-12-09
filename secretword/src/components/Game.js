import './Game.css'; 

const Game = ( {
  verifyLetter, 
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) => {

  return (
    <div className="game">
      <p className="points">
          <span>Pontuaçao: {score}</span>
      </p>
      <h1>Adivinhea palavra:</h1>
        <h3 className="tip">
          Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>
          Voce tem ainda {guesses} tentativas(s).
        </p>
        <div className="wordContainer">
         {letters.map((letter, i) => ( 
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">{letter}</span>
          ) : (
            <span key={i} className='blankSquare'></span>
          )
          ))}
        </div>
        <div className="letterContainer">
          <p>Tente advinhar uma letra da palavra:</p>
           <form>
            <input type="text" name="letter" maxLength="1" required/>
             <button>Jogar</button>
           </form>
        </div>
        <div className="wrongLetterContainer">
           <p>Letras já ultilizadas</p>
            <span>A, </span>
            <span>b, </span>
        </div>
    </div>
  )
}

export default Game; 
