// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  const play = () => {
    playAgain()
  }

  return (
    <div className="result-container">
      <div className="s-container">
        <h1 className="heading">{score === 12 ? 'You Won' : 'You Lose'}</h1>
        <p className="text"> {score === 12 ? 'Best Score' : 'Score'}</p>
        <p className="score">{score}/12</p>
        <button type="button" className="playAgain" onClick={play}>
          Play Again
        </button>
      </div>
      <div>
        {score === 12 ? (
          <img
            className="lose-img"
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
          />
        ) : (
          <img
            className="lose-img"
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
          />
        )}
      </div>
    </div>
  )
}

export default WinOrLoseCard
