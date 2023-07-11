// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, stillPlaying} = props

  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="title">Emoji Game</h1>
      </div>

      {stillPlaying && (
        <div className="score-container">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
