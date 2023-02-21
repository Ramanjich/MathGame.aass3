import './index.css'

const Navbar = props => {
  const {score, timer} = props
  return (
    <nav className="nav-container">
      <div className="logo-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo-image"
        />
      </div>
      <ul className="score-timer-container">
        <li className="score-container">
          <p className="score-para">
            Score:<span className="span-ele">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <div className="clock-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="clock-image"
            />
          </div>
          <p className="sec-para">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
