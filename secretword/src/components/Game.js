import './Game.css'; 

const Game = ( { verifyLetter }) => {
  return (
    <div className="game">
      <p className="points">
          <span>Pontuaçao: 000</span>
      </p>
      <h1>Adivinhea palavra:</h1>
        <h3 className="tip">
          Dica sobre a palavra: <span>Dica...</span>
        </h3>
        <div className="wordContainer">
          <span className="letter">a</span>
          <span className="blankSquare"></span>
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
